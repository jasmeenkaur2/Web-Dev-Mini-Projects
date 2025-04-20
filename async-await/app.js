function getUserID(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(37);
        }, 2000);
    });
}

function getUsername(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`jasmeen`);
        }, 2000);
    });
}

function getMarks(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(95);
        }, 2000);
    });
}

async function go() {
    // console.log('Shop open');
    const id = await getUserID();
    console.log("id of student is " + id);
    const username = await getUsername(id);
    console.log("student name is " + username);
    const marks = await getMarks(username);
    console.log("marks of student with id " + id + " and name " + username + " are " + marks);
}
go();

console.log("random functions");


console.log(5 * 20);
