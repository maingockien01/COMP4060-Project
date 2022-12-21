package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
	"github.com/maingockien01/consumer/x/interoracle/types"
)

func (k msgServer) SendRequestIndex(goCtx context.Context, msg *types.MsgSendRequestIndex) (*types.MsgSendRequestIndexResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.RequestIndexPacketData

	packet.Index = msg.Index

	// Transmit the packet
	err := k.TransmitRequestIndexPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendRequestIndexResponse{}, nil
}
