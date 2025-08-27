import { ParamsRequest, ParamsResponse, QueryGovernanceKeyRequest, QueryGovernanceKeyResponse } from "./query";
import { DeregisterControllerRequest, DeregisterControllerResponse, RegisterControllerRequest, RegisterControllerResponse, UpdateGovernanceKeyRequest, UpdateGovernanceKeyResponse } from "./tx";
export declare const protobufPackage = "axelar.permission.v1beta1";
/** Msg defines the gov Msg service. */
export interface Msg {
    RegisterController(request: RegisterControllerRequest): Promise<RegisterControllerResponse>;
    DeregisterController(request: DeregisterControllerRequest): Promise<DeregisterControllerResponse>;
    UpdateGovernanceKey(request: UpdateGovernanceKeyRequest): Promise<UpdateGovernanceKeyResponse>;
}
export declare const MsgServiceName = "axelar.permission.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
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
export declare const QueryServiceName = "axelar.permission.v1beta1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GovernanceKey(request: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
