/**
 * 128. 库存管理 I
 * 仓库管理员以数组 stock 形式记录商品库存表。stock[i] 表示商品 id，可能存在重复。原库存表按商品 id 升序排列。现因突发情况需要进行商品紧急调拨，管理员将这批商品 id 提前依次整理至库存表最后。请你找到并返回库存表中编号的 最小的元素 以便及时记录本次调拨。
 * 
 * 示例 1：

输入：stock = [4,5,8,3,4]
输出：3
示例 2：

输入：stock = [5,7,9,1,2]
输出：1
 */


/**
 * 解题思路：https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/solutions/340801/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-by-leetcode-s/?envType=study-plan-v2&envId=coding-interviews
 * 二分法
 * 拿中间值与右边界进行比较
 * 如果中间值 > 右边界 则舍弃左半边 让左边界向右移动 移至中间
 * 如果中间值 < 右边界 则舍弃右半边 让右边界向左移动 移至中间
 * 如果中间值 = 右边界 则让右边界向左移动1
 * 直到左边界 >= 右边界时 则此时定位到最小值 
 */


/**
 * @param {number[]} stock
 * @return {number}
 */
var stockManagement = function(stock) {
  let left = 0, right = stock.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = stock[mid];
    if (midValue < stock[right]) {
      right = mid;
    } else if (midValue > stock[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  };

  return stock[left];
};

console.log(stockManagement([1,3,5]));
