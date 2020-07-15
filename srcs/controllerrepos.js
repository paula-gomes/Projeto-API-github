class ControllerRepo{

    constructor(){
        throw new Error ("Esta classe não deve ser instanciada");
    }

    static getRepo(urlRepo){
    
    
    let requestRepo= new XMLHttpRequest();
    requestRepo.open("GET",urlRepo);
    requestRepo.addEventListener("load", ()=> {

            let repositoriesObj=JSON.parse(requestRepo.responseText);
            let repoUser = document.querySelector("#repositories");    
           for(let i=0; i < repositoriesObj.length ; i++)
           { 
           
            let repositoryAPI= new UserGitRepo(repositoriesObj[i].name,repositoriesObj[i].html_url);
                console.log(repositoryAPI);
                repoUser.innerHTML+=RepoView.displayrepo(repositoryAPI.repoReturn());
           }      
   
        });
        requestRepo.send();
    }}