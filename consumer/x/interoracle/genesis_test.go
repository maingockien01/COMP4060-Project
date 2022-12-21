package interoracle_test

import (
	"testing"

	keepertest "github.com/maingockien01/consumer/testutil/keeper"
	"github.com/maingockien01/consumer/testutil/nullify"
	"github.com/maingockien01/consumer/x/interoracle"
	"github.com/maingockien01/consumer/x/interoracle/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		OracleInfo: &types.OracleInfo{
			RequestSuccessNum: 22,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.InteroracleKeeper(t)
	interoracle.InitGenesis(ctx, *k, genesisState)
	got := interoracle.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.Equal(t, genesisState.OracleInfo, got.OracleInfo)
	// this line is used by starport scaffolding # genesis/test/assert
}
