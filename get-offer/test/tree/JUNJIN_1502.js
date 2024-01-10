/**
 * 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。

示例: 输入: nums = [1,2,3]
输出:
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
 */

/**
 * 解题思路：https://juejin.cn/book/6844733800300150797/section/6844733800358871048?enter_from=course_center&utm_source=course_center
 * 看不懂 死记硬背法
 */

const subsets = (nums) => {
  const res = [];
  const len = nums.length;
  const subset = [];
  dfs(0);

  const dfs = (index) => {
    res.push(subset.slice());
    for (let i = index; i < len; i++) {
      subset.push(nums[i]);
      dfs(index + 1);
      subset.pop();
    }
  };

  return res;
};
