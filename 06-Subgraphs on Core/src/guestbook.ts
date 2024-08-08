import { EntrySigned as EntrySignedEvent } from "../generated/Guestbook/Guestbook"
import { EntrySigned } from "../generated/schema"

export function handleEntrySigned(event: EntrySignedEvent): void {
  let entity = new EntrySigned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.message = event.params.message

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
