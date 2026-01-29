import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { FeeInfo } from "../exported/v1beta1/types";
import { Params } from "./params";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface RegisterChainMaintainerRequest {
    $type: "axelar.nexus.v1beta1.RegisterChainMaintainerRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chains: string[];
    sender: string;
}
export interface RegisterChainMaintainerResponse {
    $type: "axelar.nexus.v1beta1.RegisterChainMaintainerResponse";
}
export interface DeregisterChainMaintainerRequest {
    $type: "axelar.nexus.v1beta1.DeregisterChainMaintainerRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chains: string[];
    sender: string;
}
export interface DeregisterChainMaintainerResponse {
    $type: "axelar.nexus.v1beta1.DeregisterChainMaintainerResponse";
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
    $type: "axelar.nexus.v1beta1.ActivateChainRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chains: string[];
    sender: string;
}
export interface ActivateChainResponse {
    $type: "axelar.nexus.v1beta1.ActivateChainResponse";
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
    $type: "axelar.nexus.v1beta1.DeactivateChainRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chains: string[];
    sender: string;
}
export interface DeactivateChainResponse {
    $type: "axelar.nexus.v1beta1.DeactivateChainResponse";
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
    $type: "axelar.nexus.v1beta1.RegisterAssetFeeRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    feeInfo?: FeeInfo | undefined;
    sender: string;
}
export interface RegisterAssetFeeResponse {
    $type: "axelar.nexus.v1beta1.RegisterAssetFeeResponse";
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequest {
    $type: "axelar.nexus.v1beta1.SetTransferRateLimitRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    limit?: Coin | undefined;
    window?: Duration | undefined;
    sender: string;
}
export interface SetTransferRateLimitResponse {
    $type: "axelar.nexus.v1beta1.SetTransferRateLimitResponse";
}
/**
 * EnableLinkDepositRequest enables the link-deposit protocol for cross-chain
 * transfers. The link-deposit protocol allows users to create deposit addresses
 * and confirm deposits for cross-chain asset transfers on both EVM and Cosmos
 * chains.
 */
export interface EnableLinkDepositRequest {
    $type: "axelar.nexus.v1beta1.EnableLinkDepositRequest";
    authority: string;
}
export interface EnableLinkDepositResponse {
    $type: "axelar.nexus.v1beta1.EnableLinkDepositResponse";
}
/**
 * DisableLinkDepositRequest disables the link-deposit protocol for cross-chain
 * transfers. When disabled, Link, ConfirmDeposit, and CreateBurnTokens
 * operations will be rejected.
 */
export interface DisableLinkDepositRequest {
    $type: "axelar.nexus.v1beta1.DisableLinkDepositRequest";
    authority: string;
}
export interface DisableLinkDepositResponse {
    $type: "axelar.nexus.v1beta1.DisableLinkDepositResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.nexus.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.nexus.v1beta1.UpdateParamsResponse";
}
export declare const RegisterChainMaintainerRequest: {
    $type: "axelar.nexus.v1beta1.RegisterChainMaintainerRequest";
    encode(message: RegisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterChainMaintainerRequest;
    fromJSON(object: any): RegisterChainMaintainerRequest;
    toJSON(message: RegisterChainMaintainerRequest): unknown;
    create<I extends Exact<DeepPartial<RegisterChainMaintainerRequest>, I>>(base?: I): RegisterChainMaintainerRequest;
    fromPartial<I extends Exact<DeepPartial<RegisterChainMaintainerRequest>, I>>(object: I): RegisterChainMaintainerRequest;
};
export declare const RegisterChainMaintainerResponse: {
    $type: "axelar.nexus.v1beta1.RegisterChainMaintainerResponse";
    encode(_: RegisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterChainMaintainerResponse;
    fromJSON(_: any): RegisterChainMaintainerResponse;
    toJSON(_: RegisterChainMaintainerResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterChainMaintainerResponse>, I>>(base?: I): RegisterChainMaintainerResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterChainMaintainerResponse>, I>>(_: I): RegisterChainMaintainerResponse;
};
export declare const DeregisterChainMaintainerRequest: {
    $type: "axelar.nexus.v1beta1.DeregisterChainMaintainerRequest";
    encode(message: DeregisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterChainMaintainerRequest;
    fromJSON(object: any): DeregisterChainMaintainerRequest;
    toJSON(message: DeregisterChainMaintainerRequest): unknown;
    create<I extends Exact<DeepPartial<DeregisterChainMaintainerRequest>, I>>(base?: I): DeregisterChainMaintainerRequest;
    fromPartial<I extends Exact<DeepPartial<DeregisterChainMaintainerRequest>, I>>(object: I): DeregisterChainMaintainerRequest;
};
export declare const DeregisterChainMaintainerResponse: {
    $type: "axelar.nexus.v1beta1.DeregisterChainMaintainerResponse";
    encode(_: DeregisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterChainMaintainerResponse;
    fromJSON(_: any): DeregisterChainMaintainerResponse;
    toJSON(_: DeregisterChainMaintainerResponse): unknown;
    create<I extends Exact<DeepPartial<DeregisterChainMaintainerResponse>, I>>(base?: I): DeregisterChainMaintainerResponse;
    fromPartial<I extends Exact<DeepPartial<DeregisterChainMaintainerResponse>, I>>(_: I): DeregisterChainMaintainerResponse;
};
export declare const ActivateChainRequest: {
    $type: "axelar.nexus.v1beta1.ActivateChainRequest";
    encode(message: ActivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateChainRequest;
    fromJSON(object: any): ActivateChainRequest;
    toJSON(message: ActivateChainRequest): unknown;
    create<I extends Exact<DeepPartial<ActivateChainRequest>, I>>(base?: I): ActivateChainRequest;
    fromPartial<I extends Exact<DeepPartial<ActivateChainRequest>, I>>(object: I): ActivateChainRequest;
};
export declare const ActivateChainResponse: {
    $type: "axelar.nexus.v1beta1.ActivateChainResponse";
    encode(_: ActivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivateChainResponse;
    fromJSON(_: any): ActivateChainResponse;
    toJSON(_: ActivateChainResponse): unknown;
    create<I extends Exact<DeepPartial<ActivateChainResponse>, I>>(base?: I): ActivateChainResponse;
    fromPartial<I extends Exact<DeepPartial<ActivateChainResponse>, I>>(_: I): ActivateChainResponse;
};
export declare const DeactivateChainRequest: {
    $type: "axelar.nexus.v1beta1.DeactivateChainRequest";
    encode(message: DeactivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateChainRequest;
    fromJSON(object: any): DeactivateChainRequest;
    toJSON(message: DeactivateChainRequest): unknown;
    create<I extends Exact<DeepPartial<DeactivateChainRequest>, I>>(base?: I): DeactivateChainRequest;
    fromPartial<I extends Exact<DeepPartial<DeactivateChainRequest>, I>>(object: I): DeactivateChainRequest;
};
export declare const DeactivateChainResponse: {
    $type: "axelar.nexus.v1beta1.DeactivateChainResponse";
    encode(_: DeactivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateChainResponse;
    fromJSON(_: any): DeactivateChainResponse;
    toJSON(_: DeactivateChainResponse): unknown;
    create<I extends Exact<DeepPartial<DeactivateChainResponse>, I>>(base?: I): DeactivateChainResponse;
    fromPartial<I extends Exact<DeepPartial<DeactivateChainResponse>, I>>(_: I): DeactivateChainResponse;
};
export declare const RegisterAssetFeeRequest: {
    $type: "axelar.nexus.v1beta1.RegisterAssetFeeRequest";
    encode(message: RegisterAssetFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetFeeRequest;
    fromJSON(object: any): RegisterAssetFeeRequest;
    toJSON(message: RegisterAssetFeeRequest): unknown;
    create<I extends Exact<DeepPartial<RegisterAssetFeeRequest>, I>>(base?: I): RegisterAssetFeeRequest;
    fromPartial<I extends Exact<DeepPartial<RegisterAssetFeeRequest>, I>>(object: I): RegisterAssetFeeRequest;
};
export declare const RegisterAssetFeeResponse: {
    $type: "axelar.nexus.v1beta1.RegisterAssetFeeResponse";
    encode(_: RegisterAssetFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetFeeResponse;
    fromJSON(_: any): RegisterAssetFeeResponse;
    toJSON(_: RegisterAssetFeeResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterAssetFeeResponse>, I>>(base?: I): RegisterAssetFeeResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterAssetFeeResponse>, I>>(_: I): RegisterAssetFeeResponse;
};
export declare const SetTransferRateLimitRequest: {
    $type: "axelar.nexus.v1beta1.SetTransferRateLimitRequest";
    encode(message: SetTransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTransferRateLimitRequest;
    fromJSON(object: any): SetTransferRateLimitRequest;
    toJSON(message: SetTransferRateLimitRequest): unknown;
    create<I extends Exact<DeepPartial<SetTransferRateLimitRequest>, I>>(base?: I): SetTransferRateLimitRequest;
    fromPartial<I extends Exact<DeepPartial<SetTransferRateLimitRequest>, I>>(object: I): SetTransferRateLimitRequest;
};
export declare const SetTransferRateLimitResponse: {
    $type: "axelar.nexus.v1beta1.SetTransferRateLimitResponse";
    encode(_: SetTransferRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTransferRateLimitResponse;
    fromJSON(_: any): SetTransferRateLimitResponse;
    toJSON(_: SetTransferRateLimitResponse): unknown;
    create<I extends Exact<DeepPartial<SetTransferRateLimitResponse>, I>>(base?: I): SetTransferRateLimitResponse;
    fromPartial<I extends Exact<DeepPartial<SetTransferRateLimitResponse>, I>>(_: I): SetTransferRateLimitResponse;
};
export declare const EnableLinkDepositRequest: {
    $type: "axelar.nexus.v1beta1.EnableLinkDepositRequest";
    encode(message: EnableLinkDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableLinkDepositRequest;
    fromJSON(object: any): EnableLinkDepositRequest;
    toJSON(message: EnableLinkDepositRequest): unknown;
    create<I extends Exact<DeepPartial<EnableLinkDepositRequest>, I>>(base?: I): EnableLinkDepositRequest;
    fromPartial<I extends Exact<DeepPartial<EnableLinkDepositRequest>, I>>(object: I): EnableLinkDepositRequest;
};
export declare const EnableLinkDepositResponse: {
    $type: "axelar.nexus.v1beta1.EnableLinkDepositResponse";
    encode(_: EnableLinkDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnableLinkDepositResponse;
    fromJSON(_: any): EnableLinkDepositResponse;
    toJSON(_: EnableLinkDepositResponse): unknown;
    create<I extends Exact<DeepPartial<EnableLinkDepositResponse>, I>>(base?: I): EnableLinkDepositResponse;
    fromPartial<I extends Exact<DeepPartial<EnableLinkDepositResponse>, I>>(_: I): EnableLinkDepositResponse;
};
export declare const DisableLinkDepositRequest: {
    $type: "axelar.nexus.v1beta1.DisableLinkDepositRequest";
    encode(message: DisableLinkDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableLinkDepositRequest;
    fromJSON(object: any): DisableLinkDepositRequest;
    toJSON(message: DisableLinkDepositRequest): unknown;
    create<I extends Exact<DeepPartial<DisableLinkDepositRequest>, I>>(base?: I): DisableLinkDepositRequest;
    fromPartial<I extends Exact<DeepPartial<DisableLinkDepositRequest>, I>>(object: I): DisableLinkDepositRequest;
};
export declare const DisableLinkDepositResponse: {
    $type: "axelar.nexus.v1beta1.DisableLinkDepositResponse";
    encode(_: DisableLinkDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisableLinkDepositResponse;
    fromJSON(_: any): DisableLinkDepositResponse;
    toJSON(_: DisableLinkDepositResponse): unknown;
    create<I extends Exact<DeepPartial<DisableLinkDepositResponse>, I>>(base?: I): DisableLinkDepositResponse;
    fromPartial<I extends Exact<DeepPartial<DisableLinkDepositResponse>, I>>(_: I): DisableLinkDepositResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.nexus.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(base?: I): UpdateParamsRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.nexus.v1beta1.UpdateParamsResponse";
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
