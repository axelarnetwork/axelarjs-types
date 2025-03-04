/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  RegisterProxyResponse,
  DeactivateProxyResponse,
  RegisterProxyRequest,
  DeactivateProxyRequest,
} from "../../../axelar/snapshot/v1beta1/tx";
import { ParamsResponse, ParamsRequest } from "../../../axelar/snapshot/v1beta1/query";

export const protobufPackage = "axelar.snapshot.v1beta1";

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

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterProxy = this.RegisterProxy.bind(this);
    this.DeactivateProxy = this.DeactivateProxy.bind(this);
  }
  RegisterProxy(request: RegisterProxyRequest): Promise<RegisterProxyResponse> {
    const data = RegisterProxyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.snapshot.v1beta1.MsgService", "RegisterProxy", data);
    return promise.then((data) => RegisterProxyResponse.decode(new _m0.Reader(data)));
  }

  DeactivateProxy(request: DeactivateProxyRequest): Promise<DeactivateProxyResponse> {
    const data = DeactivateProxyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.snapshot.v1beta1.MsgService", "DeactivateProxy", data);
    return promise.then((data) => DeactivateProxyResponse.decode(new _m0.Reader(data)));
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
    const promise = this.rpc.request("axelar.snapshot.v1beta1.QueryService", "Params", data);
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
