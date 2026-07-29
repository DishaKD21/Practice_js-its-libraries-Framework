const promise = new Promise((resolve,reject)=>{
 let success = false;
 if(success){
    resolve("promise resolved");
 }
 else {
    reject("promise got rejected");
 }
});

promise
.then((data)=>{
   console.log("result",data);
})
.catch((error)=>{
  console.log("error",error);
})