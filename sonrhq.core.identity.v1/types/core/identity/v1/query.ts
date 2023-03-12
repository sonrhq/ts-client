/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DidDocument, Service } from "./did";
import { Params } from "./genesis";

export const protobufPackage = "sonrhq.core.identity.v1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetDidRequest {
  /** did is the unique identifier of the DIDDocument - it appears like (did:sonr:...) */
  did: string;
}

export interface QueryGetDidResponse {
  /** A DIDDocument is a JSON-LD object that contains a set of public keys */
  didDocument: DidDocument | undefined;
}

export interface QueryDidByKeyIDRequest {
  /** key_id is the unique identifier of the DIDDocument - it appears like (did:sonr:...#key-1) */
  keyId: string;
}

export interface QueryDidByKeyIDResponse {
  /** A DIDDocument is a JSON-LD object that contains a set of public keys */
  didDocument: DidDocument | undefined;
}

export interface QueryDidByAlsoKnownAsRequest {
  /** aka_id is the unique identifier of the DIDDocument - it appears like ("example.snr") */
  akaId: string;
}

export interface QueryDidByAlsoKnownAsResponse {
  /** A DIDDocument is a JSON-LD object that contains a set of public keys */
  didDocument: DidDocument | undefined;
}

export interface QueryAllDidRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDidResponse {
  didDocument: DidDocument[];
  pagination: PageResponse | undefined;
}

export interface QueryGetServiceRequest {
  /** origin is the hostname of the calling service - it appears like ("test.com") */
  origin: string;
}

export interface QueryGetServiceResponse {
  /** A Service is a JSON-LD object that contains relaying information to authenticate a client */
  service: Service | undefined;
}

