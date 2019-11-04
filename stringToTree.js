/**
 *  Because front end engineering is about this kind of stuff, right?
 */

class Node {
  constructor(character = null, count, left = null, right = null) {
    this.character = character;
    this.count = count;
    this.left = left;
    this.right = right;
  }
}

const string = "aaaabbbccddddd";

const createStringMap = str => {
  return str.split("").reduce((prev, next) => {
    if (prev[next]) {
      prev[next]++;
    } else {
      prev[next] = 1;
    }
    return prev;
  }, {});
};

const getSortedArrayFromMap = obj => {
  return Object.keys(obj)
    .map(k => new Node(k, obj[k]))
    .sort((a, b) => a.count - b.count);
};


const buildTree = arr => {
  let left = null;
  let right = null;
  let count = 0;
  
  if (arr.length < 3) {
    left = arr[0];
    right = arr[1];
    count = left.count + right.count;
    return new Node("_", count, left, right);
  }
  let node = null; //parent

  for(let i = 0; i < arr.length; i++) {
    if(node) {
      right = node;
      left = arr[i];
    }
    else{
      left = arr[i];
      right = arr[++i];
    }
    
    count = left.count + right.count;
    node = new Node(null, count, left, right);
  }
  return node;

};

const arr = getSortedArrayFromMap(createStringMap(string));

buildTree(arr);