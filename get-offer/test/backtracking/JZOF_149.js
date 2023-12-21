/**
 * 149. 彩灯装饰记录 I
 * 一棵圣诞树记作根节点为 root 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照从 左 到 右 的顺序返回每一层彩灯编号。
 * 
 * 输入：root = [8,17,21,18,null,null,6]
 * 输出：[8,17,21,18,6]
 */

/**
 * 解题思路：BFS 广度优先遍历
 * 通过队列来进行广度优先遍历 区别于深度优先遍历的栈(递归本质就是一个函数调用栈的操作)
 * https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/solutions/134956/mian-shi-ti-32-i-cong-shang-dao-xia-da-yin-er-ch-4/?envType=study-plan-v2&envId=coding-interviews
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
 * @return {number[]}
 */
var decorateRecord = function(root) {
  if (!root) return [];
  
  const res = [];
  let queue = [root];

  while (queue.length) {
    const cur = queue.shift();
    res.push(cur.val);
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }

  return res;
};
