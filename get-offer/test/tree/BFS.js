/**
 * 二叉树 广度优先遍历(BFS)
 */

/**
 * 思路：利用队列先进先出特性 将节点逐层入队 节点遍历完后出队并将其子节点入队
 * https://juejin.cn/book/6844733800300150797/section/6844733800358887438?enter_from=course_center&utm_source=course_center
 */

const BFS = (root) => {
  const queue = [root];
  
  while (queue.length) {
    const cur = queue.shift();
    console.log(cur);
    const left = cur.left;
    const right = cur.right;
    left && queue.push(left);
    right && queue.push(right);
  }
};
