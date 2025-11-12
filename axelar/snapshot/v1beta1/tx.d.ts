/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "axelar.snapshot.v1beta1";
export interface RegisterProxyRequest {
    $type: "axelar.snapshot.v1beta1.RegisterProxyRequest";
    proxyAddr: Buffer;
    sender: string;
}
export interface RegisterProxyResponse {
    $type: "axelar.snapshot.v1beta1.RegisterProxyResponse";
}
export interface DeactivateProxyRequest {
    $type: "axelar.snapshot.v1beta1.DeactivateProxyRequest";
    /** @deprecated */
    senderBz: Buffer;
    sender: string;
}
export interface DeactivateProxyResponse {
    $type: "axelar.snapshot.v1beta1.DeactivateProxyResponse";
}
export interface UpdateParamsRequest {
    $type: "axelar.snapshot.v1beta1.UpdateParamsRequest";
    authority: string;
    params?: Params | undefined;
}
export interface UpdateParamsResponse {
    $type: "axelar.snapshot.v1beta1.UpdateParamsResponse";
}
export declare const RegisterProxyRequest: {
    $type: "axelar.snapshot.v1beta1.RegisterProxyRequest";
    encode(message: RegisterProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterProxyRequest;
    fromJSON(object: any): RegisterProxyRequest;
    toJSON(message: RegisterProxyRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        proxyAddr?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        proxyAddr?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "proxyAddr">]: never; }>(base?: I | undefined): RegisterProxyRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        proxyAddr?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        proxyAddr?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "proxyAddr">]: never; }>(object: I_1): RegisterProxyRequest;
};
export declare const RegisterProxyResponse: {
    $type: "axelar.snapshot.v1beta1.RegisterProxyResponse";
    encode(_: RegisterProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterProxyResponse;
    fromJSON(_: any): RegisterProxyResponse;
    toJSON(_: RegisterProxyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): RegisterProxyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): RegisterProxyResponse;
};
export declare const DeactivateProxyRequest: {
    $type: "axelar.snapshot.v1beta1.DeactivateProxyRequest";
    encode(message: DeactivateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateProxyRequest;
    fromJSON(object: any): DeactivateProxyRequest;
    toJSON(message: DeactivateProxyRequest): unknown;
    create<I extends {
        sender?: string | undefined;
        senderBz?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderBz?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "sender" | "senderBz">]: never; }>(base?: I | undefined): DeactivateProxyRequest;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        senderBz?: Buffer | undefined;
    } & {
        sender?: string | undefined;
        senderBz?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "senderBz">]: never; }>(object: I_1): DeactivateProxyRequest;
};
export declare const DeactivateProxyResponse: {
    $type: "axelar.snapshot.v1beta1.DeactivateProxyResponse";
    encode(_: DeactivateProxyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateProxyResponse;
    fromJSON(_: any): DeactivateProxyResponse;
    toJSON(_: DeactivateProxyResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): DeactivateProxyResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): DeactivateProxyResponse;
};
export declare const UpdateParamsRequest: {
    $type: "axelar.snapshot.v1beta1.UpdateParamsRequest";
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    create<I extends {
        params?: {
            minProxyBalance?: string | number | Long.Long | undefined;
        } | undefined;
        authority?: string | undefined;
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
        authority?: string | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "params" | "authority">]: never; }>(base?: I | undefined): UpdateParamsRequest;
    fromPartial<I_1 extends {
        params?: {
            minProxyBalance?: string | number | Long.Long | undefined;
        } | undefined;
        authority?: string | undefined;
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
        authority?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "params" | "authority">]: never; }>(object: I_1): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    $type: "axelar.snapshot.v1beta1.UpdateParamsResponse";
    encode(_: UpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsResponse;
    fromJSON(_: any): UpdateParamsResponse;
    toJSON(_: UpdateParamsResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): UpdateParamsResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): UpdateParamsResponse;
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
