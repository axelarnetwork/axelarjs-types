import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
export interface QueryValidatorsResponse {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse";
    validators: QueryValidatorsResponse_Validator[];
}
export interface QueryValidatorsResponse_TssIllegibilityInfo {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse.TssIllegibilityInfo";
    tombstoned: boolean;
    jailed: boolean;
    missedTooManyBlocks: boolean;
    noProxyRegistered: boolean;
    tssSuspended: boolean;
    proxyInsuficientFunds: boolean;
    staleTssHeartbeat: boolean;
}
export interface QueryValidatorsResponse_Validator {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse.Validator";
    operatorAddress: string;
    moniker: string;
    tssIllegibilityInfo?: QueryValidatorsResponse_TssIllegibilityInfo | undefined;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.snapshot.v1beta1.ParamsRequest";
}
export interface ParamsResponse {
    $type: "axelar.snapshot.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
/**
 * OperatorByProxyRequest retrieves the operator address associated with a given
 * proxy address
 */
export interface OperatorByProxyRequest {
    $type: "axelar.snapshot.v1beta1.OperatorByProxyRequest";
    proxyAddress: string;
}
export interface OperatorByProxyResponse {
    $type: "axelar.snapshot.v1beta1.OperatorByProxyResponse";
    operatorAddress: string;
}
/**
 * ProxyByOperatorRequest retrieves the proxy address associated with a given
 * operator address
 */
export interface ProxyByOperatorRequest {
    $type: "axelar.snapshot.v1beta1.ProxyByOperatorRequest";
    operatorAddress: string;
}
export interface ProxyByOperatorResponse {
    $type: "axelar.snapshot.v1beta1.ProxyByOperatorResponse";
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
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse";
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
            } & { [K in Exclude<keyof I["validators"][number]["tssIllegibilityInfo"], "$type" | "tombstoned" | "jailed" | "missedTooManyBlocks" | "noProxyRegistered" | "tssSuspended" | "proxyInsuficientFunds" | "staleTssHeartbeat">]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["validators"][number], "$type" | "operatorAddress" | "moniker" | "tssIllegibilityInfo">]: never; })[] & { [K_2 in Exclude<keyof I["validators"], "$type" | keyof {
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
    } & { [K_3 in Exclude<keyof I, "$type" | "validators">]: never; }>(base?: I | undefined): QueryValidatorsResponse;
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
            } & { [K_4 in Exclude<keyof I_1["validators"][number]["tssIllegibilityInfo"], "$type" | "tombstoned" | "jailed" | "missedTooManyBlocks" | "noProxyRegistered" | "tssSuspended" | "proxyInsuficientFunds" | "staleTssHeartbeat">]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I_1["validators"][number], "$type" | "operatorAddress" | "moniker" | "tssIllegibilityInfo">]: never; })[] & { [K_6 in Exclude<keyof I_1["validators"], "$type" | keyof {
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
    } & { [K_7 in Exclude<keyof I_1, "$type" | "validators">]: never; }>(object: I_1): QueryValidatorsResponse;
};
export declare const QueryValidatorsResponse_TssIllegibilityInfo: {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse.TssIllegibilityInfo";
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
    } & { [K in Exclude<keyof I, "$type" | "tombstoned" | "jailed" | "missedTooManyBlocks" | "noProxyRegistered" | "tssSuspended" | "proxyInsuficientFunds" | "staleTssHeartbeat">]: never; }>(base?: I | undefined): QueryValidatorsResponse_TssIllegibilityInfo;
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
    } & { [K_1 in Exclude<keyof I_1, "$type" | "tombstoned" | "jailed" | "missedTooManyBlocks" | "noProxyRegistered" | "tssSuspended" | "proxyInsuficientFunds" | "staleTssHeartbeat">]: never; }>(object: I_1): QueryValidatorsResponse_TssIllegibilityInfo;
};
export declare const QueryValidatorsResponse_Validator: {
    $type: "axelar.snapshot.v1beta1.QueryValidatorsResponse.Validator";
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
        } & { [K in Exclude<keyof I["tssIllegibilityInfo"], "$type" | "tombstoned" | "jailed" | "missedTooManyBlocks" | "noProxyRegistered" | "tssSuspended" | "proxyInsuficientFunds" | "staleTssHeartbeat">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "operatorAddress" | "moniker" | "tssIllegibilityInfo">]: never; }>(base?: I | undefined): QueryValidatorsResponse_Validator;
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
        } & { [K_2 in Exclude<keyof I_1["tssIllegibilityInfo"], "$type" | "tombstoned" | "jailed" | "missedTooManyBlocks" | "noProxyRegistered" | "tssSuspended" | "proxyInsuficientFunds" | "staleTssHeartbeat">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "operatorAddress" | "moniker" | "tssIllegibilityInfo">]: never; }>(object: I_1): QueryValidatorsResponse_Validator;
};
export declare const ParamsRequest: {
    $type: "axelar.snapshot.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.snapshot.v1beta1.ParamsResponse";
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
            } & { [K in Exclude<keyof I["params"]["minProxyBalance"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["params"], "$type" | "minProxyBalance">]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "params">]: never; }>(base?: I | undefined): ParamsResponse;
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
            } & { [K_3 in Exclude<keyof I_1["params"]["minProxyBalance"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I_1["params"], "$type" | "minProxyBalance">]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "params">]: never; }>(object: I_1): ParamsResponse;
};
export declare const OperatorByProxyRequest: {
    $type: "axelar.snapshot.v1beta1.OperatorByProxyRequest";
    encode(message: OperatorByProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperatorByProxyRequest;
    fromJSON(object: any): OperatorByProxyRequest;
    toJSON(message: OperatorByProxyRequest): unknown;
    create<I extends {
        proxyAddress?: string | undefined;
    } & {
        proxyAddress?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "proxyAddress">]: never; }>(base?: I | undefined): OperatorByProxyRequest;
    fromPartial<I_1 extends {
        proxyAddress?: string | undefined;
    } & {
        proxyAddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "proxyAddress">]: never; }>(object: I_1): OperatorByProxyRequest;
};
export declare const OperatorByProxyResponse: {
    $type: "axelar.snapshot.v1beta1.OperatorByProxyResponse";
    encode(message: OperatorByProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperatorByProxyResponse;
    fromJSON(object: any): OperatorByProxyResponse;
    toJSON(message: OperatorByProxyResponse): unknown;
    create<I extends {
        operatorAddress?: string | undefined;
    } & {
        operatorAddress?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "operatorAddress">]: never; }>(base?: I | undefined): OperatorByProxyResponse;
    fromPartial<I_1 extends {
        operatorAddress?: string | undefined;
    } & {
        operatorAddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "operatorAddress">]: never; }>(object: I_1): OperatorByProxyResponse;
};
export declare const ProxyByOperatorRequest: {
    $type: "axelar.snapshot.v1beta1.ProxyByOperatorRequest";
    encode(message: ProxyByOperatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProxyByOperatorRequest;
    fromJSON(object: any): ProxyByOperatorRequest;
    toJSON(message: ProxyByOperatorRequest): unknown;
    create<I extends {
        operatorAddress?: string | undefined;
    } & {
        operatorAddress?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "operatorAddress">]: never; }>(base?: I | undefined): ProxyByOperatorRequest;
    fromPartial<I_1 extends {
        operatorAddress?: string | undefined;
    } & {
        operatorAddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "operatorAddress">]: never; }>(object: I_1): ProxyByOperatorRequest;
};
export declare const ProxyByOperatorResponse: {
    $type: "axelar.snapshot.v1beta1.ProxyByOperatorResponse";
    encode(message: ProxyByOperatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProxyByOperatorResponse;
    fromJSON(object: any): ProxyByOperatorResponse;
    toJSON(message: ProxyByOperatorResponse): unknown;
    create<I extends {
        status?: ProxyByOperatorResponse_Status | undefined;
        proxyAddress?: string | undefined;
    } & {
        status?: ProxyByOperatorResponse_Status | undefined;
        proxyAddress?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "status" | "proxyAddress">]: never; }>(base?: I | undefined): ProxyByOperatorResponse;
    fromPartial<I_1 extends {
        status?: ProxyByOperatorResponse_Status | undefined;
        proxyAddress?: string | undefined;
    } & {
        status?: ProxyByOperatorResponse_Status | undefined;
        proxyAddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "status" | "proxyAddress">]: never; }>(object: I_1): ProxyByOperatorResponse;
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
