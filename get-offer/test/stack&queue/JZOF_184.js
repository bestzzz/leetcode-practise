/**
 * 184. 设计自助结算系统
 * 请设计一个自助结账系统，该系统需要通过一个队列来模拟顾客通过购物车的结算过程，需要实现的功能有：

get_max()：获取结算商品中的最高价格，如果队列为空，则返回 -1
add(value)：将价格为 value 的商品加入待结算商品队列的尾部
remove()：移除第一个待结算的商品价格，如果队列为空，则返回 -1
注意，为保证该系统运转高效性，以上函数的均摊时间复杂度均为 O(1)
 * 
示例 1：

输入: 
["Checkout","add","add","get_max","remove","get_max"]
[[],[4],[7],[],[],[]]

输出: [null,null,null,7,4,7]
示例 2：

输入: 
["Checkout","remove","get_max"]
[[],[],[]]

输出: [null,-1,-1]
 */


/**
 * 解题思路：维护一个双端递减队列
 */



var Checkout = function() {
  this.queue = [];
  this.deque = [];
};

/**
 * @return {number}
 */
Checkout.prototype.get_max = function() {
  return this.deque.length ? this.deque[0] : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
Checkout.prototype.add = function(value) {
  this.queue.push(value);
  while (this.deque.length && this.deque[this.deque.length - 1] < value) {
    this.deque.pop();
  }
  this.deque.push(value);
  return value
};

/**
 * @return {number}
 */
Checkout.prototype.remove = function() {
  if (!this.queue.length) return -1;
  const value = this.queue.shift();
  if (value === this.deque[0]) {
    this.deque.shift();
  }
};

/**
 * Your Checkout object will be instantiated and called as such:
 * var obj = new Checkout()
 * var param_1 = obj.get_max()
 * obj.add(value)
 * var param_3 = obj.remove()
 */
