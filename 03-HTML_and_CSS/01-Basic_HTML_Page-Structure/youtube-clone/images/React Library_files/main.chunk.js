(window["webpackJsonpreact-library"] = window["webpackJsonpreact-library"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/book.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/book.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".book {\n  min-height: 100%;\n  max-width: 320px;\n  background: white;\n  text-decoration: none;\n  color: #444;\n  border-radius: 0.25rem;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: all .1s ease-in;\n}\n\n.book:hover {\n  top: -2px;\n  box-shadow: 0 4px 5px rgba(0,0,0,0.2);\n}\n\n.book div {\n  flex: 1 1 auto;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/button.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/button.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* .button {\n  padding: 5px 20px;\n  border: 5px solid rgba(0,0,0,0.1);\n  border-radius: 5px;\n  color:white;\n  font-weight: 100;\n  letter-spacing: 2px;\n  background:rgba(255,255,255,0.2);\n  margin:10px;\n  padding: 10px 20px;\n  font-size: 15px;\n} */", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/index.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 20px;\n  font-family: 'Roboto', sans-serif;\n  background-image: linear-gradient(260deg, #FEDCD2 0%, #BFD8D2 100%); \n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0; \n}\n\n/* DC9239   F0C5B8    FEDCD2    BFD8D2 */\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/library.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/library.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.books-list {\n  width: 90%;\n  max-width: 1240px;\n  margin: 0 auto;\n\n  box-sizing: border-box;\n  \n  display: grid;\n  \n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  grid-gap: 20px;\n}\n\n@media only screen and (min-width: 500px) {\n  .books-list {\n    grid-template-columns: 1fr 1fr;\n  }  \n}\n\n@media only screen and (min-width: 850px) {\n  .books-list {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n}\n", ""]);



/***/ }),

/***/ "./src/components/Book.jsx":
/*!*********************************!*\
  !*** ./src/components/Book.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/components/Button.jsx");
var _jsxFileName = "/Users/leticiacampos/the_odin_project/react-library/src/components/Book.jsx";




class Book extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.onRemoveBookById = this.onRemoveBookById.bind(this);
  }

  onRemoveBookById() {
    const _this$props = this.props,
          removeBookById = _this$props.removeBookById,
          book = _this$props.book;
    removeBookById(book.id);
  }

  render() {
    const book = this.props.book;
    const title = book.title,
          author = book.author,
          year = book.year,
          status = book.status;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "book",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title title-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "author book-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "year book-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, year), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), ' ', "Read/Not Yet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: this.onRemoveBookById,
      value: "Delete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  }

}

Book.propTypes = {
  book: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  removeBookById: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Book);

/***/ }),

/***/ "./src/components/BooksContainer.jsx":
/*!*******************************************!*\
  !*** ./src/components/BooksContainer.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Book */ "./src/components/Book.jsx");
/* harmony import */ var _css_book_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/book.css */ "./src/css/book.css");
/* harmony import */ var _css_book_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_book_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/leticiacampos/the_odin_project/react-library/src/components/BooksContainer.jsx";





class BooksContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    const _this$props = this.props,
          books = _this$props.books,
          removeBookById = _this$props.removeBookById;
    const bookItems = books.map(book => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Book__WEBPACK_IMPORTED_MODULE_2__["default"], {
      book: book,
      removeBookById: removeBookById,
      key: "book-".concat(book.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "books-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "books-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Author"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Year"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "books-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, bookItems));
  }

}

BooksContainer.propTypes = {
  books: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  removeBookById: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BooksContainer);

/***/ }),

/***/ "./src/components/Button.jsx":
/*!***********************************!*\
  !*** ./src/components/Button.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/button.css */ "./src/css/button.css");
/* harmony import */ var _css_button_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_button_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/leticiacampos/the_odin_project/react-library/src/components/Button.jsx";




class Button extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    const _this$props = this.props,
          onClick = _this$props.onClick,
          value = _this$props.value;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "button",
      type: "button",
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, value);
  }

}

