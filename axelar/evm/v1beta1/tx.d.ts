import Long from "long";
import _m0 from "protobufjs/minimal";
import { KeyType } from "../../tss/exported/v1beta1/types";
import { Params } from "./params";
import { Asset, TokenDetails, TransferKeyType } from "./types";
export declare const protobufPackage = "axelar.evm.v1beta1";
export interface SetGatewayRequest {
    $type: "axelar.evm.v1beta1.SetGatewayRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    address: Buffer;
    sender: string;
}
export interface SetGatewayResponse {
    $type: "axelar.evm.v1beta1.SetGatewayResponse";
}
/** @deprecated */
export interface ConfirmGatewayTxRequest {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    txId: Buffer;
    sender: string;
}
/** @deprecated */
export interface ConfirmGatewayTxResponse {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxResponse";
}
export interface ConfirmGatewayTxsRequest {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxsRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    txIds: Buffer[];
    sender: string;
}
export interface ConfirmGatewayTxsResponse {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxsResponse";
}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequest {
    $type: "axelar.evm.v1beta1.ConfirmDepositRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    txId: Buffer;
    /** @deprecated */
    amount: Buffer;
    burnerAddress: Buffer;
    sender: string;
}
export interface ConfirmDepositResponse {
    $type: "axelar.evm.v1beta1.ConfirmDepositResponse";
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequest {
    $type: "axelar.evm.v1beta1.ConfirmTokenRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    txId: Buffer;
    asset?: Asset | undefined;
    sender: string;
}
export interface ConfirmTokenResponse {
    $type: "axelar.evm.v1beta1.ConfirmTokenResponse";
}
export interface ConfirmTransferKeyRequest {
    $type: "axelar.evm.v1beta1.ConfirmTransferKeyRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    txId: Buffer;
    /**
     * DEPRECATED: Removed in v0.20, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    transferTypeDeprecated: TransferKeyType;
    /**
     * DEPRECATED: Removed in v0.20, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    keyIdDeprecated: string;
    sender: string;
}
export interface ConfirmTransferKeyResponse {
    $type: "axelar.evm.v1beta1.ConfirmTransferKeyResponse";
}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequest {
    $type: "axelar.evm.v1beta1.LinkRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    recipientAddr: string;
    asset: string;
    recipientChain: string;
    sender: string;
}
export interface LinkResponse {
    $type: "axelar.evm.v1beta1.LinkResponse";
    depositAddr: string;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequest {
    $type: "axelar.evm.v1beta1.CreateBurnTokensRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    sender: string;
}
export interface CreateBurnTokensResponse {
    $type: "axelar.evm.v1beta1.CreateBurnTokensResponse";
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequest {
    $type: "axelar.evm.v1beta1.CreateDeployTokenRequest";
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
    tokenDetails?: TokenDetails | undefined;
    /**
     * DEPRECATED: Removed in v0.15, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    minAmountDeprecated: Buffer;
    address: Buffer;
    dailyMintLimit: string;
    sender: string;
}
export interface CreateDeployTokenResponse {
    $type: "axelar.evm.v1beta1.CreateDeployTokenResponse";
}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequest {
    $type: "axelar.evm.v1beta1.CreatePendingTransfersRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    sender: string;
}
export interface CreatePendingTransfersResponse {
    $type: "axelar.evm.v1beta1.CreatePendingTransfersResponse";
}
/** @deprecated */
export interface CreateTransferOwnershipRequest {
    $type: "axelar.evm.v1beta1.CreateTransferOwnershipRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    keyId: string;
    sender: string;
}
/** @deprecated */
export interface CreateTransferOwnershipResponse {
    $type: "axelar.evm.v1beta1.CreateTransferOwnershipResponse";
}
export interface CreateTransferOperatorshipRequest {
    $type: "axelar.evm.v1beta1.CreateTransferOperatorshipRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    keyId: string;
    sender: string;
}
export interface CreateTransferOperatorshipResponse {
    $type: "axelar.evm.v1beta1.CreateTransferOperatorshipResponse";
}
export interface SignCommandsRequest {
    $type: "axelar.evm.v1beta1.SignCommandsRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    sender: string;
}
export interface SignCommandsResponse {
    $type: "axelar.evm.v1beta1.SignCommandsResponse";
    batchedCommandsId: Buffer;
    commandCount: number;
}
export interface AddChainRequest {
    $type: "axelar.evm.v1beta1.AddChainRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    name: string;
    /**
     * DEPRECATED: Removed in v0.14, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    nativeAssetDeprecated: string;
    /** @deprecated */
    keyType: KeyType;
    params: Buffer;
    sender: string;
}
export interface AddChainResponse {
    $type: "axelar.evm.v1beta1.AddChainResponse";
}
export interface RetryFailedEventRequest {
    $type: "axelar.evm.v1beta1.RetryFailedEventRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    eventId: string;
    sender: string;
}
export interface RetryFailedEventResponse {
    $type: "axelar.evm.v1beta1.RetryFailedEventResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.evm.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.evm.v1beta1.UpdateParamsResponse";
}
export declare const SetGatewayRequest: {
    $type: "axelar.evm.v1beta1.SetGatewayRequest";
    encode(message: SetGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetGatewayRequest;
    fromJSON(object: any): SetGatewayRequest;
    toJSON(message: SetGatewayRequest): unknown;
    create<I extends Exact<DeepPartial<SetGatewayRequest>, I>>(base?: I): SetGatewayRequest;
    fromPartial<I extends Exact<DeepPartial<SetGatewayRequest>, I>>(object: I): SetGatewayRequest;
};
export declare const SetGatewayResponse: {
    $type: "axelar.evm.v1beta1.SetGatewayResponse";
    encode(_: SetGatewayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetGatewayResponse;
    fromJSON(_: any): SetGatewayResponse;
    toJSON(_: SetGatewayResponse): unknown;
    create<I extends Exact<DeepPartial<SetGatewayResponse>, I>>(base?: I): SetGatewayResponse;
    fromPartial<I extends Exact<DeepPartial<SetGatewayResponse>, I>>(_: I): SetGatewayResponse;
};
export declare const ConfirmGatewayTxRequest: {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxRequest";
    encode(message: ConfirmGatewayTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxRequest;
    fromJSON(object: any): ConfirmGatewayTxRequest;
    toJSON(message: ConfirmGatewayTxRequest): unknown;
    create<I extends Exact<DeepPartial<ConfirmGatewayTxRequest>, I>>(base?: I): ConfirmGatewayTxRequest;
    fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxRequest>, I>>(object: I): ConfirmGatewayTxRequest;
};
export declare const ConfirmGatewayTxResponse: {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxResponse";
    encode(_: ConfirmGatewayTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxResponse;
    fromJSON(_: any): ConfirmGatewayTxResponse;
    toJSON(_: ConfirmGatewayTxResponse): unknown;
    create<I extends Exact<DeepPartial<ConfirmGatewayTxResponse>, I>>(base?: I): ConfirmGatewayTxResponse;
    fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxResponse>, I>>(_: I): ConfirmGatewayTxResponse;
};
export declare const ConfirmGatewayTxsRequest: {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxsRequest";
    encode(message: ConfirmGatewayTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxsRequest;
    fromJSON(object: any): ConfirmGatewayTxsRequest;
    toJSON(message: ConfirmGatewayTxsRequest): unknown;
    create<I extends Exact<DeepPartial<ConfirmGatewayTxsRequest>, I>>(base?: I): ConfirmGatewayTxsRequest;
    fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxsRequest>, I>>(object: I): ConfirmGatewayTxsRequest;
};
export declare const ConfirmGatewayTxsResponse: {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxsResponse";
    encode(_: ConfirmGatewayTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxsResponse;
    fromJSON(_: any): ConfirmGatewayTxsResponse;
    toJSON(_: ConfirmGatewayTxsResponse): unknown;
    create<I extends Exact<DeepPartial<ConfirmGatewayTxsResponse>, I>>(base?: I): ConfirmGatewayTxsResponse;
    fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxsResponse>, I>>(_: I): ConfirmGatewayTxsResponse;
};
export declare const ConfirmDepositRequest: {
    $type: "axelar.evm.v1beta1.ConfirmDepositRequest";
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    create<I extends Exact<DeepPartial<ConfirmDepositRequest>, I>>(base?: I): ConfirmDepositRequest;
    fromPartial<I extends Exact<DeepPartial<ConfirmDepositRequest>, I>>(object: I): ConfirmDepositRequest;
};
export declare const ConfirmDepositResponse: {
    $type: "axelar.evm.v1beta1.ConfirmDepositResponse";
    encode(_: ConfirmDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositResponse;
    fromJSON(_: any): ConfirmDepositResponse;
    toJSON(_: ConfirmDepositResponse): unknown;
    create<I extends Exact<DeepPartial<ConfirmDepositResponse>, I>>(base?: I): ConfirmDepositResponse;
    fromPartial<I extends Exact<DeepPartial<ConfirmDepositResponse>, I>>(_: I): ConfirmDepositResponse;
};
export declare const ConfirmTokenRequest: {
    $type: "axelar.evm.v1beta1.ConfirmTokenRequest";
    encode(message: ConfirmTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTokenRequest;
    fromJSON(object: any): ConfirmTokenRequest;
    toJSON(message: ConfirmTokenRequest): unknown;
    create<I extends Exact<DeepPartial<ConfirmTokenRequest>, I>>(base?: I): ConfirmTokenRequest;
    fromPartial<I extends Exact<DeepPartial<ConfirmTokenRequest>, I>>(object: I): ConfirmTokenRequest;
};
export declare const ConfirmTokenResponse: {
    $type: "axelar.evm.v1beta1.ConfirmTokenResponse";
    encode(_: ConfirmTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTokenResponse;
    fromJSON(_: any): ConfirmTokenResponse;
    toJSON(_: ConfirmTokenResponse): unknown;
    create<I extends Exact<DeepPartial<ConfirmTokenResponse>, I>>(base?: I): ConfirmTokenResponse;
    fromPartial<I extends Exact<DeepPartial<ConfirmTokenResponse>, I>>(_: I): ConfirmTokenResponse;
};
export declare const ConfirmTransferKeyRequest: {
    $type: "axelar.evm.v1beta1.ConfirmTransferKeyRequest";
    encode(message: ConfirmTransferKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTransferKeyRequest;
    fromJSON(object: any): ConfirmTransferKeyRequest;
    toJSON(message: ConfirmTransferKeyRequest): unknown;
    create<I extends Exact<DeepPartial<ConfirmTransferKeyRequest>, I>>(base?: I): ConfirmTransferKeyRequest;
    fromPartial<I extends Exact<DeepPartial<ConfirmTransferKeyRequest>, I>>(object: I): ConfirmTransferKeyRequest;
};
export declare const ConfirmTransferKeyResponse: {
    $type: "axelar.evm.v1beta1.ConfirmTransferKeyResponse";
    encode(_: ConfirmTransferKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTransferKeyResponse;
    fromJSON(_: any): ConfirmTransferKeyResponse;
    toJSON(_: ConfirmTransferKeyResponse): unknown;
    create<I extends Exact<DeepPartial<ConfirmTransferKeyResponse>, I>>(base?: I): ConfirmTransferKeyResponse;
    fromPartial<I extends Exact<DeepPartial<ConfirmTransferKeyResponse>, I>>(_: I): ConfirmTransferKeyResponse;
};
export declare const LinkRequest: {
    $type: "axelar.evm.v1beta1.LinkRequest";
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    create<I extends Exact<DeepPartial<LinkRequest>, I>>(base?: I): LinkRequest;
    fromPartial<I extends Exact<DeepPartial<LinkRequest>, I>>(object: I): LinkRequest;
};
export declare const LinkResponse: {
    $type: "axelar.evm.v1beta1.LinkResponse";
    encode(message: LinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkResponse;
    fromJSON(object: any): LinkResponse;
    toJSON(message: LinkResponse): unknown;
    create<I extends Exact<DeepPartial<LinkResponse>, I>>(base?: I): LinkResponse;
    fromPartial<I extends Exact<DeepPartial<LinkResponse>, I>>(object: I): LinkResponse;
};
export declare const CreateBurnTokensRequest: {
    $type: "axelar.evm.v1beta1.CreateBurnTokensRequest";
    encode(message: CreateBurnTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBurnTokensRequest;
    fromJSON(object: any): CreateBurnTokensRequest;
    toJSON(message: CreateBurnTokensRequest): unknown;
    create<I extends Exact<DeepPartial<CreateBurnTokensRequest>, I>>(base?: I): CreateBurnTokensRequest;
    fromPartial<I extends Exact<DeepPartial<CreateBurnTokensRequest>, I>>(object: I): CreateBurnTokensRequest;
};
export declare const CreateBurnTokensResponse: {
    $type: "axelar.evm.v1beta1.CreateBurnTokensResponse";
    encode(_: CreateBurnTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateBurnTokensResponse;
    fromJSON(_: any): CreateBurnTokensResponse;
    toJSON(_: CreateBurnTokensResponse): unknown;
    create<I extends Exact<DeepPartial<CreateBurnTokensResponse>, I>>(base?: I): CreateBurnTokensResponse;
    fromPartial<I extends Exact<DeepPartial<CreateBurnTokensResponse>, I>>(_: I): CreateBurnTokensResponse;
};
export declare const CreateDeployTokenRequest: {
    $type: "axelar.evm.v1beta1.CreateDeployTokenRequest";
    encode(message: CreateDeployTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeployTokenRequest;
    fromJSON(object: any): CreateDeployTokenRequest;
    toJSON(message: CreateDeployTokenRequest): unknown;
    create<I extends Exact<DeepPartial<CreateDeployTokenRequest>, I>>(base?: I): CreateDeployTokenRequest;
    fromPartial<I extends Exact<DeepPartial<CreateDeployTokenRequest>, I>>(object: I): CreateDeployTokenRequest;
};
export declare const CreateDeployTokenResponse: {
    $type: "axelar.evm.v1beta1.CreateDeployTokenResponse";
    encode(_: CreateDeployTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeployTokenResponse;
    fromJSON(_: any): CreateDeployTokenResponse;
    toJSON(_: CreateDeployTokenResponse): unknown;
    create<I extends Exact<DeepPartial<CreateDeployTokenResponse>, I>>(base?: I): CreateDeployTokenResponse;
    fromPartial<I extends Exact<DeepPartial<CreateDeployTokenResponse>, I>>(_: I): CreateDeployTokenResponse;
};
export declare const CreatePendingTransfersRequest: {
    $type: "axelar.evm.v1beta1.CreatePendingTransfersRequest";
    encode(message: CreatePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePendingTransfersRequest;
    fromJSON(object: any): CreatePendingTransfersRequest;
    toJSON(message: CreatePendingTransfersRequest): unknown;
    create<I extends Exact<DeepPartial<CreatePendingTransfersRequest>, I>>(base?: I): CreatePendingTransfersRequest;
    fromPartial<I extends Exact<DeepPartial<CreatePendingTransfersRequest>, I>>(object: I): CreatePendingTransfersRequest;
};
export declare const CreatePendingTransfersResponse: {
    $type: "axelar.evm.v1beta1.CreatePendingTransfersResponse";
    encode(_: CreatePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePendingTransfersResponse;
    fromJSON(_: any): CreatePendingTransfersResponse;
    toJSON(_: CreatePendingTransfersResponse): unknown;
    create<I extends Exact<DeepPartial<CreatePendingTransfersResponse>, I>>(base?: I): CreatePendingTransfersResponse;
    fromPartial<I extends Exact<DeepPartial<CreatePendingTransfersResponse>, I>>(_: I): CreatePendingTransfersResponse;
};
export declare const CreateTransferOwnershipRequest: {
    $type: "axelar.evm.v1beta1.CreateTransferOwnershipRequest";
    encode(message: CreateTransferOwnershipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOwnershipRequest;
    fromJSON(object: any): CreateTransferOwnershipRequest;
    toJSON(message: CreateTransferOwnershipRequest): unknown;
    create<I extends Exact<DeepPartial<CreateTransferOwnershipRequest>, I>>(base?: I): CreateTransferOwnershipRequest;
    fromPartial<I extends Exact<DeepPartial<CreateTransferOwnershipRequest>, I>>(object: I): CreateTransferOwnershipRequest;
};
export declare const CreateTransferOwnershipResponse: {
    $type: "axelar.evm.v1beta1.CreateTransferOwnershipResponse";
    encode(_: CreateTransferOwnershipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOwnershipResponse;
    fromJSON(_: any): CreateTransferOwnershipResponse;
    toJSON(_: CreateTransferOwnershipResponse): unknown;
    create<I extends Exact<DeepPartial<CreateTransferOwnershipResponse>, I>>(base?: I): CreateTransferOwnershipResponse;
    fromPartial<I extends Exact<DeepPartial<CreateTransferOwnershipResponse>, I>>(_: I): CreateTransferOwnershipResponse;
};
export declare const CreateTransferOperatorshipRequest: {
    $type: "axelar.evm.v1beta1.CreateTransferOperatorshipRequest";
    encode(message: CreateTransferOperatorshipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOperatorshipRequest;
    fromJSON(object: any): CreateTransferOperatorshipRequest;
    toJSON(message: CreateTransferOperatorshipRequest): unknown;
    create<I extends Exact<DeepPartial<CreateTransferOperatorshipRequest>, I>>(base?: I): CreateTransferOperatorshipRequest;
    fromPartial<I extends Exact<DeepPartial<CreateTransferOperatorshipRequest>, I>>(object: I): CreateTransferOperatorshipRequest;
};
export declare const CreateTransferOperatorshipResponse: {
    $type: "axelar.evm.v1beta1.CreateTransferOperatorshipResponse";
    encode(_: CreateTransferOperatorshipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOperatorshipResponse;
    fromJSON(_: any): CreateTransferOperatorshipResponse;
    toJSON(_: CreateTransferOperatorshipResponse): unknown;
    create<I extends Exact<DeepPartial<CreateTransferOperatorshipResponse>, I>>(base?: I): CreateTransferOperatorshipResponse;
    fromPartial<I extends Exact<DeepPartial<CreateTransferOperatorshipResponse>, I>>(_: I): CreateTransferOperatorshipResponse;
};
export declare const SignCommandsRequest: {
    $type: "axelar.evm.v1beta1.SignCommandsRequest";
    encode(message: SignCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignCommandsRequest;
    fromJSON(object: any): SignCommandsRequest;
    toJSON(message: SignCommandsRequest): unknown;
    create<I extends Exact<DeepPartial<SignCommandsRequest>, I>>(base?: I): SignCommandsRequest;
    fromPartial<I extends Exact<DeepPartial<SignCommandsRequest>, I>>(object: I): SignCommandsRequest;
};
export declare const SignCommandsResponse: {
    $type: "axelar.evm.v1beta1.SignCommandsResponse";
    encode(message: SignCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignCommandsResponse;
    fromJSON(object: any): SignCommandsResponse;
    toJSON(message: SignCommandsResponse): unknown;
    create<I extends Exact<DeepPartial<SignCommandsResponse>, I>>(base?: I): SignCommandsResponse;
    fromPartial<I extends Exact<DeepPartial<SignCommandsResponse>, I>>(object: I): SignCommandsResponse;
};
export declare const AddChainRequest: {
    $type: "axelar.evm.v1beta1.AddChainRequest";
    encode(message: AddChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddChainRequest;
    fromJSON(object: any): AddChainRequest;
    toJSON(message: AddChainRequest): unknown;
    create<I extends Exact<DeepPartial<AddChainRequest>, I>>(base?: I): AddChainRequest;
    fromPartial<I extends Exact<DeepPartial<AddChainRequest>, I>>(object: I): AddChainRequest;
};
export declare const AddChainResponse: {
    $type: "axelar.evm.v1beta1.AddChainResponse";
    encode(_: AddChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddChainResponse;
    fromJSON(_: any): AddChainResponse;
    toJSON(_: AddChainResponse): unknown;
    create<I extends Exact<DeepPartial<AddChainResponse>, I>>(base?: I): AddChainResponse;
    fromPartial<I extends Exact<DeepPartial<AddChainResponse>, I>>(_: I): AddChainResponse;
};
export declare const RetryFailedEventRequest: {
    $type: "axelar.evm.v1beta1.RetryFailedEventRequest";
    encode(message: RetryFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetryFailedEventRequest;
    fromJSON(object: any): RetryFailedEventRequest;
    toJSON(message: RetryFailedEventRequest): unknown;
    create<I extends Exact<DeepPartial<RetryFailedEventRequest>, I>>(base?: I): RetryFailedEventRequest;
    fromPartial<I extends Exact<DeepPartial<RetryFailedEventRequest>, I>>(object: I): RetryFailedEventRequest;
};
export declare const RetryFailedEventResponse: {
    $type: "axelar.evm.v1beta1.RetryFailedEventResponse";
    encode(_: RetryFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RetryFailedEventResponse;
    fromJSON(_: any): RetryFailedEventResponse;
    toJSON(_: RetryFailedEventResponse): unknown;
    create<I extends Exact<DeepPartial<RetryFailedEventResponse>, I>>(base?: I): RetryFailedEventResponse;
    fromPartial<I extends Exact<DeepPartial<RetryFailedEventResponse>, I>>(_: I): RetryFailedEventResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.evm.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(base?: I): UpdateParamsRequest;
    fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.evm.v1beta1.UpdateParamsResponse";
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
