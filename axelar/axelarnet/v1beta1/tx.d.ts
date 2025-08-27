/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Asset, Chain } from "../../nexus/exported/v1beta1/types";
import { Fee } from "./types";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequest {
    recipientAddr: string;
    recipientChain: string;
    asset: string;
    sender: string;
}
export interface LinkResponse {
    depositAddr: string;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequest {
    depositAddress: Buffer;
    denom: string;
    sender: string;
}
export interface ConfirmDepositResponse {
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequest {
    sender: string;
}
export interface ExecutePendingTransfersResponse {
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 *
 * @deprecated
 */
export interface RegisterIBCPathRequest {
    chain: string;
    path: string;
    sender: string;
}
export interface RegisterIBCPathResponse {
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequest {
    /**
     * chain was deprecated in v0.27
     *
     * @deprecated
     */
    chain?: Chain | undefined;
    addrPrefix: string;
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
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
    chain: string;
    asset?: Asset | undefined;
    limit: Buffer;
    window?: Duration | undefined;
    sender: string;
}
export interface RegisterAssetResponse {
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequest {
    sender: string;
}
export interface RouteIBCTransfersResponse {
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequest {
    feeCollector: Buffer;
    sender: string;
}
export interface RegisterFeeCollectorResponse {
}
export interface RetryIBCTransferRequest {
    /** @deprecated */
    chain: string;
    id: Long;
    sender: string;
}
export interface RetryIBCTransferResponse {
}
export interface RouteMessageRequest {
    id: string;
    payload: Buffer;
    feegranter: Buffer;
    sender: string;
}
export interface RouteMessageResponse {
}
export interface CallContractRequest {
    chain: string;
    contractAddress: string;
    payload: Buffer;
    fee?: Fee | undefined;
    sender: string;
}
export interface CallContractResponse {
}
export declare const LinkRequest: {
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    create<I extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        asset?: string | undefined;
        sender?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        asset?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof LinkRequest>]: never; }>(base?: I | undefined): LinkRequest;
    fromPartial<I_1 extends {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        asset?: string | undefined;
        sender?: string | undefined;
    } & {
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        asset?: string | undefined;
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
export declare const ConfirmDepositRequest: {
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    create<I extends {
        depositAddress?: Buffer | undefined;
        denom?: string | undefined;
        sender?: string | undefined;
    } & {
        depositAddress?: Buffer | undefined;
        denom?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ConfirmDepositRequest>]: never; }>(base?: I | undefined): ConfirmDepositRequest;
    fromPartial<I_1 extends {
        depositAddress?: Buffer | undefined;
        denom?: string | undefined;
        sender?: string | undefined;
    } & {
        depositAddress?: Buffer | undefined;
        denom?: string | undefined;
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
export declare const ExecutePendingTransfersRequest: {
    encode(message: ExecutePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecutePendingTransfersRequest;
    fromJSON(object: any): ExecutePendingTransfersRequest;
    toJSON(message: ExecutePendingTransfersRequest): unknown;
    create<I extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, "sender">]: never; }>(base?: I | undefined): ExecutePendingTransfersRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "sender">]: never; }>(object: I_1): ExecutePendingTransfersRequest;
};
export declare const ExecutePendingTransfersResponse: {
    encode(_: ExecutePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecutePendingTransfersResponse;
    fromJSON(_: any): ExecutePendingTransfersResponse;
    toJSON(_: ExecutePendingTransfersResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ExecutePendingTransfersResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ExecutePendingTransfersResponse;
};
export declare const RegisterIBCPathRequest: {
    encode(message: RegisterIBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterIBCPathRequest;
    fromJSON(object: any): RegisterIBCPathRequest;
    toJSON(message: RegisterIBCPathRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        path?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        path?: string | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RegisterIBCPathRequest>]: never; }>(base?: I | undefined): RegisterIBCPathRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        path?: string | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        path?: string | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RegisterIBCPathRequest>]: never; }>(object: I_1): RegisterIBCPathRequest;
};
export declare const RegisterIBCPathResponse: {
    encode(_: RegisterIBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterIBCPathResponse;
    fromJSON(_: any): RegisterIBCPathResponse;
    toJSON(_: RegisterIBCPathResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RegisterIBCPathResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RegisterIBCPathResponse;
};
export declare const AddCosmosBasedChainRequest: {
    encode(message: AddCosmosBasedChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddCosmosBasedChainRequest;
    fromJSON(object: any): AddCosmosBasedChainRequest;
    toJSON(message: AddCosmosBasedChainRequest): unknown;
    create<I extends {
        chain?: {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } | undefined;
        addrPrefix?: string | undefined;
        nativeAssets?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[] | undefined;
        cosmosChain?: string | undefined;
        ibcPath?: string | undefined;
        sender?: string | undefined;
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
        } & { [K in Exclude<keyof I["chain"], keyof Chain>]: never; }) | undefined;
        addrPrefix?: string | undefined;
        nativeAssets?: ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[] & ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["nativeAssets"][number], keyof Asset>]: never; })[] & { [K_2 in Exclude<keyof I["nativeAssets"], keyof {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[]>]: never; }) | undefined;
        cosmosChain?: string | undefined;
        ibcPath?: string | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof AddCosmosBasedChainRequest>]: never; }>(base?: I | undefined): AddCosmosBasedChainRequest;
    fromPartial<I_1 extends {
        chain?: {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } | undefined;
        addrPrefix?: string | undefined;
        nativeAssets?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[] | undefined;
        cosmosChain?: string | undefined;
        ibcPath?: string | undefined;
        sender?: string | undefined;
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
        } & { [K_4 in Exclude<keyof I_1["chain"], keyof Chain>]: never; }) | undefined;
        addrPrefix?: string | undefined;
        nativeAssets?: ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[] & ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I_1["nativeAssets"][number], keyof Asset>]: never; })[] & { [K_6 in Exclude<keyof I_1["nativeAssets"], keyof {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[]>]: never; }) | undefined;
        cosmosChain?: string | undefined;
        ibcPath?: string | undefined;
        sender?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof AddCosmosBasedChainRequest>]: never; }>(object: I_1): AddCosmosBasedChainRequest;
};
export declare const AddCosmosBasedChainResponse: {
    encode(_: AddCosmosBasedChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddCosmosBasedChainResponse;
    fromJSON(_: any): AddCosmosBasedChainResponse;
    toJSON(_: AddCosmosBasedChainResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): AddCosmosBasedChainResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): AddCosmosBasedChainResponse;
};
export declare const RegisterAssetRequest: {
    encode(message: RegisterAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetRequest;
    fromJSON(object: any): RegisterAssetRequest;
    toJSON(message: RegisterAssetRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        asset?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } | undefined;
        limit?: Buffer | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & { [K in Exclude<keyof I["asset"], keyof Asset>]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["window"]["seconds"], keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_2 in Exclude<keyof I["window"], keyof Duration>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof RegisterAssetRequest>]: never; }>(base?: I | undefined): RegisterAssetRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        asset?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } | undefined;
        limit?: Buffer | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        asset?: ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I_1["asset"], keyof Asset>]: never; }) | undefined;
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
        sender?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof RegisterAssetRequest>]: never; }>(object: I_1): RegisterAssetRequest;
};
export declare const RegisterAssetResponse: {
    encode(_: RegisterAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetResponse;
    fromJSON(_: any): RegisterAssetResponse;
    toJSON(_: RegisterAssetResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RegisterAssetResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RegisterAssetResponse;
};
export declare const RouteIBCTransfersRequest: {
    encode(message: RouteIBCTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteIBCTransfersRequest;
    fromJSON(object: any): RouteIBCTransfersRequest;
    toJSON(message: RouteIBCTransfersRequest): unknown;
    create<I extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, "sender">]: never; }>(base?: I | undefined): RouteIBCTransfersRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "sender">]: never; }>(object: I_1): RouteIBCTransfersRequest;
};
export declare const RouteIBCTransfersResponse: {
    encode(_: RouteIBCTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteIBCTransfersResponse;
    fromJSON(_: any): RouteIBCTransfersResponse;
    toJSON(_: RouteIBCTransfersResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RouteIBCTransfersResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RouteIBCTransfersResponse;
};
export declare const RegisterFeeCollectorRequest: {
    encode(message: RegisterFeeCollectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterFeeCollectorRequest;
    fromJSON(object: any): RegisterFeeCollectorRequest;
    toJSON(message: RegisterFeeCollectorRequest): unknown;
    create<I extends {
        feeCollector?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        feeCollector?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RegisterFeeCollectorRequest>]: never; }>(base?: I | undefined): RegisterFeeCollectorRequest;
    fromPartial<I_1 extends {
        feeCollector?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        feeCollector?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RegisterFeeCollectorRequest>]: never; }>(object: I_1): RegisterFeeCollectorRequest;
};
export declare const RegisterFeeCollectorResponse: {
    encode(_: RegisterFeeCollectorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterFeeCollectorResponse;
    fromJSON(_: any): RegisterFeeCollectorResponse;
    toJSON(_: RegisterFeeCollectorResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RegisterFeeCollectorResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RegisterFeeCollectorResponse;
};
export declare const RetryIBCTransferRequest: {
    encode(message: RetryIBCTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryIBCTransferRequest;
    fromJSON(object: any): RetryIBCTransferRequest;
    toJSON(message: RetryIBCTransferRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        id?: string | number | Long.Long | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
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
        } & { [K in Exclude<keyof I["id"], keyof Long.Long>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof RetryIBCTransferRequest>]: never; }>(base?: I | undefined): RetryIBCTransferRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        id?: string | number | Long.Long | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
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
        } & { [K_2 in Exclude<keyof I_1["id"], keyof Long.Long>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof RetryIBCTransferRequest>]: never; }>(object: I_1): RetryIBCTransferRequest;
};
export declare const RetryIBCTransferResponse: {
    encode(_: RetryIBCTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryIBCTransferResponse;
    fromJSON(_: any): RetryIBCTransferResponse;
    toJSON(_: RetryIBCTransferResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RetryIBCTransferResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RetryIBCTransferResponse;
};
export declare const RouteMessageRequest: {
    encode(message: RouteMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteMessageRequest;
    fromJSON(object: any): RouteMessageRequest;
    toJSON(message: RouteMessageRequest): unknown;
    create<I extends {
        id?: string | undefined;
        payload?: Buffer | undefined;
        feegranter?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        id?: string | undefined;
        payload?: Buffer | undefined;
        feegranter?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RouteMessageRequest>]: never; }>(base?: I | undefined): RouteMessageRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
        payload?: Buffer | undefined;
        feegranter?: Buffer | undefined;
        sender?: string | undefined;
    } & {
        id?: string | undefined;
        payload?: Buffer | undefined;
        feegranter?: Buffer | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RouteMessageRequest>]: never; }>(object: I_1): RouteMessageRequest;
};
export declare const RouteMessageResponse: {
    encode(_: RouteMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteMessageResponse;
    fromJSON(_: any): RouteMessageResponse;
    toJSON(_: RouteMessageResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RouteMessageResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RouteMessageResponse;
};
export declare const CallContractRequest: {
    encode(message: CallContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CallContractRequest;
    fromJSON(object: any): CallContractRequest;
    toJSON(message: CallContractRequest): unknown;
    create<I extends {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        fee?: {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        fee?: ({
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } & {
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["fee"]["amount"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } & { [K_1 in Exclude<keyof I["fee"], keyof Fee>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof CallContractRequest>]: never; }>(base?: I | undefined): CallContractRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        fee?: {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        fee?: ({
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } & {
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_3 in Exclude<keyof I_1["fee"]["amount"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I_1["fee"], keyof Fee>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof CallContractRequest>]: never; }>(object: I_1): CallContractRequest;
};
export declare const CallContractResponse: {
    encode(_: CallContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CallContractResponse;
    fromJSON(_: any): CallContractResponse;
    toJSON(_: CallContractResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): CallContractResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): CallContractResponse;
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
