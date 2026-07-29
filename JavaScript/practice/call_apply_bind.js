const person = {
    name:"max",
    age: 23,
    location: "Rajkot"

};
function aged(age){
    console.log(this.age);
    console.log(this.location);
}
aged.call(person);

aged.call(person,"bali");

aged.apply(person,["rajkot"]);
const newarr = aged.bind(person);
newarr();

// call() → Executes the function immediately and accepts arguments one by one.
// apply() → Executes the function immediately but accepts arguments as an array.
// bind() → Does not execute immediately. It returns a new function with this permanently bound, which you can call later.