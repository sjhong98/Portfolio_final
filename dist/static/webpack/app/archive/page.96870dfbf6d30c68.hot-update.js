"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/archive/page",{

/***/ "(app-pages-browser)/./app/archive/page.js":
/*!*****************************!*\
  !*** ./app/archive/page.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Archive; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _module_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../module/menu */ \"(app-pages-browser)/./app/module/menu.js\");\n/* harmony import */ var _module_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../module/title */ \"(app-pages-browser)/./app/module/title.js\");\n/* harmony import */ var _module_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../module/logo */ \"(app-pages-browser)/./app/module/logo.js\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./app/archive/page.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Archive() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const itemStyle = \"w-[150px] h-[150px] rounded-3xl bg-yellow-700 flex flex-col justify-center items-center cursor-pointer\";\n    const handleOver = (key)=>{\n        setActive(key);\n    };\n    const handleOut = ()=>{\n        setActive(-1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"section1 w-screen h-[130vh] bg-yellow-500 overflow-y-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"HSJ | Archives\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_module_logo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_module_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                title: \"기록\",\n                eng: \"ARCHIVES\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen h-[88vh] flex flex-col justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-1/3 h-[55vh] mt-32 bg-yellow-600 grid grid-cols-3 grid-rows-3 gap-4 p-12 rounded-3xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: active === 0 ? \"\".concat(itemStyle, \" scale-up\") : \"\".concat(itemStyle, \" scale-down\"),\n                            onMouseOver: ()=>{\n                                handleOver(0);\n                            },\n                            onMouseOut: handleOut,\n                            onClick: ()=>{\n                                router.push(\"https://blog.naver.com/elyon98\");\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    alt: \"...\",\n                                    src: \"/images/블로그.png\",\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"네이버 블로그\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: active === 1 ? \"\".concat(itemStyle, \" scale-up\") : \"\".concat(itemStyle, \" scale-down\"),\n                            onMouseOver: ()=>{\n                                handleOver(1);\n                            },\n                            onMouseOut: handleOut,\n                            onClick: ()=>{\n                                router.push(\"https://github.com/sjhong98\");\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    alt: \"...\",\n                                    src: \"/images/Github.png\",\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Github\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: active === 2 ? \"\".concat(itemStyle, \" scale-up\") : \"\".concat(itemStyle, \" scale-down\"),\n                            onMouseOver: ()=>{\n                                handleOver(2);\n                            },\n                            onMouseOut: handleOut,\n                            onClick: ()=>{\n                                router.push(\"https://www.instagram.com/hong_seung_jae_/\");\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    alt: \"...\",\n                                    src: \"/images/instagram.png\",\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Instagram\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: menuRef,\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_module_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/portfolio/app/archive/page.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Archive, \"E9z38dgR84jIvsQ7+kTzcHcLiNI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Archive;\nvar _c;\n$RefreshReg$(_c, \"Archive\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hcmNoaXZlL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUM7QUFDRztBQUNiO0FBQ0c7QUFDRTtBQUNGO0FBQ2Q7QUFFTCxTQUFTTzs7SUFDcEIsTUFBTUMsU0FBU04sMERBQVNBO0lBQ3hCLE1BQU1PLFVBQVVULDZDQUFNQTtJQUN0QixNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUMsQ0FBQztJQUV0QyxNQUFNVyxZQUFZO0lBRWxCLE1BQU1DLGFBQWEsQ0FBQ0M7UUFDaEJILFVBQVVHO0lBQ2Q7SUFDQSxNQUFNQyxZQUFZO1FBQ2RKLFVBQVUsQ0FBQztJQUNmO0lBRUEscUJBQ0ksOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDWixvREFBSUE7Ozs7OzBCQUNMLDhEQUFDRCxxREFBS0E7Z0JBQUNhLE9BQU07Z0JBQUtDLEtBQUk7Ozs7OzswQkFDdEIsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUNHQyxXQUFXUCxXQUFTLElBQUksR0FBYSxPQUFWRSxXQUFVLGVBQWEsR0FBYSxPQUFWQSxXQUFVOzRCQUMvRFEsYUFBYTtnQ0FBT1AsV0FBVzs0QkFBRTs0QkFDakNRLFlBQVlOOzRCQUNaTyxTQUFTO2dDQUFLZCxPQUFPZSxJQUFJLENBQUM7NEJBQWlDOzs4Q0FFM0QsOERBQUNwQixtREFBS0E7b0NBQ0ZxQixLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxPQUFPO29DQUFLQyxRQUFROzs7Ozs7OENBQ3hCLDhEQUFDQzs4Q0FBRTs7Ozs7Ozs7Ozs7O3NDQUVQLDhEQUFDWjs0QkFDR0MsV0FBV1AsV0FBUyxJQUFJLEdBQWEsT0FBVkUsV0FBVSxlQUFhLEdBQWEsT0FBVkEsV0FBVTs0QkFDL0RRLGFBQWE7Z0NBQU9QLFdBQVc7NEJBQUU7NEJBQ2pDUSxZQUFZTjs0QkFDWk8sU0FBUztnQ0FBS2QsT0FBT2UsSUFBSSxDQUFDOzRCQUE4Qjs7OENBRXhELDhEQUFDcEIsbURBQUtBO29DQUNGcUIsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSkMsT0FBTztvQ0FBS0MsUUFBUTs7Ozs7OzhDQUN4Qiw4REFBQ0M7OENBQUU7Ozs7Ozs7Ozs7OztzQ0FFUCw4REFBQ1o7NEJBQ0dDLFdBQVdQLFdBQVMsSUFBSSxHQUFhLE9BQVZFLFdBQVUsZUFBYSxHQUFhLE9BQVZBLFdBQVU7NEJBQy9EUSxhQUFhO2dDQUFPUCxXQUFXOzRCQUFFOzRCQUNqQ1EsWUFBWU47NEJBQ1pPLFNBQVM7Z0NBQUtkLE9BQU9lLElBQUksQ0FBQzs0QkFBNkM7OzhDQUV2RSw4REFBQ3BCLG1EQUFLQTtvQ0FDRnFCLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQUtDLFFBQVE7Ozs7Ozs4Q0FDeEIsOERBQUNDOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNZiw4REFBQ1o7Z0JBQUlhLEtBQUtwQjtnQkFBU1EsV0FBVTswQkFDekIsNEVBQUNiLG9EQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtHQWxFd0JHOztRQUNMTCxzREFBU0E7OztLQURKSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYXJjaGl2ZS9wYWdlLmpzP2U3NDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9tb2R1bGUvbWVudVwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9tb2R1bGUvdGl0bGVcIjtcbmltcG9ydCBMb2dvIGZyb20gJy4uL21vZHVsZS9sb2dvJztcbmltcG9ydCAnLi9wYWdlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyY2hpdmUoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgbWVudVJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgICBjb25zdCBpdGVtU3R5bGUgPSBcInctWzE1MHB4XSBoLVsxNTBweF0gcm91bmRlZC0zeGwgYmcteWVsbG93LTcwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiO1xuXG4gICAgY29uc3QgaGFuZGxlT3ZlciA9IChrZXkpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKGtleSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZU91dCA9ICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24xIHctc2NyZWVuIGgtWzEzMHZoXSBiZy15ZWxsb3ctNTAwIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgICAgICAgICA8dGl0bGU+SFNKIHwgQXJjaGl2ZXM8L3RpdGxlPlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgIDxUaXRsZSB0aXRsZT1cIuq4sOuhnVwiIGVuZz1cIkFSQ0hJVkVTXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1bODh2aF0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIGgtWzU1dmhdIG10LTMyIGJnLXllbGxvdy02MDAgZ3JpZCBncmlkLWNvbHMtMyBncmlkLXJvd3MtMyBnYXAtNCBwLTEyIHJvdW5kZWQtM3hsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZT09PTAgPyBgJHtpdGVtU3R5bGV9IHNjYWxlLXVwYCA6IGAke2l0ZW1TdHlsZX0gc2NhbGUtZG93bmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge2hhbmRsZU92ZXIoMCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17aGFuZGxlT3V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pntyb3V0ZXIucHVzaCgnaHR0cHM6Ly9ibG9nLm5hdmVyLmNvbS9lbHlvbjk4Jyl9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMv67iU66Gc6re4LnBuZycgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7rhKTsnbTrsoQg67iU66Gc6re4PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlPT09MSA/IGAke2l0ZW1TdHlsZX0gc2NhbGUtdXBgIDogYCR7aXRlbVN0eWxlfSBzY2FsZS1kb3duYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7aGFuZGxlT3ZlcigxKX19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtoYW5kbGVPdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3JvdXRlci5wdXNoKCdodHRwczovL2dpdGh1Yi5jb20vc2pob25nOTgnKX19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9HaXRodWIucG5nJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdpdGh1YjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZT09PTIgPyBgJHtpdGVtU3R5bGV9IHNjYWxlLXVwYCA6IGAke2l0ZW1TdHlsZX0gc2NhbGUtZG93bmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge2hhbmRsZU92ZXIoMil9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17aGFuZGxlT3V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pntyb3V0ZXIucHVzaCgnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ob25nX3NldW5nX2phZV8vJyl9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvaW5zdGFncmFtLnBuZycgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JbnN0YWdyYW08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiByZWY9e21lbnVSZWZ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkltYWdlIiwiTWVudSIsIlRpdGxlIiwiTG9nbyIsIkFyY2hpdmUiLCJyb3V0ZXIiLCJtZW51UmVmIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaXRlbVN0eWxlIiwiaGFuZGxlT3ZlciIsImtleSIsImhhbmRsZU91dCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZW5nIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwib25DbGljayIsInB1c2giLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/archive/page.js\n"));

/***/ })

});