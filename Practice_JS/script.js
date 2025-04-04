console.log("Before Test");
let random = Math.random();


console.log(random);
if (random < 0.5) {
    console.log("Failed");
}

else if (random > 0.5) {
    console.log("Passed");
}
else {
    console.log("Absent");
}
console.log("After Test");
