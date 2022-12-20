import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PollParticipants } from "../../../axelar/vote/exported/v1beta1/types";
import { TokenDetails } from "../../../axelar/evm/v1beta1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "axelar.evm.v1beta1";
export interface PollFailed {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface PollExpired {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface PollCompleted {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface NoEventsConfirmed {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface ConfirmKeyTransferStarted {
    chain: string;
    txId: Uint8Array;
    gatewayAddress: Uint8Array;
    confirmationHeight: Long;
    participants?: PollParticipants;
}
export interface ConfirmGatewayTxStarted {
    txId: Uint8Array;
    chain: string;
    gatewayAddress: Uint8Array;
    confirmationHeight: Long;
    participants?: PollParticipants;
}
export interface ConfirmDepositStarted {
    txId: Uint8Array;
    chain: string;
    depositAddress: Uint8Array;
    tokenAddress: Uint8Array;
    confirmationHeight: Long;
    participants?: PollParticipants;
    asset: string;
}
export interface ConfirmTokenStarted {
    txId: Uint8Array;
    chain: string;
    gatewayAddress: Uint8Array;
    tokenAddress: Uint8Array;
    tokenDetails?: TokenDetails;
    confirmationHeight: Long;
    participants?: PollParticipants;
}
export interface ChainAdded {
    chain: string;
}
export interface CommandBatchSigned {
    chain: string;
    commandBatchId: Uint8Array;
}
export interface CommandBatchAborted {
    chain: string;
    commandBatchId: Uint8Array;
}
export interface EVMEventConfirmed {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventCompleted {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventFailed {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventRetryFailed {
    chain: string;
    eventId: string;
    type: string;
}
export interface ContractCallApproved {
    chain: string;
    eventId: string;
    commandId: Uint8Array;
    sender: string;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
}
export interface ContractCallWithMintApproved {
    chain: string;
    eventId: string;
    commandId: Uint8Array;
    sender: string;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
    asset?: Coin;
}
export interface TokenSent {
    chain: string;
    eventId: string;
    transferId: Long;
    sender: string;
    destinationChain: string;
    destinationAddress: string;
    asset?: Coin;
}
export interface MintCommand {
    chain: string;
    transferId: Long;
    commandId: Uint8Array;
    destinationChain: string;
    destinationAddress: string;
    asset?: Coin;
}
export interface BurnCommand {
    chain: string;
    commandId: Uint8Array;
    destinationChain: string;
    depositAddress: string;
    asset: string;
}
export declare const PollFailed: {
    encode(message: PollFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PollFailed;
    fromJSON(object: any): PollFailed;
    toJSON(message: PollFailed): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        pollId?: string | number | Long.Long | undefined;
    } & {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        pollId?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["pollId"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PollFailed>, never>>(object: I): PollFailed;
};
export declare const PollExpired: {
    encode(message: PollExpired, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PollExpired;
    fromJSON(object: any): PollExpired;
    toJSON(message: PollExpired): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        pollId?: string | number | Long.Long | undefined;
    } & {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        pollId?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["pollId"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PollExpired>, never>>(object: I): PollExpired;
};
export declare const PollCompleted: {
    encode(message: PollCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PollCompleted;
    fromJSON(object: any): PollCompleted;
    toJSON(message: PollCompleted): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        pollId?: string | number | Long.Long | undefined;
    } & {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        pollId?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["pollId"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PollCompleted>, never>>(object: I): PollCompleted;
};
export declare const NoEventsConfirmed: {
    encode(message: NoEventsConfirmed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NoEventsConfirmed;
    fromJSON(object: any): NoEventsConfirmed;
    toJSON(message: NoEventsConfirmed): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        pollId?: string | number | Long.Long | undefined;
    } & {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        pollId?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["pollId"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof NoEventsConfirmed>, never>>(object: I): NoEventsConfirmed;
};
export declare const ConfirmKeyTransferStarted: {
    encode(message: ConfirmKeyTransferStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmKeyTransferStarted;
    fromJSON(object: any): ConfirmKeyTransferStarted;
    toJSON(message: ConfirmKeyTransferStarted): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        gatewayAddress?: Uint8Array | undefined;
        confirmationHeight?: string | number | Long.Long | undefined;
        participants?: {
            pollId?: string | number | Long.Long | undefined;
            participants?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        gatewayAddress?: Uint8Array | undefined;
        confirmationHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["confirmationHeight"], keyof Long.Long>, never>) | undefined;
        participants?: ({
            pollId?: string | number | Long.Long | undefined;
            participants?: Uint8Array[] | undefined;
        } & {
            pollId?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["participants"]["pollId"], keyof Long.Long>, never>) | undefined;
            participants?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["participants"]["participants"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["participants"], keyof PollParticipants>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmKeyTransferStarted>, never>>(object: I): ConfirmKeyTransferStarted;
};
export declare const ConfirmGatewayTxStarted: {
    encode(message: ConfirmGatewayTxStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxStarted;
    fromJSON(object: any): ConfirmGatewayTxStarted;
    toJSON(message: ConfirmGatewayTxStarted): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        gatewayAddress?: Uint8Array | undefined;
        confirmationHeight?: string | number | Long.Long | undefined;
        participants?: {
            pollId?: string | number | Long.Long | undefined;
            participants?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        gatewayAddress?: Uint8Array | undefined;
        confirmationHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["confirmationHeight"], keyof Long.Long>, never>) | undefined;
        participants?: ({
            pollId?: string | number | Long.Long | undefined;
            participants?: Uint8Array[] | undefined;
        } & {
            pollId?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["participants"]["pollId"], keyof Long.Long>, never>) | undefined;
            participants?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["participants"]["participants"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["participants"], keyof PollParticipants>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmGatewayTxStarted>, never>>(object: I): ConfirmGatewayTxStarted;
};
export declare const ConfirmDepositStarted: {
    encode(message: ConfirmDepositStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositStarted;
    fromJSON(object: any): ConfirmDepositStarted;
    toJSON(message: ConfirmDepositStarted): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        depositAddress?: Uint8Array | undefined;
        tokenAddress?: Uint8Array | undefined;
        confirmationHeight?: string | number | Long.Long | undefined;
        participants?: {
            pollId?: string | number | Long.Long | undefined;
            participants?: Uint8Array[] | undefined;
        } | undefined;
        asset?: string | undefined;
    } & {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        depositAddress?: Uint8Array | undefined;
        tokenAddress?: Uint8Array | undefined;
        confirmationHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["confirmationHeight"], keyof Long.Long>, never>) | undefined;
        participants?: ({
            pollId?: string | number | Long.Long | undefined;
            participants?: Uint8Array[] | undefined;
        } & {
            pollId?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["participants"]["pollId"], keyof Long.Long>, never>) | undefined;
            participants?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["participants"]["participants"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["participants"], keyof PollParticipants>, never>) | undefined;
        asset?: string | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmDepositStarted>, never>>(object: I): ConfirmDepositStarted;
};
export declare const ConfirmTokenStarted: {
    encode(message: ConfirmTokenStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTokenStarted;
    fromJSON(object: any): ConfirmTokenStarted;
    toJSON(message: ConfirmTokenStarted): unknown;
    fromPartial<I extends {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        gatewayAddress?: Uint8Array | undefined;
        tokenAddress?: Uint8Array | undefined;
        tokenDetails?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } | undefined;
        confirmationHeight?: string | number | Long.Long | undefined;
        participants?: {
            pollId?: string | number | Long.Long | undefined;
            participants?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        txId?: Uint8Array | undefined;
        chain?: string | undefined;
        gatewayAddress?: Uint8Array | undefined;
        tokenAddress?: Uint8Array | undefined;
        tokenDetails?: ({
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } & {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["tokenDetails"], keyof TokenDetails>, never>) | undefined;
        confirmationHeight?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["confirmationHeight"], keyof Long.Long>, never>) | undefined;
        participants?: ({
            pollId?: string | number | Long.Long | undefined;
            participants?: Uint8Array[] | undefined;
        } & {
            pollId?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["participants"]["pollId"], keyof Long.Long>, never>) | undefined;
            participants?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["participants"]["participants"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["participants"], keyof PollParticipants>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmTokenStarted>, never>>(object: I): ConfirmTokenStarted;
};
export declare const ChainAdded: {
    encode(message: ChainAdded, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChainAdded;
    fromJSON(object: any): ChainAdded;
    toJSON(message: ChainAdded): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
    } & {
        chain?: string | undefined;
    } & Record<Exclude<keyof I, "chain">, never>>(object: I): ChainAdded;
};
export declare const CommandBatchSigned: {
    encode(message: CommandBatchSigned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandBatchSigned;
    fromJSON(object: any): CommandBatchSigned;
    toJSON(message: CommandBatchSigned): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        commandBatchId?: Uint8Array | undefined;
    } & {
        chain?: string | undefined;
        commandBatchId?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CommandBatchSigned>, never>>(object: I): CommandBatchSigned;
};
export declare const CommandBatchAborted: {
    encode(message: CommandBatchAborted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandBatchAborted;
    fromJSON(object: any): CommandBatchAborted;
    toJSON(message: CommandBatchAborted): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        commandBatchId?: Uint8Array | undefined;
    } & {
        chain?: string | undefined;
        commandBatchId?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CommandBatchAborted>, never>>(object: I): CommandBatchAborted;
};
export declare const EVMEventConfirmed: {
    encode(message: EVMEventConfirmed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EVMEventConfirmed;
    fromJSON(object: any): EVMEventConfirmed;
    toJSON(message: EVMEventConfirmed): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
        type?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
        type?: string | undefined;
    } & Record<Exclude<keyof I, keyof EVMEventConfirmed>, never>>(object: I): EVMEventConfirmed;
};
export declare const EVMEventCompleted: {
    encode(message: EVMEventCompleted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EVMEventCompleted;
    fromJSON(object: any): EVMEventCompleted;
    toJSON(message: EVMEventCompleted): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
        type?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
        type?: string | undefined;
    } & Record<Exclude<keyof I, keyof EVMEventCompleted>, never>>(object: I): EVMEventCompleted;
};
export declare const EVMEventFailed: {
    encode(message: EVMEventFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EVMEventFailed;
    fromJSON(object: any): EVMEventFailed;
    toJSON(message: EVMEventFailed): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
        type?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
        type?: string | undefined;
    } & Record<Exclude<keyof I, keyof EVMEventFailed>, never>>(object: I): EVMEventFailed;
};
export declare const EVMEventRetryFailed: {
    encode(message: EVMEventRetryFailed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EVMEventRetryFailed;
    fromJSON(object: any): EVMEventRetryFailed;
    toJSON(message: EVMEventRetryFailed): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
        type?: string | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
        type?: string | undefined;
    } & Record<Exclude<keyof I, keyof EVMEventRetryFailed>, never>>(object: I): EVMEventRetryFailed;
};
export declare const ContractCallApproved: {
    encode(message: ContractCallApproved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractCallApproved;
    fromJSON(object: any): ContractCallApproved;
    toJSON(message: ContractCallApproved): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
        commandId?: Uint8Array | undefined;
        sender?: string | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Uint8Array | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
        commandId?: Uint8Array | undefined;
        sender?: string | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ContractCallApproved>, never>>(object: I): ContractCallApproved;
};
export declare const ContractCallWithMintApproved: {
    encode(message: ContractCallWithMintApproved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractCallWithMintApproved;
    fromJSON(object: any): ContractCallWithMintApproved;
    toJSON(message: ContractCallWithMintApproved): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
        commandId?: Uint8Array | undefined;
        sender?: string | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Uint8Array | undefined;
        asset?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
        commandId?: Uint8Array | undefined;
        sender?: string | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Uint8Array | undefined;
        asset?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["asset"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ContractCallWithMintApproved>, never>>(object: I): ContractCallWithMintApproved;
};
export declare const TokenSent: {
    encode(message: TokenSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenSent;
    fromJSON(object: any): TokenSent;
    toJSON(message: TokenSent): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        eventId?: string | undefined;
        transferId?: string | number | Long.Long | undefined;
        sender?: string | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        asset?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        eventId?: string | undefined;
        transferId?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["transferId"], keyof Long.Long>, never>) | undefined;
        sender?: string | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        asset?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["asset"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TokenSent>, never>>(object: I): TokenSent;
};
export declare const MintCommand: {
    encode(message: MintCommand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MintCommand;
    fromJSON(object: any): MintCommand;
    toJSON(message: MintCommand): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        transferId?: string | number | Long.Long | undefined;
        commandId?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        asset?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        transferId?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["transferId"], keyof Long.Long>, never>) | undefined;
        commandId?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        asset?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["asset"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MintCommand>, never>>(object: I): MintCommand;
};
export declare const BurnCommand: {
    encode(message: BurnCommand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnCommand;
    fromJSON(object: any): BurnCommand;
    toJSON(message: BurnCommand): unknown;
    fromPartial<I extends {
        chain?: string | undefined;
        commandId?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        depositAddress?: string | undefined;
        asset?: string | undefined;
    } & {
        chain?: string | undefined;
        commandId?: Uint8Array | undefined;
        destinationChain?: string | undefined;
        depositAddress?: string | undefined;
        asset?: string | undefined;
    } & Record<Exclude<keyof I, keyof BurnCommand>, never>>(object: I): BurnCommand;
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
