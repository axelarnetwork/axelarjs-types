import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.vote.v1beta1";
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVote {
    tally: Uint8Array;
    data?: Any;
    pollId: Long;
    isVoterLate: {
        [key: string]: boolean;
    };
}
export interface TalliedVote_IsVoterLateEntry {
    key: string;
    value: boolean;
}
export declare const TalliedVote: {
    encode(message: TalliedVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TalliedVote;
    fromJSON(object: any): TalliedVote;
    toJSON(message: TalliedVote): unknown;
    fromPartial<I extends {
        tally?: Uint8Array | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        pollId?: string | number | Long.Long | undefined;
        isVoterLate?: {
            [x: string]: boolean | undefined;
        } | undefined;
    } & {
        tally?: Uint8Array | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
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
        } & Record<Exclude<keyof I["pollId"], keyof Long.Long>, never>) | undefined;
        isVoterLate?: ({
            [x: string]: boolean | undefined;
        } & {
            [x: string]: boolean | undefined;
        } & Record<Exclude<keyof I["isVoterLate"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TalliedVote>, never>>(object: I): TalliedVote;
};
export declare const TalliedVote_IsVoterLateEntry: {
    encode(message: TalliedVote_IsVoterLateEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TalliedVote_IsVoterLateEntry;
    fromJSON(object: any): TalliedVote_IsVoterLateEntry;
    toJSON(message: TalliedVote_IsVoterLateEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: boolean | undefined;
    } & {
        key?: string | undefined;
        value?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof TalliedVote_IsVoterLateEntry>, never>>(object: I): TalliedVote_IsVoterLateEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
