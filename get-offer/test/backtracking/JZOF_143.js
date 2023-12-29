/**
 * 143. 子结构判断
 * 给定两棵二叉树 tree1 和 tree2，判断 tree2 是否以 tree1 的某个节点为根的子树具有 相同的结构和节点值 。
注意，空树 不会是以 tree1 的某个节点为根的子树具有 相同的结构和节点值 。

示例：
输入：tree1 = [1,7,5], tree2 = [6,1]
输出：false
解释：tree2 与 tree1 的一个子树没有相同的结构和节点值。
 */


/**
 * 解题思路：https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/solutions/334492/javascript-di-gui-fei-di-gui-liang-chong-jie-fa-sh/?envType=study-plan-v2&envId=coding-interviews
 * 写一个比较函数 用于二叉树之间的递归比较
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  // 约定空树不是任意一个树的子结构
  if(!A || !B) {
      return false;
  }
  return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

/**
* @param {TreeNode} A
* @param {TreeNode} B
* @return {boolean}
*/
var isSameTree = function(A, B) {
  // B子树是空子树 ok
  if(!B) {
      return true;
  }
  // A子树是空子树 且 B 非空，不 ok
  if(!A) {
      return false;
  }
  // 当前节点的值不相等，不 ok
  if(A.val !== B.val) {
      return false;
  }
  // 递归考察左子树、右子树
  return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
};
