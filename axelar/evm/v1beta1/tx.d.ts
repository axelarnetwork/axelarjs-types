/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { KeyType } from "../../tss/exported/v1beta1/types";
import { Asset, TokenDetails } from "./types";
export declare const protobufPackage = "axelar.evm.v1beta1";
export interface SetGatewayRequest {
    chain: string;
    address: Buffer;
    sender: string;
}
export interface SetGatewayResponse {
}
/** @deprecated */
export interface ConfirmGatewayTxRequest {
    chain: string;
    txId: Buffer;
    sender: string;
}
/** @deprecated */
export interface ConfirmGatewayTxResponse {
}
export interface ConfirmGatewayTxsRequest {
    chain: string;
    txIds: Buffer[];
    sender: string;
}
export interface ConfirmGatewayTxsResponse {
}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequest {
    chain: string;
    txId: Buffer;
    /** @deprecated */
    amount: Buffer;
    burnerAddress: Buffer;
    sender: string;
}
export interface ConfirmDepositResponse {
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequest {
    chain: string;
    txId: Buffer;
    asset?: Asset | undefined;
    sender: string;
}
export interface ConfirmTokenResponse {
}
export interface ConfirmTransferKeyRequest {
    chain: string;
    txId: Buffer;
    sender: string;
}
export interface ConfirmTransferKeyResponse {
}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequest {
    chain: string;
    recipientAddr: string;
    asset: string;
    recipientChain: string;
    sender: string;
}
export interface LinkResponse {
    depositAddr: string;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequest {
    chain: string;
    sender: string;
}
export interface CreateBurnTokensResponse {
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequest {
    chain: string;
    asset?: Asset | undefined;
    tokenDetails?: TokenDetails | undefined;
    address: Buffer;
    dailyMintLimit: string;
    sender: string;
}
export interface CreateDeployTokenResponse {
}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequest {
    chain: string;
    sender: string;
}
export interface CreatePendingTransfersResponse {
}
/** @deprecated */
export interface CreateTransferOwnershipRequest {
    chain: string;
    keyId: string;
    sender: string;
}
/** @deprecated */
export interface CreateTransferOwnershipResponse {
}
export interface CreateTransferOperatorshipRequest {
    chain: string;
    keyId: string;
    sender: string;
}
export interface CreateTransferOperatorshipResponse {
}
export interface SignCommandsRequest {
    chain: string;
    sender: string;
}
export interface SignCommandsResponse {
    batchedCommandsId: Buffer;
    commandCount: number;
}
export interface AddChainRequest {
    name: string;
    /** @deprecated */
    keyType: KeyType;
    params: Buffer;
    sender: string;
}
export interface AddChainResponse {
}
export interface RetryFailedEventRequest {
    chain: string;
    eventId: string;
    sender: string;
}
export interface RetryFailedEventResponse {
}
export declare const SetGatewayRequest: {
    encode(message: SetGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetGatewayRequest;
    fromJSON(object: any): SetGatewayRequest;
    toJSON(message: SetGatewayRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        address?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        address?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SetGatewayRequest>]: never; }>(base?: I | undefined): SetGatewayRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        address?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        address?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetGatewayRequest>]: never; }>(object: I_1): SetGatewayRequest;
};
export declare const SetGatewayResponse: {
    encode(_: SetGatewayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetGatewayResponse;
    fromJSON(_: any): SetGatewayResponse;
    toJSON(_: SetGatewayResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): SetGatewayResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SetGatewayResponse;
};
export declare const ConfirmGatewayTxRequest: {
    encode(message: ConfirmGatewayTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxRequest;
    fromJSON(object: any): ConfirmGatewayTxRequest;
    toJSON(message: ConfirmGatewayTxRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ConfirmGatewayTxRequest>]: never; }>(base?: I | undefined): ConfirmGatewayTxRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ConfirmGatewayTxRequest>]: never; }>(object: I_1): ConfirmGatewayTxRequest;
};
export declare const ConfirmGatewayTxResponse: {
    encode(_: ConfirmGatewayTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxResponse;
    fromJSON(_: any): ConfirmGatewayTxResponse;
    toJSON(_: ConfirmGatewayTxResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ConfirmGatewayTxResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ConfirmGatewayTxResponse;
};
export declare const ConfirmGatewayTxsRequest: {
    encode(message: ConfirmGatewayTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxsRequest;
    fromJSON(object: any): ConfirmGatewayTxsRequest;
    toJSON(message: ConfirmGatewayTxsRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        txIds?: Buffer[] | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txIds?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["txIds"], keyof Buffer[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ConfirmGatewayTxsRequest>]: never; }>(base?: I | undefined): ConfirmGatewayTxsRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        txIds?: Buffer[] | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txIds?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I_1["txIds"], keyof Buffer[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ConfirmGatewayTxsRequest>]: never; }>(object: I_1): ConfirmGatewayTxsRequest;
};
export declare const ConfirmGatewayTxsResponse: {
    encode(_: ConfirmGatewayTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxsResponse;
    fromJSON(_: any): ConfirmGatewayTxsResponse;
    toJSON(_: ConfirmGatewayTxsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ConfirmGatewayTxsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ConfirmGatewayTxsResponse;
};
export declare const ConfirmDepositRequest: {
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        amount?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        amount?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ConfirmDepositRequest>]: never; }>(base?: I | undefined): ConfirmDepositRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        amount?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        amount?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ConfirmDepositRequest>]: never; }>(object: I_1): ConfirmDepositRequest;
};
export declare const ConfirmDepositResponse: {
    encode(_: ConfirmDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositResponse;
    fromJSON(_: any): ConfirmDepositResponse;
    toJSON(_: ConfirmDepositResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ConfirmDepositResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ConfirmDepositResponse;
};
export declare const ConfirmTokenRequest: {
    encode(message: ConfirmTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTokenRequest;
    fromJSON(object: any): ConfirmTokenRequest;
    toJSON(message: ConfirmTokenRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & { [K in Exclude<keyof I["asset"], keyof Asset>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ConfirmTokenRequest>]: never; }>(base?: I | undefined): ConfirmTokenRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["asset"], keyof Asset>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ConfirmTokenRequest>]: never; }>(object: I_1): ConfirmTokenRequest;
};
export declare const ConfirmTokenResponse: {
    encode(_: ConfirmTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTokenResponse;
    fromJSON(_: any): ConfirmTokenResponse;
    toJSON(_: ConfirmTokenResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ConfirmTokenResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ConfirmTokenResponse;
};
export declare const ConfirmTransferKeyRequest: {
    encode(message: ConfirmTransferKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTransferKeyRequest;
    fromJSON(object: any): ConfirmTransferKeyRequest;
    toJSON(message: ConfirmTransferKeyRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ConfirmTransferKeyRequest>]: never; }>(base?: I | undefined): ConfirmTransferKeyRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ConfirmTransferKeyRequest>]: never; }>(object: I_1): ConfirmTransferKeyRequest;
};
export declare const ConfirmTransferKeyResponse: {
    encode(_: ConfirmTransferKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTransferKeyResponse;
    fromJSON(_: any): ConfirmTransferKeyResponse;
    toJSON(_: ConfirmTransferKeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ConfirmTransferKeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ConfirmTransferKeyResponse;
};
export declare const LinkRequest: {
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        asset?: string | undefined;
        recipientChain?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        asset?: string | undefined;
        recipientChain?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof LinkRequest>]: never; }>(base?: I | undefined): LinkRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        asset?: string | undefined;
        recipientChain?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        asset?: string | undefined;
        recipientChain?: string | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LinkRequest>]: never; }>(object: I_1): LinkRequest;
};
export declare const LinkResponse: {
    encode(message: LinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkResponse;
    fromJSON(object: any): LinkResponse;
    toJSON(message: LinkResponse): unknown;
    create<I extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & { [K in Exclude<keyof I, "depositAddr">]: never; }>(base?: I | undefined): LinkResponse;
    fromPartial<I_1 extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "depositAddr">]: never; }>(object: I_1): LinkResponse;
};
export declare const CreateBurnTokensRequest: {
    encode(message: CreateBurnTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBurnTokensRequest;
    fromJSON(object: any): CreateBurnTokensRequest;
    toJSON(message: CreateBurnTokensRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CreateBurnTokensRequest>]: never; }>(base?: I | undefined): CreateBurnTokensRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CreateBurnTokensRequest>]: never; }>(object: I_1): CreateBurnTokensRequest;
};
export declare const CreateBurnTokensResponse: {
    encode(_: CreateBurnTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBurnTokensResponse;
    fromJSON(_: any): CreateBurnTokensResponse;
    toJSON(_: CreateBurnTokensResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): CreateBurnTokensResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CreateBurnTokensResponse;
};
export declare const CreateDeployTokenRequest: {
    encode(message: CreateDeployTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeployTokenRequest;
    fromJSON(object: any): CreateDeployTokenRequest;
    toJSON(message: CreateDeployTokenRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        tokenDetails?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        address?: Buffer | undefined;
        dailyMintLimit?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & { [K in Exclude<keyof I["asset"], keyof Asset>]: never; }) | undefined;
        tokenDetails?: ({
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K_1 in Exclude<keyof I["tokenDetails"], keyof TokenDetails>]: never; }) | undefined;
        address?: Buffer | undefined;
        dailyMintLimit?: string | undefined;
        sender?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof CreateDeployTokenRequest>]: never; }>(base?: I | undefined): CreateDeployTokenRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        tokenDetails?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        address?: Buffer | undefined;
        dailyMintLimit?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["asset"], keyof Asset>]: never; }) | undefined;
        tokenDetails?: ({
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I_1["tokenDetails"], keyof TokenDetails>]: never; }) | undefined;
        address?: Buffer | undefined;
        dailyMintLimit?: string | undefined;
        sender?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof CreateDeployTokenRequest>]: never; }>(object: I_1): CreateDeployTokenRequest;
};
export declare const CreateDeployTokenResponse: {
    encode(_: CreateDeployTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeployTokenResponse;
    fromJSON(_: any): CreateDeployTokenResponse;
    toJSON(_: CreateDeployTokenResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): CreateDeployTokenResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CreateDeployTokenResponse;
};
export declare const CreatePendingTransfersRequest: {
    encode(message: CreatePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePendingTransfersRequest;
    fromJSON(object: any): CreatePendingTransfersRequest;
    toJSON(message: CreatePendingTransfersRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CreatePendingTransfersRequest>]: never; }>(base?: I | undefined): CreatePendingTransfersRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CreatePendingTransfersRequest>]: never; }>(object: I_1): CreatePendingTransfersRequest;
};
export declare const CreatePendingTransfersResponse: {
    encode(_: CreatePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePendingTransfersResponse;
    fromJSON(_: any): CreatePendingTransfersResponse;
    toJSON(_: CreatePendingTransfersResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): CreatePendingTransfersResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CreatePendingTransfersResponse;
};
export declare const CreateTransferOwnershipRequest: {
    encode(message: CreateTransferOwnershipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOwnershipRequest;
    fromJSON(object: any): CreateTransferOwnershipRequest;
    toJSON(message: CreateTransferOwnershipRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CreateTransferOwnershipRequest>]: never; }>(base?: I | undefined): CreateTransferOwnershipRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CreateTransferOwnershipRequest>]: never; }>(object: I_1): CreateTransferOwnershipRequest;
};
export declare const CreateTransferOwnershipResponse: {
    encode(_: CreateTransferOwnershipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOwnershipResponse;
    fromJSON(_: any): CreateTransferOwnershipResponse;
    toJSON(_: CreateTransferOwnershipResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): CreateTransferOwnershipResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CreateTransferOwnershipResponse;
};
export declare const CreateTransferOperatorshipRequest: {
    encode(message: CreateTransferOperatorshipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOperatorshipRequest;
    fromJSON(object: any): CreateTransferOperatorshipRequest;
    toJSON(message: CreateTransferOperatorshipRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CreateTransferOperatorshipRequest>]: never; }>(base?: I | undefined): CreateTransferOperatorshipRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CreateTransferOperatorshipRequest>]: never; }>(object: I_1): CreateTransferOperatorshipRequest;
};
export declare const CreateTransferOperatorshipResponse: {
    encode(_: CreateTransferOperatorshipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOperatorshipResponse;
    fromJSON(_: any): CreateTransferOperatorshipResponse;
    toJSON(_: CreateTransferOperatorshipResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): CreateTransferOperatorshipResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CreateTransferOperatorshipResponse;
};
export declare const SignCommandsRequest: {
    encode(message: SignCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignCommandsRequest;
    fromJSON(object: any): SignCommandsRequest;
    toJSON(message: SignCommandsRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SignCommandsRequest>]: never; }>(base?: I | undefined): SignCommandsRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SignCommandsRequest>]: never; }>(object: I_1): SignCommandsRequest;
};
export declare const SignCommandsResponse: {
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
    } & { [K in Exclude<keyof I, keyof SignCommandsResponse>]: never; }>(base?: I | undefined): SignCommandsResponse;
    fromPartial<I_1 extends {
        batchedCommandsId?: Buffer | undefined;
        commandCount?: number | undefined;
    } & {
        batchedCommandsId?: Buffer | undefined;
        commandCount?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SignCommandsResponse>]: never; }>(object: I_1): SignCommandsResponse;
};
export declare const AddChainRequest: {
    encode(message: AddChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddChainRequest;
    fromJSON(object: any): AddChainRequest;
    toJSON(message: AddChainRequest): unknown;
    create<I extends {
        name?: string | undefined;
        keyType?: KeyType | undefined;
        params?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        name?: string | undefined;
        keyType?: KeyType | undefined;
        params?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AddChainRequest>]: never; }>(base?: I | undefined): AddChainRequest;
    fromPartial<I_1 extends {
        name?: string | undefined;
        keyType?: KeyType | undefined;
        params?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        name?: string | undefined;
        keyType?: KeyType | undefined;
        params?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AddChainRequest>]: never; }>(object: I_1): AddChainRequest;
};
export declare const AddChainResponse: {
    encode(_: AddChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddChainResponse;
    fromJSON(_: any): AddChainResponse;
    toJSON(_: AddChainResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): AddChainResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): AddChainResponse;
};
export declare const RetryFailedEventRequest: {
    encode(message: RetryFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryFailedEventRequest;
    fromJSON(object: any): RetryFailedEventRequest;
    toJSON(message: RetryFailedEventRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RetryFailedEventRequest>]: never; }>(base?: I | undefined): RetryFailedEventRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        eventId?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RetryFailedEventRequest>]: never; }>(object: I_1): RetryFailedEventRequest;
};
export declare const RetryFailedEventResponse: {
    encode(_: RetryFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryFailedEventResponse;
    fromJSON(_: any): RetryFailedEventResponse;
    toJSON(_: RetryFailedEventResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RetryFailedEventResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RetryFailedEventResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
