class UserView {

    constructor() {
        throw ("Class without instacies");
      }

   static displayuser (objUser) {
        return `<div class="Objuser">
            <img id = "imgUser" src= "${objUser.avatar}.jpg">
             
            <div class="nomeBio">
            <p id="nomeGit">Name: ${objUser.name}</p>
            <p id ="bioGit"> Bio: ${objUser.bio}</p>  
            </div>
            </div>`
    }
}
