import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
export interface PendingIBCTransferCountRequest {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest";
}
export interface PendingIBCTransferCountResponse {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse";
    transfersByChain: {
        [key: string]: number;
    };
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse.TransfersByChainEntry";
    key: string;
    value: number;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.axelarnet.v1beta1.ParamsRequest";
}
export interface ParamsResponse {
    $type: "axelar.axelarnet.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 */
export interface IBCPathRequest {
    $type: "axelar.axelarnet.v1beta1.IBCPathRequest";
    chain: string;
}
export interface IBCPathResponse {
    $type: "axelar.axelarnet.v1beta1.IBCPathResponse";
    ibcPath: string;
}
/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 */
export interface ChainByIBCPathRequest {
    $type: "axelar.axelarnet.v1beta1.ChainByIBCPathRequest";
    ibcPath: string;
}
export interface ChainByIBCPathResponse {
    $type: "axelar.axelarnet.v1beta1.ChainByIBCPathResponse";
    chain: string;
}
export declare const PendingIBCTransferCountRequest: {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest";
    encode(_: PendingIBCTransferCountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingIBCTransferCountRequest;
    fromJSON(_: any): PendingIBCTransferCountRequest;
    toJSON(_: PendingIBCTransferCountRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): PendingIBCTransferCountRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): PendingIBCTransferCountRequest;
};
export declare const PendingIBCTransferCountResponse: {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse";
    encode(message: PendingIBCTransferCountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingIBCTransferCountResponse;
    fromJSON(object: any): PendingIBCTransferCountResponse;
    toJSON(message: PendingIBCTransferCountResponse): unknown;
    create<I extends {
        transfersByChain?: {
            [x: string]: number | undefined;
            [x: number]: number | undefined;
        } | undefined;
    } & {
        transfersByChain?: ({
            [x: string]: number | undefined;
            [x: number]: number | undefined;
        } & {
            [x: string]: number | undefined;
            [x: number]: number | undefined;
        } & { [K in Exclude<keyof I["transfersByChain"], string | number>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "transfersByChain">]: never; }>(base?: I | undefined): PendingIBCTransferCountResponse;
    fromPartial<I_1 extends {
        transfersByChain?: {
            [x: string]: number | undefined;
            [x: number]: number | undefined;
        } | undefined;
    } & {
        transfersByChain?: ({
            [x: string]: number | undefined;
            [x: number]: number | undefined;
        } & {
            [x: string]: number | undefined;
            [x: number]: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["transfersByChain"], string | number>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "transfersByChain">]: never; }>(object: I_1): PendingIBCTransferCountResponse;
};
export declare const PendingIBCTransferCountResponse_TransfersByChainEntry: {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse.TransfersByChainEntry";
    encode(message: PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromJSON(object: any): PendingIBCTransferCountResponse_TransfersByChainEntry;
    toJSON(message: PendingIBCTransferCountResponse_TransfersByChainEntry): unknown;
    create<I extends {
        value?: number | undefined;
        key?: string | undefined;
    } & {
        value?: number | undefined;
        key?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "value" | "key">]: never; }>(base?: I | undefined): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromPartial<I_1 extends {
        value?: number | undefined;
        key?: string | undefined;
    } & {
        value?: number | undefined;
        key?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "value" | "key">]: never; }>(object: I_1): PendingIBCTransferCountResponse_TransfersByChainEntry;
};
export declare const ParamsRequest: {
    $type: "axelar.axelarnet.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, "$type">]: never; }>(base?: I | undefined): ParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, "$type">]: never; }>(_: I_1): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.axelarnet.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends {
        params?: {
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        params?: ({
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            routeTimeoutWindow?: string | number | (Long.Long & {
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
            } & { [K in Exclude<keyof I["params"]["routeTimeoutWindow"], "$type" | keyof Long.Long>]: never; }) | undefined;
            transferLimit?: string | number | (Long.Long & {
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
            } & { [K_1 in Exclude<keyof I["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            endBlockerLimit?: string | number | (Long.Long & {
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
            } & { [K_2 in Exclude<keyof I["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            callContractsProposalMinDeposits?: ({
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_3 in Exclude<keyof I["params"]["callContractsProposalMinDeposits"][number]["minDeposits"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_4 in Exclude<keyof I["params"]["callContractsProposalMinDeposits"][number]["minDeposits"], "$type" | keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["params"]["callContractsProposalMinDeposits"][number], "$type" | "contractAddress" | "chain" | "minDeposits">]: never; })[] & { [K_6 in Exclude<keyof I["params"]["callContractsProposalMinDeposits"], "$type" | keyof {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["params"], "$type" | "routeTimeoutWindow" | "transferLimit" | "endBlockerLimit" | "callContractsProposalMinDeposits">]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, "$type" | "params">]: never; }>(base?: I | undefined): ParamsResponse;
    fromPartial<I_1 extends {
        params?: {
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        params?: ({
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            routeTimeoutWindow?: string | number | (Long.Long & {
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
            } & { [K_9 in Exclude<keyof I_1["params"]["routeTimeoutWindow"], "$type" | keyof Long.Long>]: never; }) | undefined;
            transferLimit?: string | number | (Long.Long & {
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
            } & { [K_10 in Exclude<keyof I_1["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            endBlockerLimit?: string | number | (Long.Long & {
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
            } & { [K_11 in Exclude<keyof I_1["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            callContractsProposalMinDeposits?: ({
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_12 in Exclude<keyof I_1["params"]["callContractsProposalMinDeposits"][number]["minDeposits"][number], "$type" | "denom" | "amount">]: never; })[] & { [K_13 in Exclude<keyof I_1["params"]["callContractsProposalMinDeposits"][number]["minDeposits"], "$type" | keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I_1["params"]["callContractsProposalMinDeposits"][number], "$type" | "contractAddress" | "chain" | "minDeposits">]: never; })[] & { [K_15 in Exclude<keyof I_1["params"]["callContractsProposalMinDeposits"], "$type" | keyof {
                contractAddress?: string | undefined;
                chain?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I_1["params"], "$type" | "routeTimeoutWindow" | "transferLimit" | "endBlockerLimit" | "callContractsProposalMinDeposits">]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, "$type" | "params">]: never; }>(object: I_1): ParamsResponse;
};
export declare const IBCPathRequest: {
    $type: "axelar.axelarnet.v1beta1.IBCPathRequest";
    encode(message: IBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IBCPathRequest;
    fromJSON(object: any): IBCPathRequest;
    toJSON(message: IBCPathRequest): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain">]: never; }>(base?: I | undefined): IBCPathRequest;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain">]: never; }>(object: I_1): IBCPathRequest;
};
export declare const IBCPathResponse: {
    $type: "axelar.axelarnet.v1beta1.IBCPathResponse";
    encode(message: IBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IBCPathResponse;
    fromJSON(object: any): IBCPathResponse;
    toJSON(message: IBCPathResponse): unknown;
    create<I extends {
        ibcPath?: string | undefined;
    } & {
        ibcPath?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "ibcPath">]: never; }>(base?: I | undefined): IBCPathResponse;
    fromPartial<I_1 extends {
        ibcPath?: string | undefined;
    } & {
        ibcPath?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "ibcPath">]: never; }>(object: I_1): IBCPathResponse;
};
export declare const ChainByIBCPathRequest: {
    $type: "axelar.axelarnet.v1beta1.ChainByIBCPathRequest";
    encode(message: ChainByIBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainByIBCPathRequest;
    fromJSON(object: any): ChainByIBCPathRequest;
    toJSON(message: ChainByIBCPathRequest): unknown;
    create<I extends {
        ibcPath?: string | undefined;
    } & {
        ibcPath?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "ibcPath">]: never; }>(base?: I | undefined): ChainByIBCPathRequest;
    fromPartial<I_1 extends {
        ibcPath?: string | undefined;
    } & {
        ibcPath?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "ibcPath">]: never; }>(object: I_1): ChainByIBCPathRequest;
};
export declare const ChainByIBCPathResponse: {
    $type: "axelar.axelarnet.v1beta1.ChainByIBCPathResponse";
    encode(message: ChainByIBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainByIBCPathResponse;
    fromJSON(object: any): ChainByIBCPathResponse;
    toJSON(message: ChainByIBCPathResponse): unknown;
    create<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "chain">]: never; }>(base?: I | undefined): ChainByIBCPathResponse;
    fromPartial<I_1 extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain">]: never; }>(object: I_1): ChainByIBCPathResponse;
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
