const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.append = function(value) {
  if(!this.head) {
    this.head = {
      value,
      next: null
    }
  }
  else {
    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    node.next = {
      value,
      next: null
    }
  }
}

LinkedList.prototype.print = function() {
  let node = this.head;
  let output = "HEAD"
  while(node) {
    output += ` -> ${node.value}`;
    node = node.next;
  }
  output += ` -> NULL`;
  console.log(output);
}

function reverseLinkedList(head) {
  let node = head; // 1
  let temp = null;
  let prev = null; // new list

  while(node) {
    temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }

  return prev;
}

let myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.print();

// console.log(reverseLinkedList(list));