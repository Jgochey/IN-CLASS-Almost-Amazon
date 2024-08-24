import { getAuthorBooks } from '../api/authorData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
// import { getAuthorBooks } from '../api/authorData';
// import { getAuthorDetails } from '../api/mergedData';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${obj.email}</h6>
               <div class="mt-5">
       <i id="update-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-author-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>

            <hr>
            <h4> Books </h4>
            <div id="authorBookList">${getAuthorBooks(obj.firebaseKey)}</div>
        </div>
      </div>
      `;

  renderToDOM('#view', domString);
};

// This should display all the author's books too.
// Also deleting an author does not delete their books too.

export default viewAuthor;
