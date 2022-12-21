/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../interoracle/params";
import { OracleInfo } from "../interoracle/oracle_info";

export const protobufPackage = "maingockien01.consumer.interoracle";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetOracleInfoRequest {}

export interface QueryGetOracleInfoResponse {
  OracleInfo: OracleInfo | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetOracleInfoRequest: object = {};

export const QueryGetOracleInfoRequest = {
  encode(
    _: QueryGetOracleInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOracleInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOracleInfoRequest,
    } as QueryGetOracleInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetOracleInfoRequest {
    const message = {
      ...baseQueryGetOracleInfoRequest,
    } as QueryGetOracleInfoRequest;
    return message;
  },

  toJSON(_: QueryGetOracleInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetOracleInfoRequest>
  ): QueryGetOracleInfoRequest {
    const message = {
      ...baseQueryGetOracleInfoRequest,
    } as QueryGetOracleInfoRequest;
    return message;
  },
};

const baseQueryGetOracleInfoResponse: object = {};

export const QueryGetOracleInfoResponse = {
  encode(
    message: QueryGetOracleInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.OracleInfo !== undefined) {
      OracleInfo.encode(message.OracleInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOracleInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOracleInfoResponse,
    } as QueryGetOracleInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.OracleInfo = OracleInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOracleInfoResponse {
    const message = {
      ...baseQueryGetOracleInfoResponse,
    } as QueryGetOracleInfoResponse;
    if (object.OracleInfo !== undefined && object.OracleInfo !== null) {
      message.OracleInfo = OracleInfo.fromJSON(object.OracleInfo);
    } else {
      message.OracleInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOracleInfoResponse): unknown {
    const obj: any = {};
    message.OracleInfo !== undefined &&
      (obj.OracleInfo = message.OracleInfo
        ? OracleInfo.toJSON(message.OracleInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOracleInfoResponse>
  ): QueryGetOracleInfoResponse {
    const message = {
      ...baseQueryGetOracleInfoResponse,
    } as QueryGetOracleInfoResponse;
    if (object.OracleInfo !== undefined && object.OracleInfo !== null) {
      message.OracleInfo = OracleInfo.fromPartial(object.OracleInfo);
    } else {
      message.OracleInfo = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a OracleInfo by index. */
  OracleInfo(
    request: QueryGetOracleInfoRequest
  ): Promise<QueryGetOracleInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "maingockien01.consumer.interoracle.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  OracleInfo(
    request: QueryGetOracleInfoRequest
  ): Promise<QueryGetOracleInfoResponse> {
    const data = QueryGetOracleInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "maingockien01.consumer.interoracle.Query",
      "OracleInfo",
      data
    );
    return promise.then((data) =>
      QueryGetOracleInfoResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
