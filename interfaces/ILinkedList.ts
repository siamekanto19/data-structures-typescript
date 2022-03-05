export interface ILinkedListNode {
  value: string | number
  next: ILinkedListNode | null
}

export interface ILinkedList {
  head: ILinkedListNode | null
  tail: ILinkedListNode | null
  size: number

  Append: (value: string | number) => ILinkedList
  Prepend: (value: string | number) => ILinkedList
  Search: (value: string | number) => ILinkedListNode | null
  Delete: (value: string | number) => ILinkedList | null
  GetFirstItem: () => ILinkedListNode | null
  GetLastItem: () => ILinkedListNode | null
  PrettyPrint: () => string
  Size: () => number
}
