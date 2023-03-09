// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { SonrClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgSubmitEvidence } from "./types/cosmos/evidence/v1beta1/tx";

import { Equivocation as typeEquivocation} from "./types"

export { MsgSubmitEvidence };

type sendMsgSubmitEvidenceParams = {
  value: MsgSubmitEvidence,
  fee?: StdFee,
  memo?: string
};


type msgSubmitEvidenceParams = {
  value: MsgSubmitEvidence,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {

		async sendMsgSubmitEvidence({ value, fee, memo }: sendMsgSubmitEvidenceParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSubmitEvidence: Unable to sign Tx. Signer is not present.')
			}
			try {
				const { address } = (await signer.getAccounts())[0];
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSubmitEvidence({ value: MsgSubmitEvidence.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSubmitEvidence: Could not broadcast Tx: '+ e.message)
			}
		},


		msgSubmitEvidence({ value }: msgSubmitEvidenceParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence", value: MsgSubmitEvidence.fromPartial( value ) }
			} catch (e: any) {
				throw new Error('TxClient:MsgSubmitEvidence: Could not create message: ' + e.message)
			}
		},

	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: SonrClient) {

		this.query = queryClient({ addr: client.env.apiURL });
		this.updateTX(client);
		this.structure =  {
						Equivocation: getStructure(typeEquivocation.fromPartial({})),

		};
		client.on('signer-changed',(signer) => {
		 this.updateTX(client);
		})
	}
	updateTX(client: SonrClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })

    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: SonrClient) => {
	return {
		module: {
			CosmosEvidenceV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;
