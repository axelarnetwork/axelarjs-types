/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  RegisterControllerResponse,
  DeregisterControllerResponse,
  UpdateGovernanceKeyResponse,
  RegisterControllerRequest,
  DeregisterControllerRequest,
  UpdateGovernanceKeyRequest,
} from "../../../axelar/permission/v1beta1/tx";
import {
  QueryGovernanceKeyResponse,
  ParamsResponse,
  QueryGovernanceKeyRequest,
  ParamsRequest,
} from "../../../axelar/permission/v1beta1/query";

export const protobufPackage = "axelar.permission.v1beta1";

/** Msg defines the gov Msg service. */
export interface Msg {
  RegisterController(request: RegisterControllerRequest): Promise<RegisterControllerResponse>;
  DeregisterController(request: DeregisterControllerRequest): Promise<DeregisterControllerResponse>;
  UpdateGovernanceKey(request: UpdateGovernanceKeyRequest): Promise<UpdateGovernanceKeyResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterController = this.RegisterController.bind(this);
    this.DeregisterController = this.DeregisterController.bind(this);
    this.UpdateGovernanceKey = this.UpdateGovernanceKey.bind(this);
  }
  RegisterController(request: RegisterControllerRequest): Promise<RegisterControllerResponse> {
    const data = RegisterControllerRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "RegisterController", data);
    return promise.then((data) => RegisterControllerResponse.decode(new _m0.Reader(data)));
  }

  DeregisterController(request: DeregisterControllerRequest): Promise<DeregisterControllerResponse> {
    const data = DeregisterControllerRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "DeregisterController", data);
    return promise.then((data) => DeregisterControllerResponse.decode(new _m0.Reader(data)));
  }

  UpdateGovernanceKey(request: UpdateGovernanceKeyRequest): Promise<UpdateGovernanceKeyResponse> {
    const data = UpdateGovernanceKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Msg", "UpdateGovernanceKey", data);
    return promise.then((data) => UpdateGovernanceKeyResponse.decode(new _m0.Reader(data)));
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** GovernanceKey returns the multisig governance key */
  GovernanceKey(request: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse>;
  Params(request: ParamsRequest): Promise<ParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GovernanceKey = this.GovernanceKey.bind(this);
    this.Params = this.Params.bind(this);
  }
  GovernanceKey(request: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse> {
    const data = QueryGovernanceKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Query", "GovernanceKey", data);
    return promise.then((data) => QueryGovernanceKeyResponse.decode(new _m0.Reader(data)));
  }

  Params(request: ParamsRequest): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Query", "Params", data);
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
