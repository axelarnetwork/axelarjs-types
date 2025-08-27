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
    chain: string;
}
export interface ChainMaintainersResponse {
    maintainers: Buffer[];
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequest {
    recipientAddr: string;
    recipientChain: string;
    depositChain: string;
}
export interface LatestDepositAddressResponse {
    depositAddr: string;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequest {
    chain: string;
    state: TransferState;
    pagination?: PageRequest | undefined;
}
export interface TransfersForChainResponse {
    transfers: CrossChainTransfer[];
    pagination?: PageResponse | undefined;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
    chain: string;
    asset: string;
}
export interface FeeInfoResponse {
    feeInfo?: FeeInfo | undefined;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequest {
    sourceChain: string;
    destinationChain: string;
    amount: string;
}
export interface TransferFeeResponse {
    fee?: Coin | undefined;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequest {
    status: ChainStatus;
}
export interface ChainsResponse {
    chains: string[];
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequest {
    chain: string;
}
export interface AssetsResponse {
    assets: string[];
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequest {
    chain: string;
}
export interface ChainStateResponse {
    state?: ChainState | undefined;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequest {
    asset: string;
}
export interface ChainsByAssetResponse {
    chains: string[];
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequest {
    depositAddr: string;
    depositChain: string;
}
export interface RecipientAddressResponse {
    recipientAddr: string;
    recipientChain: string;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequest {
    chain: string;
    asset: string;
}
export interface TransferRateLimitResponse {
    transferRateLimit?: TransferRateLimit | undefined;
}
export interface TransferRateLimit {
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
    id: string;
}
export interface MessageResponse {
    message?: GeneralMessage | undefined;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
export interface ParamsResponse {
    params?: Params | undefined;
}
export declare const ChainMaintainersRequest: {
    encode(message: ChainMaintainersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainMaintainersRequest;
    fromJSON(object: any): ChainMaintainersRequest;
    toJSON(message: ChainMaintainersRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "chain">]: never; }>(base?: I | undefined): ChainMaintainersRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "chain">]: never; }>(object: I_1): ChainMaintainersRequest;
};
export declare const ChainMaintainersResponse: {
    encode(message: ChainMaintainersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainMaintainersResponse;
    fromJSON(object: any): ChainMaintainersResponse;
    toJSON(message: ChainMaintainersResponse): unknown;
    create<I extends {
        maintainers?: Buffer[] | undefined;
    } & {
        maintainers?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["maintainers"], keyof Buffer[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "maintainers">]: never; }>(base?: I | undefined): ChainMaintainersResponse;
    fromPartial<I_1 extends {
        maintainers?: Buffer[] | undefined;
    } & {
        maintainers?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I_1["maintainers"], keyof Buffer[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "maintainers">]: never; }>(object: I_1): ChainMaintainersResponse;
};
export declare const LatestDepositAddressRequest: {
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
    } & { [K in Exclude<keyof I, keyof LatestDepositAddressRequest>]: never; }>(base?: I | undefined): LatestDepositAddressRequest;
    fromPartial<I_1 extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        depositChain?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        depositChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LatestDepositAddressRequest>]: never; }>(object: I_1): LatestDepositAddressRequest;
};
export declare const LatestDepositAddressResponse: {
    encode(message: LatestDepositAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LatestDepositAddressResponse;
    fromJSON(object: any): LatestDepositAddressResponse;
    toJSON(message: LatestDepositAddressResponse): unknown;
    create<I extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & { [K in Exclude<keyof I, "depositAddr">]: never; }>(base?: I | undefined): LatestDepositAddressResponse;
    fromPartial<I_1 extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "depositAddr">]: never; }>(object: I_1): LatestDepositAddressResponse;
};
export declare const TransfersForChainRequest: {
    encode(message: TransfersForChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransfersForChainRequest;
    fromJSON(object: any): TransfersForChainRequest;
    toJSON(message: TransfersForChainRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: {
            key?: Buffer | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: ({
            key?: Buffer | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Buffer | undefined;
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
            } & { [K in Exclude<keyof I["pagination"]["offset"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["pagination"]["limit"], keyof Long.Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof TransfersForChainRequest>]: never; }>(base?: I | undefined): TransfersForChainRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: {
            key?: Buffer | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        state?: TransferState | undefined;
        pagination?: ({
            key?: Buffer | undefined;
            offset?: string | number | Long.Long | undefined;
            limit?: string | number | Long.Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Buffer | undefined;
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
            } & { [K_4 in Exclude<keyof I_1["pagination"]["offset"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_5 in Exclude<keyof I_1["pagination"]["limit"], keyof Long.Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof TransfersForChainRequest>]: never; }>(object: I_1): TransfersForChainRequest;
};
export declare const TransfersForChainResponse: {
    encode(message: TransfersForChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransfersForChainResponse;
    fromJSON(object: any): TransfersForChainResponse;
    toJSON(message: TransfersForChainResponse): unknown;
    create<I extends {
        transfers?: {
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Buffer | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        transfers?: ({
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        }[] & ({
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        } & {
            recipient?: ({
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } & {
                chain?: ({
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & { [K in Exclude<keyof I["transfers"][number]["recipient"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_1 in Exclude<keyof I["transfers"][number]["recipient"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_2 in Exclude<keyof I["transfers"][number]["asset"], keyof Coin>]: never; }) | undefined;
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
            } & { [K_3 in Exclude<keyof I["transfers"][number]["id"], keyof Long.Long>]: never; }) | undefined;
            state?: TransferState | undefined;
        } & { [K_4 in Exclude<keyof I["transfers"][number], keyof CrossChainTransfer>]: never; })[] & { [K_5 in Exclude<keyof I["transfers"], keyof {
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Buffer | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Buffer | undefined;
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
            } & { [K_6 in Exclude<keyof I["pagination"]["total"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof TransfersForChainResponse>]: never; }>(base?: I | undefined): TransfersForChainResponse;
    fromPartial<I_1 extends {
        transfers?: {
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Buffer | undefined;
            total?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        transfers?: ({
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        }[] & ({
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        } & {
            recipient?: ({
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } & {
                chain?: ({
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & { [K_9 in Exclude<keyof I_1["transfers"][number]["recipient"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_10 in Exclude<keyof I_1["transfers"][number]["recipient"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_11 in Exclude<keyof I_1["transfers"][number]["asset"], keyof Coin>]: never; }) | undefined;
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
            } & { [K_12 in Exclude<keyof I_1["transfers"][number]["id"], keyof Long.Long>]: never; }) | undefined;
            state?: TransferState | undefined;
        } & { [K_13 in Exclude<keyof I_1["transfers"][number], keyof CrossChainTransfer>]: never; })[] & { [K_14 in Exclude<keyof I_1["transfers"], keyof {
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            id?: string | number | Long.Long | undefined;
            state?: TransferState | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Buffer | undefined;
            total?: string | number | Long.Long | undefined;
        } & {
            nextKey?: Buffer | undefined;
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
            } & { [K_15 in Exclude<keyof I_1["pagination"]["total"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof TransfersForChainResponse>]: never; }>(object: I_1): TransfersForChainResponse;
};
export declare const FeeInfoRequest: {
    encode(message: FeeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeeInfoRequest;
    fromJSON(object: any): FeeInfoRequest;
    toJSON(message: FeeInfoRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        asset?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: string | undefined;
    } & { [K in Exclude<keyof I, keyof FeeInfoRequest>]: never; }>(base?: I | undefined): FeeInfoRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        asset?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof FeeInfoRequest>]: never; }>(object: I_1): FeeInfoRequest;
};
export declare const FeeInfoResponse: {
    encode(message: FeeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeeInfoResponse;
    fromJSON(object: any): FeeInfoResponse;
    toJSON(message: FeeInfoResponse): unknown;
    create<I extends {
        feeInfo?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } | undefined;
    } & {
        feeInfo?: ({
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & { [K in Exclude<keyof I["feeInfo"], keyof FeeInfo>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "feeInfo">]: never; }>(base?: I | undefined): FeeInfoResponse;
    fromPartial<I_1 extends {
        feeInfo?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } | undefined;
    } & {
        feeInfo?: ({
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["feeInfo"], keyof FeeInfo>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "feeInfo">]: never; }>(object: I_1): FeeInfoResponse;
};
export declare const TransferFeeRequest: {
    encode(message: TransferFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferFeeRequest;
    fromJSON(object: any): TransferFeeRequest;
    toJSON(message: TransferFeeRequest): unknown;
    create<I extends {
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
        amount?: string | undefined;
    } & {
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof TransferFeeRequest>]: never; }>(base?: I | undefined): TransferFeeRequest;
    fromPartial<I_1 extends {
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
        amount?: string | undefined;
    } & {
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
        amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TransferFeeRequest>]: never; }>(object: I_1): TransferFeeRequest;
};
export declare const TransferFeeResponse: {
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
        } & { [K in Exclude<keyof I["fee"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "fee">]: never; }>(base?: I | undefined): TransferFeeResponse;
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
        } & { [K_2 in Exclude<keyof I_1["fee"], keyof Coin>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "fee">]: never; }>(object: I_1): TransferFeeResponse;
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
export declare const AssetsRequest: {
    encode(message: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsRequest;
    fromJSON(object: any): AssetsRequest;
    toJSON(message: AssetsRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "chain">]: never; }>(base?: I | undefined): AssetsRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "chain">]: never; }>(object: I_1): AssetsRequest;
};
export declare const AssetsResponse: {
    encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsResponse;
    fromJSON(object: any): AssetsResponse;
    toJSON(message: AssetsResponse): unknown;
    create<I extends {
        assets?: string[] | undefined;
    } & {
        assets?: (string[] & string[] & { [K in Exclude<keyof I["assets"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "assets">]: never; }>(base?: I | undefined): AssetsResponse;
    fromPartial<I_1 extends {
        assets?: string[] | undefined;
    } & {
        assets?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["assets"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "assets">]: never; }>(object: I_1): AssetsResponse;
};
export declare const ChainStateRequest: {
    encode(message: ChainStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainStateRequest;
    fromJSON(object: any): ChainStateRequest;
    toJSON(message: ChainStateRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "chain">]: never; }>(base?: I | undefined): ChainStateRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "chain">]: never; }>(object: I_1): ChainStateRequest;
};
export declare const ChainStateResponse: {
    encode(message: ChainStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainStateResponse;
    fromJSON(object: any): ChainStateResponse;
    toJSON(message: ChainStateResponse): unknown;
    create<I extends {
        state?: {
            chain?: {
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } | undefined;
            activated?: boolean | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            maintainerStates?: {
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        state?: ({
            chain?: {
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } | undefined;
            activated?: boolean | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            maintainerStates?: {
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[] | undefined;
        } & {
            chain?: ({
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } & {
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } & { [K in Exclude<keyof I["state"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
            activated?: boolean | undefined;
            assets?: ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] & ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & { [K_1 in Exclude<keyof I["state"]["assets"][number], keyof import("../exported/v1beta1/types").Asset>]: never; })[] & { [K_2 in Exclude<keyof I["state"]["assets"], keyof {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[]>]: never; }) | undefined;
            maintainerStates?: ({
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[] & ({
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            } & {
                address?: Buffer | undefined;
                missingVotes?: ({
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & {
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
                        } & { [K_3 in Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>]: never; }))[] & { [K_4 in Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & { [K_5 in Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["state"]["maintainerStates"][number]["missingVotes"], "trueCountCache">]: never; }) | undefined;
                incorrectVotes?: ({
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & {
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
                        } & { [K_7 in Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>]: never; }))[] & { [K_8 in Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & { [K_9 in Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["state"]["maintainerStates"][number]["incorrectVotes"], "trueCountCache">]: never; }) | undefined;
                chain?: string | undefined;
            } & { [K_11 in Exclude<keyof I["state"]["maintainerStates"][number], keyof import("./types").MaintainerState>]: never; })[] & { [K_12 in Exclude<keyof I["state"]["maintainerStates"], keyof {
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["state"], keyof ChainState>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, "state">]: never; }>(base?: I | undefined): ChainStateResponse;
    fromPartial<I_1 extends {
        state?: {
            chain?: {
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } | undefined;
            activated?: boolean | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            maintainerStates?: {
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        state?: ({
            chain?: {
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } | undefined;
            activated?: boolean | undefined;
            assets?: {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] | undefined;
            maintainerStates?: {
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[] | undefined;
        } & {
            chain?: ({
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } & {
                name?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                module?: string | undefined;
            } & { [K_15 in Exclude<keyof I_1["state"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
            activated?: boolean | undefined;
            assets?: ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[] & ({
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            } & { [K_16 in Exclude<keyof I_1["state"]["assets"][number], keyof import("../exported/v1beta1/types").Asset>]: never; })[] & { [K_17 in Exclude<keyof I_1["state"]["assets"], keyof {
                denom?: string | undefined;
                isNativeAsset?: boolean | undefined;
            }[]>]: never; }) | undefined;
            maintainerStates?: ({
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[] & ({
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            } & {
                address?: Buffer | undefined;
                missingVotes?: ({
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & {
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
                        } & { [K_18 in Exclude<keyof I_1["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>]: never; }))[] & { [K_19 in Exclude<keyof I_1["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & { [K_20 in Exclude<keyof I_1["state"]["maintainerStates"][number]["missingVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>]: never; }) | undefined;
                } & { [K_21 in Exclude<keyof I_1["state"]["maintainerStates"][number]["missingVotes"], "trueCountCache">]: never; }) | undefined;
                incorrectVotes?: ({
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } & {
                    trueCountCache?: ({
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & {
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
                        } & { [K_22 in Exclude<keyof I_1["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>]: never; }))[] & { [K_23 in Exclude<keyof I_1["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & { [K_24 in Exclude<keyof I_1["state"]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>]: never; }) | undefined;
                } & { [K_25 in Exclude<keyof I_1["state"]["maintainerStates"][number]["incorrectVotes"], "trueCountCache">]: never; }) | undefined;
                chain?: string | undefined;
            } & { [K_26 in Exclude<keyof I_1["state"]["maintainerStates"][number], keyof import("./types").MaintainerState>]: never; })[] & { [K_27 in Exclude<keyof I_1["state"]["maintainerStates"], keyof {
                address?: Buffer | undefined;
                missingVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                incorrectVotes?: {
                    trueCountCache?: {
                        cumulativeValue?: (string | number | Long.Long)[] | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } | undefined;
                } | undefined;
                chain?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_28 in Exclude<keyof I_1["state"], keyof ChainState>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, "state">]: never; }>(object: I_1): ChainStateResponse;
};
export declare const ChainsByAssetRequest: {
    encode(message: ChainsByAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsByAssetRequest;
    fromJSON(object: any): ChainsByAssetRequest;
    toJSON(message: ChainsByAssetRequest): unknown;
    create<I extends {
        asset?: string | undefined;
    } & {
        asset?: string | undefined;
    } & { [K in Exclude<keyof I, "asset">]: never; }>(base?: I | undefined): ChainsByAssetRequest;
    fromPartial<I_1 extends {
        asset?: string | undefined;
    } & {
        asset?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "asset">]: never; }>(object: I_1): ChainsByAssetRequest;
};
export declare const ChainsByAssetResponse: {
    encode(message: ChainsByAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainsByAssetResponse;
    fromJSON(object: any): ChainsByAssetResponse;
    toJSON(message: ChainsByAssetResponse): unknown;
    create<I extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & { [K in Exclude<keyof I["chains"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "chains">]: never; }>(base?: I | undefined): ChainsByAssetResponse;
    fromPartial<I_1 extends {
        chains?: string[] | undefined;
    } & {
        chains?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["chains"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "chains">]: never; }>(object: I_1): ChainsByAssetResponse;
};
export declare const RecipientAddressRequest: {
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
    } & { [K in Exclude<keyof I, keyof RecipientAddressRequest>]: never; }>(base?: I | undefined): RecipientAddressRequest;
    fromPartial<I_1 extends {
        depositAddr?: string | undefined;
        depositChain?: string | undefined;
    } & {
        depositAddr?: string | undefined;
        depositChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RecipientAddressRequest>]: never; }>(object: I_1): RecipientAddressRequest;
};
export declare const RecipientAddressResponse: {
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
    } & { [K in Exclude<keyof I, keyof RecipientAddressResponse>]: never; }>(base?: I | undefined): RecipientAddressResponse;
    fromPartial<I_1 extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RecipientAddressResponse>]: never; }>(object: I_1): RecipientAddressResponse;
};
export declare const TransferRateLimitRequest: {
    encode(message: TransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferRateLimitRequest;
    fromJSON(object: any): TransferRateLimitRequest;
    toJSON(message: TransferRateLimitRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        asset?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: string | undefined;
    } & { [K in Exclude<keyof I, keyof TransferRateLimitRequest>]: never; }>(base?: I | undefined): TransferRateLimitRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        asset?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TransferRateLimitRequest>]: never; }>(object: I_1): TransferRateLimitRequest;
};
export declare const TransferRateLimitResponse: {
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
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            from?: Buffer | undefined;
            to?: Buffer | undefined;
        } | undefined;
    } & {
        transferRateLimit?: ({
            limit?: Buffer | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            from?: Buffer | undefined;
            to?: Buffer | undefined;
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
                } & { [K in Exclude<keyof I["transferRateLimit"]["window"]["seconds"], keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_1 in Exclude<keyof I["transferRateLimit"]["window"], keyof Duration>]: never; }) | undefined;
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
                } & { [K_2 in Exclude<keyof I["transferRateLimit"]["timeLeft"]["seconds"], keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_3 in Exclude<keyof I["transferRateLimit"]["timeLeft"], keyof Duration>]: never; }) | undefined;
            from?: Buffer | undefined;
            to?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I["transferRateLimit"], keyof TransferRateLimit>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "transferRateLimit">]: never; }>(base?: I | undefined): TransferRateLimitResponse;
    fromPartial<I_1 extends {
        transferRateLimit?: {
            limit?: Buffer | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            from?: Buffer | undefined;
            to?: Buffer | undefined;
        } | undefined;
    } & {
        transferRateLimit?: ({
            limit?: Buffer | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            incoming?: Buffer | undefined;
            outgoing?: Buffer | undefined;
            timeLeft?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            from?: Buffer | undefined;
            to?: Buffer | undefined;
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
                } & { [K_6 in Exclude<keyof I_1["transferRateLimit"]["window"]["seconds"], keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_7 in Exclude<keyof I_1["transferRateLimit"]["window"], keyof Duration>]: never; }) | undefined;
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
                } & { [K_8 in Exclude<keyof I_1["transferRateLimit"]["timeLeft"]["seconds"], keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_9 in Exclude<keyof I_1["transferRateLimit"]["timeLeft"], keyof Duration>]: never; }) | undefined;
            from?: Buffer | undefined;
            to?: Buffer | undefined;
        } & { [K_10 in Exclude<keyof I_1["transferRateLimit"], keyof TransferRateLimit>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "transferRateLimit">]: never; }>(object: I_1): TransferRateLimitResponse;
};
export declare const TransferRateLimit: {
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
        incoming?: Buffer | undefined;
        outgoing?: Buffer | undefined;
        timeLeft?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        from?: Buffer | undefined;
        to?: Buffer | undefined;
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
            } & { [K in Exclude<keyof I["window"]["seconds"], keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_1 in Exclude<keyof I["window"], keyof Duration>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["timeLeft"]["seconds"], keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_3 in Exclude<keyof I["timeLeft"], keyof Duration>]: never; }) | undefined;
        from?: Buffer | undefined;
        to?: Buffer | undefined;
    } & { [K_4 in Exclude<keyof I, keyof TransferRateLimit>]: never; }>(base?: I | undefined): TransferRateLimit;
    fromPartial<I_1 extends {
        limit?: Buffer | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        incoming?: Buffer | undefined;
        outgoing?: Buffer | undefined;
        timeLeft?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        from?: Buffer | undefined;
        to?: Buffer | undefined;
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
            } & { [K_5 in Exclude<keyof I_1["window"]["seconds"], keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["window"], keyof Duration>]: never; }) | undefined;
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
            } & { [K_7 in Exclude<keyof I_1["timeLeft"]["seconds"], keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_8 in Exclude<keyof I_1["timeLeft"], keyof Duration>]: never; }) | undefined;
        from?: Buffer | undefined;
        to?: Buffer | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof TransferRateLimit>]: never; }>(object: I_1): TransferRateLimit;
};
export declare const MessageRequest: {
    encode(message: MessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageRequest;
    fromJSON(object: any): MessageRequest;
    toJSON(message: MessageRequest): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): MessageRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): MessageRequest;
};
export declare const MessageResponse: {
    encode(message: MessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageResponse;
    fromJSON(object: any): MessageResponse;
    toJSON(message: MessageResponse): unknown;
    create<I extends {
        message?: {
            id?: string | undefined;
            sender?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        message?: ({
            id?: string | undefined;
            sender?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        } & {
            id?: string | undefined;
            sender?: ({
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } & {
                chain?: ({
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & { [K in Exclude<keyof I["message"]["sender"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_1 in Exclude<keyof I["message"]["sender"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            recipient?: ({
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } & {
                chain?: ({
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & { [K_2 in Exclude<keyof I["message"]["recipient"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_3 in Exclude<keyof I["message"]["recipient"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            payloadHash?: Buffer | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_4 in Exclude<keyof I["message"]["asset"], keyof Coin>]: never; }) | undefined;
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
            } & { [K_5 in Exclude<keyof I["message"]["sourceTxIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["message"], keyof GeneralMessage>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, "message">]: never; }>(base?: I | undefined): MessageResponse;
    fromPartial<I_1 extends {
        message?: {
            id?: string | undefined;
            sender?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        message?: ({
            id?: string | undefined;
            sender?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipient?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            asset?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        } & {
            id?: string | undefined;
            sender?: ({
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } & {
                chain?: ({
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & { [K_8 in Exclude<keyof I_1["message"]["sender"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_9 in Exclude<keyof I_1["message"]["sender"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            recipient?: ({
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } & {
                chain?: ({
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } & { [K_10 in Exclude<keyof I_1["message"]["recipient"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_11 in Exclude<keyof I_1["message"]["recipient"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            payloadHash?: Buffer | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_12 in Exclude<keyof I_1["message"]["asset"], keyof Coin>]: never; }) | undefined;
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
            } & { [K_13 in Exclude<keyof I_1["message"]["sourceTxIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I_1["message"], keyof GeneralMessage>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): MessageResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends {
        params?: {
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
            gateway?: Buffer | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        params?: ({
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
            gateway?: Buffer | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
        } & {
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
                } & { [K in Exclude<keyof I["params"]["chainActivationThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_1 in Exclude<keyof I["params"]["chainActivationThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["params"]["chainActivationThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
                } & { [K_3 in Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_4 in Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
                } & { [K_6 in Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_7 in Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
            chainMaintainerCheckWindow?: number | undefined;
            gateway?: Buffer | undefined;
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
        } & { [K_10 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, "params">]: never; }>(base?: I | undefined): ParamsResponse;
    fromPartial<I_1 extends {
        params?: {
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
            gateway?: Buffer | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        params?: ({
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
            gateway?: Buffer | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
        } & {
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
                } & { [K_12 in Exclude<keyof I_1["params"]["chainActivationThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_13 in Exclude<keyof I_1["params"]["chainActivationThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I_1["params"]["chainActivationThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
                } & { [K_15 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_16 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_17 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
                } & { [K_18 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_19 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
            chainMaintainerCheckWindow?: number | undefined;
            gateway?: Buffer | undefined;
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
            } & { [K_21 in Exclude<keyof I_1["params"]["endBlockerLimit"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_22 in Exclude<keyof I_1["params"], keyof Params>]: never; }) | undefined;
    } & { [K_23 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): ParamsResponse;
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
