console.log('hello world')
//variables, cost and let;
// var is globally scoped
//let= easily change values;
//cost can't be changed;
// let and const have a block level scope

// types of data types

// primitive data types:strings numbers, null, undefined and symbols
const name = 'diana';
const age = 20;
const isHot = false;
const rating = 4.5;
const x = null;
// const y = undefined;  let z;
// to check the datatype use typeof()
console.log(typeof(rating))
console.log(typeof(x))
console.log(typeof(y))

// string

const school = 'Qhala school';
const salary = "20000"

// concatination
console.log(' I am a fellow at ' + school + ' and i earn ' + salary)
// template string

console.log(`I work at ${school} and i earn ${salary}`)

// string properties and methods
// a property does not have parenthesis, a method has

const s  = "diana mongina"
console.log(s.length);
console.log(s.substring(0,5));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
// create an array
console.log(s.split(','));

// arrays = vaariables that hold multiple values
// constructor
const arr = new Array(1,2,3,4,5,6);
console.log(arr);

const fruits = ['apples', 'oranges', 'bananas']
console.log(fruits)
console.log(fruits[1])
fruits[3] = 'watermelon'
console.log(fruits)
// push adds items to end of an array
fruits.push('guavas')

console.log(fruits)
//  unshift adds items to the start of an array

fruits.unshift('pineapples')
console.log(fruits)

// pop removes items from the end

fruits.pop()
console.log(fruits)
// Array.isArray checks if a data type is an array.
console.log(Array.isArray(fruits))

console.log(Array.isArray('hello world'))

// indexOf returns the index of a particular item in array.
console.log(fruits.indexOf('apples'));

// object literals (key value pairs)

const diana = { 
    firstName:'diana',
    lastName:'mongina',
    work :'qhala fellow',
    hobbies : ['music', 'movies', 'hiking'],
    address: {
        street: '50 main St',
        city :'Nairobi',
        state: 'CA',
    
    }


}
console.log(diana)
console.log(diana.firstName)
console.log(diana.hobbies[1])
console.log(diana.address.city)

// destructing

const{ firstNames, lastNames, work, hobbies, address:{street} } = diana

console.log(street)

// add properties

diana.email = "diana@gmail.com"
console.log(diana)

// create an array of todos

const todos =[{
    id: 1,
    text: "fellowship program",
    isCompleted: true
},
{
    id: 1,
    text: "take a walk to unwind",
    isCompleted: true
},
{
    id: 3,
    text: "joine qhala meeting",
    isCompleted: false
}

];
// getting a specific item in the object
console.log(todos[1].text);

// convert object to json

const todoJson = JSON.stringify(todos)
console.log(todoJson); 

// loops 
// for loops(3parameters)
// 1.assignment iterator
// comparison operator
// increment operator

for(let i = 0; i < 3; i++){
    console.log(i)

}
// while (variable is set out of the loop)
let i = 0
while(i<10){
    console.log(i); i++;
}

// how to loop through arrays

for(let i=0; i<todos.length; i++){
    console.log(todos[i].text)}

 for (let todo of todos){
    console.log(todo.text)}

// High order array metthods

// forEach(loops through an array)
// map(creates a new array from an array)
// filter(creates a new array based on conditions)

todos.forEach(function(todo){
    console.log(todo.text)
});

const todoText = todos.map(function(todo){
    return todo.text;

});

const todoCompleted = todos.filter(function(todo){
    return(todo.isCompleted===true)
})

// conditionals

const b = 9;
 if (b ===10){ 
    console.log('b is 10')
 }else if (b >10){
    console.log('b is greater than 10')
 }
 else(
    console.log('b is nott 10')
 )
// you can use an and/or instead of nested loops
 if(x>5 && y>10){
    console.log('y is greater than x')
 }
 
//  ternary operator

const z = 8;
 const item = z > 10 ?'red':'green';
 console.log(item);

//  switching

switch(item){
    case 'green':
        console.log('item is green');
    case 'red':
        console.log('item is red');
        break;
    default:
        console.log('item is not a color');
    
}

// functions

function addNums(num1,num2){
    console.log(num1+num2)
}
addNums(3,4)

// use the arrow functions

todos.forEach(todo=>console.log(todo))

// oop

function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

// instantiate an object with the consturctor

const person1 = new Person('john','dee','02-02-2022' )
console.log(person1)
console.log(person1.dob.getFullYear())

// DOM Manipulation

// console.log(window);
// window is very top level.
// alert(1)

// single element selector
const form = (document.getElementById('my-form'));
console.log(form);

const select = (document.querySelector('container'));
console.log(select);

// multiple elements selector
// select a number of items
const multiple  = (document.querySelectorAll('.item'));
console.log(multiple);

const  items = document.getElementsByClassName('item')
console.log(items);

const items2 =document.getElementsByTagName('li')

// looping through

const items3  = document.querySelectorAll('.item');
items3.forEach((item) => console(item));

// DOM MANIPULATION

const ul = document.querySelector('.items')

ul.remove();

ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';

ul.children[1].innerText = 'brad';

ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn =document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('my-form')
    getElementsByClassName('my-form').style.background ='#ccc'
    document.querySelector('body').classList.add('bg-dark');
});
