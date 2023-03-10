import { DidDocument } from "./types/core/identity/v1/did"
import { VerificationMethod } from "./types/core/identity/v1/did"
import { VerificationRelationship } from "./types/core/identity/v1/did"
import { Service } from "./types/core/identity/v1/did"
import { KeyValuePair } from "./types/core/identity/v1/did"
import { Params } from "./types/core/identity/v1/genesis"
import { MsgCreateDidDocument, MsgCreateDidDocumentResponse, MsgDeactivateService, MsgDeactivateServiceResponse, MsgDeleteDidDocument, MsgDeleteDidDocumentResponse, MsgRegisterService, MsgRegisterServiceResponse, MsgUpdateDidDocument, MsgUpdateDidDocumentResponse, MsgUpdateService, MsgUpdateServiceResponse } from "./types/core/identity/v1/tx"


export {
    DidDocument,
    VerificationMethod,
    VerificationRelationship,
    Service,
    KeyValuePair,
    Params,
    MsgCreateDidDocument,
    MsgCreateDidDocumentResponse,
    MsgUpdateDidDocument,
    MsgUpdateDidDocumentResponse,
    MsgDeleteDidDocument,
    MsgDeleteDidDocumentResponse,
    MsgRegisterService,
    MsgRegisterServiceResponse,
    MsgUpdateService,
    MsgUpdateServiceResponse,
    MsgDeactivateService,
    MsgDeactivateServiceResponse,
 }
