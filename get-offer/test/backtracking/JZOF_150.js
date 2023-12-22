/**
 * 150. 彩灯装饰记录 II
 * 一棵圣诞树记作根节点为 root 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照从左到右的顺序返回每一层彩灯编号，每一层的结果记录于一行。
 * 
 * 示例1:
 * 输入：root = [8,17,21,18,null,null,6]
   输出：[[8],[17,21],[18,6]]
 */

/**
 * 解题思路：利用队列进行广度优先遍历 与上一题不同的是 本次需要将每一层集合在一个数组中
 * 所以我们可以在遍历的同时加一层队列的遍历 
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
 * @return {number[][]}
 */
var decorateRecord = function(root) {
  if (!root) return [];

  const res = [];
  const queue = [root];
  
  while (queue.length) {
    const arr = [];
    for (let i = queue.length; i > 0; i--) {
      const cur = queue.shift();
      arr.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }

    res.push(arr);
  };

  return res;
};
