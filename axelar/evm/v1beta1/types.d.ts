/// <reference types="node" />
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.evm.v1beta1";
export declare enum Status {
    /**
     * STATUS_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
     * be powers of 2
     */
    STATUS_UNSPECIFIED = 0,
    STATUS_INITIALIZED = 1,
    STATUS_PENDING = 2,
    STATUS_CONFIRMED = 4,
    UNRECOGNIZED = -1
}
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
export declare enum CommandType {
    COMMAND_TYPE_UNSPECIFIED = 0,
    COMMAND_TYPE_MINT_TOKEN = 1,
    COMMAND_TYPE_DEPLOY_TOKEN = 2,
    COMMAND_TYPE_BURN_TOKEN = 3,
    COMMAND_TYPE_TRANSFER_OPERATORSHIP = 4,
    COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT = 5,
    COMMAND_TYPE_APPROVE_CONTRACT_CALL = 6,
    UNRECOGNIZED = -1
}
export declare function commandTypeFromJSON(object: any): CommandType;
export declare function commandTypeToJSON(object: CommandType): string;
export declare enum BatchedCommandsStatus {
    BATCHED_COMMANDS_STATUS_UNSPECIFIED = 0,
    BATCHED_COMMANDS_STATUS_SIGNING = 1,
    BATCHED_COMMANDS_STATUS_ABORTED = 2,
    BATCHED_COMMANDS_STATUS_SIGNED = 3,
    UNRECOGNIZED = -1
}
export declare function batchedCommandsStatusFromJSON(object: any): BatchedCommandsStatus;
export declare function batchedCommandsStatusToJSON(object: BatchedCommandsStatus): string;
export declare enum SigType {
    SIG_TYPE_UNSPECIFIED = 0,
    SIG_TYPE_TX = 1,
    SIG_TYPE_COMMAND = 2,
    UNRECOGNIZED = -1
}
export declare function sigTypeFromJSON(object: any): SigType;
export declare function sigTypeToJSON(object: SigType): string;
export declare enum DepositStatus {
    DEPOSIT_STATUS_UNSPECIFIED = 0,
    DEPOSIT_STATUS_PENDING = 1,
    DEPOSIT_STATUS_CONFIRMED = 2,
    DEPOSIT_STATUS_BURNED = 3,
    UNRECOGNIZED = -1
}
export declare function depositStatusFromJSON(object: any): DepositStatus;
export declare function depositStatusToJSON(object: DepositStatus): string;
export interface VoteEvents {
    chain: string;
    events: Event[];
}
export interface Event {
    chain: string;
    txId: Buffer;
    index: Long;
    status: Event_Status;
    tokenSent?: EventTokenSent | undefined;
    contractCall?: EventContractCall | undefined;
    contractCallWithToken?: EventContractCallWithToken | undefined;
    transfer?: EventTransfer | undefined;
    tokenDeployed?: EventTokenDeployed | undefined;
    /** @deprecated */
    multisigOwnershipTransferred?: EventMultisigOwnershipTransferred | undefined;
    multisigOperatorshipTransferred?: EventMultisigOperatorshipTransferred | undefined;
}
export declare enum Event_Status {
    STATUS_UNSPECIFIED = 0,
    STATUS_CONFIRMED = 1,
    STATUS_COMPLETED = 2,
    STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function event_StatusFromJSON(object: any): Event_Status;
export declare function event_StatusToJSON(object: Event_Status): string;
export interface EventTokenSent {
    sender: Buffer;
    destinationChain: string;
    destinationAddress: string;
    symbol: string;
    amount: Buffer;
}
export interface EventContractCall {
    sender: Buffer;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Buffer;
}
export interface EventContractCallWithToken {
    sender: Buffer;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Buffer;
    symbol: string;
    amount: Buffer;
}
export interface EventTransfer {
    to: Buffer;
    amount: Buffer;
}
export interface EventTokenDeployed {
    symbol: string;
    tokenAddress: Buffer;
}
/** @deprecated */
export interface EventMultisigOwnershipTransferred {
    preOwners: Buffer[];
    prevThreshold: Buffer;
    newOwners: Buffer[];
    newThreshold: Buffer;
}
export interface EventMultisigOperatorshipTransferred {
    newOperators: Buffer[];
    newThreshold: Buffer;
    newWeights: Buffer[];
}
/** NetworkInfo describes information about a network */
export interface NetworkInfo {
    name: string;
    id: Buffer;
}
/**
 * BurnerInfo describes information required to burn token at an burner address
 * that is deposited by an user
 */
export interface BurnerInfo {
    burnerAddress: Buffer;
    tokenAddress: Buffer;
    destinationChain: string;
    symbol: string;
    asset: string;
    salt: Buffer;
}
/** ERC20Deposit contains information for an ERC20 deposit */
export interface ERC20Deposit {
    txId: Buffer;
    amount: Buffer;
    asset: string;
    destinationChain: string;
    burnerAddress: Buffer;
    logIndex: Long;
}
/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadata {
    asset: string;
    chainId: Buffer;
    details?: TokenDetails | undefined;
    tokenAddress: string;
    txHash: string;
    status: Status;
    isExternal: boolean;
    burnerCode: Buffer;
}
export interface TransactionMetadata {
    rawTx: Buffer;
    pubKey: Buffer;
}
export interface Command {
    id: Buffer;
    /** @deprecated */
    command: string;
    params: Buffer;
    keyId: string;
    maxGasCost: number;
    type: CommandType;
}
export interface CommandBatchMetadata {
    id: Buffer;
    commandIds: Buffer[];
    data: Buffer;
    sigHash: Buffer;
    status: BatchedCommandsStatus;
    keyId: string;
    prevBatchedCommandsId: Buffer;
    signature?: Any | undefined;
}
/**
 * SigMetadata stores necessary information for external apps to map signature
 * results to evm relay transaction types
 */
export interface SigMetadata {
    type: SigType;
    chain: string;
    commandBatchId: Buffer;
}
/** TransferKey contains information for a transfer operatorship */
export interface TransferKey {
    txId: Buffer;
    nextKeyId: string;
}
export interface Asset {
    chain: string;
    name: string;
}
export interface TokenDetails {
    tokenName: string;
    symbol: string;
    decimals: number;
    capacity: Buffer;
}
export interface Gateway {
    address: Buffer;
}
export interface PollMetadata {
    chain: string;
    txId: Buffer;
}
export declare const VoteEvents: {
    encode(message: VoteEvents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteEvents;
    fromJSON(object: any): VoteEvents;
    toJSON(message: VoteEvents): unknown;
    create<I extends {
        chain?: string | undefined;
        events?: {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        chain?: string | undefined;
        events?: ({
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[] & ({
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } & {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | (Long.Long & {
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
            } & { [K in Exclude<keyof I["events"][number]["index"], keyof Long.Long>]: never; }) | undefined;
            status?: Event_Status | undefined;
            tokenSent?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & { [K_1 in Exclude<keyof I["events"][number]["tokenSent"], keyof EventTokenSent>]: never; }) | undefined;
            contractCall?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & { [K_2 in Exclude<keyof I["events"][number]["contractCall"], keyof EventContractCall>]: never; }) | undefined;
            contractCallWithToken?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & { [K_3 in Exclude<keyof I["events"][number]["contractCallWithToken"], keyof EventContractCallWithToken>]: never; }) | undefined;
            transfer?: ({
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & { [K_4 in Exclude<keyof I["events"][number]["transfer"], keyof EventTransfer>]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_5 in Exclude<keyof I["events"][number]["tokenDeployed"], keyof EventTokenDeployed>]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_6 in Exclude<keyof I["events"][number]["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_7 in Exclude<keyof I["events"][number]["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_8 in Exclude<keyof I["events"][number]["multisigOwnershipTransferred"], keyof EventMultisigOwnershipTransferred>]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newOperators?: (Buffer[] & Buffer[] & { [K_9 in Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_10 in Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"], keyof EventMultisigOperatorshipTransferred>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["events"][number], keyof Event>]: never; })[] & { [K_13 in Exclude<keyof I["events"], keyof {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof VoteEvents>]: never; }>(base?: I | undefined): VoteEvents;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        events?: {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        chain?: string | undefined;
        events?: ({
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[] & ({
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } & {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | (Long.Long & {
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
            } & { [K_15 in Exclude<keyof I_1["events"][number]["index"], keyof Long.Long>]: never; }) | undefined;
            status?: Event_Status | undefined;
            tokenSent?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & { [K_16 in Exclude<keyof I_1["events"][number]["tokenSent"], keyof EventTokenSent>]: never; }) | undefined;
            contractCall?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & { [K_17 in Exclude<keyof I_1["events"][number]["contractCall"], keyof EventContractCall>]: never; }) | undefined;
            contractCallWithToken?: ({
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } & { [K_18 in Exclude<keyof I_1["events"][number]["contractCallWithToken"], keyof EventContractCallWithToken>]: never; }) | undefined;
            transfer?: ({
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & { [K_19 in Exclude<keyof I_1["events"][number]["transfer"], keyof EventTransfer>]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_20 in Exclude<keyof I_1["events"][number]["tokenDeployed"], keyof EventTokenDeployed>]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_21 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_22 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_23 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"], keyof EventMultisigOwnershipTransferred>]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newOperators?: (Buffer[] & Buffer[] & { [K_24 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_25 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
            } & { [K_26 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"], keyof EventMultisigOperatorshipTransferred>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I_1["events"][number], keyof Event>]: never; })[] & { [K_28 in Exclude<keyof I_1["events"], keyof {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            tokenSent?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
                symbol?: string | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            transfer?: {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } | undefined;
            tokenDeployed?: {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } | undefined;
            multisigOwnershipTransferred?: {
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } | undefined;
            multisigOperatorshipTransferred?: {
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof VoteEvents>]: never; }>(object: I_1): VoteEvents;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    create<I extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        index?: string | number | Long.Long | undefined;
        status?: Event_Status | undefined;
        tokenSent?: {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } | undefined;
        contractCall?: {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } | undefined;
        contractCallWithToken?: {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } | undefined;
        transfer?: {
            to?: Buffer | undefined;
            amount?: Buffer | undefined;
        } | undefined;
        tokenDeployed?: {
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } | undefined;
        multisigOwnershipTransferred?: {
            preOwners?: Buffer[] | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
        } | undefined;
        multisigOperatorshipTransferred?: {
            newOperators?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
            newWeights?: Buffer[] | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        index?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["index"], keyof Long.Long>]: never; }) | undefined;
        status?: Event_Status | undefined;
        tokenSent?: ({
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } & {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } & { [K_1 in Exclude<keyof I["tokenSent"], keyof EventTokenSent>]: never; }) | undefined;
        contractCall?: ({
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } & {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I["contractCall"], keyof EventContractCall>]: never; }) | undefined;
        contractCallWithToken?: ({
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } & {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I["contractCallWithToken"], keyof EventContractCallWithToken>]: never; }) | undefined;
        transfer?: ({
            to?: Buffer | undefined;
            amount?: Buffer | undefined;
        } & {
            to?: Buffer | undefined;
            amount?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I["transfer"], keyof EventTransfer>]: never; }) | undefined;
        tokenDeployed?: ({
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } & { [K_5 in Exclude<keyof I["tokenDeployed"], keyof EventTokenDeployed>]: never; }) | undefined;
        multisigOwnershipTransferred?: ({
            preOwners?: Buffer[] | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
        } & {
            preOwners?: (Buffer[] & Buffer[] & { [K_6 in Exclude<keyof I["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: (Buffer[] & Buffer[] & { [K_7 in Exclude<keyof I["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
            newThreshold?: Buffer | undefined;
        } & { [K_8 in Exclude<keyof I["multisigOwnershipTransferred"], keyof EventMultisigOwnershipTransferred>]: never; }) | undefined;
        multisigOperatorshipTransferred?: ({
            newOperators?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
            newWeights?: Buffer[] | undefined;
        } & {
            newOperators?: (Buffer[] & Buffer[] & { [K_9 in Exclude<keyof I["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
            newThreshold?: Buffer | undefined;
            newWeights?: (Buffer[] & Buffer[] & { [K_10 in Exclude<keyof I["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["multisigOperatorshipTransferred"], keyof EventMultisigOperatorshipTransferred>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, keyof Event>]: never; }>(base?: I | undefined): Event;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        index?: string | number | Long.Long | undefined;
        status?: Event_Status | undefined;
        tokenSent?: {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } | undefined;
        contractCall?: {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } | undefined;
        contractCallWithToken?: {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } | undefined;
        transfer?: {
            to?: Buffer | undefined;
            amount?: Buffer | undefined;
        } | undefined;
        tokenDeployed?: {
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } | undefined;
        multisigOwnershipTransferred?: {
            preOwners?: Buffer[] | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
        } | undefined;
        multisigOperatorshipTransferred?: {
            newOperators?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
            newWeights?: Buffer[] | undefined;
        } | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
        index?: string | number | (Long.Long & {
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
        } & { [K_13 in Exclude<keyof I_1["index"], keyof Long.Long>]: never; }) | undefined;
        status?: Event_Status | undefined;
        tokenSent?: ({
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } & {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } & { [K_14 in Exclude<keyof I_1["tokenSent"], keyof EventTokenSent>]: never; }) | undefined;
        contractCall?: ({
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } & {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } & { [K_15 in Exclude<keyof I_1["contractCall"], keyof EventContractCall>]: never; }) | undefined;
        contractCallWithToken?: ({
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } & {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
            symbol?: string | undefined;
            amount?: Buffer | undefined;
        } & { [K_16 in Exclude<keyof I_1["contractCallWithToken"], keyof EventContractCallWithToken>]: never; }) | undefined;
        transfer?: ({
            to?: Buffer | undefined;
            amount?: Buffer | undefined;
        } & {
            to?: Buffer | undefined;
            amount?: Buffer | undefined;
        } & { [K_17 in Exclude<keyof I_1["transfer"], keyof EventTransfer>]: never; }) | undefined;
        tokenDeployed?: ({
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } & { [K_18 in Exclude<keyof I_1["tokenDeployed"], keyof EventTokenDeployed>]: never; }) | undefined;
        multisigOwnershipTransferred?: ({
            preOwners?: Buffer[] | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
        } & {
            preOwners?: (Buffer[] & Buffer[] & { [K_19 in Exclude<keyof I_1["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: (Buffer[] & Buffer[] & { [K_20 in Exclude<keyof I_1["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
            newThreshold?: Buffer | undefined;
        } & { [K_21 in Exclude<keyof I_1["multisigOwnershipTransferred"], keyof EventMultisigOwnershipTransferred>]: never; }) | undefined;
        multisigOperatorshipTransferred?: ({
            newOperators?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
            newWeights?: Buffer[] | undefined;
        } & {
            newOperators?: (Buffer[] & Buffer[] & { [K_22 in Exclude<keyof I_1["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
            newThreshold?: Buffer | undefined;
            newWeights?: (Buffer[] & Buffer[] & { [K_23 in Exclude<keyof I_1["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I_1["multisigOperatorshipTransferred"], keyof EventMultisigOperatorshipTransferred>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof Event>]: never; }>(object: I_1): Event;
};
export declare const EventTokenSent: {
    encode(message: EventTokenSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventTokenSent;
    fromJSON(object: any): EventTokenSent;
    toJSON(message: EventTokenSent): unknown;
    create<I extends {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        symbol?: string | undefined;
        amount?: Buffer | undefined;
    } & {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        symbol?: string | undefined;
        amount?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof EventTokenSent>]: never; }>(base?: I | undefined): EventTokenSent;
    fromPartial<I_1 extends {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        symbol?: string | undefined;
        amount?: Buffer | undefined;
    } & {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
        symbol?: string | undefined;
        amount?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventTokenSent>]: never; }>(object: I_1): EventTokenSent;
};
export declare const EventContractCall: {
    encode(message: EventContractCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventContractCall;
    fromJSON(object: any): EventContractCall;
    toJSON(message: EventContractCall): unknown;
    create<I extends {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
    } & {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof EventContractCall>]: never; }>(base?: I | undefined): EventContractCall;
    fromPartial<I_1 extends {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
    } & {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventContractCall>]: never; }>(object: I_1): EventContractCall;
};
export declare const EventContractCallWithToken: {
    encode(message: EventContractCallWithToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventContractCallWithToken;
    fromJSON(object: any): EventContractCallWithToken;
    toJSON(message: EventContractCallWithToken): unknown;
    create<I extends {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
        symbol?: string | undefined;
        amount?: Buffer | undefined;
    } & {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
        symbol?: string | undefined;
        amount?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof EventContractCallWithToken>]: never; }>(base?: I | undefined): EventContractCallWithToken;
    fromPartial<I_1 extends {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
        symbol?: string | undefined;
        amount?: Buffer | undefined;
    } & {
        sender?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
        symbol?: string | undefined;
        amount?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventContractCallWithToken>]: never; }>(object: I_1): EventContractCallWithToken;
};
export declare const EventTransfer: {
    encode(message: EventTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventTransfer;
    fromJSON(object: any): EventTransfer;
    toJSON(message: EventTransfer): unknown;
    create<I extends {
        to?: Buffer | undefined;
        amount?: Buffer | undefined;
    } & {
        to?: Buffer | undefined;
        amount?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof EventTransfer>]: never; }>(base?: I | undefined): EventTransfer;
    fromPartial<I_1 extends {
        to?: Buffer | undefined;
        amount?: Buffer | undefined;
    } & {
        to?: Buffer | undefined;
        amount?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventTransfer>]: never; }>(object: I_1): EventTransfer;
};
export declare const EventTokenDeployed: {
    encode(message: EventTokenDeployed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventTokenDeployed;
    fromJSON(object: any): EventTokenDeployed;
    toJSON(message: EventTokenDeployed): unknown;
    create<I extends {
        symbol?: string | undefined;
        tokenAddress?: Buffer | undefined;
    } & {
        symbol?: string | undefined;
        tokenAddress?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof EventTokenDeployed>]: never; }>(base?: I | undefined): EventTokenDeployed;
    fromPartial<I_1 extends {
        symbol?: string | undefined;
        tokenAddress?: Buffer | undefined;
    } & {
        symbol?: string | undefined;
        tokenAddress?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EventTokenDeployed>]: never; }>(object: I_1): EventTokenDeployed;
};
export declare const EventMultisigOwnershipTransferred: {
    encode(message: EventMultisigOwnershipTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventMultisigOwnershipTransferred;
    fromJSON(object: any): EventMultisigOwnershipTransferred;
    toJSON(message: EventMultisigOwnershipTransferred): unknown;
    create<I extends {
        preOwners?: Buffer[] | undefined;
        prevThreshold?: Buffer | undefined;
        newOwners?: Buffer[] | undefined;
        newThreshold?: Buffer | undefined;
    } & {
        preOwners?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["preOwners"], keyof Buffer[]>]: never; }) | undefined;
        prevThreshold?: Buffer | undefined;
        newOwners?: (Buffer[] & Buffer[] & { [K_1 in Exclude<keyof I["newOwners"], keyof Buffer[]>]: never; }) | undefined;
        newThreshold?: Buffer | undefined;
    } & { [K_2 in Exclude<keyof I, keyof EventMultisigOwnershipTransferred>]: never; }>(base?: I | undefined): EventMultisigOwnershipTransferred;
    fromPartial<I_1 extends {
        preOwners?: Buffer[] | undefined;
        prevThreshold?: Buffer | undefined;
        newOwners?: Buffer[] | undefined;
        newThreshold?: Buffer | undefined;
    } & {
        preOwners?: (Buffer[] & Buffer[] & { [K_3 in Exclude<keyof I_1["preOwners"], keyof Buffer[]>]: never; }) | undefined;
        prevThreshold?: Buffer | undefined;
        newOwners?: (Buffer[] & Buffer[] & { [K_4 in Exclude<keyof I_1["newOwners"], keyof Buffer[]>]: never; }) | undefined;
        newThreshold?: Buffer | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof EventMultisigOwnershipTransferred>]: never; }>(object: I_1): EventMultisigOwnershipTransferred;
};
export declare const EventMultisigOperatorshipTransferred: {
    encode(message: EventMultisigOperatorshipTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventMultisigOperatorshipTransferred;
    fromJSON(object: any): EventMultisigOperatorshipTransferred;
    toJSON(message: EventMultisigOperatorshipTransferred): unknown;
    create<I extends {
        newOperators?: Buffer[] | undefined;
        newThreshold?: Buffer | undefined;
        newWeights?: Buffer[] | undefined;
    } & {
        newOperators?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["newOperators"], keyof Buffer[]>]: never; }) | undefined;
        newThreshold?: Buffer | undefined;
        newWeights?: (Buffer[] & Buffer[] & { [K_1 in Exclude<keyof I["newWeights"], keyof Buffer[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof EventMultisigOperatorshipTransferred>]: never; }>(base?: I | undefined): EventMultisigOperatorshipTransferred;
    fromPartial<I_1 extends {
        newOperators?: Buffer[] | undefined;
        newThreshold?: Buffer | undefined;
        newWeights?: Buffer[] | undefined;
    } & {
        newOperators?: (Buffer[] & Buffer[] & { [K_3 in Exclude<keyof I_1["newOperators"], keyof Buffer[]>]: never; }) | undefined;
        newThreshold?: Buffer | undefined;
        newWeights?: (Buffer[] & Buffer[] & { [K_4 in Exclude<keyof I_1["newWeights"], keyof Buffer[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof EventMultisigOperatorshipTransferred>]: never; }>(object: I_1): EventMultisigOperatorshipTransferred;
};
export declare const NetworkInfo: {
    encode(message: NetworkInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInfo;
    fromJSON(object: any): NetworkInfo;
    toJSON(message: NetworkInfo): unknown;
    create<I extends {
        name?: string | undefined;
        id?: Buffer | undefined;
    } & {
        name?: string | undefined;
        id?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof NetworkInfo>]: never; }>(base?: I | undefined): NetworkInfo;
    fromPartial<I_1 extends {
        name?: string | undefined;
        id?: Buffer | undefined;
    } & {
        name?: string | undefined;
        id?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof NetworkInfo>]: never; }>(object: I_1): NetworkInfo;
};
export declare const BurnerInfo: {
    encode(message: BurnerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnerInfo;
    fromJSON(object: any): BurnerInfo;
    toJSON(message: BurnerInfo): unknown;
    create<I extends {
        burnerAddress?: Buffer | undefined;
        tokenAddress?: Buffer | undefined;
        destinationChain?: string | undefined;
        symbol?: string | undefined;
        asset?: string | undefined;
        salt?: Buffer | undefined;
    } & {
        burnerAddress?: Buffer | undefined;
        tokenAddress?: Buffer | undefined;
        destinationChain?: string | undefined;
        symbol?: string | undefined;
        asset?: string | undefined;
        salt?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof BurnerInfo>]: never; }>(base?: I | undefined): BurnerInfo;
    fromPartial<I_1 extends {
        burnerAddress?: Buffer | undefined;
        tokenAddress?: Buffer | undefined;
        destinationChain?: string | undefined;
        symbol?: string | undefined;
        asset?: string | undefined;
        salt?: Buffer | undefined;
    } & {
        burnerAddress?: Buffer | undefined;
        tokenAddress?: Buffer | undefined;
        destinationChain?: string | undefined;
        symbol?: string | undefined;
        asset?: string | undefined;
        salt?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BurnerInfo>]: never; }>(object: I_1): BurnerInfo;
};
export declare const ERC20Deposit: {
    encode(message: ERC20Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20Deposit;
    fromJSON(object: any): ERC20Deposit;
    toJSON(message: ERC20Deposit): unknown;
    create<I extends {
        txId?: Buffer | undefined;
        amount?: Buffer | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        burnerAddress?: Buffer | undefined;
        logIndex?: string | number | Long.Long | undefined;
    } & {
        txId?: Buffer | undefined;
        amount?: Buffer | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        burnerAddress?: Buffer | undefined;
        logIndex?: string | number | (Long.Long & {
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
        } & { [K in Exclude<keyof I["logIndex"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ERC20Deposit>]: never; }>(base?: I | undefined): ERC20Deposit;
    fromPartial<I_1 extends {
        txId?: Buffer | undefined;
        amount?: Buffer | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        burnerAddress?: Buffer | undefined;
        logIndex?: string | number | Long.Long | undefined;
    } & {
        txId?: Buffer | undefined;
        amount?: Buffer | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        burnerAddress?: Buffer | undefined;
        logIndex?: string | number | (Long.Long & {
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
        } & { [K_2 in Exclude<keyof I_1["logIndex"], keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ERC20Deposit>]: never; }>(object: I_1): ERC20Deposit;
};
export declare const ERC20TokenMetadata: {
    encode(message: ERC20TokenMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokenMetadata;
    fromJSON(object: any): ERC20TokenMetadata;
    toJSON(message: ERC20TokenMetadata): unknown;
    create<I extends {
        asset?: string | undefined;
        chainId?: Buffer | undefined;
        details?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        tokenAddress?: string | undefined;
        txHash?: string | undefined;
        status?: Status | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Buffer | undefined;
    } & {
        asset?: string | undefined;
        chainId?: Buffer | undefined;
        details?: ({
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K in Exclude<keyof I["details"], keyof TokenDetails>]: never; }) | undefined;
        tokenAddress?: string | undefined;
        txHash?: string | undefined;
        status?: Status | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ERC20TokenMetadata>]: never; }>(base?: I | undefined): ERC20TokenMetadata;
    fromPartial<I_1 extends {
        asset?: string | undefined;
        chainId?: Buffer | undefined;
        details?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        tokenAddress?: string | undefined;
        txHash?: string | undefined;
        status?: Status | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Buffer | undefined;
    } & {
        asset?: string | undefined;
        chainId?: Buffer | undefined;
        details?: ({
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["details"], keyof TokenDetails>]: never; }) | undefined;
        tokenAddress?: string | undefined;
        txHash?: string | undefined;
        status?: Status | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Buffer | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ERC20TokenMetadata>]: never; }>(object: I_1): ERC20TokenMetadata;
};
export declare const TransactionMetadata: {
    encode(message: TransactionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransactionMetadata;
    fromJSON(object: any): TransactionMetadata;
    toJSON(message: TransactionMetadata): unknown;
    create<I extends {
        rawTx?: Buffer | undefined;
        pubKey?: Buffer | undefined;
    } & {
        rawTx?: Buffer | undefined;
        pubKey?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof TransactionMetadata>]: never; }>(base?: I | undefined): TransactionMetadata;
    fromPartial<I_1 extends {
        rawTx?: Buffer | undefined;
        pubKey?: Buffer | undefined;
    } & {
        rawTx?: Buffer | undefined;
        pubKey?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TransactionMetadata>]: never; }>(object: I_1): TransactionMetadata;
};
export declare const Command: {
    encode(message: Command, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Command;
    fromJSON(object: any): Command;
    toJSON(message: Command): unknown;
    create<I extends {
        id?: Buffer | undefined;
        command?: string | undefined;
        params?: Buffer | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
        type?: CommandType | undefined;
    } & {
        id?: Buffer | undefined;
        command?: string | undefined;
        params?: Buffer | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
        type?: CommandType | undefined;
    } & { [K in Exclude<keyof I, keyof Command>]: never; }>(base?: I | undefined): Command;
    fromPartial<I_1 extends {
        id?: Buffer | undefined;
        command?: string | undefined;
        params?: Buffer | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
        type?: CommandType | undefined;
    } & {
        id?: Buffer | undefined;
        command?: string | undefined;
        params?: Buffer | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
        type?: CommandType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Command>]: never; }>(object: I_1): Command;
};
export declare const CommandBatchMetadata: {
    encode(message: CommandBatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandBatchMetadata;
    fromJSON(object: any): CommandBatchMetadata;
    toJSON(message: CommandBatchMetadata): unknown;
    create<I extends {
        id?: Buffer | undefined;
        commandIds?: Buffer[] | undefined;
        data?: Buffer | undefined;
        sigHash?: Buffer | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        prevBatchedCommandsId?: Buffer | undefined;
        signature?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
    } & {
        id?: Buffer | undefined;
        commandIds?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["commandIds"], keyof Buffer[]>]: never; }) | undefined;
        data?: Buffer | undefined;
        sigHash?: Buffer | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        prevBatchedCommandsId?: Buffer | undefined;
        signature?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_1 in Exclude<keyof I["signature"], keyof Any>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof CommandBatchMetadata>]: never; }>(base?: I | undefined): CommandBatchMetadata;
    fromPartial<I_1 extends {
        id?: Buffer | undefined;
        commandIds?: Buffer[] | undefined;
        data?: Buffer | undefined;
        sigHash?: Buffer | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        prevBatchedCommandsId?: Buffer | undefined;
        signature?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
    } & {
        id?: Buffer | undefined;
        commandIds?: (Buffer[] & Buffer[] & { [K_3 in Exclude<keyof I_1["commandIds"], keyof Buffer[]>]: never; }) | undefined;
        data?: Buffer | undefined;
        sigHash?: Buffer | undefined;
        status?: BatchedCommandsStatus | undefined;
        keyId?: string | undefined;
        prevBatchedCommandsId?: Buffer | undefined;
        signature?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I_1["signature"], keyof Any>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof CommandBatchMetadata>]: never; }>(object: I_1): CommandBatchMetadata;
};
export declare const SigMetadata: {
    encode(message: SigMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigMetadata;
    fromJSON(object: any): SigMetadata;
    toJSON(message: SigMetadata): unknown;
    create<I extends {
        type?: SigType | undefined;
        chain?: string | undefined;
        commandBatchId?: Buffer | undefined;
    } & {
        type?: SigType | undefined;
        chain?: string | undefined;
        commandBatchId?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof SigMetadata>]: never; }>(base?: I | undefined): SigMetadata;
    fromPartial<I_1 extends {
        type?: SigType | undefined;
        chain?: string | undefined;
        commandBatchId?: Buffer | undefined;
    } & {
        type?: SigType | undefined;
        chain?: string | undefined;
        commandBatchId?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SigMetadata>]: never; }>(object: I_1): SigMetadata;
};
export declare const TransferKey: {
    encode(message: TransferKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferKey;
    fromJSON(object: any): TransferKey;
    toJSON(message: TransferKey): unknown;
    create<I extends {
        txId?: Buffer | undefined;
        nextKeyId?: string | undefined;
    } & {
        txId?: Buffer | undefined;
        nextKeyId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof TransferKey>]: never; }>(base?: I | undefined): TransferKey;
    fromPartial<I_1 extends {
        txId?: Buffer | undefined;
        nextKeyId?: string | undefined;
    } & {
        txId?: Buffer | undefined;
        nextKeyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TransferKey>]: never; }>(object: I_1): TransferKey;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    create<I extends {
        chain?: string | undefined;
        name?: string | undefined;
    } & {
        chain?: string | undefined;
        name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Asset>]: never; }>(base?: I | undefined): Asset;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        name?: string | undefined;
    } & {
        chain?: string | undefined;
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Asset>]: never; }>(object: I_1): Asset;
};
export declare const TokenDetails: {
    encode(message: TokenDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenDetails;
    fromJSON(object: any): TokenDetails;
    toJSON(message: TokenDetails): unknown;
    create<I extends {
        tokenName?: string | undefined;
        symbol?: string | undefined;
        decimals?: number | undefined;
        capacity?: Buffer | undefined;
    } & {
        tokenName?: string | undefined;
        symbol?: string | undefined;
        decimals?: number | undefined;
        capacity?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof TokenDetails>]: never; }>(base?: I | undefined): TokenDetails;
    fromPartial<I_1 extends {
        tokenName?: string | undefined;
        symbol?: string | undefined;
        decimals?: number | undefined;
        capacity?: Buffer | undefined;
    } & {
        tokenName?: string | undefined;
        symbol?: string | undefined;
        decimals?: number | undefined;
        capacity?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TokenDetails>]: never; }>(object: I_1): TokenDetails;
};
export declare const Gateway: {
    encode(message: Gateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Gateway;
    fromJSON(object: any): Gateway;
    toJSON(message: Gateway): unknown;
    create<I extends {
        address?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "address">]: never; }>(base?: I | undefined): Gateway;
    fromPartial<I_1 extends {
        address?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "address">]: never; }>(object: I_1): Gateway;
};
export declare const PollMetadata: {
    encode(message: PollMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PollMetadata;
    fromJSON(object: any): PollMetadata;
    toJSON(message: PollMetadata): unknown;
    create<I extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & { [K in Exclude<keyof I, keyof PollMetadata>]: never; }>(base?: I | undefined): PollMetadata;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PollMetadata>]: never; }>(object: I_1): PollMetadata;
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
