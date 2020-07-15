class RepoView {

    constructor() {
        throw ("Class without instacies");
      }

   static displayrepo (repo) {
        return `<div>           
            <a href="${repo.repositoriesUrl}"> ${repo.nameRepo} </a>
                /div>`
    }
}


