/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "axelar.axelarnet.v1beta1";

export interface IBCTransferSent {
  id: Long;
  /** @deprecated */
  receipient: string;
  asset?: Coin;
  sequence: Long;
  portId: string;
  channelId: string;
  recipient: string;
}

export interface IBCTransferCompleted {
  id: Long;
  sequence: Long;
  portId: string;
  channelId: string;
}

export interface IBCTransferFailed {
  id: Long;
  sequence: Long;
  portId: string;
  channelId: string;
}

export interface IBCTransferRetried {
  id: Long;
  /** @deprecated */
  receipient: string;
  asset?: Coin;
  sequence: Long;
  portId: string;
  channelId: string;
  recipient: string;
}

export interface AxelarTransferCompleted {
  id: Long;
  /** @deprecated */
  receipient: string;
  asset?: Coin;
  recipient: string;
}

export interface FeeCollected {
  collector: Uint8Array;
  fee?: Coin;
}

export interface GeneralMessageApprovedWithToken {
  sender: string;
  sourceChain: string;
  destinationChain: string;
  destinationAddress: string;
  payloadHash: Uint8Array;
  payload: Uint8Array;
  coin?: Coin;
}

function createBaseIBCTransferSent(): IBCTransferSent {
  return {
    id: Long.UZERO,
    receipient: "",
    asset: undefined,
    sequence: Long.UZERO,
    portId: "",
    channelId: "",
    recipient: "",
  };
}

export const IBCTransferSent = {
  encode(message: IBCTransferSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    if (message.portId !== "") {
      writer.uint32(42).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(50).string(message.channelId);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferSent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCTransferSent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.receipient = reader.string();
          break;
        case 3:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sequence = reader.uint64() as Long;
          break;
        case 5:
          message.portId = reader.string();
          break;
        case 6:
          message.channelId = reader.string();
          break;
        case 7:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IBCTransferSent {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: IBCTransferSent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.receipient !== undefined && (obj.receipient = message.receipient);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCTransferSent>, I>>(object: I): IBCTransferSent {
    const message = createBaseIBCTransferSent();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.receipient = object.receipient ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseIBCTransferCompleted(): IBCTransferCompleted {
  return { id: Long.UZERO, sequence: Long.UZERO, portId: "", channelId: "" };
}

export const IBCTransferCompleted = {
  encode(message: IBCTransferCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferCompleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCTransferCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.sequence = reader.uint64() as Long;
          break;
        case 3:
          message.portId = reader.string();
          break;
        case 4:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IBCTransferCompleted {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: IBCTransferCompleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCTransferCompleted>, I>>(object: I): IBCTransferCompleted {
    const message = createBaseIBCTransferCompleted();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseIBCTransferFailed(): IBCTransferFailed {
  return { id: Long.UZERO, sequence: Long.UZERO, portId: "", channelId: "" };
}

export const IBCTransferFailed = {
  encode(message: IBCTransferFailed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferFailed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCTransferFailed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.sequence = reader.uint64() as Long;
          break;
        case 3:
          message.portId = reader.string();
          break;
        case 4:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IBCTransferFailed {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: IBCTransferFailed): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCTransferFailed>, I>>(object: I): IBCTransferFailed {
    const message = createBaseIBCTransferFailed();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

function createBaseIBCTransferRetried(): IBCTransferRetried {
  return {
    id: Long.UZERO,
    receipient: "",
    asset: undefined,
    sequence: Long.UZERO,
    portId: "",
    channelId: "",
    recipient: "",
  };
}

export const IBCTransferRetried = {
  encode(message: IBCTransferRetried, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    if (message.portId !== "") {
      writer.uint32(42).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(50).string(message.channelId);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferRetried {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCTransferRetried();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.receipient = reader.string();
          break;
        case 3:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sequence = reader.uint64() as Long;
          break;
        case 5:
          message.portId = reader.string();
          break;
        case 6:
          message.channelId = reader.string();
          break;
        case 7:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IBCTransferRetried {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: IBCTransferRetried): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.receipient !== undefined && (obj.receipient = message.receipient);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCTransferRetried>, I>>(object: I): IBCTransferRetried {
    const message = createBaseIBCTransferRetried();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.receipient = object.receipient ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseAxelarTransferCompleted(): AxelarTransferCompleted {
  return { id: Long.UZERO, receipient: "", asset: undefined, recipient: "" };
}

export const AxelarTransferCompleted = {
  encode(message: AxelarTransferCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AxelarTransferCompleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAxelarTransferCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.receipient = reader.string();
          break;
        case 3:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AxelarTransferCompleted {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: AxelarTransferCompleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.receipient !== undefined && (obj.receipient = message.receipient);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AxelarTransferCompleted>, I>>(object: I): AxelarTransferCompleted {
    const message = createBaseAxelarTransferCompleted();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.receipient = object.receipient ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseFeeCollected(): FeeCollected {
  return { collector: new Uint8Array(), fee: undefined };
}

export const FeeCollected = {
  encode(message: FeeCollected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collector.length !== 0) {
      writer.uint32(10).bytes(message.collector);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeCollected {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeCollected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collector = reader.bytes();
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeCollected {
    return {
      collector: isSet(object.collector) ? bytesFromBase64(object.collector) : new Uint8Array(),
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: FeeCollected): unknown {
    const obj: any = {};
    message.collector !== undefined &&
      (obj.collector = base64FromBytes(
        message.collector !== undefined ? message.collector : new Uint8Array(),
      ));
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeeCollected>, I>>(object: I): FeeCollected {
    const message = createBaseFeeCollected();
    message.collector = object.collector ?? new Uint8Array();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

function createBaseGeneralMessageApprovedWithToken(): GeneralMessageApprovedWithToken {
  return {
    sender: "",
    sourceChain: "",
    destinationChain: "",
    destinationAddress: "",
    payloadHash: new Uint8Array(),
    payload: new Uint8Array(),
    coin: undefined,
  };
}

export const GeneralMessageApprovedWithToken = {
  encode(message: GeneralMessageApprovedWithToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.sourceChain !== "") {
      writer.uint32(18).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(26).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(34).string(message.destinationAddress);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(42).bytes(message.payloadHash);
    }
    if (message.payload.length !== 0) {
      writer.uint32(50).bytes(message.payload);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneralMessageApprovedWithToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneralMessageApprovedWithToken();
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
          message.destinationChain = reader.string();
          break;
        case 4:
          message.destinationAddress = reader.string();
          break;
        case 5:
          message.payloadHash = reader.bytes();
          break;
        case 6:
          message.payload = reader.bytes();
          break;
        case 7:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeneralMessageApprovedWithToken {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: GeneralMessageApprovedWithToken): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
    message.payloadHash !== undefined &&
      (obj.payloadHash = base64FromBytes(
        message.payloadHash !== undefined ? message.payloadHash : new Uint8Array(),
      ));
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GeneralMessageApprovedWithToken>, I>>(
    object: I,
  ): GeneralMessageApprovedWithToken {
    const message = createBaseGeneralMessageApprovedWithToken();
    message.sender = object.sender ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.payload = object.payload ?? new Uint8Array();
    message.coin =
      object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
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
