import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.multisig.v1beta1";
export interface KeygenStarted {
    module: string;
    keyId: string;
    participants: Uint8Array[];
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
    participant: Uint8Array;
    pubKey: Uint8Array;
}
export interface SigningStarted {
    module: string;
    sigId: Long;
    keyId: string;
    pubKeys: {
        [key: string]: Uint8Array;
    };
    payloadHash: Uint8Array;
    requestingModule: string;
}
export interface SigningStarted_PubKeysEntry {
    key: string;
    value: Uint8Array;
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
    participant: Uint8Array;
    signature: Uint8Array;
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
    participant: Uint8Array;
}
export interface KeygenOptIn {
    participant: Uint8Array;
}
export declare const KeygenStarted: {
    encode(message: KeygenStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenStarted;
    fromJSON(object: any): KeygenStarted;
    toJSON(message: KeygenStarted): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        keyId?: string | undefined;
        participants?: Uint8Array[] | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
        participants?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["participants"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof KeygenStarted>, never>>(object: I): KeygenStarted;
};
export declare const KeygenCompleted: {
    encode(message: KeygenCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenCompleted;
    fromJSON(object: any): KeygenCompleted;
    toJSON(message: KeygenCompleted): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, keyof KeygenCompleted>, never>>(object: I): KeygenCompleted;
};
export declare const KeygenExpired: {
    encode(message: KeygenExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenExpired;
    fromJSON(object: any): KeygenExpired;
    toJSON(message: KeygenExpired): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, keyof KeygenExpired>, never>>(object: I): KeygenExpired;
};
export declare const PubKeySubmitted: {
    encode(message: PubKeySubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PubKeySubmitted;
    fromJSON(object: any): PubKeySubmitted;
    toJSON(message: PubKeySubmitted): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Uint8Array | undefined;
        pubKey?: Uint8Array | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Uint8Array | undefined;
        pubKey?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof PubKeySubmitted>, never>>(object: I): PubKeySubmitted;
};
export declare const SigningStarted: {
    encode(message: SigningStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningStarted;
    fromJSON(object: any): SigningStarted;
    toJSON(message: SigningStarted): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        keyId?: string | undefined;
        pubKeys?: {
            [x: string]: Uint8Array | undefined;
        } | undefined;
        payloadHash?: Uint8Array | undefined;
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
        } & Record<Exclude<keyof I["sigId"], keyof Long.Long>, never>) | undefined;
        keyId?: string | undefined;
        pubKeys?: ({
            [x: string]: Uint8Array | undefined;
        } & {
            [x: string]: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pubKeys"], string | number>, never>) | undefined;
        payloadHash?: Uint8Array | undefined;
        requestingModule?: string | undefined;
    } & Record<Exclude<keyof I, keyof SigningStarted>, never>>(object: I): SigningStarted;
};
export declare const SigningStarted_PubKeysEntry: {
    encode(message: SigningStarted_PubKeysEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningStarted_PubKeysEntry;
    fromJSON(object: any): SigningStarted_PubKeysEntry;
    toJSON(message: SigningStarted_PubKeysEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: Uint8Array | undefined;
    } & {
        key?: string | undefined;
        value?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof SigningStarted_PubKeysEntry>, never>>(object: I): SigningStarted_PubKeysEntry;
};
export declare const SigningCompleted: {
    encode(message: SigningCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningCompleted;
    fromJSON(object: any): SigningCompleted;
    toJSON(message: SigningCompleted): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["sigId"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SigningCompleted>, never>>(object: I): SigningCompleted;
};
export declare const SigningExpired: {
    encode(message: SigningExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningExpired;
    fromJSON(object: any): SigningExpired;
    toJSON(message: SigningExpired): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["sigId"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SigningExpired>, never>>(object: I): SigningExpired;
};
export declare const SignatureSubmitted: {
    encode(message: SignatureSubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignatureSubmitted;
    fromJSON(object: any): SignatureSubmitted;
    toJSON(message: SignatureSubmitted): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        participant?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
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
        } & Record<Exclude<keyof I["sigId"], keyof Long.Long>, never>) | undefined;
        participant?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof SignatureSubmitted>, never>>(object: I): SignatureSubmitted;
};
export declare const KeyAssigned: {
    encode(message: KeyAssigned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyAssigned;
    fromJSON(object: any): KeyAssigned;
    toJSON(message: KeyAssigned): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, keyof KeyAssigned>, never>>(object: I): KeyAssigned;
};
export declare const KeyRotated: {
    encode(message: KeyRotated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyRotated;
    fromJSON(object: any): KeyRotated;
    toJSON(message: KeyRotated): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & Record<Exclude<keyof I, keyof KeyRotated>, never>>(object: I): KeyRotated;
};
export declare const KeygenOptOut: {
    encode(message: KeygenOptOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptOut;
    fromJSON(object: any): KeygenOptOut;
    toJSON(message: KeygenOptOut): unknown;
    fromPartial<I extends {
        participant?: Uint8Array | undefined;
    } & {
        participant?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "participant">, never>>(object: I): KeygenOptOut;
};
export declare const KeygenOptIn: {
    encode(message: KeygenOptIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptIn;
    fromJSON(object: any): KeygenOptIn;
    toJSON(message: KeygenOptIn): unknown;
    fromPartial<I extends {
        participant?: Uint8Array | undefined;
    } & {
        participant?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "participant">, never>>(object: I): KeygenOptIn;
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
