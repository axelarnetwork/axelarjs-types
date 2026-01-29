import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { CrossChainTransfer, FeeInfo, GeneralMessage, TransferState } from "../exported/v1beta1/types";
import { Params } from "./params";
import { ChainState } from "./types";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export declare enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_ACTIVATED = 1,
    CHAIN_STATUS_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare function chainStatusFromJSON(object: any): ChainStatus;
export declare function chainStatusToJSON(object: ChainStatus): string;
/**
 * ChainMaintainersRequest represents a message that queries
 * the chain maintainers for the specified chain
 */
export interface ChainMaintainersRequest {
    $type: "axelar.nexus.v1beta1.ChainMaintainersRequest";
    chain: string;
}
export interface ChainMaintainersResponse {
    $type: "axelar.nexus.v1beta1.ChainMaintainersResponse";
    maintainers: Buffer[];
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequest {
    $type: "axelar.nexus.v1beta1.LatestDepositAddressRequest";
    recipientAddr: string;
    recipientChain: string;
    depositChain: string;
}
export interface LatestDepositAddressResponse {
    $type: "axelar.nexus.v1beta1.LatestDepositAddressResponse";
    depositAddr: string;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequest {
    $type: "axelar.nexus.v1beta1.TransfersForChainRequest";
    chain: string;
    state: TransferState;
    pagination?: PageRequest | undefined;
}
export interface TransfersForChainResponse {
    $type: "axelar.nexus.v1beta1.TransfersForChainResponse";
    transfers: CrossChainTransfer[];
    pagination?: PageResponse | undefined;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
    $type: "axelar.nexus.v1beta1.FeeInfoRequest";
    chain: string;
    asset: string;
}
export interface FeeInfoResponse {
    $type: "axelar.nexus.v1beta1.FeeInfoResponse";
    feeInfo?: FeeInfo | undefined;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequest {
    $type: "axelar.nexus.v1beta1.TransferFeeRequest";
    sourceChain: string;
    destinationChain: string;
    amount: string;
}
export interface TransferFeeResponse {
    $type: "axelar.nexus.v1beta1.TransferFeeResponse";
    fee?: Coin | undefined;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequest {
    $type: "axelar.nexus.v1beta1.ChainsRequest";
    status: ChainStatus;
}
export interface ChainsResponse {
    $type: "axelar.nexus.v1beta1.ChainsResponse";
    chains: string[];
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequest {
    $type: "axelar.nexus.v1beta1.AssetsRequest";
    chain: string;
}
export interface AssetsResponse {
    $type: "axelar.nexus.v1beta1.AssetsResponse";
    assets: string[];
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequest {
    $type: "axelar.nexus.v1beta1.ChainStateRequest";
    chain: string;
}
export interface ChainStateResponse {
    $type: "axelar.nexus.v1beta1.ChainStateResponse";
    state?: ChainState | undefined;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequest {
    $type: "axelar.nexus.v1beta1.ChainsByAssetRequest";
    asset: string;
}
export interface ChainsByAssetResponse {
    $type: "axelar.nexus.v1beta1.ChainsByAssetResponse";
    chains: string[];
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequest {
    $type: "axelar.nexus.v1beta1.RecipientAddressRequest";
    depositAddr: string;
    depositChain: string;
}
export interface RecipientAddressResponse {
    $type: "axelar.nexus.v1beta1.RecipientAddressResponse";
    recipientAddr: string;
    recipientChain: string;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequest {
    $type: "axelar.nexus.v1beta1.TransferRateLimitRequest";
    chain: string;
    asset: string;
}
export interface TransferRateLimitResponse {
    $type: "axelar.nexus.v1beta1.TransferRateLimitResponse";
    transferRateLimit?: TransferRateLimit | undefined;
}
export interface TransferRateLimit {
    $type: "axelar.nexus.v1beta1.TransferRateLimit";
    limit: Buffer;
    window?: Duration | undefined;
    /** @deprecated */
    incoming: Buffer;
    /** @deprecated */
    outgoing: Buffer;
    /** time_left indicates the time left in the rate limit window */
    timeLeft?: Duration | undefined;
    from: Buffer;
    to: Buffer;
}
export interface MessageRequest {
    $type: "axelar.nexus.v1beta1.MessageRequest";
    id: string;
}
export interface MessageResponse {
    $type: "axelar.nexus.v1beta1.MessageResponse";
    message?: GeneralMessage | undefined;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.nexus.v1beta1.ParamsRequest";
}
export interface ParamsResponse {
    $type: "axelar.nexus.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
/**
 * LinkDepositEnabledRequest represents a message that queries whether the
 * link-deposit protocol is enabled
 */
export interface LinkDepositEnabledRequest {
    $type: "axelar.nexus.v1beta1.LinkDepositEnabledRequest";
}
export interface LinkDepositEnabledResponse {
    $type: "axelar.nexus.v1beta1.LinkDepositEnabledResponse";
    enabled: boolean;
}
export declare const ChainMaintainersRequest: {
    $type: "axelar.nexus.v1beta1.ChainMaintainersRequest";
    encode(message: ChainMaintainersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainMaintainersRequest;
    fromJSON(object: any): ChainMaintainersRequest;
    toJSON(message: ChainMaintainersRequest): unknown;
    create<I extends Exact<DeepPartial<ChainMaintainersRequest>, I>>(base?: I): ChainMaintainersRequest;
    fromPartial<I extends Exact<DeepPartial<ChainMaintainersRequest>, I>>(object: I): ChainMaintainersRequest;
};
export declare const ChainMaintainersResponse: {
    $type: "axelar.nexus.v1beta1.ChainMaintainersResponse";
    encode(message: ChainMaintainersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainMaintainersResponse;
    fromJSON(object: any): ChainMaintainersResponse;
    toJSON(message: ChainMaintainersResponse): unknown;
    create<I extends Exact<DeepPartial<ChainMaintainersResponse>, I>>(base?: I): ChainMaintainersResponse;
    fromPartial<I extends Exact<DeepPartial<ChainMaintainersResponse>, I>>(object: I): ChainMaintainersResponse;
};
export declare const LatestDepositAddressRequest: {
    $type: "axelar.nexus.v1beta1.LatestDepositAddressRequest";
    encode(message: LatestDepositAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LatestDepositAddressRequest;
    fromJSON(object: any): LatestDepositAddressRequest;
    toJSON(message: LatestDepositAddressRequest): unknown;
    create<I extends Exact<DeepPartial<LatestDepositAddressRequest>, I>>(base?: I): LatestDepositAddressRequest;
    fromPartial<I extends Exact<DeepPartial<LatestDepositAddressRequest>, I>>(object: I): LatestDepositAddressRequest;
};
export declare const LatestDepositAddressResponse: {
    $type: "axelar.nexus.v1beta1.LatestDepositAddressResponse";
    encode(message: LatestDepositAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LatestDepositAddressResponse;
    fromJSON(object: any): LatestDepositAddressResponse;
    toJSON(message: LatestDepositAddressResponse): unknown;
    create<I extends Exact<DeepPartial<LatestDepositAddressResponse>, I>>(base?: I): LatestDepositAddressResponse;
    fromPartial<I extends Exact<DeepPartial<LatestDepositAddressResponse>, I>>(object: I): LatestDepositAddressResponse;
};
export declare const TransfersForChainRequest: {
    $type: "axelar.nexus.v1beta1.TransfersForChainRequest";
    encode(message: TransfersForChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransfersForChainRequest;
    fromJSON(object: any): TransfersForChainRequest;
    toJSON(message: TransfersForChainRequest): unknown;
    create<I extends Exact<DeepPartial<TransfersForChainRequest>, I>>(base?: I): TransfersForChainRequest;
    fromPartial<I extends Exact<DeepPartial<TransfersForChainRequest>, I>>(object: I): TransfersForChainRequest;
};
export declare const TransfersForChainResponse: {
    $type: "axelar.nexus.v1beta1.TransfersForChainResponse";
    encode(message: TransfersForChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransfersForChainResponse;
    fromJSON(object: any): TransfersForChainResponse;
    toJSON(message: TransfersForChainResponse): unknown;
    create<I extends Exact<DeepPartial<TransfersForChainResponse>, I>>(base?: I): TransfersForChainResponse;
    fromPartial<I extends Exact<DeepPartial<TransfersForChainResponse>, I>>(object: I): TransfersForChainResponse;
};
export declare const FeeInfoRequest: {
    $type: "axelar.nexus.v1beta1.FeeInfoRequest";
    encode(message: FeeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeInfoRequest;
    fromJSON(object: any): FeeInfoRequest;
    toJSON(message: FeeInfoRequest): unknown;
    create<I extends Exact<DeepPartial<FeeInfoRequest>, I>>(base?: I): FeeInfoRequest;
    fromPartial<I extends Exact<DeepPartial<FeeInfoRequest>, I>>(object: I): FeeInfoRequest;
};
export declare const FeeInfoResponse: {
    $type: "axelar.nexus.v1beta1.FeeInfoResponse";
    encode(message: FeeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeInfoResponse;
    fromJSON(object: any): FeeInfoResponse;
    toJSON(message: FeeInfoResponse): unknown;
    create<I extends Exact<DeepPartial<FeeInfoResponse>, I>>(base?: I): FeeInfoResponse;
    fromPartial<I extends Exact<DeepPartial<FeeInfoResponse>, I>>(object: I): FeeInfoResponse;
};
export declare const TransferFeeRequest: {
    $type: "axelar.nexus.v1beta1.TransferFeeRequest";
    encode(message: TransferFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferFeeRequest;
    fromJSON(object: any): TransferFeeRequest;
    toJSON(message: TransferFeeRequest): unknown;
    create<I extends Exact<DeepPartial<TransferFeeRequest>, I>>(base?: I): TransferFeeRequest;
    fromPartial<I extends Exact<DeepPartial<TransferFeeRequest>, I>>(object: I): TransferFeeRequest;
};
export declare const TransferFeeResponse: {
    $type: "axelar.nexus.v1beta1.TransferFeeResponse";
    encode(message: TransferFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferFeeResponse;
    fromJSON(object: any): TransferFeeResponse;
    toJSON(message: TransferFeeResponse): unknown;
    create<I extends Exact<DeepPartial<TransferFeeResponse>, I>>(base?: I): TransferFeeResponse;
    fromPartial<I extends Exact<DeepPartial<TransferFeeResponse>, I>>(object: I): TransferFeeResponse;
};
export declare const ChainsRequest: {
    $type: "axelar.nexus.v1beta1.ChainsRequest";
    encode(message: ChainsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsRequest;
    fromJSON(object: any): ChainsRequest;
    toJSON(message: ChainsRequest): unknown;
    create<I extends Exact<DeepPartial<ChainsRequest>, I>>(base?: I): ChainsRequest;
    fromPartial<I extends Exact<DeepPartial<ChainsRequest>, I>>(object: I): ChainsRequest;
};
export declare const ChainsResponse: {
    $type: "axelar.nexus.v1beta1.ChainsResponse";
    encode(message: ChainsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsResponse;
    fromJSON(object: any): ChainsResponse;
    toJSON(message: ChainsResponse): unknown;
    create<I extends Exact<DeepPartial<ChainsResponse>, I>>(base?: I): ChainsResponse;
    fromPartial<I extends Exact<DeepPartial<ChainsResponse>, I>>(object: I): ChainsResponse;
};
export declare const AssetsRequest: {
    $type: "axelar.nexus.v1beta1.AssetsRequest";
    encode(message: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetsRequest;
    fromJSON(object: any): AssetsRequest;
    toJSON(message: AssetsRequest): unknown;
    create<I extends Exact<DeepPartial<AssetsRequest>, I>>(base?: I): AssetsRequest;
    fromPartial<I extends Exact<DeepPartial<AssetsRequest>, I>>(object: I): AssetsRequest;
};
export declare const AssetsResponse: {
    $type: "axelar.nexus.v1beta1.AssetsResponse";
    encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetsResponse;
    fromJSON(object: any): AssetsResponse;
    toJSON(message: AssetsResponse): unknown;
    create<I extends Exact<DeepPartial<AssetsResponse>, I>>(base?: I): AssetsResponse;
    fromPartial<I extends Exact<DeepPartial<AssetsResponse>, I>>(object: I): AssetsResponse;
};
export declare const ChainStateRequest: {
    $type: "axelar.nexus.v1beta1.ChainStateRequest";
    encode(message: ChainStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainStateRequest;
    fromJSON(object: any): ChainStateRequest;
    toJSON(message: ChainStateRequest): unknown;
    create<I extends Exact<DeepPartial<ChainStateRequest>, I>>(base?: I): ChainStateRequest;
    fromPartial<I extends Exact<DeepPartial<ChainStateRequest>, I>>(object: I): ChainStateRequest;
};
export declare const ChainStateResponse: {
    $type: "axelar.nexus.v1beta1.ChainStateResponse";
    encode(message: ChainStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainStateResponse;
    fromJSON(object: any): ChainStateResponse;
    toJSON(message: ChainStateResponse): unknown;
    create<I extends Exact<DeepPartial<ChainStateResponse>, I>>(base?: I): ChainStateResponse;
    fromPartial<I extends Exact<DeepPartial<ChainStateResponse>, I>>(object: I): ChainStateResponse;
};
export declare const ChainsByAssetRequest: {
    $type: "axelar.nexus.v1beta1.ChainsByAssetRequest";
    encode(message: ChainsByAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsByAssetRequest;
    fromJSON(object: any): ChainsByAssetRequest;
    toJSON(message: ChainsByAssetRequest): unknown;
    create<I extends Exact<DeepPartial<ChainsByAssetRequest>, I>>(base?: I): ChainsByAssetRequest;
    fromPartial<I extends Exact<DeepPartial<ChainsByAssetRequest>, I>>(object: I): ChainsByAssetRequest;
};
export declare const ChainsByAssetResponse: {
    $type: "axelar.nexus.v1beta1.ChainsByAssetResponse";
    encode(message: ChainsByAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainsByAssetResponse;
    fromJSON(object: any): ChainsByAssetResponse;
    toJSON(message: ChainsByAssetResponse): unknown;
    create<I extends Exact<DeepPartial<ChainsByAssetResponse>, I>>(base?: I): ChainsByAssetResponse;
    fromPartial<I extends Exact<DeepPartial<ChainsByAssetResponse>, I>>(object: I): ChainsByAssetResponse;
};
export declare const RecipientAddressRequest: {
    $type: "axelar.nexus.v1beta1.RecipientAddressRequest";
    encode(message: RecipientAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecipientAddressRequest;
    fromJSON(object: any): RecipientAddressRequest;
    toJSON(message: RecipientAddressRequest): unknown;
    create<I extends Exact<DeepPartial<RecipientAddressRequest>, I>>(base?: I): RecipientAddressRequest;
    fromPartial<I extends Exact<DeepPartial<RecipientAddressRequest>, I>>(object: I): RecipientAddressRequest;
};
export declare const RecipientAddressResponse: {
    $type: "axelar.nexus.v1beta1.RecipientAddressResponse";
    encode(message: RecipientAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecipientAddressResponse;
    fromJSON(object: any): RecipientAddressResponse;
    toJSON(message: RecipientAddressResponse): unknown;
    create<I extends Exact<DeepPartial<RecipientAddressResponse>, I>>(base?: I): RecipientAddressResponse;
    fromPartial<I extends Exact<DeepPartial<RecipientAddressResponse>, I>>(object: I): RecipientAddressResponse;
};
export declare const TransferRateLimitRequest: {
    $type: "axelar.nexus.v1beta1.TransferRateLimitRequest";
    encode(message: TransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferRateLimitRequest;
    fromJSON(object: any): TransferRateLimitRequest;
    toJSON(message: TransferRateLimitRequest): unknown;
    create<I extends Exact<DeepPartial<TransferRateLimitRequest>, I>>(base?: I): TransferRateLimitRequest;
    fromPartial<I extends Exact<DeepPartial<TransferRateLimitRequest>, I>>(object: I): TransferRateLimitRequest;
};
export declare const TransferRateLimitResponse: {
    $type: "axelar.nexus.v1beta1.TransferRateLimitResponse";
    encode(message: TransferRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferRateLimitResponse;
    fromJSON(object: any): TransferRateLimitResponse;
    toJSON(message: TransferRateLimitResponse): unknown;
    create<I extends Exact<DeepPartial<TransferRateLimitResponse>, I>>(base?: I): TransferRateLimitResponse;
    fromPartial<I extends Exact<DeepPartial<TransferRateLimitResponse>, I>>(object: I): TransferRateLimitResponse;
};
export declare const TransferRateLimit: {
    $type: "axelar.nexus.v1beta1.TransferRateLimit";
    encode(message: TransferRateLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferRateLimit;
    fromJSON(object: any): TransferRateLimit;
    toJSON(message: TransferRateLimit): unknown;
    create<I extends Exact<DeepPartial<TransferRateLimit>, I>>(base?: I): TransferRateLimit;
    fromPartial<I extends Exact<DeepPartial<TransferRateLimit>, I>>(object: I): TransferRateLimit;
};
export declare const MessageRequest: {
    $type: "axelar.nexus.v1beta1.MessageRequest";
    encode(message: MessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageRequest;
    fromJSON(object: any): MessageRequest;
    toJSON(message: MessageRequest): unknown;
    create<I extends Exact<DeepPartial<MessageRequest>, I>>(base?: I): MessageRequest;
    fromPartial<I extends Exact<DeepPartial<MessageRequest>, I>>(object: I): MessageRequest;
};
export declare const MessageResponse: {
    $type: "axelar.nexus.v1beta1.MessageResponse";
    encode(message: MessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageResponse;
    fromJSON(object: any): MessageResponse;
    toJSON(message: MessageResponse): unknown;
    create<I extends Exact<DeepPartial<MessageResponse>, I>>(base?: I): MessageResponse;
    fromPartial<I extends Exact<DeepPartial<MessageResponse>, I>>(object: I): MessageResponse;
};
export declare const ParamsRequest: {
    $type: "axelar.nexus.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends Exact<DeepPartial<ParamsRequest>, I>>(base?: I): ParamsRequest;
    fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.nexus.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends Exact<DeepPartial<ParamsResponse>, I>>(base?: I): ParamsResponse;
    fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse;
};
export declare const LinkDepositEnabledRequest: {
    $type: "axelar.nexus.v1beta1.LinkDepositEnabledRequest";
    encode(_: LinkDepositEnabledRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkDepositEnabledRequest;
    fromJSON(_: any): LinkDepositEnabledRequest;
    toJSON(_: LinkDepositEnabledRequest): unknown;
    create<I extends Exact<DeepPartial<LinkDepositEnabledRequest>, I>>(base?: I): LinkDepositEnabledRequest;
    fromPartial<I extends Exact<DeepPartial<LinkDepositEnabledRequest>, I>>(_: I): LinkDepositEnabledRequest;
};
export declare const LinkDepositEnabledResponse: {
    $type: "axelar.nexus.v1beta1.LinkDepositEnabledResponse";
    encode(message: LinkDepositEnabledResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkDepositEnabledResponse;
    fromJSON(object: any): LinkDepositEnabledResponse;
    toJSON(message: LinkDepositEnabledResponse): unknown;
    create<I extends Exact<DeepPartial<LinkDepositEnabledResponse>, I>>(base?: I): LinkDepositEnabledResponse;
    fromPartial<I extends Exact<DeepPartial<LinkDepositEnabledResponse>, I>>(object: I): LinkDepositEnabledResponse;
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
