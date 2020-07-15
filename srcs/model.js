class UserGitRepo {

constructor(login,repositories){

    this._login=login;
    this._repositories= repositories;
}

returnUser (){

    return{
        login:this._login,
        repositories: this._repositories

    };
}
}





