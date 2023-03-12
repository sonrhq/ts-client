import axios, { AxiosResponse } from "axios";

import { RegisterStartRequest, RegisterStartResponse } from "./sonrhq.protocol.vault.v1";
import { LoginFinishRequest, LoginFinishResponse, LoginStartRequest, LoginStartResponse, RegisterFinishRequest, RegisterFinishResponse } from "./sonrhq.protocol.vault.v1/types/protocol/vault/v1/authentication";
import { useWebAuthn } from "react-hook-webauthn";

type RegisterStartResult = {
  request: RegisterStartRequest;
  response: RegisterStartResponse;
}

type RegisterFinishResult = {
  request: RegisterFinishRequest;
  response: RegisterFinishResponse;
}
type LoginStartResult = {
  request: LoginStartRequest;
  response: LoginStartResponse;
}

type LoginFinishResult = {
  request: LoginFinishRequest;
  response: LoginFinishResponse;
}

const env = {
    rpcURL: "https//rpc.sonr.ws",
    apiURL: "https://api.sonr.ws",
    grpcURL: "142.93.116.204:9090",
    prefix: "snr",
};

export class AuthenticationAPI {
  /**
   * Registers a new account by initiating the registration process.
   * @param request The registration request.
   * @returns A promise that resolves with the registration request and response.
   */
  static async registerStart(request: RegisterStartRequest): Promise<RegisterStartResult> {
    const resp: AxiosResponse<RegisterStartResponse> = await axios.post(env.apiURL + "/sonr/vault/auth/register/start", request);
    try {
      const createOpt = unmarshalCreationOptions(resp.data.creationOptions);
      const rpOptions = {
        rpId: resp.data.rpId,
        rpName: resp.data.rpName,
        credentialOpt : createOpt
      };
      const { getCredential, getAssertion } = useWebAuthn(rpOptions);
      const cred = await getCredential(null);
      return {
        request: request,
        response: resp.data,
      };
    }catch (e) {
      throw e;
    }
  }

  /**
   * Completes the registration process by setting the device key and verifying the registration code.
   * @param request The registration completion request.
   * @returns A promise that resolves with the completion request and response.
   */
  static async registerFinish(request: RegisterFinishRequest): Promise<RegisterFinishResult> {
    const resp: AxiosResponse<RegisterFinishResponse> = await axios.post(env.apiURL + "/sonr/vault/auth/register/finish", request);
    const data = resp.data;
    return {
      request,
      response: data
    };
  }

  /**
   * Initiates the login process by requesting a login challenge.
   * @param request The login start request.
   * @returns A promise that resolves with the login start request and response.
   */
    static async loginStart(request: LoginStartRequest): Promise<LoginStartResult> {
    const resp: AxiosResponse<LoginStartResponse> = await axios.post(env.apiURL + "/sonr/vault/auth/login/start", request);
    const data = resp.data;
    return {
        request,
        response: data
    };
    }

    /**
      * Completes the login process by verifying the response to the login challenge.
      * @param request The login completion request.
      * @returns A promise that resolves with the login completion request and response.
      */
    static async loginFinish(request: LoginFinishRequest): Promise<LoginFinishResult> {
    const resp: AxiosResponse<LoginFinishResponse> = await axios.post(env.apiURL + "/sonr/vault/auth/login/finish", request);
    const data = resp.data;
    return {
        request,
        response: data
    };
  }
}

function unmarshalCreationOptions(jsonString: string): PublicKeyCredentialCreationOptions {
  const creationOptions: PublicKeyCredentialCreationOptions = JSON.parse(jsonString);
  return creationOptions;
}
