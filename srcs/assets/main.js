let inputUser= document.querySelector("#username");
let submitUser= document.querySelector("#submituser");
let repoUser= document.querySelector("#repositories");

submitUser.addEventListener("click", () =>{

let urlRepo= `https://api.github.com/users/${inputUser.value}/repos`; 

ControllerRepo.getRepo(urlRepo);
inputUser.value="";})




