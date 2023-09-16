
/**
 * 剑指 Offer 52. 两个链表的第一个公共节点
 * 输入两个链表，找出它们的第一个公共节点。
 */

/**
 * 解题思路：遍历两个链表 直到他们相交
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var step1 = headA;
  var step2 = headB;

  while (step1 !== step2) {
    step1 = step1 ? step1.next : headB;
    step2 = step2 ? step2.next : headA;
  }

  return step1;
};

