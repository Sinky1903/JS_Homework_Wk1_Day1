// Section 1

// What types are these?

/* 1.1 */ 1; 
number
/* 1.2 */ "cat"; 
string
/* 1.3 */ true; 
boolean
/* 1.4 */ []; 
array
/* 1.5 */ {}; 
hash
/* 1.6 */ 1.1; 
number
/* 1.7 */ var myVariable; 
variable


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; 
true
/* 2.2 */ "cat"; 
true
/* 2.3 */ true; 
true
/* 2.4 */ NaN; 
false
/* 2.5 */ []; 
true
/* 2.6 */ {}; 
true
/* 2.7 */ undefined; 
false
/* 2.8 */ ""; 
false
/* 2.9 */ 0; 
false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number 
var myNum = 2
// 3.2 Assign a variable that is a string 
var myString = "Ryan"
// 3.3 Assign a variable that is a boolean 
var isTrue = true
//3.4 Assign a variable that is an object 
var me = {name: "Ryan", age: 32}


// Section 4 //ternary

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
2<4 ? "hello":"bye"


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var firstAnimal = animals[0]
// 5.2. Assign the last element to a variable
var lastAnimal = animals[-1]
// 5.3. Assign the length of an array to a variable
var animalsSize = animals.length
// 5.4. Add an item to the end of the array
animals.push("giraffe")
// 5.5. Add an item to the start of the array
animals.unshift("donkey")
// 5.6. Assign the index of hedgehog to a variable
var hedgehogIndex = animals.indexOf("hedgehog")


// Section 6

// 6.1 Create an array of 5 vegetables
var veggies = ["carrot", "onion", "pepper", "brocolli", "sweetcorn"]
// 6.2 Loop over the array and write to the console using a "while"
var v = 0;
while (v < veggies.length)
console.log("loop" + v)
v++
// 6.3 Loop again using a "for" with a counter (i=0; < ??; i++)
for (var i=0; i < veggies.length; i++) {
  console.log(veggies[i]);
}
// 6.4 Loop again using a "for of"
for (var veg of veggies) {
  console.log(veg);
}


// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
function addUpTotals() {
  var total = 0;
for (var key in accounts) {
  total += accounts.amount;
}
return "The total accounts equals " total
}

// 7.2 Find the amount of money in the account with the largest balance
function largest() {

}

// 7.3 Find the name of the account with the smallest balance
function smallest() {

}

// 7.4 Calculate the average bank account value
function averageAmount() {
  var total = 0;
  for (var key in accounts) {
    total += accounts.amount;
  }
return "The average amount equals " total / 5;
}

// 7.5 Find the value of marcs bank account
function marcsAmount() {
  for (var key in accounts) {
    if (accounts.name == "marc") {
      return accounts.amount;
    }
  }
}
// 7.6 Find the holder of the largest bank account
function nameOfLargest() {

}
// 7.7 Calculate the total cash in business accounts
function totalBusiness() {
  var total = 0;
  for (var key in accounts) {
    if (accounts.type == "business") {
      total += accounts.amount;
    }
  }
  return "The business accounts equals " total
}

// 7.8 Find the largest personal account owner
function largestPersonal() {

}


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
var myPerson = {name: "Ryan", height: 6, fave_food: "steak"
}