Button.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/MyLibrary.jsx":
/*!**************************************!*\
  !*** ./src/components/MyLibrary.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyLibrary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BooksContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooksContainer */ "./src/components/BooksContainer.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/components/Button.jsx");
/* harmony import */ var _NewBookForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewBookForm */ "./src/components/NewBookForm.jsx");
/* harmony import */ var _css_library_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/library.css */ "./src/css/library.css");
/* harmony import */ var _css_library_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_library_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/leticiacampos/the_odin_project/react-library/src/components/MyLibrary.jsx";






const getInitialState = () => ({
  books: [{
    id: 'ssdf',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: '1873',
    status: 'no'
  }, {
    id: 'sdfs',
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    year: '1856',
    status: 'no'
  }, {
    id: 'fdgf',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: '1925',
    status: 'yes'
  }, {
    id: 'hjnv',
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    year: '1605',
    status: 'yes'
  }, {
    id: 'cxvs',
    title: 'Lolita',
    author: 'Vladimir Nabokov',
    year: '1955',
    status: 'no'
  }, {
    id: 'cvbb',
    title: 'Ulysses',
    author: 'James Joyce',
    year: '1918',
    status: 'yes'
  }]
});

const generateUID = () => Date.now().toString(32);

class MyLibrary extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    this.addBook = this.addBook.bind(this);
    this.removeBookById = this.removeBookById.bind(this);
  }

  addBook({
    title,
    author,
    year,
    status
  }) {
    const newBook = {
      id: generateUID(),
      title,
      author,
      year,
      status
    };
    this.setState(({
      books
    }) => ({
      books: [...books, newBook]
    }));
  }

  removeBookById(id) {
    this.setState(({
      books
    }) => ({
      books: books.filter(book => book.id !== id)
    }));
  }

  render() {
    const books = this.state.books;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: "New Book",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewBookForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      addBook: this.addBook,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BooksContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      removeBookById: this.removeBookById,
      books: books,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/NewBookForm.jsx":
/*!****************************************!*\
  !*** ./src/components/NewBookForm.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewBookForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/components/Button.jsx");
var _jsxFileName = "/Users/leticiacampos/the_odin_project/react-library/src/components/NewBookForm.jsx";



class NewBookForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.authorRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.yearRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.statusRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.onAddBookClick = this.onAddBookClick.bind(this);
  }

  onAddBookClick() {
    const addBook = this.props.addBook;

    const _this$getInputValues = this.getInputValues(),
          title = _this$getInputValues.title,
          author = _this$getInputValues.author,
          year = _this$getInputValues.year,
          status = _this$getInputValues.status;

    addBook({
      title,
      author,
      year,
      status
    });
  }

  getInputValues() {
    return {
      title: this.titleRef.current.value,
      author: this.authorRef.current.value,
      year: this.yearRef.current.value,
      status: this.statusRef.current.value
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "book-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Title", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: this.titleRef,
      type: "text",
      name: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Author", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: this.authorRef,
      type: "text",
      name: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Year", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: this.yearRef,
      type: "number",
      name: "year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Status", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: this.statusRef,
      type: "checkbox",
      name: "status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: this.onAddBookClick,
      value: "Add Book",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }));
  }

}
NewBookForm.propTypes = {
  addBook: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./src/css/book.css":
/*!**************************!*\
  !*** ./src/css/book.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./book.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/book.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./book.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/book.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./book.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/book.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/css/button.css":
/*!****************************!*\
  !*** ./src/css/button.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/button.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/button.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/button.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/css/library.css":
/*!*****************************!*\
  !*** ./src/css/library.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./library.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/library.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./library.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/library.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./library.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/library.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MyLibrary */ "./src/components/MyLibrary.jsx");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/leticiacampos/the_odin_project/react-library/src/index.jsx";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLibrary__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/leticiacampos/the_odin_project/react-library/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/leticiacampos/the_odin_project/react-library/src/index.jsx */"./src/index.jsx");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map