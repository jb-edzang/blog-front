/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/AppContext.jsx":
/*!***************************************!*\
  !*** ./src/components/AppContext.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContextProvider\": () => (/* binding */ AppContextProvider),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Loading_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Loading.jsx */ \"./src/components/Loading.jsx\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router.js */ \"next/router.js\");\n/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst LOADING_SESSION = Symbol(\"loading session\");\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)();\nconst initialState = {\n    session: LOADING_SESSION\n};\nconst useAppContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(AppContext);\nconst AppContextProvider = (props)=>{\n    const router = (0,next_router_js__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { isPublicPage , ...otherProps } = props;\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialState);\n    const updateState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((newState)=>setState((previousState)=>deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(previousState, newState)), []);\n    const setSession = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((jwt)=>{\n        if (!jwt) {\n            localStorage.removeItem(\"session_jwt\");\n            updateState({\n                session: null\n            });\n            return;\n        }\n        localStorage.setItem(\"session_jwt\", jwt);\n        const { session  } = JSON.parse(atob(jwt.split(\".\")[1]));\n        updateState({\n            session\n        });\n    }, [\n        updateState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setSession(localStorage.getItem(\"session_jwt\"));\n    }, [\n        setSession\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!isPublicPage && !state.session) {\n            router.push(`/sign-in?returnTo=${encodeURIComponent(location.pathname)}`);\n            return;\n        }\n    }, [\n        router,\n        state.session,\n        isPublicPage\n    ]);\n    if (!isPublicPage && (!state.session || state.session === LOADING_SESSION)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/jean/blog-front/src/components/AppContext.jsx\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        ...otherProps,\n        value: {\n            setSession,\n            state\n        }\n    }, void 0, false, {\n        fileName: \"/Users/jean/blog-front/src/components/AppContext.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHBDb250ZXh0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStDO0FBQ2I7QUFDUztBQU81QjtBQUVmLE1BQU1RLGtCQUFrQkMsT0FBTztBQUMvQixNQUFNQywyQkFBYVAsb0RBQWFBO0FBQ2hDLE1BQU1RLGVBQWU7SUFDbkJDLFNBQVNKO0FBQ1g7QUFFTyxNQUFNSyxnQkFBZ0IsSUFBTVIsaURBQVVBLENBQUNLLFlBQVk7QUFFbkQsTUFBTUkscUJBQXFCLENBQUNDLFFBQVU7SUFDM0MsTUFBTUMsU0FBU2QseURBQVNBO0lBQ3hCLE1BQU0sRUFBRWUsYUFBWSxFQUFFLEdBQUdDLFlBQVksR0FBR0g7SUFDeEMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDSTtJQUNuQyxNQUFNVSxjQUFjakIsa0RBQVdBLENBQzdCLENBQUNrQixXQUNDRixTQUFTLENBQUNHLGdCQUFrQnRCLGdEQUFTQSxDQUFDc0IsZUFBZUQsWUFDdkQsRUFBRTtJQUVKLE1BQU1FLGFBQWFwQixrREFBV0EsQ0FDNUIsQ0FBQ3FCLE1BQVE7UUFDUCxJQUFJLENBQUNBLEtBQUs7WUFDUkMsYUFBYUMsVUFBVSxDQUFDO1lBQ3hCTixZQUFZO2dCQUFFVCxTQUFTLElBQUk7WUFBQztZQUU1QjtRQUNGLENBQUM7UUFFRGMsYUFBYUUsT0FBTyxDQUFDLGVBQWVIO1FBRXBDLE1BQU0sRUFBRWIsUUFBTyxFQUFFLEdBQUdpQixLQUFLQyxLQUFLLENBQUNDLEtBQUtOLElBQUlPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUVyRFgsWUFBWTtZQUFFVDtRQUFRO0lBQ3hCLEdBQ0E7UUFBQ1M7S0FBWTtJQUdmZixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RrQixXQUFXRSxhQUFhTyxPQUFPLENBQUM7SUFDbEMsR0FBRztRQUFDVDtLQUFXO0lBRWZsQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDVyxnQkFBZ0IsQ0FBQ0UsTUFBTVAsT0FBTyxFQUFFO1lBQ25DSSxPQUFPa0IsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUVDLG1CQUFtQkMsU0FBU0MsUUFBUSxFQUFFLENBQUM7WUFFeEU7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDckI7UUFBUUcsTUFBTVAsT0FBTztRQUFFSztLQUFhO0lBRXhDLElBQUksQ0FBQ0EsZ0JBQWlCLEVBQUNFLE1BQU1QLE9BQU8sSUFBSU8sTUFBTVAsT0FBTyxLQUFLSixlQUFjLEdBQUk7UUFDMUUscUJBQU8sOERBQUNSLCtEQUFPQTs7Ozs7SUFDakIsQ0FBQztJQUVELHFCQUNFLDhEQUFDVSxXQUFXNEIsUUFBUTtRQUNqQixHQUFHcEIsVUFBVTtRQUNkcUIsT0FBTztZQUNMZjtZQUNBTDtRQUNGOzs7Ozs7QUFHTixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1mcm9udC8uL3NyYy9jb21wb25lbnRzL0FwcENvbnRleHQuanN4PzJkNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkaW5nLmpzeFwiO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tIFwiZGVlcG1lcmdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXIuanNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTE9BRElOR19TRVNTSU9OID0gU3ltYm9sKFwibG9hZGluZyBzZXNzaW9uXCIpO1xuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2Vzc2lvbjogTE9BRElOR19TRVNTSU9OLFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZUFwcENvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlzUHVibGljUGFnZSwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgdXBkYXRlU3RhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAobmV3U3RhdGUpID0+XG4gICAgICBzZXRTdGF0ZSgocHJldmlvdXNTdGF0ZSkgPT4gZGVlcG1lcmdlKHByZXZpb3VzU3RhdGUsIG5ld1N0YXRlKSksXG4gICAgW11cbiAgKTtcbiAgY29uc3Qgc2V0U2Vzc2lvbiA9IHVzZUNhbGxiYWNrKFxuICAgIChqd3QpID0+IHtcbiAgICAgIGlmICghand0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic2Vzc2lvbl9qd3RcIik7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHsgc2Vzc2lvbjogbnVsbCB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Vzc2lvbl9qd3RcIiwgand0KTtcblxuICAgICAgY29uc3QgeyBzZXNzaW9uIH0gPSBKU09OLnBhcnNlKGF0b2Ioand0LnNwbGl0KFwiLlwiKVsxXSkpO1xuXG4gICAgICB1cGRhdGVTdGF0ZSh7IHNlc3Npb24gfSk7XG4gICAgfSxcbiAgICBbdXBkYXRlU3RhdGVdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZXNzaW9uKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Vzc2lvbl9qd3RcIikpO1xuICB9LCBbc2V0U2Vzc2lvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1B1YmxpY1BhZ2UgJiYgIXN0YXRlLnNlc3Npb24pIHtcbiAgICAgIHJvdXRlci5wdXNoKGAvc2lnbi1pbj9yZXR1cm5Ubz0ke2VuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSl9YCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIHN0YXRlLnNlc3Npb24sIGlzUHVibGljUGFnZV0pO1xuXG4gIGlmICghaXNQdWJsaWNQYWdlICYmICghc3RhdGUuc2Vzc2lvbiB8fCBzdGF0ZS5zZXNzaW9uID09PSBMT0FESU5HX1NFU1NJT04pKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzZXRTZXNzaW9uLFxuICAgICAgICBzdGF0ZSxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTG9hZGluZyIsImRlZXBtZXJnZSIsInVzZVJvdXRlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxPQURJTkdfU0VTU0lPTiIsIlN5bWJvbCIsIkFwcENvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJzZXNzaW9uIiwidXNlQXBwQ29udGV4dCIsIkFwcENvbnRleHRQcm92aWRlciIsInByb3BzIiwicm91dGVyIiwiaXNQdWJsaWNQYWdlIiwib3RoZXJQcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm5ld1N0YXRlIiwicHJldmlvdXNTdGF0ZSIsInNldFNlc3Npb24iLCJqd3QiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImF0b2IiLCJzcGxpdCIsImdldEl0ZW0iLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AppContext.jsx\n");

