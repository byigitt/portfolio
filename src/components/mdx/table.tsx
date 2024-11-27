import type * as React from "react"
import { cn } from "@/lib/utils"

export function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="my-8 w-full overflow-auto">
      <table className={cn("w-full border-collapse text-sm", className)} {...props} />
    </div>
  )
}

export function Thead({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("bg-muted/50 [&_tr]:border-b-0", className)} {...props} />
}

export function Tbody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
}

export function Tr({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

export function Th({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  )
}

export function Td({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
}
