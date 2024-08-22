/* eslint-disable no-unused-vars */
// for merged promises

import { getSingleBook } from './bookData';
import { getSingleAuthor } from './authorData';

// TODO Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

export default getSingleBook;

// Rando: viewBook wants an object?
// const bookMergedData = { ...bookObject, authorObject }
// console.warn(bookMergedData, "bookMergedData");
// Tgis is a spread, i have no idea what it means but it might come up?
