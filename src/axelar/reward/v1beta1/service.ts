/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { RefundMsgResponse, RefundMsgRequest } from "../../../axelar/reward/v1beta1/tx";
import {
  InflationRateResponse,
  ParamsResponse,
  InflationRateRequest,
  ParamsRequest,
} from "../../../axelar/reward/v1beta1/query";

export const protobufPackage = "axelar.reward.v1beta1";

/** Msg defines the axelarnet Msg service. */
export interface MsgService {
  RefundMsg(request: RefundMsgRequest): Promise<RefundMsgResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RefundMsg = this.RefundMsg.bind(this);
  }
  RefundMsg(request: RefundMsgRequest): Promise<RefundMsgResponse> {
    const data = RefundMsgRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.reward.v1beta1.MsgService", "RefundMsg", data);
    return promise.then((data) => RefundMsgResponse.decode(new _m0.Reader(data)));
  }
}

/** QueryService defines the gRPC querier service. */
export interface QueryService {
  InflationRate(request: InflationRateRequest): Promise<InflationRateResponse>;
  Params(request: ParamsRequest): Promise<ParamsResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InflationRate = this.InflationRate.bind(this);
    this.Params = this.Params.bind(this);
  }
  InflationRate(request: InflationRateRequest): Promise<InflationRateResponse> {
    const data = InflationRateRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.reward.v1beta1.QueryService", "InflationRate", data);
    return promise.then((data) => InflationRateResponse.decode(new _m0.Reader(data)));
  }

  Params(request: ParamsRequest): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.reward.v1beta1.QueryService", "Params", data);
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
