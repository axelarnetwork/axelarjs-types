import Long from "long";
import _m0 from "protobufjs/minimal";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { Params } from "./params";
export declare const protobufPackage = "axelar.permission.v1beta1";
export interface UpdateGovernanceKeyRequest {
    $type: "axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    governanceKey?: LegacyAminoPubKey | undefined;
    sender: string;
}
export interface UpdateGovernanceKeyResponse {
    $type: "axelar.permission.v1beta1.UpdateGovernanceKeyResponse";
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
    $type: "axelar.permission.v1beta1.RegisterControllerRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    controller: Buffer;
    sender: string;
}
export interface RegisterControllerResponse {
    $type: "axelar.permission.v1beta1.RegisterControllerResponse";
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
    $type: "axelar.permission.v1beta1.DeregisterControllerRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    controller: Buffer;
    sender: string;
}
export interface DeregisterControllerResponse {
    $type: "axelar.permission.v1beta1.DeregisterControllerResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.permission.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.permission.v1beta1.UpdateParamsResponse";
}
export declare const UpdateGovernanceKeyRequest: {
    $type: "axelar.permission.v1beta1.UpdateGovernanceKeyRequest";
    encode(message: UpdateGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGovernanceKeyRequest;
    fromJSON(object: any): UpdateGovernanceKeyRequest;
    toJSON(message: UpdateGovernanceKeyRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateGovernanceKeyRequest>, I>>(base?: I): UpdateGovernanceKeyRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateGovernanceKeyRequest>, I>>(object: I): UpdateGovernanceKeyRequest;
};
export declare const UpdateGovernanceKeyResponse: {
    $type: "axelar.permission.v1beta1.UpdateGovernanceKeyResponse";
    encode(_: UpdateGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGovernanceKeyResponse;
    fromJSON(_: any): UpdateGovernanceKeyResponse;
    toJSON(_: UpdateGovernanceKeyResponse): unknown;
    create<I extends Exact<DeepPartial<UpdateGovernanceKeyResponse>, I>>(base?: I): UpdateGovernanceKeyResponse;
    fromPartial<I extends Exact<DeepPartial<UpdateGovernanceKeyResponse>, I>>(_: I): UpdateGovernanceKeyResponse;
};
export declare const RegisterControllerRequest: {
    $type: "axelar.permission.v1beta1.RegisterControllerRequest";
    encode(message: RegisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterControllerRequest;
    fromJSON(object: any): RegisterControllerRequest;
    toJSON(message: RegisterControllerRequest): unknown;
    create<I extends Exact<DeepPartial<RegisterControllerRequest>, I>>(base?: I): RegisterControllerRequest;
    fromPartial<I extends Exact<DeepPartial<RegisterControllerRequest>, I>>(object: I): RegisterControllerRequest;
};
export declare const RegisterControllerResponse: {
    $type: "axelar.permission.v1beta1.RegisterControllerResponse";
    encode(_: RegisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterControllerResponse;
    fromJSON(_: any): RegisterControllerResponse;
    toJSON(_: RegisterControllerResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterControllerResponse>, I>>(base?: I): RegisterControllerResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterControllerResponse>, I>>(_: I): RegisterControllerResponse;
};
export declare const DeregisterControllerRequest: {
    $type: "axelar.permission.v1beta1.DeregisterControllerRequest";
    encode(message: DeregisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterControllerRequest;
    fromJSON(object: any): DeregisterControllerRequest;
    toJSON(message: DeregisterControllerRequest): unknown;
    create<I extends Exact<DeepPartial<DeregisterControllerRequest>, I>>(base?: I): DeregisterControllerRequest;
    fromPartial<I extends Exact<DeepPartial<DeregisterControllerRequest>, I>>(object: I): DeregisterControllerRequest;
};
export declare const DeregisterControllerResponse: {
    $type: "axelar.permission.v1beta1.DeregisterControllerResponse";
    encode(_: DeregisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterControllerResponse;
    fromJSON(_: any): DeregisterControllerResponse;
    toJSON(_: DeregisterControllerResponse): unknown;
    create<I extends Exact<DeepPartial<DeregisterControllerResponse>, I>>(base?: I): DeregisterControllerResponse;
    fromPartial<I extends Exact<DeepPartial<DeregisterControllerResponse>, I>>(_: I): DeregisterControllerResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.permission.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(base?: I): UpdateParamsRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.permission.v1beta1.UpdateParamsResponse";
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
