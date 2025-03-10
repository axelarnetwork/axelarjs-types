/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "axelar.multisig.v1beta1";

export interface KeygenStarted {
  module: string;
  keyId: string;
  participants: Uint8Array[];
}

export interface KeygenCompleted {
  module: string;
  keyId: string;
}

export interface KeygenExpired {
  module: string;
  keyId: string;
}

export interface PubKeySubmitted {
  module: string;
  keyId: string;
  participant: Uint8Array;
  pubKey: Uint8Array;
}

export interface SigningStarted {
  module: string;
  sigId: Long;
  keyId: string;
  pubKeys: { [key: string]: Uint8Array };
  payloadHash: Uint8Array;
  requestingModule: string;
}

export interface SigningStarted_PubKeysEntry {
  key: string;
  value: Uint8Array;
}

export interface SigningCompleted {
  module: string;
  sigId: Long;
}

export interface SigningExpired {
  module: string;
  sigId: Long;
}

export interface SignatureSubmitted {
  module: string;
  sigId: Long;
  participant: Uint8Array;
  signature: Uint8Array;
}

export interface KeyAssigned {
  module: string;
  chain: string;
  keyId: string;
}

export interface KeyRotated {
  module: string;
  chain: string;
  keyId: string;
}

export interface KeygenOptOut {
  participant: Uint8Array;
}

export interface KeygenOptIn {
  participant: Uint8Array;
}

function createBaseKeygenStarted(): KeygenStarted {
  return { module: "", keyId: "", participants: [] };
}

