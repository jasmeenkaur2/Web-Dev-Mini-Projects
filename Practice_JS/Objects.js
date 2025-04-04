//Objects in JavaScript
const person = {
    name: "John",
    age: 25,
    2002: "birth"
}

console.log(person);
console.log(person["name"]);
console.log(person.age);
console.log(person["2002"]);
//console.log(person.2002); this doesnot work
person.age = 30;
console.log(person.age);
person.gender = "Male";
console.log(person);

//Nested objects and arays

const student = [
    {
        Name: "Liza",
        Grade: "A",
    },
    {
        Name: "Sid",
        Grade: "A+",
    }
]
console.log(student[0]);
console.log(student[0].name);
student[0].name = "Liz";
console.log(student[0].name);