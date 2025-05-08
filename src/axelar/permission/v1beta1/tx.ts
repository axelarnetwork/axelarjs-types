/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";

export const protobufPackage = "axelar.permission.v1beta1";

export interface UpdateGovernanceKeyRequest {
  /** @deprecated */
  senderBz: Uint8Array;
  governanceKey?: LegacyAminoPubKey;
  sender: string;
}

export interface UpdateGovernanceKeyResponse {}

/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
  /** @deprecated */
  senderBz: Uint8Array;
  controller: Uint8Array;
  sender: string;
}

export interface RegisterControllerResponse {}

/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
  /** @deprecated */
  senderBz: Uint8Array;
  controller: Uint8Array;
  sender: string;
}

export interface DeregisterControllerResponse {}

function createBaseUpdateGovernanceKeyRequest(): UpdateGovernanceKeyRequest {
  return { senderBz: new Uint8Array(), governanceKey: undefined, sender: "" };
}

export const UpdateGovernanceKeyRequest = {
  encode(message: UpdateGovernanceKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderBz.length !== 0) {
      writer.uint32(10).bytes(message.senderBz);
    }
    if (message.governanceKey !== undefined) {
      LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGovernanceKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGovernanceKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderBz = reader.bytes();
          break;
        case 2:
          message.governanceKey = LegacyAminoPubKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateGovernanceKeyRequest {
    return {
      senderBz: isSet(object.senderBz) ? bytesFromBase64(object.senderBz) : new Uint8Array(),
      governanceKey: isSet(object.governanceKey)
        ? LegacyAminoPubKey.fromJSON(object.governanceKey)
        : undefined,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: UpdateGovernanceKeyRequest): unknown {
    const obj: any = {};
    message.senderBz !== undefined &&
      (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
    message.governanceKey !== undefined &&
      (obj.governanceKey = message.governanceKey
        ? LegacyAminoPubKey.toJSON(message.governanceKey)
        : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGovernanceKeyRequest>, I>>(
    object: I,
  ): UpdateGovernanceKeyRequest {
    const message = createBaseUpdateGovernanceKeyRequest();
    message.senderBz = object.senderBz ?? new Uint8Array();
    message.governanceKey =
      object.governanceKey !== undefined && object.governanceKey !== null
        ? LegacyAminoPubKey.fromPartial(object.governanceKey)
        : undefined;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseUpdateGovernanceKeyResponse(): UpdateGovernanceKeyResponse {
  return {};
}

export const UpdateGovernanceKeyResponse = {
  encode(_: UpdateGovernanceKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGovernanceKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGovernanceKeyResponse();
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

  fromJSON(_: any): UpdateGovernanceKeyResponse {
    return {};
  },

  toJSON(_: UpdateGovernanceKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateGovernanceKeyResponse>, I>>(
    _: I,
  ): UpdateGovernanceKeyResponse {
    const message = createBaseUpdateGovernanceKeyResponse();
    return message;
  },
};

function createBaseRegisterControllerRequest(): RegisterControllerRequest {
  return { senderBz: new Uint8Array(), controller: new Uint8Array(), sender: "" };
}

export const RegisterControllerRequest = {
  encode(message: RegisterControllerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderBz.length !== 0) {
      writer.uint32(10).bytes(message.senderBz);
    }
    if (message.controller.length !== 0) {
      writer.uint32(18).bytes(message.controller);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterControllerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterControllerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderBz = reader.bytes();
          break;
        case 2:
          message.controller = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterControllerRequest {
    return {
      senderBz: isSet(object.senderBz) ? bytesFromBase64(object.senderBz) : new Uint8Array(),
      controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: RegisterControllerRequest): unknown {
    const obj: any = {};
    message.senderBz !== undefined &&
      (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
    message.controller !== undefined &&
      (obj.controller = base64FromBytes(
        message.controller !== undefined ? message.controller : new Uint8Array(),
      ));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterControllerRequest>, I>>(
    object: I,
  ): RegisterControllerRequest {
    const message = createBaseRegisterControllerRequest();
    message.senderBz = object.senderBz ?? new Uint8Array();
    message.controller = object.controller ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseRegisterControllerResponse(): RegisterControllerResponse {
  return {};
}

export const RegisterControllerResponse = {
  encode(_: RegisterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterControllerResponse();
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

  fromJSON(_: any): RegisterControllerResponse {
    return {};
  },

  toJSON(_: RegisterControllerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterControllerResponse>, I>>(_: I): RegisterControllerResponse {
    const message = createBaseRegisterControllerResponse();
    return message;
  },
};

function createBaseDeregisterControllerRequest(): DeregisterControllerRequest {
  return { senderBz: new Uint8Array(), controller: new Uint8Array(), sender: "" };
}

export const DeregisterControllerRequest = {
  encode(message: DeregisterControllerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderBz.length !== 0) {
      writer.uint32(10).bytes(message.senderBz);
    }
    if (message.controller.length !== 0) {
      writer.uint32(18).bytes(message.controller);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterControllerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterControllerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderBz = reader.bytes();
          break;
        case 2:
          message.controller = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeregisterControllerRequest {
    return {
      senderBz: isSet(object.senderBz) ? bytesFromBase64(object.senderBz) : new Uint8Array(),
      controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: DeregisterControllerRequest): unknown {
    const obj: any = {};
    message.senderBz !== undefined &&
      (obj.senderBz = base64FromBytes(message.senderBz !== undefined ? message.senderBz : new Uint8Array()));
    message.controller !== undefined &&
      (obj.controller = base64FromBytes(
        message.controller !== undefined ? message.controller : new Uint8Array(),
      ));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeregisterControllerRequest>, I>>(
    object: I,
  ): DeregisterControllerRequest {
    const message = createBaseDeregisterControllerRequest();
    message.senderBz = object.senderBz ?? new Uint8Array();
    message.controller = object.controller ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseDeregisterControllerResponse(): DeregisterControllerResponse {
  return {};
}

export const DeregisterControllerResponse = {
  encode(_: DeregisterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterControllerResponse();
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

  fromJSON(_: any): DeregisterControllerResponse {
    return {};
  },

  toJSON(_: DeregisterControllerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeregisterControllerResponse>, I>>(
    _: I,
  ): DeregisterControllerResponse {
    const message = createBaseDeregisterControllerResponse();
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
