/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Bitmap } from "../../utils/v1beta1/bitmap";
import { Asset, Chain, CrossChainAddress, TransferDirection } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface MaintainerState {
    $type: "axelar.nexus.v1beta1.MaintainerState";
    address: Buffer;
    missingVotes?: Bitmap | undefined;
    incorrectVotes?: Bitmap | undefined;
    chain: string;
}
/** ChainState represents the state of a registered blockchain */
export interface ChainState {
    $type: "axelar.nexus.v1beta1.ChainState";
    chain?: Chain | undefined;
    activated: boolean;
    assets: Asset[];
    /** @deprecated */
    maintainerStates: MaintainerState[];
}
export interface LinkedAddresses {
    $type: "axelar.nexus.v1beta1.LinkedAddresses";
    depositAddress?: CrossChainAddress | undefined;
    recipientAddress?: CrossChainAddress | undefined;
}
export interface RateLimit {
    $type: "axelar.nexus.v1beta1.RateLimit";
    chain: string;
    limit?: Coin | undefined;
    window?: Duration | undefined;
}
export interface TransferEpoch {
    $type: "axelar.nexus.v1beta1.TransferEpoch";
    chain: string;
    amount?: Coin | undefined;
    epoch: Long;
    /** indicates whether the rate tracking is for transfers going */
    direction: TransferDirection;
}
export declare const MaintainerState: {
    $type: "axelar.nexus.v1beta1.MaintainerState";
    encode(message: MaintainerState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MaintainerState;
    fromJSON(object: any): MaintainerState;
    toJSON(message: MaintainerState): unknown;
    create<I extends {
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
                } & { [K in Exclude<keyof I["missingVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_1 in Exclude<keyof I["missingVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                maxSize?: number | undefined;
            } & { [K_2 in Exclude<keyof I["missingVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["missingVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
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
                } & { [K_4 in Exclude<keyof I["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_5 in Exclude<keyof I["incorrectVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                maxSize?: number | undefined;
            } & { [K_6 in Exclude<keyof I["incorrectVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["incorrectVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, "$type" | "address" | "chain" | "missingVotes" | "incorrectVotes">]: never; }>(base?: I | undefined): MaintainerState;
    fromPartial<I_1 extends {
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
                } & { [K_9 in Exclude<keyof I_1["missingVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_10 in Exclude<keyof I_1["missingVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                maxSize?: number | undefined;
            } & { [K_11 in Exclude<keyof I_1["missingVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I_1["missingVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
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
                } & { [K_13 in Exclude<keyof I_1["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_14 in Exclude<keyof I_1["incorrectVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                maxSize?: number | undefined;
            } & { [K_15 in Exclude<keyof I_1["incorrectVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I_1["incorrectVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, "$type" | "address" | "chain" | "missingVotes" | "incorrectVotes">]: never; }>(object: I_1): MaintainerState;
};
export declare const ChainState: {
    $type: "axelar.nexus.v1beta1.ChainState";
    encode(message: ChainState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainState;
    fromJSON(object: any): ChainState;
    toJSON(message: ChainState): unknown;
    create<I extends {
        chain?: {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        } | undefined;
        assets?: {
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
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
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        } & {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        } & { [K in Exclude<keyof I["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        assets?: ({
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
            isNativeAsset?: boolean | undefined;
        }[] & ({
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
            isNativeAsset?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["assets"][number], "$type" | "denom" | "minAmountDeprecated" | "isNativeAsset">]: never; })[] & { [K_2 in Exclude<keyof I["assets"], "$type" | keyof {
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
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
                    } & { [K_3 in Exclude<keyof I["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_4 in Exclude<keyof I["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                    maxSize?: number | undefined;
                } & { [K_5 in Exclude<keyof I["maintainerStates"][number]["missingVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["maintainerStates"][number]["missingVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
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
                    } & { [K_7 in Exclude<keyof I["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_8 in Exclude<keyof I["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                    maxSize?: number | undefined;
                } & { [K_9 in Exclude<keyof I["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["maintainerStates"][number]["incorrectVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["maintainerStates"][number], "$type" | "address" | "chain" | "missingVotes" | "incorrectVotes">]: never; })[] & { [K_12 in Exclude<keyof I["maintainerStates"], "$type" | keyof {
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
    } & { [K_13 in Exclude<keyof I, "$type" | "chain" | "assets" | "activated" | "maintainerStates">]: never; }>(base?: I | undefined): ChainState;
    fromPartial<I_1 extends {
        chain?: {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        } | undefined;
        assets?: {
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
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
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        } & {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        } & { [K_14 in Exclude<keyof I_1["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        assets?: ({
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
            isNativeAsset?: boolean | undefined;
        }[] & ({
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
            isNativeAsset?: boolean | undefined;
        } & { [K_15 in Exclude<keyof I_1["assets"][number], "$type" | "denom" | "minAmountDeprecated" | "isNativeAsset">]: never; })[] & { [K_16 in Exclude<keyof I_1["assets"], "$type" | keyof {
            denom?: string | undefined;
            minAmountDeprecated?: Buffer | undefined;
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
                    } & { [K_17 in Exclude<keyof I_1["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_18 in Exclude<keyof I_1["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                    maxSize?: number | undefined;
                } & { [K_19 in Exclude<keyof I_1["maintainerStates"][number]["missingVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I_1["maintainerStates"][number]["missingVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
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
                    } & { [K_21 in Exclude<keyof I_1["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_22 in Exclude<keyof I_1["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                    maxSize?: number | undefined;
                } & { [K_23 in Exclude<keyof I_1["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
            } & { [K_24 in Exclude<keyof I_1["maintainerStates"][number]["incorrectVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
        } & { [K_25 in Exclude<keyof I_1["maintainerStates"][number], "$type" | "address" | "chain" | "missingVotes" | "incorrectVotes">]: never; })[] & { [K_26 in Exclude<keyof I_1["maintainerStates"], "$type" | keyof {
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
    } & { [K_27 in Exclude<keyof I_1, "$type" | "chain" | "assets" | "activated" | "maintainerStates">]: never; }>(object: I_1): ChainState;
};
export declare const LinkedAddresses: {
    $type: "axelar.nexus.v1beta1.LinkedAddresses";
    encode(message: LinkedAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkedAddresses;
    fromJSON(object: any): LinkedAddresses;
    toJSON(message: LinkedAddresses): unknown;
    create<I extends {
        depositAddress?: {
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } | undefined;
        recipientAddress?: {
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        depositAddress?: ({
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } & {
            address?: string | undefined;
            chain?: ({
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & { [K in Exclude<keyof I["depositAddress"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["depositAddress"], "$type" | "address" | "chain">]: never; }) | undefined;
        recipientAddress?: ({
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } & {
            address?: string | undefined;
            chain?: ({
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & { [K_2 in Exclude<keyof I["recipientAddress"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["recipientAddress"], "$type" | "address" | "chain">]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "$type" | "depositAddress" | "recipientAddress">]: never; }>(base?: I | undefined): LinkedAddresses;
    fromPartial<I_1 extends {
        depositAddress?: {
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } | undefined;
        recipientAddress?: {
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        depositAddress?: ({
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } & {
            address?: string | undefined;
            chain?: ({
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & { [K_5 in Exclude<keyof I_1["depositAddress"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["depositAddress"], "$type" | "address" | "chain">]: never; }) | undefined;
        recipientAddress?: ({
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } & {
            address?: string | undefined;
            chain?: ({
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                nativeAssetDeprecated?: string | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["recipientAddress"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I_1["recipientAddress"], "$type" | "address" | "chain">]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "$type" | "depositAddress" | "recipientAddress">]: never; }>(object: I_1): LinkedAddresses;
};
export declare const RateLimit: {
    $type: "axelar.nexus.v1beta1.RateLimit";
    encode(message: RateLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RateLimit;
    fromJSON(object: any): RateLimit;
    toJSON(message: RateLimit): unknown;
    create<I extends {
        limit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        chain?: string | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        limit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["limit"], "$type" | "denom" | "amount">]: never; }) | undefined;
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
    } & { [K_3 in Exclude<keyof I, "$type" | "limit" | "chain" | "window">]: never; }>(base?: I | undefined): RateLimit;
    fromPartial<I_1 extends {
        limit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        chain?: string | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        limit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["limit"], "$type" | "denom" | "amount">]: never; }) | undefined;
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
    } & { [K_7 in Exclude<keyof I_1, "$type" | "limit" | "chain" | "window">]: never; }>(object: I_1): RateLimit;
};
export declare const TransferEpoch: {
    $type: "axelar.nexus.v1beta1.TransferEpoch";
    encode(message: TransferEpoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferEpoch;
    fromJSON(object: any): TransferEpoch;
    toJSON(message: TransferEpoch): unknown;
    create<I extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        chain?: string | undefined;
        epoch?: string | number | Long.Long | undefined;
        direction?: TransferDirection | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
        chain?: string | undefined;
        epoch?: string | number | (Long.Long & {
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
        } & { [K_1 in Exclude<keyof I["epoch"], "$type" | keyof Long.Long>]: never; }) | undefined;
        direction?: TransferDirection | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "amount" | "chain" | "epoch" | "direction">]: never; }>(base?: I | undefined): TransferEpoch;
    fromPartial<I_1 extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        chain?: string | undefined;
        epoch?: string | number | Long.Long | undefined;
        direction?: TransferDirection | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
        chain?: string | undefined;
        epoch?: string | number | (Long.Long & {
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
        } & { [K_4 in Exclude<keyof I_1["epoch"], "$type" | keyof Long.Long>]: never; }) | undefined;
        direction?: TransferDirection | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "amount" | "chain" | "epoch" | "direction">]: never; }>(object: I_1): TransferEpoch;
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
