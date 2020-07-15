const {createTree, logTree} = require('./createTree');

// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
  let step = null;

  function test (node) {
    if (!node) {
      return;
    }
    test(node.left);

    if (step) {
      node.pre = step;
      step.next = node;
    }
    step = node;
    
    test(node.right);
  }

  test(pRootOfTree);
};

/**
 * 打印结果
 * @param {*} head 
 */
function logList(head) {
  let node = head;
  while (node) {
    console.log(node, node.next, node.pre, '=>');
    node = node.next;
  }
};

const tree = createTree([2,4,1,3,7,5,6]);
logTree(tree.root);

Convert(tree.root);

console.log('*******************');

logList(tree.root);


/**
 * 思路：
 * 法1.先中序遍历二叉树，将排好序的二叉树放入数组中。接着循环数组改变节点指向即可。
 * 法2(推荐).设置一个指针存储当前节点之前一个节点。然后中序遍历，将当前节点pre指向设置的指针(即前一个节点)，前一个节点的next指向当前节点即可。
 */
