import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.permission.v1beta1";
/** Params represent the genesis parameters for the module */
export interface Params {
    $type: "axelar.permission.v1beta1.Params";
}
export declare const Params: {
    $type: "axelar.permission.v1beta1.Params";
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(_: any): Params;
    toJSON(_: Params): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): Params;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): Params;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
