function userID(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`user ID: ${id}`);
        }, 2000);
    });
}

function subscription(id, days) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${id}, Days: ${days}`);
        }, 2000);
    });
}

function ending(id, days, left) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (left === 0) {
                reject(`${id}, your subscription has expired.`);
            } else {
                resolve(`${id}, out of ${days} days, only ${left} days are left.`);
            }
        }, 2000);
    });
}

async function mainFlow() {
    try {
        const uid = await userID(24);
        console.log(uid); // "user ID: 24"

        const balance = await subscription(uid, 60);
        console.log(balance); // "user ID: 24, Days: 60"

        const days_left = await ending(uid, 60, 23); // Change 0 to test rejection
        console.log(days_left); // If not expired, this will log remaining days
    } catch (error) {
        console.error("Error:", error); // Catches if left === 0
    }
}

mainFlow();