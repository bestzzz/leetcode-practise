const {createTree} = require('./createTree');

// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
  let step = 0;
  let res = null;

  function search(node) {
    if (node === null) {
      return;
    }

    search(node.left);
    step++;
    if (step === k) {
      res = node.val;
      return;
    }
    search(node.right);
  }

  search(pRoot);

  return res;
};

const tree = createTree([8,6,10,5,7,9,11]);
const res = KthNode(tree.root, 1);
console.log(res);

/**
 * 思路：中序遍历同时计数，直到计数与k相同；
 */
