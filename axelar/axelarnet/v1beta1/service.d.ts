import { ChainByIBCPathRequest, ChainByIBCPathResponse, IBCPathRequest, IBCPathResponse, ParamsRequest, ParamsResponse, PendingIBCTransferCountRequest, PendingIBCTransferCountResponse } from "./query";
import { AddCosmosBasedChainRequest, AddCosmosBasedChainResponse, CallContractRequest, CallContractResponse, ConfirmDepositRequest, ConfirmDepositResponse, ExecutePendingTransfersRequest, ExecutePendingTransfersResponse, LinkRequest, LinkResponse, RegisterAssetRequest, RegisterAssetResponse, RegisterFeeCollectorRequest, RegisterFeeCollectorResponse, RetryIBCTransferRequest, RetryIBCTransferResponse, RouteIBCTransfersRequest, RouteIBCTransfersResponse, RouteMessageRequest, RouteMessageResponse } from "./tx";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/** Msg defines the axelarnet Msg service. */
export interface MsgService {
    Link(request: LinkRequest): Promise<LinkResponse>;
    ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
    ExecutePendingTransfers(request: ExecutePendingTransfersRequest): Promise<ExecutePendingTransfersResponse>;
    AddCosmosBasedChain(request: AddCosmosBasedChainRequest): Promise<AddCosmosBasedChainResponse>;
    RegisterAsset(request: RegisterAssetRequest): Promise<RegisterAssetResponse>;
    RouteIBCTransfers(request: RouteIBCTransfersRequest): Promise<RouteIBCTransfersResponse>;
    RegisterFeeCollector(request: RegisterFeeCollectorRequest): Promise<RegisterFeeCollectorResponse>;
    RetryIBCTransfer(request: RetryIBCTransferRequest): Promise<RetryIBCTransferResponse>;
    RouteMessage(request: RouteMessageRequest): Promise<RouteMessageResponse>;
    CallContract(request: CallContractRequest): Promise<CallContractResponse>;
}
export declare const MsgServiceServiceName = "axelar.axelarnet.v1beta1.MsgService";
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Link(request: LinkRequest): Promise<LinkResponse>;
    ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
    ExecutePendingTransfers(request: ExecutePendingTransfersRequest): Promise<ExecutePendingTransfersResponse>;
    AddCosmosBasedChain(request: AddCosmosBasedChainRequest): Promise<AddCosmosBasedChainResponse>;
    RegisterAsset(request: RegisterAssetRequest): Promise<RegisterAssetResponse>;
    RouteIBCTransfers(request: RouteIBCTransfersRequest): Promise<RouteIBCTransfersResponse>;
    RegisterFeeCollector(request: RegisterFeeCollectorRequest): Promise<RegisterFeeCollectorResponse>;
    RetryIBCTransfer(request: RetryIBCTransferRequest): Promise<RetryIBCTransferResponse>;
    RouteMessage(request: RouteMessageRequest): Promise<RouteMessageResponse>;
    CallContract(request: CallContractRequest): Promise<CallContractResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    /** PendingIBCTransferCount queries the pending ibc transfers for all chains */
    PendingIBCTransferCount(request: PendingIBCTransferCountRequest): Promise<PendingIBCTransferCountResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
    IBCPath(request: IBCPathRequest): Promise<IBCPathResponse>;
    ChainByIBCPath(request: ChainByIBCPathRequest): Promise<ChainByIBCPathResponse>;
}
export declare const QueryServiceServiceName = "axelar.axelarnet.v1beta1.QueryService";
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    PendingIBCTransferCount(request: PendingIBCTransferCountRequest): Promise<PendingIBCTransferCountResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
    IBCPath(request: IBCPathRequest): Promise<IBCPathResponse>;
    ChainByIBCPath(request: ChainByIBCPathRequest): Promise<ChainByIBCPathResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
