/**
 * Initialize your data structure here.
 */
var WordDictionary = function(value = "", isWord = false) {
  this.value = value;
  this.children = {};
  this.isWord = isWord;
};

/**
* Adds a word into the data structure. 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  if(!word) return;
  
  let letter = word.charAt(0);
  let remainder = word.substring(1);
  let child = this.children[letter];
  let isWord = remainder.length === 0 ? true : false;
  if(!child) {
      this.children[letter] = new WordDictionary(letter, isWord);
  }
  if(remainder.length === 0) {
      this.children[letter].isWord = true;
  }
  
  return this.children[letter].addWord(remainder);
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  let letter = word.charAt(0);
  let remainder = word.substring(1);

  if(letter === ".") {
      for(let child in this.children) { // search through the children
          // if there is no remainder, return the isWord flag
          if(!remainder) return this.children[child].isWord;
          return this.children[child].search(remainder);
      }
      return false;
  }
  else{
      let child = this.children[letter];
      if(!child) return false;
      if(!remainder) return child.isWord;
      return child.search(remainder);
  }
};

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

var obj = new WordDictionary();
obj.addWord("a")
obj.addWord("a")
console.log(obj.search(".")) // -> true
console.log(obj.search("a")) // -> true
console.log(obj.search("aa")) // -> false
console.log(obj.search("a")) // -> true
console.log(obj.search(".a")) // false
console.log(obj.search("a.")) // false