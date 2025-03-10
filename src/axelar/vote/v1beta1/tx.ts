/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "axelar.vote.v1beta1";

export interface VoteRequest {
  sender: Uint8Array;
  pollId: Long;
  vote?: Any;
}

export interface VoteResponse {
  log: string;
}

function createBaseVoteRequest(): VoteRequest {
  return { sender: new Uint8Array(), pollId: Long.UZERO, vote: undefined };
}

export const VoteRequest = {
  encode(message: VoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (!message.pollId.isZero()) {
      writer.uint32(32).uint64(message.pollId);
    }
    if (message.vote !== undefined) {
      Any.encode(message.vote, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;
        case 4:
          message.pollId = reader.uint64() as Long;
          break;
        case 5:
          message.vote = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      pollId: isSet(object.pollId) ? Long.fromValue(object.pollId) : Long.UZERO,
      vote: isSet(object.vote) ? Any.fromJSON(object.vote) : undefined,
    };
  },

  toJSON(message: VoteRequest): unknown {
    const obj: any = {};
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.pollId !== undefined && (obj.pollId = (message.pollId || Long.UZERO).toString());
    message.vote !== undefined && (obj.vote = message.vote ? Any.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteRequest>, I>>(object: I): VoteRequest {
    const message = createBaseVoteRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.pollId =
      object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    message.vote =
      object.vote !== undefined && object.vote !== null ? Any.fromPartial(object.vote) : undefined;
    return message;
  },
};

function createBaseVoteResponse(): VoteResponse {
  return { log: "" };
}

export const VoteResponse = {
  encode(message: VoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteResponse {
    return {
      log: isSet(object.log) ? String(object.log) : "",
    };
  },

  toJSON(message: VoteResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteResponse>, I>>(object: I): VoteResponse {
    const message = createBaseVoteResponse();
    message.log = object.log ?? "";
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
