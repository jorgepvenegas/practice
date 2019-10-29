/**
 * HTML Node https://developer.mozilla.org/en-US/docs/Web/API/Node 
 */

function getByClassName(element, className) {
  let nodes = [];
  function recursiveNavigation(element, nodes) {
    if(!element) return nodes;
    
    // Check class on current node
    if(element.classList.contains(className)) {
      nodes.push(element); // I could extract just the node instead of pushing the whole tree   
    }
   
    // Run the recursion on current node children
    for(let i = 0; i < element.children.length; i++) {
      recursiveNavigation(element.children[i], nodes);
    } 
    return nodes; 
  }
  return recursiveNavigation(element, nodes);
}