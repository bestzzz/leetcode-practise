/**
 * 全排列问题
 * 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 示例：   
输入: [1,2,3]
输出: [
[1,2,3],
[1,3,2],
[2,1,3],
[2,3,1],
[3,1,2],
[3,2,1]
]
 */

/**
 * 解题思路：https://juejin.cn/book/6844733800300150797/section/6844733800358871048?enter_from=course_center&utm_source=course_center
 */

const permute = (nums) => {

  // 当前排列
  const cur = [];
  // 结果(全部排列组合)
  const res = [];
  // 用于检查当前数字是否已使用
  const visited = {};
  
  const dfs = (nth) => {
    if (nth === nums.length) {
      res.push(cur);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (visited[num]) continue;
      cur.push(num);
      visited[num] = 1;
      dfs(nth + 1);
      cur.pop();
      visited[num] = 0;
    };
  };

  dfs(0);
  return res;
};
