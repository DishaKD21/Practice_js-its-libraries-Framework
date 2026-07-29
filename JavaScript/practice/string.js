const s1 = "I read books";
const s2 = "fruit juice is nice.Would you like to have some?";
const s3 = "thisiss3string";
const s4 = "      heyaaa       ";
const array = [1,2,3,4,5,6];
//split
console.log("split");
const ans7 = s1.split(" ",s1.length-1);
const ans8 = s2.split(".",s2.length-1);
const ans9 = s3.split("3",s3.length-1);

console.log(ans7);
console.log(ans8);
console.log(ans9);


console.log("join");
array.join(".");
console.log(array);
console.log("trim");
console.log(s4.trim());
console.log("replace");
console.log(s1.replace("books","manga"));
console.log(s1);
console.log("includes");
console.log(s1.includes("i"));
console.log("substring");
console.log(s1.substring(-1));
console.log("slice");
console.log(s1.slice(0,7));

// join - it joins array with another array
// trim - it removes the space at starting and at last of the string
// split - spliting the string with some space or comma and return the array saperated by comma
// replace - it will replace the word with given word 
// includes - it will return true if that value exists in it else false
// substring - we between given indexes and it doesn't support negative index
// slice - we give string between 2 indexes and it does support negative index