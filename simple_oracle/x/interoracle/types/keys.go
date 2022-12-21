package types

const (
	// ModuleName defines the module name
	ModuleName = "interoracle"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_interoracle"

	// Version defines the current version the IBC module supports
	Version = "interoracle-1"

	// PortID is the default port id that module binds to
	PortID = "interoracle"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("interoracle-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
