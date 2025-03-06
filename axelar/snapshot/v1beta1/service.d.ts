import { RegisterProxyResponse, DeactivateProxyResponse, RegisterProxyRequest, DeactivateProxyRequest } from "../../../axelar/snapshot/v1beta1/tx";
import { ParamsResponse, ParamsRequest } from "../../../axelar/snapshot/v1beta1/query";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
/** Msg defines the snapshot Msg service. */
export interface MsgService {
    /**
     * RegisterProxy defines a method for registering a proxy account that can act
     * in a validator account's stead.
     */
    RegisterProxy(request: RegisterProxyRequest): Promise<RegisterProxyResponse>;
    /** DeactivateProxy defines a method for deregistering a proxy account. */
    DeactivateProxy(request: DeactivateProxyRequest): Promise<DeactivateProxyResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterProxy(request: RegisterProxyRequest): Promise<RegisterProxyResponse>;
    DeactivateProxy(request: DeactivateProxyRequest): Promise<DeactivateProxyResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
