/**
 * 剑指 Offer 25. 合并两个排序的链表
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 * 
 * 示例1：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
 */

/**
 * 解题思路：
 * 
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var cur = new ListNode();
  var dummy = cur;

  while (l1 && l2) {
    if (l1.val >= l2.val) {
      cur.next = l2;
      l2 = l2.next;
    } else {
      cur.next = l1;
      l1 = l1.next;
    }
    cur = cur.next;
  };

  if (l1 || l2) {
    cur.next = l1 || l2;
  };

  return dummy.next;
};
