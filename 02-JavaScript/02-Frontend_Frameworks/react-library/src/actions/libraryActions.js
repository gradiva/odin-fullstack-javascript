export const types = {
  ADD_BOOK: 'ADD_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  TOGGLE_HAS_READ: 'TOGGLE_HAS_READ',
};

export const addBook = ({ title, author, year, status }) => ({
  type: types.ADD_BOOK,
  title,
  author,
  year,
  status,
});

export const removeBook = (id) => ({
  type: types.REMOVE_BOOK,
  id,
});

export const toggleHasRead = (id) => ({
  type: types.TOGGLE_HAS_READ,
  id,
});
