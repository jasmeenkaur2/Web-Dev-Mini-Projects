function makePizza(toppings) {
    return new Promise(function (resolve, reject) {
        // wait 1 second for the pizza to cook
        setTimeout(function () {
            resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
        }, 2000)

        if (toppings.includes('pineapple')) {
            reject("Seriously? Get out 🍍");
        }
        // if something went wrong, we can reject this promise
    });

}
// understanding resolve

// writing nested promises

// makePizza(['pepporoni']).then((order) => {
//     console.log(order);
//     makePizza(['eggs']).then((order) => {
//         console.log(order);
//         makePizza(['pineaaple']).then((order) => {
//             console.log(order);
//             makePizza(['tomato']).then((order) => {
//                 console.log(order);
//                 makePizza(['farmhouse']).then((order) => {
//                     console.log(order);
//                 })
//             })
//         })
//     })
// })


// writing linear promises

// makePizza(['pepporoni']).then((order) => {
//     console.log(order);
//     return makePizza(['eggs']);
// }).then((order) => {
//     console.log(order);
//     return makePizza(['pineapple']);
// }).then((order) => {
//     console.log(order);
//     return makePizza(['tomato']);
// }).then((order) => {
//     console.log(order);
//     return makePizza(['farmhouse']);
// }).then((order) => {
//     console.log(order);
// })

// understanding reject
makePizza(['cheese', 'pineapple']).then((order) => {
    console.log(order);

}).catch((err) => {
    console.log(err);
})
