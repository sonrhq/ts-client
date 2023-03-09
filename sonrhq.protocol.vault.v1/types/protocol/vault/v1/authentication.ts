/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { DidDocument } from "../../../core/identity/v1/did";
import { AccountInfo } from "./models";

export const protobufPackage = "sonrhq.protocol.vault.v1";

/** RegisterStartRequest is the request to register a new account. */
export interface RegisterStartRequest {
  origin: string;
  deviceLabel: string;
  securityThreshold: number;
  passcode: string;
  uuid: string;
}

/** RegisterStartResponse is the response to a Register request. */
export interface RegisterStartResponse {
  creationOptions: string;
  sessionId: string;
}

/** RegisterFinishRequest is the request to CreateAccount a new key from the private key. */
export interface RegisterFinishRequest {
  sessionId: string;
  credentialResponse: string;
}

/** RegisterFinishResponse is the response to a CreateAccount request. */
export interface RegisterFinishResponse {
  id: Uint8Array;
  address: string;
  didDocument: DidDocument | undefined;
  accountInfo: AccountInfo | undefined;
  ucanTokenHeader: Uint8Array;
}

/** LoginStartRequest is the request to login to an account. */
export interface LoginStartRequest {
  origin: string;
  accountAddress: string;
}

/** LoginStartResponse is the response to a Login request. */
export interface LoginStartResponse {
  success: boolean;
  accountAddress: string;
  aka: string;
  credentialOptions: string;
}

/** LoginFinishRequest is the request to login to an account. */
export interface LoginFinishRequest {
  accountAddress: string;
  credentialResponse: string;
}

/** LoginFinishResponse is the response to a Login request. */
export interface LoginFinishResponse {
  success: boolean;
  accountAddress: string;
  didDocument: DidDocument | undefined;
  accountInfo: AccountInfo | undefined;
  ucanTokenHeader: Uint8Array;
}

function createBaseRegisterStartRequest(): RegisterStartRequest {
  return { origin: "", deviceLabel: "", securityThreshold: 0, passcode: "", uuid: "" };
}

export const RegisterStartRequest = {
  encode(message: RegisterStartRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== "") {
      writer.uint32(10).string(message.origin);
    }
    if (message.deviceLabel !== "") {
      writer.uint32(18).string(message.deviceLabel);
    }
    if (message.securityThreshold !== 0) {
      writer.uint32(24).int32(message.securityThreshold);
    }
    if (message.passcode !== "") {
      writer.uint32(34).string(message.passcode);
    }
    if (message.uuid !== "") {
      writer.uint32(42).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterStartRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterStartRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origin = reader.string();
          break;
        case 2:
          message.deviceLabel = reader.string();
          break;
        case 3:
          message.securityThreshold = reader.int32();
          break;
        case 4:
          message.passcode = reader.string();
          break;
        case 5:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterStartRequest {
    return {
      origin: isSet(object.origin) ? String(object.origin) : "",
      deviceLabel: isSet(object.deviceLabel) ? String(object.deviceLabel) : "",
      securityThreshold: isSet(object.securityThreshold) ? Number(object.securityThreshold) : 0,
      passcode: isSet(object.passcode) ? String(object.passcode) : "",
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
    };
  },

  toJSON(message: RegisterStartRequest): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin);
    message.deviceLabel !== undefined && (obj.deviceLabel = message.deviceLabel);
    message.securityThreshold !== undefined && (obj.securityThreshold = Math.round(message.securityThreshold));
    message.passcode !== undefined && (obj.passcode = message.passcode);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterStartRequest>, I>>(object: I): RegisterStartRequest {
    const message = createBaseRegisterStartRequest();
    message.origin = object.origin ?? "";
    message.deviceLabel = object.deviceLabel ?? "";
    message.securityThreshold = object.securityThreshold ?? 0;
    message.passcode = object.passcode ?? "";
    message.uuid = object.uuid ?? "";
    return message;
  },
};

function createBaseRegisterStartResponse(): RegisterStartResponse {
  return { creationOptions: "", sessionId: "" };
}

