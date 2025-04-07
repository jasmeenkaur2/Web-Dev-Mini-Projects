/* Objects - used for collection of data and functionalities

let Grade = {
    number: 10,
    House: "Green",
    CR: "Dev",
    student: 50,
    desk: 25

};

// Function - set of instructions to perform a specific task

function animal(string) {
    if (string == "dog") {
        console.log("bow bow");
    }
    else if (string == "cat") {
        console.log("meow meow");
    }
    else {
        console.log("please provdie a vaild animal name");
    }
}

animal("iubijkb");
animal("dog");


function totalSum(a, b) {
    let total = 0;
    for (let i = a; i <= b; i++) {
        total = total + i;
    }
    return total;
}

console.log(totalSum(1, 10));

let firstName = "Ariya";

function sayHiTo(firstName) {
    return `hello ${firstName}`;
}

const greet = sayHiTo("jasmeen");
console.log(greet);*/

//Function expression - when you store a function as a value in a variable.

const add = function (a, b) {
    return a + b;
}
console.log(add(2, 3));

const mul = (a, b) => {
    return a * b; //explicit return
}
console.log(mul(2, 3));

const mul1 = (a, b) => a * b; //implicit return

console.log(mul1(2, 5));

//Methods - a function that lives inside of an object.

const balance = {
    totalMoney: 500,
    spent: 200,
    //Method
    left: function () {
        return this.totalMoney - this.spent; //this refers to the object that owns the method — in this case, balance.
    },

    //short-hand method
    msg() {
        console.log("You are doing great, saving good amount of money");
    },

    wishes: () => {
        console.log("You can do it");
    }

}

console.log(balance.wishes());

const button = document.querySelector(".clickme");


const a1 = 5;

const b1 = function () {
    console.log("hello");
}

const c1 = {
    name: "Ariya",
    age: 23,
    sayHi: function () {
        return {}
    }
}

const d1 = [3, 4, 5, 6];

function laugh() {
    console.log("hahaha");
}



// button.addEventListener("click", balance.wishes);
button.addEventListener("click", balance.wishes);


setTimeout(balance.msg, 2000);

goingParty();

function goingParty() {
    console.log(" i am going to party");
}


