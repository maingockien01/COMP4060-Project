// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendRequestIndex } from "./types/interoracle/tx";
import { MsgCreateOracleInfo } from "./types/interoracle/tx";
import { MsgUpdateOracleInfo } from "./types/interoracle/tx";
import { MsgDeleteOracleInfo } from "./types/interoracle/tx";


const types = [
  ["/maingockien01.consumer.interoracle.MsgSendRequestIndex", MsgSendRequestIndex],
  ["/maingockien01.consumer.interoracle.MsgCreateOracleInfo", MsgCreateOracleInfo],
  ["/maingockien01.consumer.interoracle.MsgUpdateOracleInfo", MsgUpdateOracleInfo],
  ["/maingockien01.consumer.interoracle.MsgDeleteOracleInfo", MsgDeleteOracleInfo],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSendRequestIndex: (data: MsgSendRequestIndex): EncodeObject => ({ typeUrl: "/maingockien01.consumer.interoracle.MsgSendRequestIndex", value: MsgSendRequestIndex.fromPartial( data ) }),
    msgCreateOracleInfo: (data: MsgCreateOracleInfo): EncodeObject => ({ typeUrl: "/maingockien01.consumer.interoracle.MsgCreateOracleInfo", value: MsgCreateOracleInfo.fromPartial( data ) }),
    msgUpdateOracleInfo: (data: MsgUpdateOracleInfo): EncodeObject => ({ typeUrl: "/maingockien01.consumer.interoracle.MsgUpdateOracleInfo", value: MsgUpdateOracleInfo.fromPartial( data ) }),
    msgDeleteOracleInfo: (data: MsgDeleteOracleInfo): EncodeObject => ({ typeUrl: "/maingockien01.consumer.interoracle.MsgDeleteOracleInfo", value: MsgDeleteOracleInfo.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
