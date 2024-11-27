import type { MDXComponents } from 'mdx/types'
import { Table, Thead, Tbody, Tr, Th, Td } from './table'

export const mdxComponents: MDXComponents = {
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td
}