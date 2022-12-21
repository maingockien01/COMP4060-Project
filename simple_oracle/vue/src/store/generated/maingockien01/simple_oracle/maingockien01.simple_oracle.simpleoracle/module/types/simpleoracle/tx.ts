/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "maingockien01.simple_oracle.simpleoracle";

export interface MsgCreateResource {
  creator: string;
  index: string;
  path: string;
  value: string;
}

export interface MsgCreateResourceResponse {}

export interface MsgUpdateResource {
  creator: string;
  index: string;
  path: string;
  value: string;
}

export interface MsgUpdateResourceResponse {}

export interface MsgDeleteResource {
  creator: string;
  index: string;
}

export interface MsgDeleteResourceResponse {}

const baseMsgCreateResource: object = {
  creator: "",
  index: "",
  path: "",
  value: "",
};

export const MsgCreateResource = {
  encode(message: MsgCreateResource, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateResource {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateResource } as MsgCreateResource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResource {
    const message = { ...baseMsgCreateResource } as MsgCreateResource;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgCreateResource): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.path !== undefined && (obj.path = message.path);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateResource>): MsgCreateResource {
    const message = { ...baseMsgCreateResource } as MsgCreateResource;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgCreateResourceResponse: object = {};

export const MsgCreateResourceResponse = {
  encode(
    _: MsgCreateResourceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateResourceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateResourceResponse,
    } as MsgCreateResourceResponse;
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

  fromJSON(_: any): MsgCreateResourceResponse {
    const message = {
      ...baseMsgCreateResourceResponse,
    } as MsgCreateResourceResponse;
    return message;
  },

  toJSON(_: MsgCreateResourceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateResourceResponse>
  ): MsgCreateResourceResponse {
    const message = {
      ...baseMsgCreateResourceResponse,
    } as MsgCreateResourceResponse;
    return message;
  },
};

const baseMsgUpdateResource: object = {
  creator: "",
  index: "",
  path: "",
  value: "",
};

export const MsgUpdateResource = {
  encode(message: MsgUpdateResource, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateResource {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateResource } as MsgUpdateResource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateResource {
    const message = { ...baseMsgUpdateResource } as MsgUpdateResource;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateResource): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.path !== undefined && (obj.path = message.path);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateResource>): MsgUpdateResource {
    const message = { ...baseMsgUpdateResource } as MsgUpdateResource;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdateResourceResponse: object = {};

export const MsgUpdateResourceResponse = {
  encode(
    _: MsgUpdateResourceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateResourceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateResourceResponse,
    } as MsgUpdateResourceResponse;
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

  fromJSON(_: any): MsgUpdateResourceResponse {
    const message = {
      ...baseMsgUpdateResourceResponse,
    } as MsgUpdateResourceResponse;
    return message;
  },

  toJSON(_: MsgUpdateResourceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateResourceResponse>
  ): MsgUpdateResourceResponse {
    const message = {
      ...baseMsgUpdateResourceResponse,
    } as MsgUpdateResourceResponse;
    return message;
  },
};

const baseMsgDeleteResource: object = { creator: "", index: "" };

export const MsgDeleteResource = {
  encode(message: MsgDeleteResource, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteResource {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteResource } as MsgDeleteResource;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteResource {
    const message = { ...baseMsgDeleteResource } as MsgDeleteResource;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteResource): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteResource>): MsgDeleteResource {
    const message = { ...baseMsgDeleteResource } as MsgDeleteResource;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteResourceResponse: object = {};

export const MsgDeleteResourceResponse = {
  encode(
    _: MsgDeleteResourceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteResourceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteResourceResponse,
    } as MsgDeleteResourceResponse;
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

  fromJSON(_: any): MsgDeleteResourceResponse {
    const message = {
      ...baseMsgDeleteResourceResponse,
    } as MsgDeleteResourceResponse;
    return message;
  },

  toJSON(_: MsgDeleteResourceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteResourceResponse>
  ): MsgDeleteResourceResponse {
    const message = {
      ...baseMsgDeleteResourceResponse,
    } as MsgDeleteResourceResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateResource(
    request: MsgCreateResource
  ): Promise<MsgCreateResourceResponse>;
  UpdateResource(
    request: MsgUpdateResource
  ): Promise<MsgUpdateResourceResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteResource(
    request: MsgDeleteResource
  ): Promise<MsgDeleteResourceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateResource(
    request: MsgCreateResource
  ): Promise<MsgCreateResourceResponse> {
    const data = MsgCreateResource.encode(request).finish();
    const promise = this.rpc.request(
      "maingockien01.simple_oracle.simpleoracle.Msg",
      "CreateResource",
      data
    );
    return promise.then((data) =>
      MsgCreateResourceResponse.decode(new Reader(data))
    );
  }

  UpdateResource(
    request: MsgUpdateResource
  ): Promise<MsgUpdateResourceResponse> {
    const data = MsgUpdateResource.encode(request).finish();
    const promise = this.rpc.request(
      "maingockien01.simple_oracle.simpleoracle.Msg",
      "UpdateResource",
      data
    );
    return promise.then((data) =>
      MsgUpdateResourceResponse.decode(new Reader(data))
    );
  }

  DeleteResource(
    request: MsgDeleteResource
  ): Promise<MsgDeleteResourceResponse> {
    const data = MsgDeleteResource.encode(request).finish();
    const promise = this.rpc.request(
      "maingockien01.simple_oracle.simpleoracle.Msg",
      "DeleteResource",
      data
    );
    return promise.then((data) =>
      MsgDeleteResourceResponse.decode(new Reader(data))
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
