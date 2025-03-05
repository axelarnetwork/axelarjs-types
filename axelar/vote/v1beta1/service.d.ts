import { VoteResponse, VoteRequest } from "../../../axelar/vote/v1beta1/tx";
import { ParamsResponse, ParamsRequest } from "../../../axelar/vote/v1beta1/query";
export declare const protobufPackage = "axelar.vote.v1beta1";
/** Msg defines the vote Msg service. */
export interface MsgService {
    Vote(request: VoteRequest): Promise<VoteResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    Vote(request: VoteRequest): Promise<VoteResponse>;
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
