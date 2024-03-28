/**
 * 175. 计算二叉树的深度
 * 某公司架构以二叉树形式记录，请返回该公司的层级数。
 */


/**
 * 解题思路：和153/1502类似 借用栈存储路径 向下递归时push进栈 向上回溯时pop出栈；并设置路径长度 直到遇见最大长度路径 将其返回即可
 * https://www.bilibili.com/video/BV1Gd4y1V75u/?spm_id_from=333.788&vd_source=76dd62004d6bc5529e30c3dba6551386
 */


/**
 * @param {TreeNode} root
 * @return {number}
 */
var calculateDepth = function(root) {
  const stack = [];
  let res = 0;
  
  const dfs = root => {
    if (!root) return;

    stack.push(root);

    if (stack.length > res) {
      res++;
    }

    dfs(root.left);
    dfs(root.right);

    stack.pop();
  };

  dfs(root);

  return res;
};


const BFS = root => {
  if (!root) return 0;
  const queue = [root];
  let res = 0;

  while (queue.length) {
    res++;
    // 必须缓存下来当前长度
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }

  return res;
};
