/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Result } from "../../../cosmos/base/abci/v1beta1/abci";

export const protobufPackage = "axelar.auxiliary.v1beta1";

export interface BatchRequest {
  sender: Uint8Array;
  messages: Any[];
}

export interface BatchResponse {
  responses: BatchResponse_Response[];
}

export interface BatchResponse_Response {
  result?: Result | undefined;
  err: string | undefined;
}

function createBaseBatchRequest(): BatchRequest {
  return { sender: new Uint8Array(), messages: [] };
}

export const BatchRequest = {
  encode(message: BatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: BatchRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.messages = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchRequest>, I>>(object: I): BatchRequest {
    const message = createBaseBatchRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchResponse(): BatchResponse {
  return { responses: [] };
}

export const BatchResponse = {
  encode(message: BatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      BatchResponse_Response.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.responses.push(BatchResponse_Response.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchResponse {
    return {
      responses: Array.isArray(object?.responses)
        ? object.responses.map((e: any) => BatchResponse_Response.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchResponse): unknown {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map((e) => (e ? BatchResponse_Response.toJSON(e) : undefined));
    } else {
      obj.responses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchResponse>, I>>(object: I): BatchResponse {
    const message = createBaseBatchResponse();
    message.responses = object.responses?.map((e) => BatchResponse_Response.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchResponse_Response(): BatchResponse_Response {
  return { result: undefined, err: undefined };
}

export const BatchResponse_Response = {
  encode(message: BatchResponse_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.err !== undefined) {
      writer.uint32(18).string(message.err);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchResponse_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchResponse_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Result.decode(reader, reader.uint32());
          break;
        case 2:
          message.err = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchResponse_Response {
    return {
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
      err: isSet(object.err) ? String(object.err) : undefined,
    };
  },

  toJSON(message: BatchResponse_Response): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    message.err !== undefined && (obj.err = message.err);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchResponse_Response>, I>>(object: I): BatchResponse_Response {
    const message = createBaseBatchResponse_Response();
    message.result =
      object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    message.err = object.err ?? undefined;
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
