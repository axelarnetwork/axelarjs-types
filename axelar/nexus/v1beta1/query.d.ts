/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { CrossChainTransfer, FeeInfo, GeneralMessage, TransferState } from "../exported/v1beta1/types";
import { Params } from "./params";
import { ChainState } from "./types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export declare enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_ACTIVATED = 1,
    CHAIN_STATUS_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare function chainStatusFromJSON(object: any): ChainStatus;
export declare function chainStatusToJSON(object: ChainStatus): string;
/**
 * ChainMaintainersRequest represents a message that queries
 * the chain maintainers for the specified chain
 */
export interface ChainMaintainersRequest {
    $type: "axelar.nexus.v1beta1.ChainMaintainersRequest";
    chain: string;
}
export interface ChainMaintainersResponse {
    $type: "axelar.nexus.v1beta1.ChainMaintainersResponse";
    maintainers: Buffer[];
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequest {
    $type: "axelar.nexus.v1beta1.LatestDepositAddressRequest";
    recipientAddr: string;
    recipientChain: string;
    depositChain: string;
}
export interface LatestDepositAddressResponse {
    $type: "axelar.nexus.v1beta1.LatestDepositAddressResponse";
    depositAddr: string;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequest {
    $type: "axelar.nexus.v1beta1.TransfersForChainRequest";
    chain: string;
    state: TransferState;
    pagination?: PageRequest | undefined;
}
export interface TransfersForChainResponse {
    $type: "axelar.nexus.v1beta1.TransfersForChainResponse";
    transfers: CrossChainTransfer[];
    pagination?: PageResponse | undefined;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
    $type: "axelar.nexus.v1beta1.FeeInfoRequest";
    chain: string;
    asset: string;
}
export interface FeeInfoResponse {
    $type: "axelar.nexus.v1beta1.FeeInfoResponse";
    feeInfo?: FeeInfo | undefined;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequest {
    $type: "axelar.nexus.v1beta1.TransferFeeRequest";
    sourceChain: string;
    destinationChain: string;
    amount: string;
}
export interface TransferFeeResponse {
    $type: "axelar.nexus.v1beta1.TransferFeeResponse";
    fee?: Coin | undefined;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequest {
    $type: "axelar.nexus.v1beta1.ChainsRequest";
    status: ChainStatus;
}
export interface ChainsResponse {
    $type: "axelar.nexus.v1beta1.ChainsResponse";
    chains: string[];
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequest {
    $type: "axelar.nexus.v1beta1.AssetsRequest";
    chain: string;
}
export interface AssetsResponse {
    $type: "axelar.nexus.v1beta1.AssetsResponse";
    assets: string[];
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequest {
    $type: "axelar.nexus.v1beta1.ChainStateRequest";
    chain: string;
}
export interface ChainStateResponse {
    $type: "axelar.nexus.v1beta1.ChainStateResponse";
    state?: ChainState | undefined;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequest {
    $type: "axelar.nexus.v1beta1.ChainsByAssetRequest";
    asset: string;
}
export interface ChainsByAssetResponse {
    $type: "axelar.nexus.v1beta1.ChainsByAssetResponse";
    chains: string[];
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequest {
    $type: "axelar.nexus.v1beta1.RecipientAddressRequest";
    depositAddr: string;
    depositChain: string;
}
export interface RecipientAddressResponse {
    $type: "axelar.nexus.v1beta1.RecipientAddressResponse";
    recipientAddr: string;
    recipientChain: string;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequest {
    $type: "axelar.nexus.v1beta1.TransferRateLimitRequest";
    chain: string;
    asset: string;
}
export interface TransferRateLimitResponse {
    $type: "axelar.nexus.v1beta1.TransferRateLimitResponse";
    transferRateLimit?: TransferRateLimit | undefined;
}
export interface TransferRateLimit {
    $type: "axelar.nexus.v1beta1.TransferRateLimit";
    limit: Buffer;
    window?: Duration | undefined;
    /** @deprecated */
    incoming: Buffer;
    /** @deprecated */
    outgoing: Buffer;
    /** time_left indicates the time left in the rate limit window */
    timeLeft?: Duration | undefined;
    from: Buffer;
    to: Buffer;
}
export interface MessageRequest {
    $type: "axelar.nexus.v1beta1.MessageRequest";
    id: string;
}
export interface MessageResponse {
    $type: "axelar.nexus.v1beta1.MessageResponse";
    message?: GeneralMessage | undefined;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.nexus.v1beta1.ParamsRequest";
}
export interface ParamsResponse {
    $type: "axelar.nexus.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
export declare const ChainMaintainersRequest: {
    $type: "axelar.nexus.v1beta1.ChainMaintainersRequest";
    encode(message: ChainMaintainersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainMaintainersRequest;
    fromJSON(object: any): ChainMaintainersRequest;
    toJSON(message: ChainMaintainersRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain">]: never; }>(base?: I | undefined): ChainMaintainersRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain">]: never; }>(object: I_1): ChainMaintainersRequest;
};
export declare const ChainMaintainersResponse: {
    $type: "axelar.nexus.v1beta1.ChainMaintainersResponse";
    encode(message: ChainMaintainersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainMaintainersResponse;
    fromJSON(object: any): ChainMaintainersResponse;
    toJSON(message: ChainMaintainersResponse): unknown;
    create<I extends {
        maintainers?: Buffer[] | undefined;
    } & {
        maintainers?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["maintainers"], "$type" | keyof Buffer[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "maintainers">]: never; }>(base?: I | undefined): ChainMaintainersResponse;
    fromPartial<I_1 extends {
        maintainers?: Buffer[] | undefined;
    } & {
        maintainers?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I_1["maintainers"], "$type" | keyof Buffer[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "maintainers">]: never; }>(object: I_1): ChainMaintainersResponse;
};
export declare const LatestDepositAddressRequest: {
    $type: "axelar.nexus.v1beta1.LatestDepositAddressRequest";
    encode(message: LatestDepositAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LatestDepositAddressRequest;
    fromJSON(object: any): LatestDepositAddressRequest;
    toJSON(message: LatestDepositAddressRequest): unknown;
    create<I extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        depositChain?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        depositChain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "recipientAddr" | "recipientChain" | "depositChain">]: never; }>(base?: I | undefined): LatestDepositAddressRequest;
    fromPartial<I_1 extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        depositChain?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        depositChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "recipientAddr" | "recipientChain" | "depositChain">]: never; }>(object: I_1): LatestDepositAddressRequest;
};
export declare const LatestDepositAddressResponse: {
    $type: "axelar.nexus.v1beta1.LatestDepositAddressResponse";
    encode(message: LatestDepositAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LatestDepositAddressResponse;
    fromJSON(object: any): LatestDepositAddressResponse;
    toJSON(message: LatestDepositAddressResponse): unknown;
    create<I extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "depositAddr">]: never; }>(base?: I | undefined): LatestDepositAddressResponse;
    fromPartial<I_1 extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "depositAddr">]: never; }>(object: I_1): LatestDepositAddressResponse;
};
export declare const TransfersForChainRequest: {
    $type: "axelar.nexus.v1beta1.TransfersForChainRequest";
    encode(message: TransfersForChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransfersForChainRequest;
    fromJSON(object: any): TransfersForChainRequest;
    toJSON(message: TransfersForChainRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: {
            reverse?: boolean | undefined;
            key?: Buffer | undefined;
            limit?: string | number | Long.Long | undefined;
            offset?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: ({
            reverse?: boolean | undefined;
            key?: Buffer | undefined;
            limit?: string | number | Long.Long | undefined;
            offset?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
        } & {
            reverse?: boolean | undefined;
            key?: Buffer | undefined;
            limit?: string | number | (Long.Long & {
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
            } & { [K in Exclude<keyof I["pagination"]["limit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            offset?: string | number | (Long.Long & {
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
            } & { [K_1 in Exclude<keyof I["pagination"]["offset"], "$type" | keyof Long.Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], "$type" | "reverse" | "key" | "limit" | "offset" | "countTotal">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "chain" | "state" | "pagination">]: never; }>(base?: I | undefined): TransfersForChainRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: {
            reverse?: boolean | undefined;
            key?: Buffer | undefined;
            limit?: string | number | Long.Long | undefined;
            offset?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: ({
            reverse?: boolean | undefined;
            key?: Buffer | undefined;
            limit?: string | number | Long.Long | undefined;
            offset?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
        } & {
            reverse?: boolean | undefined;
            key?: Buffer | undefined;
            limit?: string | number | (Long.Long & {
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
            } & { [K_4 in Exclude<keyof I_1["pagination"]["limit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            offset?: string | number | (Long.Long & {
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
            } & { [K_5 in Exclude<keyof I_1["pagination"]["offset"], "$type" | keyof Long.Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
        } & { [K_6 in Exclude<keyof I_1["pagination"], "$type" | "reverse" | "key" | "limit" | "offset" | "countTotal">]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "chain" | "state" | "pagination">]: never; }>(object: I_1): TransfersForChainRequest;
};
export declare const TransfersForChainResponse: {
    $type: "axelar.nexus.v1beta1.TransfersForChainResponse";
    encode(message: TransfersForChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransfersForChainResponse;
    fromJSON(object: any): TransfersForChainResponse;
    toJSON(message: TransfersForChainResponse): unknown;
    create<I extends {
        transfers?: {
            id?: string | number | Long.Long | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: TransferState | undefined;
        }[] | undefined;
        pagination?: {
            total?: string | number | Long.Long | undefined;
            nextKey?: Buffer | undefined;
        } | undefined;
    } & {
        transfers?: ({
            id?: string | number | Long.Long | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: TransferState | undefined;
        }[] & ({
            id?: string | number | Long.Long | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: TransferState | undefined;
        } & {
            id?: string | number | (Long.Long & {
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
            } & { [K in Exclude<keyof I["transfers"][number]["id"], "$type" | keyof Long.Long>]: never; }) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_1 in Exclude<keyof I["transfers"][number]["asset"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: ({
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } & {
                address?: string | undefined;
                chain?: ({
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & { [K_2 in Exclude<keyof I["transfers"][number]["recipient"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["transfers"][number]["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
            state?: TransferState | undefined;
        } & { [K_4 in Exclude<keyof I["transfers"][number], "$type" | "id" | "asset" | "recipient" | "state">]: never; })[] & { [K_5 in Exclude<keyof I["transfers"], "$type" | keyof {
            id?: string | number | Long.Long | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: TransferState | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            total?: string | number | Long.Long | undefined;
            nextKey?: Buffer | undefined;
        } & {
            total?: string | number | (Long.Long & {
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
            } & { [K_6 in Exclude<keyof I["pagination"]["total"], "$type" | keyof Long.Long>]: never; }) | undefined;
            nextKey?: Buffer | undefined;
        } & { [K_7 in Exclude<keyof I["pagination"], "$type" | "total" | "nextKey">]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, "$type" | "transfers" | "pagination">]: never; }>(base?: I | undefined): TransfersForChainResponse;
    fromPartial<I_1 extends {
        transfers?: {
            id?: string | number | Long.Long | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: TransferState | undefined;
        }[] | undefined;
        pagination?: {
            total?: string | number | Long.Long | undefined;
            nextKey?: Buffer | undefined;
        } | undefined;
    } & {
        transfers?: ({
            id?: string | number | Long.Long | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: TransferState | undefined;
        }[] & ({
            id?: string | number | Long.Long | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: TransferState | undefined;
        } & {
            id?: string | number | (Long.Long & {
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
            } & { [K_9 in Exclude<keyof I_1["transfers"][number]["id"], "$type" | keyof Long.Long>]: never; }) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_10 in Exclude<keyof I_1["transfers"][number]["asset"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: ({
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } & {
                address?: string | undefined;
                chain?: ({
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & { [K_11 in Exclude<keyof I_1["transfers"][number]["recipient"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I_1["transfers"][number]["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
            state?: TransferState | undefined;
        } & { [K_13 in Exclude<keyof I_1["transfers"][number], "$type" | "id" | "asset" | "recipient" | "state">]: never; })[] & { [K_14 in Exclude<keyof I_1["transfers"], "$type" | keyof {
            id?: string | number | Long.Long | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: TransferState | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            total?: string | number | Long.Long | undefined;
            nextKey?: Buffer | undefined;
        } & {
            total?: string | number | (Long.Long & {
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
            } & { [K_15 in Exclude<keyof I_1["pagination"]["total"], "$type" | keyof Long.Long>]: never; }) | undefined;
            nextKey?: Buffer | undefined;
        } & { [K_16 in Exclude<keyof I_1["pagination"], "$type" | "total" | "nextKey">]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, "$type" | "transfers" | "pagination">]: never; }>(object: I_1): TransfersForChainResponse;
};
export declare const FeeInfoRequest: {
    $type: "axelar.nexus.v1beta1.FeeInfoRequest";
    encode(message: FeeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeeInfoRequest;
    fromJSON(object: any): FeeInfoRequest;
    toJSON(message: FeeInfoRequest): unknown;
    create<I extends {
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        asset?: string | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "asset" | "chain">]: never; }>(base?: I | undefined): FeeInfoRequest;
    fromPartial<I_1 extends {
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        asset?: string | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "asset" | "chain">]: never; }>(object: I_1): FeeInfoRequest;
};
export declare const FeeInfoResponse: {
    $type: "axelar.nexus.v1beta1.FeeInfoResponse";
    encode(message: FeeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeeInfoResponse;
    fromJSON(object: any): FeeInfoResponse;
    toJSON(message: FeeInfoResponse): unknown;
    create<I extends {
        feeInfo?: {
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } | undefined;
    } & {
        feeInfo?: ({
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & {
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & { [K in Exclude<keyof I["feeInfo"], "$type" | "asset" | "chain" | "feeRate" | "minFee" | "maxFee">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "feeInfo">]: never; }>(base?: I | undefined): FeeInfoResponse;
    fromPartial<I_1 extends {
        feeInfo?: {
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } | undefined;
    } & {
        feeInfo?: ({
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & {
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["feeInfo"], "$type" | "asset" | "chain" | "feeRate" | "minFee" | "maxFee">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "feeInfo">]: never; }>(object: I_1): FeeInfoResponse;
};
export declare const TransferFeeRequest: {
    $type: "axelar.nexus.v1beta1.TransferFeeRequest";
    encode(message: TransferFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferFeeRequest;
    fromJSON(object: any): TransferFeeRequest;
    toJSON(message: TransferFeeRequest): unknown;
    create<I extends {
        amount?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        amount?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "amount" | "sourceChain" | "destinationChain">]: never; }>(base?: I | undefined): TransferFeeRequest;
    fromPartial<I_1 extends {
        amount?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        amount?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "amount" | "sourceChain" | "destinationChain">]: never; }>(object: I_1): TransferFeeRequest;
};
export declare const TransferFeeResponse: {
    $type: "axelar.nexus.v1beta1.TransferFeeResponse";
    encode(message: TransferFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferFeeResponse;
    fromJSON(object: any): TransferFeeResponse;
    toJSON(message: TransferFeeResponse): unknown;
    create<I extends {
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["fee"], "$type" | "denom" | "amount">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "fee">]: never; }>(base?: I | undefined): TransferFeeResponse;
    fromPartial<I_1 extends {
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["fee"], "$type" | "denom" | "amount">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "fee">]: never; }>(object: I_1): TransferFeeResponse;
};
export declare const ChainsRequest: {
    $type: "axelar.nexus.v1beta1.ChainsRequest";
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
    $type: "axelar.nexus.v1beta1.ChainsResponse";
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
export declare const AssetsRequest: {
    $type: "axelar.nexus.v1beta1.AssetsRequest";
    encode(message: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsRequest;
    fromJSON(object: any): AssetsRequest;
    toJSON(message: AssetsRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain">]: never; }>(base?: I | undefined): AssetsRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain">]: never; }>(object: I_1): AssetsRequest;
};
export declare const AssetsResponse: {
    $type: "axelar.nexus.v1beta1.AssetsResponse";
    encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsResponse;
    fromJSON(object: any): AssetsResponse;
    toJSON(message: AssetsResponse): unknown;
    create<I extends {
        assets?: string[] | undefined;
    } & {
        assets?: (string[] & string[] & { [K in Exclude<keyof I["assets"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "assets">]: never; }>(base?: I | undefined): AssetsResponse;
    fromPartial<I_1 extends {
        assets?: string[] | undefined;
    } & {
        assets?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["assets"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "assets">]: never; }>(object: I_1): AssetsResponse;
};
export declare const ChainStateRequest: {
    $type: "axelar.nexus.v1beta1.ChainStateRequest";
    encode(message: ChainStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainStateRequest;
    fromJSON(object: any): ChainStateRequest;
    toJSON(message: ChainStateRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain">]: never; }>(base?: I | undefined): ChainStateRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain">]: never; }>(object: I_1): ChainStateRequest;
};
export declare const ChainStateResponse: {
    $type: "axelar.nexus.v1beta1.ChainStateResponse";
    encode(message: ChainStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainStateResponse;
    fromJSON(object: any): ChainStateResponse;
    toJSON(message: ChainStateResponse): unknown;
    create<I extends {
        state?: {
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            activated?: boolean | undefined;
            maintainerStates?: {
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        state?: ({
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            activated?: boolean | undefined;
            maintainerStates?: {
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            chain?: ({
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & { [K in Exclude<keyof I["state"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            assets?: ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] & ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & { [K_1 in Exclude<keyof I["state"]["assets"][number], "$type" | "denom" | "isNativeAsset">]: never; })[] & { [K_2 in Exclude<keyof I["state"]["assets"], "$type" | keyof {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[]>]: never; }) | undefined;
            activated?: boolean | undefined;
            maintainerStates?: ({
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] & ({
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: ({
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } & {
                        index?: number | undefined;
                        cumulativeValue?: ((string | number | Long.Long)[] & (string | number | (Long.Long & {
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
                        } & { [K_3 in Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_4 in Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        maxSize?: number | undefined;
                    } & { [K_5 in Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
                incorrectVotes?: ({
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } & {
                        index?: number | undefined;
                        cumulativeValue?: ((string | number | Long.Long)[] & (string | number | (Long.Long & {
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
                        } & { [K_7 in Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_8 in Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        maxSize?: number | undefined;
                    } & { [K_9 in Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["state"]["maintainerStates"][number], "$type" | "address" | "chain" | "missingVotes" | "incorrectVotes">]: never; })[] & { [K_12 in Exclude<keyof I["state"]["maintainerStates"], "$type" | keyof {
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["state"], "$type" | "chain" | "assets" | "activated" | "maintainerStates">]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, "$type" | "state">]: never; }>(base?: I | undefined): ChainStateResponse;
    fromPartial<I_1 extends {
        state?: {
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            activated?: boolean | undefined;
            maintainerStates?: {
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        state?: ({
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            activated?: boolean | undefined;
            maintainerStates?: {
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            chain?: ({
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & { [K_15 in Exclude<keyof I_1["state"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            assets?: ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] & ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & { [K_16 in Exclude<keyof I_1["state"]["assets"][number], "$type" | "denom" | "isNativeAsset">]: never; })[] & { [K_17 in Exclude<keyof I_1["state"]["assets"], "$type" | keyof {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[]>]: never; }) | undefined;
            activated?: boolean | undefined;
            maintainerStates?: ({
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] & ({
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: ({
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } & {
                        index?: number | undefined;
                        cumulativeValue?: ((string | number | Long.Long)[] & (string | number | (Long.Long & {
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
                        } & { [K_18 in Exclude<keyof I_1["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_19 in Exclude<keyof I_1["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        maxSize?: number | undefined;
                    } & { [K_20 in Exclude<keyof I_1["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
                } & { [K_21 in Exclude<keyof I_1["state"]["maintainerStates"][number]["missingVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
                incorrectVotes?: ({
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } & {
                        index?: number | undefined;
                        cumulativeValue?: ((string | number | Long.Long)[] & (string | number | (Long.Long & {
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
                        } & { [K_22 in Exclude<keyof I_1["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_23 in Exclude<keyof I_1["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        maxSize?: number | undefined;
                    } & { [K_24 in Exclude<keyof I_1["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
                } & { [K_25 in Exclude<keyof I_1["state"]["maintainerStates"][number]["incorrectVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
            } & { [K_26 in Exclude<keyof I_1["state"]["maintainerStates"][number], "$type" | "address" | "chain" | "missingVotes" | "incorrectVotes">]: never; })[] & { [K_27 in Exclude<keyof I_1["state"]["maintainerStates"], "$type" | keyof {
                address?: Buffer | undefined;
                chain?: string | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        index?: number | undefined;
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_28 in Exclude<keyof I_1["state"], "$type" | "chain" | "assets" | "activated" | "maintainerStates">]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, "$type" | "state">]: never; }>(object: I_1): ChainStateResponse;
};
export declare const ChainsByAssetRequest: {
    $type: "axelar.nexus.v1beta1.ChainsByAssetRequest";
    encode(message: ChainsByAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsByAssetRequest;
    fromJSON(object: any): ChainsByAssetRequest;
    toJSON(message: ChainsByAssetRequest): unknown;
    create<I extends {
        asset?: string | undefined;
    } & {
        asset?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "asset">]: never; }>(base?: I | undefined): ChainsByAssetRequest;
    fromPartial<I_1 extends {
        asset?: string | undefined;
    } & {
        asset?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "asset">]: never; }>(object: I_1): ChainsByAssetRequest;
};
export declare const ChainsByAssetResponse: {
    $type: "axelar.nexus.v1beta1.ChainsByAssetResponse";
    encode(message: ChainsByAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsByAssetResponse;
    fromJSON(object: any): ChainsByAssetResponse;
    toJSON(message: ChainsByAssetResponse): unknown;
    create<I extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & { [K in Exclude<keyof I["chains"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "chains">]: never; }>(base?: I | undefined): ChainsByAssetResponse;
    fromPartial<I_1 extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["chains"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "chains">]: never; }>(object: I_1): ChainsByAssetResponse;
};
export declare const RecipientAddressRequest: {
    $type: "axelar.nexus.v1beta1.RecipientAddressRequest";
    encode(message: RecipientAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecipientAddressRequest;
    fromJSON(object: any): RecipientAddressRequest;
    toJSON(message: RecipientAddressRequest): unknown;
    create<I extends {
        depositAddr?: string | undefined;
        depositChain?: string | undefined;
    } & {
        depositAddr?: string | undefined;
        depositChain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "depositAddr" | "depositChain">]: never; }>(base?: I | undefined): RecipientAddressRequest;
    fromPartial<I_1 extends {
        depositAddr?: string | undefined;
        depositChain?: string | undefined;
    } & {
        depositAddr?: string | undefined;
        depositChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "depositAddr" | "depositChain">]: never; }>(object: I_1): RecipientAddressRequest;
};
export declare const RecipientAddressResponse: {
    $type: "axelar.nexus.v1beta1.RecipientAddressResponse";
    encode(message: RecipientAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecipientAddressResponse;
    fromJSON(object: any): RecipientAddressResponse;
    toJSON(message: RecipientAddressResponse): unknown;
    create<I extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "recipientAddr" | "recipientChain">]: never; }>(base?: I | undefined): RecipientAddressResponse;
    fromPartial<I_1 extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "recipientAddr" | "recipientChain">]: never; }>(object: I_1): RecipientAddressResponse;
};
export declare const TransferRateLimitRequest: {
    $type: "axelar.nexus.v1beta1.TransferRateLimitRequest";
    encode(message: TransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferRateLimitRequest;
    fromJSON(object: any): TransferRateLimitRequest;
    toJSON(message: TransferRateLimitRequest): unknown;
    create<I extends {
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        asset?: string | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "asset" | "chain">]: never; }>(base?: I | undefined): TransferRateLimitRequest;
    fromPartial<I_1 extends {
        asset?: string | undefined;
        chain?: string | undefined;
    } & {
        asset?: string | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "asset" | "chain">]: never; }>(object: I_1): TransferRateLimitRequest;
};
export declare const TransferRateLimitResponse: {
    $type: "axelar.nexus.v1beta1.TransferRateLimitResponse";
    encode(message: TransferRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferRateLimitResponse;
    fromJSON(object: any): TransferRateLimitResponse;
    toJSON(message: TransferRateLimitResponse): unknown;
    create<I extends {
        transferRateLimit?: {
            limit?: Buffer | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            to?: Buffer | undefined;
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            from?: Buffer | undefined;
        } | undefined;
    } & {
        transferRateLimit?: ({
            limit?: Buffer | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            to?: Buffer | undefined;
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            from?: Buffer | undefined;
        } & {
            limit?: Buffer | undefined;
            window?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
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
                } & { [K in Exclude<keyof I["transferRateLimit"]["window"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_1 in Exclude<keyof I["transferRateLimit"]["window"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
            to?: Buffer | undefined;
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
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
                } & { [K_2 in Exclude<keyof I["transferRateLimit"]["timeLeft"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_3 in Exclude<keyof I["transferRateLimit"]["timeLeft"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
            from?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I["transferRateLimit"], "$type" | "limit" | "window" | "to" | "incoming" | "outgoing" | "timeLeft" | "from">]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "$type" | "transferRateLimit">]: never; }>(base?: I | undefined): TransferRateLimitResponse;
    fromPartial<I_1 extends {
        transferRateLimit?: {
            limit?: Buffer | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            to?: Buffer | undefined;
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            from?: Buffer | undefined;
        } | undefined;
    } & {
        transferRateLimit?: ({
            limit?: Buffer | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            to?: Buffer | undefined;
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            from?: Buffer | undefined;
        } & {
            limit?: Buffer | undefined;
            window?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
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
                } & { [K_6 in Exclude<keyof I_1["transferRateLimit"]["window"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_7 in Exclude<keyof I_1["transferRateLimit"]["window"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
            to?: Buffer | undefined;
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: ({
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | number | (Long.Long & {
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
                } & { [K_8 in Exclude<keyof I_1["transferRateLimit"]["timeLeft"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_9 in Exclude<keyof I_1["transferRateLimit"]["timeLeft"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
            from?: Buffer | undefined;
        } & { [K_10 in Exclude<keyof I_1["transferRateLimit"], "$type" | "limit" | "window" | "to" | "incoming" | "outgoing" | "timeLeft" | "from">]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "$type" | "transferRateLimit">]: never; }>(object: I_1): TransferRateLimitResponse;
};
export declare const TransferRateLimit: {
    $type: "axelar.nexus.v1beta1.TransferRateLimit";
    encode(message: TransferRateLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferRateLimit;
    fromJSON(object: any): TransferRateLimit;
    toJSON(message: TransferRateLimit): unknown;
    create<I extends {
        limit?: Buffer | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        to?: Buffer | undefined;
        incoming?: Buffer | undefined;
        outgoing?: Buffer | undefined;
        timeLeft?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        from?: Buffer | undefined;
    } & {
        limit?: Buffer | undefined;
        window?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
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
            } & { [K in Exclude<keyof I["window"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_1 in Exclude<keyof I["window"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
        to?: Buffer | undefined;
        incoming?: Buffer | undefined;
        outgoing?: Buffer | undefined;
        timeLeft?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
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
            } & { [K_2 in Exclude<keyof I["timeLeft"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_3 in Exclude<keyof I["timeLeft"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
        from?: Buffer | undefined;
    } & { [K_4 in Exclude<keyof I, "$type" | "limit" | "window" | "to" | "incoming" | "outgoing" | "timeLeft" | "from">]: never; }>(base?: I | undefined): TransferRateLimit;
    fromPartial<I_1 extends {
        limit?: Buffer | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        to?: Buffer | undefined;
        incoming?: Buffer | undefined;
        outgoing?: Buffer | undefined;
        timeLeft?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        from?: Buffer | undefined;
    } & {
        limit?: Buffer | undefined;
        window?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
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
            } & { [K_5 in Exclude<keyof I_1["window"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["window"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
        to?: Buffer | undefined;
        incoming?: Buffer | undefined;
        outgoing?: Buffer | undefined;
        timeLeft?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
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
            } & { [K_7 in Exclude<keyof I_1["timeLeft"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_8 in Exclude<keyof I_1["timeLeft"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
        from?: Buffer | undefined;
    } & { [K_9 in Exclude<keyof I_1, "$type" | "limit" | "window" | "to" | "incoming" | "outgoing" | "timeLeft" | "from">]: never; }>(object: I_1): TransferRateLimit;
};
export declare const MessageRequest: {
    $type: "axelar.nexus.v1beta1.MessageRequest";
    encode(message: MessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageRequest;
    fromJSON(object: any): MessageRequest;
    toJSON(message: MessageRequest): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id">]: never; }>(base?: I | undefined): MessageRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "id">]: never; }>(object: I_1): MessageRequest;
};
export declare const MessageResponse: {
    $type: "axelar.nexus.v1beta1.MessageResponse";
    encode(message: MessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageResponse;
    fromJSON(object: any): MessageResponse;
    toJSON(message: MessageResponse): unknown;
    create<I extends {
        message?: {
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            id?: string | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        message?: ({
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            id?: string | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        } & {
            sender?: ({
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } & {
                address?: string | undefined;
                chain?: ({
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & { [K in Exclude<keyof I["message"]["sender"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["message"]["sender"], "$type" | "address" | "chain">]: never; }) | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            id?: string | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_2 in Exclude<keyof I["message"]["asset"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: ({
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } & {
                address?: string | undefined;
                chain?: ({
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & { [K_3 in Exclude<keyof I["message"]["recipient"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["message"]["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | (Long.Long & {
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
            } & { [K_5 in Exclude<keyof I["message"]["sourceTxIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["message"], "$type" | "sender" | "status" | "id" | "asset" | "recipient" | "payloadHash" | "sourceTxId" | "sourceTxIndex">]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, "$type" | "message">]: never; }>(base?: I | undefined): MessageResponse;
    fromPartial<I_1 extends {
        message?: {
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            id?: string | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        message?: ({
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            id?: string | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        } & {
            sender?: ({
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } & {
                address?: string | undefined;
                chain?: ({
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & { [K_8 in Exclude<keyof I_1["message"]["sender"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I_1["message"]["sender"], "$type" | "address" | "chain">]: never; }) | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            id?: string | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_10 in Exclude<keyof I_1["message"]["asset"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: ({
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } & {
                address?: string | undefined;
                chain?: ({
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } & { [K_11 in Exclude<keyof I_1["message"]["recipient"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I_1["message"]["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | (Long.Long & {
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
            } & { [K_13 in Exclude<keyof I_1["message"]["sourceTxIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I_1["message"], "$type" | "sender" | "status" | "id" | "asset" | "recipient" | "payloadHash" | "sourceTxId" | "sourceTxIndex">]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, "$type" | "message">]: never; }>(object: I_1): MessageResponse;
};
export declare const ParamsRequest: {
    $type: "axelar.nexus.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.nexus.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends {
        params?: {
            endBlockerLimit?: string | number | Long.Long | undefined;
            gateway?: Buffer | undefined;
            chainActivationThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerMissingVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerIncorrectVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } | undefined;
    } & {
        params?: ({
            endBlockerLimit?: string | number | Long.Long | undefined;
            gateway?: Buffer | undefined;
            chainActivationThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerMissingVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerIncorrectVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } & {
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
            } & { [K in Exclude<keyof I["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            gateway?: Buffer | undefined;
            chainActivationThreshold?: ({
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
                } & { [K_1 in Exclude<keyof I["params"]["chainActivationThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_2 in Exclude<keyof I["params"]["chainActivationThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["params"]["chainActivationThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            chainMaintainerMissingVoteThreshold?: ({
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
                } & { [K_4 in Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_5 in Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            chainMaintainerIncorrectVoteThreshold?: ({
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
                } & { [K_7 in Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_8 in Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } & { [K_10 in Exclude<keyof I["params"], "$type" | "endBlockerLimit" | "gateway" | "chainActivationThreshold" | "chainMaintainerMissingVoteThreshold" | "chainMaintainerIncorrectVoteThreshold" | "chainMaintainerCheckWindow">]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, "$type" | "params">]: never; }>(base?: I | undefined): ParamsResponse;
    fromPartial<I_1 extends {
        params?: {
            endBlockerLimit?: string | number | Long.Long | undefined;
            gateway?: Buffer | undefined;
            chainActivationThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerMissingVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerIncorrectVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } | undefined;
    } & {
        params?: ({
            endBlockerLimit?: string | number | Long.Long | undefined;
            gateway?: Buffer | undefined;
            chainActivationThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerMissingVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerIncorrectVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } & {
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
            } & { [K_12 in Exclude<keyof I_1["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            gateway?: Buffer | undefined;
            chainActivationThreshold?: ({
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
                } & { [K_13 in Exclude<keyof I_1["params"]["chainActivationThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_14 in Exclude<keyof I_1["params"]["chainActivationThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I_1["params"]["chainActivationThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            chainMaintainerMissingVoteThreshold?: ({
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
                } & { [K_16 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_17 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            chainMaintainerIncorrectVoteThreshold?: ({
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
                } & { [K_19 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_20 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } & { [K_22 in Exclude<keyof I_1["params"], "$type" | "endBlockerLimit" | "gateway" | "chainActivationThreshold" | "chainMaintainerMissingVoteThreshold" | "chainMaintainerIncorrectVoteThreshold" | "chainMaintainerCheckWindow">]: never; }) | undefined;
    } & { [K_23 in Exclude<keyof I_1, "$type" | "params">]: never; }>(object: I_1): ParamsResponse;
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
