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
/**
 * DEPRECATED: Removed in v0.20, reinstated in v1.3 for backward compatibility.
 * This enum must remain to allow decoding of historical transactions.
 * DO NOT use in new code.
 *
 * @deprecated
 */
export declare enum TransferKeyType {
    TRANSFER_KEY_TYPE_UNSPECIFIED = 0,
    TRANSFER_KEY_TYPE_OWNERSHIP = 1,
    TRANSFER_KEY_TYPE_OPERATORSHIP = 2,
    UNRECOGNIZED = -1
}
export declare function transferKeyTypeFromJSON(object: any): TransferKeyType;
export declare function transferKeyTypeToJSON(object: TransferKeyType): string;
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
    $type: "axelar.evm.v1beta1.VoteEvents";
    chain: string;
    events: Event[];
}
export interface Event {
    $type: "axelar.evm.v1beta1.Event";
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
    $type: "axelar.evm.v1beta1.EventTokenSent";
    sender: Buffer;
    destinationChain: string;
    destinationAddress: string;
    symbol: string;
    amount: Buffer;
}
export interface EventContractCall {
    $type: "axelar.evm.v1beta1.EventContractCall";
    sender: Buffer;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Buffer;
}
export interface EventContractCallWithToken {
    $type: "axelar.evm.v1beta1.EventContractCallWithToken";
    sender: Buffer;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Buffer;
    symbol: string;
    amount: Buffer;
}
export interface EventTransfer {
    $type: "axelar.evm.v1beta1.EventTransfer";
    to: Buffer;
    amount: Buffer;
}
export interface EventTokenDeployed {
    $type: "axelar.evm.v1beta1.EventTokenDeployed";
    symbol: string;
    tokenAddress: Buffer;
}
/** @deprecated */
export interface EventMultisigOwnershipTransferred {
    $type: "axelar.evm.v1beta1.EventMultisigOwnershipTransferred";
    preOwners: Buffer[];
    prevThreshold: Buffer;
    newOwners: Buffer[];
    newThreshold: Buffer;
}
export interface EventMultisigOperatorshipTransferred {
    $type: "axelar.evm.v1beta1.EventMultisigOperatorshipTransferred";
    newOperators: Buffer[];
    newThreshold: Buffer;
    newWeights: Buffer[];
}
/** NetworkInfo describes information about a network */
export interface NetworkInfo {
    $type: "axelar.evm.v1beta1.NetworkInfo";
    name: string;
    id: Buffer;
}
/**
 * BurnerInfo describes information required to burn token at an burner address
 * that is deposited by an user
 */
