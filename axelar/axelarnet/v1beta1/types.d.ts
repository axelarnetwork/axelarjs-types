import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
export interface IBCTransfer {
    $type: "axelar.axelarnet.v1beta1.IBCTransfer";
    sender: Buffer;
    receiver: string;
    token?: Coin | undefined;
    portId: string;
    channelId: string;
    /** @deprecated */
    sequence: Long;
    id: Long;
    status: IBCTransfer_Status;
}
export declare enum IBCTransfer_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_PENDING = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function iBCTransfer_StatusFromJSON(object: any): IBCTransfer_Status;
export declare function iBCTransfer_StatusToJSON(object: IBCTransfer_Status): string;
export interface CosmosChain {
    $type: "axelar.axelarnet.v1beta1.CosmosChain";
    name: string;
    ibcPath: string;
    /** @deprecated */
    assets: Asset[];
    addrPrefix: string;
}
/** @deprecated */
export interface Asset {
    $type: "axelar.axelarnet.v1beta1.Asset";
    denom: string;
    minAmount: Buffer;
}
export interface Fee {
    $type: "axelar.axelarnet.v1beta1.Fee";
    amount?: Coin | undefined;
    recipient: Buffer;
    refundRecipient: Buffer;
}
export declare const IBCTransfer: {
    $type: "axelar.axelarnet.v1beta1.IBCTransfer";
    encode(message: IBCTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCTransfer;
    fromJSON(object: any): IBCTransfer;
    toJSON(message: IBCTransfer): unknown;
    create<I extends Exact<DeepPartial<IBCTransfer>, I>>(base?: I): IBCTransfer;
    fromPartial<I extends Exact<DeepPartial<IBCTransfer>, I>>(object: I): IBCTransfer;
};
export declare const CosmosChain: {
    $type: "axelar.axelarnet.v1beta1.CosmosChain";
    encode(message: CosmosChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CosmosChain;
    fromJSON(object: any): CosmosChain;
    toJSON(message: CosmosChain): unknown;
    create<I extends Exact<DeepPartial<CosmosChain>, I>>(base?: I): CosmosChain;
    fromPartial<I extends Exact<DeepPartial<CosmosChain>, I>>(object: I): CosmosChain;
};
export declare const Asset: {
    $type: "axelar.axelarnet.v1beta1.Asset";
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    create<I extends Exact<DeepPartial<Asset>, I>>(base?: I): Asset;
    fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset;
};
export declare const Fee: {
    $type: "axelar.axelarnet.v1beta1.Fee";
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fee;
    fromJSON(object: any): Fee;
    toJSON(message: Fee): unknown;
    create<I extends Exact<DeepPartial<Fee>, I>>(base?: I): Fee;
    fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee;
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
