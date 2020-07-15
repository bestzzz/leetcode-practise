class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
    } else {
      this._insert(this.root, node);
    }
  }

  /**
   * 插入节点
   * @param {Node} parent 
   * @param {Node} node
   */
  _insert(parent, node) {
    if (node.val < parent.val) {
      if (parent.left) {
        this._insert(parent.left, node);
      } else {
        parent.left = node;
      }
    } else {
      if (parent.right) {
        this._insert(parent.right, node);
      } else {
        parent.right = node;
      }
    }
  }
}

/**
 * 创建二叉树
 * @param {Array} arr 
 */
function createTree (arr) {
  const tree = new BinaryTree();
  arr.forEach(item => {
    tree.insert(item);
  });

  return tree;
}

/**
 * 中序遍历打印树
 * @param {Node} treeHead 
 */
function logTree (treeHead) {
  if (!treeHead) {
    return null;
  }

  logTree(treeHead.left);
  console.log(treeHead.val);
  logTree(treeHead.right);
}

module.exports = {
  Node,
  BinaryTree,
  createTree,
  logTree
};
