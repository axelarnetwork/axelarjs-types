/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
export declare const protobufPackage = "axelar.snapshot.exported.v1beta1";
export interface Participant {
    $type: "axelar.snapshot.exported.v1beta1.Participant";
    address: Buffer;
    weight: Buffer;
}
export interface Snapshot {
    $type: "axelar.snapshot.exported.v1beta1.Snapshot";
    timestamp?: Timestamp | undefined;
    height: Long;
    participants: {
        [key: string]: Participant;
    };
    bondedWeight: Buffer;
}
export interface Snapshot_ParticipantsEntry {
    $type: "axelar.snapshot.exported.v1beta1.Snapshot.ParticipantsEntry";
    key: string;
    value?: Participant | undefined;
}
export declare const Participant: {
    $type: "axelar.snapshot.exported.v1beta1.Participant";
    encode(message: Participant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Participant;
    fromJSON(object: any): Participant;
    toJSON(message: Participant): unknown;
    create<I extends {
        address?: Buffer | undefined;
        weight?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
        weight?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address" | "weight">]: never; }>(base?: I | undefined): Participant;
    fromPartial<I_1 extends {
        address?: Buffer | undefined;
        weight?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
        weight?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address" | "weight">]: never; }>(object: I_1): Participant;
};
export declare const Snapshot: {
    $type: "axelar.snapshot.exported.v1beta1.Snapshot";
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    create<I extends {
        height?: string | number | Long.Long | undefined;
        timestamp?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        participants?: {
            [x: string]: {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } | undefined;
            [x: number]: {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } | undefined;
        } | undefined;
        bondedWeight?: Buffer | undefined;
    } & {
        height?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["height"], "$type" | keyof Long.Long>]: never; }) | undefined;
        timestamp?: ({
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
            } & { [K_1 in Exclude<keyof I["timestamp"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_2 in Exclude<keyof I["timestamp"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
        participants?: ({
            [x: string]: {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } | undefined;
            [x: number]: {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } & {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } & { [K_3 in Exclude<keyof I["participants"][string], "$type" | "address" | "weight">]: never; }) | undefined;
            [x: number]: ({
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } & {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } & { [K_4 in Exclude<keyof I["participants"][number], "$type" | "address" | "weight">]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["participants"], string | number>]: never; }) | undefined;
        bondedWeight?: Buffer | undefined;
    } & { [K_6 in Exclude<keyof I, "$type" | "height" | "timestamp" | "participants" | "bondedWeight">]: never; }>(base?: I | undefined): Snapshot;
    fromPartial<I_1 extends {
        height?: string | number | Long.Long | undefined;
        timestamp?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        participants?: {
            [x: string]: {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } | undefined;
            [x: number]: {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } | undefined;
        } | undefined;
        bondedWeight?: Buffer | undefined;
    } & {
        height?: string | number | (Long.Long & {
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
        } & { [K_7 in Exclude<keyof I_1["height"], "$type" | keyof Long.Long>]: never; }) | undefined;
        timestamp?: ({
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
            } & { [K_8 in Exclude<keyof I_1["timestamp"]["seconds"], "$type" | keyof Long.Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_9 in Exclude<keyof I_1["timestamp"], "$type" | "seconds" | "nanos">]: never; }) | undefined;
        participants?: ({
            [x: string]: {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } | undefined;
            [x: number]: {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } & {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } & { [K_10 in Exclude<keyof I_1["participants"][string], "$type" | "address" | "weight">]: never; }) | undefined;
            [x: number]: ({
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } & {
                address?: Buffer | undefined;
                weight?: Buffer | undefined;
            } & { [K_11 in Exclude<keyof I_1["participants"][number], "$type" | "address" | "weight">]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I_1["participants"], string | number>]: never; }) | undefined;
        bondedWeight?: Buffer | undefined;
    } & { [K_13 in Exclude<keyof I_1, "$type" | "height" | "timestamp" | "participants" | "bondedWeight">]: never; }>(object: I_1): Snapshot;
};
export declare const Snapshot_ParticipantsEntry: {
    $type: "axelar.snapshot.exported.v1beta1.Snapshot.ParticipantsEntry";
    encode(message: Snapshot_ParticipantsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Snapshot_ParticipantsEntry;
    fromJSON(object: any): Snapshot_ParticipantsEntry;
    toJSON(message: Snapshot_ParticipantsEntry): unknown;
    create<I extends {
        value?: {
            address?: Buffer | undefined;
            weight?: Buffer | undefined;
        } | undefined;
        key?: string | undefined;
    } & {
        value?: ({
            address?: Buffer | undefined;
            weight?: Buffer | undefined;
        } & {
            address?: Buffer | undefined;
            weight?: Buffer | undefined;
        } & { [K in Exclude<keyof I["value"], "$type" | "address" | "weight">]: never; }) | undefined;
        key?: string | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "value" | "key">]: never; }>(base?: I | undefined): Snapshot_ParticipantsEntry;
    fromPartial<I_1 extends {
        value?: {
            address?: Buffer | undefined;
            weight?: Buffer | undefined;
        } | undefined;
        key?: string | undefined;
    } & {
        value?: ({
            address?: Buffer | undefined;
            weight?: Buffer | undefined;
        } & {
            address?: Buffer | undefined;
            weight?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["value"], "$type" | "address" | "weight">]: never; }) | undefined;
        key?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "value" | "key">]: never; }>(object: I_1): Snapshot_ParticipantsEntry;
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
