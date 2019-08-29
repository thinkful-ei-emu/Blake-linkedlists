class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    if(this.head === null || this.tail === null){
      this.head = new _Node(item, null, null);
      this.tail = this.head;
    }
    else{
      this.head = new _Node(item, this.head, null);
    }
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
    previousNode.next = new _Node(newItem , currNode, previousNode);
    currNode.previous = previousNode.next;
  }
  insertLast(item) {
    if(this.head === null || this.tail === null){
      this.tail = new _Node(item, null, null);
      this.head = this.tail;
    }
    else{
      this.tail= new _Node(item, null, this.tail);
      this.tail.previous.next = this.tail;
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
    if(currNode === this.head){
      return this.insertFirst(newItem);
    }
    prevNode.next = new _Node(newItem, currNode, prevNode);
    currNode.previous = prevNode.next;

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
    if(currNode === this.tail){
      return this.insertLast(newItem);
    }
    currNode.next = new _Node(newItem, nextNode, currNode);
    nextNode.previous = currNode.next;
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
    currNode.next.previousNode = previousNode;
  }
}

module.exports = DoubleLinkedList;