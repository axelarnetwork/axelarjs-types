/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { BatchedCommandsStatus, BurnerInfo, DepositStatus, Event, TokenDetails } from "./types";
export declare const protobufPackage = "axelar.evm.v1beta1";
export declare enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_ACTIVATED = 1,
    CHAIN_STATUS_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare function chainStatusFromJSON(object: any): ChainStatus;
export declare function chainStatusToJSON(object: ChainStatus): string;
export declare enum TokenType {
    TOKEN_TYPE_UNSPECIFIED = 0,
    TOKEN_TYPE_INTERNAL = 1,
    TOKEN_TYPE_EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare function tokenTypeFromJSON(object: any): TokenType;
export declare function tokenTypeToJSON(object: TokenType): string;
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParams {
    $type: "axelar.evm.v1beta1.DepositQueryParams";
    address: string;
    asset: string;
    chain: string;
}
export interface BatchedCommandsRequest {
    $type: "axelar.evm.v1beta1.BatchedCommandsRequest";
    chain: string;
    /**
     * id defines an optional id for the commandsbatch. If not specified the
     * latest will be returned
     */
    id: string;
}
export interface BatchedCommandsResponse {
    $type: "axelar.evm.v1beta1.BatchedCommandsResponse";
    id: string;
    data: string;
    status: BatchedCommandsStatus;
    keyId: string;
    executeData: string;
    prevBatchedCommandsId: string;
    commandIds: string[];
    proof?: Proof | undefined;
}
export interface KeyAddressRequest {
    $type: "axelar.evm.v1beta1.KeyAddressRequest";
    chain: string;
    keyId: string;
}
export interface KeyAddressResponse {
    $type: "axelar.evm.v1beta1.KeyAddressResponse";
    keyId: string;
    addresses: KeyAddressResponse_WeightedAddress[];
    threshold: string;
}
export interface KeyAddressResponse_WeightedAddress {
    $type: "axelar.evm.v1beta1.KeyAddressResponse.WeightedAddress";
    address: string;
    weight: string;
}
/** @deprecated */
export interface QueryTokenAddressResponse {
    $type: "axelar.evm.v1beta1.QueryTokenAddressResponse";
    address: string;
    confirmed: boolean;
}
/** @deprecated */
export interface QueryDepositStateParams {
    $type: "axelar.evm.v1beta1.QueryDepositStateParams";
    txId: Buffer;
    burnerAddress: Buffer;
}
/** @deprecated */
export interface DepositStateRequest {
    $type: "axelar.evm.v1beta1.DepositStateRequest";
    chain: string;
    params?: QueryDepositStateParams | undefined;
}
/** @deprecated */
export interface DepositStateResponse {
    $type: "axelar.evm.v1beta1.DepositStateResponse";
    status: DepositStatus;
}
export interface EventRequest {
    $type: "axelar.evm.v1beta1.EventRequest";
    chain: string;
    eventId: string;
}
export interface EventResponse {
    $type: "axelar.evm.v1beta1.EventResponse";
    event?: Event | undefined;
}
export interface QueryBurnerAddressResponse {
    $type: "axelar.evm.v1beta1.QueryBurnerAddressResponse";
    address: string;
}
export interface ChainsRequest {
    $type: "axelar.evm.v1beta1.ChainsRequest";
    status: ChainStatus;
}
export interface ChainsResponse {
    $type: "axelar.evm.v1beta1.ChainsResponse";
    chains: string[];
}
export interface CommandRequest {
    $type: "axelar.evm.v1beta1.CommandRequest";
    chain: string;
    id: string;
}
export interface CommandResponse {
    $type: "axelar.evm.v1beta1.CommandResponse";
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface CommandResponse_ParamsEntry {
    $type: "axelar.evm.v1beta1.CommandResponse.ParamsEntry";
    key: string;
    value: string;
}
export interface PendingCommandsRequest {
    $type: "axelar.evm.v1beta1.PendingCommandsRequest";
    chain: string;
}
export interface PendingCommandsResponse {
    $type: "axelar.evm.v1beta1.PendingCommandsResponse";
    commands: QueryCommandResponse[];
}
export interface QueryCommandResponse {
    $type: "axelar.evm.v1beta1.QueryCommandResponse";
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface QueryCommandResponse_ParamsEntry {
    $type: "axelar.evm.v1beta1.QueryCommandResponse.ParamsEntry";
    key: string;
    value: string;
}
export interface BurnerInfoRequest {
    $type: "axelar.evm.v1beta1.BurnerInfoRequest";
    address: Buffer;
}
export interface BurnerInfoResponse {
    $type: "axelar.evm.v1beta1.BurnerInfoResponse";
    chain: string;
    burnerInfo?: BurnerInfo | undefined;
}
export interface ConfirmationHeightRequest {
    $type: "axelar.evm.v1beta1.ConfirmationHeightRequest";
    chain: string;
}
export interface ConfirmationHeightResponse {
    $type: "axelar.evm.v1beta1.ConfirmationHeightResponse";
    height: Long;
}
export interface GatewayAddressRequest {
    $type: "axelar.evm.v1beta1.GatewayAddressRequest";
    chain: string;
}
export interface GatewayAddressResponse {
    $type: "axelar.evm.v1beta1.GatewayAddressResponse";
    address: string;
}
export interface BytecodeRequest {
    $type: "axelar.evm.v1beta1.BytecodeRequest";
    chain: string;
    contract: string;
}
export interface BytecodeResponse {
    $type: "axelar.evm.v1beta1.BytecodeResponse";
    bytecode: string;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequest {
    $type: "axelar.evm.v1beta1.ERC20TokensRequest";
    chain: string;
    type: TokenType;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponse {
    $type: "axelar.evm.v1beta1.ERC20TokensResponse";
    tokens: ERC20TokensResponse_Token[];
}
export interface ERC20TokensResponse_Token {
    $type: "axelar.evm.v1beta1.ERC20TokensResponse.Token";
    asset: string;
    symbol: string;
}
export interface TokenInfoRequest {
    $type: "axelar.evm.v1beta1.TokenInfoRequest";
    chain: string;
    asset?: string | undefined;
    symbol?: string | undefined;
    address?: string | undefined;
}
export interface TokenInfoResponse {
    $type: "axelar.evm.v1beta1.TokenInfoResponse";
    asset: string;
    details?: TokenDetails | undefined;
    address: string;
    confirmed: boolean;
    isExternal: boolean;
    burnerCodeHash: string;
}
export interface Proof {
    $type: "axelar.evm.v1beta1.Proof";
    addresses: string[];
    weights: string[];
    threshold: string;
    signatures: string[];
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.evm.v1beta1.ParamsRequest";
    chain: string;
}
export interface ParamsResponse {
    $type: "axelar.evm.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
export declare const DepositQueryParams: {
    $type: "axelar.evm.v1beta1.DepositQueryParams";
    encode(message: DepositQueryParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DepositQueryParams;
    fromJSON(object: any): DepositQueryParams;
    toJSON(message: DepositQueryParams): unknown;
    create<I extends {
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address" | "asset" | "chain">]: never; }>(base?: I | undefined): DepositQueryParams;
    fromPartial<I_1 extends {
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address" | "asset" | "chain">]: never; }>(object: I_1): DepositQueryParams;
};
export declare const BatchedCommandsRequest: {
    $type: "axelar.evm.v1beta1.BatchedCommandsRequest";
    encode(message: BatchedCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchedCommandsRequest;
    fromJSON(object: any): BatchedCommandsRequest;
    toJSON(message: BatchedCommandsRequest): unknown;
    create<I extends {
        id?: string | undefined;
        chain?: string | undefined;
    } & {
        id?: string | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id" | "chain">]: never; }>(base?: I | undefined): BatchedCommandsRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
        chain?: string | undefined;
    } & {
        id?: string | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "id" | "chain">]: never; }>(object: I_1): BatchedCommandsRequest;
};
export declare const BatchedCommandsResponse: {
    $type: "axelar.evm.v1beta1.BatchedCommandsResponse";
    encode(message: BatchedCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchedCommandsResponse;
    fromJSON(object: any): BatchedCommandsResponse;
    toJSON(message: BatchedCommandsResponse): unknown;
    create<I extends {
        proof?: {
            signatures?: string[] | undefined;
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
        } | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        id?: string | undefined;
        keyId?: string | undefined;
        commandIds?: string[] | undefined;
        prevBatchedCommandsId?: string | undefined;
        executeData?: string | undefined;
    } & {
        proof?: ({
            signatures?: string[] | undefined;
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
        } & {
            signatures?: (string[] & string[] & { [K in Exclude<keyof I["proof"]["signatures"], "$type" | keyof string[]>]: never; }) | undefined;
            addresses?: (string[] & string[] & { [K_1 in Exclude<keyof I["proof"]["addresses"], "$type" | keyof string[]>]: never; }) | undefined;
            weights?: (string[] & string[] & { [K_2 in Exclude<keyof I["proof"]["weights"], "$type" | keyof string[]>]: never; }) | undefined;
            threshold?: string | undefined;
        } & { [K_3 in Exclude<keyof I["proof"], "$type" | "signatures" | "addresses" | "weights" | "threshold">]: never; }) | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        id?: string | undefined;
        keyId?: string | undefined;
        commandIds?: (string[] & string[] & { [K_4 in Exclude<keyof I["commandIds"], "$type" | keyof string[]>]: never; }) | undefined;
        prevBatchedCommandsId?: string | undefined;
        executeData?: string | undefined;
    } & { [K_5 in Exclude<keyof I, "$type" | "proof" | "data" | "status" | "id" | "keyId" | "commandIds" | "prevBatchedCommandsId" | "executeData">]: never; }>(base?: I | undefined): BatchedCommandsResponse;
    fromPartial<I_1 extends {
        proof?: {
            signatures?: string[] | undefined;
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
        } | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        id?: string | undefined;
        keyId?: string | undefined;
        commandIds?: string[] | undefined;
        prevBatchedCommandsId?: string | undefined;
        executeData?: string | undefined;
    } & {
        proof?: ({
            signatures?: string[] | undefined;
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
        } & {
            signatures?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["proof"]["signatures"], "$type" | keyof string[]>]: never; }) | undefined;
            addresses?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["proof"]["addresses"], "$type" | keyof string[]>]: never; }) | undefined;
            weights?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["proof"]["weights"], "$type" | keyof string[]>]: never; }) | undefined;
            threshold?: string | undefined;
        } & { [K_9 in Exclude<keyof I_1["proof"], "$type" | "signatures" | "addresses" | "weights" | "threshold">]: never; }) | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        id?: string | undefined;
        keyId?: string | undefined;
        commandIds?: (string[] & string[] & { [K_10 in Exclude<keyof I_1["commandIds"], "$type" | keyof string[]>]: never; }) | undefined;
        prevBatchedCommandsId?: string | undefined;
        executeData?: string | undefined;
    } & { [K_11 in Exclude<keyof I_1, "$type" | "proof" | "data" | "status" | "id" | "keyId" | "commandIds" | "prevBatchedCommandsId" | "executeData">]: never; }>(object: I_1): BatchedCommandsResponse;
};
export declare const KeyAddressRequest: {
    $type: "axelar.evm.v1beta1.KeyAddressRequest";
    encode(message: KeyAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyAddressRequest;
    fromJSON(object: any): KeyAddressRequest;
    toJSON(message: KeyAddressRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain" | "keyId">]: never; }>(base?: I | undefined): KeyAddressRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain" | "keyId">]: never; }>(object: I_1): KeyAddressRequest;
};
export declare const KeyAddressResponse: {
    $type: "axelar.evm.v1beta1.KeyAddressResponse";
    encode(message: KeyAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyAddressResponse;
    fromJSON(object: any): KeyAddressResponse;
    toJSON(message: KeyAddressResponse): unknown;
    create<I extends {
        keyId?: string | undefined;
        addresses?: {
            address?: string | undefined;
            weight?: string | undefined;
        }[] | undefined;
        threshold?: string | undefined;
    } & {
        keyId?: string | undefined;
        addresses?: ({
            address?: string | undefined;
            weight?: string | undefined;
        }[] & ({
            address?: string | undefined;
            weight?: string | undefined;
        } & {
            address?: string | undefined;
            weight?: string | undefined;
        } & { [K in Exclude<keyof I["addresses"][number], "$type" | "address" | "weight">]: never; })[] & { [K_1 in Exclude<keyof I["addresses"], "$type" | keyof {
            address?: string | undefined;
            weight?: string | undefined;
        }[]>]: never; }) | undefined;
        threshold?: string | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "keyId" | "addresses" | "threshold">]: never; }>(base?: I | undefined): KeyAddressResponse;
    fromPartial<I_1 extends {
        keyId?: string | undefined;
        addresses?: {
            address?: string | undefined;
            weight?: string | undefined;
        }[] | undefined;
        threshold?: string | undefined;
    } & {
        keyId?: string | undefined;
        addresses?: ({
            address?: string | undefined;
            weight?: string | undefined;
        }[] & ({
            address?: string | undefined;
            weight?: string | undefined;
        } & {
            address?: string | undefined;
            weight?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["addresses"][number], "$type" | "address" | "weight">]: never; })[] & { [K_4 in Exclude<keyof I_1["addresses"], "$type" | keyof {
            address?: string | undefined;
            weight?: string | undefined;
        }[]>]: never; }) | undefined;
        threshold?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "keyId" | "addresses" | "threshold">]: never; }>(object: I_1): KeyAddressResponse;
};
export declare const KeyAddressResponse_WeightedAddress: {
    $type: "axelar.evm.v1beta1.KeyAddressResponse.WeightedAddress";
    encode(message: KeyAddressResponse_WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyAddressResponse_WeightedAddress;
    fromJSON(object: any): KeyAddressResponse_WeightedAddress;
    toJSON(message: KeyAddressResponse_WeightedAddress): unknown;
    create<I extends {
        address?: string | undefined;
        weight?: string | undefined;
    } & {
        address?: string | undefined;
        weight?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address" | "weight">]: never; }>(base?: I | undefined): KeyAddressResponse_WeightedAddress;
    fromPartial<I_1 extends {
        address?: string | undefined;
        weight?: string | undefined;
    } & {
        address?: string | undefined;
        weight?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address" | "weight">]: never; }>(object: I_1): KeyAddressResponse_WeightedAddress;
};
export declare const QueryTokenAddressResponse: {
    $type: "axelar.evm.v1beta1.QueryTokenAddressResponse";
    encode(message: QueryTokenAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTokenAddressResponse;
    fromJSON(object: any): QueryTokenAddressResponse;
    toJSON(message: QueryTokenAddressResponse): unknown;
    create<I extends {
        address?: string | undefined;
        confirmed?: boolean | undefined;
    } & {
        address?: string | undefined;
        confirmed?: boolean | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address" | "confirmed">]: never; }>(base?: I | undefined): QueryTokenAddressResponse;
    fromPartial<I_1 extends {
        address?: string | undefined;
        confirmed?: boolean | undefined;
    } & {
        address?: string | undefined;
        confirmed?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address" | "confirmed">]: never; }>(object: I_1): QueryTokenAddressResponse;
};
export declare const QueryDepositStateParams: {
    $type: "axelar.evm.v1beta1.QueryDepositStateParams";
    encode(message: QueryDepositStateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDepositStateParams;
    fromJSON(object: any): QueryDepositStateParams;
    toJSON(message: QueryDepositStateParams): unknown;
    create<I extends {
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & {
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "txId" | "burnerAddress">]: never; }>(base?: I | undefined): QueryDepositStateParams;
    fromPartial<I_1 extends {
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & {
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "txId" | "burnerAddress">]: never; }>(object: I_1): QueryDepositStateParams;
};
export declare const DepositStateRequest: {
    $type: "axelar.evm.v1beta1.DepositStateRequest";
    encode(message: DepositStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DepositStateRequest;
    fromJSON(object: any): DepositStateRequest;
    toJSON(message: DepositStateRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        params?: {
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        params?: ({
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
        } & {
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
        } & { [K in Exclude<keyof I["params"], "$type" | "txId" | "burnerAddress">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "chain" | "params">]: never; }>(base?: I | undefined): DepositStateRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        params?: {
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        params?: ({
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
        } & {
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["params"], "$type" | "txId" | "burnerAddress">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "chain" | "params">]: never; }>(object: I_1): DepositStateRequest;
};
export declare const DepositStateResponse: {
    $type: "axelar.evm.v1beta1.DepositStateResponse";
    encode(message: DepositStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DepositStateResponse;
    fromJSON(object: any): DepositStateResponse;
    toJSON(message: DepositStateResponse): unknown;
    create<I extends {
        status?: DepositStatus | undefined;
    } & {
        status?: DepositStatus | undefined;
    } & { [K in Exclude<keyof I, "$type" | "status">]: never; }>(base?: I | undefined): DepositStateResponse;
    fromPartial<I_1 extends {
        status?: DepositStatus | undefined;
    } & {
        status?: DepositStatus | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "status">]: never; }>(object: I_1): DepositStateResponse;
};
export declare const EventRequest: {
    $type: "axelar.evm.v1beta1.EventRequest";
    encode(message: EventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventRequest;
    fromJSON(object: any): EventRequest;
    toJSON(message: EventRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain" | "eventId">]: never; }>(base?: I | undefined): EventRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        eventId?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain" | "eventId">]: never; }>(object: I_1): EventRequest;
};
export declare const EventResponse: {
    $type: "axelar.evm.v1beta1.EventResponse";
    encode(message: EventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventResponse;
    fromJSON(object: any): EventResponse;
    toJSON(message: EventResponse): unknown;
    create<I extends {
        event?: {
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        event?: ({
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } & {
            index?: string | number | (Long.Long & {
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
            } & { [K in Exclude<keyof I["event"]["index"], "$type" | keyof Long.Long>]: never; }) | undefined;
            status?: import("./types").Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: ({
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } & {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } & { [K_1 in Exclude<keyof I["event"]["tokenSent"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }) | undefined;
            contractCall?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & { [K_2 in Exclude<keyof I["event"]["contractCall"], "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
            contractCallWithToken?: ({
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & { [K_3 in Exclude<keyof I["event"]["contractCallWithToken"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
            transfer?: ({
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & { [K_4 in Exclude<keyof I["event"]["transfer"], "$type" | "amount" | "to">]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_5 in Exclude<keyof I["event"]["tokenDeployed"], "symbol" | "$type" | "tokenAddress">]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_6 in Exclude<keyof I["event"]["multisigOwnershipTransferred"]["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_7 in Exclude<keyof I["event"]["multisigOwnershipTransferred"]["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_8 in Exclude<keyof I["event"]["multisigOwnershipTransferred"], "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newThreshold?: Buffer | undefined;
                newOperators?: (Buffer[] & Buffer[] & { [K_9 in Exclude<keyof I["event"]["multisigOperatorshipTransferred"]["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_10 in Exclude<keyof I["event"]["multisigOperatorshipTransferred"]["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["event"]["multisigOperatorshipTransferred"], "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["event"], "$type" | "index" | "status" | "chain" | "txId" | "tokenSent" | "contractCall" | "contractCallWithToken" | "transfer" | "tokenDeployed" | "multisigOwnershipTransferred" | "multisigOperatorshipTransferred">]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I, "$type" | "event">]: never; }>(base?: I | undefined): EventResponse;
    fromPartial<I_1 extends {
        event?: {
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        event?: ({
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } & {
            index?: string | number | (Long.Long & {
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
            } & { [K_14 in Exclude<keyof I_1["event"]["index"], "$type" | keyof Long.Long>]: never; }) | undefined;
            status?: import("./types").Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: ({
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } & {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } & { [K_15 in Exclude<keyof I_1["event"]["tokenSent"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }) | undefined;
            contractCall?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & { [K_16 in Exclude<keyof I_1["event"]["contractCall"], "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
            contractCallWithToken?: ({
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & { [K_17 in Exclude<keyof I_1["event"]["contractCallWithToken"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
            transfer?: ({
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & { [K_18 in Exclude<keyof I_1["event"]["transfer"], "$type" | "amount" | "to">]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_19 in Exclude<keyof I_1["event"]["tokenDeployed"], "symbol" | "$type" | "tokenAddress">]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_20 in Exclude<keyof I_1["event"]["multisigOwnershipTransferred"]["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_21 in Exclude<keyof I_1["event"]["multisigOwnershipTransferred"]["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_22 in Exclude<keyof I_1["event"]["multisigOwnershipTransferred"], "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newThreshold?: Buffer | undefined;
                newOperators?: (Buffer[] & Buffer[] & { [K_23 in Exclude<keyof I_1["event"]["multisigOperatorshipTransferred"]["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_24 in Exclude<keyof I_1["event"]["multisigOperatorshipTransferred"]["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I_1["event"]["multisigOperatorshipTransferred"], "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }) | undefined;
        } & { [K_26 in Exclude<keyof I_1["event"], "$type" | "index" | "status" | "chain" | "txId" | "tokenSent" | "contractCall" | "contractCallWithToken" | "transfer" | "tokenDeployed" | "multisigOwnershipTransferred" | "multisigOperatorshipTransferred">]: never; }) | undefined;
    } & { [K_27 in Exclude<keyof I_1, "$type" | "event">]: never; }>(object: I_1): EventResponse;
};
export declare const QueryBurnerAddressResponse: {
    $type: "axelar.evm.v1beta1.QueryBurnerAddressResponse";
    encode(message: QueryBurnerAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBurnerAddressResponse;
    fromJSON(object: any): QueryBurnerAddressResponse;
    toJSON(message: QueryBurnerAddressResponse): unknown;
    create<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address">]: never; }>(base?: I | undefined): QueryBurnerAddressResponse;
    fromPartial<I_1 extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address">]: never; }>(object: I_1): QueryBurnerAddressResponse;
};
export declare const ChainsRequest: {
    $type: "axelar.evm.v1beta1.ChainsRequest";
    encode(message: ChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsRequest;
    fromJSON(object: any): ChainsRequest;
    toJSON(message: ChainsRequest): unknown;
    create<I extends {
        status?: ChainStatus | undefined;
    } & {
        status?: ChainStatus | undefined;
    } & { [K in Exclude<keyof I, "$type" | "status">]: never; }>(base?: I | undefined): ChainsRequest;
    fromPartial<I_1 extends {
        status?: ChainStatus | undefined;
    } & {
        status?: ChainStatus | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "status">]: never; }>(object: I_1): ChainsRequest;
};
export declare const ChainsResponse: {
    $type: "axelar.evm.v1beta1.ChainsResponse";
    encode(message: ChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsResponse;
    fromJSON(object: any): ChainsResponse;
    toJSON(message: ChainsResponse): unknown;
    create<I extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & { [K in Exclude<keyof I["chains"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "chains">]: never; }>(base?: I | undefined): ChainsResponse;
    fromPartial<I_1 extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["chains"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "chains">]: never; }>(object: I_1): ChainsResponse;
};
export declare const CommandRequest: {
    $type: "axelar.evm.v1beta1.CommandRequest";
    encode(message: CommandRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandRequest;
    fromJSON(object: any): CommandRequest;
    toJSON(message: CommandRequest): unknown;
    create<I extends {
        id?: string | undefined;
        chain?: string | undefined;
    } & {
        id?: string | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id" | "chain">]: never; }>(base?: I | undefined): CommandRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
        chain?: string | undefined;
    } & {
        id?: string | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "id" | "chain">]: never; }>(object: I_1): CommandRequest;
};
export declare const CommandResponse: {
    $type: "axelar.evm.v1beta1.CommandResponse";
    encode(message: CommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandResponse;
    fromJSON(object: any): CommandResponse;
    toJSON(message: CommandResponse): unknown;
    create<I extends {
        type?: string | undefined;
        id?: string | undefined;
        params?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        type?: string | undefined;
        id?: string | undefined;
        params?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & { [K in Exclude<keyof I["params"], string | number>]: never; }) | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "type" | "id" | "params" | "keyId" | "maxGasCost">]: never; }>(base?: I | undefined): CommandResponse;
    fromPartial<I_1 extends {
        type?: string | undefined;
        id?: string | undefined;
        params?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        type?: string | undefined;
        id?: string | undefined;
        params?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["params"], string | number>]: never; }) | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "type" | "id" | "params" | "keyId" | "maxGasCost">]: never; }>(object: I_1): CommandResponse;
};
export declare const CommandResponse_ParamsEntry: {
    $type: "axelar.evm.v1beta1.CommandResponse.ParamsEntry";
    encode(message: CommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandResponse_ParamsEntry;
    fromJSON(object: any): CommandResponse_ParamsEntry;
    toJSON(message: CommandResponse_ParamsEntry): unknown;
    create<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "value" | "key">]: never; }>(base?: I | undefined): CommandResponse_ParamsEntry;
    fromPartial<I_1 extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "value" | "key">]: never; }>(object: I_1): CommandResponse_ParamsEntry;
};
export declare const PendingCommandsRequest: {
    $type: "axelar.evm.v1beta1.PendingCommandsRequest";
    encode(message: PendingCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingCommandsRequest;
    fromJSON(object: any): PendingCommandsRequest;
    toJSON(message: PendingCommandsRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain">]: never; }>(base?: I | undefined): PendingCommandsRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain">]: never; }>(object: I_1): PendingCommandsRequest;
};
export declare const PendingCommandsResponse: {
    $type: "axelar.evm.v1beta1.PendingCommandsResponse";
    encode(message: PendingCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingCommandsResponse;
    fromJSON(object: any): PendingCommandsResponse;
    toJSON(message: PendingCommandsResponse): unknown;
    create<I extends {
        commands?: {
            type?: string | undefined;
            id?: string | undefined;
            params?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] | undefined;
    } & {
        commands?: ({
            type?: string | undefined;
            id?: string | undefined;
            params?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] & ({
            type?: string | undefined;
            id?: string | undefined;
            params?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            params?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & { [K in Exclude<keyof I["commands"][number]["params"], string | number>]: never; }) | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & { [K_1 in Exclude<keyof I["commands"][number], "$type" | "type" | "id" | "params" | "keyId" | "maxGasCost">]: never; })[] & { [K_2 in Exclude<keyof I["commands"], "$type" | keyof {
            type?: string | undefined;
            id?: string | undefined;
            params?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "commands">]: never; }>(base?: I | undefined): PendingCommandsResponse;
    fromPartial<I_1 extends {
        commands?: {
            type?: string | undefined;
            id?: string | undefined;
            params?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] | undefined;
    } & {
        commands?: ({
            type?: string | undefined;
            id?: string | undefined;
            params?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] & ({
            type?: string | undefined;
            id?: string | undefined;
            params?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            params?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & { [K_4 in Exclude<keyof I_1["commands"][number]["params"], string | number>]: never; }) | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & { [K_5 in Exclude<keyof I_1["commands"][number], "$type" | "type" | "id" | "params" | "keyId" | "maxGasCost">]: never; })[] & { [K_6 in Exclude<keyof I_1["commands"], "$type" | keyof {
            type?: string | undefined;
            id?: string | undefined;
            params?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "commands">]: never; }>(object: I_1): PendingCommandsResponse;
};
export declare const QueryCommandResponse: {
    $type: "axelar.evm.v1beta1.QueryCommandResponse";
    encode(message: QueryCommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCommandResponse;
    fromJSON(object: any): QueryCommandResponse;
    toJSON(message: QueryCommandResponse): unknown;
    create<I extends {
        type?: string | undefined;
        id?: string | undefined;
        params?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        type?: string | undefined;
        id?: string | undefined;
        params?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & { [K in Exclude<keyof I["params"], string | number>]: never; }) | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "type" | "id" | "params" | "keyId" | "maxGasCost">]: never; }>(base?: I | undefined): QueryCommandResponse;
    fromPartial<I_1 extends {
        type?: string | undefined;
        id?: string | undefined;
        params?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        type?: string | undefined;
        id?: string | undefined;
        params?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["params"], string | number>]: never; }) | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "type" | "id" | "params" | "keyId" | "maxGasCost">]: never; }>(object: I_1): QueryCommandResponse;
};
export declare const QueryCommandResponse_ParamsEntry: {
    $type: "axelar.evm.v1beta1.QueryCommandResponse.ParamsEntry";
    encode(message: QueryCommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCommandResponse_ParamsEntry;
    fromJSON(object: any): QueryCommandResponse_ParamsEntry;
    toJSON(message: QueryCommandResponse_ParamsEntry): unknown;
    create<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "value" | "key">]: never; }>(base?: I | undefined): QueryCommandResponse_ParamsEntry;
    fromPartial<I_1 extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "value" | "key">]: never; }>(object: I_1): QueryCommandResponse_ParamsEntry;
};
export declare const BurnerInfoRequest: {
    $type: "axelar.evm.v1beta1.BurnerInfoRequest";
    encode(message: BurnerInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnerInfoRequest;
    fromJSON(object: any): BurnerInfoRequest;
    toJSON(message: BurnerInfoRequest): unknown;
    create<I extends {
        address?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address">]: never; }>(base?: I | undefined): BurnerInfoRequest;
    fromPartial<I_1 extends {
        address?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address">]: never; }>(object: I_1): BurnerInfoRequest;
};
export declare const BurnerInfoResponse: {
    $type: "axelar.evm.v1beta1.BurnerInfoResponse";
    encode(message: BurnerInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnerInfoResponse;
    fromJSON(object: any): BurnerInfoResponse;
    toJSON(message: BurnerInfoResponse): unknown;
    create<I extends {
        chain?: string | undefined;
        burnerInfo?: {
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        burnerInfo?: ({
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        } & { [K in Exclude<keyof I["burnerInfo"], "symbol" | "$type" | "asset" | "destinationChain" | "tokenAddress" | "burnerAddress" | "salt">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "chain" | "burnerInfo">]: never; }>(base?: I | undefined): BurnerInfoResponse;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        burnerInfo?: {
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        burnerInfo?: ({
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["burnerInfo"], "symbol" | "$type" | "asset" | "destinationChain" | "tokenAddress" | "burnerAddress" | "salt">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "chain" | "burnerInfo">]: never; }>(object: I_1): BurnerInfoResponse;
};
export declare const ConfirmationHeightRequest: {
    $type: "axelar.evm.v1beta1.ConfirmationHeightRequest";
    encode(message: ConfirmationHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmationHeightRequest;
    fromJSON(object: any): ConfirmationHeightRequest;
    toJSON(message: ConfirmationHeightRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain">]: never; }>(base?: I | undefined): ConfirmationHeightRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain">]: never; }>(object: I_1): ConfirmationHeightRequest;
};
export declare const ConfirmationHeightResponse: {
    $type: "axelar.evm.v1beta1.ConfirmationHeightResponse";
    encode(message: ConfirmationHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmationHeightResponse;
    fromJSON(object: any): ConfirmationHeightResponse;
    toJSON(message: ConfirmationHeightResponse): unknown;
    create<I extends {
        height?: string | number | Long.Long | undefined;
    } & {
        height?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["height"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "height">]: never; }>(base?: I | undefined): ConfirmationHeightResponse;
    fromPartial<I_1 extends {
        height?: string | number | Long.Long | undefined;
    } & {
        height?: string | number | (Long.Long & {
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
        } & { [K_2 in Exclude<keyof I_1["height"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "height">]: never; }>(object: I_1): ConfirmationHeightResponse;
};
export declare const GatewayAddressRequest: {
    $type: "axelar.evm.v1beta1.GatewayAddressRequest";
    encode(message: GatewayAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GatewayAddressRequest;
    fromJSON(object: any): GatewayAddressRequest;
    toJSON(message: GatewayAddressRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain">]: never; }>(base?: I | undefined): GatewayAddressRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain">]: never; }>(object: I_1): GatewayAddressRequest;
};
export declare const GatewayAddressResponse: {
    $type: "axelar.evm.v1beta1.GatewayAddressResponse";
    encode(message: GatewayAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GatewayAddressResponse;
    fromJSON(object: any): GatewayAddressResponse;
    toJSON(message: GatewayAddressResponse): unknown;
    create<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address">]: never; }>(base?: I | undefined): GatewayAddressResponse;
    fromPartial<I_1 extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address">]: never; }>(object: I_1): GatewayAddressResponse;
};
export declare const BytecodeRequest: {
    $type: "axelar.evm.v1beta1.BytecodeRequest";
    encode(message: BytecodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BytecodeRequest;
    fromJSON(object: any): BytecodeRequest;
    toJSON(message: BytecodeRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        contract?: string | undefined;
    } & {
        chain?: string | undefined;
        contract?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain" | "contract">]: never; }>(base?: I | undefined): BytecodeRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        contract?: string | undefined;
    } & {
        chain?: string | undefined;
        contract?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain" | "contract">]: never; }>(object: I_1): BytecodeRequest;
};
export declare const BytecodeResponse: {
    $type: "axelar.evm.v1beta1.BytecodeResponse";
    encode(message: BytecodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BytecodeResponse;
    fromJSON(object: any): BytecodeResponse;
    toJSON(message: BytecodeResponse): unknown;
    create<I extends {
        bytecode?: string | undefined;
    } & {
        bytecode?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "bytecode">]: never; }>(base?: I | undefined): BytecodeResponse;
    fromPartial<I_1 extends {
        bytecode?: string | undefined;
    } & {
        bytecode?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "bytecode">]: never; }>(object: I_1): BytecodeResponse;
};
export declare const ERC20TokensRequest: {
    $type: "axelar.evm.v1beta1.ERC20TokensRequest";
    encode(message: ERC20TokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokensRequest;
    fromJSON(object: any): ERC20TokensRequest;
    toJSON(message: ERC20TokensRequest): unknown;
    create<I extends {
        type?: TokenType | undefined;
        chain?: string | undefined;
    } & {
        type?: TokenType | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "type" | "chain">]: never; }>(base?: I | undefined): ERC20TokensRequest;
    fromPartial<I_1 extends {
        type?: TokenType | undefined;
        chain?: string | undefined;
    } & {
        type?: TokenType | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "type" | "chain">]: never; }>(object: I_1): ERC20TokensRequest;
};
export declare const ERC20TokensResponse: {
    $type: "axelar.evm.v1beta1.ERC20TokensResponse";
    encode(message: ERC20TokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokensResponse;
    fromJSON(object: any): ERC20TokensResponse;
    toJSON(message: ERC20TokensResponse): unknown;
    create<I extends {
        tokens?: {
            symbol?: string | undefined;
            asset?: string | undefined;
        }[] | undefined;
    } & {
        tokens?: ({
            symbol?: string | undefined;
            asset?: string | undefined;
        }[] & ({
            symbol?: string | undefined;
            asset?: string | undefined;
        } & {
            symbol?: string | undefined;
            asset?: string | undefined;
        } & { [K in Exclude<keyof I["tokens"][number], "symbol" | "$type" | "asset">]: never; })[] & { [K_1 in Exclude<keyof I["tokens"], "$type" | keyof {
            symbol?: string | undefined;
            asset?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "tokens">]: never; }>(base?: I | undefined): ERC20TokensResponse;
    fromPartial<I_1 extends {
        tokens?: {
            symbol?: string | undefined;
            asset?: string | undefined;
        }[] | undefined;
    } & {
        tokens?: ({
            symbol?: string | undefined;
            asset?: string | undefined;
        }[] & ({
            symbol?: string | undefined;
            asset?: string | undefined;
        } & {
            symbol?: string | undefined;
            asset?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["tokens"][number], "symbol" | "$type" | "asset">]: never; })[] & { [K_4 in Exclude<keyof I_1["tokens"], "$type" | keyof {
            symbol?: string | undefined;
            asset?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "tokens">]: never; }>(object: I_1): ERC20TokensResponse;
};
export declare const ERC20TokensResponse_Token: {
    $type: "axelar.evm.v1beta1.ERC20TokensResponse.Token";
    encode(message: ERC20TokensResponse_Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokensResponse_Token;
    fromJSON(object: any): ERC20TokensResponse_Token;
    toJSON(message: ERC20TokensResponse_Token): unknown;
    create<I extends {
        symbol?: string | undefined;
        asset?: string | undefined;
    } & {
        symbol?: string | undefined;
        asset?: string | undefined;
    } & { [K in Exclude<keyof I, "symbol" | "$type" | "asset">]: never; }>(base?: I | undefined): ERC20TokensResponse_Token;
    fromPartial<I_1 extends {
        symbol?: string | undefined;
        asset?: string | undefined;
    } & {
        symbol?: string | undefined;
        asset?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "symbol" | "$type" | "asset">]: never; }>(object: I_1): ERC20TokensResponse_Token;
};
export declare const TokenInfoRequest: {
    $type: "axelar.evm.v1beta1.TokenInfoRequest";
    encode(message: TokenInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenInfoRequest;
    fromJSON(object: any): TokenInfoRequest;
    toJSON(message: TokenInfoRequest): unknown;
    create<I extends {
        symbol?: string | undefined;
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        symbol?: string | undefined;
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "symbol" | "$type" | "address" | "asset" | "chain">]: never; }>(base?: I | undefined): TokenInfoRequest;
    fromPartial<I_1 extends {
        symbol?: string | undefined;
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        symbol?: string | undefined;
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "symbol" | "$type" | "address" | "asset" | "chain">]: never; }>(object: I_1): TokenInfoRequest;
};
export declare const TokenInfoResponse: {
    $type: "axelar.evm.v1beta1.TokenInfoResponse";
    encode(message: TokenInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenInfoResponse;
    fromJSON(object: any): TokenInfoResponse;
    toJSON(message: TokenInfoResponse): unknown;
    create<I extends {
        address?: string | undefined;
        asset?: string | undefined;
        details?: {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        isExternal?: boolean | undefined;
        confirmed?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & {
        address?: string | undefined;
        asset?: string | undefined;
        details?: ({
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K in Exclude<keyof I["details"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
        isExternal?: boolean | undefined;
        confirmed?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "address" | "asset" | "details" | "isExternal" | "confirmed" | "burnerCodeHash">]: never; }>(base?: I | undefined): TokenInfoResponse;
    fromPartial<I_1 extends {
        address?: string | undefined;
        asset?: string | undefined;
        details?: {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        isExternal?: boolean | undefined;
        confirmed?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & {
        address?: string | undefined;
        asset?: string | undefined;
        details?: ({
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["details"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
        isExternal?: boolean | undefined;
        confirmed?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "address" | "asset" | "details" | "isExternal" | "confirmed" | "burnerCodeHash">]: never; }>(object: I_1): TokenInfoResponse;
};
export declare const Proof: {
    $type: "axelar.evm.v1beta1.Proof";
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    create<I extends {
        signatures?: string[] | undefined;
        addresses?: string[] | undefined;
        weights?: string[] | undefined;
        threshold?: string | undefined;
    } & {
        signatures?: (string[] & string[] & { [K in Exclude<keyof I["signatures"], "$type" | keyof string[]>]: never; }) | undefined;
        addresses?: (string[] & string[] & { [K_1 in Exclude<keyof I["addresses"], "$type" | keyof string[]>]: never; }) | undefined;
        weights?: (string[] & string[] & { [K_2 in Exclude<keyof I["weights"], "$type" | keyof string[]>]: never; }) | undefined;
        threshold?: string | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "signatures" | "addresses" | "weights" | "threshold">]: never; }>(base?: I | undefined): Proof;
    fromPartial<I_1 extends {
        signatures?: string[] | undefined;
        addresses?: string[] | undefined;
        weights?: string[] | undefined;
        threshold?: string | undefined;
    } & {
        signatures?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["signatures"], "$type" | keyof string[]>]: never; }) | undefined;
        addresses?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["addresses"], "$type" | keyof string[]>]: never; }) | undefined;
        weights?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["weights"], "$type" | keyof string[]>]: never; }) | undefined;
        threshold?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "signatures" | "addresses" | "weights" | "threshold">]: never; }>(object: I_1): Proof;
};
export declare const ParamsRequest: {
    $type: "axelar.evm.v1beta1.ParamsRequest";
    encode(message: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(object: any): ParamsRequest;
    toJSON(message: ParamsRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain">]: never; }>(base?: I | undefined): ParamsRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain">]: never; }>(object: I_1): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.evm.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
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
    } & { [K_12 in Exclude<keyof I, "$type" | "params">]: never; }>(base?: I | undefined): ParamsResponse;
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
    } & { [K_25 in Exclude<keyof I_1, "$type" | "params">]: never; }>(object: I_1): ParamsResponse;
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
