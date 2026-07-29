//destruct
const person = {
    name : "person",
    age : 23 
};
const array = [1,2,3,4,5];
const {name,age} = person;
console.log(name);
console.log(age);

//rest
const [n,a,b,...rest] = array;
console.log(`${n},${a},${b}, ${rest}`);

//spread 
const newarr = [...array,6];
console.log(newarr);