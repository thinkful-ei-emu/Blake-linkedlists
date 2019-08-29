const LinkedList = require('./linked-list.js');

const SLL = new LinkedList();
function display(linkedList){
  let currNode = linkedList.head;
  if (!linkedList.head) {
    return null;
  }
  let result = [];
  while (currNode) {  
    result.push(currNode.value);
    currNode = currNode.next;
    
  }
  return result;
}
function size(linkedList){
  let currNode = linkedList.head;
  if (!linkedList.head) {
    return null;
  }
  let size = 0;
  while (currNode) {  
    size++;
    currNode = currNode.next;
    
  }
  return size;
}
function isEmpty(linkedList){
  if(!linkedList.head){
    return true;
  }
  else{
    return false;
  }
}
function findPrevious(linkedList, item){
  if (!linkedList.head) {
    return null;
  }
  let currNode = linkedList.head;
  let prevNode = linkedList.head;

  while ((currNode !== null) && (currNode.value !== item)) {
    prevNode = currNode;
    currNode = currNode.next;
    
  }
  if (currNode === null) {
    console.log('Item not found');
    return;
  }
  return prevNode;
}
function findLast(linkedList){
  if (linkedList.head === null) {
    return null;
  }
  else {
    let tempNode = linkedList.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }
}
function reverse(linkedList){
  if (!linkedList.head || !linkedList.head.next) {
    console.log('invalid list');
    return;
  }
  
  let prevNode = null;
  let currNode = linkedList.head;
  let nextNode;

  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  linkedList.head = prevNode;
}
function threeFromEnd(linkedList){
  if (size(linkedList) < 3 ){
    console.log('not long enough');
    return ;
  }
  if (size(linkedList) === 3) {
    return null;
  }
  let currNode = linkedList.head;
  for (let i = 0 ; i < size(linkedList) - 4 ; i++){
    currNode = currNode.next;
  }
  if (currNode === null){
    console.log('invalid index');
    return;
  }
  return currNode;
}
function findMiddle(linkedList){
  let currNode = linkedList.head;
  if (size(linkedList) === 1) {
    return currNode;
  }
  let index = 0;
  if (size(linkedList) % 2 === 0){
    index = size(linkedList)/2-1;
  }
  else{
    index = Math.floor(size(linkedList)/2);
  }
  console.log(index);
  for (let i = 0 ; i < index ; i++){
    currNode = currNode.next;
  }
  if (currNode === null){
    console.log('invalid index');
    return;
  }
  return currNode;
}
function main(){
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertBefore('Boomer', 'Athena');
  // SLL.insertAt('Kat', 2);
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  //console.log(findPrevious(SLL , 'Helo'));
  // console.log(findLast(SLL));
  // reverse(SLL);
  // console.log(threeFromEnd(SLL));
  console.log(findMiddle(SLL));
  console.log(display(SLL));
}

main();