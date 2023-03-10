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

/**
 * Account is used for storing all credentials and their locations to be encrypted.
 */
export interface V1AccountInfo {
  /** Address is the associated Sonr address. */
  address?: string;

  /** Credentials is a list of all credentials associated with the account. */
  network?: string;

  /** Label is the label of the account. */
  label?: string;

  /**
   * Index is the index of the account.
   * @format int64
   */
  index?: number;

  /**
   * Balance is the balance of the account.
   * @format int32
   */
  balance?: number;
}

/**
 * CreateAccountResponse is the response to a CreateAccount request.
 */
export interface V1CreateAccountResponse {
  success?: boolean;
  coin_type?: string;
  did_document?: V1DidDocument;
  accounts?: V1AccountInfo[];
}

/**
 * DeleteAccountResponse is the response to a DeleteAccount request.
 */
export interface V1DeleteAccountResponse {
  success?: boolean;
  did_document?: V1DidDocument;
  accounts?: V1AccountInfo[];
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

/**
 * GetAccountResponse is the response to a GetAccount request.
 */
export interface V1GetAccountResponse {
  success?: boolean;
  coin_type?: string;
  accounts?: V1AccountInfo[];
}

export interface V1KeyValuePair {
  key?: string;
  value?: string;
}

/**
 * ListAccountsResponse is the response to a ListAccounts request.
 */
export interface V1ListAccountsResponse {
  success?: boolean;
  accounts?: V1AccountInfo[];
}

/**
 * LoginFinishRequest is the request to login to an account.
 */
export interface V1LoginFinishRequest {
  account_address?: string;
  credential_response?: string;
}

/**
 * LoginFinishResponse is the response to a Login request.
 */
export interface V1LoginFinishResponse {
  success?: boolean;
  account_address?: string;
  did_document?: V1DidDocument;

  /** Account is used for storing all credentials and their locations to be encrypted. */
  account_info?: V1AccountInfo;

  /** @format byte */
  ucan_token_header?: string;
}

/**
 * LoginStartRequest is the request to login to an account.
 */
export interface V1LoginStartRequest {
  origin?: string;
  account_address?: string;
}

/**
 * LoginStartResponse is the response to a Login request.
 */
export interface V1LoginStartResponse {
  success?: boolean;
  account_address?: string;
  aka?: string;
  credential_options?: string;
}

/**
 * RefreshSharesRequest is the request to refresh the keypair.
 */
export interface V1RefreshSharesRequest {
  credential_response?: string;
  session_id?: string;
}

/**
 * RefreshSharesResponse is the response to a Refresh request.
 */
export interface V1RefreshSharesResponse {
  /** @format byte */
  id?: string;
  address?: string;
  did_document?: V1DidDocument;
}

/**
 * RegisterFinishRequest is the request to CreateAccount a new key from the private key.
 */
export interface V1RegisterFinishRequest {
  session_id?: string;
  credential_response?: string;
}

/**
 * RegisterFinishResponse is the response to a CreateAccount request.
 */
export interface V1RegisterFinishResponse {
  /** @format byte */
  id?: string;
  address?: string;
  did_document?: V1DidDocument;

  /** Account is used for storing all credentials and their locations to be encrypted. */
  account_info?: V1AccountInfo;

  /** @format byte */
  ucan_token_header?: string;
}

/**
 * RegisterStartRequest is the request to register a new account.
 */
export interface V1RegisterStartRequest {
  origin?: string;
  device_label?: string;

