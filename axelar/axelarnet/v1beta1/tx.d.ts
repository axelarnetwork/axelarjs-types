import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Asset, Chain } from "../../nexus/exported/v1beta1/types";
import { Params } from "./params";
import { Fee } from "./types";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequest {
    $type: "axelar.axelarnet.v1beta1.LinkRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    recipientAddr: string;
    recipientChain: string;
    asset: string;
    sender: string;
}
export interface LinkResponse {
    $type: "axelar.axelarnet.v1beta1.LinkResponse";
    depositAddr: string;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequest {
    $type: "axelar.axelarnet.v1beta1.ConfirmDepositRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    /**
     * DEPRECATED: Removed in v0.14, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    txIdDeprecated: Buffer;
    /**
     * DEPRECATED: Removed in v0.15, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    tokenDeprecated?: Coin | undefined;
    depositAddress: Buffer;
    denom: string;
    sender: string;
}
export interface ConfirmDepositResponse {
    $type: "axelar.axelarnet.v1beta1.ConfirmDepositResponse";
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequest {
    $type: "axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest";
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
export interface ExecutePendingTransfersResponse {
    $type: "axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse";
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 *
 * @deprecated
 */
export interface RegisterIBCPathRequest {
    $type: "axelar.axelarnet.v1beta1.RegisterIBCPathRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    path: string;
    sender: string;
}
export interface RegisterIBCPathResponse {
    $type: "axelar.axelarnet.v1beta1.RegisterIBCPathResponse";
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequest {
    $type: "axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    /**
     * chain was deprecated in v0.27
     *
     * @deprecated
     */
    chain?: Chain | undefined;
    addrPrefix: string;
    /**
     * DEPRECATED: Removed in v0.15, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    minAmountDeprecated: Buffer;
    /**
     * native_assets was deprecated in v0.27
     *
     * @deprecated
     */
    nativeAssets: Asset[];
    /** TODO: Rename this to `chain` after v1beta1 -> v1 version bump */
    cosmosChain: string;
    ibcPath: string;
    sender: string;
}
export interface AddCosmosBasedChainResponse {
    $type: "axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse";
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
    $type: "axelar.axelarnet.v1beta1.RegisterAssetRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    asset?: Asset | undefined;
    limit: Buffer;
    window?: Duration | undefined;
    sender: string;
}
export interface RegisterAssetResponse {
    $type: "axelar.axelarnet.v1beta1.RegisterAssetResponse";
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequest {
    $type: "axelar.axelarnet.v1beta1.RouteIBCTransfersRequest";
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
export interface RouteIBCTransfersResponse {
    $type: "axelar.axelarnet.v1beta1.RouteIBCTransfersResponse";
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequest {
    $type: "axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    feeCollector: Buffer;
    sender: string;
}
export interface RegisterFeeCollectorResponse {
    $type: "axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse";
}
export interface RetryIBCTransferRequest {
    $type: "axelar.axelarnet.v1beta1.RetryIBCTransferRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    /** @deprecated */
    chain: string;
    id: Long;
    sender: string;
}
export interface RetryIBCTransferResponse {
    $type: "axelar.axelarnet.v1beta1.RetryIBCTransferResponse";
}
export interface RouteMessageRequest {
    $type: "axelar.axelarnet.v1beta1.RouteMessageRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    id: string;
    payload: Buffer;
    feegranter: Buffer;
    sender: string;
}
export interface RouteMessageResponse {
    $type: "axelar.axelarnet.v1beta1.RouteMessageResponse";
}
export interface CallContractRequest {
    $type: "axelar.axelarnet.v1beta1.CallContractRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    contractAddress: string;
    payload: Buffer;
    fee?: Fee | undefined;
    sender: string;
}
export interface CallContractResponse {
    $type: "axelar.axelarnet.v1beta1.CallContractResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.axelarnet.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.axelarnet.v1beta1.UpdateParamsResponse";
}
export declare const LinkRequest: {
    $type: "axelar.axelarnet.v1beta1.LinkRequest";
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    create<I extends Exact<DeepPartial<LinkRequest>, I>>(base?: I): LinkRequest;
    fromPartial<I extends Exact<DeepPartial<LinkRequest>, I>>(object: I): LinkRequest;
};
export declare const LinkResponse: {
    $type: "axelar.axelarnet.v1beta1.LinkResponse";
    encode(message: LinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkResponse;
    fromJSON(object: any): LinkResponse;
    toJSON(message: LinkResponse): unknown;
    create<I extends Exact<DeepPartial<LinkResponse>, I>>(base?: I): LinkResponse;
    fromPartial<I extends Exact<DeepPartial<LinkResponse>, I>>(object: I): LinkResponse;
};
export declare const ConfirmDepositRequest: {
    $type: "axelar.axelarnet.v1beta1.ConfirmDepositRequest";
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    create<I extends Exact<DeepPartial<ConfirmDepositRequest>, I>>(base?: I): ConfirmDepositRequest;
    fromPartial<I extends Exact<DeepPartial<ConfirmDepositRequest>, I>>(object: I): ConfirmDepositRequest;
};
export declare const ConfirmDepositResponse: {
    $type: "axelar.axelarnet.v1beta1.ConfirmDepositResponse";
    encode(_: ConfirmDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositResponse;
    fromJSON(_: any): ConfirmDepositResponse;
    toJSON(_: ConfirmDepositResponse): unknown;
    create<I extends Exact<DeepPartial<ConfirmDepositResponse>, I>>(base?: I): ConfirmDepositResponse;
    fromPartial<I extends Exact<DeepPartial<ConfirmDepositResponse>, I>>(_: I): ConfirmDepositResponse;
};
export declare const ExecutePendingTransfersRequest: {
    $type: "axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest";
    encode(message: ExecutePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePendingTransfersRequest;
    fromJSON(object: any): ExecutePendingTransfersRequest;
    toJSON(message: ExecutePendingTransfersRequest): unknown;
    create<I extends Exact<DeepPartial<ExecutePendingTransfersRequest>, I>>(base?: I): ExecutePendingTransfersRequest;
    fromPartial<I extends Exact<DeepPartial<ExecutePendingTransfersRequest>, I>>(object: I): ExecutePendingTransfersRequest;
};
export declare const ExecutePendingTransfersResponse: {
    $type: "axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse";
    encode(_: ExecutePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePendingTransfersResponse;
    fromJSON(_: any): ExecutePendingTransfersResponse;
    toJSON(_: ExecutePendingTransfersResponse): unknown;
    create<I extends Exact<DeepPartial<ExecutePendingTransfersResponse>, I>>(base?: I): ExecutePendingTransfersResponse;
    fromPartial<I extends Exact<DeepPartial<ExecutePendingTransfersResponse>, I>>(_: I): ExecutePendingTransfersResponse;
};
export declare const RegisterIBCPathRequest: {
    $type: "axelar.axelarnet.v1beta1.RegisterIBCPathRequest";
    encode(message: RegisterIBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterIBCPathRequest;
    fromJSON(object: any): RegisterIBCPathRequest;
    toJSON(message: RegisterIBCPathRequest): unknown;
    create<I extends Exact<DeepPartial<RegisterIBCPathRequest>, I>>(base?: I): RegisterIBCPathRequest;
    fromPartial<I extends Exact<DeepPartial<RegisterIBCPathRequest>, I>>(object: I): RegisterIBCPathRequest;
};
export declare const RegisterIBCPathResponse: {
    $type: "axelar.axelarnet.v1beta1.RegisterIBCPathResponse";
    encode(_: RegisterIBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterIBCPathResponse;
    fromJSON(_: any): RegisterIBCPathResponse;
    toJSON(_: RegisterIBCPathResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterIBCPathResponse>, I>>(base?: I): RegisterIBCPathResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterIBCPathResponse>, I>>(_: I): RegisterIBCPathResponse;
};
export declare const AddCosmosBasedChainRequest: {
    $type: "axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest";
    encode(message: AddCosmosBasedChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCosmosBasedChainRequest;
    fromJSON(object: any): AddCosmosBasedChainRequest;
    toJSON(message: AddCosmosBasedChainRequest): unknown;
    create<I extends Exact<DeepPartial<AddCosmosBasedChainRequest>, I>>(base?: I): AddCosmosBasedChainRequest;
    fromPartial<I extends Exact<DeepPartial<AddCosmosBasedChainRequest>, I>>(object: I): AddCosmosBasedChainRequest;
};
export declare const AddCosmosBasedChainResponse: {
    $type: "axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse";
    encode(_: AddCosmosBasedChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddCosmosBasedChainResponse;
    fromJSON(_: any): AddCosmosBasedChainResponse;
    toJSON(_: AddCosmosBasedChainResponse): unknown;
    create<I extends Exact<DeepPartial<AddCosmosBasedChainResponse>, I>>(base?: I): AddCosmosBasedChainResponse;
    fromPartial<I extends Exact<DeepPartial<AddCosmosBasedChainResponse>, I>>(_: I): AddCosmosBasedChainResponse;
};
export declare const RegisterAssetRequest: {
    $type: "axelar.axelarnet.v1beta1.RegisterAssetRequest";
    encode(message: RegisterAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetRequest;
    fromJSON(object: any): RegisterAssetRequest;
    toJSON(message: RegisterAssetRequest): unknown;
    create<I extends Exact<DeepPartial<RegisterAssetRequest>, I>>(base?: I): RegisterAssetRequest;
    fromPartial<I extends Exact<DeepPartial<RegisterAssetRequest>, I>>(object: I): RegisterAssetRequest;
};
export declare const RegisterAssetResponse: {
    $type: "axelar.axelarnet.v1beta1.RegisterAssetResponse";
    encode(_: RegisterAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetResponse;
    fromJSON(_: any): RegisterAssetResponse;
    toJSON(_: RegisterAssetResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterAssetResponse>, I>>(base?: I): RegisterAssetResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterAssetResponse>, I>>(_: I): RegisterAssetResponse;
};
export declare const RouteIBCTransfersRequest: {
    $type: "axelar.axelarnet.v1beta1.RouteIBCTransfersRequest";
    encode(message: RouteIBCTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RouteIBCTransfersRequest;
    fromJSON(object: any): RouteIBCTransfersRequest;
    toJSON(message: RouteIBCTransfersRequest): unknown;
    create<I extends Exact<DeepPartial<RouteIBCTransfersRequest>, I>>(base?: I): RouteIBCTransfersRequest;
    fromPartial<I extends Exact<DeepPartial<RouteIBCTransfersRequest>, I>>(object: I): RouteIBCTransfersRequest;
};
export declare const RouteIBCTransfersResponse: {
    $type: "axelar.axelarnet.v1beta1.RouteIBCTransfersResponse";
    encode(_: RouteIBCTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RouteIBCTransfersResponse;
    fromJSON(_: any): RouteIBCTransfersResponse;
    toJSON(_: RouteIBCTransfersResponse): unknown;
    create<I extends Exact<DeepPartial<RouteIBCTransfersResponse>, I>>(base?: I): RouteIBCTransfersResponse;
    fromPartial<I extends Exact<DeepPartial<RouteIBCTransfersResponse>, I>>(_: I): RouteIBCTransfersResponse;
};
export declare const RegisterFeeCollectorRequest: {
    $type: "axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest";
    encode(message: RegisterFeeCollectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterFeeCollectorRequest;
    fromJSON(object: any): RegisterFeeCollectorRequest;
    toJSON(message: RegisterFeeCollectorRequest): unknown;
    create<I extends Exact<DeepPartial<RegisterFeeCollectorRequest>, I>>(base?: I): RegisterFeeCollectorRequest;
    fromPartial<I extends Exact<DeepPartial<RegisterFeeCollectorRequest>, I>>(object: I): RegisterFeeCollectorRequest;
};
export declare const RegisterFeeCollectorResponse: {
    $type: "axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse";
    encode(_: RegisterFeeCollectorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterFeeCollectorResponse;
    fromJSON(_: any): RegisterFeeCollectorResponse;
    toJSON(_: RegisterFeeCollectorResponse): unknown;
    create<I extends Exact<DeepPartial<RegisterFeeCollectorResponse>, I>>(base?: I): RegisterFeeCollectorResponse;
    fromPartial<I extends Exact<DeepPartial<RegisterFeeCollectorResponse>, I>>(_: I): RegisterFeeCollectorResponse;
};
export declare const RetryIBCTransferRequest: {
    $type: "axelar.axelarnet.v1beta1.RetryIBCTransferRequest";
    encode(message: RetryIBCTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetryIBCTransferRequest;
    fromJSON(object: any): RetryIBCTransferRequest;
    toJSON(message: RetryIBCTransferRequest): unknown;
    create<I extends Exact<DeepPartial<RetryIBCTransferRequest>, I>>(base?: I): RetryIBCTransferRequest;
    fromPartial<I extends Exact<DeepPartial<RetryIBCTransferRequest>, I>>(object: I): RetryIBCTransferRequest;
};
export declare const RetryIBCTransferResponse: {
    $type: "axelar.axelarnet.v1beta1.RetryIBCTransferResponse";
    encode(_: RetryIBCTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetryIBCTransferResponse;
    fromJSON(_: any): RetryIBCTransferResponse;
    toJSON(_: RetryIBCTransferResponse): unknown;
    create<I extends Exact<DeepPartial<RetryIBCTransferResponse>, I>>(base?: I): RetryIBCTransferResponse;
    fromPartial<I extends Exact<DeepPartial<RetryIBCTransferResponse>, I>>(_: I): RetryIBCTransferResponse;
};
export declare const RouteMessageRequest: {
    $type: "axelar.axelarnet.v1beta1.RouteMessageRequest";
    encode(message: RouteMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RouteMessageRequest;
    fromJSON(object: any): RouteMessageRequest;
    toJSON(message: RouteMessageRequest): unknown;
    create<I extends Exact<DeepPartial<RouteMessageRequest>, I>>(base?: I): RouteMessageRequest;
    fromPartial<I extends Exact<DeepPartial<RouteMessageRequest>, I>>(object: I): RouteMessageRequest;
};
export declare const RouteMessageResponse: {
    $type: "axelar.axelarnet.v1beta1.RouteMessageResponse";
    encode(_: RouteMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RouteMessageResponse;
    fromJSON(_: any): RouteMessageResponse;
    toJSON(_: RouteMessageResponse): unknown;
    create<I extends Exact<DeepPartial<RouteMessageResponse>, I>>(base?: I): RouteMessageResponse;
    fromPartial<I extends Exact<DeepPartial<RouteMessageResponse>, I>>(_: I): RouteMessageResponse;
};
export declare const CallContractRequest: {
    $type: "axelar.axelarnet.v1beta1.CallContractRequest";
    encode(message: CallContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallContractRequest;
    fromJSON(object: any): CallContractRequest;
    toJSON(message: CallContractRequest): unknown;
    create<I extends Exact<DeepPartial<CallContractRequest>, I>>(base?: I): CallContractRequest;
    fromPartial<I extends Exact<DeepPartial<CallContractRequest>, I>>(object: I): CallContractRequest;
};
export declare const CallContractResponse: {
    $type: "axelar.axelarnet.v1beta1.CallContractResponse";
    encode(_: CallContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CallContractResponse;
    fromJSON(_: any): CallContractResponse;
    toJSON(_: CallContractResponse): unknown;
    create<I extends Exact<DeepPartial<CallContractResponse>, I>>(base?: I): CallContractResponse;
    fromPartial<I extends Exact<DeepPartial<CallContractResponse>, I>>(_: I): CallContractResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.axelarnet.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(base?: I): UpdateParamsRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.axelarnet.v1beta1.UpdateParamsResponse";
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
