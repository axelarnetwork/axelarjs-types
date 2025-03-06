import { RegisterControllerResponse, DeregisterControllerResponse, UpdateGovernanceKeyResponse, RegisterControllerRequest, DeregisterControllerRequest, UpdateGovernanceKeyRequest } from "../../../axelar/permission/v1beta1/tx";
import { QueryGovernanceKeyResponse, ParamsResponse, QueryGovernanceKeyRequest, ParamsRequest } from "../../../axelar/permission/v1beta1/query";
export declare const protobufPackage = "axelar.permission.v1beta1";
/** Msg defines the gov Msg service. */
export interface Msg {
    RegisterController(request: RegisterControllerRequest): Promise<RegisterControllerResponse>;
    DeregisterController(request: DeregisterControllerRequest): Promise<DeregisterControllerResponse>;
    UpdateGovernanceKey(request: UpdateGovernanceKeyRequest): Promise<UpdateGovernanceKeyResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterController(request: RegisterControllerRequest): Promise<RegisterControllerResponse>;
    DeregisterController(request: DeregisterControllerRequest): Promise<DeregisterControllerResponse>;
    UpdateGovernanceKey(request: UpdateGovernanceKeyRequest): Promise<UpdateGovernanceKeyResponse>;
}
/** Query defines the gRPC querier service. */
export interface Query {
    /** GovernanceKey returns the multisig governance key */
    GovernanceKey(request: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GovernanceKey(request: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
