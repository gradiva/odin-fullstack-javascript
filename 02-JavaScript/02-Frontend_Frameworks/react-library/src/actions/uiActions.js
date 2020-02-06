export const types = {
  SHOW_NEW_BOOK_FORM: 'SHOW_NEW_BOOK_FORM',
  HIDE_NEW_BOOK_FORM: 'HIDE_NEW_BOOK_FORM',
  TOGGLE_NEW_BOOK_FORM: 'TOGGLE_NEW_BOOK_FORM',
};

export const showNewBookForm = () => ({
  type: types.SHOW_NEW_BOOK_FORM,
});

export const hideNewBookForm = () => ({
  type: types.HIDE_NEW_BOOK_FORM,
});

export const toggleNewBookForm = () => ({
  type: types.TOGGLE_NEW_BOOK_FORM,
});
