import axios from "axios";
// class MyPromise {
//   constructor(fn) {
//     this.value = null;
//     this.callbacks = [];
//     const resolve = data => {
//       this.value = data;
//       this.callbacks.forEach( cb => {
//         cb(data);
//       })
//     }

//     const reject = data => {

//     }
//     fn(resolve, reject);
//   }

//   then(fn) {
//     fn(this.value);
//     this.callbacks.push(fn);
//     return this;
//   }
// }

class MyPromise {
  constructor(fn) {
    this.callbacks = [];
    this.value = undefined;
    fn(this.onResolve.bind(this), this.onReject.bind(this));
  }

  onResolve(data) {
    this.value = data;
    this.callbacks.forEach(cb => {
      cb(this.value);
    });
  }

  onReject(data) {
    console.log(data);
  }

  then(cb) {
    // cb(this.value);
    this.callbacks.push(cb);
    return this;
  }

  catch(err) {
    this.catchCallback()
  }
}


const debounce = (fn, wait) => {
  let timeoutId = null;
  return function(e){
    if(timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeoutId = setTimeout(() => {
      fn(e);
    }, wait);
  }
}

const submitSearch = term => {
  let p = new MyPromise((resolve, reject) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`).then( response => {
      if(response.status === 200) {
        resolve(response.data)
      }
      else{
        reject(response.status);
      }
    })
    .catch( err => {
      reject(err);
    })
  });
  
  
  p.then(data => {
    const fragment = document.createDocumentFragment();
    const app = document.getElementById("app");
    const title = document.createElement("h3")
    const image = document.createElement("img");
    title.textContent = data.name;
    image.src = data.sprites.front_default;
    fragment.append(title);
    fragment.append(image);
    app.append(fragment);
  });
}


const debouncedSearch = debounce(submitSearch, 1000);
const search = document.getElementById("search");
const searchTerm = document.getElementById("searchTerm");

searchTerm.addEventListener("keyup", e => {
  debouncedSearch(e.target.value);
});
search.addEventListener("click", () => {  
  submitSearch(searchTerm.value);
})
