/**
 * 栈实现队列
 * 思路：内部预置两个栈 每次从队列中取数据的时候 先看看stack2有数据没 没数据的话把stack1里的数据依次放进stack2中 这样stack2就是颠倒过来的1 然后从stack2取即可
 */
class Queue {
  stack_1 = [];
  stack_2 = [];

  push = (num) => {
    this.stack_1.push(num);
  }

  shift = () => {
    if (this.stack_2.length) {
      return this.stack_2.pop();
    }
    while (this.stack_1.length) {
      this.stack_2.push(this.stack_1.pop());
    }
    return this.stack_2.pop();
  }

  peek = () => {
    if (this.stack_2.length) {
      return this.stack_2[this.stack_2.length - 1];
    }
    while (this.stack_1.length) {
      this.stack_2.push(this.stack_1.pop());
    }
    return this.stack_2[this.stack_2.length - 1];
  };

  isEmpty = () => !this.stack_1.length && !this.stack_2.length;

  size = () => this.stack_1.length + this.stack_2.length;
};

const queue = new Queue();

queue.push(4);
queue.push(2);
queue.push(3);
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
