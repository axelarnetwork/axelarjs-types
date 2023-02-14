/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.axelarnet.v1beta1";

export interface Metadata {
  sender: string;
  sourceChain: string;
  payload: Uint8Array;
  type: Metadata_Type;
  destChain: string;
  destAddress: string;
}

export enum Metadata_Type {
  TYPE_UNSPECIFIED = 0,
  TYPE_GENERAL_MESSAGE = 1,
  TYPE_GENERAL_MESSAGE_WITH_TOKEN = 2,
  UNRECOGNIZED = -1,
}

export function metadata_TypeFromJSON(object: any): Metadata_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Metadata_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_GENERAL_MESSAGE":
      return Metadata_Type.TYPE_GENERAL_MESSAGE;
    case 2:
    case "TYPE_GENERAL_MESSAGE_WITH_TOKEN":
      return Metadata_Type.TYPE_GENERAL_MESSAGE_WITH_TOKEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Metadata_Type.UNRECOGNIZED;
  }
}

export function metadata_TypeToJSON(object: Metadata_Type): string {
  switch (object) {
    case Metadata_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Metadata_Type.TYPE_GENERAL_MESSAGE:
      return "TYPE_GENERAL_MESSAGE";
    case Metadata_Type.TYPE_GENERAL_MESSAGE_WITH_TOKEN:
      return "TYPE_GENERAL_MESSAGE_WITH_TOKEN";
    case Metadata_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseMetadata(): Metadata {
  return { sender: "", sourceChain: "", payload: new Uint8Array(), type: 0, destChain: "", destAddress: "" };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.destChain !== "") {
      writer.uint32(42).string(message.destChain);
    }
    if (message.destAddress !== "") {
      writer.uint32(50).string(message.destAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.sourceChain = reader.string();
          break;
        case 3:
          message.payload = reader.bytes();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.destChain = reader.string();
          break;
        case 6:
          message.destAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      type: isSet(object.type) ? metadata_TypeFromJSON(object.type) : 0,
      destChain: isSet(object.destChain) ? String(object.destChain) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.type !== undefined && (obj.type = metadata_TypeToJSON(message.type));
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.sender = object.sender ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.type = object.type ?? 0;
    message.destChain = object.destChain ?? "";
    message.destAddress = object.destAddress ?? "";
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
