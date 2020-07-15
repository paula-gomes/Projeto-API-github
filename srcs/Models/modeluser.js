class UserGit {

constructor(avatar,name,bio){

    this._avatar=avatar;
    this._name= name;
    this._bio= bio;
}

returnUser (){

    return{
        avatar:this._avatar,
        name: this._name,
        bio: this._bio

    };
}
}