export interface QueryAllServiceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllServiceResponse {
  services: Service[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetDidRequest(): QueryGetDidRequest {
  return { did: "" };
}

export const QueryGetDidRequest = {
  encode(message: QueryGetDidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidRequest {
    return { did: isSet(object.did) ? String(object.did) : "" };
  },

  toJSON(message: QueryGetDidRequest): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidRequest>, I>>(object: I): QueryGetDidRequest {
    const message = createBaseQueryGetDidRequest();
    message.did = object.did ?? "";
    return message;
  },
};

function createBaseQueryGetDidResponse(): QueryGetDidResponse {
  return { didDocument: undefined };
}

export const QueryGetDidResponse = {
  encode(message: QueryGetDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didDocument !== undefined) {
      DidDocument.encode(message.didDocument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didDocument = DidDocument.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidResponse {
    return { didDocument: isSet(object.didDocument) ? DidDocument.fromJSON(object.didDocument) : undefined };
  },

  toJSON(message: QueryGetDidResponse): unknown {
    const obj: any = {};
    message.didDocument !== undefined
      && (obj.didDocument = message.didDocument ? DidDocument.toJSON(message.didDocument) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidResponse>, I>>(object: I): QueryGetDidResponse {
    const message = createBaseQueryGetDidResponse();
    message.didDocument = (object.didDocument !== undefined && object.didDocument !== null)
      ? DidDocument.fromPartial(object.didDocument)
      : undefined;
    return message;
  },
};

function createBaseQueryDidByKeyIDRequest(): QueryDidByKeyIDRequest {
  return { keyId: "" };
}

export const QueryDidByKeyIDRequest = {
  encode(message: QueryDidByKeyIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidByKeyIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidByKeyIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidByKeyIDRequest {
    return { keyId: isSet(object.keyId) ? String(object.keyId) : "" };
  },

  toJSON(message: QueryDidByKeyIDRequest): unknown {
    const obj: any = {};
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidByKeyIDRequest>, I>>(object: I): QueryDidByKeyIDRequest {
    const message = createBaseQueryDidByKeyIDRequest();
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseQueryDidByKeyIDResponse(): QueryDidByKeyIDResponse {
  return { didDocument: undefined };
}

export const QueryDidByKeyIDResponse = {
  encode(message: QueryDidByKeyIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didDocument !== undefined) {
      DidDocument.encode(message.didDocument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidByKeyIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidByKeyIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didDocument = DidDocument.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidByKeyIDResponse {
    return { didDocument: isSet(object.didDocument) ? DidDocument.fromJSON(object.didDocument) : undefined };
  },

  toJSON(message: QueryDidByKeyIDResponse): unknown {
    const obj: any = {};
    message.didDocument !== undefined
      && (obj.didDocument = message.didDocument ? DidDocument.toJSON(message.didDocument) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidByKeyIDResponse>, I>>(object: I): QueryDidByKeyIDResponse {
    const message = createBaseQueryDidByKeyIDResponse();
    message.didDocument = (object.didDocument !== undefined && object.didDocument !== null)
      ? DidDocument.fromPartial(object.didDocument)
      : undefined;
    return message;
  },
};

function createBaseQueryDidByAlsoKnownAsRequest(): QueryDidByAlsoKnownAsRequest {
  return { akaId: "" };
}

export const QueryDidByAlsoKnownAsRequest = {
  encode(message: QueryDidByAlsoKnownAsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.akaId !== "") {
      writer.uint32(10).string(message.akaId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidByAlsoKnownAsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidByAlsoKnownAsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.akaId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidByAlsoKnownAsRequest {
    return { akaId: isSet(object.akaId) ? String(object.akaId) : "" };
  },

  toJSON(message: QueryDidByAlsoKnownAsRequest): unknown {
    const obj: any = {};
    message.akaId !== undefined && (obj.akaId = message.akaId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidByAlsoKnownAsRequest>, I>>(object: I): QueryDidByAlsoKnownAsRequest {
    const message = createBaseQueryDidByAlsoKnownAsRequest();
    message.akaId = object.akaId ?? "";
    return message;
  },
};

function createBaseQueryDidByAlsoKnownAsResponse(): QueryDidByAlsoKnownAsResponse {
  return { didDocument: undefined };
}

export const QueryDidByAlsoKnownAsResponse = {
  encode(message: QueryDidByAlsoKnownAsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didDocument !== undefined) {
      DidDocument.encode(message.didDocument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidByAlsoKnownAsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidByAlsoKnownAsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didDocument = DidDocument.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDidByAlsoKnownAsResponse {
    return { didDocument: isSet(object.didDocument) ? DidDocument.fromJSON(object.didDocument) : undefined };
  },

  toJSON(message: QueryDidByAlsoKnownAsResponse): unknown {
    const obj: any = {};
    message.didDocument !== undefined
      && (obj.didDocument = message.didDocument ? DidDocument.toJSON(message.didDocument) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidByAlsoKnownAsResponse>, I>>(
    object: I,
  ): QueryDidByAlsoKnownAsResponse {
    const message = createBaseQueryDidByAlsoKnownAsResponse();
    message.didDocument = (object.didDocument !== undefined && object.didDocument !== null)
      ? DidDocument.fromPartial(object.didDocument)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDidRequest(): QueryAllDidRequest {
  return { pagination: undefined };
}

export const QueryAllDidRequest = {
  encode(message: QueryAllDidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDidRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllDidRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDidRequest>, I>>(object: I): QueryAllDidRequest {
    const message = createBaseQueryAllDidRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDidResponse(): QueryAllDidResponse {
  return { didDocument: [], pagination: undefined };
}

export const QueryAllDidResponse = {
  encode(message: QueryAllDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.didDocument) {
      DidDocument.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didDocument.push(DidDocument.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDidResponse {
    return {
      didDocument: Array.isArray(object?.didDocument)
        ? object.didDocument.map((e: any) => DidDocument.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDidResponse): unknown {
    const obj: any = {};
    if (message.didDocument) {
      obj.didDocument = message.didDocument.map((e) => e ? DidDocument.toJSON(e) : undefined);
    } else {
      obj.didDocument = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDidResponse>, I>>(object: I): QueryAllDidResponse {
    const message = createBaseQueryAllDidResponse();
    message.didDocument = object.didDocument?.map((e) => DidDocument.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetServiceRequest(): QueryGetServiceRequest {
  return { origin: "" };
}

export const QueryGetServiceRequest = {
  encode(message: QueryGetServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== "") {
      writer.uint32(10).string(message.origin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.origin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetServiceRequest {
    return { origin: isSet(object.origin) ? String(object.origin) : "" };
  },

  toJSON(message: QueryGetServiceRequest): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetServiceRequest>, I>>(object: I): QueryGetServiceRequest {
    const message = createBaseQueryGetServiceRequest();
    message.origin = object.origin ?? "";
    return message;
  },
};

function createBaseQueryGetServiceResponse(): QueryGetServiceResponse {
  return { service: undefined };
}

export const QueryGetServiceResponse = {
  encode(message: QueryGetServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = Service.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetServiceResponse {
    return { service: isSet(object.service) ? Service.fromJSON(object.service) : undefined };
  },

  toJSON(message: QueryGetServiceResponse): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service ? Service.toJSON(message.service) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetServiceResponse>, I>>(object: I): QueryGetServiceResponse {
    const message = createBaseQueryGetServiceResponse();
    message.service = (object.service !== undefined && object.service !== null)
      ? Service.fromPartial(object.service)
      : undefined;
    return message;
  },
};

function createBaseQueryAllServiceRequest(): QueryAllServiceRequest {
  return { pagination: undefined };
}

export const QueryAllServiceRequest = {
  encode(message: QueryAllServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllServiceRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllServiceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllServiceRequest>, I>>(object: I): QueryAllServiceRequest {
    const message = createBaseQueryAllServiceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllServiceResponse(): QueryAllServiceResponse {
  return { services: [], pagination: undefined };
}

export const QueryAllServiceResponse = {
  encode(message: QueryAllServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllServiceResponse {
    return {
      services: Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllServiceResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map((e) => e ? Service.toJSON(e) : undefined);
    } else {
      obj.services = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllServiceResponse>, I>>(object: I): QueryAllServiceResponse {
    const message = createBaseQueryAllServiceResponse();
    message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Parameters for the identity module.
   *
   * {{.MethodDescriptorProto.Name}} is a call with the method(s) {{$first := true}}{{range .Bindings}}{{if $first}}{{$first = false}}{{else}}, {{end}}{{.HTTPMethod}}{{end}} within the "{{.Service.Name}}" service.
   * It takes in "{{.RequestType.Name}}" and returns a "{{.ResponseType.Name}}".
   *
   * #### {{.RequestType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .RequestType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   *
   * #### {{.ResponseType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .ResponseType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * Get a DIDDocument by DID
   *
   * {{.MethodDescriptorProto.Name}} is a call with the method(s) {{$first := true}}{{range .Bindings}}{{if $first}}{{$first = false}}{{else}}, {{end}}{{.HTTPMethod}}{{end}} within the "{{.Service.Name}}" service.
   * It takes in "{{.RequestType.Name}}" and returns a "{{.ResponseType.Name}}".
   *
   * #### {{.RequestType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .RequestType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   *
   * #### {{.ResponseType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .ResponseType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   */
  Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse>;
  /**
   * Get a DIDDocument from a key id
   *
   * {{.MethodDescriptorProto.Name}} is a call with the method(s) {{$first := true}}{{range .Bindings}}{{if $first}}{{$first = false}}{{else}}, {{end}}{{.HTTPMethod}}{{end}} within the "{{.Service.Name}}" service.
   * It takes in "{{.RequestType.Name}}" and returns a "{{.ResponseType.Name}}".
   *
   * #### {{.RequestType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .RequestType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   *
   * #### {{.ResponseType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .ResponseType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   */
  DidByKeyID(request: QueryDidByKeyIDRequest): Promise<QueryDidByKeyIDResponse>;
  /**
   * Get a DIDDocument from an Alias
   *
   * {{.MethodDescriptorProto.Name}} is a call with the method(s) {{$first := true}}{{range .Bindings}}{{if $first}}{{$first = false}}{{else}}, {{end}}{{.HTTPMethod}}{{end}} within the "{{.Service.Name}}" service.
   * It takes in "{{.RequestType.Name}}" and returns a "{{.ResponseType.Name}}".
   *
   * #### {{.RequestType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .RequestType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   *
   * #### {{.ResponseType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .ResponseType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   */
  DidByAlsoKnownAs(request: QueryDidByAlsoKnownAsRequest): Promise<QueryDidByAlsoKnownAsResponse>;
  /**
   * Get All DIDDocuments
   *
   * {{.MethodDescriptorProto.Name}} is a call with the method(s) {{$first := true}}{{range .Bindings}}{{if $first}}{{$first = false}}{{else}}, {{end}}{{.HTTPMethod}}{{end}} within the "{{.Service.Name}}" service.
   * It takes in "{{.RequestType.Name}}" and returns a "{{.ResponseType.Name}}".
   *
   * #### {{.RequestType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .RequestType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   *
   * #### {{.ResponseType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .ResponseType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   */
  DidAll(request: QueryAllDidRequest): Promise<QueryAllDidResponse>;
  /**
   * Get a Service from Origin
   *
   * {{.MethodDescriptorProto.Name}} is a call with the method(s) {{$first := true}}{{range .Bindings}}{{if $first}}{{$first = false}}{{else}}, {{end}}{{.HTTPMethod}}{{end}} within the "{{.Service.Name}}" service.
   * It takes in "{{.RequestType.Name}}" and returns a "{{.ResponseType.Name}}".
   *
   * #### {{.RequestType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .RequestType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   *
   * #### {{.ResponseType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .ResponseType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   */
  Service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse>;
  /**
   * Get all Services
   *
   * {{.MethodDescriptorProto.Name}} is a call with the method(s) {{$first := true}}{{range .Bindings}}{{if $first}}{{$first = false}}{{else}}, {{end}}{{.HTTPMethod}}{{end}} within the "{{.Service.Name}}" service.
   * It takes in "{{.RequestType.Name}}" and returns a "{{.ResponseType.Name}}".
   *
   * #### {{.RequestType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .RequestType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   *
   * #### {{.ResponseType.Name}}
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |{{range .ResponseType.Fields}}
   * | {{.Name}} | {{if eq .Label.String "LABEL_REPEATED"}}[]{{end}}{{.Type}} | {{fieldcomments .Message .}} | {{end}}
   */
  ServiceAll(request: QueryAllServiceRequest): Promise<QueryAllServiceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Did = this.Did.bind(this);
    this.DidByKeyID = this.DidByKeyID.bind(this);
    this.DidByAlsoKnownAs = this.DidByAlsoKnownAs.bind(this);
    this.DidAll = this.DidAll.bind(this);
    this.Service = this.Service.bind(this);
    this.ServiceAll = this.ServiceAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.core.identity.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse> {
    const data = QueryGetDidRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.core.identity.v1.Query", "Did", data);
    return promise.then((data) => QueryGetDidResponse.decode(new _m0.Reader(data)));
  }

  DidByKeyID(request: QueryDidByKeyIDRequest): Promise<QueryDidByKeyIDResponse> {
    const data = QueryDidByKeyIDRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.core.identity.v1.Query", "DidByKeyID", data);
    return promise.then((data) => QueryDidByKeyIDResponse.decode(new _m0.Reader(data)));
  }

  DidByAlsoKnownAs(request: QueryDidByAlsoKnownAsRequest): Promise<QueryDidByAlsoKnownAsResponse> {
    const data = QueryDidByAlsoKnownAsRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.core.identity.v1.Query", "DidByAlsoKnownAs", data);
    return promise.then((data) => QueryDidByAlsoKnownAsResponse.decode(new _m0.Reader(data)));
  }

  DidAll(request: QueryAllDidRequest): Promise<QueryAllDidResponse> {
    const data = QueryAllDidRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.core.identity.v1.Query", "DidAll", data);
    return promise.then((data) => QueryAllDidResponse.decode(new _m0.Reader(data)));
  }

  Service(request: QueryGetServiceRequest): Promise<QueryGetServiceResponse> {
    const data = QueryGetServiceRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.core.identity.v1.Query", "Service", data);
    return promise.then((data) => QueryGetServiceResponse.decode(new _m0.Reader(data)));
  }

  ServiceAll(request: QueryAllServiceRequest): Promise<QueryAllServiceResponse> {
    const data = QueryAllServiceRequest.encode(request).finish();
    const promise = this.rpc.request("sonrhq.core.identity.v1.Query", "ServiceAll", data);
    return promise.then((data) => QueryAllServiceResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
