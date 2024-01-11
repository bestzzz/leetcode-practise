/**
 * 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
 * 示例: 输入: [1,null,2,3]
 * 输出: [1,2,3]
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 */

/**
 * 解题思路：利用递归的本质(栈)
 */

const root1 = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

const root2 = {
  val: "1",
  left: null,
  right: {
    val: "2",
    right: {
      val: "3"
    }
  }
};

const test = (root) => {
  const stack = [root];
  const res = [];
  if (!root) return res;
  
  while (stack.length) {
    const cur = stack.pop();
    res.push(cur.val);
    const left = cur.left;
    const right = cur.right;
    right && stack.push(right);
    left && stack.push(left);
  };

  return res;
};

console.log(test(root2));
