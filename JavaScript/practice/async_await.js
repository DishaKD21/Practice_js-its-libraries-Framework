async function fetchapidata(){
 const ans = await fetch("https://jsonplaceholder.typicode.com/users");
  if(!ans.ok){
    throw new Error("didn't got the response")
 }
 const result = await ans.json();
 return result;
}
const printdata = async ()=>{
try{
const output = await fetchapidata();

// output.map((object)=>{
//  console.log(`${object.id} : ${object.name}`)
// });
console.log(output);
}
catch(error){
    console.log(error);
}
}
printdata();