'use client'

import { useState, useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface TransactionAlertProps {
  message: string
  onClose: () => void
}

export function EnhancedTransactionAlertComponent({ message, onClose }: TransactionAlertProps = { message: 'Transaction successful!', onClose: () => {} }) {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 5000 // 5 seconds
    const interval = 50 // Update every 50ms

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + (100 / (duration / interval))
        return newProgress >= 100 ? 100 : newProgress
      })
    }, interval)

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, duration)

    return () => {
      clearInterval(timer)
      clearTimeout(hideTimer)
    }
  }, [onClose])

  if (!isVisible) return null

  return (
    <Alert className="fixed top-4 right-4 w-96 bg-white border-green-500 text-green-700 shadow-lg animate-in slide-in-from-right">
      <div className="flex items-start space-x-4">
        <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
        <div className="flex-grow">
          <AlertTitle className="text-lg font-semibold text-green-700 mb-1">Success</AlertTitle>
          <AlertDescription className="text-base text-green-600">
            {message}
          </AlertDescription>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="text-green-700 hover:text-green-800 hover:bg-green-100"
          onClick={() => {
            setIsVisible(false)
            onClose()
          }}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <Progress value={progress} className="mt-4 bg-green-100" indicatorClassName="bg-green-500" />
    </Alert>
  )
}