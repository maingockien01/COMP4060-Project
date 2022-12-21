package interoracle

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/maingockien01/consumer/testutil/sample"
	interoraclesimulation "github.com/maingockien01/consumer/x/interoracle/simulation"
	"github.com/maingockien01/consumer/x/interoracle/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = interoraclesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateOracleInfo = "op_weight_msg_oracle_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateOracleInfo int = 100

	opWeightMsgUpdateOracleInfo = "op_weight_msg_oracle_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateOracleInfo int = 100

	opWeightMsgDeleteOracleInfo = "op_weight_msg_oracle_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteOracleInfo int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	interoracleGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&interoracleGenesis)
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

	var weightMsgCreateOracleInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateOracleInfo, &weightMsgCreateOracleInfo, nil,
		func(_ *rand.Rand) {
			weightMsgCreateOracleInfo = defaultWeightMsgCreateOracleInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateOracleInfo,
		interoraclesimulation.SimulateMsgCreateOracleInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateOracleInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateOracleInfo, &weightMsgUpdateOracleInfo, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateOracleInfo = defaultWeightMsgUpdateOracleInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateOracleInfo,
		interoraclesimulation.SimulateMsgUpdateOracleInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteOracleInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteOracleInfo, &weightMsgDeleteOracleInfo, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteOracleInfo = defaultWeightMsgDeleteOracleInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteOracleInfo,
		interoraclesimulation.SimulateMsgDeleteOracleInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
