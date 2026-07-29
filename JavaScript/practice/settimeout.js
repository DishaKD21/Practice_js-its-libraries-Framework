setTimeout(()=>{
    console.log("hell yeah")
},2000);

const id=setInterval(()=>{
  console.log("heeeeeeeeeeeeya");
},1000);

setTimeout(()=>{
 clearInterval(id);
 console.log("time interval stopped")
},5000)