/***/ }),

/***/ "./src/components/Loading.jsx":
/*!************************************!*\
  !*** ./src/components/Loading.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Loading = ()=>{\n    return \"Loading...\";\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxJQUFNO0lBQ3BCLE9BQU87QUFDVDtBQUVBLGlFQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1mcm9udC8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcuanN4PzFjZTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTG9hZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiJdLCJuYW1lcyI6WyJMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Loading.jsx\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppContext_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AppContext.jsx */ \"./src/components/AppContext.jsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst App = ({ Component: PageComponent , pageProps , ...otherProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContext_jsx__WEBPACK_IMPORTED_MODULE_1__.AppContextProvider, {\n        isPublicPage: PageComponent.isPublic,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageComponent, {\n            ...pageProps,\n            ...otherProps\n        }, void 0, false, {\n            fileName: \"/Users/jean/blog-front/src/pages/_app.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jean/blog-front/src/pages/_app.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBaUU7QUFDbkM7QUFFOUIsTUFBTUMsTUFBTSxDQUFDLEVBQUVDLFdBQVdDLGNBQWEsRUFBRUMsVUFBUyxFQUFFLEdBQUdDLFlBQVksR0FBSztJQUN0RSxxQkFDRSw4REFBQ0wsMEVBQWtCQTtRQUFDTSxjQUFjSCxjQUFjSSxRQUFRO2tCQUN0RCw0RUFBQ0o7WUFBZSxHQUFHQyxTQUFTO1lBQUcsR0FBR0MsVUFBVTs7Ozs7Ozs7Ozs7QUFHbEQ7QUFFQSxpRUFBZUosR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctZnJvbnQvLi9zcmMvcGFnZXMvX2FwcC5qc3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0FwcENvbnRleHQuanN4XCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQ6IFBhZ2VDb21wb25lbnQsIHBhZ2VQcm9wcywgLi4ub3RoZXJQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHRQcm92aWRlciBpc1B1YmxpY1BhZ2U9e1BhZ2VDb21wb25lbnQuaXNQdWJsaWN9PlxuICAgICAgPFBhZ2VDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gey4uLm90aGVyUHJvcHN9IC8+XG4gICAgPC9BcHBDb250ZXh0UHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiQXBwQ29udGV4dFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwiUGFnZUNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm90aGVyUHJvcHMiLCJpc1B1YmxpY1BhZ2UiLCJpc1B1YmxpYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ "next/router.js":
/*!*********************************!*\
  !*** external "next/router.js" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();