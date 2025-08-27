/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.multisig.v1beta1";
export interface KeygenStarted {
    module: string;
    keyId: string;
    participants: Buffer[];
}
export interface KeygenCompleted {
    module: string;
    keyId: string;
}
export interface KeygenExpired {
    module: string;
    keyId: string;
}
export interface PubKeySubmitted {
    module: string;
    keyId: string;
    participant: Buffer;
    pubKey: Buffer;
}
export interface SigningStarted {
    module: string;
    sigId: Long;
    keyId: string;
    pubKeys: {
        [key: string]: Buffer;
    };
    payloadHash: Buffer;
    requestingModule: string;
}
export interface SigningStarted_PubKeysEntry {
    key: string;
    value: Buffer;
}
export interface SigningCompleted {
    module: string;
    sigId: Long;
}
export interface SigningExpired {
    module: string;
    sigId: Long;
}
export interface SignatureSubmitted {
    module: string;
    sigId: Long;
    participant: Buffer;
    signature: Buffer;
}
export interface KeyAssigned {
    module: string;
    chain: string;
    keyId: string;
}
export interface KeyRotated {
    module: string;
    chain: string;
    keyId: string;
}
export interface KeygenOptOut {
    participant: Buffer;
}
export interface KeygenOptIn {
    participant: Buffer;
}
export declare const KeygenStarted: {
    encode(message: KeygenStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenStarted;
    fromJSON(object: any): KeygenStarted;
    toJSON(message: KeygenStarted): unknown;
    create<I extends {
        module?: string | undefined;
        keyId?: string | undefined;
        participants?: Buffer[] | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
        participants?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["participants"], keyof Buffer[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof KeygenStarted>]: never; }>(base?: I | undefined): KeygenStarted;
    fromPartial<I_1 extends {
        module?: string | undefined;
        keyId?: string | undefined;
        participants?: Buffer[] | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
        participants?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I_1["participants"], keyof Buffer[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof KeygenStarted>]: never; }>(object: I_1): KeygenStarted;
};
export declare const KeygenCompleted: {
    encode(message: KeygenCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenCompleted;
    fromJSON(object: any): KeygenCompleted;
    toJSON(message: KeygenCompleted): unknown;
    create<I extends {
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof KeygenCompleted>]: never; }>(base?: I | undefined): KeygenCompleted;
    fromPartial<I_1 extends {
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeygenCompleted>]: never; }>(object: I_1): KeygenCompleted;
};
export declare const KeygenExpired: {
    encode(message: KeygenExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenExpired;
    fromJSON(object: any): KeygenExpired;
    toJSON(message: KeygenExpired): unknown;
    create<I extends {
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof KeygenExpired>]: never; }>(base?: I | undefined): KeygenExpired;
    fromPartial<I_1 extends {
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeygenExpired>]: never; }>(object: I_1): KeygenExpired;
};
export declare const PubKeySubmitted: {
    encode(message: PubKeySubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PubKeySubmitted;
    fromJSON(object: any): PubKeySubmitted;
    toJSON(message: PubKeySubmitted): unknown;
    create<I extends {
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Buffer | undefined;
        pubKey?: Buffer | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Buffer | undefined;
        pubKey?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof PubKeySubmitted>]: never; }>(base?: I | undefined): PubKeySubmitted;
    fromPartial<I_1 extends {
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Buffer | undefined;
        pubKey?: Buffer | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Buffer | undefined;
        pubKey?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PubKeySubmitted>]: never; }>(object: I_1): PubKeySubmitted;
};
export declare const SigningStarted: {
    encode(message: SigningStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningStarted;
    fromJSON(object: any): SigningStarted;
    toJSON(message: SigningStarted): unknown;
    create<I extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        keyId?: string | undefined;
        pubKeys?: {
            [x: string]: Buffer | undefined;
        } | undefined;
        payloadHash?: Buffer | undefined;
        requestingModule?: string | undefined;
    } & {
        module?: string | undefined;
        sigId?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["sigId"], keyof Long.Long>]: never; }) | undefined;
        keyId?: string | undefined;
        pubKeys?: ({
            [x: string]: Buffer | undefined;
        } & {
            [x: string]: Buffer | undefined;
        } & { [K_1 in Exclude<keyof I["pubKeys"], string | number>]: never; }) | undefined;
        payloadHash?: Buffer | undefined;
        requestingModule?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SigningStarted>]: never; }>(base?: I | undefined): SigningStarted;
    fromPartial<I_1 extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        keyId?: string | undefined;
        pubKeys?: {
            [x: string]: Buffer | undefined;
        } | undefined;
        payloadHash?: Buffer | undefined;
        requestingModule?: string | undefined;
    } & {
        module?: string | undefined;
        sigId?: string | number | (Long.Long & {
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
        } & { [K_3 in Exclude<keyof I_1["sigId"], keyof Long.Long>]: never; }) | undefined;
        keyId?: string | undefined;
        pubKeys?: ({
            [x: string]: Buffer | undefined;
        } & {
            [x: string]: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I_1["pubKeys"], string | number>]: never; }) | undefined;
        payloadHash?: Buffer | undefined;
        requestingModule?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SigningStarted>]: never; }>(object: I_1): SigningStarted;
};
export declare const SigningStarted_PubKeysEntry: {
    encode(message: SigningStarted_PubKeysEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningStarted_PubKeysEntry;
    fromJSON(object: any): SigningStarted_PubKeysEntry;
    toJSON(message: SigningStarted_PubKeysEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: Buffer | undefined;
    } & {
        key?: string | undefined;
        value?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof SigningStarted_PubKeysEntry>]: never; }>(base?: I | undefined): SigningStarted_PubKeysEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: Buffer | undefined;
    } & {
        key?: string | undefined;
        value?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SigningStarted_PubKeysEntry>]: never; }>(object: I_1): SigningStarted_PubKeysEntry;
};
export declare const SigningCompleted: {
    encode(message: SigningCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningCompleted;
    fromJSON(object: any): SigningCompleted;
    toJSON(message: SigningCompleted): unknown;
    create<I extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
    } & {
        module?: string | undefined;
        sigId?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["sigId"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SigningCompleted>]: never; }>(base?: I | undefined): SigningCompleted;
    fromPartial<I_1 extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
    } & {
        module?: string | undefined;
        sigId?: string | number | (Long.Long & {
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
        } & { [K_2 in Exclude<keyof I_1["sigId"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SigningCompleted>]: never; }>(object: I_1): SigningCompleted;
};
export declare const SigningExpired: {
    encode(message: SigningExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningExpired;
    fromJSON(object: any): SigningExpired;
    toJSON(message: SigningExpired): unknown;
    create<I extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
    } & {
        module?: string | undefined;
        sigId?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["sigId"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SigningExpired>]: never; }>(base?: I | undefined): SigningExpired;
    fromPartial<I_1 extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
    } & {
        module?: string | undefined;
        sigId?: string | number | (Long.Long & {
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
        } & { [K_2 in Exclude<keyof I_1["sigId"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SigningExpired>]: never; }>(object: I_1): SigningExpired;
};
export declare const SignatureSubmitted: {
    encode(message: SignatureSubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignatureSubmitted;
    fromJSON(object: any): SignatureSubmitted;
    toJSON(message: SignatureSubmitted): unknown;
    create<I extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        participant?: Buffer | undefined;
        signature?: Buffer | undefined;
    } & {
        module?: string | undefined;
        sigId?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["sigId"], keyof Long.Long>]: never; }) | undefined;
        participant?: Buffer | undefined;
        signature?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SignatureSubmitted>]: never; }>(base?: I | undefined): SignatureSubmitted;
    fromPartial<I_1 extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        participant?: Buffer | undefined;
        signature?: Buffer | undefined;
    } & {
        module?: string | undefined;
        sigId?: string | number | (Long.Long & {
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
        } & { [K_2 in Exclude<keyof I_1["sigId"], keyof Long.Long>]: never; }) | undefined;
        participant?: Buffer | undefined;
        signature?: Buffer | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SignatureSubmitted>]: never; }>(object: I_1): SignatureSubmitted;
};
export declare const KeyAssigned: {
    encode(message: KeyAssigned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyAssigned;
    fromJSON(object: any): KeyAssigned;
    toJSON(message: KeyAssigned): unknown;
    create<I extends {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof KeyAssigned>]: never; }>(base?: I | undefined): KeyAssigned;
    fromPartial<I_1 extends {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeyAssigned>]: never; }>(object: I_1): KeyAssigned;
};
export declare const KeyRotated: {
    encode(message: KeyRotated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyRotated;
    fromJSON(object: any): KeyRotated;
    toJSON(message: KeyRotated): unknown;
    create<I extends {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof KeyRotated>]: never; }>(base?: I | undefined): KeyRotated;
    fromPartial<I_1 extends {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeyRotated>]: never; }>(object: I_1): KeyRotated;
};
export declare const KeygenOptOut: {
    encode(message: KeygenOptOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptOut;
    fromJSON(object: any): KeygenOptOut;
    toJSON(message: KeygenOptOut): unknown;
    create<I extends {
        participant?: Buffer | undefined;
    } & {
        participant?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "participant">]: never; }>(base?: I | undefined): KeygenOptOut;
    fromPartial<I_1 extends {
        participant?: Buffer | undefined;
    } & {
        participant?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "participant">]: never; }>(object: I_1): KeygenOptOut;
};
export declare const KeygenOptIn: {
    encode(message: KeygenOptIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptIn;
    fromJSON(object: any): KeygenOptIn;
    toJSON(message: KeygenOptIn): unknown;
    create<I extends {
        participant?: Buffer | undefined;
    } & {
        participant?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "participant">]: never; }>(base?: I | undefined): KeygenOptIn;
    fromPartial<I_1 extends {
        participant?: Buffer | undefined;
    } & {
        participant?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "participant">]: never; }>(object: I_1): KeygenOptIn;
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
