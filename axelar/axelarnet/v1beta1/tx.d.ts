/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
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
    $type: "axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse";
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
    $type: "axelar.axelarnet.v1beta1.RegisterAssetRequest";
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
    feeCollector: Buffer;
    sender: string;
}
export interface RegisterFeeCollectorResponse {
    $type: "axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse";
}
export interface RetryIBCTransferRequest {
    $type: "axelar.axelarnet.v1beta1.RetryIBCTransferRequest";
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
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        asset?: string | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & {
        sender?: string | undefined;
        asset?: string | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "asset" | "recipientAddr" | "recipientChain">]: never; }>(base?: I | undefined): LinkRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        asset?: string | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & {
        sender?: string | undefined;
        asset?: string | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "asset" | "recipientAddr" | "recipientChain">]: never; }>(object: I_1): LinkRequest;
};
export declare const LinkResponse: {
    $type: "axelar.axelarnet.v1beta1.LinkResponse";
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
export declare const ConfirmDepositRequest: {
    $type: "axelar.axelarnet.v1beta1.ConfirmDepositRequest";
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        denom?: string | undefined;
        depositAddress?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        denom?: string | undefined;
        depositAddress?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "denom" | "depositAddress">]: never; }>(base?: I | undefined): ConfirmDepositRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        denom?: string | undefined;
        depositAddress?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        denom?: string | undefined;
        depositAddress?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "denom" | "depositAddress">]: never; }>(object: I_1): ConfirmDepositRequest;
};
export declare const ConfirmDepositResponse: {
    $type: "axelar.axelarnet.v1beta1.ConfirmDepositResponse";
    encode(_: ConfirmDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositResponse;
    fromJSON(_: any): ConfirmDepositResponse;
    toJSON(_: ConfirmDepositResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ConfirmDepositResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ConfirmDepositResponse;
};
export declare const ExecutePendingTransfersRequest: {
    $type: "axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest";
    encode(message: ExecutePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecutePendingTransfersRequest;
    fromJSON(object: any): ExecutePendingTransfersRequest;
    toJSON(message: ExecutePendingTransfersRequest): unknown;
    create<I extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender">]: never; }>(base?: I | undefined): ExecutePendingTransfersRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender">]: never; }>(object: I_1): ExecutePendingTransfersRequest;
};
export declare const ExecutePendingTransfersResponse: {
    $type: "axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse";
    encode(_: ExecutePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecutePendingTransfersResponse;
    fromJSON(_: any): ExecutePendingTransfersResponse;
    toJSON(_: ExecutePendingTransfersResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ExecutePendingTransfersResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ExecutePendingTransfersResponse;
};
export declare const RegisterIBCPathRequest: {
    $type: "axelar.axelarnet.v1beta1.RegisterIBCPathRequest";
    encode(message: RegisterIBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterIBCPathRequest;
    fromJSON(object: any): RegisterIBCPathRequest;
    toJSON(message: RegisterIBCPathRequest): unknown;
    create<I extends {
        path?: string | undefined;
        sender?: string | undefined;
        chain?: string | undefined;
    } & {
        path?: string | undefined;
        sender?: string | undefined;
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "path" | "sender" | "chain">]: never; }>(base?: I | undefined): RegisterIBCPathRequest;
    fromPartial<I_1 extends {
        path?: string | undefined;
        sender?: string | undefined;
        chain?: string | undefined;
    } & {
        path?: string | undefined;
        sender?: string | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "path" | "sender" | "chain">]: never; }>(object: I_1): RegisterIBCPathRequest;
};
export declare const RegisterIBCPathResponse: {
    $type: "axelar.axelarnet.v1beta1.RegisterIBCPathResponse";
    encode(_: RegisterIBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterIBCPathResponse;
    fromJSON(_: any): RegisterIBCPathResponse;
    toJSON(_: RegisterIBCPathResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RegisterIBCPathResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RegisterIBCPathResponse;
};
export declare const AddCosmosBasedChainRequest: {
    $type: "axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest";
    encode(message: AddCosmosBasedChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddCosmosBasedChainRequest;
    fromJSON(object: any): AddCosmosBasedChainRequest;
    toJSON(message: AddCosmosBasedChainRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        chain?: {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        } | undefined;
        ibcPath?: string | undefined;
        addrPrefix?: string | undefined;
        nativeAssets?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[] | undefined;
        cosmosChain?: string | undefined;
    } & {
        sender?: string | undefined;
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
        } & { [K in Exclude<keyof I["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        ibcPath?: string | undefined;
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
        } & { [K_1 in Exclude<keyof I["nativeAssets"][number], "$type" | "denom" | "isNativeAsset">]: never; })[] & { [K_2 in Exclude<keyof I["nativeAssets"], "$type" | keyof {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[]>]: never; }) | undefined;
        cosmosChain?: string | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "sender" | "chain" | "ibcPath" | "addrPrefix" | "nativeAssets" | "cosmosChain">]: never; }>(base?: I | undefined): AddCosmosBasedChainRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        chain?: {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        } | undefined;
        ibcPath?: string | undefined;
        addrPrefix?: string | undefined;
        nativeAssets?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[] | undefined;
        cosmosChain?: string | undefined;
    } & {
        sender?: string | undefined;
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
        } & { [K_4 in Exclude<keyof I_1["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        ibcPath?: string | undefined;
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
        } & { [K_5 in Exclude<keyof I_1["nativeAssets"][number], "$type" | "denom" | "isNativeAsset">]: never; })[] & { [K_6 in Exclude<keyof I_1["nativeAssets"], "$type" | keyof {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        }[]>]: never; }) | undefined;
        cosmosChain?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "sender" | "chain" | "ibcPath" | "addrPrefix" | "nativeAssets" | "cosmosChain">]: never; }>(object: I_1): AddCosmosBasedChainRequest;
};
export declare const AddCosmosBasedChainResponse: {
    $type: "axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse";
    encode(_: AddCosmosBasedChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddCosmosBasedChainResponse;
    fromJSON(_: any): AddCosmosBasedChainResponse;
    toJSON(_: AddCosmosBasedChainResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): AddCosmosBasedChainResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): AddCosmosBasedChainResponse;
};
export declare const RegisterAssetRequest: {
    $type: "axelar.axelarnet.v1beta1.RegisterAssetRequest";
    encode(message: RegisterAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetRequest;
    fromJSON(object: any): RegisterAssetRequest;
    toJSON(message: RegisterAssetRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        limit?: Buffer | undefined;
        asset?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } | undefined;
        chain?: string | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        limit?: Buffer | undefined;
        asset?: ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & { [K in Exclude<keyof I["asset"], "$type" | "denom" | "isNativeAsset">]: never; }) | undefined;
        chain?: string | undefined;
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
            } & { [K_1 in Exclude<keyof I["window"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_2 in Exclude<keyof I["window"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "sender" | "limit" | "asset" | "chain" | "window">]: never; }>(base?: I | undefined): RegisterAssetRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        limit?: Buffer | undefined;
        asset?: {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } | undefined;
        chain?: string | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        limit?: Buffer | undefined;
        asset?: ({
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            isNativeAsset?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I_1["asset"], "$type" | "denom" | "isNativeAsset">]: never; }) | undefined;
        chain?: string | undefined;
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
    } & { [K_7 in Exclude<keyof I_1, "$type" | "sender" | "limit" | "asset" | "chain" | "window">]: never; }>(object: I_1): RegisterAssetRequest;
};
export declare const RegisterAssetResponse: {
    $type: "axelar.axelarnet.v1beta1.RegisterAssetResponse";
    encode(_: RegisterAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetResponse;
    fromJSON(_: any): RegisterAssetResponse;
    toJSON(_: RegisterAssetResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RegisterAssetResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RegisterAssetResponse;
};
export declare const RouteIBCTransfersRequest: {
    $type: "axelar.axelarnet.v1beta1.RouteIBCTransfersRequest";
    encode(message: RouteIBCTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteIBCTransfersRequest;
    fromJSON(object: any): RouteIBCTransfersRequest;
    toJSON(message: RouteIBCTransfersRequest): unknown;
    create<I extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender">]: never; }>(base?: I | undefined): RouteIBCTransfersRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender">]: never; }>(object: I_1): RouteIBCTransfersRequest;
};
export declare const RouteIBCTransfersResponse: {
    $type: "axelar.axelarnet.v1beta1.RouteIBCTransfersResponse";
    encode(_: RouteIBCTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteIBCTransfersResponse;
    fromJSON(_: any): RouteIBCTransfersResponse;
    toJSON(_: RouteIBCTransfersResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RouteIBCTransfersResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RouteIBCTransfersResponse;
};
export declare const RegisterFeeCollectorRequest: {
    $type: "axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest";
    encode(message: RegisterFeeCollectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterFeeCollectorRequest;
    fromJSON(object: any): RegisterFeeCollectorRequest;
    toJSON(message: RegisterFeeCollectorRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        feeCollector?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        feeCollector?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "feeCollector">]: never; }>(base?: I | undefined): RegisterFeeCollectorRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        feeCollector?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        feeCollector?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "feeCollector">]: never; }>(object: I_1): RegisterFeeCollectorRequest;
};
export declare const RegisterFeeCollectorResponse: {
    $type: "axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse";
    encode(_: RegisterFeeCollectorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterFeeCollectorResponse;
    fromJSON(_: any): RegisterFeeCollectorResponse;
    toJSON(_: RegisterFeeCollectorResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RegisterFeeCollectorResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RegisterFeeCollectorResponse;
};
export declare const RetryIBCTransferRequest: {
    $type: "axelar.axelarnet.v1beta1.RetryIBCTransferRequest";
    encode(message: RetryIBCTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryIBCTransferRequest;
    fromJSON(object: any): RetryIBCTransferRequest;
    toJSON(message: RetryIBCTransferRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        id?: string | number | Long.Long | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
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
        } & { [K in Exclude<keyof I["id"], "$type" | keyof Long.Long>]: never; }) | undefined;
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "sender" | "id" | "chain">]: never; }>(base?: I | undefined): RetryIBCTransferRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        id?: string | number | Long.Long | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
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
        } & { [K_2 in Exclude<keyof I_1["id"], "$type" | keyof Long.Long>]: never; }) | undefined;
        chain?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "sender" | "id" | "chain">]: never; }>(object: I_1): RetryIBCTransferRequest;
};
export declare const RetryIBCTransferResponse: {
    $type: "axelar.axelarnet.v1beta1.RetryIBCTransferResponse";
    encode(_: RetryIBCTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryIBCTransferResponse;
    fromJSON(_: any): RetryIBCTransferResponse;
    toJSON(_: RetryIBCTransferResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RetryIBCTransferResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RetryIBCTransferResponse;
};
export declare const RouteMessageRequest: {
    $type: "axelar.axelarnet.v1beta1.RouteMessageRequest";
    encode(message: RouteMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteMessageRequest;
    fromJSON(object: any): RouteMessageRequest;
    toJSON(message: RouteMessageRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        id?: string | undefined;
        payload?: Buffer | undefined;
        feegranter?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        id?: string | undefined;
        payload?: Buffer | undefined;
        feegranter?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "id" | "payload" | "feegranter">]: never; }>(base?: I | undefined): RouteMessageRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        id?: string | undefined;
        payload?: Buffer | undefined;
        feegranter?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        id?: string | undefined;
        payload?: Buffer | undefined;
        feegranter?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "id" | "payload" | "feegranter">]: never; }>(object: I_1): RouteMessageRequest;
};
export declare const RouteMessageResponse: {
    $type: "axelar.axelarnet.v1beta1.RouteMessageResponse";
    encode(_: RouteMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteMessageResponse;
    fromJSON(_: any): RouteMessageResponse;
    toJSON(_: RouteMessageResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RouteMessageResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RouteMessageResponse;
};
export declare const CallContractRequest: {
    $type: "axelar.axelarnet.v1beta1.CallContractRequest";
    encode(message: CallContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CallContractRequest;
    fromJSON(object: any): CallContractRequest;
    toJSON(message: CallContractRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        fee?: {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
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
            } & { [K in Exclude<keyof I["fee"]["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } & { [K_1 in Exclude<keyof I["fee"], "$type" | "amount" | "recipient" | "refundRecipient">]: never; }) | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "sender" | "fee" | "contractAddress" | "payload" | "chain">]: never; }>(base?: I | undefined): CallContractRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        fee?: {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        chain?: string | undefined;
    } & {
        sender?: string | undefined;
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
            } & { [K_3 in Exclude<keyof I_1["fee"]["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: Buffer | undefined;
            refundRecipient?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I_1["fee"], "$type" | "amount" | "recipient" | "refundRecipient">]: never; }) | undefined;
        contractAddress?: string | undefined;
        payload?: Buffer | undefined;
        chain?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "sender" | "fee" | "contractAddress" | "payload" | "chain">]: never; }>(object: I_1): CallContractRequest;
};
export declare const CallContractResponse: {
    $type: "axelar.axelarnet.v1beta1.CallContractResponse";
    encode(_: CallContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CallContractResponse;
    fromJSON(_: any): CallContractResponse;
    toJSON(_: CallContractResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): CallContractResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): CallContractResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.axelarnet.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends {
        params?: {
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        params?: ({
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            routeTimeoutWindow?: string | number | (Long.Long & {
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
            } & { [K in Exclude<keyof I["params"]["routeTimeoutWindow"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            callContractsProposalMinDeposits?: ({
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_3 in Exclude<keyof I["params"]["callContractsProposalMinDeposits"][number]["minDeposits"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_4 in Exclude<keyof I["params"]["callContractsProposalMinDeposits"][number]["minDeposits"], "$type" | keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["params"]["callContractsProposalMinDeposits"][number], "$type" | "contractAddress" | "chain" | "minDeposits">]: never; })[] & { [K_6 in Exclude<keyof I["params"]["callContractsProposalMinDeposits"], "$type" | keyof {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["params"], "$type" | "routeTimeoutWindow" | "transferLimit" | "endBlockerLimit" | "callContractsProposalMinDeposits">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_8 in Exclude<keyof I, "$type" | "params" | "authority">]: never; }>(base?: I | undefined): UpdateParamsRequest;
    fromPartial<I_1 extends {
        params?: {
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        params?: ({
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            routeTimeoutWindow?: string | number | (Long.Long & {
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
            } & { [K_9 in Exclude<keyof I_1["params"]["routeTimeoutWindow"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_10 in Exclude<keyof I_1["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_11 in Exclude<keyof I_1["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            callContractsProposalMinDeposits?: ({
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_12 in Exclude<keyof I_1["params"]["callContractsProposalMinDeposits"][number]["minDeposits"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_13 in Exclude<keyof I_1["params"]["callContractsProposalMinDeposits"][number]["minDeposits"], "$type" | keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I_1["params"]["callContractsProposalMinDeposits"][number], "$type" | "contractAddress" | "chain" | "minDeposits">]: never; })[] & { [K_15 in Exclude<keyof I_1["params"]["callContractsProposalMinDeposits"], "$type" | keyof {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I_1["params"], "$type" | "routeTimeoutWindow" | "transferLimit" | "endBlockerLimit" | "callContractsProposalMinDeposits">]: never; }) | undefined;
        authority?: string | undefined;
    } & { [K_17 in Exclude<keyof I_1, "$type" | "params" | "authority">]: never; }>(object: I_1): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.axelarnet.v1beta1.UpdateParamsResponse";
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
