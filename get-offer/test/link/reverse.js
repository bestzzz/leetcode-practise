/**
 * 定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 */

/**
 * 解题思路：想办法让前面的节点指向后面的 并且还有办法前进
 * 三指针：1指针 指向前面的节点 为了反转当前节点的指向
 *        2指针 指向当前节点 为了改变当前节点next指向(指向prev)
 *        3指针 指向后面指针 为了不丢失位移目标 让当前节点继续前移
 * @param {*} head 
 * @returns 
 */
const reverseList = function(head) {
  var prev = null;
  var cur = head;

  while (cur) {
    var next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};




/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 示例:
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
 */

// 解：https://juejin.cn/book/6844733800300150797/section/6844733800354676743?enter_from=course_center&utm_source=course_center
const reverseList2 = function(head, m, n) {
  var dummy = null;
  dummy.next = head;

  var first = head;
  for (let i = 0; i < m - 2; i++) {
    first = first.next;
  }

  var prev = first.next;
  var cur = prev.next;
  var final = prev;
  for (let i = 0; i < n - m; i++) {
    var next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  first.next = prev;
  final.next = cur;

  return dummy.next;
};

