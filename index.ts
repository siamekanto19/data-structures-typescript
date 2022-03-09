import { BinarySearchTree } from './binary-tree/BinaryTree'
import { LinkedList } from './linked-list/LinkedList'

// Linked List
const MyList = new LinkedList()
MyList.Append('Brad')
MyList.Append('John')
MyList.Append('Kent')
MyList.Append('Erik')
MyList.Prepend('Colt')
MyList.Delete('Erik')

// Binary Search Tree
const MyTree = new BinarySearchTree()
MyTree.Insert(10)
MyTree.Insert(20)
MyTree.Insert(5)
MyTree.Insert(30)
MyTree.Insert(25)
MyTree.Insert(30)
MyTree.Insert(16)
MyTree.Insert(29)
MyTree.Insert(18)

console.log(MyList.PrettyPrint())
console.log(MyTree.Size())
