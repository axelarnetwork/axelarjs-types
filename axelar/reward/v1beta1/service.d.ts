import { RefundMsgResponse, RefundMsgRequest } from "../../../axelar/reward/v1beta1/tx";
import { InflationRateResponse, ParamsResponse, InflationRateRequest, ParamsRequest } from "../../../axelar/reward/v1beta1/query";
export declare const protobufPackage = "axelar.reward.v1beta1";
/** Msg defines the axelarnet Msg service. */
export interface MsgService {
    RefundMsg(request: RefundMsgRequest): Promise<RefundMsgResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    RefundMsg(request: RefundMsgRequest): Promise<RefundMsgResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    InflationRate(request: InflationRateRequest): Promise<InflationRateResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    InflationRate(request: InflationRateRequest): Promise<InflationRateResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
