function userID(callback) {
    setTimeout(() => {
        const uid = 25;
        console.log(`Your Hotstar user ID is ${uid}.`);
        callback(uid);
    }, 2000)

}

function subscription(id, callback) {
    setTimeout(() => {
        const days = 60;
        console.log(`For user ID ${id}, You paid for a ${days} days subscription.`);
        callback(days);
    }, 2000)
}

function Ending(id, days) {
    setTimeout(() => {
        const end = days - 37;
        console.log(`For user ID ${id},Your subscription is ending in ${end} days.`)
    }, 2000)
}

userID((id) => {
    subscription(id, (days) => {
        Ending(id, days);
    })
})