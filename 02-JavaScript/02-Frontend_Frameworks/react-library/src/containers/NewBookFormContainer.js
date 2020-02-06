import { connect } from 'react-redux';
import NewBookForm from '../components/NewBookForm';
import { addBook } from '../actions/libraryActions';
import { hideNewBookForm } from '../actions/uiActions';

const mapStateToProps = (state) => ({
  hidden: !state.ui.newBookFormVisible,
});

const mapDispatchToProps = {
  addBook,
  hideNewBookForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBookForm);
