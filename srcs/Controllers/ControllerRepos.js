class ControllerRepo{

    constructor(){
        throw new Error ("Esta classe não deve ser instanciada");
    }

    static getRepo(urlRepo){    
    
    let requestRepo= new XMLHttpRequest();
    requestRepo.open("GET",urlRepo);
    requestRepo.addEventListener("load", ()=> {

        try{
            if(requestRepo.status!==200)

                {throw new Error("User not found");}
           
            let repositoriesObj=JSON.parse(requestRepo.responseText);
            let repoUser = document.querySelector("#repositories");
            repoUser.innerHTML="";   
           for(let i=0; i < repositoriesObj.length ; i++)
           {            
            let repositoryAPI= new UserGitRepo(repositoriesObj[i].name,repositoriesObj[i].html_url);               
                repoUser.innerHTML+=RepoView.displayrepo(repositoryAPI.repoReturn());
           }
        }
        catch(e) 
           { console.log(e);}             
   
        });

    requestRepo.send();
    }
}
