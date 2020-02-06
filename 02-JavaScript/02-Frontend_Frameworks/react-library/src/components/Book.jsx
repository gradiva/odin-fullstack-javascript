import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import SlideCheckbox from './SlideCheckbox';

class Book extends React.PureComponent {
  render() {
    const { book, removeBook, toggleHasRead } = this.props;
    const { id, title, author, year, hasRead } = book;

    return (
      <div className="book">
        <div className="title title-text">{title}</div>
        <div className="author book-info">{author}</div>
        <div className="year book-info">{year}</div>
        <div className="status book-info">
          <SlideCheckbox
            id={`has-read-slider-${id}`}
            name="read-status"
            checked={hasRead}
            className="read-status"
            onChange={toggleHasRead}
          />
        </div>
        <Button onClick={removeBook} value="Delete" />
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleHasRead: PropTypes.func.isRequired,
};

export default Book;
