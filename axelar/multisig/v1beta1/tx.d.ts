import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "axelar.multisig.v1beta1";
export interface StartKeygenRequest {
    $type: "axelar.multisig.v1beta1.StartKeygenRequest";
    sender: string;
    keyId: string;
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
}
export interface StartKeygenResponse {
    $type: "axelar.multisig.v1beta1.StartKeygenResponse";
}
export interface SubmitPubKeyRequest {
    $type: "axelar.multisig.v1beta1.SubmitPubKeyRequest";
    sender: string;
    keyId: string;
    pubKey: Buffer;
    signature: Buffer;
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
}
export interface SubmitPubKeyResponse {
    $type: "axelar.multisig.v1beta1.SubmitPubKeyResponse";
}
export interface SubmitSignatureRequest {
    $type: "axelar.multisig.v1beta1.SubmitSignatureRequest";
    sender: string;
    sigId: Long;
    signature: Buffer;
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
}
export interface SubmitSignatureResponse {
    $type: "axelar.multisig.v1beta1.SubmitSignatureResponse";
}
export interface RotateKeyRequest {
    $type: "axelar.multisig.v1beta1.RotateKeyRequest";
    sender: string;
    chain: string;
    keyId: string;
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
}
export interface RotateKeyResponse {
    $type: "axelar.multisig.v1beta1.RotateKeyResponse";
}
export interface KeygenOptOutRequest {
    $type: "axelar.multisig.v1beta1.KeygenOptOutRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    sender: string;
}
export interface KeygenOptOutResponse {
    $type: "axelar.multisig.v1beta1.KeygenOptOutResponse";
}
export interface KeygenOptInRequest {
    $type: "axelar.multisig.v1beta1.KeygenOptInRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    sender: string;
}
export interface KeygenOptInResponse {
    $type: "axelar.multisig.v1beta1.KeygenOptInResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.multisig.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.multisig.v1beta1.UpdateParamsResponse";
}
export declare const StartKeygenRequest: {
    $type: "axelar.multisig.v1beta1.StartKeygenRequest";
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenRequest;
    fromJSON(object: any): StartKeygenRequest;
    toJSON(message: StartKeygenRequest): unknown;
    create<I extends Exact<DeepPartial<StartKeygenRequest>, I>>(base?: I): StartKeygenRequest;
    fromPartial<I extends Exact<DeepPartial<StartKeygenRequest>, I>>(object: I): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    $type: "axelar.multisig.v1beta1.StartKeygenResponse";
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenResponse;
    fromJSON(_: any): StartKeygenResponse;
    toJSON(_: StartKeygenResponse): unknown;
    create<I extends Exact<DeepPartial<StartKeygenResponse>, I>>(base?: I): StartKeygenResponse;
    fromPartial<I extends Exact<DeepPartial<StartKeygenResponse>, I>>(_: I): StartKeygenResponse;
};
export declare const SubmitPubKeyRequest: {
    $type: "axelar.multisig.v1beta1.SubmitPubKeyRequest";
    encode(message: SubmitPubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitPubKeyRequest;
    fromJSON(object: any): SubmitPubKeyRequest;
    toJSON(message: SubmitPubKeyRequest): unknown;
    create<I extends Exact<DeepPartial<SubmitPubKeyRequest>, I>>(base?: I): SubmitPubKeyRequest;
    fromPartial<I extends Exact<DeepPartial<SubmitPubKeyRequest>, I>>(object: I): SubmitPubKeyRequest;
};
export declare const SubmitPubKeyResponse: {
    $type: "axelar.multisig.v1beta1.SubmitPubKeyResponse";
    encode(_: SubmitPubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitPubKeyResponse;
    fromJSON(_: any): SubmitPubKeyResponse;
    toJSON(_: SubmitPubKeyResponse): unknown;
    create<I extends Exact<DeepPartial<SubmitPubKeyResponse>, I>>(base?: I): SubmitPubKeyResponse;
    fromPartial<I extends Exact<DeepPartial<SubmitPubKeyResponse>, I>>(_: I): SubmitPubKeyResponse;
};
export declare const SubmitSignatureRequest: {
    $type: "axelar.multisig.v1beta1.SubmitSignatureRequest";
    encode(message: SubmitSignatureRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitSignatureRequest;
    fromJSON(object: any): SubmitSignatureRequest;
    toJSON(message: SubmitSignatureRequest): unknown;
    create<I extends Exact<DeepPartial<SubmitSignatureRequest>, I>>(base?: I): SubmitSignatureRequest;
    fromPartial<I extends Exact<DeepPartial<SubmitSignatureRequest>, I>>(object: I): SubmitSignatureRequest;
};
export declare const SubmitSignatureResponse: {
    $type: "axelar.multisig.v1beta1.SubmitSignatureResponse";
    encode(_: SubmitSignatureResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitSignatureResponse;
    fromJSON(_: any): SubmitSignatureResponse;
    toJSON(_: SubmitSignatureResponse): unknown;
    create<I extends Exact<DeepPartial<SubmitSignatureResponse>, I>>(base?: I): SubmitSignatureResponse;
    fromPartial<I extends Exact<DeepPartial<SubmitSignatureResponse>, I>>(_: I): SubmitSignatureResponse;
};
export declare const RotateKeyRequest: {
    $type: "axelar.multisig.v1beta1.RotateKeyRequest";
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyRequest;
    fromJSON(object: any): RotateKeyRequest;
    toJSON(message: RotateKeyRequest): unknown;
    create<I extends Exact<DeepPartial<RotateKeyRequest>, I>>(base?: I): RotateKeyRequest;
    fromPartial<I extends Exact<DeepPartial<RotateKeyRequest>, I>>(object: I): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    $type: "axelar.multisig.v1beta1.RotateKeyResponse";
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyResponse;
    fromJSON(_: any): RotateKeyResponse;
    toJSON(_: RotateKeyResponse): unknown;
    create<I extends Exact<DeepPartial<RotateKeyResponse>, I>>(base?: I): RotateKeyResponse;
    fromPartial<I extends Exact<DeepPartial<RotateKeyResponse>, I>>(_: I): RotateKeyResponse;
};
export declare const KeygenOptOutRequest: {
    $type: "axelar.multisig.v1beta1.KeygenOptOutRequest";
    encode(message: KeygenOptOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptOutRequest;
    fromJSON(object: any): KeygenOptOutRequest;
    toJSON(message: KeygenOptOutRequest): unknown;
    create<I extends Exact<DeepPartial<KeygenOptOutRequest>, I>>(base?: I): KeygenOptOutRequest;
    fromPartial<I extends Exact<DeepPartial<KeygenOptOutRequest>, I>>(object: I): KeygenOptOutRequest;
};
export declare const KeygenOptOutResponse: {
    $type: "axelar.multisig.v1beta1.KeygenOptOutResponse";
    encode(_: KeygenOptOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptOutResponse;
    fromJSON(_: any): KeygenOptOutResponse;
    toJSON(_: KeygenOptOutResponse): unknown;
    create<I extends Exact<DeepPartial<KeygenOptOutResponse>, I>>(base?: I): KeygenOptOutResponse;
    fromPartial<I extends Exact<DeepPartial<KeygenOptOutResponse>, I>>(_: I): KeygenOptOutResponse;
};
export declare const KeygenOptInRequest: {
    $type: "axelar.multisig.v1beta1.KeygenOptInRequest";
    encode(message: KeygenOptInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptInRequest;
    fromJSON(object: any): KeygenOptInRequest;
    toJSON(message: KeygenOptInRequest): unknown;
    create<I extends Exact<DeepPartial<KeygenOptInRequest>, I>>(base?: I): KeygenOptInRequest;
    fromPartial<I extends Exact<DeepPartial<KeygenOptInRequest>, I>>(object: I): KeygenOptInRequest;
};
export declare const KeygenOptInResponse: {
    $type: "axelar.multisig.v1beta1.KeygenOptInResponse";
    encode(_: KeygenOptInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeygenOptInResponse;
    fromJSON(_: any): KeygenOptInResponse;
    toJSON(_: KeygenOptInResponse): unknown;
    create<I extends Exact<DeepPartial<KeygenOptInResponse>, I>>(base?: I): KeygenOptInResponse;
    fromPartial<I extends Exact<DeepPartial<KeygenOptInResponse>, I>>(_: I): KeygenOptInResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.multisig.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(base?: I): UpdateParamsRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.multisig.v1beta1.UpdateParamsResponse";
    encode(_: UpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsResponse;
    fromJSON(_: any): UpdateParamsResponse;
    toJSON(_: UpdateParamsResponse): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsResponse>, I>>(base?: I): UpdateParamsResponse;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsResponse>, I>>(_: I): UpdateParamsResponse;
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
