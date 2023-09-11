/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 
 * 示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 */

const { Node, createListNode, logListNode, createListNode2 } = require("./ListNode");

// 解：https://juejin.cn/book/6844733800300150797/section/6844733800350498823?enter_from=course_center&utm_source=course_center

/**
 * 解题思路：
 * 
 */
const mergeTwoLists = function(l1, l2) {
  // 先记录下头节点 防止丢失
  var head = new Node();

  // 当前指针 用于穿针引线
  var cur = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }

  cur.next = l1 ? l1 : l2;
  return head.next;
};

const l1 = createListNode2([1,2,4]);
const l2 = createListNode2([1,3,4]);
const res = mergeTwoLists(l1, l2);
logListNode(res);
