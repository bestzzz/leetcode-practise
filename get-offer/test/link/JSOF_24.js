/**
 * 剑指 Offer 24. 反转链表
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 
 * 输入：1->2->3->4->5->NULL
 * 输出：5->4->3->2->1->NULL
 */

// 解：https://juejin.cn/book/6844733800300150797/section/6844733800354676743?enter_from=course_center&utm_source=course_center

/**
 * 解题思路：三指针
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var prev = null;
  var cur = head;
  while (cur) {
    var next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  };
  return prev;
};

