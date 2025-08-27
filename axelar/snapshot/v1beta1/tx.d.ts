/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
export interface RegisterProxyRequest {
    proxyAddr: Buffer;
    sender: string;
}
export interface RegisterProxyResponse {
}
export interface DeactivateProxyRequest {
    /** @deprecated */
    senderBz: Buffer;
    sender: string;
}
export interface DeactivateProxyResponse {
}
export declare const RegisterProxyRequest: {
    encode(message: RegisterProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterProxyRequest;
    fromJSON(object: any): RegisterProxyRequest;
    toJSON(message: RegisterProxyRequest): unknown;
    create<I extends {
        proxyAddr?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        proxyAddr?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RegisterProxyRequest>]: never; }>(base?: I | undefined): RegisterProxyRequest;
    fromPartial<I_1 extends {
        proxyAddr?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        proxyAddr?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RegisterProxyRequest>]: never; }>(object: I_1): RegisterProxyRequest;
};
export declare const RegisterProxyResponse: {
    encode(_: RegisterProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterProxyResponse;
    fromJSON(_: any): RegisterProxyResponse;
    toJSON(_: RegisterProxyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RegisterProxyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RegisterProxyResponse;
};
export declare const DeactivateProxyRequest: {
    encode(message: DeactivateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateProxyRequest;
    fromJSON(object: any): DeactivateProxyRequest;
    toJSON(message: DeactivateProxyRequest): unknown;
    create<I extends {
        senderBz?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        senderBz?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeactivateProxyRequest>]: never; }>(base?: I | undefined): DeactivateProxyRequest;
    fromPartial<I_1 extends {
        senderBz?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        senderBz?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeactivateProxyRequest>]: never; }>(object: I_1): DeactivateProxyRequest;
};
export declare const DeactivateProxyResponse: {
    encode(_: DeactivateProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateProxyResponse;
    fromJSON(_: any): DeactivateProxyResponse;
    toJSON(_: DeactivateProxyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): DeactivateProxyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeactivateProxyResponse;
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
