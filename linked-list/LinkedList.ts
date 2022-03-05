import { ILinkedList, ILinkedListNode } from '../interfaces/ILinkedList'

class LinkedListNode implements ILinkedListNode {
  value: any
  next: ILinkedListNode | null
  constructor(value: any) {
    this.value = value
    this.next = null
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

  Append(value: string | number): ILinkedList {
    if (this.isListEmpty()) {
      this.head = this.tail = new LinkedListNode(value)
      return this
    }
    if (this.tail) {
      const oldTail = this.tail
      const newTail = new LinkedListNode(value)
      oldTail.next = newTail
      this.tail = newTail
    }
    this.size++
    return this
  }

  Prepend(value: string | number): ILinkedList {
    if (this.isListEmpty()) {
      this.head = this.tail = new LinkedListNode(value)
      return this
    }

    const oldHead = this.head
    const newHead = new LinkedListNode(value)
    newHead.next = oldHead
    this.head = newHead
    this.size++

    return this
  }

  Search(value: string | number): ILinkedListNode | null {
    if (this.isListEmpty()) {
      return null
    }
    let currentHead: ILinkedListNode | null = this.head

    while (currentHead) {
      if (currentHead.value === value) {
        return currentHead
      }
      currentHead = currentHead.next
    }

    return null
  }

  Delete(value: string | number): ILinkedList | null {
    if (this.isListEmpty()) {
      return null
    }
    let currentNode: ILinkedListNode | null = this.head

    while (currentNode) {
      if (currentNode.next && currentNode.next.value === value) {
        currentNode.next = currentNode.next.next
        return this
      }
      currentNode = currentNode.next
    }

    this.size--

    return null
  }

  PrettyPrint(): string {
    const values: string[] = []
    let currentNode = this.head
    while (currentNode) {
      if (!currentNode.next) {
        values.push(`${currentNode.value} -> null`)
      } else {
        values.push(`${currentNode.value} -> `)
      }
      currentNode = currentNode.next
    }

    return values.join('')
  }

  Size(): number {
    return this.size
  }

  GetFirstItem(): LinkedListNode | null {
    return this.head
  }

  GetLastItem(): LinkedListNode | null {
    return this.tail
  }

  // Private Methods
  private insertAtNext(newNode: ILinkedListNode | null, targetNode: ILinkedListNode | null): void {
    if (targetNode) {
      targetNode.next = newNode
    }
  }
  private isListEmpty(): boolean {
    return !this.head && !this.tail
  }
}
