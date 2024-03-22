/**
 * 174.寻找二叉搜索树中的目标节点
 * 某公司组织架构以二叉搜索树形式记录，节点值为处于该职位的员工编号。请返回第 cnt 大的员工编号。
 */


/**
 * 解题思路：利用二叉搜索树的中序遍历的特点(递增/递减) 并设置一个计数器 当计数器为输入值时返回结果
 * https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/solutions/467945/xun-xu-jian-jin-xiang-xi-zhu-shi-by-cchroot-9/?envType=study-plan-v2&envId=coding-interviews
 */

/**
 * @param {TreeNode} root
 * @param {number} cnt
 * @return {number}
 */
var findTargetNode = function(root, cnt) {
  let step = 0;
  let res;
  const dfs = (root) => {
    if (!root) return null;
    dfs(root.right);
    step++;
    if (step === cnt) {
      res = root.val;
      return;
    };
    dfs(root.left);
  };

  dfs(root);
  return res;
};
