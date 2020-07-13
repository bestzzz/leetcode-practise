// import {createListNode} from './createList';
const { createListNode, Node } = require('./createList');

// 输入两个链表，找出它们的第一个公共结点。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

const list1 = createListNode([1,2,3,5,6]);
const list2 = createListNode([1,2,3,4]);

console.log(list1, list2);

/**
 * 找公共节点
 * @param {Node} pHead1 
 * @param {Node} pHead2 
 */
function FindFirstCommonNode(pHead1, pHead2)
{
    if (!pHead1) {
      return null;
    }
    if (!pHead2) {
      return null;
    }

    // 创建双指针
    let p1 = pHead1;
    let p2 = pHead2;

    // 将长的链表跑完长度差
    const pLength1 = getLength(pHead1);
    const pLength2 = getLength(pHead2);
    let lengthDiff = Math.abs(pLength1 - pLength2);
    if (pLength1 > pLength2) {
      while (lengthDiff) {
        p1 = p1.next;
        lengthDiff--;
      }
    } else {
      while (lengthDiff) {
        p2 = p2.next;
        lengthDiff--;
      }
    }

    while (p1) {
      if (p1.val === p2.val) {
        return p1.val;
      } else {
        p1 = p1.next;
        p2 = p2.next;
      }
    }

    return null;
};

/**
 * 获取长度
 */
function getLength(headNode) {
  let step = 0;
  while (headNode) {
    headNode = headNode.next;
    step++;
  }

  return step;
}

const res = FindFirstCommonNode(list1.head, list2.head);
console.log(res, 'res');


// 解：https://www.nowcoder.com/questionTerminal/6ab1d9a29e88450685099d45c9e31e46?answerType=1&f=discussion
