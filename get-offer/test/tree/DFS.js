/**
 * 二叉树 深度优先遍历(DFS)
 */

/**
 * 思路：
 * https://juejin.cn/book/6844733800300150797/section/6844733800358887438?enter_from=course_center&utm_source=course_center
 */


// 前序
const DFS_Front = (root) => {
  if (!root) return;

  console.log(root.val);
  DFS_Front(root.left);
  DFS_Front(root.right);
};

// 中序
const DFS_Middle = () => {
  if (!root) return;

  DFS_Front(root.left);
  console.log(root.val);
  DFS_Middle(root.right);
};

// 后序
const DFS_Back = () => {
  if (!root) return;

  DFS_Back(root.left);
  DFS_Back(root.right);
  console.log(root.val);
};
