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
    address: string;
    asset: string;
    chain: string;
}
export interface BatchedCommandsRequest {
    chain: string;
    /**
     * id defines an optional id for the commandsbatch. If not specified the
     * latest will be returned
     */
    id: string;
}
export interface BatchedCommandsResponse {
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
    chain: string;
    keyId: string;
}
export interface KeyAddressResponse {
    keyId: string;
    addresses: KeyAddressResponse_WeightedAddress[];
    threshold: string;
}
export interface KeyAddressResponse_WeightedAddress {
    address: string;
    weight: string;
}
/** @deprecated */
export interface QueryTokenAddressResponse {
    address: string;
    confirmed: boolean;
}
/** @deprecated */
export interface QueryDepositStateParams {
    txId: Buffer;
    burnerAddress: Buffer;
}
/** @deprecated */
export interface DepositStateRequest {
    chain: string;
    params?: QueryDepositStateParams | undefined;
}
/** @deprecated */
export interface DepositStateResponse {
    status: DepositStatus;
}
export interface EventRequest {
    chain: string;
    eventId: string;
}
export interface EventResponse {
    event?: Event | undefined;
}
export interface QueryBurnerAddressResponse {
    address: string;
}
export interface ChainsRequest {
    status: ChainStatus;
}
export interface ChainsResponse {
    chains: string[];
}
export interface CommandRequest {
    chain: string;
    id: string;
}
export interface CommandResponse {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface CommandResponse_ParamsEntry {
    key: string;
    value: string;
}
export interface PendingCommandsRequest {
    chain: string;
}
export interface PendingCommandsResponse {
    commands: QueryCommandResponse[];
}
export interface QueryCommandResponse {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface QueryCommandResponse_ParamsEntry {
    key: string;
    value: string;
}
export interface BurnerInfoRequest {
    address: Buffer;
}
export interface BurnerInfoResponse {
    chain: string;
    burnerInfo?: BurnerInfo | undefined;
}
export interface ConfirmationHeightRequest {
    chain: string;
}
export interface ConfirmationHeightResponse {
    height: Long;
}
export interface GatewayAddressRequest {
    chain: string;
}
export interface GatewayAddressResponse {
    address: string;
}
export interface BytecodeRequest {
    chain: string;
    contract: string;
}
export interface BytecodeResponse {
    bytecode: string;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequest {
    chain: string;
    type: TokenType;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponse {
    tokens: ERC20TokensResponse_Token[];
}
export interface ERC20TokensResponse_Token {
    asset: string;
    symbol: string;
}
export interface TokenInfoRequest {
    chain: string;
    asset?: string | undefined;
    symbol?: string | undefined;
    address?: string | undefined;
}
export interface TokenInfoResponse {
    asset: string;
    details?: TokenDetails | undefined;
    address: string;
    confirmed: boolean;
    isExternal: boolean;
    burnerCodeHash: string;
}
export interface Proof {
    addresses: string[];
    weights: string[];
    threshold: string;
    signatures: string[];
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    chain: string;
}
export interface ParamsResponse {
    params?: Params | undefined;
}
export declare const DepositQueryParams: {
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
    } & { [K in Exclude<keyof I, keyof DepositQueryParams>]: never; }>(base?: I | undefined): DepositQueryParams;
    fromPartial<I_1 extends {
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        address?: string | undefined;
        asset?: string | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DepositQueryParams>]: never; }>(object: I_1): DepositQueryParams;
};
export declare const BatchedCommandsRequest: {
    encode(message: BatchedCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchedCommandsRequest;
    fromJSON(object: any): BatchedCommandsRequest;
    toJSON(message: BatchedCommandsRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        id?: string | undefined;
    } & {
        chain?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof BatchedCommandsRequest>]: never; }>(base?: I | undefined): BatchedCommandsRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        id?: string | undefined;
    } & {
        chain?: string | undefined;
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BatchedCommandsRequest>]: never; }>(object: I_1): BatchedCommandsRequest;
};
export declare const BatchedCommandsResponse: {
    encode(message: BatchedCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchedCommandsResponse;
    fromJSON(object: any): BatchedCommandsResponse;
    toJSON(message: BatchedCommandsResponse): unknown;
    create<I extends {
        id?: string | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        executeData?: string | undefined;
        prevBatchedCommandsId?: string | undefined;
        commandIds?: string[] | undefined;
        proof?: {
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
            signatures?: string[] | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        executeData?: string | undefined;
        prevBatchedCommandsId?: string | undefined;
        commandIds?: (string[] & string[] & { [K in Exclude<keyof I["commandIds"], keyof string[]>]: never; }) | undefined;
        proof?: ({
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
            signatures?: string[] | undefined;
        } & {
            addresses?: (string[] & string[] & { [K_1 in Exclude<keyof I["proof"]["addresses"], keyof string[]>]: never; }) | undefined;
            weights?: (string[] & string[] & { [K_2 in Exclude<keyof I["proof"]["weights"], keyof string[]>]: never; }) | undefined;
            threshold?: string | undefined;
            signatures?: (string[] & string[] & { [K_3 in Exclude<keyof I["proof"]["signatures"], keyof string[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["proof"], keyof Proof>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof BatchedCommandsResponse>]: never; }>(base?: I | undefined): BatchedCommandsResponse;
    fromPartial<I_1 extends {
        id?: string | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        executeData?: string | undefined;
        prevBatchedCommandsId?: string | undefined;
        commandIds?: string[] | undefined;
        proof?: {
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
            signatures?: string[] | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        data?: string | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        executeData?: string | undefined;
        prevBatchedCommandsId?: string | undefined;
        commandIds?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["commandIds"], keyof string[]>]: never; }) | undefined;
        proof?: ({
            addresses?: string[] | undefined;
            weights?: string[] | undefined;
            threshold?: string | undefined;
            signatures?: string[] | undefined;
        } & {
            addresses?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["proof"]["addresses"], keyof string[]>]: never; }) | undefined;
            weights?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["proof"]["weights"], keyof string[]>]: never; }) | undefined;
            threshold?: string | undefined;
            signatures?: (string[] & string[] & { [K_9 in Exclude<keyof I_1["proof"]["signatures"], keyof string[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["proof"], keyof Proof>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof BatchedCommandsResponse>]: never; }>(object: I_1): BatchedCommandsResponse;
};
export declare const KeyAddressRequest: {
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
    } & { [K in Exclude<keyof I, keyof KeyAddressRequest>]: never; }>(base?: I | undefined): KeyAddressRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeyAddressRequest>]: never; }>(object: I_1): KeyAddressRequest;
};
export declare const KeyAddressResponse: {
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
        } & { [K in Exclude<keyof I["addresses"][number], keyof KeyAddressResponse_WeightedAddress>]: never; })[] & { [K_1 in Exclude<keyof I["addresses"], keyof {
            address?: string | undefined;
            weight?: string | undefined;
        }[]>]: never; }) | undefined;
        threshold?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof KeyAddressResponse>]: never; }>(base?: I | undefined): KeyAddressResponse;
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
        } & { [K_3 in Exclude<keyof I_1["addresses"][number], keyof KeyAddressResponse_WeightedAddress>]: never; })[] & { [K_4 in Exclude<keyof I_1["addresses"], keyof {
            address?: string | undefined;
            weight?: string | undefined;
        }[]>]: never; }) | undefined;
        threshold?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof KeyAddressResponse>]: never; }>(object: I_1): KeyAddressResponse;
};
export declare const KeyAddressResponse_WeightedAddress: {
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
    } & { [K in Exclude<keyof I, keyof KeyAddressResponse_WeightedAddress>]: never; }>(base?: I | undefined): KeyAddressResponse_WeightedAddress;
    fromPartial<I_1 extends {
        address?: string | undefined;
        weight?: string | undefined;
    } & {
        address?: string | undefined;
        weight?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeyAddressResponse_WeightedAddress>]: never; }>(object: I_1): KeyAddressResponse_WeightedAddress;
};
export declare const QueryTokenAddressResponse: {
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
    } & { [K in Exclude<keyof I, keyof QueryTokenAddressResponse>]: never; }>(base?: I | undefined): QueryTokenAddressResponse;
    fromPartial<I_1 extends {
        address?: string | undefined;
        confirmed?: boolean | undefined;
    } & {
        address?: string | undefined;
        confirmed?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryTokenAddressResponse>]: never; }>(object: I_1): QueryTokenAddressResponse;
};
export declare const QueryDepositStateParams: {
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
    } & { [K in Exclude<keyof I, keyof QueryDepositStateParams>]: never; }>(base?: I | undefined): QueryDepositStateParams;
    fromPartial<I_1 extends {
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & {
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryDepositStateParams>]: never; }>(object: I_1): QueryDepositStateParams;
};
export declare const DepositStateRequest: {
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
        } & { [K in Exclude<keyof I["params"], keyof QueryDepositStateParams>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof DepositStateRequest>]: never; }>(base?: I | undefined): DepositStateRequest;
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
        } & { [K_2 in Exclude<keyof I_1["params"], keyof QueryDepositStateParams>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof DepositStateRequest>]: never; }>(object: I_1): DepositStateRequest;
};
export declare const DepositStateResponse: {
    encode(message: DepositStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DepositStateResponse;
    fromJSON(object: any): DepositStateResponse;
    toJSON(message: DepositStateResponse): unknown;
    create<I extends {
        status?: DepositStatus | undefined;
    } & {
        status?: DepositStatus | undefined;
    } & { [K in Exclude<keyof I, "status">]: never; }>(base?: I | undefined): DepositStateResponse;
    fromPartial<I_1 extends {
        status?: DepositStatus | undefined;
    } & {
        status?: DepositStatus | undefined;
    } & { [K_1 in Exclude<keyof I_1, "status">]: never; }>(object: I_1): DepositStateResponse;
};
export declare const EventRequest: {
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
    } & { [K in Exclude<keyof I, keyof EventRequest>]: never; }>(base?: I | undefined): EventRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        eventId?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventRequest>]: never; }>(object: I_1): EventRequest;
};
export declare const EventResponse: {
    encode(message: EventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventResponse;
    fromJSON(object: any): EventResponse;
    toJSON(message: EventResponse): unknown;
    create<I extends {
        event?: {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
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
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        event?: ({
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
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
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } & {
            chain?: string | undefined;
            txId?: Buffer | undefined;
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
            } & { [K in Exclude<keyof I["event"]["index"], keyof Long.Long>]: never; }) | undefined;
            status?: import("./types").Event_Status | undefined;
            tokenSent?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & { [K_1 in Exclude<keyof I["event"]["tokenSent"], keyof import("./types").EventTokenSent>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["event"]["contractCall"], keyof import("./types").EventContractCall>]: never; }) | undefined;
            contractCallWithToken?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & { [K_3 in Exclude<keyof I["event"]["contractCallWithToken"], keyof import("./types").EventContractCallWithToken>]: never; }) | undefined;
            transfer?: ({
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & { [K_4 in Exclude<keyof I["event"]["transfer"], keyof import("./types").EventTransfer>]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_5 in Exclude<keyof I["event"]["tokenDeployed"], keyof import("./types").EventTokenDeployed>]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_6 in Exclude<keyof I["event"]["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_7 in Exclude<keyof I["event"]["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_8 in Exclude<keyof I["event"]["multisigOwnershipTransferred"], keyof import("./types").EventMultisigOwnershipTransferred>]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newOperators?: (Buffer[] & Buffer[] & { [K_9 in Exclude<keyof I["event"]["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_10 in Exclude<keyof I["event"]["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["event"]["multisigOperatorshipTransferred"], keyof import("./types").EventMultisigOperatorshipTransferred>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["event"], keyof Event>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I, "event">]: never; }>(base?: I | undefined): EventResponse;
    fromPartial<I_1 extends {
        event?: {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
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
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        event?: ({
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
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
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } & {
            chain?: string | undefined;
            txId?: Buffer | undefined;
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
            } & { [K_14 in Exclude<keyof I_1["event"]["index"], keyof Long.Long>]: never; }) | undefined;
            status?: import("./types").Event_Status | undefined;
            tokenSent?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & { [K_15 in Exclude<keyof I_1["event"]["tokenSent"], keyof import("./types").EventTokenSent>]: never; }) | undefined;
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
            } & { [K_16 in Exclude<keyof I_1["event"]["contractCall"], keyof import("./types").EventContractCall>]: never; }) | undefined;
            contractCallWithToken?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & { [K_17 in Exclude<keyof I_1["event"]["contractCallWithToken"], keyof import("./types").EventContractCallWithToken>]: never; }) | undefined;
            transfer?: ({
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & { [K_18 in Exclude<keyof I_1["event"]["transfer"], keyof import("./types").EventTransfer>]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_19 in Exclude<keyof I_1["event"]["tokenDeployed"], keyof import("./types").EventTokenDeployed>]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_20 in Exclude<keyof I_1["event"]["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_21 in Exclude<keyof I_1["event"]["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_22 in Exclude<keyof I_1["event"]["multisigOwnershipTransferred"], keyof import("./types").EventMultisigOwnershipTransferred>]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newOperators?: (Buffer[] & Buffer[] & { [K_23 in Exclude<keyof I_1["event"]["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_24 in Exclude<keyof I_1["event"]["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I_1["event"]["multisigOperatorshipTransferred"], keyof import("./types").EventMultisigOperatorshipTransferred>]: never; }) | undefined;
        } & { [K_26 in Exclude<keyof I_1["event"], keyof Event>]: never; }) | undefined;
    } & { [K_27 in Exclude<keyof I_1, "event">]: never; }>(object: I_1): EventResponse;
};
export declare const QueryBurnerAddressResponse: {
    encode(message: QueryBurnerAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryBurnerAddressResponse;
    fromJSON(object: any): QueryBurnerAddressResponse;
    toJSON(message: QueryBurnerAddressResponse): unknown;
    create<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(base?: I | undefined): QueryBurnerAddressResponse;
    fromPartial<I_1 extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never; }>(object: I_1): QueryBurnerAddressResponse;
};
export declare const ChainsRequest: {
    encode(message: ChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsRequest;
    fromJSON(object: any): ChainsRequest;
    toJSON(message: ChainsRequest): unknown;
    create<I extends {
        status?: ChainStatus | undefined;
    } & {
        status?: ChainStatus | undefined;
    } & { [K in Exclude<keyof I, "status">]: never; }>(base?: I | undefined): ChainsRequest;
    fromPartial<I_1 extends {
        status?: ChainStatus | undefined;
    } & {
        status?: ChainStatus | undefined;
    } & { [K_1 in Exclude<keyof I_1, "status">]: never; }>(object: I_1): ChainsRequest;
};
export declare const ChainsResponse: {
    encode(message: ChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsResponse;
    fromJSON(object: any): ChainsResponse;
    toJSON(message: ChainsResponse): unknown;
    create<I extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & { [K in Exclude<keyof I["chains"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "chains">]: never; }>(base?: I | undefined): ChainsResponse;
    fromPartial<I_1 extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["chains"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "chains">]: never; }>(object: I_1): ChainsResponse;
};
export declare const CommandRequest: {
    encode(message: CommandRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandRequest;
    fromJSON(object: any): CommandRequest;
    toJSON(message: CommandRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        id?: string | undefined;
    } & {
        chain?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CommandRequest>]: never; }>(base?: I | undefined): CommandRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        id?: string | undefined;
    } & {
        chain?: string | undefined;
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CommandRequest>]: never; }>(object: I_1): CommandRequest;
};
export declare const CommandResponse: {
    encode(message: CommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandResponse;
    fromJSON(object: any): CommandResponse;
    toJSON(message: CommandResponse): unknown;
    create<I extends {
        id?: string | undefined;
        type?: string | undefined;
        params?: {
            [x: string]: string | undefined;
        } | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
        params?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K in Exclude<keyof I["params"], string | number>]: never; }) | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CommandResponse>]: never; }>(base?: I | undefined): CommandResponse;
    fromPartial<I_1 extends {
        id?: string | undefined;
        type?: string | undefined;
        params?: {
            [x: string]: string | undefined;
        } | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
        params?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["params"], string | number>]: never; }) | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CommandResponse>]: never; }>(object: I_1): CommandResponse;
};
export declare const CommandResponse_ParamsEntry: {
    encode(message: CommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandResponse_ParamsEntry;
    fromJSON(object: any): CommandResponse_ParamsEntry;
    toJSON(message: CommandResponse_ParamsEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CommandResponse_ParamsEntry>]: never; }>(base?: I | undefined): CommandResponse_ParamsEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CommandResponse_ParamsEntry>]: never; }>(object: I_1): CommandResponse_ParamsEntry;
};
export declare const PendingCommandsRequest: {
    encode(message: PendingCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingCommandsRequest;
    fromJSON(object: any): PendingCommandsRequest;
    toJSON(message: PendingCommandsRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "chain">]: never; }>(base?: I | undefined): PendingCommandsRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "chain">]: never; }>(object: I_1): PendingCommandsRequest;
};
export declare const PendingCommandsResponse: {
    encode(message: PendingCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingCommandsResponse;
    fromJSON(object: any): PendingCommandsResponse;
    toJSON(message: PendingCommandsResponse): unknown;
    create<I extends {
        commands?: {
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] | undefined;
    } & {
        commands?: ({
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            params?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K in Exclude<keyof I["commands"][number]["params"], string | number>]: never; }) | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & { [K_1 in Exclude<keyof I["commands"][number], keyof QueryCommandResponse>]: never; })[] & { [K_2 in Exclude<keyof I["commands"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "commands">]: never; }>(base?: I | undefined): PendingCommandsResponse;
    fromPartial<I_1 extends {
        commands?: {
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] | undefined;
    } & {
        commands?: ({
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            params?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K_4 in Exclude<keyof I_1["commands"][number]["params"], string | number>]: never; }) | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        } & { [K_5 in Exclude<keyof I_1["commands"][number], keyof QueryCommandResponse>]: never; })[] & { [K_6 in Exclude<keyof I_1["commands"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            params?: {
                [x: string]: string | undefined;
            } | undefined;
            keyId?: string | undefined;
            maxGasCost?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "commands">]: never; }>(object: I_1): PendingCommandsResponse;
};
export declare const QueryCommandResponse: {
    encode(message: QueryCommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCommandResponse;
    fromJSON(object: any): QueryCommandResponse;
    toJSON(message: QueryCommandResponse): unknown;
    create<I extends {
        id?: string | undefined;
        type?: string | undefined;
        params?: {
            [x: string]: string | undefined;
        } | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
        params?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K in Exclude<keyof I["params"], string | number>]: never; }) | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryCommandResponse>]: never; }>(base?: I | undefined): QueryCommandResponse;
    fromPartial<I_1 extends {
        id?: string | undefined;
        type?: string | undefined;
        params?: {
            [x: string]: string | undefined;
        } | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
        params?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["params"], string | number>]: never; }) | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof QueryCommandResponse>]: never; }>(object: I_1): QueryCommandResponse;
};
export declare const QueryCommandResponse_ParamsEntry: {
    encode(message: QueryCommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCommandResponse_ParamsEntry;
    fromJSON(object: any): QueryCommandResponse_ParamsEntry;
    toJSON(message: QueryCommandResponse_ParamsEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCommandResponse_ParamsEntry>]: never; }>(base?: I | undefined): QueryCommandResponse_ParamsEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryCommandResponse_ParamsEntry>]: never; }>(object: I_1): QueryCommandResponse_ParamsEntry;
};
export declare const BurnerInfoRequest: {
    encode(message: BurnerInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnerInfoRequest;
    fromJSON(object: any): BurnerInfoRequest;
    toJSON(message: BurnerInfoRequest): unknown;
    create<I extends {
        address?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(base?: I | undefined): BurnerInfoRequest;
    fromPartial<I_1 extends {
        address?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never; }>(object: I_1): BurnerInfoRequest;
};
export declare const BurnerInfoResponse: {
    encode(message: BurnerInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnerInfoResponse;
    fromJSON(object: any): BurnerInfoResponse;
    toJSON(message: BurnerInfoResponse): unknown;
    create<I extends {
        chain?: string | undefined;
        burnerInfo?: {
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        burnerInfo?: ({
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        } & {
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        } & { [K in Exclude<keyof I["burnerInfo"], keyof BurnerInfo>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof BurnerInfoResponse>]: never; }>(base?: I | undefined): BurnerInfoResponse;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        burnerInfo?: {
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        burnerInfo?: ({
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        } & {
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["burnerInfo"], keyof BurnerInfo>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof BurnerInfoResponse>]: never; }>(object: I_1): BurnerInfoResponse;
};
export declare const ConfirmationHeightRequest: {
    encode(message: ConfirmationHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmationHeightRequest;
    fromJSON(object: any): ConfirmationHeightRequest;
    toJSON(message: ConfirmationHeightRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "chain">]: never; }>(base?: I | undefined): ConfirmationHeightRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "chain">]: never; }>(object: I_1): ConfirmationHeightRequest;
};
export declare const ConfirmationHeightResponse: {
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
        } & { [K in Exclude<keyof I["height"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "height">]: never; }>(base?: I | undefined): ConfirmationHeightResponse;
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
        } & { [K_2 in Exclude<keyof I_1["height"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "height">]: never; }>(object: I_1): ConfirmationHeightResponse;
};
export declare const GatewayAddressRequest: {
    encode(message: GatewayAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GatewayAddressRequest;
    fromJSON(object: any): GatewayAddressRequest;
    toJSON(message: GatewayAddressRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "chain">]: never; }>(base?: I | undefined): GatewayAddressRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "chain">]: never; }>(object: I_1): GatewayAddressRequest;
};
export declare const GatewayAddressResponse: {
    encode(message: GatewayAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GatewayAddressResponse;
    fromJSON(object: any): GatewayAddressResponse;
    toJSON(message: GatewayAddressResponse): unknown;
    create<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(base?: I | undefined): GatewayAddressResponse;
    fromPartial<I_1 extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never; }>(object: I_1): GatewayAddressResponse;
};
export declare const BytecodeRequest: {
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
    } & { [K in Exclude<keyof I, keyof BytecodeRequest>]: never; }>(base?: I | undefined): BytecodeRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        contract?: string | undefined;
    } & {
        chain?: string | undefined;
        contract?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BytecodeRequest>]: never; }>(object: I_1): BytecodeRequest;
};
export declare const BytecodeResponse: {
    encode(message: BytecodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BytecodeResponse;
    fromJSON(object: any): BytecodeResponse;
    toJSON(message: BytecodeResponse): unknown;
    create<I extends {
        bytecode?: string | undefined;
    } & {
        bytecode?: string | undefined;
    } & { [K in Exclude<keyof I, "bytecode">]: never; }>(base?: I | undefined): BytecodeResponse;
    fromPartial<I_1 extends {
        bytecode?: string | undefined;
    } & {
        bytecode?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "bytecode">]: never; }>(object: I_1): BytecodeResponse;
};
export declare const ERC20TokensRequest: {
    encode(message: ERC20TokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokensRequest;
    fromJSON(object: any): ERC20TokensRequest;
    toJSON(message: ERC20TokensRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        type?: TokenType | undefined;
    } & {
        chain?: string | undefined;
        type?: TokenType | undefined;
    } & { [K in Exclude<keyof I, keyof ERC20TokensRequest>]: never; }>(base?: I | undefined): ERC20TokensRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        type?: TokenType | undefined;
    } & {
        chain?: string | undefined;
        type?: TokenType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ERC20TokensRequest>]: never; }>(object: I_1): ERC20TokensRequest;
};
export declare const ERC20TokensResponse: {
    encode(message: ERC20TokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokensResponse;
    fromJSON(object: any): ERC20TokensResponse;
    toJSON(message: ERC20TokensResponse): unknown;
    create<I extends {
        tokens?: {
            asset?: string | undefined;
            symbol?: string | undefined;
        }[] | undefined;
    } & {
        tokens?: ({
            asset?: string | undefined;
            symbol?: string | undefined;
        }[] & ({
            asset?: string | undefined;
            symbol?: string | undefined;
        } & {
            asset?: string | undefined;
            symbol?: string | undefined;
        } & { [K in Exclude<keyof I["tokens"][number], keyof ERC20TokensResponse_Token>]: never; })[] & { [K_1 in Exclude<keyof I["tokens"], keyof {
            asset?: string | undefined;
            symbol?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "tokens">]: never; }>(base?: I | undefined): ERC20TokensResponse;
    fromPartial<I_1 extends {
        tokens?: {
            asset?: string | undefined;
            symbol?: string | undefined;
        }[] | undefined;
    } & {
        tokens?: ({
            asset?: string | undefined;
            symbol?: string | undefined;
        }[] & ({
            asset?: string | undefined;
            symbol?: string | undefined;
        } & {
            asset?: string | undefined;
            symbol?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["tokens"][number], keyof ERC20TokensResponse_Token>]: never; })[] & { [K_4 in Exclude<keyof I_1["tokens"], keyof {
            asset?: string | undefined;
            symbol?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "tokens">]: never; }>(object: I_1): ERC20TokensResponse;
};
export declare const ERC20TokensResponse_Token: {
    encode(message: ERC20TokensResponse_Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokensResponse_Token;
    fromJSON(object: any): ERC20TokensResponse_Token;
    toJSON(message: ERC20TokensResponse_Token): unknown;
    create<I extends {
        asset?: string | undefined;
        symbol?: string | undefined;
    } & {
        asset?: string | undefined;
        symbol?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ERC20TokensResponse_Token>]: never; }>(base?: I | undefined): ERC20TokensResponse_Token;
    fromPartial<I_1 extends {
        asset?: string | undefined;
        symbol?: string | undefined;
    } & {
        asset?: string | undefined;
        symbol?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ERC20TokensResponse_Token>]: never; }>(object: I_1): ERC20TokensResponse_Token;
};
export declare const TokenInfoRequest: {
    encode(message: TokenInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenInfoRequest;
    fromJSON(object: any): TokenInfoRequest;
    toJSON(message: TokenInfoRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        asset?: string | undefined;
        symbol?: string | undefined;
        address?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: string | undefined;
        symbol?: string | undefined;
        address?: string | undefined;
    } & { [K in Exclude<keyof I, keyof TokenInfoRequest>]: never; }>(base?: I | undefined): TokenInfoRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        asset?: string | undefined;
        symbol?: string | undefined;
        address?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: string | undefined;
        symbol?: string | undefined;
        address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TokenInfoRequest>]: never; }>(object: I_1): TokenInfoRequest;
};
export declare const TokenInfoResponse: {
    encode(message: TokenInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenInfoResponse;
    fromJSON(object: any): TokenInfoResponse;
    toJSON(message: TokenInfoResponse): unknown;
    create<I extends {
        asset?: string | undefined;
        details?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        address?: string | undefined;
        confirmed?: boolean | undefined;
        isExternal?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & {
        asset?: string | undefined;
        details?: ({
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K in Exclude<keyof I["details"], keyof TokenDetails>]: never; }) | undefined;
        address?: string | undefined;
        confirmed?: boolean | undefined;
        isExternal?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof TokenInfoResponse>]: never; }>(base?: I | undefined): TokenInfoResponse;
    fromPartial<I_1 extends {
        asset?: string | undefined;
        details?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        address?: string | undefined;
        confirmed?: boolean | undefined;
        isExternal?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & {
        asset?: string | undefined;
        details?: ({
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["details"], keyof TokenDetails>]: never; }) | undefined;
        address?: string | undefined;
        confirmed?: boolean | undefined;
        isExternal?: boolean | undefined;
        burnerCodeHash?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof TokenInfoResponse>]: never; }>(object: I_1): TokenInfoResponse;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    create<I extends {
        addresses?: string[] | undefined;
        weights?: string[] | undefined;
        threshold?: string | undefined;
        signatures?: string[] | undefined;
    } & {
        addresses?: (string[] & string[] & { [K in Exclude<keyof I["addresses"], keyof string[]>]: never; }) | undefined;
        weights?: (string[] & string[] & { [K_1 in Exclude<keyof I["weights"], keyof string[]>]: never; }) | undefined;
        threshold?: string | undefined;
        signatures?: (string[] & string[] & { [K_2 in Exclude<keyof I["signatures"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Proof>]: never; }>(base?: I | undefined): Proof;
    fromPartial<I_1 extends {
        addresses?: string[] | undefined;
        weights?: string[] | undefined;
        threshold?: string | undefined;
        signatures?: string[] | undefined;
    } & {
        addresses?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["addresses"], keyof string[]>]: never; }) | undefined;
        weights?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["weights"], keyof string[]>]: never; }) | undefined;
        threshold?: string | undefined;
        signatures?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["signatures"], keyof string[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Proof>]: never; }>(object: I_1): Proof;
};
export declare const ParamsRequest: {
    encode(message: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(object: any): ParamsRequest;
    toJSON(message: ParamsRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "chain">]: never; }>(base?: I | undefined): ParamsRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "chain">]: never; }>(object: I_1): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends {
        params?: {
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        params?: ({
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } & {
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
            } & { [K in Exclude<keyof I["params"]["confirmationHeight"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["params"]["revoteLockingPeriod"], keyof Long.Long>]: never; }) | undefined;
            networks?: ({
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] & ({
                name?: string | undefined;
                id?: Buffer | undefined;
            } & {
                name?: string | undefined;
                id?: Buffer | undefined;
            } & { [K_2 in Exclude<keyof I["params"]["networks"][number], keyof import("./types").NetworkInfo>]: never; })[] & { [K_3 in Exclude<keyof I["params"]["networks"], keyof {
                name?: string | undefined;
                id?: Buffer | undefined;
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
                } & { [K_4 in Exclude<keyof I["params"]["votingThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_5 in Exclude<keyof I["params"]["votingThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["params"]["votingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
            } & { [K_7 in Exclude<keyof I["params"]["minVoterCount"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_8 in Exclude<keyof I["params"]["votingGracePeriod"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_9 in Exclude<keyof I["params"]["endBlockerLimit"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_10 in Exclude<keyof I["params"]["transferLimit"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, "params">]: never; }>(base?: I | undefined): ParamsResponse;
    fromPartial<I_1 extends {
        params?: {
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        params?: ({
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } & {
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
            } & { [K_13 in Exclude<keyof I_1["params"]["confirmationHeight"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_14 in Exclude<keyof I_1["params"]["revoteLockingPeriod"], keyof Long.Long>]: never; }) | undefined;
            networks?: ({
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] & ({
                name?: string | undefined;
                id?: Buffer | undefined;
            } & {
                name?: string | undefined;
                id?: Buffer | undefined;
            } & { [K_15 in Exclude<keyof I_1["params"]["networks"][number], keyof import("./types").NetworkInfo>]: never; })[] & { [K_16 in Exclude<keyof I_1["params"]["networks"], keyof {
                name?: string | undefined;
                id?: Buffer | undefined;
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
                } & { [K_17 in Exclude<keyof I_1["params"]["votingThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_18 in Exclude<keyof I_1["params"]["votingThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I_1["params"]["votingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
            } & { [K_20 in Exclude<keyof I_1["params"]["minVoterCount"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_21 in Exclude<keyof I_1["params"]["votingGracePeriod"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_22 in Exclude<keyof I_1["params"]["endBlockerLimit"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_23 in Exclude<keyof I_1["params"]["transferLimit"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I_1["params"], keyof Params>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): ParamsResponse;
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
