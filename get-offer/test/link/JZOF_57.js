/**
 * 57. 和为s的两个数字
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
 * 
 * 示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
示例 2：

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
 */


/**
 * 解题思路：
 * 由于是递增数组 所以我们在首尾设两个指针 然后循环判断两数和是否等于s
 * 如果大于s 则右边指针向左移
 * 如果小于s 则左边指针向右移
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let left = nums[i];
    let right = nums[j];

    if (left + right > target) {
      j--;
    } else if (left + right < target) {
      i++;
    } else {
      return [left, right];
    }
  }

  return [];
};
