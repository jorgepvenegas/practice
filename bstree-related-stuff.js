class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let curr = this.root;
      while (true) {
        if (curr.value > value) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(value);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(value);
            break;
          }
        }
      }
    }
  }
}

const traverseBFS = (tree, fn) => {
  const arr = [tree.root];
  while (arr.length) {
    const node = arr.shift();
    fn(node);
    if (node.left) arr.push(node.left);
    if (node.right) arr.push(node.right);
  }
};

const traverseDFS = (tree, fn) => {
  const arr = [tree.root];
  while (arr.length) {
    const node = arr.shift();
    fn(node);
    if (node.right) arr.unshift(node.right);
    if (node.left) arr.unshift(node.left);
  }
};

const traversePreOrder = (node, fn) => {
  if (!node) return;
  fn(node);
  traversePreOrder(node.left, fn);
  traversePreOrder(node.right, fn);
};

const traverseInOrder = (node, fn) => {
  if (!node) return;
  traverseInOrder(node.left, fn);
  fn(node);
  traverseInOrder(node.right, fn);
};

const getLevelsWidth = node => {
  let limit = "_";
  let levels = [0];
  let arr = [node, limit];

  while (arr.length > 1) {
    let node = arr.shift();
    if (node === limit) {
      levels.push(0);
      arr.push(limit);
    } else {
      levels[levels.length - 1]++;
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
  }
  return levels;
};


const maxDepth = node => {
  if(!node) {
    return 0;
  }
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right)) 
}

// lowest common ancestor
const lowestCommonAncestor = (node, a, b) => {
  let current = node;
  while(current) {
    if(a < current.value && b < current.value) {
      // go left
      current = node.left;
    }
    else if(a > current.value && b > current.value) {
      // go right
      current = current.right;
    }
    else {
      return current;
    }
  }
}


// const tree = new BSTree();

// tree.insert(50);
// tree.insert(30);
// tree.insert(60);
// tree.insert(6);
// tree.insert(8);
// tree.insert(20);
// tree.insert(10);
// tree.insert(15);
// tree.insert(55);
// tree.insert(70);