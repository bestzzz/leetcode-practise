const { createListNode, Node, logList } = require('./createList');

// 输入一个链表，反转链表后，输出新链表的表头。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 反转链表
 * @param {Node} pHead 
 */
function ReverseList(pHead)
{
    if (!pHead) {
      return null;
    }

    let pre = null;
    let cur = pHead;
    let next = pHead.next;
    
    while (true) {
      cur.next = pre;

      if (!next) {
        return cur;
      }

      pre = cur;
      cur = next;
      next = next.next;
    }
}

const list = createListNode([4,3,2,1]); // (head)1 -> 2 -> 3 -> 4
logList(list.head);

console.log('**********');
const res = ReverseList(list.head);
console.log(res, 'res');

logList(res);


/**
 * 思路
 * 三指针：一个存当前节点，一个存前一个节点，一个存后一个节点
 * 遍历，每次把当前节点指向前一个节点，然后各个指针向后走一步，直到遍历结束。
 * 正常情况下双指针是可以的，但是如果把第二个指针指向第一个指针，那么后一个节点就找不到了。所以第三个指针的目的是存储后一个节点。
 * https://www.nowcoder.com/questionTerminal/75e878df47f24fdc9dc3e400ec6058ca?answerType=1&f=discussion
 */
