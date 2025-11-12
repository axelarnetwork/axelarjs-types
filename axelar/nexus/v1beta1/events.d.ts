/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { CrossChainAddress, WasmMessage } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface FeeDeducted {
    $type: "axelar.nexus.v1beta1.FeeDeducted";
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount?: Coin | undefined;
    fee?: Coin | undefined;
}
export interface InsufficientFee {
    $type: "axelar.nexus.v1beta1.InsufficientFee";
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount?: Coin | undefined;
    fee?: Coin | undefined;
}
export interface RateLimitUpdated {
    $type: "axelar.nexus.v1beta1.RateLimitUpdated";
    chain: string;
    limit?: Coin | undefined;
    window?: Duration | undefined;
}
export interface MessageReceived {
    $type: "axelar.nexus.v1beta1.MessageReceived";
    id: string;
    payloadHash: Buffer;
    sender?: CrossChainAddress | undefined;
    recipient?: CrossChainAddress | undefined;
}
export interface MessageProcessing {
    $type: "axelar.nexus.v1beta1.MessageProcessing";
    id: string;
    sourceChain: string;
    destinationChain: string;
}
export interface MessageExecuted {
    $type: "axelar.nexus.v1beta1.MessageExecuted";
    id: string;
    sourceChain: string;
    destinationChain: string;
}
export interface MessageFailed {
    $type: "axelar.nexus.v1beta1.MessageFailed";
    id: string;
    sourceChain: string;
    destinationChain: string;
}
export interface WasmMessageRouted {
    $type: "axelar.nexus.v1beta1.WasmMessageRouted";
    message?: WasmMessage | undefined;
}
export declare const FeeDeducted: {
    $type: "axelar.nexus.v1beta1.FeeDeducted";
    encode(message: FeeDeducted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeeDeducted;
    fromJSON(object: any): FeeDeducted;
    toJSON(message: FeeDeducted): unknown;
    create<I extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        transferId?: string | number | Long.Long | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["fee"], "$type" | "denom" | "amount">]: never; }) | undefined;
        transferId?: string | number | (Long.Long & {
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
        } & { [K_2 in Exclude<keyof I["transferId"], "$type" | keyof Long.Long>]: never; }) | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "amount" | "fee" | "transferId" | "recipientChain" | "recipientAddress">]: never; }>(base?: I | undefined): FeeDeducted;
    fromPartial<I_1 extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        transferId?: string | number | Long.Long | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["fee"], "$type" | "denom" | "amount">]: never; }) | undefined;
        transferId?: string | number | (Long.Long & {
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
        } & { [K_6 in Exclude<keyof I_1["transferId"], "$type" | keyof Long.Long>]: never; }) | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "amount" | "fee" | "transferId" | "recipientChain" | "recipientAddress">]: never; }>(object: I_1): FeeDeducted;
};
export declare const InsufficientFee: {
    $type: "axelar.nexus.v1beta1.InsufficientFee";
    encode(message: InsufficientFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InsufficientFee;
    fromJSON(object: any): InsufficientFee;
    toJSON(message: InsufficientFee): unknown;
    create<I extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        transferId?: string | number | Long.Long | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["fee"], "$type" | "denom" | "amount">]: never; }) | undefined;
        transferId?: string | number | (Long.Long & {
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
        } & { [K_2 in Exclude<keyof I["transferId"], "$type" | keyof Long.Long>]: never; }) | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "amount" | "fee" | "transferId" | "recipientChain" | "recipientAddress">]: never; }>(base?: I | undefined): InsufficientFee;
    fromPartial<I_1 extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        transferId?: string | number | Long.Long | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["fee"], "$type" | "denom" | "amount">]: never; }) | undefined;
        transferId?: string | number | (Long.Long & {
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
        } & { [K_6 in Exclude<keyof I_1["transferId"], "$type" | keyof Long.Long>]: never; }) | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "amount" | "fee" | "transferId" | "recipientChain" | "recipientAddress">]: never; }>(object: I_1): InsufficientFee;
};
export declare const RateLimitUpdated: {
    $type: "axelar.nexus.v1beta1.RateLimitUpdated";
    encode(message: RateLimitUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RateLimitUpdated;
    fromJSON(object: any): RateLimitUpdated;
    toJSON(message: RateLimitUpdated): unknown;
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
    } & { [K_3 in Exclude<keyof I, "$type" | "limit" | "chain" | "window">]: never; }>(base?: I | undefined): RateLimitUpdated;
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
    } & { [K_7 in Exclude<keyof I_1, "$type" | "limit" | "chain" | "window">]: never; }>(object: I_1): RateLimitUpdated;
};
export declare const MessageReceived: {
    $type: "axelar.nexus.v1beta1.MessageReceived";
    encode(message: MessageReceived, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReceived;
    fromJSON(object: any): MessageReceived;
    toJSON(message: MessageReceived): unknown;
    create<I extends {
        sender?: {
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
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
            } & { [K in Exclude<keyof I["sender"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["sender"], "$type" | "address" | "chain">]: never; }) | undefined;
        id?: string | undefined;
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
            } & { [K_2 in Exclude<keyof I["recipient"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
        payloadHash?: Buffer | undefined;
    } & { [K_4 in Exclude<keyof I, "$type" | "sender" | "id" | "recipient" | "payloadHash">]: never; }>(base?: I | undefined): MessageReceived;
    fromPartial<I_1 extends {
        sender?: {
            address?: string | undefined;
            chain?: {
                name?: string | undefined;
                keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
                supportsForeignAssets?: boolean | undefined;
                module?: string | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
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
            } & { [K_5 in Exclude<keyof I_1["sender"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["sender"], "$type" | "address" | "chain">]: never; }) | undefined;
        id?: string | undefined;
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
            } & { [K_7 in Exclude<keyof I_1["recipient"]["chain"], "$type" | "name" | "keyType" | "supportsForeignAssets" | "module">]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I_1["recipient"], "$type" | "address" | "chain">]: never; }) | undefined;
        payloadHash?: Buffer | undefined;
    } & { [K_9 in Exclude<keyof I_1, "$type" | "sender" | "id" | "recipient" | "payloadHash">]: never; }>(object: I_1): MessageReceived;
};
export declare const MessageProcessing: {
    $type: "axelar.nexus.v1beta1.MessageProcessing";
    encode(message: MessageProcessing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageProcessing;
    fromJSON(object: any): MessageProcessing;
    toJSON(message: MessageProcessing): unknown;
    create<I extends {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id" | "sourceChain" | "destinationChain">]: never; }>(base?: I | undefined): MessageProcessing;
    fromPartial<I_1 extends {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "id" | "sourceChain" | "destinationChain">]: never; }>(object: I_1): MessageProcessing;
};
export declare const MessageExecuted: {
    $type: "axelar.nexus.v1beta1.MessageExecuted";
    encode(message: MessageExecuted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageExecuted;
    fromJSON(object: any): MessageExecuted;
    toJSON(message: MessageExecuted): unknown;
    create<I extends {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id" | "sourceChain" | "destinationChain">]: never; }>(base?: I | undefined): MessageExecuted;
    fromPartial<I_1 extends {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "id" | "sourceChain" | "destinationChain">]: never; }>(object: I_1): MessageExecuted;
};
export declare const MessageFailed: {
    $type: "axelar.nexus.v1beta1.MessageFailed";
    encode(message: MessageFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageFailed;
    fromJSON(object: any): MessageFailed;
    toJSON(message: MessageFailed): unknown;
    create<I extends {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id" | "sourceChain" | "destinationChain">]: never; }>(base?: I | undefined): MessageFailed;
    fromPartial<I_1 extends {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "id" | "sourceChain" | "destinationChain">]: never; }>(object: I_1): MessageFailed;
};
export declare const WasmMessageRouted: {
    $type: "axelar.nexus.v1beta1.WasmMessageRouted";
    encode(message: WasmMessageRouted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WasmMessageRouted;
    fromJSON(object: any): WasmMessageRouted;
    toJSON(message: WasmMessageRouted): unknown;
    create<I extends {
        message?: {
            sender?: Buffer | undefined;
            id?: string | undefined;
            sourceChain?: string | undefined;
            destinationChain?: string | undefined;
            payloadHash?: Buffer | undefined;
            destinationAddress?: string | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
            sourceAddress?: string | undefined;
        } | undefined;
    } & {
        message?: ({
            sender?: Buffer | undefined;
            id?: string | undefined;
            sourceChain?: string | undefined;
            destinationChain?: string | undefined;
            payloadHash?: Buffer | undefined;
            destinationAddress?: string | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
            sourceAddress?: string | undefined;
        } & {
            sender?: Buffer | undefined;
            id?: string | undefined;
            sourceChain?: string | undefined;
            destinationChain?: string | undefined;
            payloadHash?: Buffer | undefined;
            destinationAddress?: string | undefined;
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
            } & { [K in Exclude<keyof I["message"]["sourceTxIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            sourceAddress?: string | undefined;
        } & { [K_1 in Exclude<keyof I["message"], "$type" | "sender" | "id" | "sourceChain" | "destinationChain" | "payloadHash" | "destinationAddress" | "sourceTxId" | "sourceTxIndex" | "sourceAddress">]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "message">]: never; }>(base?: I | undefined): WasmMessageRouted;
    fromPartial<I_1 extends {
        message?: {
            sender?: Buffer | undefined;
            id?: string | undefined;
            sourceChain?: string | undefined;
            destinationChain?: string | undefined;
            payloadHash?: Buffer | undefined;
            destinationAddress?: string | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
            sourceAddress?: string | undefined;
        } | undefined;
    } & {
        message?: ({
            sender?: Buffer | undefined;
            id?: string | undefined;
            sourceChain?: string | undefined;
            destinationChain?: string | undefined;
            payloadHash?: Buffer | undefined;
            destinationAddress?: string | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
            sourceAddress?: string | undefined;
        } & {
            sender?: Buffer | undefined;
            id?: string | undefined;
            sourceChain?: string | undefined;
            destinationChain?: string | undefined;
            payloadHash?: Buffer | undefined;
            destinationAddress?: string | undefined;
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
            } & { [K_3 in Exclude<keyof I_1["message"]["sourceTxIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            sourceAddress?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["message"], "$type" | "sender" | "id" | "sourceChain" | "destinationChain" | "payloadHash" | "destinationAddress" | "sourceTxId" | "sourceTxIndex" | "sourceAddress">]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "message">]: never; }>(object: I_1): WasmMessageRouted;
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
