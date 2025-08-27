import Long from "long";
import _m0 from "protobufjs/minimal";
import { QueueState } from "../../utils/v1beta1/queuer";
import { Params } from "./params";
import { BurnerInfo, CommandBatchMetadata, ERC20Deposit, ERC20TokenMetadata, Event, Gateway } from "./types";
export declare const protobufPackage = "axelar.evm.v1beta1";
/** GenesisState represents the genesis state */
export interface GenesisState {
    chains: GenesisState_Chain[];
}
export interface GenesisState_Chain {
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
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        chains?: {
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] | undefined;
            events?: {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        chains?: ({
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] | undefined;
            events?: {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[] & ({
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] | undefined;
            events?: {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        } & {
            params?: ({
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } & {
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
                } & { [K in Exclude<keyof I["chains"][number]["params"]["confirmationHeight"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_1 in Exclude<keyof I["chains"][number]["params"]["revoteLockingPeriod"], keyof Long.Long>]: never; }) | undefined;
                networks?: ({
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] & ({
                    name?: string | undefined;
                    id?: Buffer | undefined;
                } & {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                } & { [K_2 in Exclude<keyof I["chains"][number]["params"]["networks"][number], keyof import("./types").NetworkInfo>]: never; })[] & { [K_3 in Exclude<keyof I["chains"][number]["params"]["networks"], keyof {
                    name?: string | undefined;
                    id?: Buffer | undefined;
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
                    } & { [K_4 in Exclude<keyof I["chains"][number]["params"]["votingThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                    } & { [K_5 in Exclude<keyof I["chains"][number]["params"]["votingThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["chains"][number]["params"]["votingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
                } & { [K_7 in Exclude<keyof I["chains"][number]["params"]["minVoterCount"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_8 in Exclude<keyof I["chains"][number]["params"]["votingGracePeriod"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_9 in Exclude<keyof I["chains"][number]["params"]["endBlockerLimit"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_10 in Exclude<keyof I["chains"][number]["params"]["transferLimit"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["chains"][number]["params"], keyof Params>]: never; }) | undefined;
            burnerInfos?: ({
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] & ({
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
            } & { [K_12 in Exclude<keyof I["chains"][number]["burnerInfos"][number], keyof BurnerInfo>]: never; })[] & { [K_13 in Exclude<keyof I["chains"][number]["burnerInfos"], keyof {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[]>]: never; }) | undefined;
            commandQueue?: ({
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } & {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } & { [K_14 in Exclude<keyof I["chains"][number]["commandQueue"]["items"][string], keyof import("../../utils/v1beta1/queuer").QueueState_Item>]: never; }) | undefined;
                } & { [K_15 in Exclude<keyof I["chains"][number]["commandQueue"]["items"], string | number>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["chains"][number]["commandQueue"], "items">]: never; }) | undefined;
            confirmedDeposits?: ({
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_17 in Exclude<keyof I["chains"][number]["confirmedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I["chains"][number]["confirmedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_19 in Exclude<keyof I["chains"][number]["confirmedDeposits"], keyof {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            burnedDeposits?: ({
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_20 in Exclude<keyof I["chains"][number]["burnedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I["chains"][number]["burnedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_22 in Exclude<keyof I["chains"][number]["burnedDeposits"], keyof {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            commandBatches?: ({
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] & ({
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } & {
                id?: Buffer | undefined;
                commandIds?: (Buffer[] & Buffer[] & { [K_23 in Exclude<keyof I["chains"][number]["commandBatches"][number]["commandIds"], keyof Buffer[]>]: never; }) | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_24 in Exclude<keyof I["chains"][number]["commandBatches"][number]["signature"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I["chains"][number]["commandBatches"][number], keyof CommandBatchMetadata>]: never; })[] & { [K_26 in Exclude<keyof I["chains"][number]["commandBatches"], keyof {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            gateway?: ({
                address?: Buffer | undefined;
            } & {
                address?: Buffer | undefined;
            } & { [K_27 in Exclude<keyof I["chains"][number]["gateway"], "address">]: never; }) | undefined;
            tokens?: ({
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] & ({
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
                status?: import("./types").Status | undefined;
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
                } & { [K_28 in Exclude<keyof I["chains"][number]["tokens"][number]["details"], keyof import("./types").TokenDetails>]: never; }) | undefined;
                tokenAddress?: string | undefined;
                txHash?: string | undefined;
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            } & { [K_29 in Exclude<keyof I["chains"][number]["tokens"][number], keyof ERC20TokenMetadata>]: never; })[] & { [K_30 in Exclude<keyof I["chains"][number]["tokens"], keyof {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[]>]: never; }) | undefined;
            events?: ({
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
                status?: import("./types").Event_Status | undefined;
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
                } & { [K_31 in Exclude<keyof I["chains"][number]["events"][number]["index"], keyof Long.Long>]: never; }) | undefined;
                status?: import("./types").Event_Status | undefined;
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
                } & { [K_32 in Exclude<keyof I["chains"][number]["events"][number]["tokenSent"], keyof import("./types").EventTokenSent>]: never; }) | undefined;
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
                } & { [K_33 in Exclude<keyof I["chains"][number]["events"][number]["contractCall"], keyof import("./types").EventContractCall>]: never; }) | undefined;
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
                } & { [K_34 in Exclude<keyof I["chains"][number]["events"][number]["contractCallWithToken"], keyof import("./types").EventContractCallWithToken>]: never; }) | undefined;
                transfer?: ({
                    to?: Buffer | undefined;
                    amount?: Buffer | undefined;
                } & {
                    to?: Buffer | undefined;
                    amount?: Buffer | undefined;
                } & { [K_35 in Exclude<keyof I["chains"][number]["events"][number]["transfer"], keyof import("./types").EventTransfer>]: never; }) | undefined;
                tokenDeployed?: ({
                    symbol?: string | undefined;
                    tokenAddress?: Buffer | undefined;
                } & {
                    symbol?: string | undefined;
                    tokenAddress?: Buffer | undefined;
                } & { [K_36 in Exclude<keyof I["chains"][number]["events"][number]["tokenDeployed"], keyof import("./types").EventTokenDeployed>]: never; }) | undefined;
                multisigOwnershipTransferred?: ({
                    preOwners?: Buffer[] | undefined;
                    prevThreshold?: Buffer | undefined;
                    newOwners?: Buffer[] | undefined;
                    newThreshold?: Buffer | undefined;
                } & {
                    preOwners?: (Buffer[] & Buffer[] & { [K_37 in Exclude<keyof I["chains"][number]["events"][number]["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
                    prevThreshold?: Buffer | undefined;
                    newOwners?: (Buffer[] & Buffer[] & { [K_38 in Exclude<keyof I["chains"][number]["events"][number]["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
                    newThreshold?: Buffer | undefined;
                } & { [K_39 in Exclude<keyof I["chains"][number]["events"][number]["multisigOwnershipTransferred"], keyof import("./types").EventMultisigOwnershipTransferred>]: never; }) | undefined;
                multisigOperatorshipTransferred?: ({
                    newOperators?: Buffer[] | undefined;
                    newThreshold?: Buffer | undefined;
                    newWeights?: Buffer[] | undefined;
                } & {
                    newOperators?: (Buffer[] & Buffer[] & { [K_40 in Exclude<keyof I["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
                    newThreshold?: Buffer | undefined;
                    newWeights?: (Buffer[] & Buffer[] & { [K_41 in Exclude<keyof I["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
                } & { [K_42 in Exclude<keyof I["chains"][number]["events"][number]["multisigOperatorshipTransferred"], keyof import("./types").EventMultisigOperatorshipTransferred>]: never; }) | undefined;
            } & { [K_43 in Exclude<keyof I["chains"][number]["events"][number], keyof Event>]: never; })[] & { [K_44 in Exclude<keyof I["chains"][number]["events"], keyof {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: ({
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } & {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } & { [K_45 in Exclude<keyof I["chains"][number]["confirmedEventQueue"]["items"][string], keyof import("../../utils/v1beta1/queuer").QueueState_Item>]: never; }) | undefined;
                } & { [K_46 in Exclude<keyof I["chains"][number]["confirmedEventQueue"]["items"], string | number>]: never; }) | undefined;
            } & { [K_47 in Exclude<keyof I["chains"][number]["confirmedEventQueue"], "items">]: never; }) | undefined;
            legacyConfirmedDeposits?: ({
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_48 in Exclude<keyof I["chains"][number]["legacyConfirmedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_49 in Exclude<keyof I["chains"][number]["legacyConfirmedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_50 in Exclude<keyof I["chains"][number]["legacyConfirmedDeposits"], keyof {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            legacyBurnedDeposits?: ({
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_51 in Exclude<keyof I["chains"][number]["legacyBurnedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_52 in Exclude<keyof I["chains"][number]["legacyBurnedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_53 in Exclude<keyof I["chains"][number]["legacyBurnedDeposits"], keyof {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_54 in Exclude<keyof I["chains"][number], keyof GenesisState_Chain>]: never; })[] & { [K_55 in Exclude<keyof I["chains"], keyof {
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] | undefined;
            events?: {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_56 in Exclude<keyof I, "chains">]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        chains?: {
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] | undefined;
            events?: {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        chains?: ({
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] | undefined;
            events?: {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[] & ({
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] | undefined;
            events?: {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        } & {
            params?: ({
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } & {
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
                } & { [K_57 in Exclude<keyof I_1["chains"][number]["params"]["confirmationHeight"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_58 in Exclude<keyof I_1["chains"][number]["params"]["revoteLockingPeriod"], keyof Long.Long>]: never; }) | undefined;
                networks?: ({
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] & ({
                    name?: string | undefined;
                    id?: Buffer | undefined;
                } & {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                } & { [K_59 in Exclude<keyof I_1["chains"][number]["params"]["networks"][number], keyof import("./types").NetworkInfo>]: never; })[] & { [K_60 in Exclude<keyof I_1["chains"][number]["params"]["networks"], keyof {
                    name?: string | undefined;
                    id?: Buffer | undefined;
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
                    } & { [K_61 in Exclude<keyof I_1["chains"][number]["params"]["votingThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                    } & { [K_62 in Exclude<keyof I_1["chains"][number]["params"]["votingThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
                } & { [K_63 in Exclude<keyof I_1["chains"][number]["params"]["votingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
                } & { [K_64 in Exclude<keyof I_1["chains"][number]["params"]["minVoterCount"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_65 in Exclude<keyof I_1["chains"][number]["params"]["votingGracePeriod"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_66 in Exclude<keyof I_1["chains"][number]["params"]["endBlockerLimit"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_67 in Exclude<keyof I_1["chains"][number]["params"]["transferLimit"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_68 in Exclude<keyof I_1["chains"][number]["params"], keyof Params>]: never; }) | undefined;
            burnerInfos?: ({
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] & ({
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
            } & { [K_69 in Exclude<keyof I_1["chains"][number]["burnerInfos"][number], keyof BurnerInfo>]: never; })[] & { [K_70 in Exclude<keyof I_1["chains"][number]["burnerInfos"], keyof {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[]>]: never; }) | undefined;
            commandQueue?: ({
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } & {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } & { [K_71 in Exclude<keyof I_1["chains"][number]["commandQueue"]["items"][string], keyof import("../../utils/v1beta1/queuer").QueueState_Item>]: never; }) | undefined;
                } & { [K_72 in Exclude<keyof I_1["chains"][number]["commandQueue"]["items"], string | number>]: never; }) | undefined;
            } & { [K_73 in Exclude<keyof I_1["chains"][number]["commandQueue"], "items">]: never; }) | undefined;
            confirmedDeposits?: ({
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_74 in Exclude<keyof I_1["chains"][number]["confirmedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_75 in Exclude<keyof I_1["chains"][number]["confirmedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_76 in Exclude<keyof I_1["chains"][number]["confirmedDeposits"], keyof {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            burnedDeposits?: ({
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_77 in Exclude<keyof I_1["chains"][number]["burnedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_78 in Exclude<keyof I_1["chains"][number]["burnedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_79 in Exclude<keyof I_1["chains"][number]["burnedDeposits"], keyof {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            commandBatches?: ({
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] & ({
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } & {
                id?: Buffer | undefined;
                commandIds?: (Buffer[] & Buffer[] & { [K_80 in Exclude<keyof I_1["chains"][number]["commandBatches"][number]["commandIds"], keyof Buffer[]>]: never; }) | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_81 in Exclude<keyof I_1["chains"][number]["commandBatches"][number]["signature"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            } & { [K_82 in Exclude<keyof I_1["chains"][number]["commandBatches"][number], keyof CommandBatchMetadata>]: never; })[] & { [K_83 in Exclude<keyof I_1["chains"][number]["commandBatches"], keyof {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            gateway?: ({
                address?: Buffer | undefined;
            } & {
                address?: Buffer | undefined;
            } & { [K_84 in Exclude<keyof I_1["chains"][number]["gateway"], "address">]: never; }) | undefined;
            tokens?: ({
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] & ({
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
                status?: import("./types").Status | undefined;
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
                } & { [K_85 in Exclude<keyof I_1["chains"][number]["tokens"][number]["details"], keyof import("./types").TokenDetails>]: never; }) | undefined;
                tokenAddress?: string | undefined;
                txHash?: string | undefined;
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            } & { [K_86 in Exclude<keyof I_1["chains"][number]["tokens"][number], keyof ERC20TokenMetadata>]: never; })[] & { [K_87 in Exclude<keyof I_1["chains"][number]["tokens"], keyof {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[]>]: never; }) | undefined;
            events?: ({
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
                status?: import("./types").Event_Status | undefined;
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
                } & { [K_88 in Exclude<keyof I_1["chains"][number]["events"][number]["index"], keyof Long.Long>]: never; }) | undefined;
                status?: import("./types").Event_Status | undefined;
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
                } & { [K_89 in Exclude<keyof I_1["chains"][number]["events"][number]["tokenSent"], keyof import("./types").EventTokenSent>]: never; }) | undefined;
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
                } & { [K_90 in Exclude<keyof I_1["chains"][number]["events"][number]["contractCall"], keyof import("./types").EventContractCall>]: never; }) | undefined;
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
                } & { [K_91 in Exclude<keyof I_1["chains"][number]["events"][number]["contractCallWithToken"], keyof import("./types").EventContractCallWithToken>]: never; }) | undefined;
                transfer?: ({
                    to?: Buffer | undefined;
                    amount?: Buffer | undefined;
                } & {
                    to?: Buffer | undefined;
                    amount?: Buffer | undefined;
                } & { [K_92 in Exclude<keyof I_1["chains"][number]["events"][number]["transfer"], keyof import("./types").EventTransfer>]: never; }) | undefined;
                tokenDeployed?: ({
                    symbol?: string | undefined;
                    tokenAddress?: Buffer | undefined;
                } & {
                    symbol?: string | undefined;
                    tokenAddress?: Buffer | undefined;
                } & { [K_93 in Exclude<keyof I_1["chains"][number]["events"][number]["tokenDeployed"], keyof import("./types").EventTokenDeployed>]: never; }) | undefined;
                multisigOwnershipTransferred?: ({
                    preOwners?: Buffer[] | undefined;
                    prevThreshold?: Buffer | undefined;
                    newOwners?: Buffer[] | undefined;
                    newThreshold?: Buffer | undefined;
                } & {
                    preOwners?: (Buffer[] & Buffer[] & { [K_94 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
                    prevThreshold?: Buffer | undefined;
                    newOwners?: (Buffer[] & Buffer[] & { [K_95 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
                    newThreshold?: Buffer | undefined;
                } & { [K_96 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOwnershipTransferred"], keyof import("./types").EventMultisigOwnershipTransferred>]: never; }) | undefined;
                multisigOperatorshipTransferred?: ({
                    newOperators?: Buffer[] | undefined;
                    newThreshold?: Buffer | undefined;
                    newWeights?: Buffer[] | undefined;
                } & {
                    newOperators?: (Buffer[] & Buffer[] & { [K_97 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
                    newThreshold?: Buffer | undefined;
                    newWeights?: (Buffer[] & Buffer[] & { [K_98 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
                } & { [K_99 in Exclude<keyof I_1["chains"][number]["events"][number]["multisigOperatorshipTransferred"], keyof import("./types").EventMultisigOperatorshipTransferred>]: never; }) | undefined;
            } & { [K_100 in Exclude<keyof I_1["chains"][number]["events"][number], keyof Event>]: never; })[] & { [K_101 in Exclude<keyof I_1["chains"][number]["events"], keyof {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: ({
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } & {
                items?: ({
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } & {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } & { [K_102 in Exclude<keyof I_1["chains"][number]["confirmedEventQueue"]["items"][string], keyof import("../../utils/v1beta1/queuer").QueueState_Item>]: never; }) | undefined;
                } & { [K_103 in Exclude<keyof I_1["chains"][number]["confirmedEventQueue"]["items"], string | number>]: never; }) | undefined;
            } & { [K_104 in Exclude<keyof I_1["chains"][number]["confirmedEventQueue"], "items">]: never; }) | undefined;
            legacyConfirmedDeposits?: ({
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_105 in Exclude<keyof I_1["chains"][number]["legacyConfirmedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_106 in Exclude<keyof I_1["chains"][number]["legacyConfirmedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_107 in Exclude<keyof I_1["chains"][number]["legacyConfirmedDeposits"], keyof {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
            legacyBurnedDeposits?: ({
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] & ({
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
                } & { [K_108 in Exclude<keyof I_1["chains"][number]["legacyBurnedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_109 in Exclude<keyof I_1["chains"][number]["legacyBurnedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_110 in Exclude<keyof I_1["chains"][number]["legacyBurnedDeposits"], keyof {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_111 in Exclude<keyof I_1["chains"][number], keyof GenesisState_Chain>]: never; })[] & { [K_112 in Exclude<keyof I_1["chains"], keyof {
            params?: {
                chain?: string | undefined;
                confirmationHeight?: string | number | Long.Long | undefined;
                network?: string | undefined;
                tokenCode?: Buffer | undefined;
                burnable?: Buffer | undefined;
                revoteLockingPeriod?: string | number | Long.Long | undefined;
                networks?: {
                    name?: string | undefined;
                    id?: Buffer | undefined;
                }[] | undefined;
                votingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                minVoterCount?: string | number | Long.Long | undefined;
                commandsGasLimit?: number | undefined;
                votingGracePeriod?: string | number | Long.Long | undefined;
                endBlockerLimit?: string | number | Long.Long | undefined;
                transferLimit?: string | number | Long.Long | undefined;
            } | undefined;
            burnerInfos?: {
                burnerAddress?: Buffer | undefined;
                tokenAddress?: Buffer | undefined;
                destinationChain?: string | undefined;
                symbol?: string | undefined;
                asset?: string | undefined;
                salt?: Buffer | undefined;
            }[] | undefined;
            commandQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            confirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            burnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            commandBatches?: {
                id?: Buffer | undefined;
                commandIds?: Buffer[] | undefined;
                data?: Buffer | undefined;
                sigHash?: Buffer | undefined;
                status?: import("./types").BatchedCommandsStatus | undefined;
                keyId?: string | undefined;
                prevBatchedCommandsId?: Buffer | undefined;
                signature?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            }[] | undefined;
            gateway?: {
                address?: Buffer | undefined;
            } | undefined;
            tokens?: {
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
                status?: import("./types").Status | undefined;
                isExternal?: boolean | undefined;
                burnerCode?: Buffer | undefined;
            }[] | undefined;
            events?: {
                chain?: string | undefined;
                txId?: Buffer | undefined;
                index?: string | number | Long.Long | undefined;
                status?: import("./types").Event_Status | undefined;
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
            confirmedEventQueue?: {
                items?: {
                    [x: string]: {
                        key?: Buffer | undefined;
                        value?: Buffer | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            legacyConfirmedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
            legacyBurnedDeposits?: {
                txId?: Buffer | undefined;
                amount?: Buffer | undefined;
                asset?: string | undefined;
                destinationChain?: string | undefined;
                burnerAddress?: Buffer | undefined;
                logIndex?: string | number | Long.Long | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_113 in Exclude<keyof I_1, "chains">]: never; }>(object: I_1): GenesisState;
};
export declare const GenesisState_Chain: {
    encode(message: GenesisState_Chain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState_Chain;
    fromJSON(object: any): GenesisState_Chain;
    toJSON(message: GenesisState_Chain): unknown;
    create<I extends {
        params?: {
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } | undefined;
        burnerInfos?: {
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        }[] | undefined;
        commandQueue?: {
            items?: {
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        confirmedDeposits?: {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        burnedDeposits?: {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        commandBatches?: {
            id?: Buffer | undefined;
            commandIds?: Buffer[] | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
        gateway?: {
            address?: Buffer | undefined;
        } | undefined;
        tokens?: {
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
            status?: import("./types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        }[] | undefined;
        events?: {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
        confirmedEventQueue?: {
            items?: {
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        legacyConfirmedDeposits?: {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        legacyBurnedDeposits?: {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
    } & {
        params?: ({
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } & {
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
            } & { [K in Exclude<keyof I["params"]["confirmationHeight"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["params"]["revoteLockingPeriod"], keyof Long.Long>]: never; }) | undefined;
            networks?: ({
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] & ({
                name?: string | undefined;
                id?: Buffer | undefined;
            } & {
                name?: string | undefined;
                id?: Buffer | undefined;
            } & { [K_2 in Exclude<keyof I["params"]["networks"][number], keyof import("./types").NetworkInfo>]: never; })[] & { [K_3 in Exclude<keyof I["params"]["networks"], keyof {
                name?: string | undefined;
                id?: Buffer | undefined;
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
                } & { [K_4 in Exclude<keyof I["params"]["votingThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_5 in Exclude<keyof I["params"]["votingThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["params"]["votingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
            } & { [K_7 in Exclude<keyof I["params"]["minVoterCount"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_8 in Exclude<keyof I["params"]["votingGracePeriod"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_9 in Exclude<keyof I["params"]["endBlockerLimit"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_10 in Exclude<keyof I["params"]["transferLimit"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
        burnerInfos?: ({
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        }[] & ({
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
        } & { [K_12 in Exclude<keyof I["burnerInfos"][number], keyof BurnerInfo>]: never; })[] & { [K_13 in Exclude<keyof I["burnerInfos"], keyof {
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        commandQueue?: ({
            items?: {
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } & {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } & { [K_14 in Exclude<keyof I["commandQueue"]["items"][string], keyof import("../../utils/v1beta1/queuer").QueueState_Item>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I["commandQueue"]["items"], string | number>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["commandQueue"], "items">]: never; }) | undefined;
        confirmedDeposits?: ({
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_17 in Exclude<keyof I["confirmedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I["confirmedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_19 in Exclude<keyof I["confirmedDeposits"], keyof {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        burnedDeposits?: ({
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_20 in Exclude<keyof I["burnedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_21 in Exclude<keyof I["burnedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_22 in Exclude<keyof I["burnedDeposits"], keyof {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        commandBatches?: ({
            id?: Buffer | undefined;
            commandIds?: Buffer[] | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            id?: Buffer | undefined;
            commandIds?: Buffer[] | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            id?: Buffer | undefined;
            commandIds?: (Buffer[] & Buffer[] & { [K_23 in Exclude<keyof I["commandBatches"][number]["commandIds"], keyof Buffer[]>]: never; }) | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_24 in Exclude<keyof I["commandBatches"][number]["signature"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_25 in Exclude<keyof I["commandBatches"][number], keyof CommandBatchMetadata>]: never; })[] & { [K_26 in Exclude<keyof I["commandBatches"], keyof {
            id?: Buffer | undefined;
            commandIds?: Buffer[] | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        gateway?: ({
            address?: Buffer | undefined;
        } & {
            address?: Buffer | undefined;
        } & { [K_27 in Exclude<keyof I["gateway"], "address">]: never; }) | undefined;
        tokens?: ({
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
            status?: import("./types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        }[] & ({
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
            status?: import("./types").Status | undefined;
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
            } & { [K_28 in Exclude<keyof I["tokens"][number]["details"], keyof import("./types").TokenDetails>]: never; }) | undefined;
            tokenAddress?: string | undefined;
            txHash?: string | undefined;
            status?: import("./types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        } & { [K_29 in Exclude<keyof I["tokens"][number], keyof ERC20TokenMetadata>]: never; })[] & { [K_30 in Exclude<keyof I["tokens"], keyof {
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
            status?: import("./types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        events?: ({
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
            status?: import("./types").Event_Status | undefined;
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
            } & { [K_31 in Exclude<keyof I["events"][number]["index"], keyof Long.Long>]: never; }) | undefined;
            status?: import("./types").Event_Status | undefined;
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
            } & { [K_32 in Exclude<keyof I["events"][number]["tokenSent"], keyof import("./types").EventTokenSent>]: never; }) | undefined;
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
            } & { [K_33 in Exclude<keyof I["events"][number]["contractCall"], keyof import("./types").EventContractCall>]: never; }) | undefined;
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
            } & { [K_34 in Exclude<keyof I["events"][number]["contractCallWithToken"], keyof import("./types").EventContractCallWithToken>]: never; }) | undefined;
            transfer?: ({
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & { [K_35 in Exclude<keyof I["events"][number]["transfer"], keyof import("./types").EventTransfer>]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_36 in Exclude<keyof I["events"][number]["tokenDeployed"], keyof import("./types").EventTokenDeployed>]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_37 in Exclude<keyof I["events"][number]["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_38 in Exclude<keyof I["events"][number]["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_39 in Exclude<keyof I["events"][number]["multisigOwnershipTransferred"], keyof import("./types").EventMultisigOwnershipTransferred>]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newOperators?: (Buffer[] & Buffer[] & { [K_40 in Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_41 in Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
            } & { [K_42 in Exclude<keyof I["events"][number]["multisigOperatorshipTransferred"], keyof import("./types").EventMultisigOperatorshipTransferred>]: never; }) | undefined;
        } & { [K_43 in Exclude<keyof I["events"][number], keyof Event>]: never; })[] & { [K_44 in Exclude<keyof I["events"], keyof {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
        confirmedEventQueue?: ({
            items?: {
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } & {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } & { [K_45 in Exclude<keyof I["confirmedEventQueue"]["items"][string], keyof import("../../utils/v1beta1/queuer").QueueState_Item>]: never; }) | undefined;
            } & { [K_46 in Exclude<keyof I["confirmedEventQueue"]["items"], string | number>]: never; }) | undefined;
        } & { [K_47 in Exclude<keyof I["confirmedEventQueue"], "items">]: never; }) | undefined;
        legacyConfirmedDeposits?: ({
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_48 in Exclude<keyof I["legacyConfirmedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_49 in Exclude<keyof I["legacyConfirmedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_50 in Exclude<keyof I["legacyConfirmedDeposits"], keyof {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        legacyBurnedDeposits?: ({
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_51 in Exclude<keyof I["legacyBurnedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_52 in Exclude<keyof I["legacyBurnedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_53 in Exclude<keyof I["legacyBurnedDeposits"], keyof {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_54 in Exclude<keyof I, keyof GenesisState_Chain>]: never; }>(base?: I | undefined): GenesisState_Chain;
    fromPartial<I_1 extends {
        params?: {
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } | undefined;
        burnerInfos?: {
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        }[] | undefined;
        commandQueue?: {
            items?: {
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        confirmedDeposits?: {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        burnedDeposits?: {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        commandBatches?: {
            id?: Buffer | undefined;
            commandIds?: Buffer[] | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
        gateway?: {
            address?: Buffer | undefined;
        } | undefined;
        tokens?: {
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
            status?: import("./types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        }[] | undefined;
        events?: {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
        confirmedEventQueue?: {
            items?: {
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        legacyConfirmedDeposits?: {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
        legacyBurnedDeposits?: {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] | undefined;
    } & {
        params?: ({
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Buffer | undefined;
            burnable?: Buffer | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } & {
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
            } & { [K_55 in Exclude<keyof I_1["params"]["confirmationHeight"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_56 in Exclude<keyof I_1["params"]["revoteLockingPeriod"], keyof Long.Long>]: never; }) | undefined;
            networks?: ({
                name?: string | undefined;
                id?: Buffer | undefined;
            }[] & ({
                name?: string | undefined;
                id?: Buffer | undefined;
            } & {
                name?: string | undefined;
                id?: Buffer | undefined;
            } & { [K_57 in Exclude<keyof I_1["params"]["networks"][number], keyof import("./types").NetworkInfo>]: never; })[] & { [K_58 in Exclude<keyof I_1["params"]["networks"], keyof {
                name?: string | undefined;
                id?: Buffer | undefined;
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
                } & { [K_59 in Exclude<keyof I_1["params"]["votingThreshold"]["numerator"], keyof Long.Long>]: never; }) | undefined;
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
                } & { [K_60 in Exclude<keyof I_1["params"]["votingThreshold"]["denominator"], keyof Long.Long>]: never; }) | undefined;
            } & { [K_61 in Exclude<keyof I_1["params"]["votingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>]: never; }) | undefined;
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
            } & { [K_62 in Exclude<keyof I_1["params"]["minVoterCount"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_63 in Exclude<keyof I_1["params"]["votingGracePeriod"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_64 in Exclude<keyof I_1["params"]["endBlockerLimit"], keyof Long.Long>]: never; }) | undefined;
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
            } & { [K_65 in Exclude<keyof I_1["params"]["transferLimit"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_66 in Exclude<keyof I_1["params"], keyof Params>]: never; }) | undefined;
        burnerInfos?: ({
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        }[] & ({
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
        } & { [K_67 in Exclude<keyof I_1["burnerInfos"][number], keyof BurnerInfo>]: never; })[] & { [K_68 in Exclude<keyof I_1["burnerInfos"], keyof {
            burnerAddress?: Buffer | undefined;
            tokenAddress?: Buffer | undefined;
            destinationChain?: string | undefined;
            symbol?: string | undefined;
            asset?: string | undefined;
            salt?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        commandQueue?: ({
            items?: {
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } & {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } & { [K_69 in Exclude<keyof I_1["commandQueue"]["items"][string], keyof import("../../utils/v1beta1/queuer").QueueState_Item>]: never; }) | undefined;
            } & { [K_70 in Exclude<keyof I_1["commandQueue"]["items"], string | number>]: never; }) | undefined;
        } & { [K_71 in Exclude<keyof I_1["commandQueue"], "items">]: never; }) | undefined;
        confirmedDeposits?: ({
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_72 in Exclude<keyof I_1["confirmedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_73 in Exclude<keyof I_1["confirmedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_74 in Exclude<keyof I_1["confirmedDeposits"], keyof {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        burnedDeposits?: ({
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_75 in Exclude<keyof I_1["burnedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_76 in Exclude<keyof I_1["burnedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_77 in Exclude<keyof I_1["burnedDeposits"], keyof {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        commandBatches?: ({
            id?: Buffer | undefined;
            commandIds?: Buffer[] | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            id?: Buffer | undefined;
            commandIds?: Buffer[] | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            id?: Buffer | undefined;
            commandIds?: (Buffer[] & Buffer[] & { [K_78 in Exclude<keyof I_1["commandBatches"][number]["commandIds"], keyof Buffer[]>]: never; }) | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_79 in Exclude<keyof I_1["commandBatches"][number]["signature"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
        } & { [K_80 in Exclude<keyof I_1["commandBatches"][number], keyof CommandBatchMetadata>]: never; })[] & { [K_81 in Exclude<keyof I_1["commandBatches"], keyof {
            id?: Buffer | undefined;
            commandIds?: Buffer[] | undefined;
            data?: Buffer | undefined;
            sigHash?: Buffer | undefined;
            status?: import("./types").BatchedCommandsStatus | undefined;
            keyId?: string | undefined;
            prevBatchedCommandsId?: Buffer | undefined;
            signature?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        gateway?: ({
            address?: Buffer | undefined;
        } & {
            address?: Buffer | undefined;
        } & { [K_82 in Exclude<keyof I_1["gateway"], "address">]: never; }) | undefined;
        tokens?: ({
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
            status?: import("./types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        }[] & ({
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
            status?: import("./types").Status | undefined;
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
            } & { [K_83 in Exclude<keyof I_1["tokens"][number]["details"], keyof import("./types").TokenDetails>]: never; }) | undefined;
            tokenAddress?: string | undefined;
            txHash?: string | undefined;
            status?: import("./types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        } & { [K_84 in Exclude<keyof I_1["tokens"][number], keyof ERC20TokenMetadata>]: never; })[] & { [K_85 in Exclude<keyof I_1["tokens"], keyof {
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
            status?: import("./types").Status | undefined;
            isExternal?: boolean | undefined;
            burnerCode?: Buffer | undefined;
        }[]>]: never; }) | undefined;
        events?: ({
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
            status?: import("./types").Event_Status | undefined;
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
            } & { [K_86 in Exclude<keyof I_1["events"][number]["index"], keyof Long.Long>]: never; }) | undefined;
            status?: import("./types").Event_Status | undefined;
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
            } & { [K_87 in Exclude<keyof I_1["events"][number]["tokenSent"], keyof import("./types").EventTokenSent>]: never; }) | undefined;
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
            } & { [K_88 in Exclude<keyof I_1["events"][number]["contractCall"], keyof import("./types").EventContractCall>]: never; }) | undefined;
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
            } & { [K_89 in Exclude<keyof I_1["events"][number]["contractCallWithToken"], keyof import("./types").EventContractCallWithToken>]: never; }) | undefined;
            transfer?: ({
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & {
                to?: Buffer | undefined;
                amount?: Buffer | undefined;
            } & { [K_90 in Exclude<keyof I_1["events"][number]["transfer"], keyof import("./types").EventTransfer>]: never; }) | undefined;
            tokenDeployed?: ({
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & {
                symbol?: string | undefined;
                tokenAddress?: Buffer | undefined;
            } & { [K_91 in Exclude<keyof I_1["events"][number]["tokenDeployed"], keyof import("./types").EventTokenDeployed>]: never; }) | undefined;
            multisigOwnershipTransferred?: ({
                preOwners?: Buffer[] | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
            } & {
                preOwners?: (Buffer[] & Buffer[] & { [K_92 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"]["preOwners"], keyof Buffer[]>]: never; }) | undefined;
                prevThreshold?: Buffer | undefined;
                newOwners?: (Buffer[] & Buffer[] & { [K_93 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"]["newOwners"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
            } & { [K_94 in Exclude<keyof I_1["events"][number]["multisigOwnershipTransferred"], keyof import("./types").EventMultisigOwnershipTransferred>]: never; }) | undefined;
            multisigOperatorshipTransferred?: ({
                newOperators?: Buffer[] | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: Buffer[] | undefined;
            } & {
                newOperators?: (Buffer[] & Buffer[] & { [K_95 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"]["newOperators"], keyof Buffer[]>]: never; }) | undefined;
                newThreshold?: Buffer | undefined;
                newWeights?: (Buffer[] & Buffer[] & { [K_96 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"]["newWeights"], keyof Buffer[]>]: never; }) | undefined;
            } & { [K_97 in Exclude<keyof I_1["events"][number]["multisigOperatorshipTransferred"], keyof import("./types").EventMultisigOperatorshipTransferred>]: never; }) | undefined;
        } & { [K_98 in Exclude<keyof I_1["events"][number], keyof Event>]: never; })[] & { [K_99 in Exclude<keyof I_1["events"], keyof {
            chain?: string | undefined;
            txId?: Buffer | undefined;
            index?: string | number | Long.Long | undefined;
            status?: import("./types").Event_Status | undefined;
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
        confirmedEventQueue?: ({
            items?: {
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } | undefined;
        } & {
            items?: ({
                [x: string]: {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } & {
                    key?: Buffer | undefined;
                    value?: Buffer | undefined;
                } & { [K_100 in Exclude<keyof I_1["confirmedEventQueue"]["items"][string], keyof import("../../utils/v1beta1/queuer").QueueState_Item>]: never; }) | undefined;
            } & { [K_101 in Exclude<keyof I_1["confirmedEventQueue"]["items"], string | number>]: never; }) | undefined;
        } & { [K_102 in Exclude<keyof I_1["confirmedEventQueue"], "items">]: never; }) | undefined;
        legacyConfirmedDeposits?: ({
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_103 in Exclude<keyof I_1["legacyConfirmedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_104 in Exclude<keyof I_1["legacyConfirmedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_105 in Exclude<keyof I_1["legacyConfirmedDeposits"], keyof {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
        legacyBurnedDeposits?: ({
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[] & ({
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
            } & { [K_106 in Exclude<keyof I_1["legacyBurnedDeposits"][number]["logIndex"], keyof Long.Long>]: never; }) | undefined;
        } & { [K_107 in Exclude<keyof I_1["legacyBurnedDeposits"][number], keyof ERC20Deposit>]: never; })[] & { [K_108 in Exclude<keyof I_1["legacyBurnedDeposits"], keyof {
            txId?: Buffer | undefined;
            amount?: Buffer | undefined;
            asset?: string | undefined;
            destinationChain?: string | undefined;
            burnerAddress?: Buffer | undefined;
            logIndex?: string | number | Long.Long | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_109 in Exclude<keyof I_1, keyof GenesisState_Chain>]: never; }>(object: I_1): GenesisState_Chain;
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
