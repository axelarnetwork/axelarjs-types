import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.tss.tofnd.v1beta1";
/** File copied from golang tofnd with minor tweaks */
export interface KeygenRequest {
    keyUid: string;
    /** used only for logging */
    partyUid: string;
}
export interface KeygenResponse {
    /** SEC1-encoded compressed curve point */
    pubKey: Uint8Array | undefined;
    /** reply with an error message if keygen fails */
    error: string | undefined;
}
export interface SignRequest {
    keyUid: string;
    /** 32-byte pre-hashed message digest */
    msgToSign: Uint8Array;
    /** used only for logging */
    partyUid: string;
    /** SEC1-encoded compressed pub key bytes to find the right */
    pubKey: Uint8Array;
}
export interface SignResponse {
    /** ASN.1 DER-encoded ECDSA signature */
    signature: Uint8Array | undefined;
    /** reply with an error message if sign fails */
    error: string | undefined;
}
export declare const KeygenRequest: {
    encode(message: KeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenRequest;
    fromJSON(object: any): KeygenRequest;
    toJSON(message: KeygenRequest): unknown;
    fromPartial<I extends {
        keyUid?: string | undefined;
        partyUid?: string | undefined;
    } & {
        keyUid?: string | undefined;
        partyUid?: string | undefined;
    } & Record<Exclude<keyof I, keyof KeygenRequest>, never>>(object: I): KeygenRequest;
};
export declare const KeygenResponse: {
    encode(message: KeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenResponse;
    fromJSON(object: any): KeygenResponse;
    toJSON(message: KeygenResponse): unknown;
    fromPartial<I extends {
        pubKey?: Uint8Array | undefined;
        error?: string | undefined;
    } & {
        pubKey?: Uint8Array | undefined;
        error?: string | undefined;
    } & Record<Exclude<keyof I, keyof KeygenResponse>, never>>(object: I): KeygenResponse;
};
export declare const SignRequest: {
    encode(message: SignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignRequest;
    fromJSON(object: any): SignRequest;
    toJSON(message: SignRequest): unknown;
    fromPartial<I extends {
        keyUid?: string | undefined;
        msgToSign?: Uint8Array | undefined;
        partyUid?: string | undefined;
        pubKey?: Uint8Array | undefined;
    } & {
        keyUid?: string | undefined;
        msgToSign?: Uint8Array | undefined;
        partyUid?: string | undefined;
        pubKey?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof SignRequest>, never>>(object: I): SignRequest;
};
export declare const SignResponse: {
    encode(message: SignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignResponse;
    fromJSON(object: any): SignResponse;
    toJSON(message: SignResponse): unknown;
    fromPartial<I extends {
        signature?: Uint8Array | undefined;
        error?: string | undefined;
    } & {
        signature?: Uint8Array | undefined;
        error?: string | undefined;
    } & Record<Exclude<keyof I, keyof SignResponse>, never>>(object: I): SignResponse;
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
