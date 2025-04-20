function userID(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`user ID: ${id}`);
        }, 2000)
    })
}

function subscription(id, days) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${id}, Days: ${days}`)
        }, 2000)
    })
}

function ending(days, left) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (left === 0) {
                reject(`Your subscription has expired.`);
            } else {
                resolve(`${days}, only ${left} days are left.`);
            }
        }, 2000)
    })
}

// userID(24).then((uid) => {
//     console.log(uid);
//     subscription(uid, 60).then((balance) => {
//         console.log(balance);
//         ending(balance, 34).then((days_left) => {
//             console.log(days_left);
//         })
//     })
// });

// userID(24).then((uid) => {
//     console.log(uid);
//     return subscription(uid, 60);
// }).then((balance) => {
//     console.log(balance);
//     return ending(balance, 34);
// }).then((days_left) => {
//     console.log(days_left);
// })

userID(24).then((uid) => {
    console.log(uid);
    return subscription(uid, 60);
}).then((balance) => {
    console.log(balance);
    return ending(balance, 0);
}).then((days_left) => {
    console.log(days_left);
}).catch((error) => {
    console.log(error);
})

