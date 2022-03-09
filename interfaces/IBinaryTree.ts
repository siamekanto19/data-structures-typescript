export interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

export interface IBinaryTree {
  root: ITreeNode | null
  size: number

  Insert: (value: number) => ITreeNode | null
  Search: (value: number) => ITreeNode | null
  Max: () => number | null
  Min: () => number | null
  Size: () => number
}
