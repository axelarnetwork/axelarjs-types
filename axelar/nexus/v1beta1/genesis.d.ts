import Long from "long";
import _m0 from "protobufjs/minimal";
import { Chain, CrossChainTransfer, FeeInfo, GeneralMessage, TransferFee } from "../exported/v1beta1/types";
import { Params } from "./params";
import { ChainState, LinkedAddresses, RateLimit, TransferEpoch } from "./types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params?: Params | undefined;
    nonce: Long;
    chains: Chain[];
    chainStates: ChainState[];
    linkedAddresses: LinkedAddresses[];
    transfers: CrossChainTransfer[];
    fee?: TransferFee | undefined;
    feeInfos: FeeInfo[];
    rateLimits: RateLimit[];
    transferEpochs: TransferEpoch[];
    messages: GeneralMessage[];
    messageNonce: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
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
        nonce?: string | number | Long.Long | undefined;
        chains?: {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        }[] | undefined;
        chainStates?: {
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
        }[] | undefined;
        linkedAddresses?: {
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        }[] | undefined;
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
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        }[] | undefined;
        fee?: {
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
        feeInfos?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[] | undefined;
        rateLimits?: {
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        transferEpochs?: {
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[] | undefined;
        messages?: {
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
        }[] | undefined;
        messageNonce?: string | number | Long.Long | undefined;
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
        nonce?: string | number | (Long.Long & {
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
        } & { [K_11 in Exclude<keyof I["nonce"], keyof Long.Long>]: never; }) | undefined;
        chains?: ({
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        }[] & ({
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & { [K_12 in Exclude<keyof I["chains"][number], keyof Chain>]: never; })[] & { [K_13 in Exclude<keyof I["chains"], keyof {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        }[]>]: never; }) | undefined;
        chainStates?: ({
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
        }[] & ({
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
            } & { [K_14 in Exclude<keyof I["chainStates"][number]["chain"], keyof Chain>]: never; }) | undefined;
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
            } & { [K_15 in Exclude<keyof I["chainStates"][number]["assets"][number], keyof import("../exported/v1beta1/types").Asset>]: never; })[] & { [K_16 in Exclude<keyof I["chainStates"][number]["assets"], keyof {
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
                        } & { [K_17 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>]: never; }))[] & { [K_18 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & { [K_19 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"], "trueCountCache">]: never; }) | undefined;
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
                        } & { [K_21 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>]: never; }))[] & { [K_22 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & { [K_23 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>]: never; }) | undefined;
                } & { [K_24 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"], "trueCountCache">]: never; }) | undefined;
                chain?: string | undefined;
            } & { [K_25 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number], keyof import("./types").MaintainerState>]: never; })[] & { [K_26 in Exclude<keyof I["chainStates"][number]["maintainerStates"], keyof {
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
        } & { [K_27 in Exclude<keyof I["chainStates"][number], keyof ChainState>]: never; })[] & { [K_28 in Exclude<keyof I["chainStates"], keyof {
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
        }[]>]: never; }) | undefined;
        linkedAddresses?: ({
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        }[] & ({
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        } & {
            depositAddress?: ({
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
                } & { [K_29 in Exclude<keyof I["linkedAddresses"][number]["depositAddress"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_30 in Exclude<keyof I["linkedAddresses"][number]["depositAddress"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            recipientAddress?: ({
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
                } & { [K_31 in Exclude<keyof I["linkedAddresses"][number]["recipientAddress"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_32 in Exclude<keyof I["linkedAddresses"][number]["recipientAddress"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
        } & { [K_33 in Exclude<keyof I["linkedAddresses"][number], keyof LinkedAddresses>]: never; })[] & { [K_34 in Exclude<keyof I["linkedAddresses"], keyof {
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
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
            state?: import("../exported/v1beta1/types").TransferState | undefined;
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
            state?: import("../exported/v1beta1/types").TransferState | undefined;
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
                } & { [K_35 in Exclude<keyof I["transfers"][number]["recipient"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_36 in Exclude<keyof I["transfers"][number]["recipient"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_37 in Exclude<keyof I["transfers"][number]["asset"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
            } & { [K_38 in Exclude<keyof I["transfers"][number]["id"], keyof Long.Long>]: never; }) | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        } & { [K_39 in Exclude<keyof I["transfers"][number], keyof CrossChainTransfer>]: never; })[] & { [K_40 in Exclude<keyof I["transfers"], keyof {
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
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        }[]>]: never; }) | undefined;
        fee?: ({
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_41 in Exclude<keyof I["fee"]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_42 in Exclude<keyof I["fee"]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_43 in Exclude<keyof I["fee"], "coins">]: never; }) | undefined;
        feeInfos?: ({
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[] & ({
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
        } & { [K_44 in Exclude<keyof I["feeInfos"][number], keyof FeeInfo>]: never; })[] & { [K_45 in Exclude<keyof I["feeInfos"], keyof {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        rateLimits?: ({
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            chain?: string | undefined;
            limit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_46 in Exclude<keyof I["rateLimits"][number]["limit"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
                } & { [K_47 in Exclude<keyof I["rateLimits"][number]["window"]["seconds"], keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_48 in Exclude<keyof I["rateLimits"][number]["window"], keyof import("../../../google/protobuf/duration").Duration>]: never; }) | undefined;
        } & { [K_49 in Exclude<keyof I["rateLimits"][number], keyof RateLimit>]: never; })[] & { [K_50 in Exclude<keyof I["rateLimits"], keyof {
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        transferEpochs?: ({
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[] & ({
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        } & {
            chain?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_51 in Exclude<keyof I["transferEpochs"][number]["amount"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
            } & { [K_52 in Exclude<keyof I["transferEpochs"][number]["epoch"], keyof Long.Long>]: never; }) | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        } & { [K_53 in Exclude<keyof I["transferEpochs"][number], keyof TransferEpoch>]: never; })[] & { [K_54 in Exclude<keyof I["transferEpochs"], keyof {
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[]>]: never; }) | undefined;
        messages?: ({
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
        }[] & ({
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
                } & { [K_55 in Exclude<keyof I["messages"][number]["sender"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_56 in Exclude<keyof I["messages"][number]["sender"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
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
                } & { [K_57 in Exclude<keyof I["messages"][number]["recipient"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_58 in Exclude<keyof I["messages"][number]["recipient"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            payloadHash?: Buffer | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_59 in Exclude<keyof I["messages"][number]["asset"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
            } & { [K_60 in Exclude<keyof I["messages"][number]["sourceTxIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_61 in Exclude<keyof I["messages"][number], keyof GeneralMessage>]: never; })[] & { [K_62 in Exclude<keyof I["messages"], keyof {
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
        }[]>]: never; }) | undefined;
        messageNonce?: string | number | (Long.Long & {
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
        } & { [K_63 in Exclude<keyof I["messageNonce"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_64 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I | undefined): GenesisState;
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
        nonce?: string | number | Long.Long | undefined;
        chains?: {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        }[] | undefined;
        chainStates?: {
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
        }[] | undefined;
        linkedAddresses?: {
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        }[] | undefined;
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
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        }[] | undefined;
        fee?: {
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
        feeInfos?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[] | undefined;
        rateLimits?: {
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        transferEpochs?: {
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[] | undefined;
        messages?: {
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
        }[] | undefined;
        messageNonce?: string | number | Long.Long | undefined;
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
                } & { [K_65 in Exclude<keyof I_1["params"]["chainActivationThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_66 in Exclude<keyof I_1["params"]["chainActivationThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_67 in Exclude<keyof I_1["params"]["chainActivationThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
                } & { [K_68 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_69 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_70 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
                } & { [K_71 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_72 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_73 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
            } & { [K_74 in Exclude<keyof I_1["params"]["endBlockerLimit"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_75 in Exclude<keyof I_1["params"], keyof Params>]: never; }) | undefined;
        nonce?: string | number | (Long.Long & {
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
        } & { [K_76 in Exclude<keyof I_1["nonce"], keyof Long.Long>]: never; }) | undefined;
        chains?: ({
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        }[] & ({
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & { [K_77 in Exclude<keyof I_1["chains"][number], keyof Chain>]: never; })[] & { [K_78 in Exclude<keyof I_1["chains"], keyof {
            name?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        }[]>]: never; }) | undefined;
        chainStates?: ({
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
        }[] & ({
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
            } & { [K_79 in Exclude<keyof I_1["chainStates"][number]["chain"], keyof Chain>]: never; }) | undefined;
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
            } & { [K_80 in Exclude<keyof I_1["chainStates"][number]["assets"][number], keyof import("../exported/v1beta1/types").Asset>]: never; })[] & { [K_81 in Exclude<keyof I_1["chainStates"][number]["assets"], keyof {
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
                        } & { [K_82 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>]: never; }))[] & { [K_83 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & { [K_84 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>]: never; }) | undefined;
                } & { [K_85 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["missingVotes"], "trueCountCache">]: never; }) | undefined;
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
                        } & { [K_86 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], keyof Long.Long>]: never; }))[] & { [K_87 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        index?: number | undefined;
                        maxSize?: number | undefined;
                    } & { [K_88 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], keyof import("../../utils/v1beta1/bitmap").CircularBuffer>]: never; }) | undefined;
                } & { [K_89 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["incorrectVotes"], "trueCountCache">]: never; }) | undefined;
                chain?: string | undefined;
            } & { [K_90 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number], keyof import("./types").MaintainerState>]: never; })[] & { [K_91 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"], keyof {
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
        } & { [K_92 in Exclude<keyof I_1["chainStates"][number], keyof ChainState>]: never; })[] & { [K_93 in Exclude<keyof I_1["chainStates"], keyof {
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
        }[]>]: never; }) | undefined;
        linkedAddresses?: ({
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        }[] & ({
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        } & {
            depositAddress?: ({
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
                } & { [K_94 in Exclude<keyof I_1["linkedAddresses"][number]["depositAddress"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_95 in Exclude<keyof I_1["linkedAddresses"][number]["depositAddress"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            recipientAddress?: ({
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
                } & { [K_96 in Exclude<keyof I_1["linkedAddresses"][number]["recipientAddress"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_97 in Exclude<keyof I_1["linkedAddresses"][number]["recipientAddress"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
        } & { [K_98 in Exclude<keyof I_1["linkedAddresses"][number], keyof LinkedAddresses>]: never; })[] & { [K_99 in Exclude<keyof I_1["linkedAddresses"], keyof {
            depositAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
            recipientAddress?: {
                chain?: {
                    name?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    module?: string | undefined;
                } | undefined;
                address?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
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
            state?: import("../exported/v1beta1/types").TransferState | undefined;
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
            state?: import("../exported/v1beta1/types").TransferState | undefined;
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
                } & { [K_100 in Exclude<keyof I_1["transfers"][number]["recipient"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_101 in Exclude<keyof I_1["transfers"][number]["recipient"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_102 in Exclude<keyof I_1["transfers"][number]["asset"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
            } & { [K_103 in Exclude<keyof I_1["transfers"][number]["id"], keyof Long.Long>]: never; }) | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        } & { [K_104 in Exclude<keyof I_1["transfers"][number], keyof CrossChainTransfer>]: never; })[] & { [K_105 in Exclude<keyof I_1["transfers"], keyof {
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
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        }[]>]: never; }) | undefined;
        fee?: ({
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_106 in Exclude<keyof I_1["fee"]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_107 in Exclude<keyof I_1["fee"]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_108 in Exclude<keyof I_1["fee"], "coins">]: never; }) | undefined;
        feeInfos?: ({
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[] & ({
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
        } & { [K_109 in Exclude<keyof I_1["feeInfos"][number], keyof FeeInfo>]: never; })[] & { [K_110 in Exclude<keyof I_1["feeInfos"], keyof {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        rateLimits?: ({
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            chain?: string | undefined;
            limit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_111 in Exclude<keyof I_1["rateLimits"][number]["limit"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
                } & { [K_112 in Exclude<keyof I_1["rateLimits"][number]["window"]["seconds"], keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_113 in Exclude<keyof I_1["rateLimits"][number]["window"], keyof import("../../../google/protobuf/duration").Duration>]: never; }) | undefined;
        } & { [K_114 in Exclude<keyof I_1["rateLimits"][number], keyof RateLimit>]: never; })[] & { [K_115 in Exclude<keyof I_1["rateLimits"], keyof {
            chain?: string | undefined;
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        transferEpochs?: ({
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[] & ({
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        } & {
            chain?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_116 in Exclude<keyof I_1["transferEpochs"][number]["amount"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
            } & { [K_117 in Exclude<keyof I_1["transferEpochs"][number]["epoch"], keyof Long.Long>]: never; }) | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        } & { [K_118 in Exclude<keyof I_1["transferEpochs"][number], keyof TransferEpoch>]: never; })[] & { [K_119 in Exclude<keyof I_1["transferEpochs"], keyof {
            chain?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[]>]: never; }) | undefined;
        messages?: ({
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
        }[] & ({
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
                } & { [K_120 in Exclude<keyof I_1["messages"][number]["sender"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_121 in Exclude<keyof I_1["messages"][number]["sender"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
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
                } & { [K_122 in Exclude<keyof I_1["messages"][number]["recipient"]["chain"], keyof Chain>]: never; }) | undefined;
                address?: string | undefined;
            } & { [K_123 in Exclude<keyof I_1["messages"][number]["recipient"], keyof import("../exported/v1beta1/types").CrossChainAddress>]: never; }) | undefined;
            payloadHash?: Buffer | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_124 in Exclude<keyof I_1["messages"][number]["asset"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
            } & { [K_125 in Exclude<keyof I_1["messages"][number]["sourceTxIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_126 in Exclude<keyof I_1["messages"][number], keyof GeneralMessage>]: never; })[] & { [K_127 in Exclude<keyof I_1["messages"], keyof {
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
        }[]>]: never; }) | undefined;
        messageNonce?: string | number | (Long.Long & {
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
        } & { [K_128 in Exclude<keyof I_1["messageNonce"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_129 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
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
