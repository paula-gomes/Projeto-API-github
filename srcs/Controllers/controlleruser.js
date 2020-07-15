class ControllerUser{

    constructor(){
        throw new Error ("Esta classe não deve ser instanciada");
    }

    static getUser(urluser){    
    
    let requestUser= new XMLHttpRequest();
    requestUser.open("GET",urluser);
    requestUser.addEventListener("load", ()=> {

            let userObj=JSON.parse(requestUser.responseText);
            let user = document.querySelector("#userid");  
          
            let userAPI= new UserGit(userObj.avatar_url,userObj.name,userObj.bio);              
               user.innerHTML+=UserView.displayuser(userAPI.returnUser());
           });   
        
    requestUser.send();
    }}