/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
假设一个二叉搜索树具有如下特征：
节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
 */

const isValidBST = root => {
  const helper = (root, min, max) => {
    if (!root) return true;

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
      return false;
    }

    return helper(root.left, min, root.val) && helper(root.right, node.val, max);
  };

  return helper(root, null, null);
};
