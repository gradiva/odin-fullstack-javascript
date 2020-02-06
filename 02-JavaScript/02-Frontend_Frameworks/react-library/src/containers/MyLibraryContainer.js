import { connect } from 'react-redux';
import MyLibrary from '../components/MyLibrary';
import { toggleNewBookForm } from '../actions/uiActions';

const mapStateToProps = (state) => ({
  books: state.library.books,
});

const mapDispatchToProps = {
  toggleNewBookForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);
