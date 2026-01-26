import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { CrossChainAddress, WasmMessage } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface FeeDeducted {
    $type: "axelar.nexus.v1beta1.FeeDeducted";
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount?: Coin | undefined;
    fee?: Coin | undefined;
}
export interface InsufficientFee {
    $type: "axelar.nexus.v1beta1.InsufficientFee";
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount?: Coin | undefined;
    fee?: Coin | undefined;
}
export interface RateLimitUpdated {
    $type: "axelar.nexus.v1beta1.RateLimitUpdated";
    chain: string;
    limit?: Coin | undefined;
    window?: Duration | undefined;
}
export interface MessageReceived {
    $type: "axelar.nexus.v1beta1.MessageReceived";
    id: string;
    payloadHash: Buffer;
    sender?: CrossChainAddress | undefined;
    recipient?: CrossChainAddress | undefined;
}
export interface MessageProcessing {
    $type: "axelar.nexus.v1beta1.MessageProcessing";
    id: string;
    sourceChain: string;
    destinationChain: string;
}
export interface MessageExecuted {
    $type: "axelar.nexus.v1beta1.MessageExecuted";
    id: string;
    sourceChain: string;
    destinationChain: string;
}
export interface MessageFailed {
    $type: "axelar.nexus.v1beta1.MessageFailed";
    id: string;
    sourceChain: string;
    destinationChain: string;
}
export interface WasmMessageRouted {
    $type: "axelar.nexus.v1beta1.WasmMessageRouted";
    message?: WasmMessage | undefined;
}
export declare const FeeDeducted: {
    $type: "axelar.nexus.v1beta1.FeeDeducted";
    encode(message: FeeDeducted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeDeducted;
    fromJSON(object: any): FeeDeducted;
    toJSON(message: FeeDeducted): unknown;
    create<I extends Exact<DeepPartial<FeeDeducted>, I>>(base?: I): FeeDeducted;
    fromPartial<I extends Exact<DeepPartial<FeeDeducted>, I>>(object: I): FeeDeducted;
};
export declare const InsufficientFee: {
    $type: "axelar.nexus.v1beta1.InsufficientFee";
    encode(message: InsufficientFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InsufficientFee;
    fromJSON(object: any): InsufficientFee;
    toJSON(message: InsufficientFee): unknown;
    create<I extends Exact<DeepPartial<InsufficientFee>, I>>(base?: I): InsufficientFee;
    fromPartial<I extends Exact<DeepPartial<InsufficientFee>, I>>(object: I): InsufficientFee;
};
export declare const RateLimitUpdated: {
    $type: "axelar.nexus.v1beta1.RateLimitUpdated";
    encode(message: RateLimitUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RateLimitUpdated;
    fromJSON(object: any): RateLimitUpdated;
    toJSON(message: RateLimitUpdated): unknown;
    create<I extends Exact<DeepPartial<RateLimitUpdated>, I>>(base?: I): RateLimitUpdated;
    fromPartial<I extends Exact<DeepPartial<RateLimitUpdated>, I>>(object: I): RateLimitUpdated;
};
export declare const MessageReceived: {
    $type: "axelar.nexus.v1beta1.MessageReceived";
    encode(message: MessageReceived, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageReceived;
    fromJSON(object: any): MessageReceived;
    toJSON(message: MessageReceived): unknown;
    create<I extends Exact<DeepPartial<MessageReceived>, I>>(base?: I): MessageReceived;
    fromPartial<I extends Exact<DeepPartial<MessageReceived>, I>>(object: I): MessageReceived;
};
export declare const MessageProcessing: {
    $type: "axelar.nexus.v1beta1.MessageProcessing";
    encode(message: MessageProcessing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageProcessing;
    fromJSON(object: any): MessageProcessing;
    toJSON(message: MessageProcessing): unknown;
    create<I extends Exact<DeepPartial<MessageProcessing>, I>>(base?: I): MessageProcessing;
    fromPartial<I extends Exact<DeepPartial<MessageProcessing>, I>>(object: I): MessageProcessing;
};
export declare const MessageExecuted: {
    $type: "axelar.nexus.v1beta1.MessageExecuted";
    encode(message: MessageExecuted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageExecuted;
    fromJSON(object: any): MessageExecuted;
    toJSON(message: MessageExecuted): unknown;
    create<I extends Exact<DeepPartial<MessageExecuted>, I>>(base?: I): MessageExecuted;
    fromPartial<I extends Exact<DeepPartial<MessageExecuted>, I>>(object: I): MessageExecuted;
};
export declare const MessageFailed: {
    $type: "axelar.nexus.v1beta1.MessageFailed";
    encode(message: MessageFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageFailed;
    fromJSON(object: any): MessageFailed;
    toJSON(message: MessageFailed): unknown;
    create<I extends Exact<DeepPartial<MessageFailed>, I>>(base?: I): MessageFailed;
    fromPartial<I extends Exact<DeepPartial<MessageFailed>, I>>(object: I): MessageFailed;
};
export declare const WasmMessageRouted: {
    $type: "axelar.nexus.v1beta1.WasmMessageRouted";
    encode(message: WasmMessageRouted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WasmMessageRouted;
    fromJSON(object: any): WasmMessageRouted;
    toJSON(message: WasmMessageRouted): unknown;
    create<I extends Exact<DeepPartial<WasmMessageRouted>, I>>(base?: I): WasmMessageRouted;
    fromPartial<I extends Exact<DeepPartial<WasmMessageRouted>, I>>(object: I): WasmMessageRouted;
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
