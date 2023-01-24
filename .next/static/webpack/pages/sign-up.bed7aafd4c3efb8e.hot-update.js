"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sign-up",{

/***/ "./src/components/Page.jsx":
/*!*********************************!*\
  !*** ./src/components/Page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppContext_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AppContext.jsx */ \"./src/components/AppContext.jsx\");\n/* harmony import */ var _components_Link_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Link.jsx */ \"./src/components/Link.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = (props)=>{\n    _s();\n    const { title , small , children  } = props;\n    const { setSession , state: { session  }  } = (0,_components_AppContext_jsx__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();\n    const logout = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>setSession(null), [\n        setSession\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"border-b flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold px-4 py-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/\",\n                            children: \"Blog project\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex h-full items-center px-4\",\n                            children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/settings\",\n                                            className: \"font-bold p-4 hover:underline cursor-pointer\",\n                                            children: \"Settings\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                                            lineNumber: 25,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold p-4 hover:underline cursor-pointer\",\n                                            onClick: logout,\n                                            children: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/sign-up\",\n                                            className: \"font-bold p-4 hover:underline\",\n                                            children: \"Sign up\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/sign-in\",\n                                            className: \"font-bold p-4 hover:underline\",\n                                            children: \"Sign in\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(small ? \"w-96\" : \"w-2/3 max-w-[800px]\", \"p-8 md:px-0 mx-auto\"),\n                children: [\n                    title ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-slate-600 p-4 mb-4\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined) : null,\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jean/blog-front/src/components/Page.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"ipDtuGzevyxhrbylI3/oV65Uch4=\", false, function() {\n    return [\n        _components_AppContext_jsx__WEBPACK_IMPORTED_MODULE_1__.useAppContext\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEQ7QUFDbkI7QUFDTDtBQUNBO0FBRXBDLE1BQU1JLE9BQU8sQ0FBQ0MsUUFBVTs7SUFDdEIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdIO0lBQ25DLE1BQU0sRUFDSkksV0FBVSxFQUNWQyxPQUFPLEVBQUVDLFFBQU8sRUFBRSxHQUNuQixHQUFHWCx5RUFBYUE7SUFDakIsTUFBTVksU0FBU1Qsa0RBQVdBLENBQUMsSUFBTU0sV0FBVyxJQUFJLEdBQUc7UUFBQ0E7S0FBVztJQUUvRCxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDQztnQkFBT0MsV0FBVTs7a0NBQ2hCLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FDWiw0RUFBQ2QsNERBQUlBOzRCQUFDZ0IsTUFBSztzQ0FBSTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDQztrQ0FDQyw0RUFBQ0M7NEJBQUdKLFdBQVU7c0NBQ1hKLHdCQUNDOztrREFDRSw4REFBQ1M7a0RBQ0MsNEVBQUNuQiw0REFBSUE7NENBQ0hnQixNQUFLOzRDQUNMRixXQUFVO3NEQUNYOzs7Ozs7Ozs7OztrREFJSCw4REFBQ0s7a0RBQ0MsNEVBQUNDOzRDQUNDTixXQUFVOzRDQUNWTyxTQUFTVjtzREFDVjs7Ozs7Ozs7Ozs7OzZEQU1MOztrREFDRSw4REFBQ1E7a0RBQ0MsNEVBQUNuQiw0REFBSUE7NENBQ0hnQixNQUFLOzRDQUNMRixXQUFVO3NEQUNYOzs7Ozs7Ozs7OztrREFJSCw4REFBQ0s7a0RBQ0MsNEVBQUNuQiw0REFBSUE7NENBQ0hnQixNQUFLOzRDQUNMRixXQUFVO3NEQUNYOzs7Ozs7Ozs7Ozs7NENBS047Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlQLDhEQUFDUTtnQkFDQ1IsV0FBV2IsaURBQVVBLENBQ25CSyxRQUFRLFNBQVMscUJBQXFCLEVBQ3RDOztvQkFHREQsc0JBQ0MsOERBQUNVO3dCQUFHRCxXQUFVO2tDQUNYVDs7Ozs7b0NBRUQsSUFBSTtvQkFDUEU7Ozs7Ozs7Ozs7Ozs7QUFJVDtHQXpFTUo7O1FBS0FKLHFFQUFhQTs7O0tBTGJJO0FBMkVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2UuanN4Pzk5MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQXBwQ29udGV4dC5qc3hcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAL2NvbXBvbmVudHMvTGluay5qc3hcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIHNtYWxsLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHtcbiAgICBzZXRTZXNzaW9uLFxuICAgIHN0YXRlOiB7IHNlc3Npb24gfSxcbiAgfSA9IHVzZUFwcENvbnRleHQoKTtcbiAgY29uc3QgbG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0U2Vzc2lvbihudWxsKSwgW3NldFNlc3Npb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlci1iIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgcHgtNCBweS0yXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5CbG9nIHByb2plY3Q8L0xpbms+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlciBweC00XCI+XG4gICAgICAgICAgICB7c2Vzc2lvbiA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3NldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHAtNCBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHAtNCBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dvdXR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3NpZ24tdXBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgcC00IGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2lnbi1pblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBwLTQgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGFydGljbGVcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHNtYWxsID8gXCJ3LTk2XCIgOiBcInctMi8zIG1heC13LVs4MDBweF1cIixcbiAgICAgICAgICBcInAtOCBtZDpweC0wIG14LWF1dG9cIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7dGl0bGUgPyAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTYwMCBwLTQgbWItNFwiPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbInVzZUFwcENvbnRleHQiLCJMaW5rIiwiY2xhc3NOYW1lcyIsInVzZUNhbGxiYWNrIiwiUGFnZSIsInByb3BzIiwidGl0bGUiLCJzbWFsbCIsImNoaWxkcmVuIiwic2V0U2Vzc2lvbiIsInN0YXRlIiwic2Vzc2lvbiIsImxvZ291dCIsImRpdiIsImhlYWRlciIsImNsYXNzTmFtZSIsImgxIiwiaHJlZiIsIm5hdiIsInVsIiwibGkiLCJzcGFuIiwib25DbGljayIsImFydGljbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Page.jsx\n"));

/***/ })

});