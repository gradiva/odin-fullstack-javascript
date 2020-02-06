import { types } from '../actions/uiActions';

const getInitialState = () => ({
  newBookFormVisible: false,
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case types.SHOW_NEW_BOOK_FORM: {
      return {
        newBookFormVisible: true,
      };
    }

    case types.HIDE_NEW_BOOK_FORM: {
      return {
        newBookFormVisible: false,
      };
    }

    case types.TOGGLE_NEW_BOOK_FORM: {
      return {
        newBookFormVisible: !state.newBookFormVisible,
      };
    }

    default: {
      return state;
    }
  }
};
