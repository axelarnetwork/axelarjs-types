/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
export interface IBCTransfer {
    $type: "axelar.axelarnet.v1beta1.IBCTransfer";
    sender: Buffer;
    receiver: string;
    token?: Coin | undefined;
    portId: string;
    channelId: string;
    /** @deprecated */
    sequence: Long;
    id: Long;
    status: IBCTransfer_Status;
}
export declare enum IBCTransfer_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_PENDING = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function iBCTransfer_StatusFromJSON(object: any): IBCTransfer_Status;
export declare function iBCTransfer_StatusToJSON(object: IBCTransfer_Status): string;
export interface CosmosChain {
    $type: "axelar.axelarnet.v1beta1.CosmosChain";
    name: string;
    ibcPath: string;
    /** @deprecated */
    assets: Asset[];
    addrPrefix: string;
}
/** @deprecated */
export interface Asset {
    $type: "axelar.axelarnet.v1beta1.Asset";
    denom: string;
    minAmount: Buffer;
}
export interface Fee {
    $type: "axelar.axelarnet.v1beta1.Fee";
    amount?: Coin | undefined;
    recipient: Buffer;
    refundRecipient: Buffer;
}
export declare const IBCTransfer: {
    $type: "axelar.axelarnet.v1beta1.IBCTransfer";
    encode(message: IBCTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IBCTransfer;
    fromJSON(object: any): IBCTransfer;
    toJSON(message: IBCTransfer): unknown;
    create<I extends {
        sender?: Buffer | undefined;
        status?: IBCTransfer_Status | undefined;
        id?: string | number | Long.Long | undefined;
        sequence?: string | number | Long.Long | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
        receiver?: string | undefined;
        token?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: Buffer | undefined;
        status?: IBCTransfer_Status | undefined;
        id?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["id"], "$type" | keyof Long.Long>]: never; }) | undefined;
        sequence?: string | number | (Long.Long & {
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
        } & { [K_1 in Exclude<keyof I["sequence"], "$type" | keyof Long.Long>]: never; }) | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
        receiver?: string | undefined;
        token?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["token"], "$type" | "denom" | "amount">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "sender" | "status" | "id" | "sequence" | "portId" | "channelId" | "receiver" | "token">]: never; }>(base?: I | undefined): IBCTransfer;
    fromPartial<I_1 extends {
        sender?: Buffer | undefined;
        status?: IBCTransfer_Status | undefined;
        id?: string | number | Long.Long | undefined;
        sequence?: string | number | Long.Long | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
        receiver?: string | undefined;
        token?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: Buffer | undefined;
        status?: IBCTransfer_Status | undefined;
        id?: string | number | (Long.Long & {
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
        } & { [K_4 in Exclude<keyof I_1["id"], "$type" | keyof Long.Long>]: never; }) | undefined;
        sequence?: string | number | (Long.Long & {
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
        } & { [K_5 in Exclude<keyof I_1["sequence"], "$type" | keyof Long.Long>]: never; }) | undefined;
        portId?: string | undefined;
        channelId?: string | undefined;
        receiver?: string | undefined;
        token?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["token"], "$type" | "denom" | "amount">]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "$type" | "sender" | "status" | "id" | "sequence" | "portId" | "channelId" | "receiver" | "token">]: never; }>(object: I_1): IBCTransfer;
};
export declare const CosmosChain: {
    $type: "axelar.axelarnet.v1beta1.CosmosChain";
    encode(message: CosmosChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CosmosChain;
    fromJSON(object: any): CosmosChain;
    toJSON(message: CosmosChain): unknown;
    create<I extends {
        name?: string | undefined;
        ibcPath?: string | undefined;
        assets?: {
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        }[] | undefined;
        addrPrefix?: string | undefined;
    } & {
        name?: string | undefined;
        ibcPath?: string | undefined;
        assets?: ({
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        }[] & ({
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        } & {
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        } & { [K in Exclude<keyof I["assets"][number], "$type" | "denom" | "minAmount">]: never; })[] & { [K_1 in Exclude<keyof I["assets"], "$type" | keyof {
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        addrPrefix?: string | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "name" | "ibcPath" | "assets" | "addrPrefix">]: never; }>(base?: I | undefined): CosmosChain;
    fromPartial<I_1 extends {
        name?: string | undefined;
        ibcPath?: string | undefined;
        assets?: {
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        }[] | undefined;
        addrPrefix?: string | undefined;
    } & {
        name?: string | undefined;
        ibcPath?: string | undefined;
        assets?: ({
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        }[] & ({
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        } & {
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I_1["assets"][number], "$type" | "denom" | "minAmount">]: never; })[] & { [K_4 in Exclude<keyof I_1["assets"], "$type" | keyof {
            denom?: string | undefined;
            minAmount?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        addrPrefix?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "name" | "ibcPath" | "assets" | "addrPrefix">]: never; }>(object: I_1): CosmosChain;
};
export declare const Asset: {
    $type: "axelar.axelarnet.v1beta1.Asset";
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    create<I extends {
        denom?: string | undefined;
        minAmount?: Buffer | undefined;
    } & {
        denom?: string | undefined;
        minAmount?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "denom" | "minAmount">]: never; }>(base?: I | undefined): Asset;
    fromPartial<I_1 extends {
        denom?: string | undefined;
        minAmount?: Buffer | undefined;
    } & {
        denom?: string | undefined;
        minAmount?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "denom" | "minAmount">]: never; }>(object: I_1): Asset;
};
export declare const Fee: {
    $type: "axelar.axelarnet.v1beta1.Fee";
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Fee;
    fromJSON(object: any): Fee;
    toJSON(message: Fee): unknown;
    create<I extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        recipient?: Buffer | undefined;
        refundRecipient?: Buffer | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
        recipient?: Buffer | undefined;
        refundRecipient?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "amount" | "recipient" | "refundRecipient">]: never; }>(base?: I | undefined): Fee;
    fromPartial<I_1 extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        recipient?: Buffer | undefined;
        refundRecipient?: Buffer | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["amount"], "$type" | "denom" | "amount">]: never; }) | undefined;
        recipient?: Buffer | undefined;
        refundRecipient?: Buffer | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "amount" | "recipient" | "refundRecipient">]: never; }>(object: I_1): Fee;
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
