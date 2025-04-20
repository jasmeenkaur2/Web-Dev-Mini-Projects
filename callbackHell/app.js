// const go = document.querySelector(".go");

// go.addEventListener('click', function (e) {
//     console.dir(e);
//     const el = e.currentTarget;
//     console.log(el);

//     setTimeout(() => {


//     }, 2000)
// })



function getMarks(id) {
    setTimeout(() => {
        console.log(`marks for user id ${id} are 95`);
    }, 3000);
}

// function getSubjects(id) {
//     setTimeout(() => {
//         console.log(`subjects for user id ${id} are english, sst, maths`)
//     }, 3000)
// }





// function getUserId(nestedFunc) {

//     setTimeout(() => {

//         console.log("got user id = 37");

//         nestedFunc(37);

//     }, 2000);

// }


// getUserId(getMarks);


function getName(id, callback) {
    setTimeout(() => {
        console.log(`Name of user id ${id} is Jasmeen`);
        callback(); // continue to next task
    }, 3000);
}

function getSubjects(id, callback) {
    setTimeout(() => {
        console.log(`Subjects for user id ${id} are English, SST, Maths`);
        callback();
    }, 3000);
}

function getUserId(callback) {
    setTimeout(() => {
        console.log("Got user id = 37");
        const uid = 37;
        callback(uid); // pass ID to next
    }, 2000);
}


getUserId((id) => {
    getName(id, () => {
        getSubjects(id, () => {
            console.log("done");
        });
    })
})