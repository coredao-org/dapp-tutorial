'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CreateMultiSigWallet from './createmultisig'

const MultiSigCreationModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-8 space-x-4">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2 px-4 py-2 text-xl font-bold text-white hover:bg-blue-800 rounded-lg">
            Create MultiSig
          </Button>
        </DialogTrigger>
        <DialogContent
          className="max-w-4xl max-h-screen overflow-y-auto bg-blue-900 text-white rounded-lg"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Create MultiSig
            </DialogTitle>
          </DialogHeader>
          <CreateMultiSigWallet />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default MultiSigCreationModal