  /** @format int32 */
  security_threshold?: number;
  passcode?: string;
  uuid?: string;
}

/**
 * RegisterStartResponse is the response to a Register request.
 */
export interface V1RegisterStartResponse {
  creation_options?: string;
  session_id?: string;
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
 * @title protocol/vault/v1/accounts.proto
 * @version version not set
 *
 * Package Motor is used for defining a Motor node and its properties.
 */
export class VaultApi<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags VaultAccounts
   * @name VaultAccountsListAccounts
   * @summary ListAccounts lists the accounts and returns the configuration.
   * @request GET:/sonr/vault/accounts/{sonr_id}
   */
  vaultAccountsListAccounts = (sonrId: string, params: RequestParams = {}) =>
    this.request<V1ListAccountsResponse, RpcStatus>({
      path: `/sonr/vault/accounts/${sonrId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags VaultAccounts
   * @name VaultAccountsCreateAccount
   * @summary CreateAccount creates the account and returns the configuration.
   * @request POST:/sonr/vault/accounts/{sonr_id}/create
   */
  vaultAccountsCreateAccount = (sonrId: string, body: { coin_type?: string }, params: RequestParams = {}) =>
    this.request<V1CreateAccountResponse, RpcStatus>({
      path: `/sonr/vault/accounts/${sonrId}/create`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags VaultAccounts
   * @name VaultAccountsGetAccount
   * @summary GetAccount gets the account and returns the configuration.
   * @request GET:/sonr/vault/accounts/{sonr_id}/{coin_type}
   */
  vaultAccountsGetAccount = (sonrId: string, coinType: string, params: RequestParams = {}) =>
    this.request<V1GetAccountResponse, RpcStatus>({
      path: `/sonr/vault/accounts/${sonrId}/${coinType}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags VaultAccounts
   * @name VaultAccountsDeleteAccount
   * @summary DeleteAccount deletes the account and returns the configuration.
   * @request POST:/sonr/vault/accounts/{target_did}/delete
   */
  vaultAccountsDeleteAccount = (targetDid: string, body: { sonr_id?: string }, params: RequestParams = {}) =>
    this.request<V1DeleteAccountResponse, RpcStatus>({
      path: `/sonr/vault/accounts/${targetDid}/delete`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags VaultAuthentication
   * @name VaultAuthenticationLoginFinish
   * @summary LoginFinish finishes the login process and returns the account info.
   * @request POST:/sonr/vault/auth/login/finish
   */
  vaultAuthenticationLoginFinish = (body: V1LoginFinishRequest, params: RequestParams = {}) =>
    this.request<V1LoginFinishResponse, RpcStatus>({
      path: `/sonr/vault/auth/login/finish`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags VaultAuthentication
   * @name VaultAuthenticationLoginStart
   * @summary LoginStart starts the login process and returns the credential options.
   * @request POST:/sonr/vault/auth/login/start
   */
  vaultAuthenticationLoginStart = (body: V1LoginStartRequest, params: RequestParams = {}) =>
    this.request<V1LoginStartResponse, RpcStatus>({
      path: `/sonr/vault/auth/login/start`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags VaultAuthentication
   * @name VaultAuthenticationRegisterFinish
   * @summary RegisterFinish creates a new Bip32 child key and returns the configuration.
   * @request POST:/sonr/vault/auth/register/finish
   */
  vaultAuthenticationRegisterFinish = (body: V1RegisterFinishRequest, params: RequestParams = {}) =>
    this.request<V1RegisterFinishResponse, RpcStatus>({
      path: `/sonr/vault/auth/register/finish`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags VaultAuthentication
   * @name VaultAuthenticationRegisterStart
   * @summary RegisterStart creates a new Webauthn credential and returns it.
   * @request POST:/sonr/vault/auth/register/start
   */
  vaultAuthenticationRegisterStart = (body: V1RegisterStartRequest, params: RequestParams = {}) =>
    this.request<V1RegisterStartResponse, RpcStatus>({
      path: `/sonr/vault/auth/register/start`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags VaultStorage
   * @name VaultStorageRefreshShares
   * @summary RefreshShares refreshes the Wallet shares and returns the updated configuration.
   * @request POST:/sonr/vault/storage/refresh
   */
  vaultStorageRefreshShares = (body: V1RefreshSharesRequest, params: RequestParams = {}) =>
    this.request<V1RefreshSharesResponse, RpcStatus>({
      path: `/sonr/vault/storage/refresh`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
