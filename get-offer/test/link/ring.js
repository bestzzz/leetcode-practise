/**
 * 给定一个链表，判断链表中是否有环。
输入: [3,2,0,4]（链表结构如下图） 输出：true
 */

/**
 * 解题思路：向节点对象中设立flag 然后让链表节点一直往前走 如果发现当前节点已经有flag 则说明指向了之前的节点 从而形成了环
 */
const hasCycle = function(head) {
  while (head) {
    if (head.flag) {
      return true;
    } else {
      head.flag = 1;
      head = head.next;
    }
  }
  return false;
};


/**
 * 给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。
 * 输入：head = [3,2,0,-4]（如下图） 输出：tail connects to node index 1 解释：链表中有一个环，其尾部连接到第二个结点。
 */

/**
 * 解题思路：
 */
const detectCycle = function (head) {
  let index = 0;
  while (head) {
    if (head.flag || head.flag === 0) {
      return head.flag;
    }
    head.flag = index;
    head = head.next;
    index++;
  }
  return null;
}
