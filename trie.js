class Node {
  constructor(letter, term = letter) {
    this.letter = letter;
    this.term = term;
    this.children = {};
    this.isWord = false;
  }
}

class Trie{
  constructor() {
    this.root = new Node('');
  }

  add(word) {
    this._add(this.root, word);
  }

  contains(term) {
    return !!this._findMatch(this.root, term);
  }

  getMatch(term) {
    return this._findMatch(this.root, term);
  }

  _add(node, word) {
    if(!word) return;
    const letter = word.charAt(0);
    let child = node.children[letter];
    const remainder = word.substring(1);

    if(!child) {
      let term = `${node.term}${letter}`;
      child = new Node(letter, term);
      node.children[letter] = child;
    }

    if(!remainder) {
      child.isWord = true;
    }
    this._add(child, remainder);
  }

  getTerms(node, fn) {
    let queue = [node];
    while(queue.length) {
      let currentNode = queue.shift();
      
      fn(currentNode);

      if(currentNode.children) {
        Object.keys(currentNode.children).forEach( k => {
          queue.push(currentNode.children[k]);
        });
      }
    }
  }

  _findMatch(node, word) {
    if(!word || !node) {
      return false
    }
    else {
      const letter = word.charAt(0);
      let child = node.children[letter];

      if(child) {
        const remainder = word.substring(1);
        if(!remainder) {
          return child; // or true
        }
        else {
          return this._findMatch(child, remainder);
        }
      }
      else {
        return false;
      }
    }
  }
}

const t = new Trie();

t.add("jorge");
t.add("caroline");
t.add("carl");
t.add("carmen");
t.add("jaime");
t.add("juan")
t.add("alison");
t.add("alice");

const node = t.getMatch("alis");

if(node) {
  t.getTerms(node, node => {
    console.log(node.term);
  });
}
