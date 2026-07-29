console.log(1);

Promise.resolve().then(() => {
  console.log(2);
});

console.log(3);

setTimeout(() => {
  console.log(4);
}, 300);


// 1 4 3 2
// 1 3 2 4