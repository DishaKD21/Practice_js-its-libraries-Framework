const arr = [1,2,3,4,5];
const fruits = ["blueberries","banana","apple","grapes","licchi","peach"];
const students =[{ 'name' : "meera",  "age": 23},{ 'name' : "era",  "age": 13},{ 'name' : "mani",  "age": 26}]

//slice
console.log("slice");
const ans1 =  arr.slice(0,3);
const ans2 = fruits.slice(0,2);
const ans3 = students.slice(0,1);

console.log(ans1);
console.log(ans2);
console.log(ans3);

console.log("splice");

const ans4 =  arr.splice(1,2,10,12);
const ans5 = fruits.splice(0,2,"kiwi","orange");
console.log(fruits);
const ans6 = students.splice(0,1);

console.log(ans4);
console.log(arr);
console.log(ans5);
console.log(fruits);
console.log(ans6);
console.log(students);




