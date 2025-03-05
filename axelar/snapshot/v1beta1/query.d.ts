import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../axelar/snapshot/v1beta1/params";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
export interface QueryValidatorsResponse {
    validators: QueryValidatorsResponse_Validator[];
}
export interface QueryValidatorsResponse_TssIllegibilityInfo {
    tombstoned: boolean;
    jailed: boolean;
    missedTooManyBlocks: boolean;
    noProxyRegistered: boolean;
    tssSuspended: boolean;
    proxyInsuficientFunds: boolean;
    staleTssHeartbeat: boolean;
}
export interface QueryValidatorsResponse_Validator {
    operatorAddress: string;
    moniker: string;
    tssIllegibilityInfo?: QueryValidatorsResponse_TssIllegibilityInfo;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
export interface ParamsResponse {
    params?: Params;
}
export declare const QueryValidatorsResponse: {
    encode(message: QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorsResponse;
    fromJSON(object: any): QueryValidatorsResponse;
    toJSON(message: QueryValidatorsResponse): unknown;
    fromPartial<I extends {
        validators?: {
            operatorAddress?: string | undefined;
            moniker?: string | undefined;
            tssIllegibilityInfo?: {
                tombstoned?: boolean | undefined;
                jailed?: boolean | undefined;
                missedTooManyBlocks?: boolean | undefined;
                noProxyRegistered?: boolean | undefined;
                tssSuspended?: boolean | undefined;
                proxyInsuficientFunds?: boolean | undefined;
                staleTssHeartbeat?: boolean | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        validators?: ({
            operatorAddress?: string | undefined;
            moniker?: string | undefined;
            tssIllegibilityInfo?: {
                tombstoned?: boolean | undefined;
                jailed?: boolean | undefined;
                missedTooManyBlocks?: boolean | undefined;
                noProxyRegistered?: boolean | undefined;
                tssSuspended?: boolean | undefined;
                proxyInsuficientFunds?: boolean | undefined;
                staleTssHeartbeat?: boolean | undefined;
            } | undefined;
        }[] & ({
            operatorAddress?: string | undefined;
            moniker?: string | undefined;
            tssIllegibilityInfo?: {
                tombstoned?: boolean | undefined;
                jailed?: boolean | undefined;
                missedTooManyBlocks?: boolean | undefined;
                noProxyRegistered?: boolean | undefined;
                tssSuspended?: boolean | undefined;
                proxyInsuficientFunds?: boolean | undefined;
                staleTssHeartbeat?: boolean | undefined;
            } | undefined;
        } & {
            operatorAddress?: string | undefined;
            moniker?: string | undefined;
            tssIllegibilityInfo?: ({
                tombstoned?: boolean | undefined;
                jailed?: boolean | undefined;
                missedTooManyBlocks?: boolean | undefined;
                noProxyRegistered?: boolean | undefined;
                tssSuspended?: boolean | undefined;
                proxyInsuficientFunds?: boolean | undefined;
                staleTssHeartbeat?: boolean | undefined;
            } & {
                tombstoned?: boolean | undefined;
                jailed?: boolean | undefined;
                missedTooManyBlocks?: boolean | undefined;
                noProxyRegistered?: boolean | undefined;
                tssSuspended?: boolean | undefined;
                proxyInsuficientFunds?: boolean | undefined;
                staleTssHeartbeat?: boolean | undefined;
            } & Record<Exclude<keyof I["validators"][number]["tssIllegibilityInfo"], keyof QueryValidatorsResponse_TssIllegibilityInfo>, never>) | undefined;
        } & Record<Exclude<keyof I["validators"][number], keyof QueryValidatorsResponse_Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            operatorAddress?: string | undefined;
            moniker?: string | undefined;
            tssIllegibilityInfo?: {
                tombstoned?: boolean | undefined;
                jailed?: boolean | undefined;
                missedTooManyBlocks?: boolean | undefined;
                noProxyRegistered?: boolean | undefined;
                tssSuspended?: boolean | undefined;
                proxyInsuficientFunds?: boolean | undefined;
                staleTssHeartbeat?: boolean | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "validators">, never>>(object: I): QueryValidatorsResponse;
};
export declare const QueryValidatorsResponse_TssIllegibilityInfo: {
    encode(message: QueryValidatorsResponse_TssIllegibilityInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorsResponse_TssIllegibilityInfo;
    fromJSON(object: any): QueryValidatorsResponse_TssIllegibilityInfo;
    toJSON(message: QueryValidatorsResponse_TssIllegibilityInfo): unknown;
    fromPartial<I extends {
        tombstoned?: boolean | undefined;
        jailed?: boolean | undefined;
        missedTooManyBlocks?: boolean | undefined;
        noProxyRegistered?: boolean | undefined;
        tssSuspended?: boolean | undefined;
        proxyInsuficientFunds?: boolean | undefined;
        staleTssHeartbeat?: boolean | undefined;
    } & {
        tombstoned?: boolean | undefined;
        jailed?: boolean | undefined;
        missedTooManyBlocks?: boolean | undefined;
        noProxyRegistered?: boolean | undefined;
        tssSuspended?: boolean | undefined;
        proxyInsuficientFunds?: boolean | undefined;
        staleTssHeartbeat?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof QueryValidatorsResponse_TssIllegibilityInfo>, never>>(object: I): QueryValidatorsResponse_TssIllegibilityInfo;
};
export declare const QueryValidatorsResponse_Validator: {
    encode(message: QueryValidatorsResponse_Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorsResponse_Validator;
    fromJSON(object: any): QueryValidatorsResponse_Validator;
    toJSON(message: QueryValidatorsResponse_Validator): unknown;
    fromPartial<I extends {
        operatorAddress?: string | undefined;
        moniker?: string | undefined;
        tssIllegibilityInfo?: {
            tombstoned?: boolean | undefined;
            jailed?: boolean | undefined;
            missedTooManyBlocks?: boolean | undefined;
            noProxyRegistered?: boolean | undefined;
            tssSuspended?: boolean | undefined;
            proxyInsuficientFunds?: boolean | undefined;
            staleTssHeartbeat?: boolean | undefined;
        } | undefined;
    } & {
        operatorAddress?: string | undefined;
        moniker?: string | undefined;
        tssIllegibilityInfo?: ({
            tombstoned?: boolean | undefined;
            jailed?: boolean | undefined;
            missedTooManyBlocks?: boolean | undefined;
            noProxyRegistered?: boolean | undefined;
            tssSuspended?: boolean | undefined;
            proxyInsuficientFunds?: boolean | undefined;
            staleTssHeartbeat?: boolean | undefined;
        } & {
            tombstoned?: boolean | undefined;
            jailed?: boolean | undefined;
            missedTooManyBlocks?: boolean | undefined;
            noProxyRegistered?: boolean | undefined;
            tssSuspended?: boolean | undefined;
            proxyInsuficientFunds?: boolean | undefined;
            staleTssHeartbeat?: boolean | undefined;
        } & Record<Exclude<keyof I["tssIllegibilityInfo"], keyof QueryValidatorsResponse_TssIllegibilityInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryValidatorsResponse_Validator>, never>>(object: I): QueryValidatorsResponse_Validator;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            minProxyBalance?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        params?: ({
            minProxyBalance?: string | number | Long.Long | undefined;
        } & {
            minProxyBalance?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["minProxyBalance"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "minProxyBalance">, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): ParamsResponse;
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
