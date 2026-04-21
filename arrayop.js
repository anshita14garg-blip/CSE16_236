let person ={
    name:"john",
    age:30,
    city:"jaipur"
};
console.log(person);
console.log(person.name)
console.log(person.age)
console.log(person.city)

typeof
console.log(typeof(person));

let numbers =[ 1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

let mixedArray=[1,"hello", true , [ 1,2,3] , { name : "Alice" , age: 25}];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);

console.log(length.mixedArray)

function greet(){
    console.log("hello world");
}
greet();

function multiply(a,b){
    return a*b;
}

console.log(multiply(2,3));

let divide=function(a,b){
    returna/b;
}

let sayHi =() => console.log("Hi!");
sayHi();


let square = x => x*x;
console.log(square(4));

const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
    
}
greetUser("Alice");

 let newarray =[ 1,2,3,4,5]
 let squaredArray= newarray.map((num) => num*5 );
 console.log(squaredArray);


 let evenNumbers =[ 1,2,3,4,5];
 let filterEvenNumbers = evenNumbers.filter(num=> num % 2===0);
 console.log(filterEvenNumbers);

let sum=[1,2,3,4,5];
let total=sum.reduce((accumulator, currentValue) => accumulator +  currentValue , 0);
console.log(total);

let students=[
    { name: "Alice", marks: 85 },
    { name: "Bob", marks : 92 },
    {name :"Charlie", marks: 78}
];

let marks = students.map(student => student.marks);
console.log(marks);

let marks = students.map(student => student.names);
console.log(names);

let topstudents = students.filter(student => student.marks > 80);
console.log(topStudents);

let totalMarks = students.reduce((acc, student) => acc + student.marks , 0);
console.log(totalMarks);
