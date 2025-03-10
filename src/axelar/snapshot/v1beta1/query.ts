/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/snapshot/v1beta1/params";

export const protobufPackage = "axelar.snapshot.v1beta1";

export interface QueryValidatorsResponse {
  validators: QueryValidatorsResponse_Validator[];
}

export interface QueryValidatorsResponse_TssIllegibilityInfo {
  tombstoned: boolean;
  jailed: boolean;
  missedTooManyBlocks: boolean;
  noProxyRegistered: boolean;
  tssSuspended: boolean;
  proxyInsuficientFunds: boolean;
  staleTssHeartbeat: boolean;
}

export interface QueryValidatorsResponse_Validator {
  operatorAddress: string;
  moniker: string;
  tssIllegibilityInfo?: QueryValidatorsResponse_TssIllegibilityInfo;
}

/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}

export interface ParamsResponse {
  params?: Params;
}

function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return { validators: [] };
}

export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      QueryValidatorsResponse_Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(QueryValidatorsResponse_Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => QueryValidatorsResponse_Validator.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? QueryValidatorsResponse_Validator.toJSON(e) : undefined,
      );
    } else {
      obj.validators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse>, I>>(object: I): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators =
      object.validators?.map((e) => QueryValidatorsResponse_Validator.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryValidatorsResponse_TssIllegibilityInfo(): QueryValidatorsResponse_TssIllegibilityInfo {
  return {
    tombstoned: false,
    jailed: false,
    missedTooManyBlocks: false,
    noProxyRegistered: false,
    tssSuspended: false,
    proxyInsuficientFunds: false,
    staleTssHeartbeat: false,
  };
}

export const QueryValidatorsResponse_TssIllegibilityInfo = {
  encode(
    message: QueryValidatorsResponse_TssIllegibilityInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tombstoned === true) {
      writer.uint32(8).bool(message.tombstoned);
    }
    if (message.jailed === true) {
      writer.uint32(16).bool(message.jailed);
    }
    if (message.missedTooManyBlocks === true) {
      writer.uint32(24).bool(message.missedTooManyBlocks);
    }
    if (message.noProxyRegistered === true) {
      writer.uint32(32).bool(message.noProxyRegistered);
    }
    if (message.tssSuspended === true) {
      writer.uint32(40).bool(message.tssSuspended);
    }
    if (message.proxyInsuficientFunds === true) {
      writer.uint32(48).bool(message.proxyInsuficientFunds);
    }
    if (message.staleTssHeartbeat === true) {
      writer.uint32(56).bool(message.staleTssHeartbeat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse_TssIllegibilityInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse_TssIllegibilityInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tombstoned = reader.bool();
          break;
        case 2:
          message.jailed = reader.bool();
          break;
        case 3:
          message.missedTooManyBlocks = reader.bool();
          break;
        case 4:
          message.noProxyRegistered = reader.bool();
          break;
        case 5:
          message.tssSuspended = reader.bool();
          break;
        case 6:
          message.proxyInsuficientFunds = reader.bool();
          break;
        case 7:
          message.staleTssHeartbeat = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorsResponse_TssIllegibilityInfo {
    return {
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      missedTooManyBlocks: isSet(object.missedTooManyBlocks) ? Boolean(object.missedTooManyBlocks) : false,
      noProxyRegistered: isSet(object.noProxyRegistered) ? Boolean(object.noProxyRegistered) : false,
      tssSuspended: isSet(object.tssSuspended) ? Boolean(object.tssSuspended) : false,
      proxyInsuficientFunds: isSet(object.proxyInsuficientFunds)
        ? Boolean(object.proxyInsuficientFunds)
        : false,
      staleTssHeartbeat: isSet(object.staleTssHeartbeat) ? Boolean(object.staleTssHeartbeat) : false,
    };
  },

  toJSON(message: QueryValidatorsResponse_TssIllegibilityInfo): unknown {
    const obj: any = {};
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.missedTooManyBlocks !== undefined && (obj.missedTooManyBlocks = message.missedTooManyBlocks);
    message.noProxyRegistered !== undefined && (obj.noProxyRegistered = message.noProxyRegistered);
    message.tssSuspended !== undefined && (obj.tssSuspended = message.tssSuspended);
    message.proxyInsuficientFunds !== undefined &&
      (obj.proxyInsuficientFunds = message.proxyInsuficientFunds);
    message.staleTssHeartbeat !== undefined && (obj.staleTssHeartbeat = message.staleTssHeartbeat);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse_TssIllegibilityInfo>, I>>(
    object: I,
  ): QueryValidatorsResponse_TssIllegibilityInfo {
    const message = createBaseQueryValidatorsResponse_TssIllegibilityInfo();
    message.tombstoned = object.tombstoned ?? false;
    message.jailed = object.jailed ?? false;
    message.missedTooManyBlocks = object.missedTooManyBlocks ?? false;
    message.noProxyRegistered = object.noProxyRegistered ?? false;
    message.tssSuspended = object.tssSuspended ?? false;
    message.proxyInsuficientFunds = object.proxyInsuficientFunds ?? false;
    message.staleTssHeartbeat = object.staleTssHeartbeat ?? false;
    return message;
  },
};

function createBaseQueryValidatorsResponse_Validator(): QueryValidatorsResponse_Validator {
  return { operatorAddress: "", moniker: "", tssIllegibilityInfo: undefined };
}

export const QueryValidatorsResponse_Validator = {
  encode(message: QueryValidatorsResponse_Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.tssIllegibilityInfo !== undefined) {
      QueryValidatorsResponse_TssIllegibilityInfo.encode(
        message.tssIllegibilityInfo,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse_Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse_Validator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.tssIllegibilityInfo = QueryValidatorsResponse_TssIllegibilityInfo.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorsResponse_Validator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      tssIllegibilityInfo: isSet(object.tssIllegibilityInfo)
        ? QueryValidatorsResponse_TssIllegibilityInfo.fromJSON(object.tssIllegibilityInfo)
        : undefined,
    };
  },

  toJSON(message: QueryValidatorsResponse_Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.tssIllegibilityInfo !== undefined &&
      (obj.tssIllegibilityInfo = message.tssIllegibilityInfo
        ? QueryValidatorsResponse_TssIllegibilityInfo.toJSON(message.tssIllegibilityInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse_Validator>, I>>(
    object: I,
  ): QueryValidatorsResponse_Validator {
    const message = createBaseQueryValidatorsResponse_Validator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.moniker = object.moniker ?? "";
    message.tssIllegibilityInfo =
      object.tssIllegibilityInfo !== undefined && object.tssIllegibilityInfo !== null
        ? QueryValidatorsResponse_TssIllegibilityInfo.fromPartial(object.tssIllegibilityInfo)
        : undefined;
    return message;
  },
};

function createBaseParamsRequest(): ParamsRequest {
  return {};
}

export const ParamsRequest = {
  encode(_: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ParamsRequest {
    return {};
  },

  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
};

function createBaseParamsResponse(): ParamsResponse {
  return { params: undefined };
}

export const ParamsResponse = {
  encode(message: ParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
