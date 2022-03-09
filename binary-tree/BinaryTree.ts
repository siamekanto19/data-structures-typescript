import { IBinaryTree, ITreeNode } from '../interfaces/IBinaryTree'

class TreeNode implements ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree implements IBinaryTree {
  root: ITreeNode | null
  size: number

  constructor() {
    this.root = null
    this.size = 0
  }

  Insert(value: number) {
    if (!this.root) {
      this.root = new TreeNode(value)
      this.size++
      return this.root
    }
    const result = this.insertNode(value, this.root)
    if (result) {
      this.size++
    }

    return result
  }

  Max() {
    if (!this.root) {
      return null
    }
    let currentNode = this.root

    while (currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode.value
  }

  Min() {
    if (!this.root) {
      return null
    }
    let currentNode = this.root

    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.value
  }

  Search(value: number) {
    if (!this.root) {
      return null
    }

    let currentNode: ITreeNode | null = this.root

    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.right
      }
    }

    return null
  }

  Size() {
    return this.size
  }

  private insertNode(value: number, node: ITreeNode): ITreeNode | null {
    if (value === node.value) {
      return null
    }
    if (value > node.value) {
      node.right ? this.insertNode(value, node.right) : (node.right = new TreeNode(value))
    } else {
      node.left ? this.insertNode(value, node.left) : (node.left = new TreeNode(value))
    }

    return this.root
  }
}
