import Long from "long";
import _m0 from "protobufjs/minimal";
import { PollKey } from "../../vote/exported/v1beta1/types";
import { KeyRole, SigKeyPair } from "../exported/v1beta1/types";
import { MessageOut_KeygenResult, MessageOut_SignResult, TrafficOut } from "../tofnd/v1beta1/tofnd";
import { Params } from "./params";
import { KeyInfo } from "./types";
export declare const protobufPackage = "axelar.tss.v1beta1";
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequest {
    $type: "axelar.tss.v1beta1.StartKeygenRequest";
    sender: string;
    keyInfo?: KeyInfo | undefined;
}
export interface StartKeygenResponse {
    $type: "axelar.tss.v1beta1.StartKeygenResponse";
}
export interface RotateKeyRequest {
    $type: "axelar.tss.v1beta1.RotateKeyRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    keyRole: KeyRole;
    keyId: string;
    sender: string;
}
export interface RotateKeyResponse {
    $type: "axelar.tss.v1beta1.RotateKeyResponse";
}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequest {
    $type: "axelar.tss.v1beta1.ProcessKeygenTrafficRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    sessionId: string;
    payload?: TrafficOut | undefined;
    sender: string;
}
export interface ProcessKeygenTrafficResponse {
    $type: "axelar.tss.v1beta1.ProcessKeygenTrafficResponse";
}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequest {
    $type: "axelar.tss.v1beta1.ProcessSignTrafficRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    sessionId: string;
    payload?: TrafficOut | undefined;
    sender: string;
}
export interface ProcessSignTrafficResponse {
    $type: "axelar.tss.v1beta1.ProcessSignTrafficResponse";
}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequest {
    $type: "axelar.tss.v1beta1.VotePubKeyRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    pollKey?: PollKey | undefined;
    result?: MessageOut_KeygenResult | undefined;
    sender: string;
}
export interface VotePubKeyResponse {
    $type: "axelar.tss.v1beta1.VotePubKeyResponse";
    log: string;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequest {
    $type: "axelar.tss.v1beta1.VoteSigRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    pollKey?: PollKey | undefined;
    result?: MessageOut_SignResult | undefined;
    sender: string;
}
export interface VoteSigResponse {
    $type: "axelar.tss.v1beta1.VoteSigResponse";
    log: string;
}
export interface HeartBeatRequest {
    $type: "axelar.tss.v1beta1.HeartBeatRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    /**
     * Deprecated: this field will be removed in the next release
     *
     * @deprecated
     */
    keyIds: string[];
    sender: string;
}
export interface HeartBeatResponse {
    $type: "axelar.tss.v1beta1.HeartBeatResponse";
}
export interface RegisterExternalKeysRequest {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    externalKeys: RegisterExternalKeysRequest_ExternalKey[];
    sender: string;
}
export interface RegisterExternalKeysRequest_ExternalKey {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysRequest.ExternalKey";
    id: string;
    pubKey: Buffer;
}
export interface RegisterExternalKeysResponse {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysResponse";
}
export interface SubmitMultisigPubKeysRequest {
    $type: "axelar.tss.v1beta1.SubmitMultisigPubKeysRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    keyId: string;
    sigKeyPairs: SigKeyPair[];
    sender: string;
}
export interface SubmitMultisigPubKeysResponse {
    $type: "axelar.tss.v1beta1.SubmitMultisigPubKeysResponse";
}
export interface SubmitMultisigSignaturesRequest {
    $type: "axelar.tss.v1beta1.SubmitMultisigSignaturesRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    sigId: string;
    signatures: Buffer[];
    sender: string;
}
export interface SubmitMultisigSignaturesResponse {
    $type: "axelar.tss.v1beta1.SubmitMultisigSignaturesResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.tss.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.tss.v1beta1.UpdateParamsResponse";
}
export declare const StartKeygenRequest: {
    $type: "axelar.tss.v1beta1.StartKeygenRequest";
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenRequest;
    fromJSON(object: any): StartKeygenRequest;
    toJSON(message: StartKeygenRequest): unknown;
    create<I extends Exact<DeepPartial<StartKeygenRequest>, I>>(base?: I): StartKeygenRequest;
    fromPartial<I extends Exact<DeepPartial<StartKeygenRequest>, I>>(object: I): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    $type: "axelar.tss.v1beta1.StartKeygenResponse";
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenResponse;
    fromJSON(_: any): StartKeygenResponse;
    toJSON(_: StartKeygenResponse): unknown;
    create<I extends Exact<DeepPartial<StartKeygenResponse>, I>>(base?: I): StartKeygenResponse;
    fromPartial<I extends Exact<DeepPartial<StartKeygenResponse>, I>>(_: I): StartKeygenResponse;
};
export declare const RotateKeyRequest: {
    $type: "axelar.tss.v1beta1.RotateKeyRequest";
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyRequest;
    fromJSON(object: any): RotateKeyRequest;
    toJSON(message: RotateKeyRequest): unknown;
    create<I extends Exact<DeepPartial<RotateKeyRequest>, I>>(base?: I): RotateKeyRequest;
    fromPartial<I extends Exact<DeepPartial<RotateKeyRequest>, I>>(object: I): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    $type: "axelar.tss.v1beta1.RotateKeyResponse";
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyResponse;
    fromJSON(_: any): RotateKeyResponse;
    toJSON(_: RotateKeyResponse): unknown;
    create<I extends Exact<DeepPartial<RotateKeyResponse>, I>>(base?: I): RotateKeyResponse;
    fromPartial<I extends Exact<DeepPartial<RotateKeyResponse>, I>>(_: I): RotateKeyResponse;
};
export declare const ProcessKeygenTrafficRequest: {
    $type: "axelar.tss.v1beta1.ProcessKeygenTrafficRequest";
    encode(message: ProcessKeygenTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessKeygenTrafficRequest;
    fromJSON(object: any): ProcessKeygenTrafficRequest;
    toJSON(message: ProcessKeygenTrafficRequest): unknown;
    create<I extends Exact<DeepPartial<ProcessKeygenTrafficRequest>, I>>(base?: I): ProcessKeygenTrafficRequest;
    fromPartial<I extends Exact<DeepPartial<ProcessKeygenTrafficRequest>, I>>(object: I): ProcessKeygenTrafficRequest;
};
export declare const ProcessKeygenTrafficResponse: {
    $type: "axelar.tss.v1beta1.ProcessKeygenTrafficResponse";
    encode(_: ProcessKeygenTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessKeygenTrafficResponse;
    fromJSON(_: any): ProcessKeygenTrafficResponse;
    toJSON(_: ProcessKeygenTrafficResponse): unknown;
    create<I extends Exact<DeepPartial<ProcessKeygenTrafficResponse>, I>>(base?: I): ProcessKeygenTrafficResponse;
    fromPartial<I extends Exact<DeepPartial<ProcessKeygenTrafficResponse>, I>>(_: I): ProcessKeygenTrafficResponse;
};
export declare const ProcessSignTrafficRequest: {
    $type: "axelar.tss.v1beta1.ProcessSignTrafficRequest";
    encode(message: ProcessSignTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessSignTrafficRequest;
    fromJSON(object: any): ProcessSignTrafficRequest;
    toJSON(message: ProcessSignTrafficRequest): unknown;
    create<I extends Exact<DeepPartial<ProcessSignTrafficRequest>, I>>(base?: I): ProcessSignTrafficRequest;
    fromPartial<I extends Exact<DeepPartial<ProcessSignTrafficRequest>, I>>(object: I): ProcessSignTrafficRequest;
};
export declare const ProcessSignTrafficResponse: {
    $type: "axelar.tss.v1beta1.ProcessSignTrafficResponse";
    encode(_: ProcessSignTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessSignTrafficResponse;
    fromJSON(_: any): ProcessSignTrafficResponse;
    toJSON(_: ProcessSignTrafficResponse): unknown;
    create<I extends Exact<DeepPartial<ProcessSignTrafficResponse>, I>>(base?: I): ProcessSignTrafficResponse;
    fromPartial<I extends Exact<DeepPartial<ProcessSignTrafficResponse>, I>>(_: I): ProcessSignTrafficResponse;
};
export declare const VotePubKeyRequest: {
    $type: "axelar.tss.v1beta1.VotePubKeyRequest";
    encode(message: VotePubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotePubKeyRequest;
    fromJSON(object: any): VotePubKeyRequest;
    toJSON(message: VotePubKeyRequest): unknown;
    create<I extends Exact<DeepPartial<VotePubKeyRequest>, I>>(base?: I): VotePubKeyRequest;
    fromPartial<I extends Exact<DeepPartial<VotePubKeyRequest>, I>>(object: I): VotePubKeyRequest;
};
export declare const VotePubKeyResponse: {
    $type: "axelar.tss.v1beta1.VotePubKeyResponse";
    encode(message: VotePubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotePubKeyResponse;
    fromJSON(object: any): VotePubKeyResponse;
    toJSON(message: VotePubKeyResponse): unknown;
    create<I extends Exact<DeepPartial<VotePubKeyResponse>, I>>(base?: I): VotePubKeyResponse;
    fromPartial<I extends Exact<DeepPartial<VotePubKeyResponse>, I>>(object: I): VotePubKeyResponse;
};
export declare const VoteSigRequest: {
    $type: "axelar.tss.v1beta1.VoteSigRequest";
    encode(message: VoteSigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSigRequest;
    fromJSON(object: any): VoteSigRequest;
    toJSON(message: VoteSigRequest): unknown;
    create<I extends Exact<DeepPartial<VoteSigRequest>, I>>(base?: I): VoteSigRequest;
    fromPartial<I extends Exact<DeepPartial<VoteSigRequest>, I>>(object: I): VoteSigRequest;
};
export declare const VoteSigResponse: {
    $type: "axelar.tss.v1beta1.VoteSigResponse";
    encode(message: VoteSigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSigResponse;
    fromJSON(object: any): VoteSigResponse;
    toJSON(message: VoteSigResponse): unknown;
    create<I extends Exact<DeepPartial<VoteSigResponse>, I>>(base?: I): VoteSigResponse;
    fromPartial<I extends Exact<DeepPartial<VoteSigResponse>, I>>(object: I): VoteSigResponse;
};
export declare const HeartBeatRequest: {
    $type: "axelar.tss.v1beta1.HeartBeatRequest";
    encode(message: HeartBeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeartBeatRequest;
    fromJSON(object: any): HeartBeatRequest;
    toJSON(message: HeartBeatRequest): unknown;
    create<I extends Exact<DeepPartial<HeartBeatRequest>, I>>(base?: I): HeartBeatRequest;
    fromPartial<I extends Exact<DeepPartial<HeartBeatRequest>, I>>(object: I): HeartBeatRequest;
};
export declare const HeartBeatResponse: {
    $type: "axelar.tss.v1beta1.HeartBeatResponse";
    encode(_: HeartBeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeartBeatResponse;
    fromJSON(_: any): HeartBeatResponse;
    toJSON(_: HeartBeatResponse): unknown;
    create<I extends Exact<DeepPartial<HeartBeatResponse>, I>>(base?: I): HeartBeatResponse;
    fromPartial<I extends Exact<DeepPartial<HeartBeatResponse>, I>>(_: I): HeartBeatResponse;
};
export declare const RegisterExternalKeysRequest: {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysRequest";
    encode(message: RegisterExternalKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalKeysRequest;
    fromJSON(object: any): RegisterExternalKeysRequest;
    toJSON(message: RegisterExternalKeysRequest): unknown;
    create<I extends Exact<DeepPartial<RegisterExternalKeysRequest>, I>>(base?: I): RegisterExternalKeysRequest;
    fromPartial<I extends Exact<DeepPartial<RegisterExternalKeysRequest>, I>>(object: I): RegisterExternalKeysRequest;
};
export declare const RegisterExternalKeysRequest_ExternalKey: {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysRequest.ExternalKey";
    encode(message: RegisterExternalKeysRequest_ExternalKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalKeysRequest_ExternalKey;
    fromJSON(object: any): RegisterExternalKeysRequest_ExternalKey;
    toJSON(message: RegisterExternalKeysRequest_ExternalKey): unknown;
    create<I extends Exact<DeepPartial<RegisterExternalKeysRequest_ExternalKey>, I>>(base?: I): RegisterExternalKeysRequest_ExternalKey;
    fromPartial<I extends Exact<DeepPartial<RegisterExternalKeysRequest_ExternalKey>, I>>(object: I): RegisterExternalKeysRequest_ExternalKey;
};
export declare const RegisterExternalKeysResponse: {
    $type: "axelar.tss.v1beta1.RegisterExternalKeysResponse";
    encode(_: RegisterExternalKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterExternalKeysResponse;
    fromJSON(_: any): RegisterExternalKeysResponse;
    toJSON(_: RegisterExternalKeysResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterExternalKeysResponse>, I>>(base?: I): RegisterExternalKeysResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterExternalKeysResponse>, I>>(_: I): RegisterExternalKeysResponse;
};
export declare const SubmitMultisigPubKeysRequest: {
    $type: "axelar.tss.v1beta1.SubmitMultisigPubKeysRequest";
    encode(message: SubmitMultisigPubKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigPubKeysRequest;
    fromJSON(object: any): SubmitMultisigPubKeysRequest;
    toJSON(message: SubmitMultisigPubKeysRequest): unknown;
    create<I extends Exact<DeepPartial<SubmitMultisigPubKeysRequest>, I>>(base?: I): SubmitMultisigPubKeysRequest;
    fromPartial<I extends Exact<DeepPartial<SubmitMultisigPubKeysRequest>, I>>(object: I): SubmitMultisigPubKeysRequest;
};
export declare const SubmitMultisigPubKeysResponse: {
    $type: "axelar.tss.v1beta1.SubmitMultisigPubKeysResponse";
    encode(_: SubmitMultisigPubKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigPubKeysResponse;
    fromJSON(_: any): SubmitMultisigPubKeysResponse;
    toJSON(_: SubmitMultisigPubKeysResponse): unknown;
    create<I extends Exact<DeepPartial<SubmitMultisigPubKeysResponse>, I>>(base?: I): SubmitMultisigPubKeysResponse;
    fromPartial<I extends Exact<DeepPartial<SubmitMultisigPubKeysResponse>, I>>(_: I): SubmitMultisigPubKeysResponse;
};
export declare const SubmitMultisigSignaturesRequest: {
    $type: "axelar.tss.v1beta1.SubmitMultisigSignaturesRequest";
    encode(message: SubmitMultisigSignaturesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigSignaturesRequest;
    fromJSON(object: any): SubmitMultisigSignaturesRequest;
    toJSON(message: SubmitMultisigSignaturesRequest): unknown;
    create<I extends Exact<DeepPartial<SubmitMultisigSignaturesRequest>, I>>(base?: I): SubmitMultisigSignaturesRequest;
    fromPartial<I extends Exact<DeepPartial<SubmitMultisigSignaturesRequest>, I>>(object: I): SubmitMultisigSignaturesRequest;
};
export declare const SubmitMultisigSignaturesResponse: {
    $type: "axelar.tss.v1beta1.SubmitMultisigSignaturesResponse";
    encode(_: SubmitMultisigSignaturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubmitMultisigSignaturesResponse;
    fromJSON(_: any): SubmitMultisigSignaturesResponse;
    toJSON(_: SubmitMultisigSignaturesResponse): unknown;
    create<I extends Exact<DeepPartial<SubmitMultisigSignaturesResponse>, I>>(base?: I): SubmitMultisigSignaturesResponse;
    fromPartial<I extends Exact<DeepPartial<SubmitMultisigSignaturesResponse>, I>>(_: I): SubmitMultisigSignaturesResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.tss.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(base?: I): UpdateParamsRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.tss.v1beta1.UpdateParamsResponse";
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
