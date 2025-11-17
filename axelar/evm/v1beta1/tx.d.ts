/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { KeyType } from "../../tss/exported/v1beta1/types";
import { Params } from "./params";
import { Asset, TokenDetails, TransferKeyType } from "./types";
export declare const protobufPackage = "axelar.evm.v1beta1";
export interface SetGatewayRequest {
    $type: "axelar.evm.v1beta1.SetGatewayRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    txId: Buffer;
    /**
     * DEPRECATED: Removed in v0.20, reinstated in v1.3 for backward compatibility.
     * This field must remain to allow decoding of historical transactions.
     * DO NOT use in new code.
     *
     * @deprecated
     */
    transferTypeDeprecated: TransferKeyType;
    /**
     * DEPRECATED: Removed in v0.20, reinstated in v1.3 for backward compatibility.
     * This field must remain to allow decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    chain: string;
    asset?: Asset | undefined;
    tokenDetails?: TokenDetails | undefined;
    /**
     * DEPRECATED: Removed in v0.15, reinstated in v1.3 for backward compatibility.
     * This field must remain to allow decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    name: string;
    /**
     * DEPRECATED: Removed in v0.14, reinstated in v1.3 for backward compatibility.
     * This field must remain to allow decoding of historical transactions.
     * DO NOT use in new code.
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
     * DEPRECATED: This field is deprecated but must remain to ensure backward compatibility.
     * Removing this field would break decoding of historical transactions.
     * DO NOT use in new code.
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
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetGatewayRequest;
    fromJSON(object: any): SetGatewayRequest;
    toJSON(message: SetGatewayRequest): unknown;
    create<I extends {
        address?: Buffer | undefined;
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        address?: Buffer | undefined;
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address" | "sender" | "senderDeprecated" | "chain">]: never; }>(base?: I | undefined): SetGatewayRequest;
    fromPartial<I_1 extends {
        address?: Buffer | undefined;
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        address?: Buffer | undefined;
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address" | "sender" | "senderDeprecated" | "chain">]: never; }>(object: I_1): SetGatewayRequest;
};
export declare const SetGatewayResponse: {
    $type: "axelar.evm.v1beta1.SetGatewayResponse";
    encode(_: SetGatewayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetGatewayResponse;
    fromJSON(_: any): SetGatewayResponse;
    toJSON(_: SetGatewayResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): SetGatewayResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): SetGatewayResponse;
};
export declare const ConfirmGatewayTxRequest: {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxRequest";
    encode(message: ConfirmGatewayTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxRequest;
    fromJSON(object: any): ConfirmGatewayTxRequest;
    toJSON(message: ConfirmGatewayTxRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "chain" | "txId">]: never; }>(base?: I | undefined): ConfirmGatewayTxRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "chain" | "txId">]: never; }>(object: I_1): ConfirmGatewayTxRequest;
};
export declare const ConfirmGatewayTxResponse: {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxResponse";
    encode(_: ConfirmGatewayTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxResponse;
    fromJSON(_: any): ConfirmGatewayTxResponse;
    toJSON(_: ConfirmGatewayTxResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ConfirmGatewayTxResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ConfirmGatewayTxResponse;
};
export declare const ConfirmGatewayTxsRequest: {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxsRequest";
    encode(message: ConfirmGatewayTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxsRequest;
    fromJSON(object: any): ConfirmGatewayTxsRequest;
    toJSON(message: ConfirmGatewayTxsRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txIds?: Buffer[] | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txIds?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["txIds"], "$type" | keyof Buffer[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "chain" | "txIds">]: never; }>(base?: I | undefined): ConfirmGatewayTxsRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txIds?: Buffer[] | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txIds?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I_1["txIds"], "$type" | keyof Buffer[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "chain" | "txIds">]: never; }>(object: I_1): ConfirmGatewayTxsRequest;
};
export declare const ConfirmGatewayTxsResponse: {
    $type: "axelar.evm.v1beta1.ConfirmGatewayTxsResponse";
    encode(_: ConfirmGatewayTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxsResponse;
    fromJSON(_: any): ConfirmGatewayTxsResponse;
    toJSON(_: ConfirmGatewayTxsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ConfirmGatewayTxsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ConfirmGatewayTxsResponse;
};
export declare const ConfirmDepositRequest: {
    $type: "axelar.evm.v1beta1.ConfirmDepositRequest";
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        amount?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        amount?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "amount" | "chain" | "txId" | "burnerAddress">]: never; }>(base?: I | undefined): ConfirmDepositRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        amount?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        amount?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "amount" | "chain" | "txId" | "burnerAddress">]: never; }>(object: I_1): ConfirmDepositRequest;
};
export declare const ConfirmDepositResponse: {
    $type: "axelar.evm.v1beta1.ConfirmDepositResponse";
    encode(_: ConfirmDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositResponse;
    fromJSON(_: any): ConfirmDepositResponse;
    toJSON(_: ConfirmDepositResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ConfirmDepositResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ConfirmDepositResponse;
};
export declare const ConfirmTokenRequest: {
    $type: "axelar.evm.v1beta1.ConfirmTokenRequest";
    encode(message: ConfirmTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTokenRequest;
    fromJSON(object: any): ConfirmTokenRequest;
    toJSON(message: ConfirmTokenRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & { [K in Exclude<keyof I["asset"], "$type" | "chain" | "name">]: never; }) | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "asset" | "chain" | "txId">]: never; }>(base?: I | undefined): ConfirmTokenRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["asset"], "$type" | "chain" | "name">]: never; }) | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "asset" | "chain" | "txId">]: never; }>(object: I_1): ConfirmTokenRequest;
};
export declare const ConfirmTokenResponse: {
    $type: "axelar.evm.v1beta1.ConfirmTokenResponse";
    encode(_: ConfirmTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTokenResponse;
    fromJSON(_: any): ConfirmTokenResponse;
    toJSON(_: ConfirmTokenResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ConfirmTokenResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ConfirmTokenResponse;
};
export declare const ConfirmTransferKeyRequest: {
    $type: "axelar.evm.v1beta1.ConfirmTransferKeyRequest";
    encode(message: ConfirmTransferKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTransferKeyRequest;
    fromJSON(object: any): ConfirmTransferKeyRequest;
    toJSON(message: ConfirmTransferKeyRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        transferTypeDeprecated?: TransferKeyType | undefined;
        keyIdDeprecated?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        transferTypeDeprecated?: TransferKeyType | undefined;
        keyIdDeprecated?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "chain" | "txId" | "transferTypeDeprecated" | "keyIdDeprecated">]: never; }>(base?: I | undefined): ConfirmTransferKeyRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        transferTypeDeprecated?: TransferKeyType | undefined;
        keyIdDeprecated?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        transferTypeDeprecated?: TransferKeyType | undefined;
        keyIdDeprecated?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "chain" | "txId" | "transferTypeDeprecated" | "keyIdDeprecated">]: never; }>(object: I_1): ConfirmTransferKeyRequest;
};
export declare const ConfirmTransferKeyResponse: {
    $type: "axelar.evm.v1beta1.ConfirmTransferKeyResponse";
    encode(_: ConfirmTransferKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTransferKeyResponse;
    fromJSON(_: any): ConfirmTransferKeyResponse;
    toJSON(_: ConfirmTransferKeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ConfirmTransferKeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ConfirmTransferKeyResponse;
};
export declare const LinkRequest: {
    $type: "axelar.evm.v1beta1.LinkRequest";
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "asset" | "chain" | "recipientAddr" | "recipientChain">]: never; }>(base?: I | undefined): LinkRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "asset" | "chain" | "recipientAddr" | "recipientChain">]: never; }>(object: I_1): LinkRequest;
};
export declare const LinkResponse: {
    $type: "axelar.evm.v1beta1.LinkResponse";
    encode(message: LinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkResponse;
    fromJSON(object: any): LinkResponse;
    toJSON(message: LinkResponse): unknown;
    create<I extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "depositAddr">]: never; }>(base?: I | undefined): LinkResponse;
    fromPartial<I_1 extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "depositAddr">]: never; }>(object: I_1): LinkResponse;
};
export declare const CreateBurnTokensRequest: {
    $type: "axelar.evm.v1beta1.CreateBurnTokensRequest";
    encode(message: CreateBurnTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBurnTokensRequest;
    fromJSON(object: any): CreateBurnTokensRequest;
    toJSON(message: CreateBurnTokensRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "chain">]: never; }>(base?: I | undefined): CreateBurnTokensRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "chain">]: never; }>(object: I_1): CreateBurnTokensRequest;
};
export declare const CreateBurnTokensResponse: {
    $type: "axelar.evm.v1beta1.CreateBurnTokensResponse";
    encode(_: CreateBurnTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBurnTokensResponse;
    fromJSON(_: any): CreateBurnTokensResponse;
    toJSON(_: CreateBurnTokensResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): CreateBurnTokensResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): CreateBurnTokensResponse;
};
export declare const CreateDeployTokenRequest: {
    $type: "axelar.evm.v1beta1.CreateDeployTokenRequest";
    encode(message: CreateDeployTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeployTokenRequest;
    fromJSON(object: any): CreateDeployTokenRequest;
    toJSON(message: CreateDeployTokenRequest): unknown;
    create<I extends {
        address?: Buffer | undefined;
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        chain?: string | undefined;
        minAmountDeprecated?: Buffer | undefined;
        tokenDetails?: {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        dailyMintLimit?: string | undefined;
    } & {
        address?: Buffer | undefined;
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & { [K in Exclude<keyof I["asset"], "$type" | "chain" | "name">]: never; }) | undefined;
        chain?: string | undefined;
        minAmountDeprecated?: Buffer | undefined;
        tokenDetails?: ({
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K_1 in Exclude<keyof I["tokenDetails"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
        dailyMintLimit?: string | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "address" | "sender" | "senderDeprecated" | "asset" | "chain" | "minAmountDeprecated" | "tokenDetails" | "dailyMintLimit">]: never; }>(base?: I | undefined): CreateDeployTokenRequest;
    fromPartial<I_1 extends {
        address?: Buffer | undefined;
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        chain?: string | undefined;
        minAmountDeprecated?: Buffer | undefined;
        tokenDetails?: {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        dailyMintLimit?: string | undefined;
    } & {
        address?: Buffer | undefined;
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["asset"], "$type" | "chain" | "name">]: never; }) | undefined;
        chain?: string | undefined;
        minAmountDeprecated?: Buffer | undefined;
        tokenDetails?: ({
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I_1["tokenDetails"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
        dailyMintLimit?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "address" | "sender" | "senderDeprecated" | "asset" | "chain" | "minAmountDeprecated" | "tokenDetails" | "dailyMintLimit">]: never; }>(object: I_1): CreateDeployTokenRequest;
};
export declare const CreateDeployTokenResponse: {
    $type: "axelar.evm.v1beta1.CreateDeployTokenResponse";
    encode(_: CreateDeployTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeployTokenResponse;
    fromJSON(_: any): CreateDeployTokenResponse;
    toJSON(_: CreateDeployTokenResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): CreateDeployTokenResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): CreateDeployTokenResponse;
};
export declare const CreatePendingTransfersRequest: {
    $type: "axelar.evm.v1beta1.CreatePendingTransfersRequest";
    encode(message: CreatePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePendingTransfersRequest;
    fromJSON(object: any): CreatePendingTransfersRequest;
    toJSON(message: CreatePendingTransfersRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "chain">]: never; }>(base?: I | undefined): CreatePendingTransfersRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "chain">]: never; }>(object: I_1): CreatePendingTransfersRequest;
};
export declare const CreatePendingTransfersResponse: {
    $type: "axelar.evm.v1beta1.CreatePendingTransfersResponse";
    encode(_: CreatePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePendingTransfersResponse;
    fromJSON(_: any): CreatePendingTransfersResponse;
    toJSON(_: CreatePendingTransfersResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): CreatePendingTransfersResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): CreatePendingTransfersResponse;
};
export declare const CreateTransferOwnershipRequest: {
    $type: "axelar.evm.v1beta1.CreateTransferOwnershipRequest";
    encode(message: CreateTransferOwnershipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOwnershipRequest;
    fromJSON(object: any): CreateTransferOwnershipRequest;
    toJSON(message: CreateTransferOwnershipRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "chain" | "keyId">]: never; }>(base?: I | undefined): CreateTransferOwnershipRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "chain" | "keyId">]: never; }>(object: I_1): CreateTransferOwnershipRequest;
};
export declare const CreateTransferOwnershipResponse: {
    $type: "axelar.evm.v1beta1.CreateTransferOwnershipResponse";
    encode(_: CreateTransferOwnershipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOwnershipResponse;
    fromJSON(_: any): CreateTransferOwnershipResponse;
    toJSON(_: CreateTransferOwnershipResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): CreateTransferOwnershipResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): CreateTransferOwnershipResponse;
};
export declare const CreateTransferOperatorshipRequest: {
    $type: "axelar.evm.v1beta1.CreateTransferOperatorshipRequest";
    encode(message: CreateTransferOperatorshipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOperatorshipRequest;
    fromJSON(object: any): CreateTransferOperatorshipRequest;
    toJSON(message: CreateTransferOperatorshipRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "chain" | "keyId">]: never; }>(base?: I | undefined): CreateTransferOperatorshipRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "chain" | "keyId">]: never; }>(object: I_1): CreateTransferOperatorshipRequest;
};
export declare const CreateTransferOperatorshipResponse: {
    $type: "axelar.evm.v1beta1.CreateTransferOperatorshipResponse";
    encode(_: CreateTransferOperatorshipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOperatorshipResponse;
    fromJSON(_: any): CreateTransferOperatorshipResponse;
    toJSON(_: CreateTransferOperatorshipResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): CreateTransferOperatorshipResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): CreateTransferOperatorshipResponse;
};
export declare const SignCommandsRequest: {
    $type: "axelar.evm.v1beta1.SignCommandsRequest";
    encode(message: SignCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignCommandsRequest;
    fromJSON(object: any): SignCommandsRequest;
    toJSON(message: SignCommandsRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "chain">]: never; }>(base?: I | undefined): SignCommandsRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "chain">]: never; }>(object: I_1): SignCommandsRequest;
};
export declare const SignCommandsResponse: {
    $type: "axelar.evm.v1beta1.SignCommandsResponse";
    encode(message: SignCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignCommandsResponse;
    fromJSON(object: any): SignCommandsResponse;
    toJSON(message: SignCommandsResponse): unknown;
    create<I extends {
        batchedCommandsId?: Buffer | undefined;
        commandCount?: number | undefined;
    } & {
        batchedCommandsId?: Buffer | undefined;
        commandCount?: number | undefined;
    } & { [K in Exclude<keyof I, "$type" | "batchedCommandsId" | "commandCount">]: never; }>(base?: I | undefined): SignCommandsResponse;
    fromPartial<I_1 extends {
        batchedCommandsId?: Buffer | undefined;
        commandCount?: number | undefined;
    } & {
        batchedCommandsId?: Buffer | undefined;
        commandCount?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "batchedCommandsId" | "commandCount">]: never; }>(object: I_1): SignCommandsResponse;
};
export declare const AddChainRequest: {
    $type: "axelar.evm.v1beta1.AddChainRequest";
    encode(message: AddChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddChainRequest;
    fromJSON(object: any): AddChainRequest;
    toJSON(message: AddChainRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        name?: string | undefined;
        params?: Buffer | undefined;
        keyType?: KeyType | undefined;
        nativeAssetDeprecated?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        name?: string | undefined;
        params?: Buffer | undefined;
        keyType?: KeyType | undefined;
        nativeAssetDeprecated?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "name" | "params" | "keyType" | "nativeAssetDeprecated">]: never; }>(base?: I | undefined): AddChainRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        name?: string | undefined;
        params?: Buffer | undefined;
        keyType?: KeyType | undefined;
        nativeAssetDeprecated?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        name?: string | undefined;
        params?: Buffer | undefined;
        keyType?: KeyType | undefined;
        nativeAssetDeprecated?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "name" | "params" | "keyType" | "nativeAssetDeprecated">]: never; }>(object: I_1): AddChainRequest;
};
export declare const AddChainResponse: {
    $type: "axelar.evm.v1beta1.AddChainResponse";
    encode(_: AddChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddChainResponse;
    fromJSON(_: any): AddChainResponse;
    toJSON(_: AddChainResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): AddChainResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): AddChainResponse;
};
export declare const RetryFailedEventRequest: {
    $type: "axelar.evm.v1beta1.RetryFailedEventRequest";
    encode(message: RetryFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryFailedEventRequest;
    fromJSON(object: any): RetryFailedEventRequest;
    toJSON(message: RetryFailedEventRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        eventId?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        eventId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderDeprecated" | "chain" | "eventId">]: never; }>(base?: I | undefined): RetryFailedEventRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        eventId?: string | undefined;
    } & {
        sender?: string | undefined;
        senderDeprecated?: Buffer | undefined;
        chain?: string | undefined;
        eventId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderDeprecated" | "chain" | "eventId">]: never; }>(object: I_1): RetryFailedEventRequest;
};
export declare const RetryFailedEventResponse: {
    $type: "axelar.evm.v1beta1.RetryFailedEventResponse";
    encode(_: RetryFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryFailedEventResponse;
    fromJSON(_: any): RetryFailedEventResponse;
    toJSON(_: RetryFailedEventResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RetryFailedEventResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RetryFailedEventResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.evm.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends {
        params?: {
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        params?: ({
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
        } & {
            transferLimit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K in Exclude<keyof I["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            endBlockerLimit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_1 in Exclude<keyof I["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_2 in Exclude<keyof I["params"]["confirmationHeight"], "$type" | keyof Long.Long>]: never; }) | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_3 in Exclude<keyof I["params"]["revoteLockingPeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
            networks?: ({
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] & ({
                id?: Buffer | undefined;
                name?: string | undefined;
            } & {
                id?: Buffer | undefined;
                name?: string | undefined;
            } & { [K_4 in Exclude<keyof I["params"]["networks"][number], "$type" | "id" | "name">]: never; })[] & { [K_5 in Exclude<keyof I["params"]["networks"], "$type" | keyof {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[]>]: never; }) | undefined;
            votingThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_6 in Exclude<keyof I["params"]["votingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                denominator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_7 in Exclude<keyof I["params"]["votingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["params"]["votingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            minVoterCount?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_9 in Exclude<keyof I["params"]["minVoterCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_10 in Exclude<keyof I["params"]["votingGracePeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["params"], "$type" | "transferLimit" | "endBlockerLimit" | "chain" | "confirmationHeight" | "network" | "tokenCode" | "burnable" | "revoteLockingPeriod" | "networks" | "votingThreshold" | "minVoterCount" | "commandsGasLimit" | "votingGracePeriod">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_12 in Exclude<keyof I, "$type" | "params" | "authority">]: never; }>(base?: I | undefined): UpdateParamsRequest;
    fromPartial<I_1 extends {
        params?: {
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        params?: ({
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
        } & {
            transferLimit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_13 in Exclude<keyof I_1["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            endBlockerLimit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_14 in Exclude<keyof I_1["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_15 in Exclude<keyof I_1["params"]["confirmationHeight"], "$type" | keyof Long.Long>]: never; }) | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_16 in Exclude<keyof I_1["params"]["revoteLockingPeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
            networks?: ({
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] & ({
                id?: Buffer | undefined;
                name?: string | undefined;
            } & {
                id?: Buffer | undefined;
                name?: string | undefined;
            } & { [K_17 in Exclude<keyof I_1["params"]["networks"][number], "$type" | "id" | "name">]: never; })[] & { [K_18 in Exclude<keyof I_1["params"]["networks"], "$type" | keyof {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[]>]: never; }) | undefined;
            votingThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_19 in Exclude<keyof I_1["params"]["votingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                denominator?: string | number | (Long.Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long.Long) => Long.Long;
                    and: (other: string | number | Long.Long) => Long.Long;
                    compare: (other: string | number | Long.Long) => number;
                    comp: (other: string | number | Long.Long) => number;
                    divide: (divisor: string | number | Long.Long) => Long.Long;
                    div: (divisor: string | number | Long.Long) => Long.Long;
                    equals: (other: string | number | Long.Long) => boolean;
                    eq: (other: string | number | Long.Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long.Long) => boolean;
                    gt: (other: string | number | Long.Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                    gte: (other: string | number | Long.Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | Long.Long) => boolean;
                    lt: (other: string | number | Long.Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                    lte: (other: string | number | Long.Long) => boolean;
                    modulo: (other: string | number | Long.Long) => Long.Long;
                    mod: (other: string | number | Long.Long) => Long.Long;
                    multiply: (multiplier: string | number | Long.Long) => Long.Long;
                    mul: (multiplier: string | number | Long.Long) => Long.Long;
                    negate: () => Long.Long;
                    neg: () => Long.Long;
                    not: () => Long.Long;
                    notEquals: (other: string | number | Long.Long) => boolean;
                    neq: (other: string | number | Long.Long) => boolean;
                    or: (other: string | number | Long.Long) => Long.Long;
                    shiftLeft: (numBits: number | Long.Long) => Long.Long;
                    shl: (numBits: number | Long.Long) => Long.Long;
                    shiftRight: (numBits: number | Long.Long) => Long.Long;
                    shr: (numBits: number | Long.Long) => Long.Long;
                    shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                    shru: (numBits: number | Long.Long) => Long.Long;
                    subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                    sub: (subtrahend: string | number | Long.Long) => Long.Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long.Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long.Long;
                    xor: (other: string | number | Long.Long) => Long.Long;
                } & { [K_20 in Exclude<keyof I_1["params"]["votingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I_1["params"]["votingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            minVoterCount?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_22 in Exclude<keyof I_1["params"]["minVoterCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & { [K_23 in Exclude<keyof I_1["params"]["votingGracePeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I_1["params"], "$type" | "transferLimit" | "endBlockerLimit" | "chain" | "confirmationHeight" | "network" | "tokenCode" | "burnable" | "revoteLockingPeriod" | "networks" | "votingThreshold" | "minVoterCount" | "commandsGasLimit" | "votingGracePeriod">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_25 in Exclude<keyof I_1, "$type" | "params" | "authority">]: never; }>(object: I_1): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.evm.v1beta1.UpdateParamsResponse";
    encode(_: UpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsResponse;
    fromJSON(_: any): UpdateParamsResponse;
    toJSON(_: UpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): UpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): UpdateParamsResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
