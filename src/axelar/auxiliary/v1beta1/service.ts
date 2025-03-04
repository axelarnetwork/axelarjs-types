/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { BatchResponse, BatchRequest } from "../../../axelar/auxiliary/v1beta1/tx";

export const protobufPackage = "axelar.auxiliary.v1beta1";

/** Msg defines the nexus Msg service. */
export interface MsgService {
  Batch(request: BatchRequest): Promise<BatchResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Batch = this.Batch.bind(this);
  }
  Batch(request: BatchRequest): Promise<BatchResponse> {
    const data = BatchRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.auxiliary.v1beta1.MsgService", "Batch", data);
    return promise.then((data) => BatchResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
