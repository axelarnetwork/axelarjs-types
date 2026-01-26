import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.utils.v1beta1";
export interface Threshold {
    $type: "axelar.utils.v1beta1.Threshold";
    /**
     * split threshold into Numerator and denominator to avoid floating point
     * errors down the line
     */
    numerator: Long;
    denominator: Long;
}
export declare const Threshold: {
    $type: "axelar.utils.v1beta1.Threshold";
    encode(message: Threshold, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Threshold;
    fromJSON(object: any): Threshold;
    toJSON(message: Threshold): unknown;
    create<I extends Exact<DeepPartial<Threshold>, I>>(base?: I): Threshold;
    fromPartial<I extends Exact<DeepPartial<Threshold>, I>>(object: I): Threshold;
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
