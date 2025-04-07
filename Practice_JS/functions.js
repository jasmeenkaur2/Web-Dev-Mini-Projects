function wishes(name) {//name is parameter here
    console.log(`Hello ${name} Wishing you all the best`)
}

wishes("Ariya") // Ariya is argument here

function names(firstName, lastName) {
    console.log(fullName = firstName + " " + lastName);

}

names("Jasmeen", "Kaur")

function repeat(string, n) {
    for (let i = 0; i < n; i++) {
        console.log(string);
    }
}

repeat("Hola!!!", 5);

function count_Even(num) {
    let count = 0;
    for (let i = 0; i < num; i++) {
        if (i % 2 == 0) {
            count++;
        }
    }
    return count;
}

count_Even(12);

console.log(count_Even(12));
