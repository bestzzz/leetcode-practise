/**
 * 题目描述：翻转一棵二叉树。
 * 示例：
输入：
     4
   /   \
  2     7
 / \   / \
1   3 6   9

输出：
     4
   /   \
  7     2
 / \   / \
9   6 3   1
 */

/**
 * 解题思路：深度优先遍历(递归) 遍历每个节点的同时 交换其子节点
 * https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/solutions/180718/mian-shi-ti-27-er-cha-shu-de-jing-xiang-di-gui-fu-/?envType=study-plan-v2&envId=coding-interviews
 * https://juejin.cn/book/6844733800300150797/section/6844733800363065352?enter_from=course_center&utm_source=course_center
 */

/**
 * 方法一：入栈时交换
 * 需要借用一个交换媒介temp 在递归入栈的过程中进行交换
 */
const invertTree1 = root => {
  if (!root) return null;
  
  // 交换
  const temp = root.right;
  root.right = root.left;
  root.left = temp;

  // 递归子节点
  invertTree1(root.left);
  invertTree1(root.right);

  return root
};

/**
 * 方法二(不建议 不容易理解)：出栈时交换
 * 递归遍历二叉树 递归到深处向上回溯过程中 将左右子节点进行交换即可。
 */
const invertTree2 = (root) => {
  if (!root) return root;

  const right = invertTree(root.right);
  const left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
}
