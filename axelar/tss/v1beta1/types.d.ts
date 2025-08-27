/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { KeyRole, KeyType } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.tss.v1beta1";
export interface KeygenVoteData {
    pubKey: Buffer;
    groupRecoveryInfo: Buffer;
}
/** KeyInfo holds information about a key */
export interface KeyInfo {
    keyId: string;
    keyRole: KeyRole;
    keyType: KeyType;
}
export interface MultisigInfo {
    id: string;
    timeout: Long;
    targetNum: Long;
    infos: MultisigInfo_Info[];
}
export interface MultisigInfo_Info {
    participant: Buffer;
    data: Buffer[];
}
export interface KeyRecoveryInfo {
    keyId: string;
    public: Buffer;
    private: {
        [key: string]: Buffer;
    };
}
export interface KeyRecoveryInfo_PrivateEntry {
    key: string;
    value: Buffer;
}
export interface ExternalKeys {
    chain: string;
    keyIds: string[];
}
export interface ValidatorStatus {
    validator: Buffer;
    suspendedUntil: Long;
}
export declare const KeygenVoteData: {
    encode(message: KeygenVoteData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenVoteData;
    fromJSON(object: any): KeygenVoteData;
    toJSON(message: KeygenVoteData): unknown;
    create<I extends {
        pubKey?: Buffer | undefined;
        groupRecoveryInfo?: Buffer | undefined;
    } & {
        pubKey?: Buffer | undefined;
        groupRecoveryInfo?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof KeygenVoteData>]: never; }>(base?: I | undefined): KeygenVoteData;
    fromPartial<I_1 extends {
        pubKey?: Buffer | undefined;
        groupRecoveryInfo?: Buffer | undefined;
    } & {
        pubKey?: Buffer | undefined;
        groupRecoveryInfo?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeygenVoteData>]: never; }>(object: I_1): KeygenVoteData;
};
export declare const KeyInfo: {
    encode(message: KeyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyInfo;
    fromJSON(object: any): KeyInfo;
    toJSON(message: KeyInfo): unknown;
    create<I extends {
        keyId?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyType?: KeyType | undefined;
    } & {
        keyId?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyType?: KeyType | undefined;
    } & { [K in Exclude<keyof I, keyof KeyInfo>]: never; }>(base?: I | undefined): KeyInfo;
    fromPartial<I_1 extends {
        keyId?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyType?: KeyType | undefined;
    } & {
        keyId?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyType?: KeyType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeyInfo>]: never; }>(object: I_1): KeyInfo;
};
export declare const MultisigInfo: {
    encode(message: MultisigInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MultisigInfo;
    fromJSON(object: any): MultisigInfo;
    toJSON(message: MultisigInfo): unknown;
    create<I extends {
        id?: string | undefined;
        timeout?: string | number | Long.Long | undefined;
        targetNum?: string | number | Long.Long | undefined;
        infos?: {
            participant?: Buffer | undefined;
            data?: Buffer[] | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        timeout?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["timeout"], keyof Long.Long>]: never; }) | undefined;
        targetNum?: string | number | (Long.Long & {
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
        } & { [K_1 in Exclude<keyof I["targetNum"], keyof Long.Long>]: never; }) | undefined;
        infos?: ({
            participant?: Buffer | undefined;
            data?: Buffer[] | undefined;
        }[] & ({
            participant?: Buffer | undefined;
            data?: Buffer[] | undefined;
        } & {
            participant?: Buffer | undefined;
            data?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I["infos"][number]["data"], keyof Buffer[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["infos"][number], keyof MultisigInfo_Info>]: never; })[] & { [K_4 in Exclude<keyof I["infos"], keyof {
            participant?: Buffer | undefined;
            data?: Buffer[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof MultisigInfo>]: never; }>(base?: I | undefined): MultisigInfo;
    fromPartial<I_1 extends {
        id?: string | undefined;
        timeout?: string | number | Long.Long | undefined;
        targetNum?: string | number | Long.Long | undefined;
        infos?: {
            participant?: Buffer | undefined;
            data?: Buffer[] | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        timeout?: string | number | (Long.Long & {
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
        } & { [K_6 in Exclude<keyof I_1["timeout"], keyof Long.Long>]: never; }) | undefined;
        targetNum?: string | number | (Long.Long & {
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
        } & { [K_7 in Exclude<keyof I_1["targetNum"], keyof Long.Long>]: never; }) | undefined;
        infos?: ({
            participant?: Buffer | undefined;
            data?: Buffer[] | undefined;
        }[] & ({
            participant?: Buffer | undefined;
            data?: Buffer[] | undefined;
        } & {
            participant?: Buffer | undefined;
            data?: (Buffer[] & Buffer[] & { [K_8 in Exclude<keyof I_1["infos"][number]["data"], keyof Buffer[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["infos"][number], keyof MultisigInfo_Info>]: never; })[] & { [K_10 in Exclude<keyof I_1["infos"], keyof {
            participant?: Buffer | undefined;
            data?: Buffer[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof MultisigInfo>]: never; }>(object: I_1): MultisigInfo;
};
export declare const MultisigInfo_Info: {
    encode(message: MultisigInfo_Info, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MultisigInfo_Info;
    fromJSON(object: any): MultisigInfo_Info;
    toJSON(message: MultisigInfo_Info): unknown;
    create<I extends {
        participant?: Buffer | undefined;
        data?: Buffer[] | undefined;
    } & {
        participant?: Buffer | undefined;
        data?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["data"], keyof Buffer[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MultisigInfo_Info>]: never; }>(base?: I | undefined): MultisigInfo_Info;
    fromPartial<I_1 extends {
        participant?: Buffer | undefined;
        data?: Buffer[] | undefined;
    } & {
        participant?: Buffer | undefined;
        data?: (Buffer[] & Buffer[] & { [K_2 in Exclude<keyof I_1["data"], keyof Buffer[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof MultisigInfo_Info>]: never; }>(object: I_1): MultisigInfo_Info;
};
export declare const KeyRecoveryInfo: {
    encode(message: KeyRecoveryInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyRecoveryInfo;
    fromJSON(object: any): KeyRecoveryInfo;
    toJSON(message: KeyRecoveryInfo): unknown;
    create<I extends {
        keyId?: string | undefined;
        public?: Buffer | undefined;
        private?: {
            [x: string]: Buffer | undefined;
        } | undefined;
    } & {
        keyId?: string | undefined;
        public?: Buffer | undefined;
        private?: ({
            [x: string]: Buffer | undefined;
        } & {
            [x: string]: Buffer | undefined;
        } & { [K in Exclude<keyof I["private"], string | number>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof KeyRecoveryInfo>]: never; }>(base?: I | undefined): KeyRecoveryInfo;
    fromPartial<I_1 extends {
        keyId?: string | undefined;
        public?: Buffer | undefined;
        private?: {
            [x: string]: Buffer | undefined;
        } | undefined;
    } & {
        keyId?: string | undefined;
        public?: Buffer | undefined;
        private?: ({
            [x: string]: Buffer | undefined;
        } & {
            [x: string]: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["private"], string | number>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof KeyRecoveryInfo>]: never; }>(object: I_1): KeyRecoveryInfo;
};
export declare const KeyRecoveryInfo_PrivateEntry: {
    encode(message: KeyRecoveryInfo_PrivateEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeyRecoveryInfo_PrivateEntry;
    fromJSON(object: any): KeyRecoveryInfo_PrivateEntry;
    toJSON(message: KeyRecoveryInfo_PrivateEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: Buffer | undefined;
    } & {
        key?: string | undefined;
        value?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof KeyRecoveryInfo_PrivateEntry>]: never; }>(base?: I | undefined): KeyRecoveryInfo_PrivateEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: Buffer | undefined;
    } & {
        key?: string | undefined;
        value?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeyRecoveryInfo_PrivateEntry>]: never; }>(object: I_1): KeyRecoveryInfo_PrivateEntry;
};
export declare const ExternalKeys: {
    encode(message: ExternalKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalKeys;
    fromJSON(object: any): ExternalKeys;
    toJSON(message: ExternalKeys): unknown;
    create<I extends {
        chain?: string | undefined;
        keyIds?: string[] | undefined;
    } & {
        chain?: string | undefined;
        keyIds?: (string[] & string[] & { [K in Exclude<keyof I["keyIds"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ExternalKeys>]: never; }>(base?: I | undefined): ExternalKeys;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        keyIds?: string[] | undefined;
    } & {
        chain?: string | undefined;
        keyIds?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["keyIds"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ExternalKeys>]: never; }>(object: I_1): ExternalKeys;
};
export declare const ValidatorStatus: {
    encode(message: ValidatorStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorStatus;
    fromJSON(object: any): ValidatorStatus;
    toJSON(message: ValidatorStatus): unknown;
    create<I extends {
        validator?: Buffer | undefined;
        suspendedUntil?: string | number | Long.Long | undefined;
    } & {
        validator?: Buffer | undefined;
        suspendedUntil?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["suspendedUntil"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ValidatorStatus>]: never; }>(base?: I | undefined): ValidatorStatus;
    fromPartial<I_1 extends {
        validator?: Buffer | undefined;
        suspendedUntil?: string | number | Long.Long | undefined;
    } & {
        validator?: Buffer | undefined;
        suspendedUntil?: string | number | (Long.Long & {
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
        } & { [K_2 in Exclude<keyof I_1["suspendedUntil"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ValidatorStatus>]: never; }>(object: I_1): ValidatorStatus;
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
