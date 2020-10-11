export interface LinkedListNode {
  value: number;
  next: LinkedListNode;
}

export function print(head: LinkedListNode) {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
  console.log("NULL");
}
