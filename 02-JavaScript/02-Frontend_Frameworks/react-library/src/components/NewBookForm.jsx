import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from './Button';
import '../css/form.css';

export default class NewBookForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
    this.yearRef = React.createRef();
    this.statusRef = React.createRef();

    this.onAddBookClick = this.onAddBookClick.bind(this);
  }

  onAddBookClick() {
    const { addBook, hideNewBookForm } = this.props;
    const { title, author, year, status } = this.getInputValues();

    addBook({ title, author, year, status });
    hideNewBookForm();

    this.formRef.current.reset();
  }

  getInputValues() {
    return {
      title: this.titleRef.current.value,
      author: this.authorRef.current.value,
      year: this.yearRef.current.value,
      status: this.statusRef.current.value,
    };
  }

  render() {
    const { hidden } = this.props;

    return (
      <form ref={this.formRef} className={cx('book-form', { hidden })}>
        <label htmlFor="title">
          Title
          <input ref={this.titleRef} type="text" name="title" />
        </label>
        <label htmlFor="author">
          Author
          <input ref={this.authorRef} type="text" name="author" />
        </label>
        <label htmlFor="year">
          Year
          <input ref={this.yearRef} type="number" name="year" />
        </label>
        <label htmlFor="status" className="checkbox-label">
          Status
          <input ref={this.statusRef} type="checkbox" name="status" className="form-checkbox" />
        </label>
        <div>
          <Button className="button add-book" onClick={this.onAddBookClick} value="Add Book" />
        </div>
      </form>
    );
  }
}

NewBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
  hideNewBookForm: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
};
