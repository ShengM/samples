// 反转链表
// 1->2->3->4->5->NULL to 5->4->3->2->1->NULL

import { LinkedListNode, print } from "../util";

function reverse(head: LinkedListNode) {
  let pre = null;
  let current = head;

  while (current) {
    let temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }

  return pre;
}

let node5 = { value: 5, next: null };
let node4 = { value: 4, next: node5 };
let node3 = { value: 3, next: node4 };
let node2 = { value: 2, next: node3 };
let node1 = { value: 1, next: node2 };

print(node1);
print(reverse(node1));
