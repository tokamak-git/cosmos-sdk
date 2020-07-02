package ibc

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	client "github.com/cosmos/cosmos-sdk/x/ibc/02-client"
	clientexported "github.com/cosmos/cosmos-sdk/x/ibc/02-client/exported"
	connection "github.com/cosmos/cosmos-sdk/x/ibc/03-connection"
	connectiontypes "github.com/cosmos/cosmos-sdk/x/ibc/03-connection/types"
	channel "github.com/cosmos/cosmos-sdk/x/ibc/04-channel"
	channeltypes "github.com/cosmos/cosmos-sdk/x/ibc/04-channel/types"
	porttypes "github.com/cosmos/cosmos-sdk/x/ibc/05-port/types"
	"github.com/cosmos/cosmos-sdk/x/ibc/keeper"
)

// NewHandler defines the IBC handler
func NewHandler(k keeper.Keeper) sdk.Handler {
	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())

		switch msg := msg.(type) {
		// IBC client msg interface types
		case clientexported.MsgCreateClient:
			return client.HandleMsgCreateClient(ctx, k.ClientKeeper, msg)

		case clientexported.MsgUpdateClient:
			return &sdk.Result{}, nil

		// IBC connection  msgs
		case *connectiontypes.MsgConnectionOpenInit:
			return connection.HandleMsgConnectionOpenInit(ctx, k.ConnectionKeeper, msg)

		case *connectiontypes.MsgConnectionOpenTry:
			return connection.HandleMsgConnectionOpenTry(ctx, k.ConnectionKeeper, msg)

		case *connectiontypes.MsgConnectionOpenAck:
			return connection.HandleMsgConnectionOpenAck(ctx, k.ConnectionKeeper, msg)

		case *connectiontypes.MsgConnectionOpenConfirm:
			return connection.HandleMsgConnectionOpenConfirm(ctx, k.ConnectionKeeper, msg)

		// IBC channel msgs
		case *channeltypes.MsgChannelOpenInit:
			// Lookup module by port capability
			module, portCap, err := k.PortKeeper.LookupModuleByPort(ctx, msg.PortID)
			if err != nil {
				return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")
			}

			res, cap, err := channel.HandleMsgChannelOpenInit(ctx, k.ChannelKeeper, portCap, msg)
			if err != nil {
				return nil, err
			}
			// Retrieve callbacks from router
			cbs, ok := k.Router.GetRoute(module)
			if !ok {
				return nil, sdkerrors.Wrapf(porttypes.ErrInvalidRoute, "route not found to module: %s", module)
			}
			err = cbs.OnChanOpenInit(ctx, msg.Channel.Ordering, msg.Channel.ConnectionHops, msg.PortID, msg.ChannelID, cap, msg.Channel.Counterparty, msg.Channel.Version)
			if err != nil {
				return nil, err
			}

			return res, nil

		case *channeltypes.MsgChannelOpenTry:
			// Lookup module by port capability
			module, portCap, err := k.PortKeeper.LookupModuleByPort(ctx, msg.PortID)
			if err != nil {
				return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")
			}
			res, cap, err := channel.HandleMsgChannelOpenTry(ctx, k.ChannelKeeper, portCap, msg)
			if err != nil {
				return nil, err
			}
			// Retrieve callbacks from router
			cbs, ok := k.Router.GetRoute(module)
			if !ok {
				return nil, sdkerrors.Wrapf(porttypes.ErrInvalidRoute, "route not found to module: %s", module)
			}
			err = cbs.OnChanOpenTry(ctx, msg.Channel.Ordering, msg.Channel.ConnectionHops, msg.PortID, msg.ChannelID, cap, msg.Channel.Counterparty, msg.Channel.Version, msg.CounterpartyVersion)
			if err != nil {
				return nil, err
			}

			return res, nil

		case *channeltypes.MsgChannelOpenAck:
			// Lookup module by channel capability
			module, cap, err := k.ChannelKeeper.LookupModuleByChannel(ctx, msg.PortID, msg.ChannelID)
			if err != nil {
				return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")
			}
			// Retrieve callbacks from router
			cbs, ok := k.Router.GetRoute(module)
			if !ok {
				return nil, sdkerrors.Wrapf(porttypes.ErrInvalidRoute, "route not found to module: %s", module)
			}

			err = cbs.OnChanOpenAck(ctx, msg.PortID, msg.ChannelID, msg.CounterpartyVersion)
			if err != nil {
				return nil, err
			}
			return channel.HandleMsgChannelOpenAck(ctx, k.ChannelKeeper, cap, msg)

		case *channeltypes.MsgChannelOpenConfirm:
			// Lookup module by channel capability
			module, cap, err := k.ChannelKeeper.LookupModuleByChannel(ctx, msg.PortID, msg.ChannelID)
			if err != nil {
				return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")
			}
			// Retrieve callbacks from router
			cbs, ok := k.Router.GetRoute(module)
			if !ok {
				return nil, sdkerrors.Wrapf(porttypes.ErrInvalidRoute, "route not found to module: %s", module)
			}

			err = cbs.OnChanOpenConfirm(ctx, msg.PortID, msg.ChannelID)
			if err != nil {
				return nil, err
			}
			return channel.HandleMsgChannelOpenConfirm(ctx, k.ChannelKeeper, cap, msg)

		case *channeltypes.MsgChannelCloseInit:
			// Lookup module by channel capability
			module, cap, err := k.ChannelKeeper.LookupModuleByChannel(ctx, msg.PortID, msg.ChannelID)
			if err != nil {
				return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")
			}
			// Retrieve callbacks from router
			cbs, ok := k.Router.GetRoute(module)
			if !ok {
				return nil, sdkerrors.Wrapf(porttypes.ErrInvalidRoute, "route not found to module: %s", module)
			}

			err = cbs.OnChanCloseInit(ctx, msg.PortID, msg.ChannelID)
			if err != nil {
				return nil, err
			}
			return channel.HandleMsgChannelCloseInit(ctx, k.ChannelKeeper, cap, msg)

		case *channeltypes.MsgChannelCloseConfirm:
			// Lookup module by channel capability
			module, cap, err := k.ChannelKeeper.LookupModuleByChannel(ctx, msg.PortID, msg.ChannelID)
			if err != nil {
				return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")
			}
			// Retrieve callbacks from router
			cbs, ok := k.Router.GetRoute(module)
			if !ok {
				return nil, sdkerrors.Wrapf(porttypes.ErrInvalidRoute, "route not found to module: %s", module)
			}

			err = cbs.OnChanCloseConfirm(ctx, msg.PortID, msg.ChannelID)
			if err != nil {
				return nil, err
			}
			return channel.HandleMsgChannelCloseConfirm(ctx, k.ChannelKeeper, cap, msg)

		// IBC packet msgs get routed to the appropriate module callback
		case *channeltypes.MsgPacket:
			// Lookup module by channel capability
			module, cap, err := k.ChannelKeeper.LookupModuleByChannel(ctx, msg.Packet.DestinationPort, msg.Packet.DestinationChannel)
			if err != nil {
				return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")
			}

			// Retrieve callbacks from router
			cbs, ok := k.Router.GetRoute(module)
			if !ok {
				return nil, sdkerrors.Wrapf(porttypes.ErrInvalidRoute, "route not found to module: %s", module)
			}

			// Perform application logic callback
			res, ack, err := cbs.OnRecvPacket(ctx, msg.Packet)
			if err != nil {
				return nil, err
			}

			// Set packet acknowledgement
			if err = k.ChannelKeeper.PacketExecuted(ctx, cap, msg.Packet, ack); err != nil {
				return nil, err
			}

			return res, nil

		case *channeltypes.MsgAcknowledgement:
			// Lookup module by channel capability
			module, cap, err := k.ChannelKeeper.LookupModuleByChannel(ctx, msg.Packet.SourcePort, msg.Packet.SourceChannel)
			if err != nil {
				return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")
			}

			// Retrieve callbacks from router
			cbs, ok := k.Router.GetRoute(module)
			if !ok {
				return nil, sdkerrors.Wrapf(porttypes.ErrInvalidRoute, "route not found to module: %s", module)
			}

			// Perform application logic callback
			res, err := cbs.OnAcknowledgementPacket(ctx, msg.Packet, msg.Acknowledgement)
			if err != nil {
				return nil, err
			}

			// Delete packet commitment
			if err = k.ChannelKeeper.AcknowledgementExecuted(ctx, cap, msg.Packet); err != nil {
				return nil, err
			}

			return res, nil

		case *channeltypes.MsgTimeout:
			// Lookup module by channel capability
			module, cap, err := k.ChannelKeeper.LookupModuleByChannel(ctx, msg.Packet.SourcePort, msg.Packet.SourceChannel)
			if err != nil {
				return nil, sdkerrors.Wrap(err, "could not retrieve module from port-id")
			}

			// Retrieve callbacks from router
			cbs, ok := k.Router.GetRoute(module)
			if !ok {
				return nil, sdkerrors.Wrapf(porttypes.ErrInvalidRoute, "route not found to module: %s", module)
			}

			// Perform application logic callback
			res, err := cbs.OnTimeoutPacket(ctx, msg.Packet)
			if err != nil {
				return nil, err
			}

			// Delete packet commitment
			if err = k.ChannelKeeper.TimeoutExecuted(ctx, cap, msg.Packet); err != nil {
				return nil, err
			}

			return res, nil

		default:
			return nil, sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unrecognized IBC message type: %T", msg)
		}
	}
}