export const RegisterStartResponse = {
  encode(message: RegisterStartResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creationOptions !== "") {
      writer.uint32(10).string(message.creationOptions);
    }
    if (message.sessionId !== "") {
      writer.uint32(18).string(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterStartResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterStartResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationOptions = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterStartResponse {
    return {
      creationOptions: isSet(object.creationOptions) ? String(object.creationOptions) : "",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
    };
  },

  toJSON(message: RegisterStartResponse): unknown {
    const obj: any = {};
    message.creationOptions !== undefined && (obj.creationOptions = message.creationOptions);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterStartResponse>, I>>(object: I): RegisterStartResponse {
    const message = createBaseRegisterStartResponse();
    message.creationOptions = object.creationOptions ?? "";
    message.sessionId = object.sessionId ?? "";
    return message;
  },
};

function createBaseRegisterFinishRequest(): RegisterFinishRequest {
  return { sessionId: "", credentialResponse: "" };
}

export const RegisterFinishRequest = {
  encode(message: RegisterFinishRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.credentialResponse !== "") {
      writer.uint32(18).string(message.credentialResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterFinishRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterFinishRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.credentialResponse = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterFinishRequest {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "",
      credentialResponse: isSet(object.credentialResponse) ? String(object.credentialResponse) : "",
    };
  },

  toJSON(message: RegisterFinishRequest): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.credentialResponse !== undefined && (obj.credentialResponse = message.credentialResponse);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterFinishRequest>, I>>(object: I): RegisterFinishRequest {
    const message = createBaseRegisterFinishRequest();
    message.sessionId = object.sessionId ?? "";
    message.credentialResponse = object.credentialResponse ?? "";
    return message;
  },
};

function createBaseRegisterFinishResponse(): RegisterFinishResponse {
  return {
    id: new Uint8Array(),
    address: "",
    didDocument: undefined,
    accountInfo: undefined,
    ucanTokenHeader: new Uint8Array(),
  };
}

export const RegisterFinishResponse = {
  encode(message: RegisterFinishResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.didDocument !== undefined) {
      DidDocument.encode(message.didDocument, writer.uint32(26).fork()).ldelim();
    }
    if (message.accountInfo !== undefined) {
      AccountInfo.encode(message.accountInfo, writer.uint32(34).fork()).ldelim();
    }
    if (message.ucanTokenHeader.length !== 0) {
      writer.uint32(42).bytes(message.ucanTokenHeader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterFinishResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterFinishResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.didDocument = DidDocument.decode(reader, reader.uint32());
          break;
        case 4:
          message.accountInfo = AccountInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.ucanTokenHeader = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterFinishResponse {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      address: isSet(object.address) ? String(object.address) : "",
      didDocument: isSet(object.didDocument) ? DidDocument.fromJSON(object.didDocument) : undefined,
      accountInfo: isSet(object.accountInfo) ? AccountInfo.fromJSON(object.accountInfo) : undefined,
      ucanTokenHeader: isSet(object.ucanTokenHeader) ? bytesFromBase64(object.ucanTokenHeader) : new Uint8Array(),
    };
  },

  toJSON(message: RegisterFinishResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    message.address !== undefined && (obj.address = message.address);
    message.didDocument !== undefined
      && (obj.didDocument = message.didDocument ? DidDocument.toJSON(message.didDocument) : undefined);
    message.accountInfo !== undefined
      && (obj.accountInfo = message.accountInfo ? AccountInfo.toJSON(message.accountInfo) : undefined);
    message.ucanTokenHeader !== undefined
      && (obj.ucanTokenHeader = base64FromBytes(
        message.ucanTokenHeader !== undefined ? message.ucanTokenHeader : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterFinishResponse>, I>>(object: I): RegisterFinishResponse {
    const message = createBaseRegisterFinishResponse();
    message.id = object.id ?? new Uint8Array();
    message.address = object.address ?? "";
    message.didDocument = (object.didDocument !== undefined && object.didDocument !== null)
      ? DidDocument.fromPartial(object.didDocument)
      : undefined;
    message.accountInfo = (object.accountInfo !== undefined && object.accountInfo !== null)
      ? AccountInfo.fromPartial(object.accountInfo)
      : undefined;
    message.ucanTokenHeader = object.ucanTokenHeader ?? new Uint8Array();
    return message;
  },
};

function createBaseLoginStartRequest(): LoginStartRequest {
  return { origin: "", accountAddress: "" };
}

export const LoginStartRequest = {
  encode(message: LoginStartRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== "") {
      writer.uint32(10).string(message.origin);
    }
    if (message.accountAddress !== "") {
      writer.uint32(18).string(message.accountAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginStartRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginStartRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origin = reader.string();
          break;
        case 2:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginStartRequest {
    return {
      origin: isSet(object.origin) ? String(object.origin) : "",
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
    };
  },

  toJSON(message: LoginStartRequest): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoginStartRequest>, I>>(object: I): LoginStartRequest {
    const message = createBaseLoginStartRequest();
    message.origin = object.origin ?? "";
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
};

function createBaseLoginStartResponse(): LoginStartResponse {
  return { success: false, accountAddress: "", aka: "", credentialOptions: "" };
}

export const LoginStartResponse = {
  encode(message: LoginStartResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.accountAddress !== "") {
      writer.uint32(18).string(message.accountAddress);
    }
    if (message.aka !== "") {
      writer.uint32(26).string(message.aka);
    }
    if (message.credentialOptions !== "") {
      writer.uint32(34).string(message.credentialOptions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginStartResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginStartResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.accountAddress = reader.string();
          break;
        case 3:
          message.aka = reader.string();
          break;
        case 4:
          message.credentialOptions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginStartResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      aka: isSet(object.aka) ? String(object.aka) : "",
      credentialOptions: isSet(object.credentialOptions) ? String(object.credentialOptions) : "",
    };
  },

  toJSON(message: LoginStartResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.aka !== undefined && (obj.aka = message.aka);
    message.credentialOptions !== undefined && (obj.credentialOptions = message.credentialOptions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoginStartResponse>, I>>(object: I): LoginStartResponse {
    const message = createBaseLoginStartResponse();
    message.success = object.success ?? false;
    message.accountAddress = object.accountAddress ?? "";
    message.aka = object.aka ?? "";
    message.credentialOptions = object.credentialOptions ?? "";
    return message;
  },
};

function createBaseLoginFinishRequest(): LoginFinishRequest {
  return { accountAddress: "", credentialResponse: "" };
}

export const LoginFinishRequest = {
  encode(message: LoginFinishRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.credentialResponse !== "") {
      writer.uint32(18).string(message.credentialResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFinishRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFinishRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 2:
          message.credentialResponse = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginFinishRequest {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      credentialResponse: isSet(object.credentialResponse) ? String(object.credentialResponse) : "",
    };
  },

  toJSON(message: LoginFinishRequest): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.credentialResponse !== undefined && (obj.credentialResponse = message.credentialResponse);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoginFinishRequest>, I>>(object: I): LoginFinishRequest {
    const message = createBaseLoginFinishRequest();
    message.accountAddress = object.accountAddress ?? "";
    message.credentialResponse = object.credentialResponse ?? "";
    return message;
  },
};

function createBaseLoginFinishResponse(): LoginFinishResponse {
  return {
    success: false,
    accountAddress: "",
    didDocument: undefined,
    accountInfo: undefined,
    ucanTokenHeader: new Uint8Array(),
  };
}

export const LoginFinishResponse = {
  encode(message: LoginFinishResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.accountAddress !== "") {
      writer.uint32(18).string(message.accountAddress);
    }
    if (message.didDocument !== undefined) {
      DidDocument.encode(message.didDocument, writer.uint32(26).fork()).ldelim();
    }
    if (message.accountInfo !== undefined) {
      AccountInfo.encode(message.accountInfo, writer.uint32(34).fork()).ldelim();
    }
    if (message.ucanTokenHeader.length !== 0) {
      writer.uint32(42).bytes(message.ucanTokenHeader);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFinishResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFinishResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.accountAddress = reader.string();
          break;
        case 3:
          message.didDocument = DidDocument.decode(reader, reader.uint32());
          break;
        case 4:
          message.accountInfo = AccountInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.ucanTokenHeader = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginFinishResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      didDocument: isSet(object.didDocument) ? DidDocument.fromJSON(object.didDocument) : undefined,
      accountInfo: isSet(object.accountInfo) ? AccountInfo.fromJSON(object.accountInfo) : undefined,
      ucanTokenHeader: isSet(object.ucanTokenHeader) ? bytesFromBase64(object.ucanTokenHeader) : new Uint8Array(),
    };
  },

  toJSON(message: LoginFinishResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.didDocument !== undefined
      && (obj.didDocument = message.didDocument ? DidDocument.toJSON(message.didDocument) : undefined);
    message.accountInfo !== undefined
      && (obj.accountInfo = message.accountInfo ? AccountInfo.toJSON(message.accountInfo) : undefined);
    message.ucanTokenHeader !== undefined
      && (obj.ucanTokenHeader = base64FromBytes(
        message.ucanTokenHeader !== undefined ? message.ucanTokenHeader : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoginFinishResponse>, I>>(object: I): LoginFinishResponse {
    const message = createBaseLoginFinishResponse();
    message.success = object.success ?? false;
    message.accountAddress = object.accountAddress ?? "";
    message.didDocument = (object.didDocument !== undefined && object.didDocument !== null)
      ? DidDocument.fromPartial(object.didDocument)
      : undefined;
    message.accountInfo = (object.accountInfo !== undefined && object.accountInfo !== null)
      ? AccountInfo.fromPartial(object.accountInfo)
      : undefined;
    message.ucanTokenHeader = object.ucanTokenHeader ?? new Uint8Array();
    return message;
  },
};

/** Vault is the service used for managing a node's keypair. */
export interface VaultAuthentication {
  /** LoginStart starts the login process and returns the credential options. */
  LoginStart(request: LoginStartRequest): Promise<LoginStartResponse>;
  /** LoginFinish finishes the login process and returns the account info. */
  LoginFinish(request: LoginFinishRequest): Promise<LoginFinishResponse>;
  /** RegisterStart creates a new Webauthn credential and returns it. */
  RegisterStart(request: RegisterStartRequest): Promise<RegisterStartResponse>;
  /** RegisterFinish creates a new Bip32 child key and returns the configuration. */
  RegisterFinish(request: RegisterFinishRequest): Promise<RegisterFinishResponse>;
}

export class VaultAuthenticationClientImpl implements VaultAuthentication {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LoginStart = this.LoginStart.bind(this);
    this.LoginFinish = this.LoginFinish.bind(this);
    this.RegisterStart = this.RegisterStart.bind(this);
    this.RegisterFinish = this.RegisterFinish.bind(this);
  }
  LoginStart(request: LoginStartRequest): Promise<LoginStartResponse> {
    const data = LoginStartRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.protocol.vault.v1.VaultAuthentication", "LoginStart", data);
    return promise.then((data) => LoginStartResponse.decode(new _m0.Reader(data)));
  }

  LoginFinish(request: LoginFinishRequest): Promise<LoginFinishResponse> {
    const data = LoginFinishRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.protocol.vault.v1.VaultAuthentication", "LoginFinish", data);
    return promise.then((data) => LoginFinishResponse.decode(new _m0.Reader(data)));
  }

  RegisterStart(request: RegisterStartRequest): Promise<RegisterStartResponse> {
    const data = RegisterStartRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.protocol.vault.v1.VaultAuthentication", "RegisterStart", data);
    return promise.then((data) => RegisterStartResponse.decode(new _m0.Reader(data)));
  }

  RegisterFinish(request: RegisterFinishRequest): Promise<RegisterFinishResponse> {
    const data = RegisterFinishRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.protocol.vault.v1.VaultAuthentication", "RegisterFinish", data);
    return promise.then((data) => RegisterFinishResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
