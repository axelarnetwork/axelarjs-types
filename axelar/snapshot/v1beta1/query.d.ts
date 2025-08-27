import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
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
    tssIllegibilityInfo?: QueryValidatorsResponse_TssIllegibilityInfo | undefined;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
export interface ParamsResponse {
    params?: Params | undefined;
}
/**
 * OperatorByProxyRequest retrieves the operator address associated with a given
 * proxy address
 */
export interface OperatorByProxyRequest {
    proxyAddress: string;
}
export interface OperatorByProxyResponse {
    operatorAddress: string;
}
/**
 * ProxyByOperatorRequest retrieves the proxy address associated with a given
 * operator address
 */
export interface ProxyByOperatorRequest {
    operatorAddress: string;
}
export interface ProxyByOperatorResponse {
    proxyAddress: string;
    status: ProxyByOperatorResponse_Status;
}
export declare enum ProxyByOperatorResponse_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_ACTIVE = 1,
    STATUS_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function proxyByOperatorResponse_StatusFromJSON(object: any): ProxyByOperatorResponse_Status;
export declare function proxyByOperatorResponse_StatusToJSON(object: ProxyByOperatorResponse_Status): string;
export declare const QueryValidatorsResponse: {
    encode(message: QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorsResponse;
    fromJSON(object: any): QueryValidatorsResponse;
    toJSON(message: QueryValidatorsResponse): unknown;
    create<I extends {
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
            } & { [K in Exclude<keyof I["validators"][number]["tssIllegibilityInfo"], keyof QueryValidatorsResponse_TssIllegibilityInfo>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["validators"][number], keyof QueryValidatorsResponse_Validator>]: never; })[] & { [K_2 in Exclude<keyof I["validators"], keyof {
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
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "validators">]: never; }>(base?: I | undefined): QueryValidatorsResponse;
    fromPartial<I_1 extends {
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
            } & { [K_4 in Exclude<keyof I_1["validators"][number]["tssIllegibilityInfo"], keyof QueryValidatorsResponse_TssIllegibilityInfo>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I_1["validators"][number], keyof QueryValidatorsResponse_Validator>]: never; })[] & { [K_6 in Exclude<keyof I_1["validators"], keyof {
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
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "validators">]: never; }>(object: I_1): QueryValidatorsResponse;
};
export declare const QueryValidatorsResponse_TssIllegibilityInfo: {
    encode(message: QueryValidatorsResponse_TssIllegibilityInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorsResponse_TssIllegibilityInfo;
    fromJSON(object: any): QueryValidatorsResponse_TssIllegibilityInfo;
    toJSON(message: QueryValidatorsResponse_TssIllegibilityInfo): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof QueryValidatorsResponse_TssIllegibilityInfo>]: never; }>(base?: I | undefined): QueryValidatorsResponse_TssIllegibilityInfo;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof QueryValidatorsResponse_TssIllegibilityInfo>]: never; }>(object: I_1): QueryValidatorsResponse_TssIllegibilityInfo;
};
export declare const QueryValidatorsResponse_Validator: {
    encode(message: QueryValidatorsResponse_Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorsResponse_Validator;
    fromJSON(object: any): QueryValidatorsResponse_Validator;
    toJSON(message: QueryValidatorsResponse_Validator): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["tssIllegibilityInfo"], keyof QueryValidatorsResponse_TssIllegibilityInfo>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryValidatorsResponse_Validator>]: never; }>(base?: I | undefined): QueryValidatorsResponse_Validator;
    fromPartial<I_1 extends {
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
        } & { [K_2 in Exclude<keyof I_1["tssIllegibilityInfo"], keyof QueryValidatorsResponse_TssIllegibilityInfo>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof QueryValidatorsResponse_Validator>]: never; }>(object: I_1): QueryValidatorsResponse_Validator;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): ParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends {
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
            } & { [K in Exclude<keyof I["params"]["minProxyBalance"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["params"], "minProxyBalance">]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "params">]: never; }>(base?: I | undefined): ParamsResponse;
    fromPartial<I_1 extends {
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
            } & { [K_3 in Exclude<keyof I_1["params"]["minProxyBalance"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I_1["params"], "minProxyBalance">]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): ParamsResponse;
};
export declare const OperatorByProxyRequest: {
    encode(message: OperatorByProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperatorByProxyRequest;
    fromJSON(object: any): OperatorByProxyRequest;
    toJSON(message: OperatorByProxyRequest): unknown;
    create<I extends {
        proxyAddress?: string | undefined;
    } & {
        proxyAddress?: string | undefined;
    } & { [K in Exclude<keyof I, "proxyAddress">]: never; }>(base?: I | undefined): OperatorByProxyRequest;
    fromPartial<I_1 extends {
        proxyAddress?: string | undefined;
    } & {
        proxyAddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "proxyAddress">]: never; }>(object: I_1): OperatorByProxyRequest;
};
export declare const OperatorByProxyResponse: {
    encode(message: OperatorByProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperatorByProxyResponse;
    fromJSON(object: any): OperatorByProxyResponse;
    toJSON(message: OperatorByProxyResponse): unknown;
    create<I extends {
        operatorAddress?: string | undefined;
    } & {
        operatorAddress?: string | undefined;
    } & { [K in Exclude<keyof I, "operatorAddress">]: never; }>(base?: I | undefined): OperatorByProxyResponse;
    fromPartial<I_1 extends {
        operatorAddress?: string | undefined;
    } & {
        operatorAddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "operatorAddress">]: never; }>(object: I_1): OperatorByProxyResponse;
};
export declare const ProxyByOperatorRequest: {
    encode(message: ProxyByOperatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProxyByOperatorRequest;
    fromJSON(object: any): ProxyByOperatorRequest;
    toJSON(message: ProxyByOperatorRequest): unknown;
    create<I extends {
        operatorAddress?: string | undefined;
    } & {
        operatorAddress?: string | undefined;
    } & { [K in Exclude<keyof I, "operatorAddress">]: never; }>(base?: I | undefined): ProxyByOperatorRequest;
    fromPartial<I_1 extends {
        operatorAddress?: string | undefined;
    } & {
        operatorAddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "operatorAddress">]: never; }>(object: I_1): ProxyByOperatorRequest;
};
export declare const ProxyByOperatorResponse: {
    encode(message: ProxyByOperatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProxyByOperatorResponse;
    fromJSON(object: any): ProxyByOperatorResponse;
    toJSON(message: ProxyByOperatorResponse): unknown;
    create<I extends {
        proxyAddress?: string | undefined;
        status?: ProxyByOperatorResponse_Status | undefined;
    } & {
        proxyAddress?: string | undefined;
        status?: ProxyByOperatorResponse_Status | undefined;
    } & { [K in Exclude<keyof I, keyof ProxyByOperatorResponse>]: never; }>(base?: I | undefined): ProxyByOperatorResponse;
    fromPartial<I_1 extends {
        proxyAddress?: string | undefined;
        status?: ProxyByOperatorResponse_Status | undefined;
    } & {
        proxyAddress?: string | undefined;
        status?: ProxyByOperatorResponse_Status | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ProxyByOperatorResponse>]: never; }>(object: I_1): ProxyByOperatorResponse;
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
