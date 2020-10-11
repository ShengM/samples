// 节点两两反转
// 1->2->3->4->NULL to 2->1->4->3->5->NULL

import { LinkedListNode, print } from "../util";

function swap(head: LinkedListNode) {
  let current = head;
  let pre = null;
  head = head.next || head;

  while (current && current.next) {
    let temp = current.next.next;
    current.next.next = current;
    if (pre) {
      pre.next = current.next;
    }
    current.next = temp;
    pre = current;
    current = temp;
  }

  return head;
}

let node5 = { value: 5, next: null };
let node4 = { value: 4, next: node5 };
let node3 = { value: 3, next: node4 };
let node2 = { value: 2, next: node3 };
let node1 = { value: 1, next: node2 };

print(swap(node1));
