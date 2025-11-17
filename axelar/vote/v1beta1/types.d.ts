/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.vote.v1beta1";
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVote {
    $type: "axelar.vote.v1beta1.TalliedVote";
    tally: Buffer;
    /**
     * DEPRECATED: Removed in v0.20, reinstated in v1.3 for backward compatibility.
     * This field must remain to allow decoding of historical transactions.
     * DO NOT use in new code.
     *
     * @deprecated
     */
    votersDeprecated: Buffer[];
    data?: Any | undefined;
    pollId: Long;
    isVoterLate: {
        [key: string]: boolean;
    };
}
export interface TalliedVote_IsVoterLateEntry {
    $type: "axelar.vote.v1beta1.TalliedVote.IsVoterLateEntry";
    key: string;
    value: boolean;
}
export declare const TalliedVote: {
    $type: "axelar.vote.v1beta1.TalliedVote";
    encode(message: TalliedVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TalliedVote;
    fromJSON(object: any): TalliedVote;
    toJSON(message: TalliedVote): unknown;
    create<I extends {
        data?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
        pollId?: string | number | Long.Long | undefined;
        tally?: Buffer | undefined;
        votersDeprecated?: Buffer[] | undefined;
        isVoterLate?: {
            [x: string]: boolean | undefined;
            [x: number]: boolean | undefined;
        } | undefined;
    } & {
        data?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K in Exclude<keyof I["data"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
        pollId?: string | number | (Long.Long & {
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
        } & { [K_1 in Exclude<keyof I["pollId"], "$type" | keyof Long.Long>]: never; }) | undefined;
        tally?: Buffer | undefined;
        votersDeprecated?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I["votersDeprecated"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        isVoterLate?: ({
            [x: string]: boolean | undefined;
            [x: number]: boolean | undefined;
        } & {
            [x: string]: boolean | undefined;
            [x: number]: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["isVoterLate"], string | number>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "$type" | "data" | "pollId" | "tally" | "votersDeprecated" | "isVoterLate">]: never; }>(base?: I | undefined): TalliedVote;
    fromPartial<I_1 extends {
        data?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
        pollId?: string | number | Long.Long | undefined;
        tally?: Buffer | undefined;
        votersDeprecated?: Buffer[] | undefined;
        isVoterLate?: {
            [x: string]: boolean | undefined;
            [x: number]: boolean | undefined;
        } | undefined;
    } & {
        data?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_5 in Exclude<keyof I_1["data"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
        pollId?: string | number | (Long.Long & {
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
        } & { [K_6 in Exclude<keyof I_1["pollId"], "$type" | keyof Long.Long>]: never; }) | undefined;
        tally?: Buffer | undefined;
        votersDeprecated?: (Buffer[] & Buffer[] & { [K_7 in Exclude<keyof I_1["votersDeprecated"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        isVoterLate?: ({
            [x: string]: boolean | undefined;
            [x: number]: boolean | undefined;
        } & {
            [x: string]: boolean | undefined;
            [x: number]: boolean | undefined;
        } & { [K_8 in Exclude<keyof I_1["isVoterLate"], string | number>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "$type" | "data" | "pollId" | "tally" | "votersDeprecated" | "isVoterLate">]: never; }>(object: I_1): TalliedVote;
};
export declare const TalliedVote_IsVoterLateEntry: {
    $type: "axelar.vote.v1beta1.TalliedVote.IsVoterLateEntry";
    encode(message: TalliedVote_IsVoterLateEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TalliedVote_IsVoterLateEntry;
    fromJSON(object: any): TalliedVote_IsVoterLateEntry;
    toJSON(message: TalliedVote_IsVoterLateEntry): unknown;
    create<I extends {
        value?: boolean | undefined;
        key?: string | undefined;
    } & {
        value?: boolean | undefined;
        key?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "value" | "key">]: never; }>(base?: I | undefined): TalliedVote_IsVoterLateEntry;
    fromPartial<I_1 extends {
        value?: boolean | undefined;
        key?: string | undefined;
    } & {
        value?: boolean | undefined;
        key?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "value" | "key">]: never; }>(object: I_1): TalliedVote_IsVoterLateEntry;
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
