import uuid from 'uuid/v1';
import { types } from '../actions/libraryActions';

const getInitialState = () => ({
  books: [
    { id: 'ssdf', title: 'Anna Karenina', author: 'Leo Tolstoy', year: '1873', hasRead: false },
    { id: 'sdfs', title: 'Madame Bovary', author: 'Gustave Flaubert', year: '1856', hasRead: false },
    { id: 'fdgf', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925', hasRead: true },
    { id: 'hjnv', title: 'Don Quixote', author: 'Miguel de Cervantes', year: '1605', hasRead: true },
    { id: 'cxvs', title: 'Lolita', author: 'Vladimir Nabokov', year: '1955', hasRead: false },
    { id: 'cvbb', title: 'Ulysses', author: 'James Joyce', year: '1918', hasRead: true },
  ],
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case types.ADD_BOOK: {
      const { title, author, year, status } = action;

      return {
        ...state,
        books: [
          ...state.books,
          { id: uuid(), title, author, year, status },
        ],
      };
    }

    case types.REMOVE_BOOK: {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    }

    case types.TOGGLE_HAS_READ: {
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.id) {
            return {
              ...book,
              hasRead: !book.hasRead,
            };
          }

          return book;
        }),
      };
    }

    default: {
      return state;
    }
  }
};
