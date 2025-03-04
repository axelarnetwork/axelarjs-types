/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/reward/v1beta1/params";

export const protobufPackage = "axelar.reward.v1beta1";

/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method. Ideally, this would use ValAddress as the validator
 * field type. However, this makes it awkward for REST-based calls, because it
 * would expect a byte array as part of the url. So, the bech32 encoded address
 * string is used for this request instead.
 */
export interface InflationRateRequest {
  validator: string;
}

export interface InflationRateResponse {
  inflationRate: Uint8Array;
}

/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}

export interface ParamsResponse {
  params?: Params;
}

function createBaseInflationRateRequest(): InflationRateRequest {
  return { validator: "" };
}

export const InflationRateRequest = {
  encode(message: InflationRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InflationRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InflationRateRequest {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: InflationRateRequest): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InflationRateRequest>, I>>(object: I): InflationRateRequest {
    const message = createBaseInflationRateRequest();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseInflationRateResponse(): InflationRateResponse {
  return { inflationRate: new Uint8Array() };
}

export const InflationRateResponse = {
  encode(message: InflationRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationRate.length !== 0) {
      writer.uint32(10).bytes(message.inflationRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InflationRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationRate = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InflationRateResponse {
    return {
      inflationRate: isSet(object.inflationRate) ? bytesFromBase64(object.inflationRate) : new Uint8Array(),
    };
  },

  toJSON(message: InflationRateResponse): unknown {
    const obj: any = {};
    message.inflationRate !== undefined &&
      (obj.inflationRate = base64FromBytes(
        message.inflationRate !== undefined ? message.inflationRate : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InflationRateResponse>, I>>(object: I): InflationRateResponse {
    const message = createBaseInflationRateResponse();
    message.inflationRate = object.inflationRate ?? new Uint8Array();
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

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

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
