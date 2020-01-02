const a = tree
const b = tree

const node


function traverse(node, treeB) {
  let current = node;
  let path = [];
  while(current) {
    path.push(current);
    current = current.parent;
  }
  // if we pop values from path, and each popped value exists in hierarchy for b, they are located at the same place

  current = treeB;

  while(current.length) {
    let nodeB = current.pop();
    if(b.hasChild(nodeB)) {
      b = b.getChild(nodeB);
    }
    else {
      return false;
    }
  }
}