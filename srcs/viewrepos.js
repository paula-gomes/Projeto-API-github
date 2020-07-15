class RepoView {

    constructor() {
        throw ("sem instacia");
      }

   static displayrepo (repo) {
        return `<div>
            <p> ${repo.nameRepo}</p>      
            <a href="${repo.repositoriesUrl}"> </a>
                </div>
               `;
    }
}


