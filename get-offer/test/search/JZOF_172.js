/**
 * 172. 统计目标成绩的出现次数
 * 某班级考试成绩按非严格递增顺序记录于整数数组 scores，请返回目标成绩 target 的出现次数。
 * 
 * 示例 1：

输入: scores = [2, 2, 3, 4, 4, 4, 5, 6, 6, 8], target = 4
输出: 3
示例 2：

输入: scores = [1, 2, 3, 5, 7, 9], target = 6
输出: 0
 */


/**
 * 解题思路：https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/solutions/876905/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-wl6kr/?envType=study-plan-v2&envId=coding-interviews
 * 由于是单调递增数组 我们采用二分查找来优化复杂度
 */


/**
 * @param {number[]} scores
 * @param {number} target
 * @return {number}
 */
var countTarget = function(scores, target) {
  // 二分查找下标
  const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
  }

  // 求左右下标间距
  let ans = 0;
  const leftIdx = binarySearch(scores, target, true);
  const rightIdx = binarySearch(scores, target, false) - 1;
  if (leftIdx <= rightIdx && rightIdx < scores.length && scores[leftIdx] === target && scores[rightIdx] === target) {
      ans = rightIdx - leftIdx + 1;
  } 
  return ans;
};

console.log(countTarget([2, 2, 3, 4, 4, 4, 5, 6, 6, 8], 4));
