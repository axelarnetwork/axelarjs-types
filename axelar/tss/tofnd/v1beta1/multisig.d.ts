import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.tss.tofnd.v1beta1";
/** File copied from golang tofnd with minor tweaks */
export interface KeygenRequest {
    $type: "axelar.tss.tofnd.v1beta1.KeygenRequest";
    keyUid: string;
    /** used only for logging */
    partyUid: string;
}
export interface KeygenResponse {
    $type: "axelar.tss.tofnd.v1beta1.KeygenResponse";
    /** SEC1-encoded compressed curve point */
    pubKey?: Buffer | undefined;
    /** reply with an error message if keygen fails */
    error?: string | undefined;
}
export interface SignRequest {
    $type: "axelar.tss.tofnd.v1beta1.SignRequest";
    keyUid: string;
    /** 32-byte pre-hashed message digest */
    msgToSign: Buffer;
    /** used only for logging */
    partyUid: string;
    /** SEC1-encoded compressed pub key bytes to find the right */
    pubKey: Buffer;
}
export interface SignResponse {
    $type: "axelar.tss.tofnd.v1beta1.SignResponse";
    /** ASN.1 DER-encoded ECDSA signature */
    signature?: Buffer | undefined;
    /** reply with an error message if sign fails */
    error?: string | undefined;
}
export declare const KeygenRequest: {
    $type: "axelar.tss.tofnd.v1beta1.KeygenRequest";
    encode(message: KeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenRequest;
    fromJSON(object: any): KeygenRequest;
    toJSON(message: KeygenRequest): unknown;
    create<I extends Exact<DeepPartial<KeygenRequest>, I>>(base?: I): KeygenRequest;
    fromPartial<I extends Exact<DeepPartial<KeygenRequest>, I>>(object: I): KeygenRequest;
};
export declare const KeygenResponse: {
    $type: "axelar.tss.tofnd.v1beta1.KeygenResponse";
    encode(message: KeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenResponse;
    fromJSON(object: any): KeygenResponse;
    toJSON(message: KeygenResponse): unknown;
    create<I extends Exact<DeepPartial<KeygenResponse>, I>>(base?: I): KeygenResponse;
    fromPartial<I extends Exact<DeepPartial<KeygenResponse>, I>>(object: I): KeygenResponse;
};
export declare const SignRequest: {
    $type: "axelar.tss.tofnd.v1beta1.SignRequest";
    encode(message: SignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignRequest;
    fromJSON(object: any): SignRequest;
    toJSON(message: SignRequest): unknown;
    create<I extends Exact<DeepPartial<SignRequest>, I>>(base?: I): SignRequest;
    fromPartial<I extends Exact<DeepPartial<SignRequest>, I>>(object: I): SignRequest;
};
export declare const SignResponse: {
    $type: "axelar.tss.tofnd.v1beta1.SignResponse";
    encode(message: SignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignResponse;
    fromJSON(object: any): SignResponse;
    toJSON(message: SignResponse): unknown;
    create<I extends Exact<DeepPartial<SignResponse>, I>>(base?: I): SignResponse;
    fromPartial<I extends Exact<DeepPartial<SignResponse>, I>>(object: I): SignResponse;
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
