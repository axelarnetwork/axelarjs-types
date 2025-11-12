import { OperatorByProxyRequest, OperatorByProxyResponse, ParamsRequest, ParamsResponse, ProxyByOperatorRequest, ProxyByOperatorResponse } from "./query";
import { DeactivateProxyRequest, DeactivateProxyResponse, RegisterProxyRequest, RegisterProxyResponse, UpdateParamsRequest, UpdateParamsResponse } from "./tx";
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
    UpdateParams(request: UpdateParamsRequest): Promise<UpdateParamsResponse>;
}
export declare const MsgServiceServiceName = "axelar.snapshot.v1beta1.MsgService";
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    RegisterProxy(request: RegisterProxyRequest): Promise<RegisterProxyResponse>;
    DeactivateProxy(request: DeactivateProxyRequest): Promise<DeactivateProxyResponse>;
    UpdateParams(request: UpdateParamsRequest): Promise<UpdateParamsResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    Params(request: ParamsRequest): Promise<ParamsResponse>;
    OperatorByProxy(request: OperatorByProxyRequest): Promise<OperatorByProxyResponse>;
    ProxyByOperator(request: ProxyByOperatorRequest): Promise<ProxyByOperatorResponse>;
}
export declare const QueryServiceServiceName = "axelar.snapshot.v1beta1.QueryService";
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: ParamsRequest): Promise<ParamsResponse>;
    OperatorByProxy(request: OperatorByProxyRequest): Promise<OperatorByProxyResponse>;
    ProxyByOperator(request: ProxyByOperatorRequest): Promise<ProxyByOperatorResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
