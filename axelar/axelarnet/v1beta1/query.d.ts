import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
export interface PendingIBCTransferCountRequest {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest";
}
export interface PendingIBCTransferCountResponse {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse";
    transfersByChain: {
        [key: string]: number;
    };
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse.TransfersByChainEntry";
    key: string;
    value: number;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
    $type: "axelar.axelarnet.v1beta1.ParamsRequest";
}
export interface ParamsResponse {
    $type: "axelar.axelarnet.v1beta1.ParamsResponse";
    params?: Params | undefined;
}
/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 */
export interface IBCPathRequest {
    $type: "axelar.axelarnet.v1beta1.IBCPathRequest";
    chain: string;
}
export interface IBCPathResponse {
    $type: "axelar.axelarnet.v1beta1.IBCPathResponse";
    ibcPath: string;
}
/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 */
export interface ChainByIBCPathRequest {
    $type: "axelar.axelarnet.v1beta1.ChainByIBCPathRequest";
    ibcPath: string;
}
export interface ChainByIBCPathResponse {
    $type: "axelar.axelarnet.v1beta1.ChainByIBCPathResponse";
    chain: string;
}
export declare const PendingIBCTransferCountRequest: {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest";
    encode(_: PendingIBCTransferCountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingIBCTransferCountRequest;
    fromJSON(_: any): PendingIBCTransferCountRequest;
    toJSON(_: PendingIBCTransferCountRequest): unknown;
    create<I extends Exact<DeepPartial<PendingIBCTransferCountRequest>, I>>(base?: I): PendingIBCTransferCountRequest;
    fromPartial<I extends Exact<DeepPartial<PendingIBCTransferCountRequest>, I>>(_: I): PendingIBCTransferCountRequest;
};
export declare const PendingIBCTransferCountResponse: {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse";
    encode(message: PendingIBCTransferCountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingIBCTransferCountResponse;
    fromJSON(object: any): PendingIBCTransferCountResponse;
    toJSON(message: PendingIBCTransferCountResponse): unknown;
    create<I extends Exact<DeepPartial<PendingIBCTransferCountResponse>, I>>(base?: I): PendingIBCTransferCountResponse;
    fromPartial<I extends Exact<DeepPartial<PendingIBCTransferCountResponse>, I>>(object: I): PendingIBCTransferCountResponse;
};
export declare const PendingIBCTransferCountResponse_TransfersByChainEntry: {
    $type: "axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse.TransfersByChainEntry";
    encode(message: PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromJSON(object: any): PendingIBCTransferCountResponse_TransfersByChainEntry;
    toJSON(message: PendingIBCTransferCountResponse_TransfersByChainEntry): unknown;
    create<I extends Exact<DeepPartial<PendingIBCTransferCountResponse_TransfersByChainEntry>, I>>(base?: I): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromPartial<I extends Exact<DeepPartial<PendingIBCTransferCountResponse_TransfersByChainEntry>, I>>(object: I): PendingIBCTransferCountResponse_TransfersByChainEntry;
};
export declare const ParamsRequest: {
    $type: "axelar.axelarnet.v1beta1.ParamsRequest";
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    create<I extends Exact<DeepPartial<ParamsRequest>, I>>(base?: I): ParamsRequest;
    fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    $type: "axelar.axelarnet.v1beta1.ParamsResponse";
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    create<I extends Exact<DeepPartial<ParamsResponse>, I>>(base?: I): ParamsResponse;
    fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse;
};
export declare const IBCPathRequest: {
    $type: "axelar.axelarnet.v1beta1.IBCPathRequest";
    encode(message: IBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCPathRequest;
    fromJSON(object: any): IBCPathRequest;
    toJSON(message: IBCPathRequest): unknown;
    create<I extends Exact<DeepPartial<IBCPathRequest>, I>>(base?: I): IBCPathRequest;
    fromPartial<I extends Exact<DeepPartial<IBCPathRequest>, I>>(object: I): IBCPathRequest;
};
export declare const IBCPathResponse: {
    $type: "axelar.axelarnet.v1beta1.IBCPathResponse";
    encode(message: IBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCPathResponse;
    fromJSON(object: any): IBCPathResponse;
    toJSON(message: IBCPathResponse): unknown;
    create<I extends Exact<DeepPartial<IBCPathResponse>, I>>(base?: I): IBCPathResponse;
    fromPartial<I extends Exact<DeepPartial<IBCPathResponse>, I>>(object: I): IBCPathResponse;
};
export declare const ChainByIBCPathRequest: {
    $type: "axelar.axelarnet.v1beta1.ChainByIBCPathRequest";
    encode(message: ChainByIBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainByIBCPathRequest;
    fromJSON(object: any): ChainByIBCPathRequest;
    toJSON(message: ChainByIBCPathRequest): unknown;
    create<I extends Exact<DeepPartial<ChainByIBCPathRequest>, I>>(base?: I): ChainByIBCPathRequest;
    fromPartial<I extends Exact<DeepPartial<ChainByIBCPathRequest>, I>>(object: I): ChainByIBCPathRequest;
};
export declare const ChainByIBCPathResponse: {
    $type: "axelar.axelarnet.v1beta1.ChainByIBCPathResponse";
    encode(message: ChainByIBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainByIBCPathResponse;
    fromJSON(object: any): ChainByIBCPathResponse;
    toJSON(message: ChainByIBCPathResponse): unknown;
    create<I extends Exact<DeepPartial<ChainByIBCPathResponse>, I>>(base?: I): ChainByIBCPathResponse;
    fromPartial<I extends Exact<DeepPartial<ChainByIBCPathResponse>, I>>(object: I): ChainByIBCPathResponse;
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
