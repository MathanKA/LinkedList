// 10-->5-->4

// let LinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// }

// DRY
class Node {
   constructor(value) {
     this.value = value;
     this.next = null;
   }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    } 
    return array;
  }

  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToNode(index - 1);
    const holdPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdPointer;
    this.length++;
  }

  traverseToNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const indexToRemove = this.traverseToNode(index);
    const holdPointer = indexToRemove.next;
    const prevNode = this.traverseToNode(index - 1);
    prevNode.next = holdPointer;
    this.length--;
  }

  reverse() {
    if(!this.head.next) {
      return this.head
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(4);
myLinkedList.prepend(3);
// 3-->10-->5-->4
myLinkedList.insert(2, 18);

myLinkedList.insert(4, 1213);
myLinkedList.remove(4);
myLinkedList.reverse();
// myLinkedList.printList();

console.log(myLinkedList);
// console.log(myLinkedList.head);


