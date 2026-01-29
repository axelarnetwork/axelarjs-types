import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
export interface IBCTransferSent {
    $type: "axelar.axelarnet.v1beta1.IBCTransferSent";
    id: Long;
    /** @deprecated */
    receipient: string;
    asset?: Coin | undefined;
    sequence: Long;
    portId: string;
    channelId: string;
    recipient: string;
}
export interface IBCTransferCompleted {
    $type: "axelar.axelarnet.v1beta1.IBCTransferCompleted";
    id: Long;
    sequence: Long;
    portId: string;
    channelId: string;
}
export interface IBCTransferFailed {
    $type: "axelar.axelarnet.v1beta1.IBCTransferFailed";
    id: Long;
    sequence: Long;
    portId: string;
    channelId: string;
}
export interface IBCTransferRetried {
    $type: "axelar.axelarnet.v1beta1.IBCTransferRetried";
    id: Long;
    /** @deprecated */
    receipient: string;
    asset?: Coin | undefined;
    sequence: Long;
    portId: string;
    channelId: string;
    recipient: string;
}
export interface AxelarTransferCompleted {
    $type: "axelar.axelarnet.v1beta1.AxelarTransferCompleted";
    id: Long;
    /** @deprecated */
    receipient: string;
    asset?: Coin | undefined;
    recipient: string;
}
export interface FeeCollected {
    $type: "axelar.axelarnet.v1beta1.FeeCollected";
    collector: Buffer;
    fee?: Coin | undefined;
}
export interface FeePaid {
    $type: "axelar.axelarnet.v1beta1.FeePaid";
    messageId: string;
    recipient: Buffer;
    fee?: Coin | undefined;
    refundRecipient: string;
    /** registered asset name in nexus */
    asset: string;
    sourceChain: string;
    destinationChain: string;
}
export interface ContractCallSubmitted {
    $type: "axelar.axelarnet.v1beta1.ContractCallSubmitted";
    messageId: string;
    sender: string;
    sourceChain: string;
    destinationChain: string;
    contractAddress: string;
    payload: Buffer;
    payloadHash: Buffer;
}
export interface ContractCallWithTokenSubmitted {
    $type: "axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted";
    messageId: string;
    sender: string;
    sourceChain: string;
    destinationChain: string;
    contractAddress: string;
    payload: Buffer;
    payloadHash: Buffer;
    asset?: Coin | undefined;
}
export interface TokenSent {
    $type: "axelar.axelarnet.v1beta1.TokenSent";
    transferId: Long;
    sender: string;
    sourceChain: string;
    destinationChain: string;
    destinationAddress: string;
    asset?: Coin | undefined;
}
export declare const IBCTransferSent: {
    $type: "axelar.axelarnet.v1beta1.IBCTransferSent";
    encode(message: IBCTransferSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferSent;
    fromJSON(object: any): IBCTransferSent;
    toJSON(message: IBCTransferSent): unknown;
    create<I extends Exact<DeepPartial<IBCTransferSent>, I>>(base?: I): IBCTransferSent;
    fromPartial<I extends Exact<DeepPartial<IBCTransferSent>, I>>(object: I): IBCTransferSent;
};
export declare const IBCTransferCompleted: {
    $type: "axelar.axelarnet.v1beta1.IBCTransferCompleted";
    encode(message: IBCTransferCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferCompleted;
    fromJSON(object: any): IBCTransferCompleted;
    toJSON(message: IBCTransferCompleted): unknown;
    create<I extends Exact<DeepPartial<IBCTransferCompleted>, I>>(base?: I): IBCTransferCompleted;
    fromPartial<I extends Exact<DeepPartial<IBCTransferCompleted>, I>>(object: I): IBCTransferCompleted;
};
export declare const IBCTransferFailed: {
    $type: "axelar.axelarnet.v1beta1.IBCTransferFailed";
    encode(message: IBCTransferFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferFailed;
    fromJSON(object: any): IBCTransferFailed;
    toJSON(message: IBCTransferFailed): unknown;
    create<I extends Exact<DeepPartial<IBCTransferFailed>, I>>(base?: I): IBCTransferFailed;
    fromPartial<I extends Exact<DeepPartial<IBCTransferFailed>, I>>(object: I): IBCTransferFailed;
};
export declare const IBCTransferRetried: {
    $type: "axelar.axelarnet.v1beta1.IBCTransferRetried";
    encode(message: IBCTransferRetried, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransferRetried;
    fromJSON(object: any): IBCTransferRetried;
    toJSON(message: IBCTransferRetried): unknown;
    create<I extends Exact<DeepPartial<IBCTransferRetried>, I>>(base?: I): IBCTransferRetried;
    fromPartial<I extends Exact<DeepPartial<IBCTransferRetried>, I>>(object: I): IBCTransferRetried;
};
export declare const AxelarTransferCompleted: {
    $type: "axelar.axelarnet.v1beta1.AxelarTransferCompleted";
    encode(message: AxelarTransferCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AxelarTransferCompleted;
    fromJSON(object: any): AxelarTransferCompleted;
    toJSON(message: AxelarTransferCompleted): unknown;
    create<I extends Exact<DeepPartial<AxelarTransferCompleted>, I>>(base?: I): AxelarTransferCompleted;
    fromPartial<I extends Exact<DeepPartial<AxelarTransferCompleted>, I>>(object: I): AxelarTransferCompleted;
};
export declare const FeeCollected: {
    $type: "axelar.axelarnet.v1beta1.FeeCollected";
    encode(message: FeeCollected, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeCollected;
    fromJSON(object: any): FeeCollected;
    toJSON(message: FeeCollected): unknown;
    create<I extends Exact<DeepPartial<FeeCollected>, I>>(base?: I): FeeCollected;
    fromPartial<I extends Exact<DeepPartial<FeeCollected>, I>>(object: I): FeeCollected;
};
export declare const FeePaid: {
    $type: "axelar.axelarnet.v1beta1.FeePaid";
    encode(message: FeePaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeePaid;
    fromJSON(object: any): FeePaid;
    toJSON(message: FeePaid): unknown;
    create<I extends Exact<DeepPartial<FeePaid>, I>>(base?: I): FeePaid;
    fromPartial<I extends Exact<DeepPartial<FeePaid>, I>>(object: I): FeePaid;
};
export declare const ContractCallSubmitted: {
    $type: "axelar.axelarnet.v1beta1.ContractCallSubmitted";
    encode(message: ContractCallSubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCallSubmitted;
    fromJSON(object: any): ContractCallSubmitted;
    toJSON(message: ContractCallSubmitted): unknown;
    create<I extends Exact<DeepPartial<ContractCallSubmitted>, I>>(base?: I): ContractCallSubmitted;
    fromPartial<I extends Exact<DeepPartial<ContractCallSubmitted>, I>>(object: I): ContractCallSubmitted;
};
export declare const ContractCallWithTokenSubmitted: {
    $type: "axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted";
    encode(message: ContractCallWithTokenSubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCallWithTokenSubmitted;
    fromJSON(object: any): ContractCallWithTokenSubmitted;
    toJSON(message: ContractCallWithTokenSubmitted): unknown;
    create<I extends Exact<DeepPartial<ContractCallWithTokenSubmitted>, I>>(base?: I): ContractCallWithTokenSubmitted;
    fromPartial<I extends Exact<DeepPartial<ContractCallWithTokenSubmitted>, I>>(object: I): ContractCallWithTokenSubmitted;
};
export declare const TokenSent: {
    $type: "axelar.axelarnet.v1beta1.TokenSent";
    encode(message: TokenSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenSent;
    fromJSON(object: any): TokenSent;
    toJSON(message: TokenSent): unknown;
    create<I extends Exact<DeepPartial<TokenSent>, I>>(base?: I): TokenSent;
    fromPartial<I extends Exact<DeepPartial<TokenSent>, I>>(object: I): TokenSent;
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
