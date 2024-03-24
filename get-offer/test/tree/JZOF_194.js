/**
 * 194. 二叉树的最近公共祖先
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 */


/**
 * 解题思路：https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/solutions/217281/mian-shi-ti-68-ii-er-cha-shu-de-zui-jin-gong-gon-7/?envType=study-plan-v2&envId=coding-interviews
 * https://www.bilibili.com/video/BV1jd4y1B7E2/?spm_id_from=333.337.search-card.all.click&vd_source=76dd62004d6bc5529e30c3dba6551386
 * 采用后续遍历(左右根) 在回溯阶段处理并将结果向上传递
 */


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root.val === p.val || root.val === q.val) {
    return root;
  };

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (!left) return right;
  if (!right) return left;
  return root;
};
