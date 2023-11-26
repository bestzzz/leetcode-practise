/**
 * 173. 点名
 * 某班级 n 位同学的学号为 0 ~ n-1。点名结果记录于升序数组 records。假定仅有一位同学缺席，请返回他的学号。
 * 
 * 示例 1:

输入: records = [0,1,2,3,5]
输出: 4
示例 2:

输入: records = [0, 1, 2, 3, 4, 5, 6, 8]
输出: 7
 */


/**
 * 解题思路：二分法
 */


/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function(records) {
  let left = 0;
  let right = records.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (records[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

console.log(takeAttendance([0,1,2,3,5]));
