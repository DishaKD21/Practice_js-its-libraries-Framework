
function debounce(fun, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun(...args);
    }, delay);
  };
}

function search(text) {
  console.log("Searching", text);
}
const debounceSearch = debounce(search, 1000);
debounceSearch("re");
debounceSearch("rea");
debounceSearch("reac");
debounceSearch("react"); //it will call the function only once 


// Debouncing is a technique that delays the execution of a
//  function until a specified period has passed without any 
//  new events. Every new event resets the timer.

//used in reducing unnessary api calls from client side 
//such as searchbars,autocomplete,inputvalidation it will 
// wait untill user will stop interacting before making the 
// request