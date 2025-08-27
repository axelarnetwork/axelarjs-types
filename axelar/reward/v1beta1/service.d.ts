import { InflationRateRequest, InflationRateResponse, ParamsRequest, ParamsResponse } from "./query";
import { RefundMsgRequest, RefundMsgResponse } from "./tx";
export declare const protobufPackage = "axelar.reward.v1beta1";
/** Msg defines the axelarnet Msg service. */
export interface MsgService {
    RefundMsg(request: RefundMsgRequest): Promise<RefundMsgResponse>;
}
export declare const MsgServiceServiceName = "axelar.reward.v1beta1.MsgService";
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    RefundMsg(request: RefundMsgRequest): Promise<RefundMsgResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    InflationRate(request: InflationRateRequest): Promise<InflationRateResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare const QueryServiceServiceName = "axelar.reward.v1beta1.QueryService";
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    InflationRate(request: InflationRateRequest): Promise<InflationRateResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
