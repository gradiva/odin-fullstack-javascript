(function anon() {
  const myLibrary = [];

  const statusOptions = [
    { value: 'yes', text: 'Yes' },
    { value: 'in-progress', text: 'In progress' },
    { value: 'no', text: 'Not yet' },
  ];

  function Book(title, author, year, status) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;

    this.updateStatus = (newStatus) => {
      this.status = newStatus;
    };
  }

  function addBookToLibrary() {
    const title = document.querySelector('.add-book-form .title').value;
    const author = document.querySelector('.add-book-form .author').value;
    const year = document.querySelector('.add-book-form .year').value;
    const statusSelected = document.querySelector('.add-book-form .status');
    const status = statusSelected.options[statusSelected.selectedIndex].value;

    const newBook = new Book(title, author, year, status);
    myLibrary.push(newBook);
  }

  function removeBookFromLibrary(book) {
    myLibrary.splice(myLibrary.indexOf(book), 1);
  }

  function createBookElement(book) {
    const bookElement = document.createElement('div');
    bookElement.className = 'book';

    const titleCell = document.createElement('div');
    titleCell.classList.add('cell', 'column-title');
    titleCell.textContent = `${book.title}`;

    const authorCell = document.createElement('div');
    authorCell.classList.add('cell', 'column-author');
    authorCell.textContent = `${book.author}`;

    const yearCell = document.createElement('div');
    yearCell.classList.add('cell', 'column-year');
    yearCell.textContent = `${book.year}`;

    const statusCell = document.createElement('div');
    statusCell.classList.add('cell', 'column-status');

    const readStatusDropdown = document.createElement('select');
    readStatusDropdown.className = 'status';

    statusOptions.forEach((statusOption) => {
      const option = document.createElement('option');
      option.value = statusOption.value;
      option.text = statusOption.text;
      readStatusDropdown.appendChild(option);
    });

    readStatusDropdown.value = book.status;

    statusCell.appendChild(readStatusDropdown);

    const deleteCell = document.createElement('div');
    deleteCell.classList.add('cell', 'column-delete');

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerText = 'Delete';

    deleteCell.appendChild(deleteButton);

    bookElement.appendChild(titleCell);
    bookElement.appendChild(authorCell);
    bookElement.appendChild(yearCell);
    bookElement.appendChild(statusCell);
    bookElement.appendChild(deleteCell);

    readStatusDropdown.addEventListener('change', () => {
      book.updateStatus(readStatusDropdown.value);
      render(myLibrary);
    });

    deleteButton.addEventListener('click', () => {
      removeBookFromLibrary(book);
      render(myLibrary);
    });

    return bookElement;
  }

  function render(books) {
    const booksContainer = document.querySelector('.library-books');

    while (booksContainer.firstChild) {
      booksContainer.removeChild(booksContainer.firstChild);
    }

    books.forEach((book) => {
      const bookElement = createBookElement(book);
      booksContainer.appendChild(bookElement);
    });
  }

  function setupEventListeners() {
    const newBookButton = document.querySelector('.new-book-button');
    const submitBookButton = document.querySelector('.submit-book-button');

    function toggleForm() {
      const bookForm = document.querySelector('.add-book-form');
      if (bookForm.style.display === 'flex') {
        bookForm.style.display = 'none';
      } else {
        bookForm.style.display = 'flex';
      }
    }

    submitBookButton.addEventListener('click', () => {
      addBookToLibrary();
      toggleForm();
      render(myLibrary);
    });

    newBookButton.addEventListener('click', () => {
      toggleForm();
    });
  }

  function populateLibrary() {
    const annaKarenina = new Book('Anna Karenina', 'Leo Tolstoy', 1873, 'no');
    const madameBovary = new Book('Madame Bovary', 'Gustave Flaubert', 1856, 'no');
    const greatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1925', 'yes');
    const quixote = new Book('Don Quixote', 'Miguel de Cervantes', '1605', 'yes');
    const lolita = new Book('Lolita', 'Vladimir Nabokov', '1955', 'in-progress');
    const ulysses = new Book('Ulysses', 'James Joyce', '1918', 'yes');

    myLibrary.push(annaKarenina, madameBovary, greatGatsby, quixote, lolita, ulysses);
  }

  function init() {
    setupEventListeners();
    populateLibrary();
    render(myLibrary);
  }

  init();
}());
