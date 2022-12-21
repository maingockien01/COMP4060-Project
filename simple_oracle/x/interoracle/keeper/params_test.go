package keeper_test

import (
	"testing"

	testkeeper "github.com/maingockien01/simple_oracle/testutil/keeper"
	"github.com/maingockien01/simple_oracle/x/interoracle/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.InteroracleKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
