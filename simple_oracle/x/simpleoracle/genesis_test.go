package simpleoracle_test

import (
	"testing"

	keepertest "github.com/maingockien01/simple_oracle/testutil/keeper"
	"github.com/maingockien01/simple_oracle/testutil/nullify"
	"github.com/maingockien01/simple_oracle/x/simpleoracle"
	"github.com/maingockien01/simple_oracle/x/simpleoracle/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ResourceList: []types.Resource{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SimpleoracleKeeper(t)
	simpleoracle.InitGenesis(ctx, *k, genesisState)
	got := simpleoracle.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ResourceList, got.ResourceList)
	// this line is used by starport scaffolding # genesis/test/assert
}
