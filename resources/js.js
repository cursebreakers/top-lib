// Initialize Library array for book objects
const myLibrary = [];

// Book object constructor class
class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
}

class Library {
  constructor() {
    this.myLibrary = [];
}
// Add book to library
addBookToLibrary() {
  /// Get user input for book details
  let title;

  while (true) {
    title = prompt('Enter the book title:');

    // Check if the title is not empty
    if (title.trim() !== '') {
      break; // Exit the loop if a non-empty title is provided
    } else {
      alert('Please enter a title.'); // Alert the user to enter a title
    }
  }

  let author;

  while (true) {
    author = prompt('Enter the author:');

    if (author.trim() !== '') {
      break;
    } else {
      alert('Please enter an author.')
    }
  }

  // Validate page count
  let pages;

    while (true) {
      pages = prompt('Enter the number of pages:');
      if (!isNaN(pages) && parseInt(pages) > 0) {
        break;
      } else {
        alert('Please enter a valid number of pages.');
      }
    }

  const read = confirm('Have you read this book?');

  // Create new book object
  const newBook = new Book(title, author, pages, read);

  this.myLibrary.push(newBook);
  this.displayBooks();
}

// Function to remove a book by its index
removeBook(index) {
  if (index >= 0 && index < this.myLibrary.length) {
    this.myLibrary.splice(index, 1);
    this.displayBooks();
  } else {
    console.log("Invalid index");
  }
}

// Toggle read status of book
toggleReadStatus(index) {
  if (index >= 0 && index < this.myLibrary.length) {
    this.myLibrary[index].read = !this.myLibrary[index].read;
    this.displayBooks();
  } else {
    console.log("Invalid index");
  }
}

// Function to display books on the page
displayBooks() {
  const bookshelf = document.querySelector('#bookshelf');

  if (!bookshelf) {
    console.error('Bookshelf element not found.');
    return;
  }

  bookshelf.innerHTML = '';

  this.myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      <button onclick="library.removeBook(${index})">Remove</button>
      <button onclick="library.toggleReadStatus(${index})">Toggle Read Status</button>
    `;
    bookshelf.appendChild(bookDiv);
  });
}
}

const library = new Library();
