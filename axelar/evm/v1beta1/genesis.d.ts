import Long from "long";
import _m0 from "protobufjs/minimal";
import { QueueState } from "../../utils/v1beta1/queuer";
import { Params } from "./params";
import { BurnerInfo, CommandBatchMetadata, ERC20Deposit, ERC20TokenMetadata, Event, Gateway } from "./types";
export declare const protobufPackage = "axelar.evm.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    $type: "axelar.evm.v1beta1.GenesisState";
    chains: GenesisState_Chain[];
}
export interface GenesisState_Chain {
    $type: "axelar.evm.v1beta1.GenesisState.Chain";
    params?: Params | undefined;
    burnerInfos: BurnerInfo[];
    commandQueue?: QueueState | undefined;
    confirmedDeposits: ERC20Deposit[];
    burnedDeposits: ERC20Deposit[];
    commandBatches: CommandBatchMetadata[];
    gateway?: Gateway | undefined;
    tokens: ERC20TokenMetadata[];
    events: Event[];
    confirmedEventQueue?: QueueState | undefined;
    legacyConfirmedDeposits: ERC20Deposit[];
    legacyBurnedDeposits: ERC20Deposit[];
}
export declare const GenesisState: {
    $type: "axelar.evm.v1beta1.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        chains?: {
            events?: {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: {
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        chains?: ({
            events?: {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: {
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[] & ({
            events?: {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: {
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        } & {
            events?: ({
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
                status?: import("./types").Event_Status | undefined;
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
                } & { [K in Exclude<keyof I["chains"][number]["events"][number]["index"], "$type" | keyof Long.Long>]: never; }) | undefined;
                status?: import("./types").Event_Status | undefined;
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
                } & { [K_1 in Exclude<keyof I["chains"][number]["events"][number]["tokenSent"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }) | undefined;
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
                } & { [K_2 in Exclude<keyof I["chains"][number]["events"][number]["contractCall"], "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
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
                } & { [K_3 in Exclude<keyof I["chains"][number]["events"][number]["contractCallWithToken"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
                transfer?: ({
                    amount?: Buffer | undefined;
                    to?: Buffer | undefined;
                } & {
                    amount?: Buffer | undefined;
                    to?: Buffer | undefined;
                } & { [K_4 in Exclude<keyof I["chains"][number]["events"][number]["transfer"], "$type" | "amount" | "to">]: never; }) | undefined;
                tokenDeployed?: ({
                    symbol?: string | undefined;
                    tokenAddress?: Buffer | undefined;
                } & {
                    symbol?: string | undefined;
                    tokenAddress?: Buffer | undefined;
                } & { [K_5 in Exclude<keyof I["chains"][number]["events"][number]["tokenDeployed"], "symbol" | "$type" | "tokenAddress">]: never; }) | undefined;
                multisigOwnershipTransferred?: ({
                    preOwners?: Buffer[] | undefined;
                    prevThreshold?: Buffer | undefined;
                    newOwners?: Buffer[] | undefined;
                    newThreshold?: Buffer | undefined;
                } & {
                    preOwners?: (Buffer[] & Buffer[] & { [K_6 in Exclude<keyof I["chains"][number]["events"][number]["multisigOwnershipTransferred"]["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                    prevThreshold?: Buffer | undefined;
                    newOwners?: (Buffer[] & Buffer[] & { [K_7 in Exclude<keyof I["chains"][number]["events"][number]["multisigOwnershipTransferred"]["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                    newThreshold?: Buffer | undefined;
                } & { [K_8 in Exclude<keyof I["chains"][number]["events"][number]["multisigOwnershipTransferred"], "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }) | undefined;
                multisigOperatorshipTransferred?: ({
                    newThreshold?: Buffer | undefined;
                    newOperators?: Buffer[] | undefined;
                    newWeights?: Buffer[] | undefined;
                } & {
                    newThreshold?: Buffer | undefined;
                    newOperators?: (Buffer[] & Buffer[] & { [K_9 in Exclude<keyof I["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                    newWeights?: (Buffer[] & Buffer[] & { [K_10 in Exclude<keyof I["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["chains"][number]["events"][number]["multisigOperatorshipTransferred"], "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["chains"][number]["events"][number], "$type" | "index" | "status" | "chain" | "txId" | "tokenSent" | "contractCall" | "contractCallWithToken" | "transfer" | "tokenDeployed" | "multisigOwnershipTransferred" | "multisigOperatorshipTransferred">]: never; })[] & { [K_13 in Exclude<keyof I["chains"][number]["events"], "$type" | keyof {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: ({
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } & {
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
                } & { [K_14 in Exclude<keyof I["chains"][number]["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_15 in Exclude<keyof I["chains"][number]["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
                chain?: string | undefined;
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
                } & { [K_16 in Exclude<keyof I["chains"][number]["params"]["confirmationHeight"], "$type" | keyof Long.Long>]: never; }) | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | (Long.Long & {
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
                } & { [K_17 in Exclude<keyof I["chains"][number]["params"]["revoteLockingPeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
                networks?: ({
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] & ({
                    id?: Buffer | undefined;
                    name?: string | undefined;
                } & {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                } & { [K_18 in Exclude<keyof I["chains"][number]["params"]["networks"][number], "$type" | "id" | "name">]: never; })[] & { [K_19 in Exclude<keyof I["chains"][number]["params"]["networks"], "$type" | keyof {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[]>]: never; }) | undefined;
                votingThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
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
                    } & { [K_20 in Exclude<keyof I["chains"][number]["params"]["votingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
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
                    } & { [K_21 in Exclude<keyof I["chains"][number]["params"]["votingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I["chains"][number]["params"]["votingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                minVoterCount?: string | number | (Long.Long & {
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
                } & { [K_23 in Exclude<keyof I["chains"][number]["params"]["minVoterCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | (Long.Long & {
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
                } & { [K_24 in Exclude<keyof I["chains"][number]["params"]["votingGracePeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I["chains"][number]["params"], "$type" | "transferLimit" | "endBlockerLimit" | "chain" | "confirmationHeight" | "network" | "tokenCode" | "burnable" | "revoteLockingPeriod" | "networks" | "votingThreshold" | "minVoterCount" | "commandsGasLimit" | "votingGracePeriod">]: never; }) | undefined;
            burnerInfos?: ({
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] & ({
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
            } & { [K_26 in Exclude<keyof I["chains"][number]["burnerInfos"][number], "symbol" | "$type" | "asset" | "destinationChain" | "tokenAddress" | "burnerAddress" | "salt">]: never; })[] & { [K_27 in Exclude<keyof I["chains"][number]["burnerInfos"], "$type" | keyof {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[]>]: never; }) | undefined;
            commandQueue?: ({
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & { [K_28 in Exclude<keyof I["chains"][number]["commandQueue"]["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
                    [x: number]: ({
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & { [K_29 in Exclude<keyof I["chains"][number]["commandQueue"]["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
                } & { [K_30 in Exclude<keyof I["chains"][number]["commandQueue"]["items"], string | number>]: never; }) | undefined;
            } & { [K_31 in Exclude<keyof I["chains"][number]["commandQueue"], "$type" | "items">]: never; }) | undefined;
            confirmedDeposits?: ({
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_32 in Exclude<keyof I["chains"][number]["confirmedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_33 in Exclude<keyof I["chains"][number]["confirmedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_34 in Exclude<keyof I["chains"][number]["confirmedDeposits"], "$type" | keyof {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            burnedDeposits?: ({
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_35 in Exclude<keyof I["chains"][number]["burnedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_36 in Exclude<keyof I["chains"][number]["burnedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_37 in Exclude<keyof I["chains"][number]["burnedDeposits"], "$type" | keyof {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            commandBatches?: ({
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] & ({
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
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
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_38 in Exclude<keyof I["chains"][number]["commandBatches"][number]["signature"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: (Buffer[] & Buffer[] & { [K_39 in Exclude<keyof I["chains"][number]["commandBatches"][number]["commandIds"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            } & { [K_40 in Exclude<keyof I["chains"][number]["commandBatches"][number], "$type" | "data" | "status" | "signature" | "id" | "keyId" | "commandIds" | "sigHash" | "prevBatchedCommandsId">]: never; })[] & { [K_41 in Exclude<keyof I["chains"][number]["commandBatches"], "$type" | keyof {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[]>]: never; }) | undefined;
            gateway?: ({
                address?: Buffer | undefined;
            } & {
                address?: Buffer | undefined;
            } & { [K_42 in Exclude<keyof I["chains"][number]["gateway"], "$type" | "address">]: never; }) | undefined;
            tokens?: ({
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] & ({
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
                status?: import("./types").Status | undefined;
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
                } & { [K_43 in Exclude<keyof I["chains"][number]["tokens"][number]["details"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
                txHash?: string | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            } & { [K_44 in Exclude<keyof I["chains"][number]["tokens"][number], "$type" | "chainId" | "status" | "asset" | "tokenAddress" | "details" | "txHash" | "isExternal" | "burnerCode">]: never; })[] & { [K_45 in Exclude<keyof I["chains"][number]["tokens"], "$type" | keyof {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[]>]: never; }) | undefined;
            confirmedEventQueue?: ({
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & { [K_46 in Exclude<keyof I["chains"][number]["confirmedEventQueue"]["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
                    [x: number]: ({
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & { [K_47 in Exclude<keyof I["chains"][number]["confirmedEventQueue"]["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
                } & { [K_48 in Exclude<keyof I["chains"][number]["confirmedEventQueue"]["items"], string | number>]: never; }) | undefined;
            } & { [K_49 in Exclude<keyof I["chains"][number]["confirmedEventQueue"], "$type" | "items">]: never; }) | undefined;
            legacyConfirmedDeposits?: ({
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_50 in Exclude<keyof I["chains"][number]["legacyConfirmedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_51 in Exclude<keyof I["chains"][number]["legacyConfirmedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_52 in Exclude<keyof I["chains"][number]["legacyConfirmedDeposits"], "$type" | keyof {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            legacyBurnedDeposits?: ({
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_53 in Exclude<keyof I["chains"][number]["legacyBurnedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_54 in Exclude<keyof I["chains"][number]["legacyBurnedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_55 in Exclude<keyof I["chains"][number]["legacyBurnedDeposits"], "$type" | keyof {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_56 in Exclude<keyof I["chains"][number], "$type" | "events" | "params" | "burnerInfos" | "commandQueue" | "confirmedDeposits" | "burnedDeposits" | "commandBatches" | "gateway" | "tokens" | "confirmedEventQueue" | "legacyConfirmedDeposits" | "legacyBurnedDeposits">]: never; })[] & { [K_57 in Exclude<keyof I["chains"], "$type" | keyof {
            events?: {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: {
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_58 in Exclude<keyof I, "$type" | "chains">]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        chains?: {
            events?: {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: {
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        chains?: ({
            events?: {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: {
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[] & ({
            events?: {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: {
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        } & {
            events?: ({
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
                status?: import("./types").Event_Status | undefined;
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
                } & { [K_59 in Exclude<keyof I_1["chains"][number]["events"][number]["index"], "$type" | keyof Long.Long>]: never; }) | undefined;
                status?: import("./types").Event_Status | undefined;
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
                } & { [K_60 in Exclude<keyof I_1["chains"][number]["events"][number]["tokenSent"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }) | undefined;
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
                } & { [K_61 in Exclude<keyof I_1["chains"][number]["events"][number]["contractCall"], "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
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
                } & { [K_62 in Exclude<keyof I_1["chains"][number]["events"][number]["contractCallWithToken"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
                transfer?: ({
                    amount?: Buffer | undefined;
                    to?: Buffer | undefined;
                } & {
                    amount?: Buffer | undefined;
                    to?: Buffer | undefined;
                } & { [K_63 in Exclude<keyof I_1["chains"][number]["events"][number]["transfer"], "$type" | "amount" | "to">]: never; }) | undefined;
                tokenDeployed?: ({
                    symbol?: string | undefined;
                    tokenAddress?: Buffer | undefined;
                } & {
                    symbol?: string | undefined;
                    tokenAddress?: Buffer | undefined;
                } & { [K_64 in Exclude<keyof I_1["chains"][number]["events"][number]["tokenDeployed"], "symbol" | "$type" | "tokenAddress">]: never; }) | undefined;
                multisigOwnershipTransferred?: ({
                    preOwners?: Buffer[] | undefined;
                    prevThreshold?: Buffer | undefined;
                    newOwners?: Buffer[] | undefined;
                    newThreshold?: Buffer | undefined;
                } & {
                    preOwners?: (Buffer[] & Buffer[] & { [K_65 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOwnershipTransferred"]["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                    prevThreshold?: Buffer | undefined;
                    newOwners?: (Buffer[] & Buffer[] & { [K_66 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOwnershipTransferred"]["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                    newThreshold?: Buffer | undefined;
                } & { [K_67 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOwnershipTransferred"], "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }) | undefined;
                multisigOperatorshipTransferred?: ({
                    newThreshold?: Buffer | undefined;
                    newOperators?: Buffer[] | undefined;
                    newWeights?: Buffer[] | undefined;
                } & {
                    newThreshold?: Buffer | undefined;
                    newOperators?: (Buffer[] & Buffer[] & { [K_68 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                    newWeights?: (Buffer[] & Buffer[] & { [K_69 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                } & { [K_70 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOperatorshipTransferred"], "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }) | undefined;
            } & { [K_71 in Exclude<keyof I_1["chains"][number]["events"][number], "$type" | "index" | "status" | "chain" | "txId" | "tokenSent" | "contractCall" | "contractCallWithToken" | "transfer" | "tokenDeployed" | "multisigOwnershipTransferred" | "multisigOperatorshipTransferred">]: never; })[] & { [K_72 in Exclude<keyof I_1["chains"][number]["events"], "$type" | keyof {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: ({
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } & {
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
                } & { [K_73 in Exclude<keyof I_1["chains"][number]["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_74 in Exclude<keyof I_1["chains"][number]["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
                chain?: string | undefined;
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
                } & { [K_75 in Exclude<keyof I_1["chains"][number]["params"]["confirmationHeight"], "$type" | keyof Long.Long>]: never; }) | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | (Long.Long & {
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
                } & { [K_76 in Exclude<keyof I_1["chains"][number]["params"]["revoteLockingPeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
                networks?: ({
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] & ({
                    id?: Buffer | undefined;
                    name?: string | undefined;
                } & {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                } & { [K_77 in Exclude<keyof I_1["chains"][number]["params"]["networks"][number], "$type" | "id" | "name">]: never; })[] & { [K_78 in Exclude<keyof I_1["chains"][number]["params"]["networks"], "$type" | keyof {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[]>]: never; }) | undefined;
                votingThreshold?: ({
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } & {
                    numerator?: string | number | (Long.Long & {
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
                    } & { [K_79 in Exclude<keyof I_1["chains"][number]["params"]["votingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                    denominator?: string | number | (Long.Long & {
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
                    } & { [K_80 in Exclude<keyof I_1["chains"][number]["params"]["votingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                } & { [K_81 in Exclude<keyof I_1["chains"][number]["params"]["votingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
                minVoterCount?: string | number | (Long.Long & {
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
                } & { [K_82 in Exclude<keyof I_1["chains"][number]["params"]["minVoterCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | (Long.Long & {
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
                } & { [K_83 in Exclude<keyof I_1["chains"][number]["params"]["votingGracePeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_84 in Exclude<keyof I_1["chains"][number]["params"], "$type" | "transferLimit" | "endBlockerLimit" | "chain" | "confirmationHeight" | "network" | "tokenCode" | "burnable" | "revoteLockingPeriod" | "networks" | "votingThreshold" | "minVoterCount" | "commandsGasLimit" | "votingGracePeriod">]: never; }) | undefined;
            burnerInfos?: ({
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] & ({
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
            } & { [K_85 in Exclude<keyof I_1["chains"][number]["burnerInfos"][number], "symbol" | "$type" | "asset" | "destinationChain" | "tokenAddress" | "burnerAddress" | "salt">]: never; })[] & { [K_86 in Exclude<keyof I_1["chains"][number]["burnerInfos"], "$type" | keyof {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[]>]: never; }) | undefined;
            commandQueue?: ({
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & { [K_87 in Exclude<keyof I_1["chains"][number]["commandQueue"]["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
                    [x: number]: ({
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & { [K_88 in Exclude<keyof I_1["chains"][number]["commandQueue"]["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
                } & { [K_89 in Exclude<keyof I_1["chains"][number]["commandQueue"]["items"], string | number>]: never; }) | undefined;
            } & { [K_90 in Exclude<keyof I_1["chains"][number]["commandQueue"], "$type" | "items">]: never; }) | undefined;
            confirmedDeposits?: ({
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_91 in Exclude<keyof I_1["chains"][number]["confirmedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_92 in Exclude<keyof I_1["chains"][number]["confirmedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_93 in Exclude<keyof I_1["chains"][number]["confirmedDeposits"], "$type" | keyof {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            burnedDeposits?: ({
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_94 in Exclude<keyof I_1["chains"][number]["burnedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_95 in Exclude<keyof I_1["chains"][number]["burnedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_96 in Exclude<keyof I_1["chains"][number]["burnedDeposits"], "$type" | keyof {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            commandBatches?: ({
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] & ({
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
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
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_97 in Exclude<keyof I_1["chains"][number]["commandBatches"][number]["signature"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: (Buffer[] & Buffer[] & { [K_98 in Exclude<keyof I_1["chains"][number]["commandBatches"][number]["commandIds"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            } & { [K_99 in Exclude<keyof I_1["chains"][number]["commandBatches"][number], "$type" | "data" | "status" | "signature" | "id" | "keyId" | "commandIds" | "sigHash" | "prevBatchedCommandsId">]: never; })[] & { [K_100 in Exclude<keyof I_1["chains"][number]["commandBatches"], "$type" | keyof {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[]>]: never; }) | undefined;
            gateway?: ({
                address?: Buffer | undefined;
            } & {
                address?: Buffer | undefined;
            } & { [K_101 in Exclude<keyof I_1["chains"][number]["gateway"], "$type" | "address">]: never; }) | undefined;
            tokens?: ({
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] & ({
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
                status?: import("./types").Status | undefined;
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
                } & { [K_102 in Exclude<keyof I_1["chains"][number]["tokens"][number]["details"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
                txHash?: string | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            } & { [K_103 in Exclude<keyof I_1["chains"][number]["tokens"][number], "$type" | "chainId" | "status" | "asset" | "tokenAddress" | "details" | "txHash" | "isExternal" | "burnerCode">]: never; })[] & { [K_104 in Exclude<keyof I_1["chains"][number]["tokens"], "$type" | keyof {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[]>]: never; }) | undefined;
            confirmedEventQueue?: ({
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & { [K_105 in Exclude<keyof I_1["chains"][number]["confirmedEventQueue"]["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
                    [x: number]: ({
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } & { [K_106 in Exclude<keyof I_1["chains"][number]["confirmedEventQueue"]["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
                } & { [K_107 in Exclude<keyof I_1["chains"][number]["confirmedEventQueue"]["items"], string | number>]: never; }) | undefined;
            } & { [K_108 in Exclude<keyof I_1["chains"][number]["confirmedEventQueue"], "$type" | "items">]: never; }) | undefined;
            legacyConfirmedDeposits?: ({
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_109 in Exclude<keyof I_1["chains"][number]["legacyConfirmedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_110 in Exclude<keyof I_1["chains"][number]["legacyConfirmedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_111 in Exclude<keyof I_1["chains"][number]["legacyConfirmedDeposits"], "$type" | keyof {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            legacyBurnedDeposits?: ({
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_112 in Exclude<keyof I_1["chains"][number]["legacyBurnedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_113 in Exclude<keyof I_1["chains"][number]["legacyBurnedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_114 in Exclude<keyof I_1["chains"][number]["legacyBurnedDeposits"], "$type" | keyof {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_115 in Exclude<keyof I_1["chains"][number], "$type" | "events" | "params" | "burnerInfos" | "commandQueue" | "confirmedDeposits" | "burnedDeposits" | "commandBatches" | "gateway" | "tokens" | "confirmedEventQueue" | "legacyConfirmedDeposits" | "legacyBurnedDeposits">]: never; })[] & { [K_116 in Exclude<keyof I_1["chains"], "$type" | keyof {
            events?: {
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            params?: {
                transferLimit?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    id?: Buffer | undefined;
                    name?: string | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                symbol?: string | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                tokenAddress?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                data?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
                id?: Buffer | undefined;
                keyId?: string | undefined;
                commandIds?: Buffer[] | undefined;
                sigHash?: Buffer | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
                chainId?: Buffer | undefined;
                status?: import("./types").Status | undefined;
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
            }[] | undefined;
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                    [x: number]: {
                        value?: Buffer | undefined;
                        key?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                txId?: Buffer | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_117 in Exclude<keyof I_1, "$type" | "chains">]: never; }>(object: I_1): GenesisState;
};
export declare const GenesisState_Chain: {
    $type: "axelar.evm.v1beta1.GenesisState.Chain";
    encode(message: GenesisState_Chain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState_Chain;
    fromJSON(object: any): GenesisState_Chain;
    toJSON(message: GenesisState_Chain): unknown;
    create<I extends {
        events?: {
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
        params?: {
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
        } | undefined;
        burnerInfos?: {
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        }[] | undefined;
        commandQueue?: {
            items?: {
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        confirmedDeposits?: {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        burnedDeposits?: {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        commandBatches?: {
            data?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            id?: Buffer | undefined;
            keyId?: string | undefined;
            commandIds?: Buffer[] | undefined;
            sigHash?: Buffer | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
        }[] | undefined;
        gateway?: {
            address?: Buffer | undefined;
        } | undefined;
        tokens?: {
            chainId?: Buffer | undefined;
            status?: import("./types").Status | undefined;
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
        }[] | undefined;
        confirmedEventQueue?: {
            items?: {
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        legacyConfirmedDeposits?: {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        legacyBurnedDeposits?: {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
    } & {
        events?: ({
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
            status?: import("./types").Event_Status | undefined;
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
            status?: import("./types").Event_Status | undefined;
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
            status?: import("./types").Event_Status | undefined;
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
        params?: ({
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
        } & {
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
            } & { [K_14 in Exclude<keyof I["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_15 in Exclude<keyof I["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            chain?: string | undefined;
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
            } & { [K_16 in Exclude<keyof I["params"]["confirmationHeight"], "$type" | keyof Long.Long>]: never; }) | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | (Long.Long & {
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
            } & { [K_17 in Exclude<keyof I["params"]["revoteLockingPeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
            networks?: ({
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] & ({
                id?: Buffer | undefined;
                name?: string | undefined;
            } & {
                id?: Buffer | undefined;
                name?: string | undefined;
            } & { [K_18 in Exclude<keyof I["params"]["networks"][number], "$type" | "id" | "name">]: never; })[] & { [K_19 in Exclude<keyof I["params"]["networks"], "$type" | keyof {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[]>]: never; }) | undefined;
            votingThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
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
                } & { [K_20 in Exclude<keyof I["params"]["votingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                denominator?: string | number | (Long.Long & {
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
                } & { [K_21 in Exclude<keyof I["params"]["votingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["params"]["votingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            minVoterCount?: string | number | (Long.Long & {
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
            } & { [K_23 in Exclude<keyof I["params"]["minVoterCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | (Long.Long & {
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
            } & { [K_24 in Exclude<keyof I["params"]["votingGracePeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_25 in Exclude<keyof I["params"], "$type" | "transferLimit" | "endBlockerLimit" | "chain" | "confirmationHeight" | "network" | "tokenCode" | "burnable" | "revoteLockingPeriod" | "networks" | "votingThreshold" | "minVoterCount" | "commandsGasLimit" | "votingGracePeriod">]: never; }) | undefined;
        burnerInfos?: ({
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        }[] & ({
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
        } & { [K_26 in Exclude<keyof I["burnerInfos"][number], "symbol" | "$type" | "asset" | "destinationChain" | "tokenAddress" | "burnerAddress" | "salt">]: never; })[] & { [K_27 in Exclude<keyof I["burnerInfos"], "$type" | keyof {
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        commandQueue?: ({
            items?: {
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & { [K_28 in Exclude<keyof I["commandQueue"]["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
                [x: number]: ({
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & { [K_29 in Exclude<keyof I["commandQueue"]["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
            } & { [K_30 in Exclude<keyof I["commandQueue"]["items"], string | number>]: never; }) | undefined;
        } & { [K_31 in Exclude<keyof I["commandQueue"], "$type" | "items">]: never; }) | undefined;
        confirmedDeposits?: ({
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_32 in Exclude<keyof I["confirmedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_33 in Exclude<keyof I["confirmedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_34 in Exclude<keyof I["confirmedDeposits"], "$type" | keyof {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        burnedDeposits?: ({
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_35 in Exclude<keyof I["burnedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I["burnedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_37 in Exclude<keyof I["burnedDeposits"], "$type" | keyof {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        commandBatches?: ({
            data?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            id?: Buffer | undefined;
            keyId?: string | undefined;
            commandIds?: Buffer[] | undefined;
            sigHash?: Buffer | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
        }[] & ({
            data?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
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
            status?: import("./types").BatchedCommandsStatus | undefined;
            signature?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_38 in Exclude<keyof I["commandBatches"][number]["signature"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
            id?: Buffer | undefined;
            keyId?: string | undefined;
            commandIds?: (Buffer[] & Buffer[] & { [K_39 in Exclude<keyof I["commandBatches"][number]["commandIds"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            sigHash?: Buffer | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
        } & { [K_40 in Exclude<keyof I["commandBatches"][number], "$type" | "data" | "status" | "signature" | "id" | "keyId" | "commandIds" | "sigHash" | "prevBatchedCommandsId">]: never; })[] & { [K_41 in Exclude<keyof I["commandBatches"], "$type" | keyof {
            data?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            id?: Buffer | undefined;
            keyId?: string | undefined;
            commandIds?: Buffer[] | undefined;
            sigHash?: Buffer | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        gateway?: ({
            address?: Buffer | undefined;
        } & {
            address?: Buffer | undefined;
        } & { [K_42 in Exclude<keyof I["gateway"], "$type" | "address">]: never; }) | undefined;
        tokens?: ({
            chainId?: Buffer | undefined;
            status?: import("./types").Status | undefined;
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
        }[] & ({
            chainId?: Buffer | undefined;
            status?: import("./types").Status | undefined;
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
            status?: import("./types").Status | undefined;
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
            } & { [K_43 in Exclude<keyof I["tokens"][number]["details"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
            txHash?: string | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        } & { [K_44 in Exclude<keyof I["tokens"][number], "$type" | "chainId" | "status" | "asset" | "tokenAddress" | "details" | "txHash" | "isExternal" | "burnerCode">]: never; })[] & { [K_45 in Exclude<keyof I["tokens"], "$type" | keyof {
            chainId?: Buffer | undefined;
            status?: import("./types").Status | undefined;
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
        }[]>]: never; }) | undefined;
        confirmedEventQueue?: ({
            items?: {
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & { [K_46 in Exclude<keyof I["confirmedEventQueue"]["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
                [x: number]: ({
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & { [K_47 in Exclude<keyof I["confirmedEventQueue"]["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
            } & { [K_48 in Exclude<keyof I["confirmedEventQueue"]["items"], string | number>]: never; }) | undefined;
        } & { [K_49 in Exclude<keyof I["confirmedEventQueue"], "$type" | "items">]: never; }) | undefined;
        legacyConfirmedDeposits?: ({
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_50 in Exclude<keyof I["legacyConfirmedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_51 in Exclude<keyof I["legacyConfirmedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_52 in Exclude<keyof I["legacyConfirmedDeposits"], "$type" | keyof {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        legacyBurnedDeposits?: ({
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_53 in Exclude<keyof I["legacyBurnedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_54 in Exclude<keyof I["legacyBurnedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_55 in Exclude<keyof I["legacyBurnedDeposits"], "$type" | keyof {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_56 in Exclude<keyof I, "$type" | "events" | "params" | "burnerInfos" | "commandQueue" | "confirmedDeposits" | "burnedDeposits" | "commandBatches" | "gateway" | "tokens" | "confirmedEventQueue" | "legacyConfirmedDeposits" | "legacyBurnedDeposits">]: never; }>(base?: I | undefined): GenesisState_Chain;
    fromPartial<I_1 extends {
        events?: {
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
        params?: {
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
        } | undefined;
        burnerInfos?: {
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        }[] | undefined;
        commandQueue?: {
            items?: {
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        confirmedDeposits?: {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        burnedDeposits?: {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        commandBatches?: {
            data?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            id?: Buffer | undefined;
            keyId?: string | undefined;
            commandIds?: Buffer[] | undefined;
            sigHash?: Buffer | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
        }[] | undefined;
        gateway?: {
            address?: Buffer | undefined;
        } | undefined;
        tokens?: {
            chainId?: Buffer | undefined;
            status?: import("./types").Status | undefined;
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
        }[] | undefined;
        confirmedEventQueue?: {
            items?: {
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        legacyConfirmedDeposits?: {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        legacyBurnedDeposits?: {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
    } & {
        events?: ({
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
            status?: import("./types").Event_Status | undefined;
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
            } & { [K_57 in Exclude<keyof I_1["events"][number]["index"], "$type" | keyof Long.Long>]: never; }) | undefined;
            status?: import("./types").Event_Status | undefined;
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
            } & { [K_58 in Exclude<keyof I_1["events"][number]["tokenSent"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "destinationAddress">]: never; }) | undefined;
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
            } & { [K_59 in Exclude<keyof I_1["events"][number]["contractCall"], "$type" | "sender" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
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
            } & { [K_60 in Exclude<keyof I_1["events"][number]["contractCallWithToken"], "symbol" | "$type" | "sender" | "amount" | "destinationChain" | "contractAddress" | "payloadHash">]: never; }) | undefined;
            transfer?: ({
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & {
                amount?: Buffer | undefined;
                to?: Buffer | undefined;
            } & { [K_61 in Exclude<keyof I_1["events"][number]["transfer"], "$type" | "amount" | "to">]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_62 in Exclude<keyof I_1["events"][number]["tokenDeployed"], "symbol" | "$type" | "tokenAddress">]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_63 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"]["preOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_64 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"]["newOwners"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_65 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"], "$type" | "preOwners" | "prevThreshold" | "newOwners" | "newThreshold">]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newThreshold?: Buffer | undefined;
                newOperators?: Buffer[] | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newThreshold?: Buffer | undefined;
                newOperators?: (Buffer[] & Buffer[] & { [K_66 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"]["newOperators"], "$type" | keyof Buffer[]>]: never; }) | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_67 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"]["newWeights"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            } & { [K_68 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"], "$type" | "newThreshold" | "newOperators" | "newWeights">]: never; }) | undefined;
        } & { [K_69 in Exclude<keyof I_1["events"][number], "$type" | "index" | "status" | "chain" | "txId" | "tokenSent" | "contractCall" | "contractCallWithToken" | "transfer" | "tokenDeployed" | "multisigOwnershipTransferred" | "multisigOperatorshipTransferred">]: never; })[] & { [K_70 in Exclude<keyof I_1["events"], "$type" | keyof {
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
        params?: ({
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
        } & {
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
            } & { [K_71 in Exclude<keyof I_1["params"]["transferLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_72 in Exclude<keyof I_1["params"]["endBlockerLimit"], "$type" | keyof Long.Long>]: never; }) | undefined;
            chain?: string | undefined;
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
            } & { [K_73 in Exclude<keyof I_1["params"]["confirmationHeight"], "$type" | keyof Long.Long>]: never; }) | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | (Long.Long & {
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
            } & { [K_74 in Exclude<keyof I_1["params"]["revoteLockingPeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
            networks?: ({
                id?: Buffer | undefined;
                name?: string | undefined;
            }[] & ({
                id?: Buffer | undefined;
                name?: string | undefined;
            } & {
                id?: Buffer | undefined;
                name?: string | undefined;
            } & { [K_75 in Exclude<keyof I_1["params"]["networks"][number], "$type" | "id" | "name">]: never; })[] & { [K_76 in Exclude<keyof I_1["params"]["networks"], "$type" | keyof {
                id?: Buffer | undefined;
                name?: string | undefined;
            }[]>]: never; }) | undefined;
            votingThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
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
                } & { [K_77 in Exclude<keyof I_1["params"]["votingThreshold"]["numerator"], "$type" | keyof Long.Long>]: never; }) | undefined;
                denominator?: string | number | (Long.Long & {
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
                } & { [K_78 in Exclude<keyof I_1["params"]["votingThreshold"]["denominator"], "$type" | keyof Long.Long>]: never; }) | undefined;
            } & { [K_79 in Exclude<keyof I_1["params"]["votingThreshold"], "$type" | "numerator" | "denominator">]: never; }) | undefined;
            minVoterCount?: string | number | (Long.Long & {
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
            } & { [K_80 in Exclude<keyof I_1["params"]["minVoterCount"], "$type" | keyof Long.Long>]: never; }) | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | (Long.Long & {
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
            } & { [K_81 in Exclude<keyof I_1["params"]["votingGracePeriod"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_82 in Exclude<keyof I_1["params"], "$type" | "transferLimit" | "endBlockerLimit" | "chain" | "confirmationHeight" | "network" | "tokenCode" | "burnable" | "revoteLockingPeriod" | "networks" | "votingThreshold" | "minVoterCount" | "commandsGasLimit" | "votingGracePeriod">]: never; }) | undefined;
        burnerInfos?: ({
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        }[] & ({
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
        } & { [K_83 in Exclude<keyof I_1["burnerInfos"][number], "symbol" | "$type" | "asset" | "destinationChain" | "tokenAddress" | "burnerAddress" | "salt">]: never; })[] & { [K_84 in Exclude<keyof I_1["burnerInfos"], "$type" | keyof {
            symbol?: string | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            tokenAddress?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            salt?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        commandQueue?: ({
            items?: {
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & { [K_85 in Exclude<keyof I_1["commandQueue"]["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
                [x: number]: ({
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & { [K_86 in Exclude<keyof I_1["commandQueue"]["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
            } & { [K_87 in Exclude<keyof I_1["commandQueue"]["items"], string | number>]: never; }) | undefined;
        } & { [K_88 in Exclude<keyof I_1["commandQueue"], "$type" | "items">]: never; }) | undefined;
        confirmedDeposits?: ({
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_89 in Exclude<keyof I_1["confirmedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_90 in Exclude<keyof I_1["confirmedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_91 in Exclude<keyof I_1["confirmedDeposits"], "$type" | keyof {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        burnedDeposits?: ({
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_92 in Exclude<keyof I_1["burnedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_93 in Exclude<keyof I_1["burnedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_94 in Exclude<keyof I_1["burnedDeposits"], "$type" | keyof {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        commandBatches?: ({
            data?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            id?: Buffer | undefined;
            keyId?: string | undefined;
            commandIds?: Buffer[] | undefined;
            sigHash?: Buffer | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
        }[] & ({
            data?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
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
            status?: import("./types").BatchedCommandsStatus | undefined;
            signature?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_95 in Exclude<keyof I_1["commandBatches"][number]["signature"], "$type" | "typeUrl" | "value">]: never; }) | undefined;
            id?: Buffer | undefined;
            keyId?: string | undefined;
            commandIds?: (Buffer[] & Buffer[] & { [K_96 in Exclude<keyof I_1["commandBatches"][number]["commandIds"], "$type" | keyof Buffer[]>]: never; }) | undefined;
            sigHash?: Buffer | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
        } & { [K_97 in Exclude<keyof I_1["commandBatches"][number], "$type" | "data" | "status" | "signature" | "id" | "keyId" | "commandIds" | "sigHash" | "prevBatchedCommandsId">]: never; })[] & { [K_98 in Exclude<keyof I_1["commandBatches"], "$type" | keyof {
            data?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            id?: Buffer | undefined;
            keyId?: string | undefined;
            commandIds?: Buffer[] | undefined;
            sigHash?: Buffer | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        gateway?: ({
            address?: Buffer | undefined;
        } & {
            address?: Buffer | undefined;
        } & { [K_99 in Exclude<keyof I_1["gateway"], "$type" | "address">]: never; }) | undefined;
        tokens?: ({
            chainId?: Buffer | undefined;
            status?: import("./types").Status | undefined;
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
        }[] & ({
            chainId?: Buffer | undefined;
            status?: import("./types").Status | undefined;
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
            status?: import("./types").Status | undefined;
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
            } & { [K_100 in Exclude<keyof I_1["tokens"][number]["details"], "symbol" | "$type" | "tokenName" | "decimals" | "capacity">]: never; }) | undefined;
            txHash?: string | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        } & { [K_101 in Exclude<keyof I_1["tokens"][number], "$type" | "chainId" | "status" | "asset" | "tokenAddress" | "details" | "txHash" | "isExternal" | "burnerCode">]: never; })[] & { [K_102 in Exclude<keyof I_1["tokens"], "$type" | keyof {
            chainId?: Buffer | undefined;
            status?: import("./types").Status | undefined;
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
        }[]>]: never; }) | undefined;
        confirmedEventQueue?: ({
            items?: {
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
                [x: number]: {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & { [K_103 in Exclude<keyof I_1["confirmedEventQueue"]["items"][string], "$type" | "value" | "key">]: never; }) | undefined;
                [x: number]: ({
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & {
                    value?: Buffer | undefined;
                    key?: Buffer | undefined;
                } & { [K_104 in Exclude<keyof I_1["confirmedEventQueue"]["items"][number], "$type" | "value" | "key">]: never; }) | undefined;
            } & { [K_105 in Exclude<keyof I_1["confirmedEventQueue"]["items"], string | number>]: never; }) | undefined;
        } & { [K_106 in Exclude<keyof I_1["confirmedEventQueue"], "$type" | "items">]: never; }) | undefined;
        legacyConfirmedDeposits?: ({
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_107 in Exclude<keyof I_1["legacyConfirmedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_108 in Exclude<keyof I_1["legacyConfirmedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_109 in Exclude<keyof I_1["legacyConfirmedDeposits"], "$type" | keyof {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        legacyBurnedDeposits?: ({
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_110 in Exclude<keyof I_1["legacyBurnedDeposits"][number]["logIndex"], "$type" | keyof Long.Long>]: never; }) | undefined;
        } & { [K_111 in Exclude<keyof I_1["legacyBurnedDeposits"][number], "$type" | "amount" | "asset" | "destinationChain" | "txId" | "burnerAddress" | "logIndex">]: never; })[] & { [K_112 in Exclude<keyof I_1["legacyBurnedDeposits"], "$type" | keyof {
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            txId?: Buffer | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_113 in Exclude<keyof I_1, "$type" | "events" | "params" | "burnerInfos" | "commandQueue" | "confirmedDeposits" | "burnedDeposits" | "commandBatches" | "gateway" | "tokens" | "confirmedEventQueue" | "legacyConfirmedDeposits" | "legacyBurnedDeposits">]: never; }>(object: I_1): GenesisState_Chain;
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
