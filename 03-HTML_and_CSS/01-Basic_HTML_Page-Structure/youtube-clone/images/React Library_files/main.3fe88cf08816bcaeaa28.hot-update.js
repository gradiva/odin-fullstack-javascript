webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.3fe88cf08816bcaeaa28.hot-update.js.map