import { AssetsRequest, AssetsResponse, ChainMaintainersRequest, ChainMaintainersResponse, ChainsByAssetRequest, ChainsByAssetResponse, ChainsRequest, ChainsResponse, ChainStateRequest, ChainStateResponse, FeeInfoRequest, FeeInfoResponse, LatestDepositAddressRequest, LatestDepositAddressResponse, LinkDepositEnabledRequest, LinkDepositEnabledResponse, MessageRequest, MessageResponse, ParamsRequest, ParamsResponse, RecipientAddressRequest, RecipientAddressResponse, TransferFeeRequest, TransferFeeResponse, TransferRateLimitRequest, TransferRateLimitResponse, TransfersForChainRequest, TransfersForChainResponse } from "./query";
import { ActivateChainRequest, ActivateChainResponse, DeactivateChainRequest, DeactivateChainResponse, DeregisterChainMaintainerRequest, DeregisterChainMaintainerResponse, DisableLinkDepositRequest, DisableLinkDepositResponse, EnableLinkDepositRequest, EnableLinkDepositResponse, RegisterAssetFeeRequest, RegisterAssetFeeResponse, RegisterChainMaintainerRequest, RegisterChainMaintainerResponse, SetTransferRateLimitRequest, SetTransferRateLimitResponse, UpdateParamsRequest, UpdateParamsResponse } from "./tx";
export declare const protobufPackage = "axelar.nexus.v1beta1";
/** Msg defines the nexus Msg service. */
export interface MsgService {
    RegisterChainMaintainer(request: RegisterChainMaintainerRequest): Promise<RegisterChainMaintainerResponse>;
    DeregisterChainMaintainer(request: DeregisterChainMaintainerRequest): Promise<DeregisterChainMaintainerResponse>;
    ActivateChain(request: ActivateChainRequest): Promise<ActivateChainResponse>;
    DeactivateChain(request: DeactivateChainRequest): Promise<DeactivateChainResponse>;
    RegisterAssetFee(request: RegisterAssetFeeRequest): Promise<RegisterAssetFeeResponse>;
    SetTransferRateLimit(request: SetTransferRateLimitRequest): Promise<SetTransferRateLimitResponse>;
    EnableLinkDeposit(request: EnableLinkDepositRequest): Promise<EnableLinkDepositResponse>;
    DisableLinkDeposit(request: DisableLinkDepositRequest): Promise<DisableLinkDepositResponse>;
    UpdateParams(request: UpdateParamsRequest): Promise<UpdateParamsResponse>;
}
export declare const MsgServiceServiceName = "axelar.nexus.v1beta1.MsgService";
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    RegisterChainMaintainer(request: RegisterChainMaintainerRequest): Promise<RegisterChainMaintainerResponse>;
    DeregisterChainMaintainer(request: DeregisterChainMaintainerRequest): Promise<DeregisterChainMaintainerResponse>;
    ActivateChain(request: ActivateChainRequest): Promise<ActivateChainResponse>;
    DeactivateChain(request: DeactivateChainRequest): Promise<DeactivateChainResponse>;
    RegisterAssetFee(request: RegisterAssetFeeRequest): Promise<RegisterAssetFeeResponse>;
    SetTransferRateLimit(request: SetTransferRateLimitRequest): Promise<SetTransferRateLimitResponse>;
    EnableLinkDeposit(request: EnableLinkDepositRequest): Promise<EnableLinkDepositResponse>;
    DisableLinkDeposit(request: DisableLinkDepositRequest): Promise<DisableLinkDepositResponse>;
    UpdateParams(request: UpdateParamsRequest): Promise<UpdateParamsResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    /** LatestDepositAddress queries the a deposit address by recipient */
    LatestDepositAddress(request: LatestDepositAddressRequest): Promise<LatestDepositAddressResponse>;
    /** TransfersForChain queries transfers by chain */
    TransfersForChain(request: TransfersForChainRequest): Promise<TransfersForChainResponse>;
    /** FeeInfo queries the fee info by chain and asset */
    FeeInfo(request: FeeInfoRequest): Promise<FeeInfoResponse>;
    /**
     * TransferFee queries the transfer fee by the source, destination chain,
     * and amount. If amount is 0, the min fee is returned
     */
    TransferFee(request: TransferFeeRequest): Promise<TransferFeeResponse>;
    /** Chains queries the chains registered on the network */
    Chains(request: ChainsRequest): Promise<ChainsResponse>;
    /** Assets queries the assets registered for a chain */
    Assets(request: AssetsRequest): Promise<AssetsResponse>;
    /** ChainState queries the state of a registered chain on the network */
    ChainState(request: ChainStateRequest): Promise<ChainStateResponse>;
    /** ChainsByAsset queries the chains that support an asset on the network */
    ChainsByAsset(request: ChainsByAssetRequest): Promise<ChainsByAssetResponse>;
    /** RecipientAddress queries the recipient address for a given deposit address */
    RecipientAddress(request: RecipientAddressRequest): Promise<RecipientAddressResponse>;
    /** ChainMaintainers queries the chain maintainers for a given chain */
    ChainMaintainers(request: ChainMaintainersRequest): Promise<ChainMaintainersResponse>;
    /**
     * TransferRateLimit queries the transfer rate limit for a given chain and
     * asset. If a rate limit is not set, nil is returned.
     */
    TransferRateLimit(request: TransferRateLimitRequest): Promise<TransferRateLimitResponse>;
    Message(request: MessageRequest): Promise<MessageResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
    LinkDepositEnabled(request: LinkDepositEnabledRequest): Promise<LinkDepositEnabledResponse>;
}
export declare const QueryServiceServiceName = "axelar.nexus.v1beta1.QueryService";
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    LatestDepositAddress(request: LatestDepositAddressRequest): Promise<LatestDepositAddressResponse>;
    TransfersForChain(request: TransfersForChainRequest): Promise<TransfersForChainResponse>;
    FeeInfo(request: FeeInfoRequest): Promise<FeeInfoResponse>;
    TransferFee(request: TransferFeeRequest): Promise<TransferFeeResponse>;
    Chains(request: ChainsRequest): Promise<ChainsResponse>;
    Assets(request: AssetsRequest): Promise<AssetsResponse>;
    ChainState(request: ChainStateRequest): Promise<ChainStateResponse>;
    ChainsByAsset(request: ChainsByAssetRequest): Promise<ChainsByAssetResponse>;
    RecipientAddress(request: RecipientAddressRequest): Promise<RecipientAddressResponse>;
    ChainMaintainers(request: ChainMaintainersRequest): Promise<ChainMaintainersResponse>;
    TransferRateLimit(request: TransferRateLimitRequest): Promise<TransferRateLimitResponse>;
    Message(request: MessageRequest): Promise<MessageResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
    LinkDepositEnabled(request: LinkDepositEnabledRequest): Promise<LinkDepositEnabledResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
