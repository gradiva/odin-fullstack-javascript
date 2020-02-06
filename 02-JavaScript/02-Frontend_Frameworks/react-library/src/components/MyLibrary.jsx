import React from 'react';
import PropTypes from 'prop-types';
import BookListContainer from '../containers/BookListContainer';
import NewBookFormContainer from '../containers/NewBookFormContainer';
import Button from './Button';
import '../css/library.css';

export default class MyLibrary extends React.PureComponent {
  render() {
    const { toggleNewBookForm } = this.props;

    return (
      <main>
        <Button className="button" value="New Book" onClick={toggleNewBookForm} />
        <NewBookFormContainer />
        <BookListContainer
          removeBookById={this.removeBookById}
          toggleHasReadById={this.toggleHasReadById}
        />
      </main>
    );
  }
}

MyLibrary.propTypes = {
  toggleNewBookForm: PropTypes.func.isRequired,
};
