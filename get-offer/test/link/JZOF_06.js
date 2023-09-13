/**
 * 剑指 Offer 06. 从尾到头打印链表
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 */

// 解：

/**
 * 解题思路：正序遍历 unshift进数组
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
 * @return {number[]}
 */
var reversePrint = function(head) {
  var res = [];
  while (head) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
};




/**
 * 方法二： 递归
 * @param {*} head 
 * @returns 
 */
var reversePrint = function(head) {
  return head == null ? [] : reversePrint(head.next).concat(head.val)
};

