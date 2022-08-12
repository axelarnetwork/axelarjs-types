import { LinkResponse, ConfirmDepositResponse, ExecutePendingTransfersResponse, RegisterIBCPathResponse, AddCosmosBasedChainResponse, RegisterAssetResponse, RouteIBCTransfersResponse, RegisterFeeCollectorResponse, LinkRequest, ConfirmDepositRequest, ExecutePendingTransfersRequest, RegisterIBCPathRequest, AddCosmosBasedChainRequest, RegisterAssetRequest, RouteIBCTransfersRequest, RegisterFeeCollectorRequest } from "../../../axelar/axelarnet/v1beta1/tx";
import { PendingIBCTransferCountResponse, PendingIBCTransferCountRequest } from "../../../axelar/axelarnet/v1beta1/query";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/** Msg defines the axelarnet Msg service. */
export interface MsgService {
    Link(request: LinkRequest): Promise<LinkResponse>;
    ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
    ExecutePendingTransfers(request: ExecutePendingTransfersRequest): Promise<ExecutePendingTransfersResponse>;
    RegisterIBCPath(request: RegisterIBCPathRequest): Promise<RegisterIBCPathResponse>;
    AddCosmosBasedChain(request: AddCosmosBasedChainRequest): Promise<AddCosmosBasedChainResponse>;
    RegisterAsset(request: RegisterAssetRequest): Promise<RegisterAssetResponse>;
    RouteIBCTransfers(request: RouteIBCTransfersRequest): Promise<RouteIBCTransfersResponse>;
    RegisterFeeCollector(request: RegisterFeeCollectorRequest): Promise<RegisterFeeCollectorResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    Link(request: LinkRequest): Promise<LinkResponse>;
    ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
    ExecutePendingTransfers(request: ExecutePendingTransfersRequest): Promise<ExecutePendingTransfersResponse>;
    RegisterIBCPath(request: RegisterIBCPathRequest): Promise<RegisterIBCPathResponse>;
    AddCosmosBasedChain(request: AddCosmosBasedChainRequest): Promise<AddCosmosBasedChainResponse>;
    RegisterAsset(request: RegisterAssetRequest): Promise<RegisterAssetResponse>;
    RouteIBCTransfers(request: RouteIBCTransfersRequest): Promise<RouteIBCTransfersResponse>;
    RegisterFeeCollector(request: RegisterFeeCollectorRequest): Promise<RegisterFeeCollectorResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    /** PendingIBCTransferCount queries the pending ibc transfers for all chains */
    PendingIBCTransferCount(request: PendingIBCTransferCountRequest): Promise<PendingIBCTransferCountResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    PendingIBCTransferCount(request: PendingIBCTransferCountRequest): Promise<PendingIBCTransferCountResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
