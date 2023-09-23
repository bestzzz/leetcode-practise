/**
 * 掘金小测13节第一题：用栈实现队列
 * 题目描述：使用栈实现队列的下列操作：
push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。

示例: MyQueue queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.peek(); // 返回 1
queue.pop(); // 返回 1
queue.empty(); // 返回 false
 */


/**
 * 解题思路：https://juejin.cn/book/6844733800300150797/section/6844733800358871054?enter_from=course_center&utm_source=course_center
 */

class MyQueue {
  
  constructor() {
    this.stack = [];
    this.stack2 = [];
  }

  push = (x) => {
    this.stack.push(x);
  };

  pop = () => {
    if (this.stack2.length) {
      return this.stack2.pop();
    };
    if (this.stack.length) {
      for (let i = 0; i < this.stack.length; i++) {
        this.stack2.push(this.stack.pop());
      }
      return this.pop();
    }
    return null;
  };

  peek = () => {
    if (this.stack2.length) {
      return this.stack2[this.stack2.length - 1];
    };
    if (this.stack.length) {
      for (let i = 0; i < this.stack.length; i++) {
        this.stack2.push(this.stack.pop());
      }
      return this.peek();
    }
    return null;
  };

  empty = () => {
    return !this.stack.length && !this.stack2.length;
  };
}