export interface BurnerInfo {
    $type: "axelar.evm.v1beta1.BurnerInfo";
    burnerAddress: Buffer;
    tokenAddress: Buffer;
    destinationChain: string;
    symbol: string;
    asset: string;
    salt: Buffer;
}
/** ERC20Deposit contains information for an ERC20 deposit */
export interface ERC20Deposit {
    $type: "axelar.evm.v1beta1.ERC20Deposit";
    txId: Buffer;
    amount: Buffer;
    asset: string;
    destinationChain: string;
    burnerAddress: Buffer;
    logIndex: Long;
}
/** ERC20TokenMetadata describes information about an ERC20 token */
export interface ERC20TokenMetadata {
    $type: "axelar.evm.v1beta1.ERC20TokenMetadata";
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
    $type: "axelar.evm.v1beta1.TransactionMetadata";
    rawTx: Buffer;
    pubKey: Buffer;
}
export interface Command {
    $type: "axelar.evm.v1beta1.Command";
    id: Buffer;
    /** @deprecated */
    command: string;
    params: Buffer;
    keyId: string;
    maxGasCost: number;
    type: CommandType;
}
export interface CommandBatchMetadata {
    $type: "axelar.evm.v1beta1.CommandBatchMetadata";
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
    $type: "axelar.evm.v1beta1.SigMetadata";
    type: SigType;
    chain: string;
    commandBatchId: Buffer;
}
/** TransferKey contains information for a transfer operatorship */
export interface TransferKey {
    $type: "axelar.evm.v1beta1.TransferKey";
    txId: Buffer;
    nextKeyId: string;
}
export interface Asset {
    $type: "axelar.evm.v1beta1.Asset";
    chain: string;
    name: string;
}
export interface TokenDetails {
    $type: "axelar.evm.v1beta1.TokenDetails";
    tokenName: string;
    symbol: string;
    decimals: number;
    capacity: Buffer;
}
export interface Gateway {
    $type: "axelar.evm.v1beta1.Gateway";
    address: Buffer;
}
export interface PollMetadata {
    $type: "axelar.evm.v1beta1.PollMetadata";
    chain: string;
    txId: Buffer;
}
export declare const VoteEvents: {
    $type: "axelar.evm.v1beta1.VoteEvents";
    encode(message: VoteEvents, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteEvents;
    fromJSON(object: any): VoteEvents;
    toJSON(message: VoteEvents): unknown;
    create<I extends {
        events?: {
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
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
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[] | undefined;
        chain?: string | undefined;
    } & {
        events?: ({
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
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
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[] & ({
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
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
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } & {
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
            } & { [K in Exclude<keyof I["events"][number]["index"], "$type" | keyof Long.Long>]: never; }) | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: ({
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } & {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } & { [K_1 in Exclude<keyof I["events"][number]["tokenSent"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["events"][number]["contractCall"], "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
            contractCallWithToken?: ({
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & { [K_3 in Exclude<keyof I["events"][number]["contractCallWithToken"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
            transfer?: ({
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & { [K_4 in Exclude<keyof I["events"][number]["transfer"], "$type" | "amount" | "to">]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_5 in Exclude<keyof I["events"][number]["tokenDeployed"], "symbol" | "$type" | "tokenAddress">]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_6 in Exclude<keyof I["events"][number]["multisigOwnershipTransferred"]["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_7 in Exclude<keyof I["events"][number]["multisigOwnershipTransferred"]["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_8 in Exclude<keyof I["events"][number]["multisigOwnershipTransferred"], "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newThreshold?: Buffer | undefined;
                newOperators?: (Buffer[] & Buffer[] & { [K_9 in Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_10 in Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"], "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["events"][number], "$type" | "index" | "status" | "chain" | "txId" | "tokenSent" | "contractCall" | "contractCallWithToken" | "transfer" | "tokenDeployed" | "multisigOwnershipTransferred" | "multisigOperatorshipTransferred">]: never; })[] & { [K_13 in Exclude<keyof I["events"], "$type" | keyof {
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
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
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        chain?: string | undefined;
    } & { [K_14 in Exclude<keyof I, "$type" | "events" | "chain">]: never; }>(base?: I | undefined): VoteEvents;
    fromPartial<I_1 extends {
        events?: {
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
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
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[] | undefined;
        chain?: string | undefined;
    } & {
        events?: ({
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
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
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[] & ({
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
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
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        } & {
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
            } & { [K_15 in Exclude<keyof I_1["events"][number]["index"], "$type" | keyof Long.Long>]: never; }) | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: ({
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } & {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } & { [K_16 in Exclude<keyof I_1["events"][number]["tokenSent"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }) | undefined;
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
            } & { [K_17 in Exclude<keyof I_1["events"][number]["contractCall"], "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
            contractCallWithToken?: ({
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } & { [K_18 in Exclude<keyof I_1["events"][number]["contractCallWithToken"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
            transfer?: ({
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & { [K_19 in Exclude<keyof I_1["events"][number]["transfer"], "$type" | "amount" | "to">]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_20 in Exclude<keyof I_1["events"][number]["tokenDeployed"], "symbol" | "$type" | "tokenAddress">]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_21 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"]["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_22 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"]["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_23 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"], "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newThreshold?: Buffer | undefined;
                newOperators?: (Buffer[] & Buffer[] & { [K_24 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"]["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_25 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"]["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            } & { [K_26 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"], "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I_1["events"][number], "$type" | "index" | "status" | "chain" | "txId" | "tokenSent" | "contractCall" | "contractCallWithToken" | "transfer" | "tokenDeployed" | "multisigOwnershipTransferred" | "multisigOperatorshipTransferred">]: never; })[] & { [K_28 in Exclude<keyof I_1["events"], "$type" | keyof {
            index?: string | number | Long.Long | undefined;
            status?: Event_Status | undefined;
            chain?: string | undefined;
            txId?: Buffer | undefined;
            tokenSent?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                destinationAddress?: string | undefined;
            } | undefined;
            contractCall?: {
                sender?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            contractCallWithToken?: {
                symbol?: string | undefined;
                sender?: Buffer | undefined;
                amount?: Buffer | undefined;
                destinationChain?: string | undefined;
                contractAddress?: string | undefined;
                payloadHash?: Buffer | undefined;
            } | undefined;
            transfer?: {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
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
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        chain?: string | undefined;
    } & { [K_29 in Exclude<keyof I_1, "$type" | "events" | "chain">]: never; }>(object: I_1): VoteEvents;
};
export declare const Event: {
    $type: "axelar.evm.v1beta1.Event";
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    create<I extends {
        index?: string | number | Long.Long | undefined;
        status?: Event_Status | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        tokenSent?: {
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
        } | undefined;
        contractCall?: {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } | undefined;
        contractCallWithToken?: {
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } | undefined;
        transfer?: {
            amount?: Buffer | undefined;
            to?: Buffer | undefined;
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
            newThreshold?: Buffer | undefined;
            newOperators?: Buffer[] | undefined;
            newWeights?: Buffer[] | undefined;
        } | undefined;
    } & {
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
        } & { [K in Exclude<keyof I["index"], "$type" | keyof Long.Long>]: never; }) | undefined;
        status?: Event_Status | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        tokenSent?: ({
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
        } & {
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
        } & { [K_1 in Exclude<keyof I["tokenSent"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }) | undefined;
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
        } & { [K_2 in Exclude<keyof I["contractCall"], "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
        contractCallWithToken?: ({
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I["contractCallWithToken"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
        transfer?: ({
            amount?: Buffer | undefined;
            to?: Buffer | undefined;
        } & {
            amount?: Buffer | undefined;
            to?: Buffer | undefined;
        } & { [K_4 in Exclude<keyof I["transfer"], "$type" | "amount" | "to">]: never; }) | undefined;
        tokenDeployed?: ({
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } & { [K_5 in Exclude<keyof I["tokenDeployed"], "symbol" | "$type" | "tokenAddress">]: never; }) | undefined;
        multisigOwnershipTransferred?: ({
            preOwners?: Buffer[] | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
        } & {
            preOwners?: (Buffer[] & Buffer[] & { [K_6 in Exclude<keyof I["multisigOwnershipTransferred"]["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: (Buffer[] & Buffer[] & { [K_7 in Exclude<keyof I["multisigOwnershipTransferred"]["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            newThreshold?: Buffer | undefined;
        } & { [K_8 in Exclude<keyof I["multisigOwnershipTransferred"], "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }) | undefined;
        multisigOperatorshipTransferred?: ({
            newThreshold?: Buffer | undefined;
            newOperators?: Buffer[] | undefined;
            newWeights?: Buffer[] | undefined;
        } & {
            newThreshold?: Buffer | undefined;
            newOperators?: (Buffer[] & Buffer[] & { [K_9 in Exclude<keyof I["multisigOperatorshipTransferred"]["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            newWeights?: (Buffer[] & Buffer[] & { [K_10 in Exclude<keyof I["multisigOperatorshipTransferred"]["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["multisigOperatorshipTransferred"], "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, "$type" | "index" | "status" | "chain" | "txId" | "tokenSent" | "contractCall" | "contractCallWithToken" | "transfer" | "tokenDeployed" | "multisigOwnershipTransferred" | "multisigOperatorshipTransferred">]: never; }>(base?: I | undefined): Event;
    fromPartial<I_1 extends {
        index?: string | number | Long.Long | undefined;
        status?: Event_Status | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        tokenSent?: {
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
        } | undefined;
        contractCall?: {
            sender?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } | undefined;
        contractCallWithToken?: {
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } | undefined;
        transfer?: {
            amount?: Buffer | undefined;
            to?: Buffer | undefined;
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
            newThreshold?: Buffer | undefined;
            newOperators?: Buffer[] | undefined;
            newWeights?: Buffer[] | undefined;
        } | undefined;
    } & {
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
        } & { [K_13 in Exclude<keyof I_1["index"], "$type" | keyof Long.Long>]: never; }) | undefined;
        status?: Event_Status | undefined;
        chain?: string | undefined;
        txId?: Buffer | undefined;
        tokenSent?: ({
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
        } & {
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            destinationAddress?: string | undefined;
        } & { [K_14 in Exclude<keyof I_1["tokenSent"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }) | undefined;
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
        } & { [K_15 in Exclude<keyof I_1["contractCall"], "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
        contractCallWithToken?: ({
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            sender?: Buffer | undefined;
            amount?: Buffer | undefined;
            destinationChain?: string | undefined;
            contractAddress?: string | undefined;
            payloadHash?: Buffer | undefined;
        } & { [K_16 in Exclude<keyof I_1["contractCallWithToken"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
        transfer?: ({
            amount?: Buffer | undefined;
            to?: Buffer | undefined;
        } & {
            amount?: Buffer | undefined;
            to?: Buffer | undefined;
        } & { [K_17 in Exclude<keyof I_1["transfer"], "$type" | "amount" | "to">]: never; }) | undefined;
        tokenDeployed?: ({
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenAddress?: Buffer | undefined;
        } & { [K_18 in Exclude<keyof I_1["tokenDeployed"], "symbol" | "$type" | "tokenAddress">]: never; }) | undefined;
        multisigOwnershipTransferred?: ({
            preOwners?: Buffer[] | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: Buffer[] | undefined;
            newThreshold?: Buffer | undefined;
        } & {
            preOwners?: (Buffer[] & Buffer[] & { [K_19 in Exclude<keyof I_1["multisigOwnershipTransferred"]["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            prevThreshold?: Buffer | undefined;
            newOwners?: (Buffer[] & Buffer[] & { [K_20 in Exclude<keyof I_1["multisigOwnershipTransferred"]["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            newThreshold?: Buffer | undefined;
        } & { [K_21 in Exclude<keyof I_1["multisigOwnershipTransferred"], "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }) | undefined;
        multisigOperatorshipTransferred?: ({
            newThreshold?: Buffer | undefined;
            newOperators?: Buffer[] | undefined;
            newWeights?: Buffer[] | undefined;
        } & {
            newThreshold?: Buffer | undefined;
            newOperators?: (Buffer[] & Buffer[] & { [K_22 in Exclude<keyof I_1["multisigOperatorshipTransferred"]["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            newWeights?: (Buffer[] & Buffer[] & { [K_23 in Exclude<keyof I_1["multisigOperatorshipTransferred"]["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I_1["multisigOperatorshipTransferred"], "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, "$type" | "index" | "status" | "chain" | "txId" | "tokenSent" | "contractCall" | "contractCallWithToken" | "transfer" | "tokenDeployed" | "multisigOwnershipTransferred" | "multisigOperatorshipTransferred">]: never; }>(object: I_1): Event;
};
export declare const EventTokenSent: {
    $type: "axelar.evm.v1beta1.EventTokenSent";
    encode(message: EventTokenSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventTokenSent;
    fromJSON(object: any): EventTokenSent;
    toJSON(message: EventTokenSent): unknown;
    create<I extends {
        symbol?: string | undefined;
        sender?: Buffer | undefined;
        amount?: Buffer | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
    } & {
        symbol?: string | undefined;
        sender?: Buffer | undefined;
        amount?: Buffer | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
    } & { [K in Exclude<keyof I, "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }>(base?: I | undefined): EventTokenSent;
    fromPartial<I_1 extends {
        symbol?: string | undefined;
        sender?: Buffer | undefined;
        amount?: Buffer | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
    } & {
        symbol?: string | undefined;
        sender?: Buffer | undefined;
        amount?: Buffer | undefined;
        destinationChain?: string | undefined;
        destinationAddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }>(object: I_1): EventTokenSent;
};
export declare const EventContractCall: {
    $type: "axelar.evm.v1beta1.EventContractCall";
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
    } & { [K in Exclude<keyof I, "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }>(base?: I | undefined): EventContractCall;
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
    } & { [K_1 in Exclude<keyof I_1, "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }>(object: I_1): EventContractCall;
};
export declare const EventContractCallWithToken: {
    $type: "axelar.evm.v1beta1.EventContractCallWithToken";
    encode(message: EventContractCallWithToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventContractCallWithToken;
    fromJSON(object: any): EventContractCallWithToken;
    toJSON(message: EventContractCallWithToken): unknown;
    create<I extends {
        symbol?: string | undefined;
        sender?: Buffer | undefined;
        amount?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
    } & {
        symbol?: string | undefined;
        sender?: Buffer | undefined;
        amount?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }>(base?: I | undefined): EventContractCallWithToken;
    fromPartial<I_1 extends {
        symbol?: string | undefined;
        sender?: Buffer | undefined;
        amount?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
    } & {
        symbol?: string | undefined;
        sender?: Buffer | undefined;
        amount?: Buffer | undefined;
        destinationChain?: string | undefined;
        contractAddress?: string | undefined;
        payloadHash?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }>(object: I_1): EventContractCallWithToken;
};
export declare const EventTransfer: {
    $type: "axelar.evm.v1beta1.EventTransfer";
    encode(message: EventTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventTransfer;
    fromJSON(object: any): EventTransfer;
    toJSON(message: EventTransfer): unknown;
    create<I extends {
        amount?: Buffer | undefined;
        to?: Buffer | undefined;
    } & {
        amount?: Buffer | undefined;
        to?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "amount" | "to">]: never; }>(base?: I | undefined): EventTransfer;
    fromPartial<I_1 extends {
        amount?: Buffer | undefined;
        to?: Buffer | undefined;
    } & {
        amount?: Buffer | undefined;
        to?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "amount" | "to">]: never; }>(object: I_1): EventTransfer;
};
export declare const EventTokenDeployed: {
    $type: "axelar.evm.v1beta1.EventTokenDeployed";
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
    } & { [K in Exclude<keyof I, "symbol" | "$type" | "tokenAddress">]: never; }>(base?: I | undefined): EventTokenDeployed;
    fromPartial<I_1 extends {
        symbol?: string | undefined;
        tokenAddress?: Buffer | undefined;
    } & {
        symbol?: string | undefined;
        tokenAddress?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "symbol" | "$type" | "tokenAddress">]: never; }>(object: I_1): EventTokenDeployed;
};
export declare const EventMultisigOwnershipTransferred: {
    $type: "axelar.evm.v1beta1.EventMultisigOwnershipTransferred";
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
        preOwners?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        prevThreshold?: Buffer | undefined;
        newOwners?: (Buffer[] & Buffer[] & { [K_1 in Exclude<keyof I["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        newThreshold?: Buffer | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }>(base?: I | undefined): EventMultisigOwnershipTransferred;
    fromPartial<I_1 extends {
        preOwners?: Buffer[] | undefined;
        prevThreshold?: Buffer | undefined;
        newOwners?: Buffer[] | undefined;
        newThreshold?: Buffer | undefined;
    } & {
        preOwners?: (Buffer[] & Buffer[] & { [K_3 in Exclude<keyof I_1["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        prevThreshold?: Buffer | undefined;
        newOwners?: (Buffer[] & Buffer[] & { [K_4 in Exclude<keyof I_1["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        newThreshold?: Buffer | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }>(object: I_1): EventMultisigOwnershipTransferred;
};
export declare const EventMultisigOperatorshipTransferred: {
    $type: "axelar.evm.v1beta1.EventMultisigOperatorshipTransferred";
    encode(message: EventMultisigOperatorshipTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventMultisigOperatorshipTransferred;
    fromJSON(object: any): EventMultisigOperatorshipTransferred;
    toJSON(message: EventMultisigOperatorshipTransferred): unknown;
    create<I extends {
        newThreshold?: Buffer | undefined;
        newOperators?: Buffer[] | undefined;
        newWeights?: Buffer[] | undefined;
    } & {
        newThreshold?: Buffer | undefined;
        newOperators?: (Buffer[] & Buffer[] & { [K in Exclude<keyof I["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        newWeights?: (Buffer[] & Buffer[] & { [K_1 in Exclude<keyof I["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }>(base?: I | undefined): EventMultisigOperatorshipTransferred;
    fromPartial<I_1 extends {
        newThreshold?: Buffer | undefined;
        newOperators?: Buffer[] | undefined;
        newWeights?: Buffer[] | undefined;
    } & {
        newThreshold?: Buffer | undefined;
        newOperators?: (Buffer[] & Buffer[] & { [K_3 in Exclude<keyof I_1["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        newWeights?: (Buffer[] & Buffer[] & { [K_4 in Exclude<keyof I_1["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }>(object: I_1): EventMultisigOperatorshipTransferred;
};
export declare const NetworkInfo: {
    $type: "axelar.evm.v1beta1.NetworkInfo";
    encode(message: NetworkInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInfo;
    fromJSON(object: any): NetworkInfo;
    toJSON(message: NetworkInfo): unknown;
    create<I extends {
        id?: Buffer | undefined;
        name?: string | undefined;
    } & {
        id?: Buffer | undefined;
        name?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id" | "name">]: never; }>(base?: I | undefined): NetworkInfo;
    fromPartial<I_1 extends {
        id?: Buffer | undefined;
        name?: string | undefined;
    } & {
        id?: Buffer | undefined;
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "id" | "name">]: never; }>(object: I_1): NetworkInfo;
};
export declare const BurnerInfo: {
    $type: "axelar.evm.v1beta1.BurnerInfo";
    encode(message: BurnerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BurnerInfo;
    fromJSON(object: any): BurnerInfo;
    toJSON(message: BurnerInfo): unknown;
    create<I extends {
        symbol?: string | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        tokenAddress?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        salt?: Buffer | undefined;
    } & {
        symbol?: string | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        tokenAddress?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        salt?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "symbol" | "$type" | "asset" | "destinationChain" | "tokenAddress" | "burnerAddress" | "salt">]: never; }>(base?: I | undefined): BurnerInfo;
    fromPartial<I_1 extends {
        symbol?: string | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        tokenAddress?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        salt?: Buffer | undefined;
    } & {
        symbol?: string | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        tokenAddress?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        salt?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "symbol" | "$type" | "asset" | "destinationChain" | "tokenAddress" | "burnerAddress" | "salt">]: never; }>(object: I_1): BurnerInfo;
};
export declare const ERC20Deposit: {
    $type: "axelar.evm.v1beta1.ERC20Deposit";
    encode(message: ERC20Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20Deposit;
    fromJSON(object: any): ERC20Deposit;
    toJSON(message: ERC20Deposit): unknown;
    create<I extends {
        amount?: Buffer | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        logIndex?: string | number | Long.Long | undefined;
    } & {
        amount?: Buffer | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        txId?: Buffer | undefined;
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
        } & { [K in Exclude<keyof I["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; }>(base?: I | undefined): ERC20Deposit;
    fromPartial<I_1 extends {
        amount?: Buffer | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        txId?: Buffer | undefined;
        burnerAddress?: Buffer | undefined;
        logIndex?: string | number | Long.Long | undefined;
    } & {
        amount?: Buffer | undefined;
        asset?: string | undefined;
        destinationChain?: string | undefined;
        txId?: Buffer | undefined;
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
        } & { [K_2 in Exclude<keyof I_1["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; }>(object: I_1): ERC20Deposit;
};
export declare const ERC20TokenMetadata: {
    $type: "axelar.evm.v1beta1.ERC20TokenMetadata";
    encode(message: ERC20TokenMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ERC20TokenMetadata;
    fromJSON(object: any): ERC20TokenMetadata;
    toJSON(message: ERC20TokenMetadata): unknown;
    create<I extends {
        chainId?: Buffer | undefined;
        status?: Status | undefined;
        asset?: string | undefined;
        tokenAddress?: string | undefined;
        details?: {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        txHash?: string | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Buffer | undefined;
    } & {
        chainId?: Buffer | undefined;
        status?: Status | undefined;
        asset?: string | undefined;
        tokenAddress?: string | undefined;
        details?: ({
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K in Exclude<keyof I["details"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
        txHash?: string | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "chainId" | "status" | "asset" | "tokenAddress" | "details" | "txHash" | "isExternal" | "burnerCode">]: never; }>(base?: I | undefined): ERC20TokenMetadata;
    fromPartial<I_1 extends {
        chainId?: Buffer | undefined;
        status?: Status | undefined;
        asset?: string | undefined;
        tokenAddress?: string | undefined;
        details?: {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } | undefined;
        txHash?: string | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Buffer | undefined;
    } & {
        chainId?: Buffer | undefined;
        status?: Status | undefined;
        asset?: string | undefined;
        tokenAddress?: string | undefined;
        details?: ({
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & {
            symbol?: string | undefined;
            tokenName?: string | undefined;
            decimals?: number | undefined;
            capacity?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["details"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
        txHash?: string | undefined;
        isExternal?: boolean | undefined;
        burnerCode?: Buffer | undefined;
    } & { [K_3 in Exclude<keyof I_1, "$type" | "chainId" | "status" | "asset" | "tokenAddress" | "details" | "txHash" | "isExternal" | "burnerCode">]: never; }>(object: I_1): ERC20TokenMetadata;
};
export declare const TransactionMetadata: {
    $type: "axelar.evm.v1beta1.TransactionMetadata";
    encode(message: TransactionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransactionMetadata;
    fromJSON(object: any): TransactionMetadata;
    toJSON(message: TransactionMetadata): unknown;
    create<I extends {
        pubKey?: Buffer | undefined;
        rawTx?: Buffer | undefined;
    } & {
        pubKey?: Buffer | undefined;
        rawTx?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "pubKey" | "rawTx">]: never; }>(base?: I | undefined): TransactionMetadata;
    fromPartial<I_1 extends {
        pubKey?: Buffer | undefined;
        rawTx?: Buffer | undefined;
    } & {
        pubKey?: Buffer | undefined;
        rawTx?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "pubKey" | "rawTx">]: never; }>(object: I_1): TransactionMetadata;
};
export declare const Command: {
    $type: "axelar.evm.v1beta1.Command";
    encode(message: Command, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Command;
    fromJSON(object: any): Command;
    toJSON(message: Command): unknown;
    create<I extends {
        type?: CommandType | undefined;
        id?: Buffer | undefined;
        params?: Buffer | undefined;
        command?: string | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        type?: CommandType | undefined;
        id?: Buffer | undefined;
        params?: Buffer | undefined;
        command?: string | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K in Exclude<keyof I, "$type" | "type" | "id" | "params" | "command" | "keyId" | "maxGasCost">]: never; }>(base?: I | undefined): Command;
    fromPartial<I_1 extends {
        type?: CommandType | undefined;
        id?: Buffer | undefined;
        params?: Buffer | undefined;
        command?: string | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & {
        type?: CommandType | undefined;
        id?: Buffer | undefined;
        params?: Buffer | undefined;
        command?: string | undefined;
        keyId?: string | undefined;
        maxGasCost?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "type" | "id" | "params" | "command" | "keyId" | "maxGasCost">]: never; }>(object: I_1): Command;
};
export declare const CommandBatchMetadata: {
    $type: "axelar.evm.v1beta1.CommandBatchMetadata";
    encode(message: CommandBatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommandBatchMetadata;
    fromJSON(object: any): CommandBatchMetadata;
    toJSON(message: CommandBatchMetadata): unknown;
    create<I extends {
        data?: Buffer | undefined;
        status?: BatchedCommandsStatus | undefined;
        signature?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
        id?: Buffer | undefined;
        keyId?: string | undefined;
        commandIds?: Buffer[] | undefined;
        sigHash?: Buffer | undefined;
        prevBatchedCommandsId?: Buffer | undefined;
    } & {
        data?: Buffer | undefined;
        status?: BatchedCommandsStatus | undefined;
        signature?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K in Exclude<keyof I["signature"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
        id?: Buffer | undefined;
        keyId?: string | undefined;
        commandIds?: (Buffer[] & Buffer[] & { [K_1 in Exclude<keyof I["commandIds"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        sigHash?: Buffer | undefined;
        prevBatchedCommandsId?: Buffer | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "data" | "status" | "signature" | "id" | "keyId" | "commandIds" | "sigHash" | "prevBatchedCommandsId">]: never; }>(base?: I | undefined): CommandBatchMetadata;
    fromPartial<I_1 extends {
        data?: Buffer | undefined;
        status?: BatchedCommandsStatus | undefined;
        signature?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
        id?: Buffer | undefined;
        keyId?: string | undefined;
        commandIds?: Buffer[] | undefined;
        sigHash?: Buffer | undefined;
        prevBatchedCommandsId?: Buffer | undefined;
    } & {
        data?: Buffer | undefined;
        status?: BatchedCommandsStatus | undefined;
        signature?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I_1["signature"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
        id?: Buffer | undefined;
        keyId?: string | undefined;
        commandIds?: (Buffer[] & Buffer[] & { [K_4 in Exclude<keyof I_1["commandIds"], "$type" | keyof Buffer[]>]: never; }) | undefined;
        sigHash?: Buffer | undefined;
        prevBatchedCommandsId?: Buffer | undefined;
    } & { [K_5 in Exclude<keyof I_1, "$type" | "data" | "status" | "signature" | "id" | "keyId" | "commandIds" | "sigHash" | "prevBatchedCommandsId">]: never; }>(object: I_1): CommandBatchMetadata;
};
export declare const SigMetadata: {
    $type: "axelar.evm.v1beta1.SigMetadata";
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
    } & { [K in Exclude<keyof I, "$type" | "type" | "chain" | "commandBatchId">]: never; }>(base?: I | undefined): SigMetadata;
    fromPartial<I_1 extends {
        type?: SigType | undefined;
        chain?: string | undefined;
        commandBatchId?: Buffer | undefined;
    } & {
        type?: SigType | undefined;
        chain?: string | undefined;
        commandBatchId?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "type" | "chain" | "commandBatchId">]: never; }>(object: I_1): SigMetadata;
};
export declare const TransferKey: {
    $type: "axelar.evm.v1beta1.TransferKey";
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
    } & { [K in Exclude<keyof I, "$type" | "txId" | "nextKeyId">]: never; }>(base?: I | undefined): TransferKey;
    fromPartial<I_1 extends {
        txId?: Buffer | undefined;
        nextKeyId?: string | undefined;
    } & {
        txId?: Buffer | undefined;
        nextKeyId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "txId" | "nextKeyId">]: never; }>(object: I_1): TransferKey;
};
export declare const Asset: {
    $type: "axelar.evm.v1beta1.Asset";
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
    } & { [K in Exclude<keyof I, "$type" | "chain" | "name">]: never; }>(base?: I | undefined): Asset;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        name?: string | undefined;
    } & {
        chain?: string | undefined;
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain" | "name">]: never; }>(object: I_1): Asset;
};
export declare const TokenDetails: {
    $type: "axelar.evm.v1beta1.TokenDetails";
    encode(message: TokenDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TokenDetails;
    fromJSON(object: any): TokenDetails;
    toJSON(message: TokenDetails): unknown;
    create<I extends {
        symbol?: string | undefined;
        tokenName?: string | undefined;
        decimals?: number | undefined;
        capacity?: Buffer | undefined;
    } & {
        symbol?: string | undefined;
        tokenName?: string | undefined;
        decimals?: number | undefined;
        capacity?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }>(base?: I | undefined): TokenDetails;
    fromPartial<I_1 extends {
        symbol?: string | undefined;
        tokenName?: string | undefined;
        decimals?: number | undefined;
        capacity?: Buffer | undefined;
    } & {
        symbol?: string | undefined;
        tokenName?: string | undefined;
        decimals?: number | undefined;
        capacity?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }>(object: I_1): TokenDetails;
};
export declare const Gateway: {
    $type: "axelar.evm.v1beta1.Gateway";
    encode(message: Gateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Gateway;
    fromJSON(object: any): Gateway;
    toJSON(message: Gateway): unknown;
    create<I extends {
        address?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
    } & { [K in Exclude<keyof I, "$type" | "address">]: never; }>(base?: I | undefined): Gateway;
    fromPartial<I_1 extends {
        address?: Buffer | undefined;
    } & {
        address?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "address">]: never; }>(object: I_1): Gateway;
};
export declare const PollMetadata: {
    $type: "axelar.evm.v1beta1.PollMetadata";
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
    } & { [K in Exclude<keyof I, "$type" | "chain" | "txId">]: never; }>(base?: I | undefined): PollMetadata;
    fromPartial<I_1 extends {
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & {
        chain?: string | undefined;
        txId?: Buffer | undefined;
    } & { [K_1 in Exclude<keyof I_1, "$type" | "chain" | "txId">]: never; }>(object: I_1): PollMetadata;
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
