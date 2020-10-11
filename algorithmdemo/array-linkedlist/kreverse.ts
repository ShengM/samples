// K个一组反转链表
// 1->2->3->4->5->NULL
// k=2, 2->1->4->3->5->NULL
// k=3, 3->2->1->4->5->NULL

import { LinkedListNode, print } from "../util";

function kreverse(head: LinkedListNode, k: number) {
  let cur = head;
  let pre = null;
  let temp = [];
  while (cur) {
    let i = 0;
    while (i < k) {
      if (!cur) {
        break;
      }

      temp.push(cur);
      cur = cur.next;
      i++;
    }
    
  }
}

let node5 = { value: 5, next: null };
let node4 = { value: 4, next: node5 };
let node3 = { value: 3, next: node4 };
let node2 = { value: 2, next: node3 };
let node1 = { value: 1, next: node2 };

print(node1);
print(reverse(node1));
