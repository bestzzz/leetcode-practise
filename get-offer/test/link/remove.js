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

// logListNode(deleteDuplicates2(createListNode2([1,1,1,3,4,5,5])))


/**
 * 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个结点后，链表变为 1->2->3->5.
说明： 给定的 n 保证是有效的。
 */
const removeNthFromEnd = function(head, n) {
  var dummy = new Node();
  dummy.next = head;

  var slow = dummy;
  var fast = dummy;
  
  // 快指针先走两步 和慢指针形成n个差距
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // 同步走 当快指针走到头时 就可以定位到n的位置就是慢指针所在位置(因为快慢指针间隔为n)
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // 删除当前节点
  slow.next = slow.next.next;
  
  return dummy.next;
};

// logListNode(removeNthFromEnd(createListNode2([1,1,1,3,4,5,5]), 3))
