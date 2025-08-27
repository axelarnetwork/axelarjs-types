/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "axelar.multisig.v1beta1";
export interface StartKeygenRequest {
    sender: string;
    keyId: string;
}
export interface StartKeygenResponse {
}
export interface SubmitPubKeyRequest {
    sender: string;
    keyId: string;
    pubKey: Buffer;
    signature: Buffer;
}
export interface SubmitPubKeyResponse {
}
export interface SubmitSignatureRequest {
    sender: string;
    sigId: Long;
    signature: Buffer;
}
export interface SubmitSignatureResponse {
}
export interface RotateKeyRequest {
    sender: string;
    chain: string;
    keyId: string;
}
export interface RotateKeyResponse {
}
export interface KeygenOptOutRequest {
    sender: string;
}
export interface KeygenOptOutResponse {
}
export interface KeygenOptInRequest {
    sender: string;
}
export interface KeygenOptInResponse {
}
export declare const StartKeygenRequest: {
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenRequest;
    fromJSON(object: any): StartKeygenRequest;
    toJSON(message: StartKeygenRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof StartKeygenRequest>]: never; }>(base?: I | undefined): StartKeygenRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof StartKeygenRequest>]: never; }>(object: I_1): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenResponse;
    fromJSON(_: any): StartKeygenResponse;
    toJSON(_: StartKeygenResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): StartKeygenResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): StartKeygenResponse;
};
export declare const SubmitPubKeyRequest: {
    encode(message: SubmitPubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitPubKeyRequest;
    fromJSON(object: any): SubmitPubKeyRequest;
    toJSON(message: SubmitPubKeyRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        keyId?: string | undefined;
        pubKey?: Buffer | undefined;
        signature?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        keyId?: string | undefined;
        pubKey?: Buffer | undefined;
        signature?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof SubmitPubKeyRequest>]: never; }>(base?: I | undefined): SubmitPubKeyRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        keyId?: string | undefined;
        pubKey?: Buffer | undefined;
        signature?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        keyId?: string | undefined;
        pubKey?: Buffer | undefined;
        signature?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SubmitPubKeyRequest>]: never; }>(object: I_1): SubmitPubKeyRequest;
};
export declare const SubmitPubKeyResponse: {
    encode(_: SubmitPubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitPubKeyResponse;
    fromJSON(_: any): SubmitPubKeyResponse;
    toJSON(_: SubmitPubKeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): SubmitPubKeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SubmitPubKeyResponse;
};
export declare const SubmitSignatureRequest: {
    encode(message: SubmitSignatureRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitSignatureRequest;
    fromJSON(object: any): SubmitSignatureRequest;
    toJSON(message: SubmitSignatureRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        signature?: Buffer | undefined;
    } & {
        sender?: string | undefined;
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
        signature?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SubmitSignatureRequest>]: never; }>(base?: I | undefined): SubmitSignatureRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        sigId?: string | number | Long.Long | undefined;
        signature?: Buffer | undefined;
    } & {
        sender?: string | undefined;
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
        signature?: Buffer | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SubmitSignatureRequest>]: never; }>(object: I_1): SubmitSignatureRequest;
};
export declare const SubmitSignatureResponse: {
    encode(_: SubmitSignatureResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitSignatureResponse;
    fromJSON(_: any): SubmitSignatureResponse;
    toJSON(_: SubmitSignatureResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): SubmitSignatureResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SubmitSignatureResponse;
};
export declare const RotateKeyRequest: {
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyRequest;
    fromJSON(object: any): RotateKeyRequest;
    toJSON(message: RotateKeyRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RotateKeyRequest>]: never; }>(base?: I | undefined): RotateKeyRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & {
        sender?: string | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof RotateKeyRequest>]: never; }>(object: I_1): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyResponse;
    fromJSON(_: any): RotateKeyResponse;
    toJSON(_: RotateKeyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RotateKeyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RotateKeyResponse;
};
export declare const KeygenOptOutRequest: {
    encode(message: KeygenOptOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptOutRequest;
    fromJSON(object: any): KeygenOptOutRequest;
    toJSON(message: KeygenOptOutRequest): unknown;
    create<I extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, "sender">]: never; }>(base?: I | undefined): KeygenOptOutRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "sender">]: never; }>(object: I_1): KeygenOptOutRequest;
};
export declare const KeygenOptOutResponse: {
    encode(_: KeygenOptOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptOutResponse;
    fromJSON(_: any): KeygenOptOutResponse;
    toJSON(_: KeygenOptOutResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): KeygenOptOutResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): KeygenOptOutResponse;
};
export declare const KeygenOptInRequest: {
    encode(message: KeygenOptInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptInRequest;
    fromJSON(object: any): KeygenOptInRequest;
    toJSON(message: KeygenOptInRequest): unknown;
    create<I extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K in Exclude<keyof I, "sender">]: never; }>(base?: I | undefined): KeygenOptInRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "sender">]: never; }>(object: I_1): KeygenOptInRequest;
};
export declare const KeygenOptInResponse: {
    encode(_: KeygenOptInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KeygenOptInResponse;
    fromJSON(_: any): KeygenOptInResponse;
    toJSON(_: KeygenOptInResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): KeygenOptInResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): KeygenOptInResponse;
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
