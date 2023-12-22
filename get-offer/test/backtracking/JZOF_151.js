/**
 * 151. 彩灯装饰记录 III
 * 一棵圣诞树记作根节点为 root 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照如下规则记录彩灯装饰结果：

第一层按照从左到右的顺序记录
除第一层外每一层的记录顺序均与上一层相反。即第一层为从左到右，第二层为从右到左。

输入：root = [8,17,21,18,null,null,6]
输出：[[8],[21,17],[18,6]]
 */


/**
 * 解题思路：广度优先遍历
 * 设置一个值 当遍历为偶数次时 将当前数组反转
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
  let step = 0;

  while (queue.length) {
    step++;
    let arr = [];
    for (let i = queue.length; i > 0; i--) {
      const cur = queue.shift();
      arr.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    step % 2 || arr.reverse();
    res.push(arr);
  }

  return res;
};
