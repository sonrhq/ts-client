import { StdFee } from "@cosmjs/launchpad";
/// <reference path="./types.d.ts" />
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
import { EventEmitter } from "events";

import { Env } from "./env";
import { Constructor, Return, UnionToIntersection } from "./helpers";
import { Module } from "./modules";

const defaultFee = {
  amount: [],
  gas: "200000",
};

let defaultEnv = {
  rpcURL: "https//rpc.sonr.ws",
  apiURL: "https://api.sonr.ws",
  grpcURL: "142.93.116.204:9090",
  prefix: "snr",
};

export class SonrClient extends EventEmitter {
	static plugins: Module[] = [];
  env: Env;
  signer?: OfflineSigner;
  registry: Array<[string, GeneratedType]> = [];

  // plugin adds a plugin to the client
  static plugin<T extends Module | Module[]>(plugin: T) {
    const currentPlugins = this.plugins;

    class AugmentedClient extends this {
      static plugins = currentPlugins.concat(plugin);
    }

    if (Array.isArray(plugin)) {
      type Extension = UnionToIntersection<Return<T>['module']>
      return AugmentedClient as typeof SonrClient & Constructor<Extension>;
    }

    type Extension = Return<T>['module']
    return AugmentedClient as typeof SonrClient & Constructor<Extension>;
  }

  // constructor creates a new client
  constructor(signer?: OfflineSigner) {
    super();
    this.env = defaultEnv;
    this.setMaxListeners(0);
    this.signer = signer;
    const classConstructor = this.constructor as typeof SonrClient;
    classConstructor.plugins.forEach(plugin => {
      const pluginInstance = plugin(this);
      Object.assign(this, pluginInstance.module)
      if (this.registry) {
        this.registry = this.registry.concat(pluginInstance.registry)
      }
		});
  }


  // signAndBroadcast signs and broadcasts a transaction
  async signAndBroadcast(msgs: EncodeObject[], fee: StdFee, memo: string) {
    if (this.signer) {
      const { address } = (await this.signer.getAccounts())[0];
      const signingClient = await SigningStargateClient.connectWithSigner(this.env.rpcURL, this.signer, { registry: new Registry(this.registry), prefix: this.env.prefix });
      return await signingClient.signAndBroadcast(address, msgs, fee ? fee : defaultFee, memo)
    } else {
      throw new Error(" Signer is not present.");
    }
  }


  // useSigner sets the signer to the client
  useSigner(signer: OfflineSigner) {
      this.signer = signer;
      this.emit("signer-changed", this.signer);
  }

  // removeSigner removes the signer from the client
  removeSigner() {
      this.signer = undefined;
      this.emit("signer-changed", this.signer);
  }

  // useKeplr is a helper function to suggest a chain to Keplr extension
  async useKeplr(keplrChainInfo: Partial<ChainInfo> = {}) {
    // Using queryClients directly because BaseClient has no knowledge of the modules at this stage
    try {
      const queryClient = (
        await import("./cosmos.base.tendermint.v1beta1/module")
      ).queryClient;
      const stakingQueryClient = (
        await import("./cosmos.staking.v1beta1/module")
      ).queryClient;
      const bankQueryClient = (await import("./cosmos.bank.v1beta1/module"))
        .queryClient;

      const stakingqc = stakingQueryClient({ addr: this.env.apiURL });
      const qc = queryClient({ addr: this.env.apiURL });
      const node_info = await (await qc.serviceGetNodeInfo()).data;
      const chainId = node_info.default_node_info?.network ?? "";
      const chainName = chainId?.toUpperCase() + " Network";
      const staking = await (await stakingqc.queryParams()).data;
      const bankqc = bankQueryClient({ addr: this.env.apiURL });
      const tokens = await (await bankqc.queryTotalSupply()).data;
      const addrPrefix = this.env.prefix ?? "cosmos";
      const rpc = this.env.rpcURL;
      const rest = this.env.apiURL;
      let stakeCurrency = {
        coinDenom: staking.params?.bond_denom?.toUpperCase() ?? "",
        coinMinimalDenom: staking.params?.bond_denom ?? "",
        coinDecimals: 0,
      };

      let bip44 = {
        coinType: 118,
      };

      let bech32Config = {
        bech32PrefixAccAddr: addrPrefix,
        bech32PrefixAccPub: addrPrefix + "pub",
        bech32PrefixValAddr: addrPrefix + "valoper",
        bech32PrefixValPub: addrPrefix + "valoperpub",
        bech32PrefixConsAddr: addrPrefix + "valcons",
        bech32PrefixConsPub: addrPrefix + "valconspub",
      };

      let currencies =
        tokens.supply?.map((x) => {
          const y = {
            coinDenom: x.denom?.toUpperCase() ?? "",
            coinMinimalDenom: x.denom ?? "",
            coinDecimals: 0,
          };
          return y;
        }) ?? [];

      let feeCurrencies =
        tokens.supply?.map((x) => {
          const y = {
            coinDenom: x.denom?.toUpperCase() ?? "",
            coinMinimalDenom: x.denom ?? "",
            coinDecimals: 0,
          };
          return y;
        }) ?? [];

      let coinType = 118;

      if (chainId) {
        const suggestOptions: ChainInfo = {
          chainId,
          chainName,
          rpc,
          rest,
          stakeCurrency,
          bip44,
          bech32Config,
          currencies,
          feeCurrencies,
          coinType,
          ...keplrChainInfo,
        };

        if(typeof window !== "undefined") {

        await window.keplr.experimentalSuggestChain(suggestOptions);
        window.keplr.defaultOptions = {
            sign: {
              preferNoSetFee: true,
              preferNoSetMemo: true,
            },
          };

                await window.keplr.enable(chainId);
      this.signer = window.keplr.getOfflineSigner(chainId);
      this.emit("signer-changed", this.signer);
        }
      }

    } catch (e) {
      throw new Error(
        "Could not load tendermint, staking and bank modules. Please ensure your client loads them to use useKeplr()"
      );
    }
  }
}
