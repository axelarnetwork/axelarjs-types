import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { BatchedCommandsStatus, BurnerInfo, DepositStatus, Event, TokenDetails } from "./types";
export declare const protobufPackage = "axelar.evm.v1beta1";
export declare enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_ACTIVATED = 1,
    CHAIN_STATUS_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare function chainStatusFromJSON(object: any): ChainStatus;
export declare function chainStatusToJSON(object: ChainStatus): string;
export declare enum TokenType {
    TOKEN_TYPE_UNSPECIFIED = 0,
    TOKEN_TYPE_INTERNAL = 1,
    TOKEN_TYPE_EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare function tokenTypeFromJSON(object: any): TokenType;
export declare function tokenTypeToJSON(object: TokenType): string;
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParams {
    $type: "axelar.evm.v1beta1.DepositQueryParams";
    address: string;
    asset: string;
    chain: string;
}
export interface BatchedCommandsRequest {
    $type: "axelar.evm.v1beta1.BatchedCommandsRequest";
    chain: string;
    /**
     * id defines an optional id for the commandsbatch. If not specified the
     * latest will be returned
     */
    id: string;
}
export interface BatchedCommandsResponse {
    $type: "axelar.evm.v1beta1.BatchedCommandsResponse";
    id: string;
    data: string;
    status: BatchedCommandsStatus;
    keyId: string;
    executeData: string;
    prevBatchedCommandsId: string;
    commandIds: string[];
    proof?: Proof | undefined;
}
export interface KeyAddressRequest {
    $type: "axelar.evm.v1beta1.KeyAddressRequest";
    chain: string;
    keyId: string;
}
export interface KeyAddressResponse {
    $type: "axelar.evm.v1beta1.KeyAddressResponse";
    keyId: string;
    addresses: KeyAddressResponse_WeightedAddress[];
    threshold: string;
}
export interface KeyAddressResponse_WeightedAddress {
    $type: "axelar.evm.v1beta1.KeyAddressResponse.WeightedAddress";
    address: string;
    weight: string;
}
/** @deprecated */
export interface QueryTokenAddressResponse {
    $type: "axelar.evm.v1beta1.QueryTokenAddressResponse";
    address: string;
    confirmed: boolean;
}
/** @deprecated */
export interface QueryDepositStateParams {
    $type: "axelar.evm.v1beta1.QueryDepositStateParams";
    txId: Buffer;
    burnerAddress: Buffer;
}
/** @deprecated */
export interface DepositStateRequest {
    $type: "axelar.evm.v1beta1.DepositStateRequest";
    chain: string;
    params?: QueryDepositStateParams | undefined;
}
/** @deprecated */
export interface DepositStateResponse {
    $type: "axelar.evm.v1beta1.DepositStateResponse";
    status: DepositStatus;
}
export interface EventRequest {
    $type: "axelar.evm.v1beta1.EventRequest";
    chain: string;
    eventId: string;
}
export interface EventResponse {
    $type: "axelar.evm.v1beta1.EventResponse";
    event?: Event | undefined;
}
export interface QueryBurnerAddressResponse {
    $type: "axelar.evm.v1beta1.QueryBurnerAddressResponse";
    address: string;
}
export interface ChainsRequest {
    $type: "axelar.evm.v1beta1.ChainsRequest";
    status: ChainStatus;
}
export interface ChainsResponse {
    $type: "axelar.evm.v1beta1.ChainsResponse";
    chains: string[];
}
export interface CommandRequest {
    $type: "axelar.evm.v1beta1.CommandRequest";
    chain: string;
    id: string;
}
export interface CommandResponse {
    $type: "axelar.evm.v1beta1.CommandResponse";
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface CommandResponse_ParamsEntry {
    $type: "axelar.evm.v1beta1.CommandResponse.ParamsEntry";
    key: string;
    value: string;
}
export interface PendingCommandsRequest {
    $type: "axelar.evm.v1beta1.PendingCommandsRequest";
    chain: string;
}
export interface PendingCommandsResponse {
    $type: "axelar.evm.v1beta1.PendingCommandsResponse";
    commands: QueryCommandResponse[];
}
export interface QueryCommandResponse {
    $type: "axelar.evm.v1beta1.QueryCommandResponse";
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface QueryCommandResponse_ParamsEntry {
    $type: "axelar.evm.v1beta1.QueryCommandResponse.ParamsEntry";
    key: string;
    value: string;
}
export interface BurnerInfoRequest {
    $type: "axelar.evm.v1beta1.BurnerInfoRequest";
    address: Buffer;
}
export interface BurnerInfoResponse {
    $type: "axelar.evm.v1beta1.BurnerInfoResponse";
    chain: string;
    burnerInfo?: BurnerInfo | undefined;
}
export interface ConfirmationHeightRequest {
    $type: "axelar.evm.v1beta1.ConfirmationHeightRequest";
    chain: string;
}
export interface ConfirmationHeightResponse {
    $type: "axelar.evm.v1beta1.ConfirmationHeightResponse";
    height: Long;
}
export interface GatewayAddressRequest {
    $type: "axelar.evm.v1beta1.GatewayAddressRequest";
    chain: string;
}
export interface GatewayAddressResponse {
    $type: "axelar.evm.v1beta1.GatewayAddressResponse";
    address: string;
}
export interface BytecodeRequest {
    $type: "axelar.evm.v1beta1.BytecodeRequest";
    chain: string;
    contract: string;
}
export interface BytecodeResponse {
    $type: "axelar.evm.v1beta1.BytecodeResponse";
    bytecode: string;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequest {
    $type: "axelar.evm.v1beta1.ERC20TokensRequest";
    chain: string;
    type: TokenType;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponse {
    $type: "axelar.evm.v1beta1.ERC20TokensResponse";
    tokens: ERC20TokensResponse_Token[];
}
export interface ERC20TokensResponse_Token {
    $type: "axelar.evm.v1beta1.ERC20TokensResponse.Token";
    asset: string;
    symbol: string;
}
export interface TokenInfoRequest {
    $type: "axelar.evm.v1beta1.TokenInfoRequest";
    chain: string;
    asset?: string | undefined;
    symbol?: string | undefined;
    address?: string | undefined;
}
export interface TokenInfoResponse {
    $type: "axelar.evm.v1beta1.TokenInfoResponse";
    asset: string;
    details?: TokenDetails | undefined;
    address: string;
    confirmed: boolean;
    isExternal: boolean;
    burnerCodeHash: string;
}
export interface Proof {
    $type: "axelar.evm.v1beta1.Proof";
    addresses: string[];
    weights: string[];
    threshold: string;
    signatures: string[];
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.evm.v1beta1.ParamsRequest";
    chain: string;
}
export interface ParamsResponse {
    $type: "axelar.evm.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
export declare const DepositQueryParams: {
    $type: "axelar.evm.v1beta1.DepositQueryParams";
    encode(message: DepositQueryParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositQueryParams;
    fromJSON(object: any): DepositQueryParams;
    toJSON(message: DepositQueryParams): unknown;
    create<I extends Exact<DeepPartial<DepositQueryParams>, I>>(base?: I): DepositQueryParams;
    fromPartial<I extends Exact<DeepPartial<DepositQueryParams>, I>>(object: I): DepositQueryParams;
};
export declare const BatchedCommandsRequest: {
    $type: "axelar.evm.v1beta1.BatchedCommandsRequest";
    encode(message: BatchedCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedCommandsRequest;
    fromJSON(object: any): BatchedCommandsRequest;
    toJSON(message: BatchedCommandsRequest): unknown;
    create<I extends Exact<DeepPartial<BatchedCommandsRequest>, I>>(base?: I): BatchedCommandsRequest;
    fromPartial<I extends Exact<DeepPartial<BatchedCommandsRequest>, I>>(object: I): BatchedCommandsRequest;
};
export declare const BatchedCommandsResponse: {
    $type: "axelar.evm.v1beta1.BatchedCommandsResponse";
    encode(message: BatchedCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchedCommandsResponse;
    fromJSON(object: any): BatchedCommandsResponse;
    toJSON(message: BatchedCommandsResponse): unknown;
    create<I extends Exact<DeepPartial<BatchedCommandsResponse>, I>>(base?: I): BatchedCommandsResponse;
    fromPartial<I extends Exact<DeepPartial<BatchedCommandsResponse>, I>>(object: I): BatchedCommandsResponse;
};
export declare const KeyAddressRequest: {
    $type: "axelar.evm.v1beta1.KeyAddressRequest";
    encode(message: KeyAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyAddressRequest;
    fromJSON(object: any): KeyAddressRequest;
    toJSON(message: KeyAddressRequest): unknown;
    create<I extends Exact<DeepPartial<KeyAddressRequest>, I>>(base?: I): KeyAddressRequest;
    fromPartial<I extends Exact<DeepPartial<KeyAddressRequest>, I>>(object: I): KeyAddressRequest;
};
export declare const KeyAddressResponse: {
    $type: "axelar.evm.v1beta1.KeyAddressResponse";
    encode(message: KeyAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyAddressResponse;
    fromJSON(object: any): KeyAddressResponse;
    toJSON(message: KeyAddressResponse): unknown;
    create<I extends Exact<DeepPartial<KeyAddressResponse>, I>>(base?: I): KeyAddressResponse;
    fromPartial<I extends Exact<DeepPartial<KeyAddressResponse>, I>>(object: I): KeyAddressResponse;
};
export declare const KeyAddressResponse_WeightedAddress: {
    $type: "axelar.evm.v1beta1.KeyAddressResponse.WeightedAddress";
    encode(message: KeyAddressResponse_WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyAddressResponse_WeightedAddress;
    fromJSON(object: any): KeyAddressResponse_WeightedAddress;
    toJSON(message: KeyAddressResponse_WeightedAddress): unknown;
    create<I extends Exact<DeepPartial<KeyAddressResponse_WeightedAddress>, I>>(base?: I): KeyAddressResponse_WeightedAddress;
    fromPartial<I extends Exact<DeepPartial<KeyAddressResponse_WeightedAddress>, I>>(object: I): KeyAddressResponse_WeightedAddress;
};
export declare const QueryTokenAddressResponse: {
    $type: "axelar.evm.v1beta1.QueryTokenAddressResponse";
    encode(message: QueryTokenAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenAddressResponse;
    fromJSON(object: any): QueryTokenAddressResponse;
    toJSON(message: QueryTokenAddressResponse): unknown;
    create<I extends Exact<DeepPartial<QueryTokenAddressResponse>, I>>(base?: I): QueryTokenAddressResponse;
    fromPartial<I extends Exact<DeepPartial<QueryTokenAddressResponse>, I>>(object: I): QueryTokenAddressResponse;
};
export declare const QueryDepositStateParams: {
    $type: "axelar.evm.v1beta1.QueryDepositStateParams";
    encode(message: QueryDepositStateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositStateParams;
    fromJSON(object: any): QueryDepositStateParams;
    toJSON(message: QueryDepositStateParams): unknown;
    create<I extends Exact<DeepPartial<QueryDepositStateParams>, I>>(base?: I): QueryDepositStateParams;
    fromPartial<I extends Exact<DeepPartial<QueryDepositStateParams>, I>>(object: I): QueryDepositStateParams;
};
export declare const DepositStateRequest: {
    $type: "axelar.evm.v1beta1.DepositStateRequest";
    encode(message: DepositStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositStateRequest;
    fromJSON(object: any): DepositStateRequest;
    toJSON(message: DepositStateRequest): unknown;
    create<I extends Exact<DeepPartial<DepositStateRequest>, I>>(base?: I): DepositStateRequest;
    fromPartial<I extends Exact<DeepPartial<DepositStateRequest>, I>>(object: I): DepositStateRequest;
};
export declare const DepositStateResponse: {
    $type: "axelar.evm.v1beta1.DepositStateResponse";
    encode(message: DepositStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositStateResponse;
    fromJSON(object: any): DepositStateResponse;
    toJSON(message: DepositStateResponse): unknown;
    create<I extends Exact<DeepPartial<DepositStateResponse>, I>>(base?: I): DepositStateResponse;
    fromPartial<I extends Exact<DeepPartial<DepositStateResponse>, I>>(object: I): DepositStateResponse;
};
export declare const EventRequest: {
    $type: "axelar.evm.v1beta1.EventRequest";
    encode(message: EventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRequest;
    fromJSON(object: any): EventRequest;
    toJSON(message: EventRequest): unknown;
    create<I extends Exact<DeepPartial<EventRequest>, I>>(base?: I): EventRequest;
    fromPartial<I extends Exact<DeepPartial<EventRequest>, I>>(object: I): EventRequest;
};
export declare const EventResponse: {
    $type: "axelar.evm.v1beta1.EventResponse";
    encode(message: EventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventResponse;
    fromJSON(object: any): EventResponse;
    toJSON(message: EventResponse): unknown;
    create<I extends Exact<DeepPartial<EventResponse>, I>>(base?: I): EventResponse;
    fromPartial<I extends Exact<DeepPartial<EventResponse>, I>>(object: I): EventResponse;
};
export declare const QueryBurnerAddressResponse: {
    $type: "axelar.evm.v1beta1.QueryBurnerAddressResponse";
    encode(message: QueryBurnerAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnerAddressResponse;
    fromJSON(object: any): QueryBurnerAddressResponse;
    toJSON(message: QueryBurnerAddressResponse): unknown;
    create<I extends Exact<DeepPartial<QueryBurnerAddressResponse>, I>>(base?: I): QueryBurnerAddressResponse;
    fromPartial<I extends Exact<DeepPartial<QueryBurnerAddressResponse>, I>>(object: I): QueryBurnerAddressResponse;
};
export declare const ChainsRequest: {
    $type: "axelar.evm.v1beta1.ChainsRequest";
    encode(message: ChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsRequest;
    fromJSON(object: any): ChainsRequest;
    toJSON(message: ChainsRequest): unknown;
    create<I extends Exact<DeepPartial<ChainsRequest>, I>>(base?: I): ChainsRequest;
    fromPartial<I extends Exact<DeepPartial<ChainsRequest>, I>>(object: I): ChainsRequest;
};
export declare const ChainsResponse: {
    $type: "axelar.evm.v1beta1.ChainsResponse";
    encode(message: ChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsResponse;
    fromJSON(object: any): ChainsResponse;
    toJSON(message: ChainsResponse): unknown;
    create<I extends Exact<DeepPartial<ChainsResponse>, I>>(base?: I): ChainsResponse;
    fromPartial<I extends Exact<DeepPartial<ChainsResponse>, I>>(object: I): ChainsResponse;
};
export declare const CommandRequest: {
    $type: "axelar.evm.v1beta1.CommandRequest";
    encode(message: CommandRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommandRequest;
    fromJSON(object: any): CommandRequest;
    toJSON(message: CommandRequest): unknown;
    create<I extends Exact<DeepPartial<CommandRequest>, I>>(base?: I): CommandRequest;
    fromPartial<I extends Exact<DeepPartial<CommandRequest>, I>>(object: I): CommandRequest;
};
export declare const CommandResponse: {
    $type: "axelar.evm.v1beta1.CommandResponse";
    encode(message: CommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommandResponse;
    fromJSON(object: any): CommandResponse;
    toJSON(message: CommandResponse): unknown;
    create<I extends Exact<DeepPartial<CommandResponse>, I>>(base?: I): CommandResponse;
    fromPartial<I extends Exact<DeepPartial<CommandResponse>, I>>(object: I): CommandResponse;
};
export declare const CommandResponse_ParamsEntry: {
    $type: "axelar.evm.v1beta1.CommandResponse.ParamsEntry";
    encode(message: CommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommandResponse_ParamsEntry;
    fromJSON(object: any): CommandResponse_ParamsEntry;
    toJSON(message: CommandResponse_ParamsEntry): unknown;
    create<I extends Exact<DeepPartial<CommandResponse_ParamsEntry>, I>>(base?: I): CommandResponse_ParamsEntry;
    fromPartial<I extends Exact<DeepPartial<CommandResponse_ParamsEntry>, I>>(object: I): CommandResponse_ParamsEntry;
};
export declare const PendingCommandsRequest: {
    $type: "axelar.evm.v1beta1.PendingCommandsRequest";
    encode(message: PendingCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingCommandsRequest;
    fromJSON(object: any): PendingCommandsRequest;
    toJSON(message: PendingCommandsRequest): unknown;
    create<I extends Exact<DeepPartial<PendingCommandsRequest>, I>>(base?: I): PendingCommandsRequest;
    fromPartial<I extends Exact<DeepPartial<PendingCommandsRequest>, I>>(object: I): PendingCommandsRequest;
};
export declare const PendingCommandsResponse: {
    $type: "axelar.evm.v1beta1.PendingCommandsResponse";
    encode(message: PendingCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingCommandsResponse;
    fromJSON(object: any): PendingCommandsResponse;
    toJSON(message: PendingCommandsResponse): unknown;
    create<I extends Exact<DeepPartial<PendingCommandsResponse>, I>>(base?: I): PendingCommandsResponse;
    fromPartial<I extends Exact<DeepPartial<PendingCommandsResponse>, I>>(object: I): PendingCommandsResponse;
};
export declare const QueryCommandResponse: {
    $type: "axelar.evm.v1beta1.QueryCommandResponse";
    encode(message: QueryCommandResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommandResponse;
    fromJSON(object: any): QueryCommandResponse;
    toJSON(message: QueryCommandResponse): unknown;
    create<I extends Exact<DeepPartial<QueryCommandResponse>, I>>(base?: I): QueryCommandResponse;
    fromPartial<I extends Exact<DeepPartial<QueryCommandResponse>, I>>(object: I): QueryCommandResponse;
};
export declare const QueryCommandResponse_ParamsEntry: {
    $type: "axelar.evm.v1beta1.QueryCommandResponse.ParamsEntry";
    encode(message: QueryCommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommandResponse_ParamsEntry;
    fromJSON(object: any): QueryCommandResponse_ParamsEntry;
    toJSON(message: QueryCommandResponse_ParamsEntry): unknown;
    create<I extends Exact<DeepPartial<QueryCommandResponse_ParamsEntry>, I>>(base?: I): QueryCommandResponse_ParamsEntry;
    fromPartial<I extends Exact<DeepPartial<QueryCommandResponse_ParamsEntry>, I>>(object: I): QueryCommandResponse_ParamsEntry;
};
export declare const BurnerInfoRequest: {
    $type: "axelar.evm.v1beta1.BurnerInfoRequest";
    encode(message: BurnerInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurnerInfoRequest;
    fromJSON(object: any): BurnerInfoRequest;
    toJSON(message: BurnerInfoRequest): unknown;
    create<I extends Exact<DeepPartial<BurnerInfoRequest>, I>>(base?: I): BurnerInfoRequest;
    fromPartial<I extends Exact<DeepPartial<BurnerInfoRequest>, I>>(object: I): BurnerInfoRequest;
};
export declare const BurnerInfoResponse: {
    $type: "axelar.evm.v1beta1.BurnerInfoResponse";
    encode(message: BurnerInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BurnerInfoResponse;
    fromJSON(object: any): BurnerInfoResponse;
    toJSON(message: BurnerInfoResponse): unknown;
    create<I extends Exact<DeepPartial<BurnerInfoResponse>, I>>(base?: I): BurnerInfoResponse;
    fromPartial<I extends Exact<DeepPartial<BurnerInfoResponse>, I>>(object: I): BurnerInfoResponse;
};
export declare const ConfirmationHeightRequest: {
    $type: "axelar.evm.v1beta1.ConfirmationHeightRequest";
    encode(message: ConfirmationHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmationHeightRequest;
    fromJSON(object: any): ConfirmationHeightRequest;
    toJSON(message: ConfirmationHeightRequest): unknown;
    create<I extends Exact<DeepPartial<ConfirmationHeightRequest>, I>>(base?: I): ConfirmationHeightRequest;
    fromPartial<I extends Exact<DeepPartial<ConfirmationHeightRequest>, I>>(object: I): ConfirmationHeightRequest;
};
export declare const ConfirmationHeightResponse: {
    $type: "axelar.evm.v1beta1.ConfirmationHeightResponse";
    encode(message: ConfirmationHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmationHeightResponse;
    fromJSON(object: any): ConfirmationHeightResponse;
    toJSON(message: ConfirmationHeightResponse): unknown;
    create<I extends Exact<DeepPartial<ConfirmationHeightResponse>, I>>(base?: I): ConfirmationHeightResponse;
    fromPartial<I extends Exact<DeepPartial<ConfirmationHeightResponse>, I>>(object: I): ConfirmationHeightResponse;
};
export declare const GatewayAddressRequest: {
    $type: "axelar.evm.v1beta1.GatewayAddressRequest";
    encode(message: GatewayAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GatewayAddressRequest;
    fromJSON(object: any): GatewayAddressRequest;
    toJSON(message: GatewayAddressRequest): unknown;
    create<I extends Exact<DeepPartial<GatewayAddressRequest>, I>>(base?: I): GatewayAddressRequest;
    fromPartial<I extends Exact<DeepPartial<GatewayAddressRequest>, I>>(object: I): GatewayAddressRequest;
};
export declare const GatewayAddressResponse: {
    $type: "axelar.evm.v1beta1.GatewayAddressResponse";
    encode(message: GatewayAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GatewayAddressResponse;
    fromJSON(object: any): GatewayAddressResponse;
    toJSON(message: GatewayAddressResponse): unknown;
    create<I extends Exact<DeepPartial<GatewayAddressResponse>, I>>(base?: I): GatewayAddressResponse;
    fromPartial<I extends Exact<DeepPartial<GatewayAddressResponse>, I>>(object: I): GatewayAddressResponse;
};
export declare const BytecodeRequest: {
    $type: "axelar.evm.v1beta1.BytecodeRequest";
    encode(message: BytecodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BytecodeRequest;
    fromJSON(object: any): BytecodeRequest;
    toJSON(message: BytecodeRequest): unknown;
    create<I extends Exact<DeepPartial<BytecodeRequest>, I>>(base?: I): BytecodeRequest;
    fromPartial<I extends Exact<DeepPartial<BytecodeRequest>, I>>(object: I): BytecodeRequest;
};
export declare const BytecodeResponse: {
    $type: "axelar.evm.v1beta1.BytecodeResponse";
    encode(message: BytecodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BytecodeResponse;
    fromJSON(object: any): BytecodeResponse;
    toJSON(message: BytecodeResponse): unknown;
    create<I extends Exact<DeepPartial<BytecodeResponse>, I>>(base?: I): BytecodeResponse;
    fromPartial<I extends Exact<DeepPartial<BytecodeResponse>, I>>(object: I): BytecodeResponse;
};
export declare const ERC20TokensRequest: {
    $type: "axelar.evm.v1beta1.ERC20TokensRequest";
    encode(message: ERC20TokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokensRequest;
    fromJSON(object: any): ERC20TokensRequest;
    toJSON(message: ERC20TokensRequest): unknown;
    create<I extends Exact<DeepPartial<ERC20TokensRequest>, I>>(base?: I): ERC20TokensRequest;
    fromPartial<I extends Exact<DeepPartial<ERC20TokensRequest>, I>>(object: I): ERC20TokensRequest;
};
export declare const ERC20TokensResponse: {
    $type: "axelar.evm.v1beta1.ERC20TokensResponse";
    encode(message: ERC20TokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokensResponse;
    fromJSON(object: any): ERC20TokensResponse;
    toJSON(message: ERC20TokensResponse): unknown;
    create<I extends Exact<DeepPartial<ERC20TokensResponse>, I>>(base?: I): ERC20TokensResponse;
    fromPartial<I extends Exact<DeepPartial<ERC20TokensResponse>, I>>(object: I): ERC20TokensResponse;
};
export declare const ERC20TokensResponse_Token: {
    $type: "axelar.evm.v1beta1.ERC20TokensResponse.Token";
    encode(message: ERC20TokensResponse_Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ERC20TokensResponse_Token;
    fromJSON(object: any): ERC20TokensResponse_Token;
    toJSON(message: ERC20TokensResponse_Token): unknown;
    create<I extends Exact<DeepPartial<ERC20TokensResponse_Token>, I>>(base?: I): ERC20TokensResponse_Token;
    fromPartial<I extends Exact<DeepPartial<ERC20TokensResponse_Token>, I>>(object: I): ERC20TokensResponse_Token;
};
export declare const TokenInfoRequest: {
    $type: "axelar.evm.v1beta1.TokenInfoRequest";
    encode(message: TokenInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenInfoRequest;
    fromJSON(object: any): TokenInfoRequest;
    toJSON(message: TokenInfoRequest): unknown;
    create<I extends Exact<DeepPartial<TokenInfoRequest>, I>>(base?: I): TokenInfoRequest;
    fromPartial<I extends Exact<DeepPartial<TokenInfoRequest>, I>>(object: I): TokenInfoRequest;
};
export declare const TokenInfoResponse: {
    $type: "axelar.evm.v1beta1.TokenInfoResponse";
    encode(message: TokenInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenInfoResponse;
    fromJSON(object: any): TokenInfoResponse;
    toJSON(message: TokenInfoResponse): unknown;
    create<I extends Exact<DeepPartial<TokenInfoResponse>, I>>(base?: I): TokenInfoResponse;
    fromPartial<I extends Exact<DeepPartial<TokenInfoResponse>, I>>(object: I): TokenInfoResponse;
};
export declare const Proof: {
    $type: "axelar.evm.v1beta1.Proof";
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    create<I extends Exact<DeepPartial<Proof>, I>>(base?: I): Proof;
    fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof;
};
export declare const ParamsRequest: {
    $type: "axelar.evm.v1beta1.ParamsRequest";
    encode(message: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(object: any): ParamsRequest;
    toJSON(message: ParamsRequest): unknown;
    create<I extends Exact<DeepPartial<ParamsRequest>, I>>(base?: I): ParamsRequest;
    fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(object: I): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.evm.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends Exact<DeepPartial<ParamsResponse>, I>>(base?: I): ParamsResponse;
    fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse;
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
