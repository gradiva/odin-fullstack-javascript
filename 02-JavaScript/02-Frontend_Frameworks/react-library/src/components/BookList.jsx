import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import '../css/book.css';

class BookList extends React.PureComponent {
  render() {
    const { books, removeBook, toggleHasRead } = this.props;

    const bookItems = books.map((book) => (
      <Book
        book={(book)}
        removeBook={() => removeBook(book.id)}
        toggleHasRead={() => toggleHasRead(book.id)}
        key={`book-${book.id}`}
      />
    ));

    return (
      <section className="books-container">
        <div className="books-header" />
        <div className="books-list">
          {bookItems}
        </div>
      </section>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleHasRead: PropTypes.func.isRequired,
};

export default BookList;
