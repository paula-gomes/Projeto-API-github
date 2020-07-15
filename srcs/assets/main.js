let inputUser= document.querySelector("#username");
let submitUser= document.querySelector("#submituser");
let repoUser= document.querySelector("#repositories");

submitUser.addEventListener("click", () =>{

let urlUser= `https://api.github.com/users/${inputUser.value}`;
let urlRepo= `https://api.github.com/users/${inputUser.value}/repos`; 

ControllerUser.getUser(urlUser);
ControllerRepo.getRepo(urlRepo);
inputUser.value="";})




