// 判断链表是否有环
// 1->2->3->4->3 有

import { LinkedListNode } from "../util";

// 额外空间判重
function cycle(head: LinkedListNode) {
  let current = head;
  let nodes = [];
  while (current) {
    current = current.next;
    if (nodes.includes(current)) {
      return true;
    } else {
      nodes.push(current);
    }
  }

  return false;
}

// 快慢指针
function cycle1(head: LinkedListNode) {
  if (!head || !head.next) {
    return false;
  }

  if (head === head.next) {
    return true;
  }

  let slowPtr = head;
  let fastPtr = head;
  do {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr === fastPtr) {
      return true;
    }
  } while (slowPtr && fastPtr);

  return false;
}

let node4 = { value: 4, next: null };
let node3 = { value: 3, next: node4 };
let node2 = { value: 2, next: node3 };
let node1 = { value: 1, next: node2 };

// node4.next = node3;

console.log("has cycle:", cycle1(node1));
