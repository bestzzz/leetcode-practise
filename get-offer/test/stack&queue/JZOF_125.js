/**
 * 125. 图书整理 II
 * 读者来到图书馆排队借还书，图书管理员使用两个书车来完成整理借还书的任务。书车中的书从下往上叠加存放，图书管理员每次只能拿取书车顶部的书。排队的读者会有两种操作：

push(bookID)：把借阅的书籍还到图书馆。
pop()：从图书馆中借出书籍。
为了保持图书的顺序，图书管理员每次取出供读者借阅的书籍是 最早 归还到图书馆的书籍。你需要返回 每次读者借出书的值 。

如果没有归还的书可以取出，返回 -1 。



示例 1：

输入：
["BookQueue", "push", "push", "pop"]
[[], [1], [2], []]
输出：[null,null,null,1]
解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.pop(); // return 1, queue is [2]
 */

/**
 * 解题思路：https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solutions/103069/mian-shi-ti-09-yong-liang-ge-zhan-shi-xian-dui-l-3/?envType=study-plan-v2&envId=coding-interviews
 * 题目含义简单来说就是用栈实现队列 (解法:双栈法)
 */


var CQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (!!this.outStack.length) {
    return this.outStack.pop();
  }
  while (!!this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
  return this.outStack.pop() || -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
