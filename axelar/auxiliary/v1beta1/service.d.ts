import { BatchRequest, BatchResponse } from "./tx";
export declare const protobufPackage = "axelar.auxiliary.v1beta1";
/** Msg defines the nexus Msg service. */
export interface MsgService {
    Batch(request: BatchRequest): Promise<BatchResponse>;
}
export declare const MsgServiceServiceName = "axelar.auxiliary.v1beta1.MsgService";
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Batch(request: BatchRequest): Promise<BatchResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
