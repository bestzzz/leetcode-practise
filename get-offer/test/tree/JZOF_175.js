/**
 * 175. 计算二叉树的深度
 * 某公司架构以二叉树形式记录，请返回该公司的层级数。
 */


/**
 * 解题思路：和153/1502类似 借用栈存储路径 向下递归时push进栈 向上回溯时pop出栈；并设置路径长度 直到遇见最大长度路径 将其返回即可
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