import { ILinkedList, ILinkedListNode } from './interfaces/ILinkedList'

class LinkedListNode implements ILinkedListNode {
  value: any
  next: ILinkedListNode | null
  prev: ILinkedListNode | null

  constructor(value: any) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

export class LinkedList implements ILinkedList {
  head: ILinkedListNode | null
  tail: ILinkedListNode | null
  size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  Append(value: any): ILinkedList {
    if (!this.head && !this.tail) {
      this.head = this.tail = new LinkedListNode(value)
      return this
    }

    if (this.tail) {
      const oldTail = this.tail
      const newTail = new LinkedListNode(value)
      oldTail.next = newTail
      newTail.prev = oldTail
      this.tail = newTail

      return this
    }

    return this
  }

  Prepend(value: any): ILinkedList {
    if (!this.head && !this.tail) {
      this.head = this.tail = new LinkedListNode(value)
      return this
    }

    if (this.head) {
      const oldHead = this.head
      const newHead = new LinkedListNode(value)
      oldHead.prev = newHead
      newHead.next = oldHead
      this.head = newHead

      return this
    }

    return this
  }

  Search(value: any): LinkedListNode | null {
    if (!this.head && !this.tail) {
      return null
    }
    let currentHead = this.head
    while (currentHead) {
      if (currentHead.value === value) {
        return currentHead
      }
      currentHead = currentHead.next
    }

    return null
  }
}
