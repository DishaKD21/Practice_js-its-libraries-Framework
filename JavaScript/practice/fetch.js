const URL = "https://jsonplaceholder.typicode.com/users"
fetch(URL)
.then((response)=>{
    try{
     if(!response.ok){
        throw new Error("not getting response");
     }
     else{
      const result = response.json();
      return result;
     }
    }
    catch{
     console.log("didnot got response");
    }
})
.then((data)=>{
   console.log(data);

})
.catch((error)=>{
    console.log(error);
})