/**
 * 21. 调整数组顺序使奇数位于偶数前面
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 * 
 * 示例：

输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 */


/**
 * 解题思路：
 * 遍历数组 遇到奇数将其存入arr1 遇到偶数将其存入arr2 最后合并arr1和arr2
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  var arr1 = [];
  var arr2 = [];
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (item % 2 === 0) {
      arr2.push(item);
    } else {
      arr1.push(item);
    }
  }

  return arr1.concat(arr2);
};
