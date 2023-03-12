import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateService } from "./types/core/identity/v1/tx";
import { MsgRegisterService } from "./types/core/identity/v1/tx";
import { MsgCreateDidDocument } from "./types/core/identity/v1/tx";
import { MsgDeleteDidDocument } from "./types/core/identity/v1/tx";
import { MsgDeactivateService } from "./types/core/identity/v1/tx";
import { MsgUpdateDidDocument } from "./types/core/identity/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sonrhq.core.identity.v1.MsgUpdateService", MsgUpdateService],
    ["/sonrhq.core.identity.v1.MsgRegisterService", MsgRegisterService],
    ["/sonrhq.core.identity.v1.MsgCreateDidDocument", MsgCreateDidDocument],
    ["/sonrhq.core.identity.v1.MsgDeleteDidDocument", MsgDeleteDidDocument],
    ["/sonrhq.core.identity.v1.MsgDeactivateService", MsgDeactivateService],
    ["/sonrhq.core.identity.v1.MsgUpdateDidDocument", MsgUpdateDidDocument],
    
];

export { msgTypes }