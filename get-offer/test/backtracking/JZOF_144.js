/**
 * 144. 翻转二叉树
 * 给定一棵二叉树的根节点 root，请左右翻转这棵二叉树，并返回其根节点。
 * 输入：root = [5,7,9,8,3,2,4]
 * 输出：[5,9,7,4,2,3,8]
 */

/**
 * 解题思路：https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/solutions/1627680/dai-ma-jian-ji-yi-chong-huan-bu-cuo-de-j-y0md/?envType=study-plan-v2&envId=coding-interviews
 * 递归深度优先遍历 遍历的同时进行左右节点互换
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if (!root) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  mirrorTree(root.left);
  mirrorTree(root.right);

  return root;
};
