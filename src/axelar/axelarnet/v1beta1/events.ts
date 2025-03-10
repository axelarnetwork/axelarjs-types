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

export interface FeePaid {
  messageId: string;
  recipient: Uint8Array;
  fee?: Coin;
  refundRecipient: string;
  /** registered asset name in nexus */
  asset: string;
  sourceChain: string;
  destinationChain: string;
}

export interface ContractCallSubmitted {
  messageId: string;
  sender: string;
  sourceChain: string;
  destinationChain: string;
  contractAddress: string;
  payload: Uint8Array;
  payloadHash: Uint8Array;
}

export interface ContractCallWithTokenSubmitted {
  messageId: string;
  sender: string;
  sourceChain: string;
  destinationChain: string;
  contractAddress: string;
  payload: Uint8Array;
  payloadHash: Uint8Array;
  asset?: Coin;
}

export interface TokenSent {
  transferId: Long;
  sender: string;
  sourceChain: string;
  destinationChain: string;
  destinationAddress: string;
  asset?: Coin;
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

function createBaseFeePaid(): FeePaid {
  return {
    messageId: "",
    recipient: new Uint8Array(),
    fee: undefined,
    refundRecipient: "",
    asset: "",
    sourceChain: "",
    destinationChain: "",
  };
}

export const FeePaid = {
  encode(message: FeePaid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    if (message.recipient.length !== 0) {
      writer.uint32(18).bytes(message.recipient);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    if (message.refundRecipient !== "") {
      writer.uint32(34).string(message.refundRecipient);
    }
    if (message.asset !== "") {
      writer.uint32(42).string(message.asset);
    }
    if (message.sourceChain !== "") {
      writer.uint32(50).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(58).string(message.destinationChain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeePaid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePaid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageId = reader.string();
          break;
        case 2:
          message.recipient = reader.bytes();
          break;
        case 3:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.refundRecipient = reader.string();
          break;
        case 5:
          message.asset = reader.string();
          break;
        case 6:
          message.sourceChain = reader.string();
          break;
        case 7:
          message.destinationChain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeePaid {
    return {
      messageId: isSet(object.messageId) ? String(object.messageId) : "",
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      refundRecipient: isSet(object.refundRecipient) ? String(object.refundRecipient) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
    };
  },

  toJSON(message: FeePaid): unknown {
    const obj: any = {};
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.recipient !== undefined &&
      (obj.recipient = base64FromBytes(
        message.recipient !== undefined ? message.recipient : new Uint8Array(),
      ));
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.refundRecipient !== undefined && (obj.refundRecipient = message.refundRecipient);
    message.asset !== undefined && (obj.asset = message.asset);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeePaid>, I>>(object: I): FeePaid {
    const message = createBaseFeePaid();
    message.messageId = object.messageId ?? "";
    message.recipient = object.recipient ?? new Uint8Array();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    message.refundRecipient = object.refundRecipient ?? "";
    message.asset = object.asset ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    return message;
  },
};

function createBaseContractCallSubmitted(): ContractCallSubmitted {
  return {
    messageId: "",
    sender: "",
    sourceChain: "",
    destinationChain: "",
    contractAddress: "",
    payload: new Uint8Array(),
    payloadHash: new Uint8Array(),
  };
}

export const ContractCallSubmitted = {
  encode(message: ContractCallSubmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.sourceChain !== "") {
      writer.uint32(26).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    if (message.payload.length !== 0) {
      writer.uint32(50).bytes(message.payload);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(58).bytes(message.payloadHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractCallSubmitted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCallSubmitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.sourceChain = reader.string();
          break;
        case 4:
          message.destinationChain = reader.string();
          break;
        case 5:
          message.contractAddress = reader.string();
          break;
        case 6:
          message.payload = reader.bytes();
          break;
        case 7:
          message.payloadHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractCallSubmitted {
    return {
      messageId: isSet(object.messageId) ? String(object.messageId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
    };
  },

  toJSON(message: ContractCallSubmitted): unknown {
    const obj: any = {};
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.payloadHash !== undefined &&
      (obj.payloadHash = base64FromBytes(
        message.payloadHash !== undefined ? message.payloadHash : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractCallSubmitted>, I>>(object: I): ContractCallSubmitted {
    const message = createBaseContractCallSubmitted();
    message.messageId = object.messageId ?? "";
    message.sender = object.sender ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    return message;
  },
};

function createBaseContractCallWithTokenSubmitted(): ContractCallWithTokenSubmitted {
  return {
    messageId: "",
    sender: "",
    sourceChain: "",
    destinationChain: "",
    contractAddress: "",
    payload: new Uint8Array(),
    payloadHash: new Uint8Array(),
    asset: undefined,
  };
}

export const ContractCallWithTokenSubmitted = {
  encode(message: ContractCallWithTokenSubmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.sourceChain !== "") {
      writer.uint32(26).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    if (message.payload.length !== 0) {
      writer.uint32(50).bytes(message.payload);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(58).bytes(message.payloadHash);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractCallWithTokenSubmitted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractCallWithTokenSubmitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.sourceChain = reader.string();
          break;
        case 4:
          message.destinationChain = reader.string();
          break;
        case 5:
          message.contractAddress = reader.string();
          break;
        case 6:
          message.payload = reader.bytes();
          break;
        case 7:
          message.payloadHash = reader.bytes();
          break;
        case 8:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContractCallWithTokenSubmitted {
    return {
      messageId: isSet(object.messageId) ? String(object.messageId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: ContractCallWithTokenSubmitted): unknown {
    const obj: any = {};
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.payloadHash !== undefined &&
      (obj.payloadHash = base64FromBytes(
        message.payloadHash !== undefined ? message.payloadHash : new Uint8Array(),
      ));
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContractCallWithTokenSubmitted>, I>>(
    object: I,
  ): ContractCallWithTokenSubmitted {
    const message = createBaseContractCallWithTokenSubmitted();
    message.messageId = object.messageId ?? "";
    message.sender = object.sender ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.asset =
      object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
};

function createBaseTokenSent(): TokenSent {
  return {
    transferId: Long.UZERO,
    sender: "",
    sourceChain: "",
    destinationChain: "",
    destinationAddress: "",
    asset: undefined,
  };
}

export const TokenSent = {
  encode(message: TokenSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transferId.isZero()) {
      writer.uint32(8).uint64(message.transferId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.sourceChain !== "") {
      writer.uint32(26).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(42).string(message.destinationAddress);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenSent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenSent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.uint64() as Long;
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.sourceChain = reader.string();
          break;
        case 4:
          message.destinationChain = reader.string();
          break;
        case 5:
          message.destinationAddress = reader.string();
          break;
        case 6:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenSent {
    return {
      transferId: isSet(object.transferId) ? Long.fromValue(object.transferId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: TokenSent): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = (message.transferId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.sourceChain !== undefined && (obj.sourceChain = message.sourceChain);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
    message.asset !== undefined && (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenSent>, I>>(object: I): TokenSent {
    const message = createBaseTokenSent();
    message.transferId =
      object.transferId !== undefined && object.transferId !== null
        ? Long.fromValue(object.transferId)
        : Long.UZERO;
    message.sender = object.sender ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
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
