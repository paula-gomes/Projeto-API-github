class UserView {

    constructor() {
        throw ("Class without instacies");
      }

   static displayuser (objUser) {
        return `<div>
            <img src= "${objUser.avatar}.jpg">
            <p id="nomeGit"> NomeGit:  ${objUser.name}</p>
            <p id ="bioGit"> Bio: ${objUser.bio}</p>       
           
            </div>`
    }
}
