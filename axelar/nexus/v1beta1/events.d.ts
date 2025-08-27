/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { CrossChainAddress, WasmMessage } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface FeeDeducted {
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount?: Coin | undefined;
    fee?: Coin | undefined;
}
export interface InsufficientFee {
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount?: Coin | undefined;
    fee?: Coin | undefined;
}
export interface RateLimitUpdated {
    chain: string;
    limit?: Coin | undefined;
    window?: Duration | undefined;
}
export interface MessageReceived {
    id: string;
    payloadHash: Buffer;
    sender?: CrossChainAddress | undefined;
    recipient?: CrossChainAddress | undefined;
}
export interface MessageProcessing {
    id: string;
    sourceChain: string;
    destinationChain: string;
}
export interface MessageExecuted {
    id: string;
    sourceChain: string;
    destinationChain: string;
}
export interface MessageFailed {
    id: string;
    sourceChain: string;
    destinationChain: string;
}
export interface WasmMessageRouted {
    message?: WasmMessage | undefined;
}
export declare const FeeDeducted: {
    encode(message: FeeDeducted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeeDeducted;
    fromJSON(object: any): FeeDeducted;
    toJSON(message: FeeDeducted): unknown;
    create<I extends {
        transferId?: string | number | Long.Long | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
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
        } & { [K in Exclude<keyof I["transferId"], keyof Long.Long>]: never; }) | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["amount"], keyof Coin>]: never; }) | undefined;
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["fee"], keyof Coin>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof FeeDeducted>]: never; }>(base?: I | undefined): FeeDeducted;
    fromPartial<I_1 extends {
        transferId?: string | number | Long.Long | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
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
        } & { [K_4 in Exclude<keyof I_1["transferId"], keyof Long.Long>]: never; }) | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["amount"], keyof Coin>]: never; }) | undefined;
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["fee"], keyof Coin>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof FeeDeducted>]: never; }>(object: I_1): FeeDeducted;
};
export declare const InsufficientFee: {
    encode(message: InsufficientFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InsufficientFee;
    fromJSON(object: any): InsufficientFee;
    toJSON(message: InsufficientFee): unknown;
    create<I extends {
        transferId?: string | number | Long.Long | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
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
        } & { [K in Exclude<keyof I["transferId"], keyof Long.Long>]: never; }) | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["amount"], keyof Coin>]: never; }) | undefined;
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["fee"], keyof Coin>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof InsufficientFee>]: never; }>(base?: I | undefined): InsufficientFee;
    fromPartial<I_1 extends {
        transferId?: string | number | Long.Long | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        fee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
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
        } & { [K_4 in Exclude<keyof I_1["transferId"], keyof Long.Long>]: never; }) | undefined;
        recipientChain?: string | undefined;
        recipientAddress?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["amount"], keyof Coin>]: never; }) | undefined;
        fee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["fee"], keyof Coin>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof InsufficientFee>]: never; }>(object: I_1): InsufficientFee;
};
export declare const RateLimitUpdated: {
    encode(message: RateLimitUpdated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RateLimitUpdated;
    fromJSON(object: any): RateLimitUpdated;
    toJSON(message: RateLimitUpdated): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["limit"], keyof Coin>]: never; }) | undefined;
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
    } & { [K_3 in Exclude<keyof I, keyof RateLimitUpdated>]: never; }>(base?: I | undefined): RateLimitUpdated;
    fromPartial<I_1 extends {
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
        } & { [K_4 in Exclude<keyof I_1["limit"], keyof Coin>]: never; }) | undefined;
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
    } & { [K_7 in Exclude<keyof I_1, keyof RateLimitUpdated>]: never; }>(object: I_1): RateLimitUpdated;
};
export declare const MessageReceived: {
    encode(message: MessageReceived, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MessageReceived;
    fromJSON(object: any): MessageReceived;
    toJSON(message: MessageReceived): unknown;
    create<I extends {
        id?: string | undefined;
        payloadHash?: Buffer | undefined;
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
    } & {
        id?: string | undefined;
        payloadHash?: Buffer | undefined;
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
            } & { [K in Exclude<keyof I["sender"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
            address?: string | undefined;
        } & { [K_1 in Exclude<keyof I["sender"], keyof CrossChainAddress>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["recipient"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
            address?: string | undefined;
        } & { [K_3 in Exclude<keyof I["recipient"], keyof CrossChainAddress>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof MessageReceived>]: never; }>(base?: I | undefined): MessageReceived;
    fromPartial<I_1 extends {
        id?: string | undefined;
        payloadHash?: Buffer | undefined;
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
    } & {
        id?: string | undefined;
        payloadHash?: Buffer | undefined;
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
            } & { [K_5 in Exclude<keyof I_1["sender"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
            address?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["sender"], keyof CrossChainAddress>]: never; }) | undefined;
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
            } & { [K_7 in Exclude<keyof I_1["recipient"]["chain"], keyof import("../exported/v1beta1/types").Chain>]: never; }) | undefined;
            address?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["recipient"], keyof CrossChainAddress>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof MessageReceived>]: never; }>(object: I_1): MessageReceived;
};
export declare const MessageProcessing: {
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
    } & { [K in Exclude<keyof I, keyof MessageProcessing>]: never; }>(base?: I | undefined): MessageProcessing;
    fromPartial<I_1 extends {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MessageProcessing>]: never; }>(object: I_1): MessageProcessing;
};
export declare const MessageExecuted: {
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
    } & { [K in Exclude<keyof I, keyof MessageExecuted>]: never; }>(base?: I | undefined): MessageExecuted;
    fromPartial<I_1 extends {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MessageExecuted>]: never; }>(object: I_1): MessageExecuted;
};
export declare const MessageFailed: {
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
    } & { [K in Exclude<keyof I, keyof MessageFailed>]: never; }>(base?: I | undefined): MessageFailed;
    fromPartial<I_1 extends {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & {
        id?: string | undefined;
        sourceChain?: string | undefined;
        destinationChain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MessageFailed>]: never; }>(object: I_1): MessageFailed;
};
export declare const WasmMessageRouted: {
    encode(message: WasmMessageRouted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WasmMessageRouted;
    fromJSON(object: any): WasmMessageRouted;
    toJSON(message: WasmMessageRouted): unknown;
    create<I extends {
        message?: {
            sourceChain?: string | undefined;
            sourceAddress?: string | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
            sender?: Buffer | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        message?: ({
            sourceChain?: string | undefined;
            sourceAddress?: string | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
            sender?: Buffer | undefined;
            id?: string | undefined;
        } & {
            sourceChain?: string | undefined;
            sourceAddress?: string | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
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
            } & { [K in Exclude<keyof I["message"]["sourceTxIndex"], keyof Long.Long>]: never; }) | undefined;
            sender?: Buffer | undefined;
            id?: string | undefined;
        } & { [K_1 in Exclude<keyof I["message"], keyof WasmMessage>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "message">]: never; }>(base?: I | undefined): WasmMessageRouted;
    fromPartial<I_1 extends {
        message?: {
            sourceChain?: string | undefined;
            sourceAddress?: string | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
            sender?: Buffer | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        message?: ({
            sourceChain?: string | undefined;
            sourceAddress?: string | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            sourceTxId?: Buffer | undefined;
            sourceTxIndex?: string | number | Long.Long | undefined;
            sender?: Buffer | undefined;
            id?: string | undefined;
        } & {
            sourceChain?: string | undefined;
            sourceAddress?: string | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
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
            } & { [K_3 in Exclude<keyof I_1["message"]["sourceTxIndex"], keyof Long.Long>]: never; }) | undefined;
            sender?: Buffer | undefined;
            id?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["message"], keyof WasmMessage>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): WasmMessageRouted;
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
