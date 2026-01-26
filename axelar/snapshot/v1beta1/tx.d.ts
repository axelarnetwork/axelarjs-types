import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
export interface RegisterProxyRequest {
    $type: "axelar.snapshot.v1beta1.RegisterProxyRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    proxyAddr: Buffer;
    sender: string;
}
export interface RegisterProxyResponse {
    $type: "axelar.snapshot.v1beta1.RegisterProxyResponse";
}
export interface DeactivateProxyRequest {
    $type: "axelar.snapshot.v1beta1.DeactivateProxyRequest";
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
export interface DeactivateProxyResponse {
    $type: "axelar.snapshot.v1beta1.DeactivateProxyResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.snapshot.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.snapshot.v1beta1.UpdateParamsResponse";
}
export declare const RegisterProxyRequest: {
    $type: "axelar.snapshot.v1beta1.RegisterProxyRequest";
    encode(message: RegisterProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterProxyRequest;
    fromJSON(object: any): RegisterProxyRequest;
    toJSON(message: RegisterProxyRequest): unknown;
    create<I extends Exact<DeepPartial<RegisterProxyRequest>, I>>(base?: I): RegisterProxyRequest;
    fromPartial<I extends Exact<DeepPartial<RegisterProxyRequest>, I>>(object: I): RegisterProxyRequest;
};
export declare const RegisterProxyResponse: {
    $type: "axelar.snapshot.v1beta1.RegisterProxyResponse";
    encode(_: RegisterProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterProxyResponse;
    fromJSON(_: any): RegisterProxyResponse;
    toJSON(_: RegisterProxyResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterProxyResponse>, I>>(base?: I): RegisterProxyResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterProxyResponse>, I>>(_: I): RegisterProxyResponse;
};
export declare const DeactivateProxyRequest: {
    $type: "axelar.snapshot.v1beta1.DeactivateProxyRequest";
    encode(message: DeactivateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProxyRequest;
    fromJSON(object: any): DeactivateProxyRequest;
    toJSON(message: DeactivateProxyRequest): unknown;
    create<I extends Exact<DeepPartial<DeactivateProxyRequest>, I>>(base?: I): DeactivateProxyRequest;
    fromPartial<I extends Exact<DeepPartial<DeactivateProxyRequest>, I>>(object: I): DeactivateProxyRequest;
};
export declare const DeactivateProxyResponse: {
    $type: "axelar.snapshot.v1beta1.DeactivateProxyResponse";
    encode(_: DeactivateProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProxyResponse;
    fromJSON(_: any): DeactivateProxyResponse;
    toJSON(_: DeactivateProxyResponse): unknown;
    create<I extends Exact<DeepPartial<DeactivateProxyResponse>, I>>(base?: I): DeactivateProxyResponse;
    fromPartial<I extends Exact<DeepPartial<DeactivateProxyResponse>, I>>(_: I): DeactivateProxyResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.snapshot.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(base?: I): UpdateParamsRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.snapshot.v1beta1.UpdateParamsResponse";
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
