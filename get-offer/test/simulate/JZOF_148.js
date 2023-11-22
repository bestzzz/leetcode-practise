/**
 * 148. 验证图书取出顺序
 * 现在图书馆有一堆图书需要放入书架，并且图书馆的书架是一种特殊的数据结构，只能按照 一定 的顺序 放入 和 拿取 书籍。
给定一个表示图书放入顺序的整数序列 putIn，请判断序列 takeOut 是否为按照正确的顺序拿取书籍的操作序列。你可以假设放入书架的所有书籍编号都不相同。

示例 1：
输入：putIn = [6,7,8,9,10,11], takeOut = [9,11,10,8,7,6]
输出：true
解释：我们可以按以下操作放入并拿取书籍：
push(6), push(7), push(8), push(9), pop() -> 9,
push(10), push(11),pop() -> 11,pop() -> 10, pop() -> 8, pop() -> 7, pop() -> 6

示例 2：
输入：putIn = [6,7,8,9,10,11], takeOut = [11,9,8,10,6,7]
输出：false
解释：6 不能在 7 之前取出。
 */


/**
 * 解题思路：https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/solutions/1636009/javascriptban-jie-ti-si-lu-by-ityou-o-2bwg/?envType=study-plan-v2&envId=coding-interviews
 * 模拟
 * 设立一个栈 用来模拟图书入栈出栈的操作 假如最后栈的长度为0 则说明是按规则取出。
 */

/**
 * @param {number[]} putIn
 * @param {number[]} takeOut
 * @return {boolean}
 */
var validateBookSequences = function(putIn, takeOut) {
  // 设立一个栈
  const mock = [];
  // 取出的索引
  let j = 0;
  // 开始入栈
  for (let i = 0; i < putIn.length; i++) {
    mock.push(putIn[i]);
    // 模拟出栈
    while (mock.length && mock[mock.length - 1] === takeOut[j]) {
      mock.pop();
      j++;
    };
  };
  return !mock.length;
};

console.log(validateBookSequences([6,7,8,9,10,11], [11,9,8,10,6,7]));
