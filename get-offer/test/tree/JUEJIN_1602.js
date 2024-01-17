/**
 * 题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 示例： 二叉树：[3,9,20,null,null,15,7],
 * 
  3
 / \
9  20
  /  \
 15   7

 * 返回其层次遍历结果：
[
[3],
[9,20],
[15,7]
]
 */


/**
 * 解题思路：https://juejin.cn/book/6844733800300150797/section/6844733800363065352?enter_from=course_center&utm_source=course_center
 */


const levelOrder = (root) => {
  if (!root) return null;

  const queue = [root];
  const res = [];

  while (!!queue.length) {
    const level = [];
    const levelLen = level.length;

    for (let i = 0; i < levelLen; i++) {
      const cur = queue.shift();
      level.push(cur.val);
      const left = cur.left;
      const right = cur.right;
      left && queue.push(left);
      right && queue.push(right);
    };
    res.push(level);
  };

  return res;
}