export const KeygenStarted = {
  encode(message: KeygenStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    for (const v of message.participants) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenStarted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.keyId = reader.string();
          break;
        case 3:
          message.participants.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenStarted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      participants: Array.isArray(object?.participants)
        ? object.participants.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: KeygenStarted): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    if (message.participants) {
      obj.participants = message.participants.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.participants = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenStarted>, I>>(object: I): KeygenStarted {
    const message = createBaseKeygenStarted();
    message.module = object.module ?? "";
    message.keyId = object.keyId ?? "";
    message.participants = object.participants?.map((e) => e) || [];
    return message;
  },
};

function createBaseKeygenCompleted(): KeygenCompleted {
  return { module: "", keyId: "" };
}

export const KeygenCompleted = {
  encode(message: KeygenCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenCompleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenCompleted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: KeygenCompleted): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenCompleted>, I>>(object: I): KeygenCompleted {
    const message = createBaseKeygenCompleted();
    message.module = object.module ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseKeygenExpired(): KeygenExpired {
  return { module: "", keyId: "" };
}

export const KeygenExpired = {
  encode(message: KeygenExpired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenExpired {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenExpired();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenExpired {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: KeygenExpired): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenExpired>, I>>(object: I): KeygenExpired {
    const message = createBaseKeygenExpired();
    message.module = object.module ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBasePubKeySubmitted(): PubKeySubmitted {
  return { module: "", keyId: "", participant: new Uint8Array(), pubKey: new Uint8Array() };
}

export const PubKeySubmitted = {
  encode(message: PubKeySubmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    if (message.participant.length !== 0) {
      writer.uint32(26).bytes(message.participant);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(34).bytes(message.pubKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKeySubmitted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeySubmitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.keyId = reader.string();
          break;
        case 3:
          message.participant = reader.bytes();
          break;
        case 4:
          message.pubKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PubKeySubmitted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
    };
  },

  toJSON(message: PubKeySubmitted): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.participant !== undefined &&
      (obj.participant = base64FromBytes(
        message.participant !== undefined ? message.participant : new Uint8Array(),
      ));
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PubKeySubmitted>, I>>(object: I): PubKeySubmitted {
    const message = createBasePubKeySubmitted();
    message.module = object.module ?? "";
    message.keyId = object.keyId ?? "";
    message.participant = object.participant ?? new Uint8Array();
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  },
};

function createBaseSigningStarted(): SigningStarted {
  return {
    module: "",
    sigId: Long.UZERO,
    keyId: "",
    pubKeys: {},
    payloadHash: new Uint8Array(),
    requestingModule: "",
  };
}

export const SigningStarted = {
  encode(message: SigningStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    Object.entries(message.pubKeys).forEach(([key, value]) => {
      SigningStarted_PubKeysEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.payloadHash.length !== 0) {
      writer.uint32(42).bytes(message.payloadHash);
    }
    if (message.requestingModule !== "") {
      writer.uint32(50).string(message.requestingModule);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningStarted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.sigId = reader.uint64() as Long;
          break;
        case 3:
          message.keyId = reader.string();
          break;
        case 4:
          const entry4 = SigningStarted_PubKeysEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.pubKeys[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.payloadHash = reader.bytes();
          break;
        case 6:
          message.requestingModule = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigningStarted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      pubKeys: isObject(object.pubKeys)
        ? Object.entries(object.pubKeys).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
            acc[key] = bytesFromBase64(value as string);
            return acc;
          }, {})
        : {},
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      requestingModule: isSet(object.requestingModule) ? String(object.requestingModule) : "",
    };
  },

  toJSON(message: SigningStarted): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.sigId !== undefined && (obj.sigId = (message.sigId || Long.UZERO).toString());
    message.keyId !== undefined && (obj.keyId = message.keyId);
    obj.pubKeys = {};
    if (message.pubKeys) {
      Object.entries(message.pubKeys).forEach(([k, v]) => {
        obj.pubKeys[k] = base64FromBytes(v);
      });
    }
    message.payloadHash !== undefined &&
      (obj.payloadHash = base64FromBytes(
        message.payloadHash !== undefined ? message.payloadHash : new Uint8Array(),
      ));
    message.requestingModule !== undefined && (obj.requestingModule = message.requestingModule);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SigningStarted>, I>>(object: I): SigningStarted {
    const message = createBaseSigningStarted();
    message.module = object.module ?? "";
    message.sigId =
      object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    message.keyId = object.keyId ?? "";
    message.pubKeys = Object.entries(object.pubKeys ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.requestingModule = object.requestingModule ?? "";
    return message;
  },
};

function createBaseSigningStarted_PubKeysEntry(): SigningStarted_PubKeysEntry {
  return { key: "", value: new Uint8Array() };
}

export const SigningStarted_PubKeysEntry = {
  encode(message: SigningStarted_PubKeysEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningStarted_PubKeysEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningStarted_PubKeysEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigningStarted_PubKeysEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: SigningStarted_PubKeysEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SigningStarted_PubKeysEntry>, I>>(
    object: I,
  ): SigningStarted_PubKeysEntry {
    const message = createBaseSigningStarted_PubKeysEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseSigningCompleted(): SigningCompleted {
  return { module: "", sigId: Long.UZERO };
}

export const SigningCompleted = {
  encode(message: SigningCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningCompleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.sigId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigningCompleted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
    };
  },

  toJSON(message: SigningCompleted): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.sigId !== undefined && (obj.sigId = (message.sigId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SigningCompleted>, I>>(object: I): SigningCompleted {
    const message = createBaseSigningCompleted();
    message.module = object.module ?? "";
    message.sigId =
      object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    return message;
  },
};

function createBaseSigningExpired(): SigningExpired {
  return { module: "", sigId: Long.UZERO };
}

export const SigningExpired = {
  encode(message: SigningExpired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningExpired {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningExpired();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.sigId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SigningExpired {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
    };
  },

  toJSON(message: SigningExpired): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.sigId !== undefined && (obj.sigId = (message.sigId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SigningExpired>, I>>(object: I): SigningExpired {
    const message = createBaseSigningExpired();
    message.module = object.module ?? "";
    message.sigId =
      object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    return message;
  },
};

function createBaseSignatureSubmitted(): SignatureSubmitted {
  return { module: "", sigId: Long.UZERO, participant: new Uint8Array(), signature: new Uint8Array() };
}

export const SignatureSubmitted = {
  encode(message: SignatureSubmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }
    if (message.participant.length !== 0) {
      writer.uint32(26).bytes(message.participant);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureSubmitted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureSubmitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.sigId = reader.uint64() as Long;
          break;
        case 3:
          message.participant = reader.bytes();
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignatureSubmitted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: SignatureSubmitted): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.sigId !== undefined && (obj.sigId = (message.sigId || Long.UZERO).toString());
    message.participant !== undefined &&
      (obj.participant = base64FromBytes(
        message.participant !== undefined ? message.participant : new Uint8Array(),
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignatureSubmitted>, I>>(object: I): SignatureSubmitted {
    const message = createBaseSignatureSubmitted();
    message.module = object.module ?? "";
    message.sigId =
      object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    message.participant = object.participant ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseKeyAssigned(): KeyAssigned {
  return { module: "", chain: "", keyId: "" };
}

export const KeyAssigned = {
  encode(message: KeyAssigned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyAssigned {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyAssigned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyAssigned {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: KeyAssigned): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyAssigned>, I>>(object: I): KeyAssigned {
    const message = createBaseKeyAssigned();
    message.module = object.module ?? "";
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseKeyRotated(): KeyRotated {
  return { module: "", chain: "", keyId: "" };
}

export const KeyRotated = {
  encode(message: KeyRotated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyRotated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyRotated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyRotated {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
    };
  },

  toJSON(message: KeyRotated): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyRotated>, I>>(object: I): KeyRotated {
    const message = createBaseKeyRotated();
    message.module = object.module ?? "";
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  },
};

function createBaseKeygenOptOut(): KeygenOptOut {
  return { participant: new Uint8Array() };
}

export const KeygenOptOut = {
  encode(message: KeygenOptOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant.length !== 0) {
      writer.uint32(10).bytes(message.participant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenOptOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participant = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenOptOut {
    return {
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
    };
  },

  toJSON(message: KeygenOptOut): unknown {
    const obj: any = {};
    message.participant !== undefined &&
      (obj.participant = base64FromBytes(
        message.participant !== undefined ? message.participant : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenOptOut>, I>>(object: I): KeygenOptOut {
    const message = createBaseKeygenOptOut();
    message.participant = object.participant ?? new Uint8Array();
    return message;
  },
};

function createBaseKeygenOptIn(): KeygenOptIn {
  return { participant: new Uint8Array() };
}

export const KeygenOptIn = {
  encode(message: KeygenOptIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participant.length !== 0) {
      writer.uint32(10).bytes(message.participant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenOptIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participant = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeygenOptIn {
    return {
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(),
    };
  },

  toJSON(message: KeygenOptIn): unknown {
    const obj: any = {};
    message.participant !== undefined &&
      (obj.participant = base64FromBytes(
        message.participant !== undefined ? message.participant : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeygenOptIn>, I>>(object: I): KeygenOptIn {
    const message = createBaseKeygenOptIn();
    message.participant = object.participant ?? new Uint8Array();
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
