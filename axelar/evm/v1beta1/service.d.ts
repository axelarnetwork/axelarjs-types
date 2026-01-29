import { BatchedCommandsRequest, BatchedCommandsResponse, BurnerInfoRequest, BurnerInfoResponse, BytecodeRequest, BytecodeResponse, ChainsRequest, ChainsResponse, CommandRequest, CommandResponse, ConfirmationHeightRequest, ConfirmationHeightResponse, DepositStateRequest, DepositStateResponse, ERC20TokensRequest, ERC20TokensResponse, EventRequest, EventResponse, GatewayAddressRequest, GatewayAddressResponse, KeyAddressRequest, KeyAddressResponse, ParamsRequest, ParamsResponse, PendingCommandsRequest, PendingCommandsResponse, TokenInfoRequest, TokenInfoResponse } from "./query";
import { AddChainRequest, AddChainResponse, ConfirmDepositRequest, ConfirmDepositResponse, ConfirmGatewayTxRequest, ConfirmGatewayTxResponse, ConfirmGatewayTxsRequest, ConfirmGatewayTxsResponse, ConfirmTokenRequest, ConfirmTokenResponse, ConfirmTransferKeyRequest, ConfirmTransferKeyResponse, CreateBurnTokensRequest, CreateBurnTokensResponse, CreateDeployTokenRequest, CreateDeployTokenResponse, CreatePendingTransfersRequest, CreatePendingTransfersResponse, CreateTransferOperatorshipRequest, CreateTransferOperatorshipResponse, LinkRequest, LinkResponse, RetryFailedEventRequest, RetryFailedEventResponse, SetGatewayRequest, SetGatewayResponse, SignCommandsRequest, SignCommandsResponse, UpdateParamsRequest, UpdateParamsResponse } from "./tx";
export declare const protobufPackage = "axelar.evm.v1beta1";
/** Msg defines the evm Msg service. */
export interface MsgService {
    SetGateway(request: SetGatewayRequest): Promise<SetGatewayResponse>;
    /** Deprecated: use ConfirmGatewayTxs instead */
    ConfirmGatewayTx(request: ConfirmGatewayTxRequest): Promise<ConfirmGatewayTxResponse>;
    ConfirmGatewayTxs(request: ConfirmGatewayTxsRequest): Promise<ConfirmGatewayTxsResponse>;
    Link(request: LinkRequest): Promise<LinkResponse>;
    ConfirmToken(request: ConfirmTokenRequest): Promise<ConfirmTokenResponse>;
    ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
    ConfirmTransferKey(request: ConfirmTransferKeyRequest): Promise<ConfirmTransferKeyResponse>;
    CreateDeployToken(request: CreateDeployTokenRequest): Promise<CreateDeployTokenResponse>;
    CreateBurnTokens(request: CreateBurnTokensRequest): Promise<CreateBurnTokensResponse>;
    CreatePendingTransfers(request: CreatePendingTransfersRequest): Promise<CreatePendingTransfersResponse>;
    CreateTransferOperatorship(request: CreateTransferOperatorshipRequest): Promise<CreateTransferOperatorshipResponse>;
    SignCommands(request: SignCommandsRequest): Promise<SignCommandsResponse>;
    AddChain(request: AddChainRequest): Promise<AddChainResponse>;
    RetryFailedEvent(request: RetryFailedEventRequest): Promise<RetryFailedEventResponse>;
    UpdateParams(request: UpdateParamsRequest): Promise<UpdateParamsResponse>;
}
export declare const MsgServiceServiceName = "axelar.evm.v1beta1.MsgService";
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    SetGateway(request: SetGatewayRequest): Promise<SetGatewayResponse>;
    ConfirmGatewayTx(request: ConfirmGatewayTxRequest): Promise<ConfirmGatewayTxResponse>;
    ConfirmGatewayTxs(request: ConfirmGatewayTxsRequest): Promise<ConfirmGatewayTxsResponse>;
    Link(request: LinkRequest): Promise<LinkResponse>;
    ConfirmToken(request: ConfirmTokenRequest): Promise<ConfirmTokenResponse>;
    ConfirmDeposit(request: ConfirmDepositRequest): Promise<ConfirmDepositResponse>;
    ConfirmTransferKey(request: ConfirmTransferKeyRequest): Promise<ConfirmTransferKeyResponse>;
    CreateDeployToken(request: CreateDeployTokenRequest): Promise<CreateDeployTokenResponse>;
    CreateBurnTokens(request: CreateBurnTokensRequest): Promise<CreateBurnTokensResponse>;
    CreatePendingTransfers(request: CreatePendingTransfersRequest): Promise<CreatePendingTransfersResponse>;
    CreateTransferOperatorship(request: CreateTransferOperatorshipRequest): Promise<CreateTransferOperatorshipResponse>;
    SignCommands(request: SignCommandsRequest): Promise<SignCommandsResponse>;
    AddChain(request: AddChainRequest): Promise<AddChainResponse>;
    RetryFailedEvent(request: RetryFailedEventRequest): Promise<RetryFailedEventResponse>;
    UpdateParams(request: UpdateParamsRequest): Promise<UpdateParamsResponse>;
}
/** QueryService defines the gRPC querier service. */
export interface QueryService {
    /**
     * BatchedCommands queries the batched commands for a specified chain and
     * BatchedCommandsID if no BatchedCommandsID is specified, then it returns the
     * latest batched commands
     */
    BatchedCommands(request: BatchedCommandsRequest): Promise<BatchedCommandsResponse>;
    /** BurnerInfo queries the burner info for the specified address */
    BurnerInfo(request: BurnerInfoRequest): Promise<BurnerInfoResponse>;
    /** ConfirmationHeight queries the confirmation height for the specified chain */
    ConfirmationHeight(request: ConfirmationHeightRequest): Promise<ConfirmationHeightResponse>;
    /**
     * DepositState queries the state of the specified deposit
     *
     * @deprecated
     */
    DepositState(request: DepositStateRequest): Promise<DepositStateResponse>;
    /** PendingCommands queries the pending commands for the specified chain */
    PendingCommands(request: PendingCommandsRequest): Promise<PendingCommandsResponse>;
    /** Chains queries the available evm chains */
    Chains(request: ChainsRequest): Promise<ChainsResponse>;
    /** Command queries the command of a chain provided the command id */
    Command(request: CommandRequest): Promise<CommandResponse>;
    /** KeyAddress queries the address of key of a chain */
    KeyAddress(request: KeyAddressRequest): Promise<KeyAddressResponse>;
    /**
     * GatewayAddress queries the address of axelar gateway at the specified
     * chain
     */
    GatewayAddress(request: GatewayAddressRequest): Promise<GatewayAddressResponse>;
    /**
     * Bytecode queries the bytecode of a specified gateway at the specified
     * chain
     */
    Bytecode(request: BytecodeRequest): Promise<BytecodeResponse>;
    /** Event queries an event at the specified chain */
    Event(request: EventRequest): Promise<EventResponse>;
    /** ERC20Tokens queries the ERC20 tokens registered for a chain */
    ERC20Tokens(request: ERC20TokensRequest): Promise<ERC20TokensResponse>;
    /** TokenInfo queries the token info for a registered ERC20 Token */
    TokenInfo(request: TokenInfoRequest): Promise<TokenInfoResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare const QueryServiceServiceName = "axelar.evm.v1beta1.QueryService";
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    BatchedCommands(request: BatchedCommandsRequest): Promise<BatchedCommandsResponse>;
    BurnerInfo(request: BurnerInfoRequest): Promise<BurnerInfoResponse>;
    ConfirmationHeight(request: ConfirmationHeightRequest): Promise<ConfirmationHeightResponse>;
    DepositState(request: DepositStateRequest): Promise<DepositStateResponse>;
    PendingCommands(request: PendingCommandsRequest): Promise<PendingCommandsResponse>;
    Chains(request: ChainsRequest): Promise<ChainsResponse>;
    Command(request: CommandRequest): Promise<CommandResponse>;
    KeyAddress(request: KeyAddressRequest): Promise<KeyAddressResponse>;
    GatewayAddress(request: GatewayAddressRequest): Promise<GatewayAddressResponse>;
    Bytecode(request: BytecodeRequest): Promise<BytecodeResponse>;
    Event(request: EventRequest): Promise<EventResponse>;
    ERC20Tokens(request: ERC20TokensRequest): Promise<ERC20TokensResponse>;
    TokenInfo(request: TokenInfoRequest): Promise<TokenInfoResponse>;
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
