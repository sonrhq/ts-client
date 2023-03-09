/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface V1DidDocument {
  context?: string[];
  id?: string;

  /** optional */
  controller?: string[];

  /** optional */
  verification_method?: V1VerificationMethod[];

  /** optional */
  authentication?: V1VerificationRelationship[];

  /** optional */
  assertion_method?: V1VerificationRelationship[];

  /** optional */
  capability_invocation?: V1VerificationRelationship[];

  /** optional */
  capability_delegation?: V1VerificationRelationship[];

  /** optional */
  key_agreement?: V1VerificationRelationship[];

  /** optional */
  service?: V1Service[];

  /** optional */
  also_known_as?: string[];

  /** optional */
  metadata?: V1KeyValuePair[];
}

export interface V1KeyValuePair {
  key?: string;
  value?: string;
}

export type V1MsgCreateDidDocumentResponse = object;

export type V1MsgDeactivateServiceResponse = object;

export type V1MsgDeleteDidDocumentResponse = object;

export type V1MsgRegisterServiceResponse = object;

export interface V1MsgUpdateDidDocumentResponse {
  creator?: string;
}

export type V1MsgUpdateServiceResponse = object;

/**
 * Params defines the parameters for the module.
 */
export interface V1Params {
  did_base_context?: string;
  did_method_context?: string;
  did_method_name?: string;
  did_method_version?: string;
  did_network?: string;
  ipfs_gateway?: string;
  ipfs_api?: string;
  webauthn_attestion_preference?: string;
  webauthn_authenticator_attachment?: string;

  /** @format int32 */
  webauthn_timeout?: number;
}

export interface V1QueryAllDidResponse {
  didDocument?: V1DidDocument[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1QueryAllServiceResponse {
  services?: V1Service[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface V1QueryDidByAlsoKnownAsResponse {
  didDocument?: V1DidDocument;
}

export interface V1QueryDidByKeyIDResponse {
  didDocument?: V1DidDocument;
}

export interface V1QueryGetDidResponse {
  didDocument?: V1DidDocument;
}

export interface V1QueryGetServiceResponse {
  service?: V1Service;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface V1QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: V1Params;
}

export interface V1Service {
  id?: string;
  controller?: string;
  type?: string;
  origin?: string;
  name?: string;

  /** optional */
  service_endpoints?: V1KeyValuePair[];

  /** optional */
  metadata?: V1KeyValuePair[];
}

export interface V1VerificationMethod {
  id?: string;
  type?: string;
  controller?: string;

  /** optional */
  public_key_jwk?: V1KeyValuePair[];

  /** optional */
  public_key_multibase?: string;

  /** optional */
  blockchain_account_id?: string;
  metadata?: V1KeyValuePair[];
}

export interface V1VerificationRelationship {
  verification_method?: V1VerificationMethod;
  reference?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title core/identity/v1/did.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryDidAll
   * @summary Queries a list of DidDocument items.
   * @request GET:/sonr/core/identity/did
   */
  queryDidAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryAllDidResponse, RpcStatus>({
      path: `/sonr/core/identity/did`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDidByAlsoKnownAs
   * @summary Queries a DIDDocument for the matching AlsoKnownAs
   * @request GET:/sonr/core/identity/did/aka/{aka_id}
   */
  queryDidByAlsoKnownAs = (akaId: string, params: RequestParams = {}) =>
    this.request<V1QueryDidByAlsoKnownAsResponse, RpcStatus>({
      path: `/sonr/core/identity/did/aka/${akaId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDidByKeyId
   * @summary Queries a DIDDocument for the matching key
   * @request GET:/sonr/core/identity/did/key/{key_id}
   */
  queryDidByKeyID = (keyId: string, params: RequestParams = {}) =>
    this.request<V1QueryDidByKeyIDResponse, RpcStatus>({
      path: `/sonr/core/identity/did/key/${keyId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDid
   * @summary Queries a DidDocument by index.
   * @request GET:/sonr/core/identity/did/{did}
   */
  queryDid = (did: string, params: RequestParams = {}) =>
    this.request<V1QueryGetDidResponse, RpcStatus>({
      path: `/sonr/core/identity/did/${did}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/sonr/core/identity/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<V1QueryParamsResponse, RpcStatus>({
      path: `/sonr/core/identity/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryServiceAll
   * @summary Queries a DIDDocument for the matching service
   * @request GET:/sonr/core/identity/service
   */
  queryServiceAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<V1QueryAllServiceResponse, RpcStatus>({
      path: `/sonr/core/identity/service`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryService
   * @summary Queries a DIDDocument for the matching service
   * @request GET:/sonr/core/identity/service/{origin}
   */
  queryService = (origin: string, params: RequestParams = {}) =>
    this.request<V1QueryGetServiceResponse, RpcStatus>({
      path: `/sonr/core/identity/service/${origin}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
