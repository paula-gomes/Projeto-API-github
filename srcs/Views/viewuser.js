class UserView {

    constructor() {
        throw ("sem instacia");
      }

   static displayuser (objUser) {
        return `<div>
            <img src= "${objUser.avatar}.jpg">
            <p> ${objUser.name}</p>
            <p> ${objUser.bio}</p>       
           
            </div>`
    }
}
