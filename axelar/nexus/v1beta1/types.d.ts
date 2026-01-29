import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Bitmap } from "../../utils/v1beta1/bitmap";
import { Asset, Chain, CrossChainAddress, TransferDirection } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface MaintainerState {
    $type: "axelar.nexus.v1beta1.MaintainerState";
    address: Buffer;
    missingVotes?: Bitmap | undefined;
    incorrectVotes?: Bitmap | undefined;
    chain: string;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainState {
    $type: "axelar.nexus.v1beta1.ChainState";
    chain?: Chain | undefined;
    activated: boolean;
    assets: Asset[];
    /** @deprecated */
    maintainerStates: MaintainerState[];
}
export interface LinkedAddresses {
    $type: "axelar.nexus.v1beta1.LinkedAddresses";
    depositAddress?: CrossChainAddress | undefined;
    recipientAddress?: CrossChainAddress | undefined;
}
export interface RateLimit {
    $type: "axelar.nexus.v1beta1.RateLimit";
    chain: string;
    limit?: Coin | undefined;
    window?: Duration | undefined;
}
export interface TransferEpoch {
    $type: "axelar.nexus.v1beta1.TransferEpoch";
    chain: string;
    amount?: Coin | undefined;
    epoch: Long;
    /** indicates whether the rate tracking is for transfers going */
    direction: TransferDirection;
}
export declare const MaintainerState: {
    $type: "axelar.nexus.v1beta1.MaintainerState";
    encode(message: MaintainerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaintainerState;
    fromJSON(object: any): MaintainerState;
    toJSON(message: MaintainerState): unknown;
    create<I extends Exact<DeepPartial<MaintainerState>, I>>(base?: I): MaintainerState;
    fromPartial<I extends Exact<DeepPartial<MaintainerState>, I>>(object: I): MaintainerState;
};
export declare const ChainState: {
    $type: "axelar.nexus.v1beta1.ChainState";
    encode(message: ChainState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainState;
    fromJSON(object: any): ChainState;
    toJSON(message: ChainState): unknown;
    create<I extends Exact<DeepPartial<ChainState>, I>>(base?: I): ChainState;
    fromPartial<I extends Exact<DeepPartial<ChainState>, I>>(object: I): ChainState;
};
export declare const LinkedAddresses: {
    $type: "axelar.nexus.v1beta1.LinkedAddresses";
    encode(message: LinkedAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkedAddresses;
    fromJSON(object: any): LinkedAddresses;
    toJSON(message: LinkedAddresses): unknown;
    create<I extends Exact<DeepPartial<LinkedAddresses>, I>>(base?: I): LinkedAddresses;
    fromPartial<I extends Exact<DeepPartial<LinkedAddresses>, I>>(object: I): LinkedAddresses;
};
export declare const RateLimit: {
    $type: "axelar.nexus.v1beta1.RateLimit";
    encode(message: RateLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit;
    fromJSON(object: any): RateLimit;
    toJSON(message: RateLimit): unknown;
    create<I extends Exact<DeepPartial<RateLimit>, I>>(base?: I): RateLimit;
    fromPartial<I extends Exact<DeepPartial<RateLimit>, I>>(object: I): RateLimit;
};
export declare const TransferEpoch: {
    $type: "axelar.nexus.v1beta1.TransferEpoch";
    encode(message: TransferEpoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferEpoch;
    fromJSON(object: any): TransferEpoch;
    toJSON(message: TransferEpoch): unknown;
    create<I extends Exact<DeepPartial<TransferEpoch>, I>>(base?: I): TransferEpoch;
    fromPartial<I extends Exact<DeepPartial<TransferEpoch>, I>>(object: I): TransferEpoch;
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
