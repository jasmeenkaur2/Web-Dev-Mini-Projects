
// setTimeout(() => {
//     document.body.style.backgroundColor = "powderblue";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "pink";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "grey";
//         }, 2000)
//     }, 1000)
// }, 1000)

// const colorChange = (newColor, delay) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//     }, delay)
// }

// js is single threaded which means it should be synchronous



console.log("Starting");

setTimeout(() => {
    console.log("middle");
}, 5000)

console.log("Ending");
