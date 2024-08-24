import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
// import { getAuthorDetails } from '../api/mergedData';
// import { getAuthorBooks } from '../api/authorData';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
      <div class="card" style="width: 80%px;">
        <div class="card-body">
          <h5 class="card-title">${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${obj.email}</h6>
               <div class="mt-5">
       <i id="update-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-author-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       <hr>
            <h4> Books </h4>
            <div id="bookHolder" style="display: flex; flex-direction: row;"></div>
     </div>`;

  renderToDOM('#view', domString);
  let bookString = '';

  obj.books.forEach((item) => {
    bookString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });

  renderToDOM('#bookHolder', bookString);
};

// Also deleting an author does not delete their books too.

export default viewAuthor;
