/**
 * 193. 二叉搜索树的最近公共祖先
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 */


/**
 * 解题思路：https://leetcode.cn/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/solutions/216894/mian-shi-ti-68-i-er-cha-sou-suo-shu-de-zui-jin-g-7/?envType=study-plan-v2&envId=coding-interviews
 * 若 root 是 p , q 的 最近公共祖先 ，则只可能为以下三种情况之一：
p 和 q 在 root 的子树中，且分列 root 的 异侧（即分别在左、右子树中）；
p = root 且 q 在 root 的左或右子树中；
q = root 且 p 在 root 的左或右子树中；
 */


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};
