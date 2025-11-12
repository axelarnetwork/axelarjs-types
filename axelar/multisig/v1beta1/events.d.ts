/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.multisig.v1beta1";
export interface KeygenStarted {
    $type: "axelar.multisig.v1beta1.KeygenStarted";
    module: string;
    keyId: string;
    participants: Buffer[];
}
export interface KeygenCompleted {
    $type: "axelar.multisig.v1beta1.KeygenCompleted";
    module: string;
    keyId: string;
}
export interface KeygenExpired {
    $type: "axelar.multisig.v1beta1.KeygenExpired";
    module: string;
    keyId: string;
}
export interface PubKeySubmitted {
    $type: "axelar.multisig.v1beta1.PubKeySubmitted";
    module: string;
    keyId: string;
    participant: Buffer;
    pubKey: Buffer;
}
export interface SigningStarted {
    $type: "axelar.multisig.v1beta1.SigningStarted";
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
    $type: "axelar.multisig.v1beta1.SigningStarted.PubKeysEntry";
    key: string;
    value: Buffer;
}
export interface SigningCompleted {
    $type: "axelar.multisig.v1beta1.SigningCompleted";
    module: string;
    sigId: Long;
}
export interface SigningExpired {
    $type: "axelar.multisig.v1beta1.SigningExpired";
    module: string;
    sigId: Long;
}
export interface SignatureSubmitted {
    $type: "axelar.multisig.v1beta1.SignatureSubmitted";
    module: string;
    sigId: Long;
    participant: Buffer;
    signature: Buffer;
}
export interface KeyAssigned {
    $type: "axelar.multisig.v1beta1.KeyAssigned";
    module: string;
    chain: string;
    keyId: string;
}
export interface KeyRotated {
    $type: "axelar.multisig.v1beta1.KeyRotated";
    module: string;
    chain: string;
    keyId: string;
}
export interface KeygenOptOut {
    $type: "axelar.multisig.v1beta1.KeygenOptOut";
    participant: Buffer;
}
export interface KeygenOptIn {
    $type: "axelar.multisig.v1beta1.KeygenOptIn";
    participant: Buffer;
}
export declare const KeygenStarted: {
    $type: "axelar.multisig.v1beta1.KeygenStarted";
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
        participants?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["participants"], "$type" | keyof Buffer[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "module" | "keyId" | "participants">]: never; }>(base?: I | undefined): KeygenStarted;
    fromPartial<I_1 extends {
        module?: string | undefined;
        keyId?: string | undefined;
        participants?: Buffer[] | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
        participants?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I_1["participants"], "$type" | keyof Buffer[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "module" | "keyId" | "participants">]: never; }>(object: I_1): KeygenStarted;
};
export declare const KeygenCompleted: {
    $type: "axelar.multisig.v1beta1.KeygenCompleted";
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
    } & { [K in Exclude<keyof I, "$type" | "module" | "keyId">]: never; }>(base?: I | undefined): KeygenCompleted;
    fromPartial<I_1 extends {
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "module" | "keyId">]: never; }>(object: I_1): KeygenCompleted;
};
export declare const KeygenExpired: {
    $type: "axelar.multisig.v1beta1.KeygenExpired";
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
    } & { [K in Exclude<keyof I, "$type" | "module" | "keyId">]: never; }>(base?: I | undefined): KeygenExpired;
    fromPartial<I_1 extends {
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "module" | "keyId">]: never; }>(object: I_1): KeygenExpired;
};
export declare const PubKeySubmitted: {
    $type: "axelar.multisig.v1beta1.PubKeySubmitted";
    encode(message: PubKeySubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PubKeySubmitted;
    fromJSON(object: any): PubKeySubmitted;
    toJSON(message: PubKeySubmitted): unknown;
    create<I extends {
        pubKey?: Buffer | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Buffer | undefined;
    } & {
        pubKey?: Buffer | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "pubKey" | "module" | "keyId" | "participant">]: never; }>(base?: I | undefined): PubKeySubmitted;
    fromPartial<I_1 extends {
        pubKey?: Buffer | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Buffer | undefined;
    } & {
        pubKey?: Buffer | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
        participant?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "pubKey" | "module" | "keyId" | "participant">]: never; }>(object: I_1): PubKeySubmitted;
};
export declare const SigningStarted: {
    $type: "axelar.multisig.v1beta1.SigningStarted";
    encode(message: SigningStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningStarted;
    fromJSON(object: any): SigningStarted;
    toJSON(message: SigningStarted): unknown;
    create<I extends {
        payloadHash?: Buffer | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        pubKeys?: {
            [x: string]: Buffer | undefined;
            [x: number]: Buffer | undefined;
        } | undefined;
        requestingModule?: string | undefined;
    } & {
        payloadHash?: Buffer | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
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
        } & { [K in Exclude<keyof I["sigId"], "$type" | keyof Long.Long>]: never; }) | undefined;
        pubKeys?: ({
            [x: string]: Buffer | undefined;
            [x: number]: Buffer | undefined;
        } & {
            [x: string]: Buffer | undefined;
            [x: number]: Buffer | undefined;
        } & { [K_1 in Exclude<keyof I["pubKeys"], string | number>]: never; }) | undefined;
        requestingModule?: string | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "payloadHash" | "module" | "keyId" | "sigId" | "pubKeys" | "requestingModule">]: never; }>(base?: I | undefined): SigningStarted;
    fromPartial<I_1 extends {
        payloadHash?: Buffer | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        pubKeys?: {
            [x: string]: Buffer | undefined;
            [x: number]: Buffer | undefined;
        } | undefined;
        requestingModule?: string | undefined;
    } & {
        payloadHash?: Buffer | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
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
        } & { [K_3 in Exclude<keyof I_1["sigId"], "$type" | keyof Long.Long>]: never; }) | undefined;
        pubKeys?: ({
            [x: string]: Buffer | undefined;
            [x: number]: Buffer | undefined;
        } & {
            [x: string]: Buffer | undefined;
            [x: number]: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I_1["pubKeys"], string | number>]: never; }) | undefined;
        requestingModule?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "payloadHash" | "module" | "keyId" | "sigId" | "pubKeys" | "requestingModule">]: never; }>(object: I_1): SigningStarted;
};
export declare const SigningStarted_PubKeysEntry: {
    $type: "axelar.multisig.v1beta1.SigningStarted.PubKeysEntry";
    encode(message: SigningStarted_PubKeysEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningStarted_PubKeysEntry;
    fromJSON(object: any): SigningStarted_PubKeysEntry;
    toJSON(message: SigningStarted_PubKeysEntry): unknown;
    create<I extends {
        value?: Buffer | undefined;
        key?: string | undefined;
    } & {
        value?: Buffer | undefined;
        key?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "value" | "key">]: never; }>(base?: I | undefined): SigningStarted_PubKeysEntry;
    fromPartial<I_1 extends {
        value?: Buffer | undefined;
        key?: string | undefined;
    } & {
        value?: Buffer | undefined;
        key?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "value" | "key">]: never; }>(object: I_1): SigningStarted_PubKeysEntry;
};
export declare const SigningCompleted: {
    $type: "axelar.multisig.v1beta1.SigningCompleted";
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
        } & { [K in Exclude<keyof I["sigId"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "module" | "sigId">]: never; }>(base?: I | undefined): SigningCompleted;
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
        } & { [K_2 in Exclude<keyof I_1["sigId"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "module" | "sigId">]: never; }>(object: I_1): SigningCompleted;
};
export declare const SigningExpired: {
    $type: "axelar.multisig.v1beta1.SigningExpired";
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
        } & { [K in Exclude<keyof I["sigId"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "module" | "sigId">]: never; }>(base?: I | undefined): SigningExpired;
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
        } & { [K_2 in Exclude<keyof I_1["sigId"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "module" | "sigId">]: never; }>(object: I_1): SigningExpired;
};
export declare const SignatureSubmitted: {
    $type: "axelar.multisig.v1beta1.SignatureSubmitted";
    encode(message: SignatureSubmitted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignatureSubmitted;
    fromJSON(object: any): SignatureSubmitted;
    toJSON(message: SignatureSubmitted): unknown;
    create<I extends {
        signature?: Buffer | undefined;
        module?: string | undefined;
        participant?: Buffer | undefined;
        sigId?: string | number | Long.Long | undefined;
    } & {
        signature?: Buffer | undefined;
        module?: string | undefined;
        participant?: Buffer | undefined;
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
        } & { [K in Exclude<keyof I["sigId"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "signature" | "module" | "participant" | "sigId">]: never; }>(base?: I | undefined): SignatureSubmitted;
    fromPartial<I_1 extends {
        signature?: Buffer | undefined;
        module?: string | undefined;
        participant?: Buffer | undefined;
        sigId?: string | number | Long.Long | undefined;
    } & {
        signature?: Buffer | undefined;
        module?: string | undefined;
        participant?: Buffer | undefined;
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
        } & { [K_2 in Exclude<keyof I_1["sigId"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "signature" | "module" | "participant" | "sigId">]: never; }>(object: I_1): SignatureSubmitted;
};
export declare const KeyAssigned: {
    $type: "axelar.multisig.v1beta1.KeyAssigned";
    encode(message: KeyAssigned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyAssigned;
    fromJSON(object: any): KeyAssigned;
    toJSON(message: KeyAssigned): unknown;
    create<I extends {
        chain?: string | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        chain?: string | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain" | "module" | "keyId">]: never; }>(base?: I | undefined): KeyAssigned;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        chain?: string | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain" | "module" | "keyId">]: never; }>(object: I_1): KeyAssigned;
};
export declare const KeyRotated: {
    $type: "axelar.multisig.v1beta1.KeyRotated";
    encode(message: KeyRotated, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyRotated;
    fromJSON(object: any): KeyRotated;
    toJSON(message: KeyRotated): unknown;
    create<I extends {
        chain?: string | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        chain?: string | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain" | "module" | "keyId">]: never; }>(base?: I | undefined): KeyRotated;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
    } & {
        chain?: string | undefined;
        module?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain" | "module" | "keyId">]: never; }>(object: I_1): KeyRotated;
};
export declare const KeygenOptOut: {
    $type: "axelar.multisig.v1beta1.KeygenOptOut";
    encode(message: KeygenOptOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptOut;
    fromJSON(object: any): KeygenOptOut;
    toJSON(message: KeygenOptOut): unknown;
    create<I extends {
        participant?: Buffer | undefined;
    } & {
        participant?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "participant">]: never; }>(base?: I | undefined): KeygenOptOut;
    fromPartial<I_1 extends {
        participant?: Buffer | undefined;
    } & {
        participant?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "participant">]: never; }>(object: I_1): KeygenOptOut;
};
export declare const KeygenOptIn: {
    $type: "axelar.multisig.v1beta1.KeygenOptIn";
    encode(message: KeygenOptIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptIn;
    fromJSON(object: any): KeygenOptIn;
    toJSON(message: KeygenOptIn): unknown;
    create<I extends {
        participant?: Buffer | undefined;
    } & {
        participant?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "participant">]: never; }>(base?: I | undefined): KeygenOptIn;
    fromPartial<I_1 extends {
        participant?: Buffer | undefined;
    } & {
        participant?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "participant">]: never; }>(object: I_1): KeygenOptIn;
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
