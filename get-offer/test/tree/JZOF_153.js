/**
 * 153. 二叉树中和为目标值的路径
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：[[5,4,11,2],[5,8,4,5]]
 */

/**
 * 解题思路: 利用递归深度优先遍历 并声明path来记录路径 注意：当触底回溯时需要path.pop()
 * https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/?envType=study-plan-v2&envId=coding-interviews
 * https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/solutions/1089024/dfsjie-jue-er-cha-shu-zhong-he-wei-mou-y-jvp2/?envType=study-plan-v2&envId=coding-interviews
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
 * @param {number} target
 * @return {number[][]}
 */
var pathTarget = function(root, target) {
  if (!root) return [];
  const res = [];
  const path = [];

  const sum = () => path.reduce((res, cur) => res + cur, 0);

  const travers = (root) => {
    if (!root) return;

    path.push(root.val);

    if (!root.left && !root.right && sum() === target) {
        res.push(path.slice());
    }

    travers(root.left);
    travers(root.right);
    path.pop();
  };
  
  travers(root);

  return res;
};
