/**
 * LCR 145. 判断对称二叉树
 * 请设计一个函数判断一棵二叉树是否 轴对称 。
输入：root = [6,7,7,8,9,9,8]
输出：true
解释：从图中可看出树是轴对称的。
 */

/**
 * 解题思路：写一个check函数 用来对比左子树和右子树是否相等 然后递归check
 * https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/?envType=study-plan-v2&envId=coding-interviews
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkSymmetricTree = function(root) {
  return check(root, root);
};

const check = (root1, root2) => {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  return root1.val === root2.val && check(root1.left, root2.right) && check(root1.right, root2.left);
};
