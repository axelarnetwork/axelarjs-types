/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { VoteResponse, VoteRequest } from "../../../axelar/vote/v1beta1/tx";
import { ParamsResponse, ParamsRequest } from "../../../axelar/vote/v1beta1/query";

export const protobufPackage = "axelar.vote.v1beta1";

/** Msg defines the vote Msg service. */
export interface MsgService {
  Vote(request: VoteRequest): Promise<VoteResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Vote = this.Vote.bind(this);
  }
  Vote(request: VoteRequest): Promise<VoteResponse> {
    const data = VoteRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.vote.v1beta1.MsgService", "Vote", data);
    return promise.then((data) => VoteResponse.decode(new _m0.Reader(data)));
  }
}

/** QueryService defines the gRPC querier service. */
export interface QueryService {
  Params(request: ParamsRequest): Promise<ParamsResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
  }
  Params(request: ParamsRequest): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.vote.v1beta1.QueryService", "Params", data);
    return promise.then((data) => ParamsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
