package types

// ValidateBasic is used for validating the packet
func (p RequestIndexPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p RequestIndexPacketData) GetBytes() ([]byte, error) {
	var modulePacket InteroraclePacketData

	modulePacket.Packet = &InteroraclePacketData_RequestIndexPacket{&p}

	return modulePacket.Marshal()
}
