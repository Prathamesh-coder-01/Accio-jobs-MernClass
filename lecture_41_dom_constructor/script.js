const user1 = {
    name: "vaibhav",
    age: 23,
    city: "pune",
    printDetails: function () {
        console.log(
            `${this.name} is ${this.age} is living in ${this.city}`
        );
    },
};
const user2 = {
    name: "Rahul",
    age: 22,
    city: "pune",
    printDetails: function () {
        console.log(
            `${this.name} is ${this.age} is living in ${this.city}`
        );
    },
};

const user3 = {
    name: "kunal",
    age: 23,
    city: "mubbai",
    printDetails: function () {
        console.log(
            `${this.name} is ${this.age} is living in ${this.city}`
        );
    },
};

// constructor

// It is like a blueprint for creating objects.
// Instead of writing the same properties and methods again and again,
// we write a single blueprint
// and reuse it to create multiple objects with similar structure.
// This makes the code reusable.

function user(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.printDetails = function () {
        console.log(
            `${this.name} is ${this.age} is living in ${this.city}`);
    };
}


// giving the new value using the constructor
const user4 = new user("neha", 20, "Nashik");
const user5 = new user("prathamesh", 22, "kannad");

user1.printDetails();
console.log(user1.name);

// using the object creating the new data using the constructor
console.log(user4.name);
console.log(user4.printDetails());

// when we use new it creates the new object
// initially this points to window obj(global object) but when we use new then
// this keyword get binds to the empty object that we created using new
// i.e this->{}
// and this.name="Devanshu" means addind name prop in object with value devanshu
// same as object {name:Prathamesh}
// returns this object.

console.log(user1.name__proto__);

function normalFunction() {
    console.log(this); //by default function global obj stored in this;
}
console.log(normalFunction());



// creating an array of object using constructor.

const names = ["Rahul", "Nikhil", "Bhavesh", "Prathamesh"];
const age = [12, 23, 33, 13];
const city = ["Pune", "Kannad", "Nashik", "Mumbai"];

const objArray = [];

function stdDetail(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
for (let i = 0; i < names.length; i++) {
    let temp = new
        stdDetail(names[i], age[i], city[i]);
    objArray.push(temp);

}
console.log(names); //
console.log(objArray);

function Product(name, prise, qty) {
    this.name = name;
    this.prise = prise;
    this.qty = qty;
    this.total=prise*this.qty;
}

  const product1 = new Product("bottle", 20, 10);
  const product2 = new Product("bowl", 10, 50);

console.log (product1);
console.log (product2);


//prototypes 
 

const bollen =true;
const string = "true";
const number =2234;
const arr =[1,3,4,5];

console.log (bollen.__proto__)
console.log (string.__proto__)
console.log (number.__proto__)
console.log (arr.__proto__)

function Student  (name, age, grade){
    this.name=name;
    this.age=age;
    this.grede=grade

}
Student .prototype.greetMe=function(name){
    console.log ("HI" + this.name);

};
const student1 =new Student ("Rajesh", 20 ,10);
student1.greetMe (student1.name);



//find the output: 

function Test(){
    this.value=10;
}
Test.prototype.value=100;
const test =new Test ();
console.log (test.value); 
//10 --> first it will find search value inside  its own "test" object ,so it prints 10 its found in test
delete test.value;// deleating the value prototype for the object 
console.log (test.value);//  100 --> since the test object does not have any "value property of the "


// mixing up the constrocter and prototype 
// creating a task queue ,that will be add ,remove and display the latest task

function TaskQueue(){
    this.task=[];

}
TaskQueue.prototype.add=function(taskName){
this.task.push(taskName);
}
 
TaskQueue.prototype.remove=function(){
    this.task.shift();
}