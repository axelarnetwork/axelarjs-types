import { ParamsRequest, ParamsResponse } from "./query";
import { HeartBeatRequest, HeartBeatResponse, UpdateParamsRequest, UpdateParamsResponse } from "./tx";
export declare const protobufPackage = "axelar.tss.v1beta1";
/** Msg defines the tss Msg service. */
export interface MsgService {
    HeartBeat(request: HeartBeatRequest): Promise<HeartBeatResponse>;
    UpdateParams(request: UpdateParamsRequest): Promise<UpdateParamsResponse>;
}
export declare const MsgServiceServiceName = "axelar.tss.v1beta1.MsgService";
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    HeartBeat(request: HeartBeatRequest): Promise<HeartBeatResponse>;
    UpdateParams(request: UpdateParamsRequest): Promise<UpdateParamsResponse>;
}
/** Query defines the gRPC querier service. */
export interface QueryService {
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare const QueryServiceServiceName = "axelar.tss.v1beta1.QueryService";
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
