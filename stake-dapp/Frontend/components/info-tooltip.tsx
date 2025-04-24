"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface InfoTooltipProps {
  content: string
}

export const InfoTooltip = ({ content }: InfoTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <button className="ml-1.5 inline-flex items-center justify-center rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
            <Info className="h-3.5 w-3.5" />
            <span className="sr-only">Info</span>
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-sm">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
