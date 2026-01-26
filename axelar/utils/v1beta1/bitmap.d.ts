import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.utils.v1beta1";
export interface Bitmap {
    $type: "axelar.utils.v1beta1.Bitmap";
    trueCountCache?: CircularBuffer | undefined;
}
export interface CircularBuffer {
    $type: "axelar.utils.v1beta1.CircularBuffer";
    cumulativeValue: Long[];
    index: number;
    maxSize: number;
}
export declare const Bitmap: {
    $type: "axelar.utils.v1beta1.Bitmap";
    encode(message: Bitmap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bitmap;
    fromJSON(object: any): Bitmap;
    toJSON(message: Bitmap): unknown;
    create<I extends Exact<DeepPartial<Bitmap>, I>>(base?: I): Bitmap;
    fromPartial<I extends Exact<DeepPartial<Bitmap>, I>>(object: I): Bitmap;
};
export declare const CircularBuffer: {
    $type: "axelar.utils.v1beta1.CircularBuffer";
    encode(message: CircularBuffer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CircularBuffer;
    fromJSON(object: any): CircularBuffer;
    toJSON(message: CircularBuffer): unknown;
    create<I extends Exact<DeepPartial<CircularBuffer>, I>>(base?: I): CircularBuffer;
    fromPartial<I extends Exact<DeepPartial<CircularBuffer>, I>>(object: I): CircularBuffer;
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
