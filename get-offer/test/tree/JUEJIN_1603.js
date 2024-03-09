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
 * 解题思路：递归遍历二叉树 递归到深处向上回溯过程中 将左右子节点进行交换即可。
 * https://juejin.cn/book/6844733800300150797/section/6844733800363065352?enter_from=course_center&utm_source=course_center
 */

const invertTree = (root) => {
  if (!root) return root;

  const right = invertTree(root.right);
  const left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
}
