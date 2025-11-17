import Long from "long";
import _m0 from "protobufjs/minimal";
import { Chain, CrossChainTransfer, FeeInfo, GeneralMessage, TransferFee } from "../exported/v1beta1/types";
import { Params } from "./params";
import { ChainState, LinkedAddresses, RateLimit, TransferEpoch } from "./types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    $type: "axelar.nexus.v1beta1.GenesisState";
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
    $type: "axelar.nexus.v1beta1.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        messages?: {
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    nativeAssetDeprecated?: string | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        fee?: {
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
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
        chains?: {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        }[] | undefined;
        nonce?: string | number | Long.Long | undefined;
        chainStates?: {
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
        }[] | undefined;
        linkedAddresses?: {
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
        }[] | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        }[] | undefined;
        feeInfos?: {
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[] | undefined;
        rateLimits?: {
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        transferEpochs?: {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[] | undefined;
        messageNonce?: string | number | Long.Long | undefined;
    } & {
        messages?: ({
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    nativeAssetDeprecated?: string | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        }[] & ({
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    nativeAssetDeprecated?: string | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
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
                } & { [K in Exclude<keyof I["messages"][number]["sender"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["messages"][number]["sender"], "$type" | "address" | "chain">]: never; }) | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            id?: string | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_2 in Exclude<keyof I["messages"][number]["asset"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: ({
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
                } & { [K_3 in Exclude<keyof I["messages"][number]["recipient"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["messages"][number]["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
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
            } & { [K_5 in Exclude<keyof I["messages"][number]["sourceTxIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["messages"][number], "$type" | "sender" | "status" | "id" | "asset" | "recipient" | "payloadHash" | "sourceTxId" | "sourceTxIndex">]: never; })[] & { [K_7 in Exclude<keyof I["messages"], "$type" | keyof {
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    nativeAssetDeprecated?: string | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
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
            } & { [K_8 in Exclude<keyof I["fee"]["coins"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_9 in Exclude<keyof I["fee"]["coins"], "$type" | keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I["fee"], "$type" | "coins">]: never; }) | undefined;
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
            } & { [K_11 in Exclude<keyof I["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_12 in Exclude<keyof I["params"]["chainActivationThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_13 in Exclude<keyof I["params"]["chainActivationThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["params"]["chainActivationThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
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
                } & { [K_15 in Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_16 in Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_17 in Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
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
                } & { [K_18 in Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_19 in Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } & { [K_21 in Exclude<keyof I["params"], "$type" | "endBlockerLimit" | "gateway" | "chainActivationThreshold" | "chainMaintainerMissingVoteThreshold" | "chainMaintainerIncorrectVoteThreshold" | "chainMaintainerCheckWindow">]: never; }) | undefined;
        chains?: ({
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        }[] & ({
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
        } & { [K_22 in Exclude<keyof I["chains"][number], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; })[] & { [K_23 in Exclude<keyof I["chains"], "$type" | keyof {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        }[]>]: never; }) | undefined;
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
        } & { [K_24 in Exclude<keyof I["nonce"], "$type" | keyof Long.Long>]: never; }) | undefined;
        chainStates?: ({
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
        }[] & ({
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
            } & { [K_25 in Exclude<keyof I["chainStates"][number]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
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
            } & { [K_26 in Exclude<keyof I["chainStates"][number]["assets"][number], "$type" | "denom" | "minAmountDeprecated" | "isNativeAsset">]: never; })[] & { [K_27 in Exclude<keyof I["chainStates"][number]["assets"], "$type" | keyof {
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
                        } & { [K_28 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_29 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        maxSize?: number | undefined;
                    } & { [K_30 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
                } & { [K_31 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["missingVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
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
                        } & { [K_32 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_33 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        maxSize?: number | undefined;
                    } & { [K_34 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
                } & { [K_35 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number]["incorrectVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
            } & { [K_36 in Exclude<keyof I["chainStates"][number]["maintainerStates"][number], "$type" | "address" | "chain" | "missingVotes" | "incorrectVotes">]: never; })[] & { [K_37 in Exclude<keyof I["chainStates"][number]["maintainerStates"], "$type" | keyof {
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
        } & { [K_38 in Exclude<keyof I["chainStates"][number], "$type" | "chain" | "assets" | "activated" | "maintainerStates">]: never; })[] & { [K_39 in Exclude<keyof I["chainStates"], "$type" | keyof {
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
        }[]>]: never; }) | undefined;
        linkedAddresses?: ({
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
        }[] & ({
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
                } & { [K_40 in Exclude<keyof I["linkedAddresses"][number]["depositAddress"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_41 in Exclude<keyof I["linkedAddresses"][number]["depositAddress"], "$type" | "address" | "chain">]: never; }) | undefined;
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
                } & { [K_42 in Exclude<keyof I["linkedAddresses"][number]["recipientAddress"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_43 in Exclude<keyof I["linkedAddresses"][number]["recipientAddress"], "$type" | "address" | "chain">]: never; }) | undefined;
        } & { [K_44 in Exclude<keyof I["linkedAddresses"][number], "$type" | "depositAddress" | "recipientAddress">]: never; })[] & { [K_45 in Exclude<keyof I["linkedAddresses"], "$type" | keyof {
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
        }[]>]: never; }) | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
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
            } & { [K_46 in Exclude<keyof I["transfers"][number]["id"], "$type" | keyof Long.Long>]: never; }) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_47 in Exclude<keyof I["transfers"][number]["asset"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: ({
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
                } & { [K_48 in Exclude<keyof I["transfers"][number]["recipient"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_49 in Exclude<keyof I["transfers"][number]["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        } & { [K_50 in Exclude<keyof I["transfers"][number], "$type" | "id" | "asset" | "recipient" | "state">]: never; })[] & { [K_51 in Exclude<keyof I["transfers"], "$type" | keyof {
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        }[]>]: never; }) | undefined;
        feeInfos?: ({
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[] & ({
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
        } & { [K_52 in Exclude<keyof I["feeInfos"][number], "$type" | "asset" | "chain" | "feeRate" | "minFee" | "maxFee">]: never; })[] & { [K_53 in Exclude<keyof I["feeInfos"], "$type" | keyof {
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        rateLimits?: ({
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
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
            } & { [K_54 in Exclude<keyof I["rateLimits"][number]["limit"], "$type" | "denom" | "amount">]: never; }) | undefined;
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
                } & { [K_55 in Exclude<keyof I["rateLimits"][number]["window"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_56 in Exclude<keyof I["rateLimits"][number]["window"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
        } & { [K_57 in Exclude<keyof I["rateLimits"][number], "$type" | "limit" | "chain" | "window">]: never; })[] & { [K_58 in Exclude<keyof I["rateLimits"], "$type" | keyof {
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        transferEpochs?: ({
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[] & ({
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        } & {
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_59 in Exclude<keyof I["transferEpochs"][number]["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
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
            } & { [K_60 in Exclude<keyof I["transferEpochs"][number]["epoch"], "$type" | keyof Long.Long>]: never; }) | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        } & { [K_61 in Exclude<keyof I["transferEpochs"][number], "$type" | "amount" | "chain" | "epoch" | "direction">]: never; })[] & { [K_62 in Exclude<keyof I["transferEpochs"], "$type" | keyof {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
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
        } & { [K_63 in Exclude<keyof I["messageNonce"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_64 in Exclude<keyof I, "$type" | "messages" | "fee" | "params" | "chains" | "nonce" | "chainStates" | "linkedAddresses" | "transfers" | "feeInfos" | "rateLimits" | "transferEpochs" | "messageNonce">]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        messages?: {
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    nativeAssetDeprecated?: string | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        fee?: {
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
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
        chains?: {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        }[] | undefined;
        nonce?: string | number | Long.Long | undefined;
        chainStates?: {
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
        }[] | undefined;
        linkedAddresses?: {
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
        }[] | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        }[] | undefined;
        feeInfos?: {
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[] | undefined;
        rateLimits?: {
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        transferEpochs?: {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[] | undefined;
        messageNonce?: string | number | Long.Long | undefined;
    } & {
        messages?: ({
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    nativeAssetDeprecated?: string | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
        }[] & ({
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    nativeAssetDeprecated?: string | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
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
                } & { [K_65 in Exclude<keyof I_1["messages"][number]["sender"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_66 in Exclude<keyof I_1["messages"][number]["sender"], "$type" | "address" | "chain">]: never; }) | undefined;
            status?: import("../exported/v1beta1/types").GeneralMessage_Status | undefined;
            id?: string | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_67 in Exclude<keyof I_1["messages"][number]["asset"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: ({
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
                } & { [K_68 in Exclude<keyof I_1["messages"][number]["recipient"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_69 in Exclude<keyof I_1["messages"][number]["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
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
            } & { [K_70 in Exclude<keyof I_1["messages"][number]["sourceTxIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_71 in Exclude<keyof I_1["messages"][number], "$type" | "sender" | "status" | "id" | "asset" | "recipient" | "payloadHash" | "sourceTxId" | "sourceTxIndex">]: never; })[] & { [K_72 in Exclude<keyof I_1["messages"], "$type" | keyof {
            sender?: {
                address?: string | undefined;
                chain?: {
                    name?: string | undefined;
                    keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                    nativeAssetDeprecated?: string | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
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
            } & { [K_73 in Exclude<keyof I_1["fee"]["coins"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_74 in Exclude<keyof I_1["fee"]["coins"], "$type" | keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_75 in Exclude<keyof I_1["fee"], "$type" | "coins">]: never; }) | undefined;
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
            } & { [K_76 in Exclude<keyof I_1["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_77 in Exclude<keyof I_1["params"]["chainActivationThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_78 in Exclude<keyof I_1["params"]["chainActivationThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_79 in Exclude<keyof I_1["params"]["chainActivationThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
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
                } & { [K_80 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_81 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_82 in Exclude<keyof I_1["params"]["chainMaintainerMissingVoteThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
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
                } & { [K_83 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_84 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_85 in Exclude<keyof I_1["params"]["chainMaintainerIncorrectVoteThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            chainMaintainerCheckWindow?: number | undefined;
        } & { [K_86 in Exclude<keyof I_1["params"], "$type" | "endBlockerLimit" | "gateway" | "chainActivationThreshold" | "chainMaintainerMissingVoteThreshold" | "chainMaintainerIncorrectVoteThreshold" | "chainMaintainerCheckWindow">]: never; }) | undefined;
        chains?: ({
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        }[] & ({
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
        } & { [K_87 in Exclude<keyof I_1["chains"][number], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; })[] & { [K_88 in Exclude<keyof I_1["chains"], "$type" | keyof {
            name?: string | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            module?: string | undefined;
        }[]>]: never; }) | undefined;
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
        } & { [K_89 in Exclude<keyof I_1["nonce"], "$type" | keyof Long.Long>]: never; }) | undefined;
        chainStates?: ({
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
        }[] & ({
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
            } & { [K_90 in Exclude<keyof I_1["chainStates"][number]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
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
            } & { [K_91 in Exclude<keyof I_1["chainStates"][number]["assets"][number], "$type" | "denom" | "minAmountDeprecated" | "isNativeAsset">]: never; })[] & { [K_92 in Exclude<keyof I_1["chainStates"][number]["assets"], "$type" | keyof {
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
                        } & { [K_93 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_94 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        maxSize?: number | undefined;
                    } & { [K_95 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["missingVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
                } & { [K_96 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["missingVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
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
                        } & { [K_97 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"][number], "$type" | keyof Long.Long>]: never; }))[] & { [K_98 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"]["cumulativeValue"], "$type" | keyof (string | number | Long.Long)[]>]: never; }) | undefined;
                        maxSize?: number | undefined;
                    } & { [K_99 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["incorrectVotes"]["trueCountCache"], "$type" | "index" | "cumulativeValue" | "maxSize">]: never; }) | undefined;
                } & { [K_100 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number]["incorrectVotes"], "$type" | "trueCountCache">]: never; }) | undefined;
            } & { [K_101 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"][number], "$type" | "address" | "chain" | "missingVotes" | "incorrectVotes">]: never; })[] & { [K_102 in Exclude<keyof I_1["chainStates"][number]["maintainerStates"], "$type" | keyof {
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
        } & { [K_103 in Exclude<keyof I_1["chainStates"][number], "$type" | "chain" | "assets" | "activated" | "maintainerStates">]: never; })[] & { [K_104 in Exclude<keyof I_1["chainStates"], "$type" | keyof {
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
        }[]>]: never; }) | undefined;
        linkedAddresses?: ({
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
        }[] & ({
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
                } & { [K_105 in Exclude<keyof I_1["linkedAddresses"][number]["depositAddress"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_106 in Exclude<keyof I_1["linkedAddresses"][number]["depositAddress"], "$type" | "address" | "chain">]: never; }) | undefined;
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
                } & { [K_107 in Exclude<keyof I_1["linkedAddresses"][number]["recipientAddress"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_108 in Exclude<keyof I_1["linkedAddresses"][number]["recipientAddress"], "$type" | "address" | "chain">]: never; }) | undefined;
        } & { [K_109 in Exclude<keyof I_1["linkedAddresses"][number], "$type" | "depositAddress" | "recipientAddress">]: never; })[] & { [K_110 in Exclude<keyof I_1["linkedAddresses"], "$type" | keyof {
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
        }[]>]: never; }) | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
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
            } & { [K_111 in Exclude<keyof I_1["transfers"][number]["id"], "$type" | keyof Long.Long>]: never; }) | undefined;
            asset?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_112 in Exclude<keyof I_1["transfers"][number]["asset"], "$type" | "denom" | "amount">]: never; }) | undefined;
            recipient?: ({
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
                } & { [K_113 in Exclude<keyof I_1["transfers"][number]["recipient"]["chain"], "$type" | "name" | "keyType" | "nativeAssetDeprecated" | "supportsForeignAssets" | "module">]: never; }) | undefined;
            } & { [K_114 in Exclude<keyof I_1["transfers"][number]["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        } & { [K_115 in Exclude<keyof I_1["transfers"][number], "$type" | "id" | "asset" | "recipient" | "state">]: never; })[] & { [K_116 in Exclude<keyof I_1["transfers"], "$type" | keyof {
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
                    nativeAssetDeprecated?: string | undefined;
                    supportsForeignAssets?: boolean | undefined;
                    module?: string | undefined;
                } | undefined;
            } | undefined;
            state?: import("../exported/v1beta1/types").TransferState | undefined;
        }[]>]: never; }) | undefined;
        feeInfos?: ({
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[] & ({
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
        } & { [K_117 in Exclude<keyof I_1["feeInfos"][number], "$type" | "asset" | "chain" | "feeRate" | "minFee" | "maxFee">]: never; })[] & { [K_118 in Exclude<keyof I_1["feeInfos"], "$type" | keyof {
            asset?: string | undefined;
            chain?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        rateLimits?: ({
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
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
            } & { [K_119 in Exclude<keyof I_1["rateLimits"][number]["limit"], "$type" | "denom" | "amount">]: never; }) | undefined;
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
                } & { [K_120 in Exclude<keyof I_1["rateLimits"][number]["window"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_121 in Exclude<keyof I_1["rateLimits"][number]["window"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
        } & { [K_122 in Exclude<keyof I_1["rateLimits"][number], "$type" | "limit" | "chain" | "window">]: never; })[] & { [K_123 in Exclude<keyof I_1["rateLimits"], "$type" | keyof {
            limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            window?: {
                seconds?: string | number | Long.Long | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        transferEpochs?: ({
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        }[] & ({
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        } & {
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_124 in Exclude<keyof I_1["transferEpochs"][number]["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
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
            } & { [K_125 in Exclude<keyof I_1["transferEpochs"][number]["epoch"], "$type" | keyof Long.Long>]: never; }) | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
        } & { [K_126 in Exclude<keyof I_1["transferEpochs"][number], "$type" | "amount" | "chain" | "epoch" | "direction">]: never; })[] & { [K_127 in Exclude<keyof I_1["transferEpochs"], "$type" | keyof {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            chain?: string | undefined;
            epoch?: string | number | Long.Long | undefined;
            direction?: import("../exported/v1beta1/types").TransferDirection | undefined;
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
        } & { [K_128 in Exclude<keyof I_1["messageNonce"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_129 in Exclude<keyof I_1, "$type" | "messages" | "fee" | "params" | "chains" | "nonce" | "chainStates" | "linkedAddresses" | "transfers" | "feeInfos" | "rateLimits" | "transferEpochs" | "messageNonce">]: never; }>(object: I_1): GenesisState;
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
