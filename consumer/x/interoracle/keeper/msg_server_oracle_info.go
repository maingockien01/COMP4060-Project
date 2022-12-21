package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/maingockien01/consumer/x/interoracle/types"
)

func (k msgServer) CreateOracleInfo(goCtx context.Context, msg *types.MsgCreateOracleInfo) (*types.MsgCreateOracleInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetOracleInfo(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var oracleInfo = types.OracleInfo{
		Creator:           msg.Creator,
		RequestSuccessNum: msg.RequestSuccessNum,
	}

	k.SetOracleInfo(
		ctx,
		oracleInfo,
	)
	return &types.MsgCreateOracleInfoResponse{}, nil
}

func (k msgServer) UpdateOracleInfo(goCtx context.Context, msg *types.MsgUpdateOracleInfo) (*types.MsgUpdateOracleInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetOracleInfo(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var oracleInfo = types.OracleInfo{
		Creator:           msg.Creator,
		RequestSuccessNum: msg.RequestSuccessNum,
	}

	k.SetOracleInfo(ctx, oracleInfo)

	return &types.MsgUpdateOracleInfoResponse{}, nil
}

func (k msgServer) DeleteOracleInfo(goCtx context.Context, msg *types.MsgDeleteOracleInfo) (*types.MsgDeleteOracleInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetOracleInfo(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveOracleInfo(ctx)

	return &types.MsgDeleteOracleInfoResponse{}, nil
}
