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
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteEvents;
    fromJSON(object: any): VoteEvents;
    toJSON(message: VoteEvents): unknown;
    create<I extends Exact<DeepPartial<VoteEvents>, I>>(base?: I): VoteEvents;
    fromPartial<I extends Exact<DeepPartial<VoteEvents>, I>>(object: I): VoteEvents;
};
export declare const Event: {
    $type: "axelar.evm.v1beta1.Event";
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event;
    fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event;
};
export declare const EventTokenSent: {
    $type: "axelar.evm.v1beta1.EventTokenSent";
    encode(message: EventTokenSent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenSent;
    fromJSON(object: any): EventTokenSent;
    toJSON(message: EventTokenSent): unknown;
    create<I extends Exact<DeepPartial<EventTokenSent>, I>>(base?: I): EventTokenSent;
    fromPartial<I extends Exact<DeepPartial<EventTokenSent>, I>>(object: I): EventTokenSent;
};
export declare const EventContractCall: {
    $type: "axelar.evm.v1beta1.EventContractCall";
    encode(message: EventContractCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventContractCall;
    fromJSON(object: any): EventContractCall;
    toJSON(message: EventContractCall): unknown;
    create<I extends Exact<DeepPartial<EventContractCall>, I>>(base?: I): EventContractCall;
    fromPartial<I extends Exact<DeepPartial<EventContractCall>, I>>(object: I): EventContractCall;
};
export declare const EventContractCallWithToken: {
    $type: "axelar.evm.v1beta1.EventContractCallWithToken";
    encode(message: EventContractCallWithToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventContractCallWithToken;
    fromJSON(object: any): EventContractCallWithToken;
    toJSON(message: EventContractCallWithToken): unknown;
    create<I extends Exact<DeepPartial<EventContractCallWithToken>, I>>(base?: I): EventContractCallWithToken;
    fromPartial<I extends Exact<DeepPartial<EventContractCallWithToken>, I>>(object: I): EventContractCallWithToken;
};
export declare const EventTransfer: {
    $type: "axelar.evm.v1beta1.EventTransfer";
    encode(message: EventTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer;
    fromJSON(object: any): EventTransfer;
    toJSON(message: EventTransfer): unknown;
    create<I extends Exact<DeepPartial<EventTransfer>, I>>(base?: I): EventTransfer;
    fromPartial<I extends Exact<DeepPartial<EventTransfer>, I>>(object: I): EventTransfer;
};
export declare const EventTokenDeployed: {
    $type: "axelar.evm.v1beta1.EventTokenDeployed";
    encode(message: EventTokenDeployed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTokenDeployed;
    fromJSON(object: any): EventTokenDeployed;
    toJSON(message: EventTokenDeployed): unknown;
    create<I extends Exact<DeepPartial<EventTokenDeployed>, I>>(base?: I): EventTokenDeployed;
    fromPartial<I extends Exact<DeepPartial<EventTokenDeployed>, I>>(object: I): EventTokenDeployed;
};
export declare const EventMultisigOwnershipTransferred: {
    $type: "axelar.evm.v1beta1.EventMultisigOwnershipTransferred";
    encode(message: EventMultisigOwnershipTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMultisigOwnershipTransferred;
    fromJSON(object: any): EventMultisigOwnershipTransferred;
    toJSON(message: EventMultisigOwnershipTransferred): unknown;
    create<I extends Exact<DeepPartial<EventMultisigOwnershipTransferred>, I>>(base?: I): EventMultisigOwnershipTransferred;
    fromPartial<I extends Exact<DeepPartial<EventMultisigOwnershipTransferred>, I>>(object: I): EventMultisigOwnershipTransferred;
};
export declare const EventMultisigOperatorshipTransferred: {
    $type: "axelar.evm.v1beta1.EventMultisigOperatorshipTransferred";
    encode(message: EventMultisigOperatorshipTransferred, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMultisigOperatorshipTransferred;
    fromJSON(object: any): EventMultisigOperatorshipTransferred;
    toJSON(message: EventMultisigOperatorshipTransferred): unknown;
    create<I extends Exact<DeepPartial<EventMultisigOperatorshipTransferred>, I>>(base?: I): EventMultisigOperatorshipTransferred;
    fromPartial<I extends Exact<DeepPartial<EventMultisigOperatorshipTransferred>, I>>(object: I): EventMultisigOperatorshipTransferred;
};
export declare const NetworkInfo: {
    $type: "axelar.evm.v1beta1.NetworkInfo";
    encode(message: NetworkInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInfo;
    fromJSON(object: any): NetworkInfo;
    toJSON(message: NetworkInfo): unknown;
    create<I extends Exact<DeepPartial<NetworkInfo>, I>>(base?: I): NetworkInfo;
    fromPartial<I extends Exact<DeepPartial<NetworkInfo>, I>>(object: I): NetworkInfo;
};
export declare const BurnerInfo: {
    $type: "axelar.evm.v1beta1.BurnerInfo";
    encode(message: BurnerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurnerInfo;
    fromJSON(object: any): BurnerInfo;
    toJSON(message: BurnerInfo): unknown;
    create<I extends Exact<DeepPartial<BurnerInfo>, I>>(base?: I): BurnerInfo;
    fromPartial<I extends Exact<DeepPartial<BurnerInfo>, I>>(object: I): BurnerInfo;
};
export declare const ERC20Deposit: {
    $type: "axelar.evm.v1beta1.ERC20Deposit";
    encode(message: ERC20Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Deposit;
    fromJSON(object: any): ERC20Deposit;
    toJSON(message: ERC20Deposit): unknown;
    create<I extends Exact<DeepPartial<ERC20Deposit>, I>>(base?: I): ERC20Deposit;
    fromPartial<I extends Exact<DeepPartial<ERC20Deposit>, I>>(object: I): ERC20Deposit;
};
export declare const ERC20TokenMetadata: {
    $type: "axelar.evm.v1beta1.ERC20TokenMetadata";
    encode(message: ERC20TokenMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokenMetadata;
    fromJSON(object: any): ERC20TokenMetadata;
    toJSON(message: ERC20TokenMetadata): unknown;
    create<I extends Exact<DeepPartial<ERC20TokenMetadata>, I>>(base?: I): ERC20TokenMetadata;
    fromPartial<I extends Exact<DeepPartial<ERC20TokenMetadata>, I>>(object: I): ERC20TokenMetadata;
};
export declare const TransactionMetadata: {
    $type: "axelar.evm.v1beta1.TransactionMetadata";
    encode(message: TransactionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionMetadata;
    fromJSON(object: any): TransactionMetadata;
    toJSON(message: TransactionMetadata): unknown;
    create<I extends Exact<DeepPartial<TransactionMetadata>, I>>(base?: I): TransactionMetadata;
    fromPartial<I extends Exact<DeepPartial<TransactionMetadata>, I>>(object: I): TransactionMetadata;
};
export declare const Command: {
    $type: "axelar.evm.v1beta1.Command";
    encode(message: Command, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Command;
    fromJSON(object: any): Command;
    toJSON(message: Command): unknown;
    create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command;
    fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command;
};
export declare const CommandBatchMetadata: {
    $type: "axelar.evm.v1beta1.CommandBatchMetadata";
    encode(message: CommandBatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommandBatchMetadata;
    fromJSON(object: any): CommandBatchMetadata;
    toJSON(message: CommandBatchMetadata): unknown;
    create<I extends Exact<DeepPartial<CommandBatchMetadata>, I>>(base?: I): CommandBatchMetadata;
    fromPartial<I extends Exact<DeepPartial<CommandBatchMetadata>, I>>(object: I): CommandBatchMetadata;
};
export declare const SigMetadata: {
    $type: "axelar.evm.v1beta1.SigMetadata";
    encode(message: SigMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigMetadata;
    fromJSON(object: any): SigMetadata;
    toJSON(message: SigMetadata): unknown;
    create<I extends Exact<DeepPartial<SigMetadata>, I>>(base?: I): SigMetadata;
    fromPartial<I extends Exact<DeepPartial<SigMetadata>, I>>(object: I): SigMetadata;
};
export declare const TransferKey: {
    $type: "axelar.evm.v1beta1.TransferKey";
    encode(message: TransferKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferKey;
    fromJSON(object: any): TransferKey;
    toJSON(message: TransferKey): unknown;
    create<I extends Exact<DeepPartial<TransferKey>, I>>(base?: I): TransferKey;
    fromPartial<I extends Exact<DeepPartial<TransferKey>, I>>(object: I): TransferKey;
};
export declare const Asset: {
    $type: "axelar.evm.v1beta1.Asset";
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    create<I extends Exact<DeepPartial<Asset>, I>>(base?: I): Asset;
    fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset;
};
export declare const TokenDetails: {
    $type: "axelar.evm.v1beta1.TokenDetails";
    encode(message: TokenDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenDetails;
    fromJSON(object: any): TokenDetails;
    toJSON(message: TokenDetails): unknown;
    create<I extends Exact<DeepPartial<TokenDetails>, I>>(base?: I): TokenDetails;
    fromPartial<I extends Exact<DeepPartial<TokenDetails>, I>>(object: I): TokenDetails;
};
export declare const Gateway: {
    $type: "axelar.evm.v1beta1.Gateway";
    encode(message: Gateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Gateway;
    fromJSON(object: any): Gateway;
    toJSON(message: Gateway): unknown;
    create<I extends Exact<DeepPartial<Gateway>, I>>(base?: I): Gateway;
    fromPartial<I extends Exact<DeepPartial<Gateway>, I>>(object: I): Gateway;
};
export declare const PollMetadata: {
    $type: "axelar.evm.v1beta1.PollMetadata";
    encode(message: PollMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollMetadata;
    fromJSON(object: any): PollMetadata;
    toJSON(message: PollMetadata): unknown;
    create<I extends Exact<DeepPartial<PollMetadata>, I>>(base?: I): PollMetadata;
    fromPartial<I extends Exact<DeepPartial<PollMetadata>, I>>(object: I): PollMetadata;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
