package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/maingockien01/simple_oracle/testutil/keeper"
	"github.com/maingockien01/simple_oracle/x/interoracle/keeper"
	"github.com/maingockien01/simple_oracle/x/interoracle/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.InteroracleKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
