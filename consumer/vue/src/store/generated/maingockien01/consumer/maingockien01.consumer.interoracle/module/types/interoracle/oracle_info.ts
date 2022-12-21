/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "maingockien01.consumer.interoracle";

export interface OracleInfo {
  requestSuccessNum: number;
  creator: string;
}

const baseOracleInfo: object = { requestSuccessNum: 0, creator: "" };

export const OracleInfo = {
  encode(message: OracleInfo, writer: Writer = Writer.create()): Writer {
    if (message.requestSuccessNum !== 0) {
      writer.uint32(8).uint64(message.requestSuccessNum);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OracleInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOracleInfo } as OracleInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestSuccessNum = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleInfo {
    const message = { ...baseOracleInfo } as OracleInfo;
    if (
      object.requestSuccessNum !== undefined &&
      object.requestSuccessNum !== null
    ) {
      message.requestSuccessNum = Number(object.requestSuccessNum);
    } else {
      message.requestSuccessNum = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: OracleInfo): unknown {
    const obj: any = {};
    message.requestSuccessNum !== undefined &&
      (obj.requestSuccessNum = message.requestSuccessNum);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<OracleInfo>): OracleInfo {
    const message = { ...baseOracleInfo } as OracleInfo;
    if (
      object.requestSuccessNum !== undefined &&
      object.requestSuccessNum !== null
    ) {
      message.requestSuccessNum = object.requestSuccessNum;
    } else {
      message.requestSuccessNum = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
