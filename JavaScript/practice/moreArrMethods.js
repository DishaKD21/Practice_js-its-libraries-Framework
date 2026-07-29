const arr = [1,2,3,4,15];
const fruits = ["blueberries","banana","apple","grapes","licchi","peach"];
const students =[{ 'name' : "meera",  "age": 23},{ 'name' : "era",  "age": 13},{ 'name' : "mani",  "age": 26}]
const array1 = [1,2,3,4,5,[1,[2],[3,[4]],6]];
// concat
console.log("concat");
const array = arr.concat(fruits);
console.log(array);

// flat
console.log("flat");
const newarray = array1.flat();
const flatupto2 = array1.flat(2);
const flatupto3 = array1.flat(3);
console.log(newarray);
console.log(flatupto2);
console.log(flatupto3);
// some
console.log("some");
const ans = arr.some((num)=>{
  return num>2;
});
console.log(ans);
// every
console.log("every");
const ans1 = arr.every((num)=>{
  return num>2;
});
console.log(ans1);
// reduce
console.log("reduce");
const ans2 = arr.reduce((curr,acc)=>{
  return curr>acc? curr:acc;
})
console.log(ans2);
// sort
console.log("sort");
const newarr= arr.sort((a,b)=>{
  return b-a;
})
console.log(newarr);

// sort - sorting the array
// flat - flatting the array upto 2,3 as deep you want 
// reduce - reduce the array and give ans in one value
// splice -  splice (start index, removes element , replaces element )
// foreach - looping through array
// concat - merge the array
// some  - return true if any value is matching the condition
// every - returnn true if all value is matching the condition
// map - looping through object and return value
// filter - filtering and returning the array of filtered element based on condition 
// find - return the element based on condition written
// slice - slice the array a part by taking the index 
