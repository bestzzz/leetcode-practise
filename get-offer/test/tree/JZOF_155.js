/**
 * 155. 将二叉搜索树转化为排序的双向链表
 * 将一个 二叉搜索树 就地转化为一个 已排序的双向循环链表 。

对于双向循环列表，你可以将左右孩子指针作为双向循环链表的前驱和后继指针，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

特别地，我们希望可以 就地 完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中最小元素的指针。
 */


/**
 * 解题思路：二叉搜索树的中序遍历是升序遍历 利用此特点解题
 * https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/solutions/1823190/-by-1105389168-kd8e/?envType=study-plan-v2&envId=coding-interviews
 */

var treeToDoublyList = function(root) {
  let pre = null;
  let head = null;
  
  const travers = (root) => {
    if (!root) return null;

    travers(root.left);

    if (pre) {
      pre.right = root;
    } else {
        head = root;
    }
    root.left = pre;
    pre = root;

    travers(root.right);
  };

  if (!root) return root;

  travers(root);
  head.left = pre;
  pre.right = head;

  return head;
};
