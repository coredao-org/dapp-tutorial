import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { EntrySigned } from "../generated/Guestbook/Guestbook"

export function createEntrySignedEvent(
  name: string,
  message: string
): EntrySigned {
  let entrySignedEvent = changetype<EntrySigned>(newMockEvent())

  entrySignedEvent.parameters = new Array()

  entrySignedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  entrySignedEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return entrySignedEvent
}
