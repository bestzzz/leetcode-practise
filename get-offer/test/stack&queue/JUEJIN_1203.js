/**
 * 栈的设计——“最小栈”问题
 * 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

示例:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); --> 返回 -3.
minStack.pop();
minStack.top(); --> 返回 0.
minStack.getMin(); --> 返回 -2.
 */


/**
 * 解题思路：https://juejin.cn/book/6844733800300150797/section/6844733800354709511?enter_from=course_center&utm_source=course_center
 * 这里我们需要实现的是一个从栈底到栈顶呈递减趋势的栈（敲黑板！递减栈出现第二次了哈）：

取最小值：由于整个栈从栈底到栈顶递减，因此栈顶元素就是最小元素。
若有新元素入栈：判断是不是比栈顶元素还要小，否则不准进入 stack2。
若有元素出栈：判断是不是和栈顶元素相等，如果是的话，stack2 也要出栈。
 */


/**
 * plan B
 */
class MiniStack {

  constructor() {
    this.stack = [];
  }
  
  push = (x) => {
    this.stack.push(x);
  };

  pop = () => {
    this.stack.pop();
  };

  top = () => {
    if (!this.stack.length) return null;
    return this.stack[this.stack.length - 1];
  };

  getMin = () => {
    if (!this.stack.length) return null;
    let res;
    this.stack.forEach(item => {
      if (!res) res = item;
      if (item < res) {
        res = item;
      }
    });
    return res;
  };
};



/**
 * plan A
 */
class MiniStack2 {

  constructor() {
    this.stack = [];
    this.stack2 = [];
  }
  
  push = (x) => {
    this.stack.push(x);
    if (!this.stack2.length || this.stack2[this.stack2.length - 1] > x) {
      this.stack2.push(x);
    }
  };

  pop = () => {
    const target = this.stack.pop();
    if (this.stack2[this.stack2.length - 1] === target) {
      this.stack2.pop();
    }
  };

  top = () => {
    return this.stack[this.stack.length - 1];
  };

  getMin = () => {
    return this.stack2[this.stack2.length - 1];
  };
};
