export type LinkedListNodeValue = string | number

export interface ILinkedListNode {
  value: LinkedListNodeValue
  next: ILinkedListNode | null
}

export interface ILinkedList {
  head: ILinkedListNode | null
  tail: ILinkedListNode | null
  size: number

  Append: (value: LinkedListNodeValue) => ILinkedList
  Prepend: (value: LinkedListNodeValue) => ILinkedList
  Search: (value: LinkedListNodeValue) => ILinkedListNode | null
  Delete: (value: LinkedListNodeValue) => ILinkedList | null
  GetFirstItem: () => ILinkedListNode | null
  GetLastItem: () => ILinkedListNode | null
  PrettyPrint: () => string
  Size: () => number
}
