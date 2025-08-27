/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.tss.tofnd.v1beta1";
/** File copied from golang tofnd with minor tweaks */
export interface KeygenRequest {
    keyUid: string;
    /** used only for logging */
    partyUid: string;
}
export interface KeygenResponse {
    /** SEC1-encoded compressed curve point */
    pubKey?: Buffer | undefined;
    /** reply with an error message if keygen fails */
    error?: string | undefined;
}
export interface SignRequest {
    keyUid: string;
    /** 32-byte pre-hashed message digest */
    msgToSign: Buffer;
    /** used only for logging */
    partyUid: string;
    /** SEC1-encoded compressed pub key bytes to find the right */
    pubKey: Buffer;
}
export interface SignResponse {
    /** ASN.1 DER-encoded ECDSA signature */
    signature?: Buffer | undefined;
    /** reply with an error message if sign fails */
    error?: string | undefined;
}
export declare const KeygenRequest: {
    encode(message: KeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenRequest;
    fromJSON(object: any): KeygenRequest;
    toJSON(message: KeygenRequest): unknown;
    create<I extends {
        keyUid?: string | undefined;
        partyUid?: string | undefined;
    } & {
        keyUid?: string | undefined;
        partyUid?: string | undefined;
    } & { [K in Exclude<keyof I, keyof KeygenRequest>]: never; }>(base?: I | undefined): KeygenRequest;
    fromPartial<I_1 extends {
        keyUid?: string | undefined;
        partyUid?: string | undefined;
    } & {
        keyUid?: string | undefined;
        partyUid?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeygenRequest>]: never; }>(object: I_1): KeygenRequest;
};
export declare const KeygenResponse: {
    encode(message: KeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenResponse;
    fromJSON(object: any): KeygenResponse;
    toJSON(message: KeygenResponse): unknown;
    create<I extends {
        pubKey?: Buffer | undefined;
        error?: string | undefined;
    } & {
        pubKey?: Buffer | undefined;
        error?: string | undefined;
    } & { [K in Exclude<keyof I, keyof KeygenResponse>]: never; }>(base?: I | undefined): KeygenResponse;
    fromPartial<I_1 extends {
        pubKey?: Buffer | undefined;
        error?: string | undefined;
    } & {
        pubKey?: Buffer | undefined;
        error?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeygenResponse>]: never; }>(object: I_1): KeygenResponse;
};
export declare const SignRequest: {
    encode(message: SignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignRequest;
    fromJSON(object: any): SignRequest;
    toJSON(message: SignRequest): unknown;
    create<I extends {
        keyUid?: string | undefined;
        msgToSign?: Buffer | undefined;
        partyUid?: string | undefined;
        pubKey?: Buffer | undefined;
    } & {
        keyUid?: string | undefined;
        msgToSign?: Buffer | undefined;
        partyUid?: string | undefined;
        pubKey?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof SignRequest>]: never; }>(base?: I | undefined): SignRequest;
    fromPartial<I_1 extends {
        keyUid?: string | undefined;
        msgToSign?: Buffer | undefined;
        partyUid?: string | undefined;
        pubKey?: Buffer | undefined;
    } & {
        keyUid?: string | undefined;
        msgToSign?: Buffer | undefined;
        partyUid?: string | undefined;
        pubKey?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SignRequest>]: never; }>(object: I_1): SignRequest;
};
export declare const SignResponse: {
    encode(message: SignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignResponse;
    fromJSON(object: any): SignResponse;
    toJSON(message: SignResponse): unknown;
    create<I extends {
        signature?: Buffer | undefined;
        error?: string | undefined;
    } & {
        signature?: Buffer | undefined;
        error?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SignResponse>]: never; }>(base?: I | undefined): SignResponse;
    fromPartial<I_1 extends {
        signature?: Buffer | undefined;
        error?: string | undefined;
    } & {
        signature?: Buffer | undefined;
        error?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SignResponse>]: never; }>(object: I_1): SignResponse;
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
