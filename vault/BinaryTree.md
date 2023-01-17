# BinaryTree

Binary trees can have multiple types:

* A __root__ binary tree has a root node, and every node has at most two children.
* A __full__ ( or proper ) is a tree in which every node has either 0 or 2 children.
* A __perfect__ - all interior nodes have two children and all leaves have the same depth
* a __complete__ , in which all levels ( except the last ) is completely filled, and all nodes in the last level are as far left as possible: A perfect tree is always complete, but a complete tree is not necessarily perfect. A complete binary tree can be efficiently represented using an array.
  * A heap is a specialized complete tree, that satisfies the HEAP PROPERTY. Its one maximilalyl efficient implementation of an abstract data type called a priority queue.
* A __balanced__ binary tree is a binary tree structure in which the left anr right substrees of every node differ in height by no more than 1.
* A __degenerate__ tree is where each paretn node has only one associated child node, which means the tree will behave like a linked list.
