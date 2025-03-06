import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.auxiliary.v1beta1";
export interface BatchedMessageFailed {
    index: number;
    error: string;
}
export declare const BatchedMessageFailed: {
    encode(message: BatchedMessageFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchedMessageFailed;
    fromJSON(object: any): BatchedMessageFailed;
    toJSON(message: BatchedMessageFailed): unknown;
    fromPartial<I extends {
        index?: number | undefined;
        error?: string | undefined;
    } & {
        index?: number | undefined;
        error?: string | undefined;
    } & Record<Exclude<keyof I, keyof BatchedMessageFailed>, never>>(object: I): BatchedMessageFailed;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
