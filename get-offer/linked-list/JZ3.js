const {createListNode, Node} = require('./createList');

// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 从尾到头打印链表
 * @param {Node} head 
 */
function printListFromTailToHead(head)
{
  const arr = [];
  while (head) {
    arr.unshift(head);
    head = head.next;
  }

  return arr;
}; // 利用栈

function printListFromTailToHead(head)
{
  const arr = [];

  function step(node) {
    if (node) {
      arr.unshift(node);
    }

    if (node.next) {
      step(node.next);
    }
  }
  step(head);

  return arr;
}; // 递归

const listHead = createListNode([4,3,2,1]).head;
const res = printListFromTailToHead(listHead);
console.log(res);

/**
 * 三种解法：
 * 1.利用栈
 * 2.递归
 * 3.反转链表 遍历
 */
