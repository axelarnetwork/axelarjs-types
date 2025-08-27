import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { FeeInfo } from "../exported/v1beta1/types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface RegisterChainMaintainerRequest {
    chains: string[];
    sender: string;
}
export interface RegisterChainMaintainerResponse {
}
export interface DeregisterChainMaintainerRequest {
    chains: string[];
    sender: string;
}
export interface DeregisterChainMaintainerResponse {
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
    chains: string[];
    sender: string;
}
export interface ActivateChainResponse {
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
    chains: string[];
    sender: string;
}
export interface DeactivateChainResponse {
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
    feeInfo?: FeeInfo | undefined;
    sender: string;
}
export interface RegisterAssetFeeResponse {
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequest {
    chain: string;
    limit?: Coin | undefined;
    window?: Duration | undefined;
    sender: string;
}
export interface SetTransferRateLimitResponse {
}
export declare const RegisterChainMaintainerRequest: {
    encode(message: RegisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterChainMaintainerRequest;
    fromJSON(object: any): RegisterChainMaintainerRequest;
    toJSON(message: RegisterChainMaintainerRequest): unknown;
    create<I extends {
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        chains?: (string[] & string[] & { [K in Exclude<keyof I["chains"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof RegisterChainMaintainerRequest>]: never; }>(base?: I | undefined): RegisterChainMaintainerRequest;
    fromPartial<I_1 extends {
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        chains?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["chains"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof RegisterChainMaintainerRequest>]: never; }>(object: I_1): RegisterChainMaintainerRequest;
};
export declare const RegisterChainMaintainerResponse: {
    encode(_: RegisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterChainMaintainerResponse;
    fromJSON(_: any): RegisterChainMaintainerResponse;
    toJSON(_: RegisterChainMaintainerResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RegisterChainMaintainerResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RegisterChainMaintainerResponse;
};
export declare const DeregisterChainMaintainerRequest: {
    encode(message: DeregisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterChainMaintainerRequest;
    fromJSON(object: any): DeregisterChainMaintainerRequest;
    toJSON(message: DeregisterChainMaintainerRequest): unknown;
    create<I extends {
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        chains?: (string[] & string[] & { [K in Exclude<keyof I["chains"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof DeregisterChainMaintainerRequest>]: never; }>(base?: I | undefined): DeregisterChainMaintainerRequest;
    fromPartial<I_1 extends {
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        chains?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["chains"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof DeregisterChainMaintainerRequest>]: never; }>(object: I_1): DeregisterChainMaintainerRequest;
};
export declare const DeregisterChainMaintainerResponse: {
    encode(_: DeregisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterChainMaintainerResponse;
    fromJSON(_: any): DeregisterChainMaintainerResponse;
    toJSON(_: DeregisterChainMaintainerResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): DeregisterChainMaintainerResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeregisterChainMaintainerResponse;
};
export declare const ActivateChainRequest: {
    encode(message: ActivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateChainRequest;
    fromJSON(object: any): ActivateChainRequest;
    toJSON(message: ActivateChainRequest): unknown;
    create<I extends {
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        chains?: (string[] & string[] & { [K in Exclude<keyof I["chains"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ActivateChainRequest>]: never; }>(base?: I | undefined): ActivateChainRequest;
    fromPartial<I_1 extends {
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        chains?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["chains"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ActivateChainRequest>]: never; }>(object: I_1): ActivateChainRequest;
};
export declare const ActivateChainResponse: {
    encode(_: ActivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateChainResponse;
    fromJSON(_: any): ActivateChainResponse;
    toJSON(_: ActivateChainResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ActivateChainResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ActivateChainResponse;
};
export declare const DeactivateChainRequest: {
    encode(message: DeactivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateChainRequest;
    fromJSON(object: any): DeactivateChainRequest;
    toJSON(message: DeactivateChainRequest): unknown;
    create<I extends {
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        chains?: (string[] & string[] & { [K in Exclude<keyof I["chains"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof DeactivateChainRequest>]: never; }>(base?: I | undefined): DeactivateChainRequest;
    fromPartial<I_1 extends {
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        chains?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["chains"], keyof string[]>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof DeactivateChainRequest>]: never; }>(object: I_1): DeactivateChainRequest;
};
export declare const DeactivateChainResponse: {
    encode(_: DeactivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateChainResponse;
    fromJSON(_: any): DeactivateChainResponse;
    toJSON(_: DeactivateChainResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): DeactivateChainResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): DeactivateChainResponse;
};
export declare const RegisterAssetFeeRequest: {
    encode(message: RegisterAssetFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetFeeRequest;
    fromJSON(object: any): RegisterAssetFeeRequest;
    toJSON(message: RegisterAssetFeeRequest): unknown;
    create<I extends {
        feeInfo?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        feeInfo?: ({
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & { [K in Exclude<keyof I["feeInfo"], keyof FeeInfo>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof RegisterAssetFeeRequest>]: never; }>(base?: I | undefined): RegisterAssetFeeRequest;
    fromPartial<I_1 extends {
        feeInfo?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        feeInfo?: ({
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Buffer | undefined;
            minFee?: Buffer | undefined;
            maxFee?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["feeInfo"], keyof FeeInfo>]: never; }) | undefined;
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof RegisterAssetFeeRequest>]: never; }>(object: I_1): RegisterAssetFeeRequest;
};
export declare const RegisterAssetFeeResponse: {
    encode(_: RegisterAssetFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetFeeResponse;
    fromJSON(_: any): RegisterAssetFeeResponse;
    toJSON(_: RegisterAssetFeeResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): RegisterAssetFeeResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): RegisterAssetFeeResponse;
};
export declare const SetTransferRateLimitRequest: {
    encode(message: SetTransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetTransferRateLimitRequest;
    fromJSON(object: any): SetTransferRateLimitRequest;
    toJSON(message: SetTransferRateLimitRequest): unknown;
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
        sender?: string | undefined;
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
        sender?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof SetTransferRateLimitRequest>]: never; }>(base?: I | undefined): SetTransferRateLimitRequest;
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
        sender?: string | undefined;
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
        sender?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof SetTransferRateLimitRequest>]: never; }>(object: I_1): SetTransferRateLimitRequest;
};
export declare const SetTransferRateLimitResponse: {
    encode(_: SetTransferRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetTransferRateLimitResponse;
    fromJSON(_: any): SetTransferRateLimitResponse;
    toJSON(_: SetTransferRateLimitResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): SetTransferRateLimitResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SetTransferRateLimitResponse;
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
