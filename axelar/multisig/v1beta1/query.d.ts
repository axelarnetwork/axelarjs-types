import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { KeyState, MultisigState } from "../exported/v1beta1/types";
import { Params } from "./params";
export declare const protobufPackage = "axelar.multisig.v1beta1";
export interface KeyIDRequest {
    $type: "axelar.multisig.v1beta1.KeyIDRequest";
    chain: string;
}
/** KeyIDResponse contains the key ID of the key assigned to a given chain. */
export interface KeyIDResponse {
    $type: "axelar.multisig.v1beta1.KeyIDResponse";
    keyId: string;
}
export interface NextKeyIDRequest {
    $type: "axelar.multisig.v1beta1.NextKeyIDRequest";
    chain: string;
}
/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 */
export interface NextKeyIDResponse {
    $type: "axelar.multisig.v1beta1.NextKeyIDResponse";
    keyId: string;
}
export interface KeyRequest {
    $type: "axelar.multisig.v1beta1.KeyRequest";
    keyId: string;
}
export interface KeygenParticipant {
    $type: "axelar.multisig.v1beta1.KeygenParticipant";
    address: string;
    weight: Buffer;
    pubKey: string;
}
/** KeyResponse contains the key corresponding to a given key id. */
export interface KeyResponse {
    $type: "axelar.multisig.v1beta1.KeyResponse";
    keyId: string;
    state: KeyState;
    startedAt: Long;
    startedAtTimestamp?: Timestamp | undefined;
    thresholdWeight: Buffer;
    bondedWeight: Buffer;
    /** Keygen participants in descending order by weight */
    participants: KeygenParticipant[];
}
export interface KeygenSessionRequest {
    $type: "axelar.multisig.v1beta1.KeygenSessionRequest";
    keyId: string;
}
/** KeygenSessionResponse contains the keygen session info for a given key ID. */
export interface KeygenSessionResponse {
    $type: "axelar.multisig.v1beta1.KeygenSessionResponse";
    startedAt: Long;
    startedAtTimestamp?: Timestamp | undefined;
    expiresAt: Long;
    completedAt: Long;
    gracePeriod: Long;
    state: MultisigState;
    keygenThresholdWeight: Buffer;
    signingThresholdWeight: Buffer;
    bondedWeight: Buffer;
    /** Keygen candidates in descending order by weight */
    participants: KeygenParticipant[];
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.multisig.v1beta1.ParamsRequest";
}
export interface ParamsResponse {
    $type: "axelar.multisig.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
export declare const KeyIDRequest: {
    $type: "axelar.multisig.v1beta1.KeyIDRequest";
    encode(message: KeyIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyIDRequest;
    fromJSON(object: any): KeyIDRequest;
    toJSON(message: KeyIDRequest): unknown;
    create<I extends Exact<DeepPartial<KeyIDRequest>, I>>(base?: I): KeyIDRequest;
    fromPartial<I extends Exact<DeepPartial<KeyIDRequest>, I>>(object: I): KeyIDRequest;
};
export declare const KeyIDResponse: {
    $type: "axelar.multisig.v1beta1.KeyIDResponse";
    encode(message: KeyIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyIDResponse;
    fromJSON(object: any): KeyIDResponse;
    toJSON(message: KeyIDResponse): unknown;
    create<I extends Exact<DeepPartial<KeyIDResponse>, I>>(base?: I): KeyIDResponse;
    fromPartial<I extends Exact<DeepPartial<KeyIDResponse>, I>>(object: I): KeyIDResponse;
};
export declare const NextKeyIDRequest: {
    $type: "axelar.multisig.v1beta1.NextKeyIDRequest";
    encode(message: NextKeyIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyIDRequest;
    fromJSON(object: any): NextKeyIDRequest;
    toJSON(message: NextKeyIDRequest): unknown;
    create<I extends Exact<DeepPartial<NextKeyIDRequest>, I>>(base?: I): NextKeyIDRequest;
    fromPartial<I extends Exact<DeepPartial<NextKeyIDRequest>, I>>(object: I): NextKeyIDRequest;
};
export declare const NextKeyIDResponse: {
    $type: "axelar.multisig.v1beta1.NextKeyIDResponse";
    encode(message: NextKeyIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NextKeyIDResponse;
    fromJSON(object: any): NextKeyIDResponse;
    toJSON(message: NextKeyIDResponse): unknown;
    create<I extends Exact<DeepPartial<NextKeyIDResponse>, I>>(base?: I): NextKeyIDResponse;
    fromPartial<I extends Exact<DeepPartial<NextKeyIDResponse>, I>>(object: I): NextKeyIDResponse;
};
export declare const KeyRequest: {
    $type: "axelar.multisig.v1beta1.KeyRequest";
    encode(message: KeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyRequest;
    fromJSON(object: any): KeyRequest;
    toJSON(message: KeyRequest): unknown;
    create<I extends Exact<DeepPartial<KeyRequest>, I>>(base?: I): KeyRequest;
    fromPartial<I extends Exact<DeepPartial<KeyRequest>, I>>(object: I): KeyRequest;
};
export declare const KeygenParticipant: {
    $type: "axelar.multisig.v1beta1.KeygenParticipant";
    encode(message: KeygenParticipant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenParticipant;
    fromJSON(object: any): KeygenParticipant;
    toJSON(message: KeygenParticipant): unknown;
    create<I extends Exact<DeepPartial<KeygenParticipant>, I>>(base?: I): KeygenParticipant;
    fromPartial<I extends Exact<DeepPartial<KeygenParticipant>, I>>(object: I): KeygenParticipant;
};
export declare const KeyResponse: {
    $type: "axelar.multisig.v1beta1.KeyResponse";
    encode(message: KeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyResponse;
    fromJSON(object: any): KeyResponse;
    toJSON(message: KeyResponse): unknown;
    create<I extends Exact<DeepPartial<KeyResponse>, I>>(base?: I): KeyResponse;
    fromPartial<I extends Exact<DeepPartial<KeyResponse>, I>>(object: I): KeyResponse;
};
export declare const KeygenSessionRequest: {
    $type: "axelar.multisig.v1beta1.KeygenSessionRequest";
    encode(message: KeygenSessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSessionRequest;
    fromJSON(object: any): KeygenSessionRequest;
    toJSON(message: KeygenSessionRequest): unknown;
    create<I extends Exact<DeepPartial<KeygenSessionRequest>, I>>(base?: I): KeygenSessionRequest;
    fromPartial<I extends Exact<DeepPartial<KeygenSessionRequest>, I>>(object: I): KeygenSessionRequest;
};
export declare const KeygenSessionResponse: {
    $type: "axelar.multisig.v1beta1.KeygenSessionResponse";
    encode(message: KeygenSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenSessionResponse;
    fromJSON(object: any): KeygenSessionResponse;
    toJSON(message: KeygenSessionResponse): unknown;
    create<I extends Exact<DeepPartial<KeygenSessionResponse>, I>>(base?: I): KeygenSessionResponse;
    fromPartial<I extends Exact<DeepPartial<KeygenSessionResponse>, I>>(object: I): KeygenSessionResponse;
};
export declare const ParamsRequest: {
    $type: "axelar.multisig.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends Exact<DeepPartial<ParamsRequest>, I>>(base?: I): ParamsRequest;
    fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.multisig.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends Exact<DeepPartial<ParamsResponse>, I>>(base?: I): ParamsResponse;
    fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
