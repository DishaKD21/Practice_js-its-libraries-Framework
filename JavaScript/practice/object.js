const person = [
    {
    name:"eva",
    age:23,
    proff:"teacher",
    food_likings:["icecream","waffles","cookies"],
    relatives:{
        name:"shrey",
        age:20,
        relation:"brother",
    hello(){
        console.log(this.name);
    }
    }
    },
    {
    name:"neva",
    age:24,
    proff:"teacher",
    food_likings:["icecream","waffles","cookies"],
    relatives:{
        name:"shrey",
        age:20,
        relation:"brother"
    }
    }
];

const ans1 =  {
    name:"eva",
    age:23,
    proff:"teacher",
    food_likings:["icecream","waffles","cookies"],
    relatives:{
        name:"shrey",
        age:20,
        relation:"brother",
    hello(){
        console.log(this.name);
    }
}
};

console.log(person);
console.log(Object.values(person[0])); //values
console.log(Object.keys(person[0])); //keys
console.log(Object.entries(person[0])); //it will return all values of object in array format

const obj = person[0]; //assigning the object to another object 
console.log(obj);
Object.freeze(person[0]); //you cannot modify the values or add or delete new properties
Object.seal(person[0]);  // it will not allow to add or delete any properties but it
//  will allow to update the existing property
delete person[0].relatives;
console.log(person[0]);
const ans = JSON.stringify(person);
console.log(typeof ans);
console.log(ans);

const object  = JSON.parse(ans);
console.log(object);

for(const x of person){
    console.log(x);
}

for(const x in person[0]){
    console.log(x);
}

for(let i=0;i<person.length;i++){
   console.log(i);
}

console.log(ans1.hello());


