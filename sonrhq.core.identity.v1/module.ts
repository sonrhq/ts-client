// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUpdateDidDocument } from "./types/core/identity/v1/tx";
import { MsgCreateDidDocument } from "./types/core/identity/v1/tx";
import { MsgUpdateService } from "./types/core/identity/v1/tx";
import { MsgRegisterService } from "./types/core/identity/v1/tx";
import { MsgDeleteDidDocument } from "./types/core/identity/v1/tx";
import { MsgDeactivateService } from "./types/core/identity/v1/tx";

import { DidDocument as typeDidDocument} from "./types"
import { VerificationMethod as typeVerificationMethod} from "./types"
import { VerificationRelationship as typeVerificationRelationship} from "./types"
import { Service as typeService} from "./types"
import { KeyValuePair as typeKeyValuePair} from "./types"
import { Params as typeParams} from "./types"

export { MsgUpdateDidDocument, MsgCreateDidDocument, MsgUpdateService, MsgRegisterService, MsgDeleteDidDocument, MsgDeactivateService };

type sendMsgUpdateDidDocumentParams = {
  value: MsgUpdateDidDocument,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateDidDocumentParams = {
  value: MsgCreateDidDocument,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateServiceParams = {
  value: MsgUpdateService,
  fee?: StdFee,
  memo?: string
};

type sendMsgRegisterServiceParams = {
  value: MsgRegisterService,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteDidDocumentParams = {
  value: MsgDeleteDidDocument,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeactivateServiceParams = {
  value: MsgDeactivateService,
  fee?: StdFee,
  memo?: string
};


type msgUpdateDidDocumentParams = {
  value: MsgUpdateDidDocument,
};

type msgCreateDidDocumentParams = {
  value: MsgCreateDidDocument,
};

type msgUpdateServiceParams = {
  value: MsgUpdateService,
};

type msgRegisterServiceParams = {
  value: MsgRegisterService,
};

type msgDeleteDidDocumentParams = {
  value: MsgDeleteDidDocument,
};

type msgDeactivateServiceParams = {
  value: MsgDeactivateService,
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
		
		async sendMsgUpdateDidDocument({ value, fee, memo }: sendMsgUpdateDidDocumentParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateDidDocument: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateDidDocument({ value: MsgUpdateDidDocument.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateDidDocument: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateDidDocument({ value, fee, memo }: sendMsgCreateDidDocumentParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateDidDocument: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateDidDocument({ value: MsgCreateDidDocument.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateDidDocument: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateService({ value, fee, memo }: sendMsgUpdateServiceParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateService: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateService({ value: MsgUpdateService.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateService: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRegisterService({ value, fee, memo }: sendMsgRegisterServiceParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRegisterService: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRegisterService({ value: MsgRegisterService.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRegisterService: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteDidDocument({ value, fee, memo }: sendMsgDeleteDidDocumentParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteDidDocument: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteDidDocument({ value: MsgDeleteDidDocument.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteDidDocument: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeactivateService({ value, fee, memo }: sendMsgDeactivateServiceParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeactivateService: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeactivateService({ value: MsgDeactivateService.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeactivateService: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUpdateDidDocument({ value }: msgUpdateDidDocumentParams): EncodeObject {
			try {
				return { typeUrl: "/sonrhq.core.identity.v1.MsgUpdateDidDocument", value: MsgUpdateDidDocument.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateDidDocument: Could not create message: ' + e.message)
			}
		},
		
		msgCreateDidDocument({ value }: msgCreateDidDocumentParams): EncodeObject {
			try {
				return { typeUrl: "/sonrhq.core.identity.v1.MsgCreateDidDocument", value: MsgCreateDidDocument.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateDidDocument: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateService({ value }: msgUpdateServiceParams): EncodeObject {
			try {
				return { typeUrl: "/sonrhq.core.identity.v1.MsgUpdateService", value: MsgUpdateService.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateService: Could not create message: ' + e.message)
			}
		},
		
		msgRegisterService({ value }: msgRegisterServiceParams): EncodeObject {
			try {
				return { typeUrl: "/sonrhq.core.identity.v1.MsgRegisterService", value: MsgRegisterService.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRegisterService: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteDidDocument({ value }: msgDeleteDidDocumentParams): EncodeObject {
			try {
				return { typeUrl: "/sonrhq.core.identity.v1.MsgDeleteDidDocument", value: MsgDeleteDidDocument.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteDidDocument: Could not create message: ' + e.message)
			}
		},
		
		msgDeactivateService({ value }: msgDeactivateServiceParams): EncodeObject {
			try {
				return { typeUrl: "/sonrhq.core.identity.v1.MsgDeactivateService", value: MsgDeactivateService.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeactivateService: Could not create message: ' + e.message)
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

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						DidDocument: getStructure(typeDidDocument.fromPartial({})),
						VerificationMethod: getStructure(typeVerificationMethod.fromPartial({})),
						VerificationRelationship: getStructure(typeVerificationRelationship.fromPartial({})),
						Service: getStructure(typeService.fromPartial({})),
						KeyValuePair: getStructure(typeKeyValuePair.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
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

const Module = (test: IgniteClient) => {
	return {
		module: {
			SonrhqCoreIdentityV1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;