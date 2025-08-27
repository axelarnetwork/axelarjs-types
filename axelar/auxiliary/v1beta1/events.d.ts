import Long from "long";
import _m0 from "protobufjs/minimal";
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
    create<I extends {
        index?: number | undefined;
        error?: string | undefined;
    } & {
        index?: number | undefined;
        error?: string | undefined;
    } & { [K in Exclude<keyof I, keyof BatchedMessageFailed>]: never; }>(base?: I | undefined): BatchedMessageFailed;
    fromPartial<I_1 extends {
        index?: number | undefined;
        error?: string | undefined;
    } & {
        index?: number | undefined;
        error?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BatchedMessageFailed>]: never; }>(object: I_1): BatchedMessageFailed;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
