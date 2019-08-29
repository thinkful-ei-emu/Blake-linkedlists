class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  } 

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(item, newItem){
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;

    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = new _Node(newItem, currNode);
  }

  insertAfter(item, newItem){
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let nextNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      currNode = currNode.next;
      nextNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    currNode.next = new _Node(newItem, nextNode);
  }
  insertAt(newItem, index){
    if (index === 0){
      return this.insertFirst(newItem);
    }
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let previousNode = this.head;
    for (let i = 0 ; i < index ; i++){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null){
      console.log('invalid index');
      return;
    }
    previousNode.next = new _Node(newItem , currNode);

  }
  find(item) { 
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item){ 
    if (!this.head) {
      return null;
    }
    
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;