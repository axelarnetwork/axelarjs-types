import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
export interface Metadata {
    sender: string;
    sourceChain: string;
    payload: Uint8Array;
    type: Metadata_Type;
    destChain: string;
    destAddress: string;
}
export declare enum Metadata_Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_GENERAL_MESSAGE = 1,
    TYPE_GENERAL_MESSAGE_WITH_TOKEN = 2,
    UNRECOGNIZED = -1
}
export declare function metadata_TypeFromJSON(object: any): Metadata_Type;
export declare function metadata_TypeToJSON(object: Metadata_Type): string;
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        sourceChain?: string | undefined;
        payload?: Uint8Array | undefined;
        type?: Metadata_Type | undefined;
        destChain?: string | undefined;
        destAddress?: string | undefined;
    } & {
        sender?: string | undefined;
        sourceChain?: string | undefined;
        payload?: Uint8Array | undefined;
        type?: Metadata_Type | undefined;
        destChain?: string | undefined;
        destAddress?: string | undefined;
    } & Record<Exclude<keyof I, keyof Metadata>, never>>(object: I): Metadata;
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
