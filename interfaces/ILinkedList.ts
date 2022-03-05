export interface ILinkedListNode {
  value: any
  next: ILinkedListNode | null
  prev: ILinkedListNode | null
}

export interface ILinkedList {
  head: ILinkedListNode | null
  tail: ILinkedListNode | null
  size: number

  Append: (value: any) => ILinkedList
  Prepend: (value: any) => ILinkedList
  Search: (value: any) => ILinkedListNode | null
}
