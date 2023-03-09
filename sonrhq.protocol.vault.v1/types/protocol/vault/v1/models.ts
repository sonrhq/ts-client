/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sonrhq.protocol.vault.v1";

/** Account is used for storing all credentials and their locations to be encrypted. */
export interface AccountInfo {
  /** Address is the associated Sonr address. */
  address: string;
  /** Credentials is a list of all credentials associated with the account. */
  network: string;
  /** Label is the label of the account. */
  label: string;
  /** Index is the index of the account. */
  index: number;
  /** Balance is the balance of the account. */
  balance: number;
}

export interface AccountConfig {
  /** Name is the name of the account. */
  name: string;
  /** multibase is the associated pubkey encoded in multibase. */
  multibase: string;
  /** PublicKey is the public key of the account. */
  publicKey: Uint8Array;
  /** CoinType is the coin type of the account. See https://github.com/satoshilabs/slips/blob/master/slip-0044.md for more information. */
  coinTypeIndex: number;
  /** CreatedAt is the time the account was created. */
  createdAt: number;
  /** Shares is a list of all shares associated with the account. */
  shares: Uint8Array[];
}

export interface WalletConfig {
  /** Address is the associated blockchain address. */
  address: string;
  /** PublicKey is the public key of the wallet. */
  publicKey: Uint8Array;
  /** Algorithm is the algorithm of the wallet. */
  algorithm: string;
  /** CID is the CID of the wallet. */
  cid: string;
  /** Accounts is the map of accounts associated with the wallet. */
  accounts: { [key: string]: AccountConfig };
}

export interface WalletConfig_AccountsEntry {
  key: string;
  value: AccountConfig | undefined;
}

function createBaseAccountInfo(): AccountInfo {
  return { address: "", network: "", label: "", index: 0, balance: 0 };
}

export const AccountInfo = {
  encode(message: AccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.index !== 0) {
      writer.uint32(32).uint32(message.index);
    }
    if (message.balance !== 0) {
      writer.uint32(40).int32(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.network = reader.string();
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.index = reader.uint32();
          break;
        case 5:
          message.balance = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      network: isSet(object.network) ? String(object.network) : "",
      label: isSet(object.label) ? String(object.label) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      balance: isSet(object.balance) ? Number(object.balance) : 0,
    };
  },

  toJSON(message: AccountInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.network !== undefined && (obj.network = message.network);
    message.label !== undefined && (obj.label = message.label);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountInfo>, I>>(object: I): AccountInfo {
    const message = createBaseAccountInfo();
    message.address = object.address ?? "";
    message.network = object.network ?? "";
    message.label = object.label ?? "";
    message.index = object.index ?? 0;
    message.balance = object.balance ?? 0;
    return message;
  },
};

function createBaseAccountConfig(): AccountConfig {
  return { name: "", multibase: "", publicKey: new Uint8Array(), coinTypeIndex: 0, createdAt: 0, shares: [] };
}

export const AccountConfig = {
  encode(message: AccountConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.multibase !== "") {
      writer.uint32(18).string(message.multibase);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(26).bytes(message.publicKey);
    }
    if (message.coinTypeIndex !== 0) {
      writer.uint32(32).int32(message.coinTypeIndex);
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    for (const v of message.shares) {
      writer.uint32(50).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.multibase = reader.string();
          break;
        case 3:
          message.publicKey = reader.bytes();
          break;
        case 4:
          message.coinTypeIndex = reader.int32();
          break;
        case 5:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.shares.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountConfig {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      multibase: isSet(object.multibase) ? String(object.multibase) : "",
      publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(),
      coinTypeIndex: isSet(object.coinTypeIndex) ? Number(object.coinTypeIndex) : 0,
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      shares: Array.isArray(object?.shares) ? object.shares.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: AccountConfig): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.multibase !== undefined && (obj.multibase = message.multibase);
    message.publicKey !== undefined
      && (obj.publicKey = base64FromBytes(message.publicKey !== undefined ? message.publicKey : new Uint8Array()));
    message.coinTypeIndex !== undefined && (obj.coinTypeIndex = Math.round(message.coinTypeIndex));
    message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
    if (message.shares) {
      obj.shares = message.shares.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.shares = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountConfig>, I>>(object: I): AccountConfig {
    const message = createBaseAccountConfig();
    message.name = object.name ?? "";
    message.multibase = object.multibase ?? "";
    message.publicKey = object.publicKey ?? new Uint8Array();
    message.coinTypeIndex = object.coinTypeIndex ?? 0;
    message.createdAt = object.createdAt ?? 0;
    message.shares = object.shares?.map((e) => e) || [];
    return message;
  },
};

function createBaseWalletConfig(): WalletConfig {
  return { address: "", publicKey: new Uint8Array(), algorithm: "", cid: "", accounts: {} };
}

export const WalletConfig = {
  encode(message: WalletConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(18).bytes(message.publicKey);
    }
    if (message.algorithm !== "") {
      writer.uint32(26).string(message.algorithm);
    }
    if (message.cid !== "") {
      writer.uint32(34).string(message.cid);
    }
    Object.entries(message.accounts).forEach(([key, value]) => {
      WalletConfig_AccountsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WalletConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.publicKey = reader.bytes();
          break;
        case 3:
          message.algorithm = reader.string();
          break;
        case 4:
          message.cid = reader.string();
          break;
        case 5:
          const entry5 = WalletConfig_AccountsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.accounts[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WalletConfig {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(),
      algorithm: isSet(object.algorithm) ? String(object.algorithm) : "",
      cid: isSet(object.cid) ? String(object.cid) : "",
      accounts: isObject(object.accounts)
        ? Object.entries(object.accounts).reduce<{ [key: string]: AccountConfig }>((acc, [key, value]) => {
          acc[key] = AccountConfig.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: WalletConfig): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.publicKey !== undefined
      && (obj.publicKey = base64FromBytes(message.publicKey !== undefined ? message.publicKey : new Uint8Array()));
    message.algorithm !== undefined && (obj.algorithm = message.algorithm);
    message.cid !== undefined && (obj.cid = message.cid);
    obj.accounts = {};
    if (message.accounts) {
      Object.entries(message.accounts).forEach(([k, v]) => {
        obj.accounts[k] = AccountConfig.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WalletConfig>, I>>(object: I): WalletConfig {
    const message = createBaseWalletConfig();
    message.address = object.address ?? "";
    message.publicKey = object.publicKey ?? new Uint8Array();
    message.algorithm = object.algorithm ?? "";
    message.cid = object.cid ?? "";
    message.accounts = Object.entries(object.accounts ?? {}).reduce<{ [key: string]: AccountConfig }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = AccountConfig.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseWalletConfig_AccountsEntry(): WalletConfig_AccountsEntry {
  return { key: "", value: undefined };
}

export const WalletConfig_AccountsEntry = {
  encode(message: WalletConfig_AccountsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AccountConfig.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WalletConfig_AccountsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletConfig_AccountsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = AccountConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WalletConfig_AccountsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? AccountConfig.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: WalletConfig_AccountsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? AccountConfig.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WalletConfig_AccountsEntry>, I>>(object: I): WalletConfig_AccountsEntry {
    const message = createBaseWalletConfig_AccountsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? AccountConfig.fromPartial(object.value)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
