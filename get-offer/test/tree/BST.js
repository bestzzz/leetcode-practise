/**
 * 二叉搜索树
 * 是一棵由根结点、左子树、右子树组成的树，同时左子树和右子树都是二叉搜索树，且左子树上所有结点的数据域都小于等于根结点的数据域，右子树上所有结点的数据域都大于等于根结点的数据域
 */


/**
 * 查询
 * @param {*} root 
 * @param {*} n 
 * @returns 
 */
const search = (root, n) => {
  if (!root) {
    return null;
  };

  if (root.val === n) {
    return root;
  } else if (root.val > n) {
    return search(root.left, n);
  } else {
    return search(root.right, n);
  }
};

/**
 * 插入
 * @param {*} root 
 * @param {*} n 
 */
const insert = (root, n) => {
  if (!root) {
    root = new TreeNode(n);
    return root;
  };

  if (root.val > n) {
    root.left = insert(root.left, n);
  } else {
    root.right = insert(root.right, n);
  }

  return root;
};

/**
 * 删除
 * @param {*} root 
 * @param {*} n 
 */
const remove = (root, n) => {
  if (!root) return root;

  if (root.val === n) {
    if (!root.left && !root.right) {
      root = null;
    } else if (root.left) {
      const maxLeft = findMax(root.left);
      root.val = maxLeft.val;
      root.left = remove(root.left, maxLeft.val);
    } else {
      const minRight = findMin(root.right);
      root.val = minRight.val;
      root.right = remove(root.right, minRight.val);
    };
  } else if (root.val > n) {
    root.left = remove(root.left, n);
  } else {
    root.right = remove(root.right, n);
  }

  return root;
};

function findMax(root) {
  while (root.right) {
    root = root.right;
  }
  return root;
}

function findMin(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
}
