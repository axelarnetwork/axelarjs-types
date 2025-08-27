import { ParamsRequest, ParamsResponse } from "./query";
import { VoteRequest, VoteResponse } from "./tx";
export declare const protobufPackage = "axelar.vote.v1beta1";
/** Msg defines the vote Msg service. */
export interface MsgService {
    Vote(request: VoteRequest): Promise<VoteResponse>;
}
export declare const MsgServiceServiceName = "axelar.vote.v1beta1.MsgService";
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Vote(request: VoteRequest): Promise<VoteResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare const QueryServiceServiceName = "axelar.vote.v1beta1.QueryService";
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
