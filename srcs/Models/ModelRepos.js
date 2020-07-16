class UserGitRepo {

    constructor(nameRepo,repositoriesUrl){
    
        this._nameRepo=nameRepo;
        this._repositoriesUrl= repositoriesUrl;
    }
    
    repoReturn(){
    
        return{
            nameRepo:this._nameRepo,
            repositoriesUrl: this._repositoriesUrl

        };
    }
}
