/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次
 * 示例 1:
输入: 1->1->2
输出: 1->2
示例 2:
输入: 1->1->2->3->3
输出: 1->2->3
 */

const { Node, logListNode, createListNode2 } = require("./ListNode");

// 解：https://juejin.cn/book/6844733800300150797/section/6844733800350498823?enter_from=course_center&utm_source=course_center

/**
 * 解题思路：
 */
const deleteDuplicates = function(head) {
  var cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}

// logListNode(deleteDuplicates(createListNode2([1,1,3,4,5,5])))


/**
 * 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
示例 1:
输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:
输入: 1->1->1->2->3
输出: 2->3
 */

const deleteDuplicates2 = function(head) {
  var dummy = new Node();
  dummy.next = head;

  var cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      var val = cur.next.val;
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};

logListNode(deleteDuplicates2(createListNode2([1,1,1,3,4,5,5])))
