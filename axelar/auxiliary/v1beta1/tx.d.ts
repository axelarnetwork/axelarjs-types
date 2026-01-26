import Long from "long";
import _m0 from "protobufjs/minimal";
import { Result } from "../../../cosmos/base/abci/v1beta1/abci";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "axelar.auxiliary.v1beta1";
export interface BatchRequest {
    $type: "axelar.auxiliary.v1beta1.BatchRequest";
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Buffer;
    messages: Any[];
    sender: string;
}
export interface BatchResponse {
    $type: "axelar.auxiliary.v1beta1.BatchResponse";
    responses: BatchResponse_Response[];
}
export interface BatchResponse_Response {
    $type: "axelar.auxiliary.v1beta1.BatchResponse.Response";
    result?: Result | undefined;
    err?: string | undefined;
}
export declare const BatchRequest: {
    $type: "axelar.auxiliary.v1beta1.BatchRequest";
    encode(message: BatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchRequest;
    fromJSON(object: any): BatchRequest;
    toJSON(message: BatchRequest): unknown;
    create<I extends Exact<DeepPartial<BatchRequest>, I>>(base?: I): BatchRequest;
    fromPartial<I extends Exact<DeepPartial<BatchRequest>, I>>(object: I): BatchRequest;
};
export declare const BatchResponse: {
    $type: "axelar.auxiliary.v1beta1.BatchResponse";
    encode(message: BatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchResponse;
    fromJSON(object: any): BatchResponse;
    toJSON(message: BatchResponse): unknown;
    create<I extends Exact<DeepPartial<BatchResponse>, I>>(base?: I): BatchResponse;
    fromPartial<I extends Exact<DeepPartial<BatchResponse>, I>>(object: I): BatchResponse;
};
export declare const BatchResponse_Response: {
    $type: "axelar.auxiliary.v1beta1.BatchResponse.Response";
    encode(message: BatchResponse_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchResponse_Response;
    fromJSON(object: any): BatchResponse_Response;
    toJSON(message: BatchResponse_Response): unknown;
    create<I extends Exact<DeepPartial<BatchResponse_Response>, I>>(base?: I): BatchResponse_Response;
    fromPartial<I extends Exact<DeepPartial<BatchResponse_Response>, I>>(object: I): BatchResponse_Response;
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
