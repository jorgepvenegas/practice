
var FileSystem = function() {
  this.path = {
      path: "root",
      content: null,
      next: {}
  };
};

/** 
* @param {string} path 
* @param {number} value
* @return {boolean}
*/
FileSystem.prototype.createPath = function(path, value) {
  
  // "/leet/code", 1
  
  let parts = path.split("/").slice(1);
  // ["leet", "code"]
  let filePath = this.path;
  while(parts.length) { // 2
      let current = parts.shift(); // 1
      // "leet"
      
      if(!filePath.next[current]){ // true
          if(parts.length === 0) {
              // add path and value to filePath
              filePath.next[current] = createDirectory(current, value);
              return true;
          }
          else{
              // Trying to add path without parent
              return false;
          }
      }
      filePath = filePath.next[current];
  }
  
  function createDirectory(path, value) {
      return {
          path,
          content: value,
          next: {}
      }
  }
};

/** 
* @param {string} path
* @return {number}
*/
FileSystem.prototype.get = function(path) {
  let parts = path.split("/").slice(1);
  let filePath = this.path;

  while(parts.length) {
      let current = parts.shift();
      if(filePath.next[current]) {
          filePath = filePath.next[current];
      }
      else{
          // console.log("current", filePath);
          return -1
      }
  }
  return filePath.content
};


["FileSystem","createPath","createPath","get","createPath","get"]

[[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]]


var obj = new FileSystem()
obj.createPath("/leet",1);
obj.createPath("/leet/code",2);
/** 
* Your FileSystem object will be instantiated and called as such:
* var obj = new FileSystem()
* var param_1 = obj.createPath(path,value)
* var param_2 = obj.get(path)
*/