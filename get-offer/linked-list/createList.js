// 生成链表

// 节点
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

// 链表
class ListNode {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 插入节点
  insert(node) {
    if (this.head) {
      node.next = this.head;
    } else {
      node.next = null;      
    }
    this.head = node;
    this.length++;
  }
}

/**
 * 创建链表
 * @param {Array} arr
 */
function createListNode (arr) {
  const listNode = new ListNode();

  if (!arr || !arr.length) {
    return listNode;
  }

  arr.forEach(item => {
    const node = new Node(item);
    listNode.insert(node);
  });

  return listNode;
}

/**
 * 遍历打印链表节点
 * @param {Node} head 
 */
function logList (head) {
  let node = head;
  while (node) {
    console.log(node, node.val);
    node = node.next;
  }
}

// export default { createListNode };
module.exports = { createListNode, ListNode, Node, logList };
