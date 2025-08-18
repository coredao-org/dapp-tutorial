"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface NetworkModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitch: () => void
}

export function NetworkModal({ isOpen, onClose, onSwitch }: NetworkModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Wrong Network</DialogTitle>
          <DialogDescription>Please switch to Core Testnet to use this faucet.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <Button onClick={onSwitch}>Switch Network</Button>
      </DialogContent>
    </Dialog>
  )
}
