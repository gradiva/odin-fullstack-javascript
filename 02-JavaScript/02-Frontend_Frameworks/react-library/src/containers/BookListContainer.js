import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { removeBook, toggleHasRead } from '../actions/libraryActions';

const mapStateToProps = (state) => ({
  books: state.library.books,
});

const mapDispatchToProps = {
  removeBook,
  toggleHasRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
