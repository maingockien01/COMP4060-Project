package simpleoracle

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/maingockien01/simple_oracle/testutil/sample"
	simpleoraclesimulation "github.com/maingockien01/simple_oracle/x/simpleoracle/simulation"
	"github.com/maingockien01/simple_oracle/x/simpleoracle/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = simpleoraclesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateResource = "op_weight_msg_resource"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateResource int = 100

	opWeightMsgUpdateResource = "op_weight_msg_resource"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateResource int = 100

	opWeightMsgDeleteResource = "op_weight_msg_resource"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteResource int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	simpleoracleGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		ResourceList: []types.Resource{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&simpleoracleGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateResource int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateResource, &weightMsgCreateResource, nil,
		func(_ *rand.Rand) {
			weightMsgCreateResource = defaultWeightMsgCreateResource
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateResource,
		simpleoraclesimulation.SimulateMsgCreateResource(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateResource int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateResource, &weightMsgUpdateResource, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateResource = defaultWeightMsgUpdateResource
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateResource,
		simpleoraclesimulation.SimulateMsgUpdateResource(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteResource int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteResource, &weightMsgDeleteResource, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteResource = defaultWeightMsgDeleteResource
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteResource,
		simpleoraclesimulation.SimulateMsgDeleteResource(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
