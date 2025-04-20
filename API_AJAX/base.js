
function handleerror(err) {
    console.log("There is some error.");
    console.log(err);
    user1.textContent = `Something went wrong: ${err}`;
}

const user1 = document.querySelector(".user");
const baseEndpoint = "https://api.github.com";
const userEndpoint = `${baseEndpoint}/users`;

async function DisplayUser(username) {

    user1.textContent = "Loading.....";

    const response = await fetch(`${userEndpoint}/${username}`);
    const wes_data = await response.json();


    console.log(wes_data);
    console.log(wes_data.blog);
    console.log(wes_data.location);
    user1.textContent = `My name is - ${wes_data.name}, I live in ${wes_data.location}`;


}

DisplayUser("stolinksi").catch(handleerror);