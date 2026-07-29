const outer = ()=>{
    let count = 0;
  const inner=()=>{
    count=count+1;
    console.log(count);
    }
    return inner;
}

const increment = outer();
console.log(increment());
increment();
increment();