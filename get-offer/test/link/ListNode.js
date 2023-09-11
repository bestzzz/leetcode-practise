
class Node {
  constructor(val) {
    this.val = val || null;
    this.next = null;
  }
};

class ListNode {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(node) {
    if (this.head) {
      node.next = this.head;
    }else {
      node.next = null;
    }
    this.head = node;
    this.length++;
  }
};

const createListNode = (arr) => {
  const listNode = new ListNode();

  if (!arr?.length) {
    return listNode;
  }

  arr.forEach(item => {
    const node = new Node(item);
    listNode.insert(node);
  });

  return listNode;
};

const createListNode2 = (arr) => {
  var head = new Node();
  if (!arr?.length) {
    return head;
  }

  var cur = head;
  arr.forEach(item => {
    cur.next = new Node(item);
    cur = cur.next;
  });

  return head.next;
};

const logListNode = (head) => {
  let node = head;
  while (node) {
    console.log('logListNode:', node.val);
    node = node.next;
  }
};

module.exports = { Node, ListNode, createListNode, createListNode2, logListNode };
