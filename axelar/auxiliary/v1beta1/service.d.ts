import { BatchResponse, BatchRequest } from "../../../axelar/auxiliary/v1beta1/tx";
export declare const protobufPackage = "axelar.auxiliary.v1beta1";
/** Msg defines the nexus Msg service. */
export interface MsgService {
    Batch(request: BatchRequest): Promise<BatchResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    Batch(request: BatchRequest): Promise<BatchResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
