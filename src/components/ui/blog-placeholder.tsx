import { FileText } from 'lucide-react'

interface BlogPlaceholderProps {
  title: string
}

export function BlogPlaceholder({ title }: BlogPlaceholderProps) {
  return (
    <div className="relative aspect-video w-full bg-muted flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted" />
      <div className="relative flex flex-col items-center gap-2 text-muted-foreground">
        <FileText className="h-8 w-8" />
        <p className="text-xs font-medium">{title}</p>
      </div>
    </div>
  )
} 