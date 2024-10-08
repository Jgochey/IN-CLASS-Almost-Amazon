/* eslint-disable no-undef */
import firebase from 'firebase';
import { signOut } from '../utils/auth';
import { getBooks, booksOnSale, favoriteAuthors } from '../api/bookData';
// import { emptyBooks, showBooks } from '../pages/books';
import { showBooks } from '../pages/books';
// eslint-disable-next-line no-unused-vars
import { getAuthors, getAuthorBooks } from '../api/authorData';
import { showAuthors } from '../pages/authors';
// import renderToDOM from '../utils/renderToDom';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale(`${firebase.auth().currentUser.uid}`).then(showBooks);
    // console.warn('CLICKED SALE BOOKS');
  });

  // TODO: ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(`${firebase.auth().currentUser.uid}`).then(showBooks);
    // console.warn('CLICKED ALL BOOKS');
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(`${firebase.auth().currentUser.uid}`).then(showAuthors);

    // console.warn('CLICKED AUTHORS');
    // getAuthors().then(showAuthors);
  });

  document.querySelector('#faveAuthors').addEventListener('click', () => {
    favoriteAuthors(`${firebase.auth().currentUser.uid}`).then(showAuthors);
    // console.warn('CLICKED FAVORITE AUTHORS');
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
