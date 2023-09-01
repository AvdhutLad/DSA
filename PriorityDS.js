class Node {
constructor(val, priority) {
this.val = val;
this.priority = priority;
this.next = null;
}
}
class PriorityQueue {
constructor() {
this.head = null;
}
enqueue(val, priority) {
const newNode = new Node(val, priority);
if (!this.head) {
this.head = newNode;
return;
}
if (newNode.priority > this.head.priority) {
newNode.next = this.head;
this.head = newNode;
return;
}
let currentNode = this.head;
while (currentNode.next && currentNode.next.priority >= newNode.priority) 
{
currentNode = currentNode.next;
}
newNode.next = currentNode.next;
currentNode.next = newNode;
}
printDescending() {
let currentNode = this.head;
while (currentNode) {
console.log(currentNode.val, currentNode.priority);
currentNode = currentNode.next;
}
}
}
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("",150);
priorityQueue.enqueue("",50);
priorityQueue.enqueue("",500);
priorityQueue.enqueue("",100);
console.log("Printing nodes in descending order: ");
priorityQueue.printDescending();
