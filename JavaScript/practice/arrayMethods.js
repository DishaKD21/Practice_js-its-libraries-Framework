const arr = [1,2,[3,[4]],5];
const fruits = ["blueberries","banana","apple","apple","grapes","licchi","peach"];
const students =[{ 'name' : "meera",  "age": 23},{ 'name' : "era",  "age": 13},{ 'name' : "mani",  "age": 26}]

console.log("map");

//map
fruits.map((ind)=>{
  console.log(ind); 
});
arr.map((ind)=>{
  console.log(ind);
})
students.map((ind)=>{
  console.log(`${ind.name} : ${ind.age}`);
})

console.log("\n");
console.log("foreach");

//foreach
fruits.forEach((ind)=>{
  console.log(ind);
});
arr.forEach((ind)=>{
  console.log(ind);
})
students.forEach((ind)=>{
  console.log(`${ind.name} : ${ind.age}`);
})

console.log("\n");
console.log("filter");

//filter
const onlyApples = fruits.filter((fruit) => {
  return fruit == "apple"; 
});
console.log(onlyApples);
const biggerThan2  = arr.filter((element) => {
  return element > 2; 
});
console.log(biggerThan2);
const adultStudents = students.filter((student) => {
  return student.age > 18;
});
const array=[];
const ans = adultStudents.map((stu)=>{
 array.push(stu.name);
})
console.log(array);
console.log("\n");

//find
console.log("find");

const foundapple = fruits.find((fruit)=>{
    return fruit==="apple"
});
console.log(foundapple);
const find2  = arr.find((element) => {
  return element === 2; 
});
console.log(find2);
const findstudent = students.find((student) => {
  return student.age === 18;
});
console.log(findstudent);