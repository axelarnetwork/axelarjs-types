import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "axelar.distribution.v1beta1";
export interface FeesBurned {
    $type: "axelar.distribution.v1beta1.FeesBurned";
    coins: Coin[];
}
export declare const FeesBurned: {
    $type: "axelar.distribution.v1beta1.FeesBurned";
    encode(message: FeesBurned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeesBurned;
    fromJSON(object: any): FeesBurned;
    toJSON(message: FeesBurned): unknown;
    create<I extends Exact<DeepPartial<FeesBurned>, I>>(base?: I): FeesBurned;
    fromPartial<I extends Exact<DeepPartial<FeesBurned>, I>>(object: I): FeesBurned;
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
