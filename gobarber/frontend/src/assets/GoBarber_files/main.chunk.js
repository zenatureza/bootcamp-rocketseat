(window["webpackJsonpfrontend-gobarber"] = window["webpackJsonpfrontend-gobarber"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config_ReactotronConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/ReactotronConfig */ "./src/config/ReactotronConfig.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");
/* harmony import */ var _services_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/history */ "./src/services/history.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/global */ "./src/styles/global.js");
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/App.js";








/* only renders router content after reading info from the client database
 this is needed to persist data, like user login, so after f5 it keeps the
 user logged
*/




function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_8__["store"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__["PersistGate"], {
    persistor: _store__WEBPACK_IMPORTED_MODULE_8__["persistor"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Router"], {
    history: _services_history__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_global__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
    autoClose: 3000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/header-logo.svg":
/*!************************************!*\
  !*** ./src/assets/header-logo.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/header-logo.910146c3.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5228e44e.svg";

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Header/styles.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notifications */ "./src/components/Notifications/index.js");
/* harmony import */ var _assets_header_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/header-logo.svg */ "./src/assets/header-logo.svg");
/* harmony import */ var _assets_header_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_header_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/components/Header/index.js";





function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_header_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "GoBarber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "DASHBOARD")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notifications__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Profile"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\xC1rthur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Meu perfil")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://api.adorable.io/avatars/50/abott@adorable.pngCopy",
    alt: "Foto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./src/components/Header/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Header/styles.js ***!
  \*****************************************/
/*! exports provided: Container, Content, Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var _Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject3() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  margin-left: 20px;\n  padding-left: 20px;\n  border-left: 1px solid #eee;\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #333;\n    }\n\n    a {\n      display: block;\n      margin-top: 2px;\n      font-size: 12px;\n      color: #999;\n    }\n  }\n\n  img {\n    height: 32px;\n    border-radius: 50%;\n  }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 64px;\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  nav {\n    display: flex;\n    align-items: center;\n\n    img {\n      margin-right: 20px;\n      padding-right: 20px;\n      border-right: 1px solid #eee;\n    }\n\n    a {\n      font-weight: bold;\n      color: #7159c1;\n    }\n  }\n\n  aside {\n    display: flex;\n    align-items: center;\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: #fff;\n  padding: 0 30px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
const Profile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());

/***/ }),

/***/ "./src/components/Notifications/index.js":
/*!***********************************************!*\
  !*** ./src/components/Notifications/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notifications; });
/* harmony import */ var _Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/pt */ "./node_modules/date-fns/locale/pt/index.js");
/* harmony import */ var date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/components/Notifications/styles.js");


var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/components/Notifications/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Notifications() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState2 = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState4 = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        notifications = _useState4[0],
        setNotifications = _useState4[1]; // find returns true when finding some notifcation already read


  const hasUnread = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => !!notifications.find(notification => notification.read === false), [notifications]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    async function loadNotifications() {
      const response = await _services_api__WEBPACK_IMPORTED_MODULE_6__["default"].get('notifications');
      console.tron.log(response.data);
      const data = response.data.map(notification => _objectSpread({}, notification, {
        timeDistance: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["formatDistance"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["parseISO"])(notification.createdAt), new Date(), {
          addSuffix: true,
          locale: date_fns_locale_pt__WEBPACK_IMPORTED_MODULE_5___default.a
        })
      }));
      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await _services_api__WEBPACK_IMPORTED_MODULE_6__["default"].put("notifications/".concat(id));
    setNotifications(notifications.map(notification => notification._id === id ? _objectSpread({}, notification, {
      read: true
    }) : notification));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
    onClick: handleToggleVisible,
    hasUnread: hasUnread,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdNotifications"], {
    color: "#7159c1",
    size: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["NotificationList"], {
    visible: visible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Scroll"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, notifications.map(notification => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Notification"], {
    key: notification._id,
    unread: !notification.read,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, notification.content), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("time", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, notification.timeDistance), !notification.read && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    onClick: () => handleMarkAsRead(notification._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Marcar como lida"))))));
}

/***/ }),

/***/ "./src/components/Notifications/styles.js":
/*!************************************************!*\
  !*** ./src/components/Notifications/styles.js ***!
  \************************************************/
/*! exports provided: Container, Badge, NotificationList, Scroll, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationList", function() { return NotificationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return Scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");


function _templateObject7() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      &::after {\n        content: '';\n        display: inline-block;\n        width: 8px;\n        height: 8px;\n        background: #ff892e;\n        border-radius: 50%;\n        margin-left: 10px;\n      }\n    "]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #fff;\n\n  & + div {\n    margin-top: 15px;\n    padding-top: 15px;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n  }\n\n  p {\n    font-size: 13px;\n    line-height: 18px;\n  }\n\n  time {\n    display: block;\n    font-size: 12px;\n    line-height: 0.6;\n    margin-bottom: 5px;\n  }\n\n  button {\n    font-size: 12px;\n    border: 0;\n    background: none;\n    color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-height: 250px;\n  padding: 5px 15px;\n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  width: 260px;\n  left: calc(50% - 130px);\n  top: calc(100% + 30px);\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 4px;\n  padding: 20px;\n  display: ", ";\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: calc(50% - 20px);\n    top: -20px;\n    width: 0;\n    height: 0;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-bottom: 20px solid rgba(0, 0, 0, 0.6);\n  }\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      &::after {\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 8px;\n        height: 8px;\n        background: #ff892e;\n        content: '';\n        border-radius: 50%;\n      }\n    "]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: none;\n  border: 0;\n  position: relative;\n\n  ", "\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const Badge = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject2(), props => props.hasUnread && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3()));
const NotificationList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), props => props.visible ? 'block' : 'none');
const Scroll = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a)(_templateObject5());
const Notification = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6(), Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, '#7159c1'), props => props.unread && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7()));

/***/ }),

/***/ "./src/config/ReactotronConfig.js":
/*!****************************************!*\
  !*** ./src/config/ReactotronConfig.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactotron_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactotron-react-js */ "./node_modules/reactotron-react-js/dist/index.js");
/* harmony import */ var reactotron_react_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactotron_react_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactotron_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactotron-redux */ "./node_modules/reactotron-redux/dist/index.js");
/* harmony import */ var reactotron_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactotron_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactotron_redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactotron-redux-saga */ "./node_modules/reactotron-redux-saga/dist/index.js");
/* harmony import */ var reactotron_redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactotron_redux_saga__WEBPACK_IMPORTED_MODULE_2__);




if (true) {
  const tron = reactotron_react_js__WEBPACK_IMPORTED_MODULE_0___default.a.configure().use(Object(reactotron_redux__WEBPACK_IMPORTED_MODULE_1__["reactotronRedux"])()).use(reactotron_redux_saga__WEBPACK_IMPORTED_MODULE_2___default()()).connect();
  tron.clear();
  console.tron = tron;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/Dashboard/index.js":
/*!**************************************!*\
  !*** ./src/pages/Dashboard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.js");
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/pages/Dashboard/index.js";

 // import { Container } from './styles';

function Dashboard() {
  _services_api__WEBPACK_IMPORTED_MODULE_1__["default"].get('appointments');
  console.tron.log('> Rendering dashboard');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "teste"));
}

/***/ }),

/***/ "./src/pages/Profile/index.js":
/*!************************************!*\
  !*** ./src/pages/Profile/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rocketseat_unform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rocketseat/unform */ "./node_modules/@rocketseat/unform/dist/index.es.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/pages/Profile/styles.js");
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/pages/Profile/index.js";



function Profile() {
  console.tron.log('> running profile route.');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "name",
    placeholder: "Nome completo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "email",
    placeholder: "Seu endere\xE7o de e-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "password",
    name: "oldPassword",
    placeholder: "Sua senha atual",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "password",
    name: "password",
    placeholder: "Nova senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirma\xE7\xE3o de senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Atualizar perfil")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Sair do GoBarber"));
}

/***/ }),

/***/ "./src/pages/Profile/styles.js":
/*!*************************************!*\
  !*** ./src/pages/Profile/styles.js ***!
  \*************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");


function _templateObject() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 600px;\n  margin: 50px auto;\n\n  form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 30px;\n\n    input {\n      background: rgba(0, 0, 0, 0.1);\n      border: 0;\n      border-radius: 4px;\n      height: 44px;\n      padding: 0 15px;\n      color: #fff;\n      margin: 0 0 10px;\n\n      &::placeholder {\n        color: rgba(255, 255, 255, 0.7);\n      }\n    }\n\n    span {\n      color: #fb6f91;\n      align-self: flex-start;\n      margin: 0 0 10px;\n      font-weight: bold;\n    }\n\n    hr {\n      border: 0;\n      height: 1px;\n      background: rgba(255, 255, 255, 0.2);\n      margin: 10px 0 20px;\n    }\n\n    button {\n      margin: 5px 0 0;\n      height: 44px;\n      background: #3b9eff;\n      font-weight: bold;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      font-size: 16px;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ", ";\n      }\n    }\n\n    a {\n      color: #fff;\n      margin-top: 15px;\n      font-size: 16px;\n      opacity: 0.8;\n\n      &:hover {\n        opacity: 1;\n      }\n    }\n  }\n\n  button {\n    margin: 5px 0 0;\n    height: 44px;\n    background: #f64c75;\n    font-weight: bold;\n    color: #fff;\n    border: 0;\n    border-radius: 4px;\n    font-size: 16px;\n    transition: background 0.2s;\n\n    &:hover {\n      background: ", ";\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), Object(polished__WEBPACK_IMPORTED_MODULE_2__["darken"])(0.03, '#3b9eff'), Object(polished__WEBPACK_IMPORTED_MODULE_2__["darken"])(0.03, '#F64C75'));

/***/ }),

/***/ "./src/pages/SignIn/index.js":
/*!***********************************!*\
  !*** ./src/pages/SignIn/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rocketseat/unform */ "./node_modules/@rocketseat/unform/dist/index.es.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/modules/auth/actions */ "./src/store/modules/auth/actions.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/pages/SignIn/index.js";







const schema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email('Insira um e-mail válido!').required('O e-mail é obrigatório!'),
  password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('A senha é obrigatório!')
});
function SignIn() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth.loading);

  function handleSubmit(data) {
    console.tron.log(data);
    const email = data.email,
          password = data.password;
    dispatch(Object(_store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_5__["signInRequest"])(email, password));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "GoBarber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    schema: schema,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "email",
    type: "email",
    placeholder: "Seu e-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "password",
    type: "password",
    placeholder: "Sua senha secreta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, loading ? 'Carregando...' : 'Acessar'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Ciar conta gratuita")));
}

/***/ }),

/***/ "./src/pages/SignUp/index.js":
/*!***********************************!*\
  !*** ./src/pages/SignUp/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rocketseat/unform */ "./node_modules/@rocketseat/unform/dist/index.es.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/modules/auth/actions */ "./src/store/modules/auth/actions.js");
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/pages/SignUp/index.js";







const schema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('O nome é obrigatório!'),
  email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email('Insira um e-mail válido!').required('O e-mail é obrigatório!'),
  password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('A senha é obrigatório!').min(6, 'A senha deve possuir no mínimo 6 caracteres')
});
function SignUp() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  function handleSubmit({
    name,
    email,
    password
  }) {
    dispatch(Object(_store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_6__["signUpRequest"])(name, email, password));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "GoBarber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    schema: schema,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "name",
    type: "text",
    placeholder: "Nome completo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "email",
    type: "email",
    placeholder: "Seu e-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "password",
    type: "password",
    placeholder: "Sua senha secreta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Criar conta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "J\xE1 tenho login")));
}

/***/ }),

/***/ "./src/pages/_layouts/auth/index.js":
/*!******************************************!*\
  !*** ./src/pages/_layouts/auth/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/pages/_layouts/auth/styles.js");
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/pages/_layouts/auth/index.js";



/* receveing all AuthLayout component childrens (h1 and h2)
   e.g.:  <AuthLayout>
            <h2>tchau</h2>
            <h1>oi<h1>
          </AuthLayout>
*/

function AuthLayout({
  children
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children));
}
AuthLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};

/***/ }),

/***/ "./src/pages/_layouts/auth/styles.js":
/*!*******************************************!*\
  !*** ./src/pages/_layouts/auth/styles.js ***!
  \*******************************************/
/*! exports provided: Wrapper, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var _Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");


function _templateObject2() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  max-width: 315px;\n  text-align: center;\n\n  form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 30px;\n\n    input {\n      background: rgba(0, 0, 0, 0.1);\n      border: 0;\n      border-radius: 4px;\n      height: 44px;\n      padding: 0 15px;\n      color: #fff;\n      margin: 0 0 10px;\n\n      &::placeholder {\n        color: rgba(255, 255, 255, 0.7);\n      }\n    }\n\n    span {\n      color: #fb6f91;\n      align-self: flex-start;\n      margin: 0 0 10px;\n      font-weight: bold;\n    }\n\n    button {\n      margin: 5px 0 0;\n      height: 44px;\n      background: #3b9eff;\n      font-weight: bold;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      font-size: 16px;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ", ";\n      }\n    }\n\n    a {\n      color: #fff;\n      margin-top: 15px;\n      font-size: 16px;\n      opacity: 0.8;\n\n      &:hover {\n        opacity: 1;\n      }\n    }\n  }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  background: linear-gradient(-90deg, #7159c1, #ab59c1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), Object(polished__WEBPACK_IMPORTED_MODULE_2__["darken"])(0.03, '#3b9eff'));

/***/ }),

/***/ "./src/pages/_layouts/default/index.js":
/*!*********************************************!*\
  !*** ./src/pages/_layouts/default/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/pages/_layouts/default/styles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Header */ "./src/components/Header/index.js");
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/pages/_layouts/default/index.js";




/* receveing all DefaultLayout component children (h1 and h2)
   e.g.:  <DefaultLayout>
            <h2>tchau</h2>
            <h1>oi<h1>
          </DefaultLayout>
*/

function DefaultLayout({
  children
}) {
  console.tron.log('> defaultLayout....');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children));
}
DefaultLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};

/***/ }),

/***/ "./src/pages/_layouts/default/styles.js":
/*!**********************************************!*\
  !*** ./src/pages/_layouts/default/styles.js ***!
  \**********************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var _Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  background: linear-gradient(-90deg, #7159c1, #ab59c1);\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/routes/Route.js":
/*!*****************************!*\
  !*** ./src/routes/Route.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteWrapper; });
/* harmony import */ var _Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_layouts_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/_layouts/auth */ "./src/pages/_layouts/auth/index.js");
/* harmony import */ var _pages_layouts_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/_layouts/default */ "./src/pages/_layouts/default/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./src/store/index.js");

var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/routes/Route.js";


 // using babel-plugin-root-import (~)




function RouteWrapper(_ref) {
  let Component = _ref.component,
      isPrivate = _ref.isPrivate,
      rest = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "isPrivate"]);

  const signed = _store__WEBPACK_IMPORTED_MODULE_6__["store"].getState().auth.signed;
  console.tron.log('$ Routes.js - signed: ', signed);
  console.tron.log('$ Routes.js - isPrivate: ', isPrivate); // redirects user back to login page

  if (!signed && isPrivate) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
  }

  if (signed && !isPrivate) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  } // defines which component should be rendered


  const Layout = signed ? _pages_layouts_default__WEBPACK_IMPORTED_MODULE_5__["default"] : _pages_layouts_auth__WEBPACK_IMPORTED_MODULE_4__["default"];
  /* copy all variables to Route component
  and passes a function with all props from the screen
  */

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
}
RouteWrapper.propTypes = {
  isPrivate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]).isRequired
};
RouteWrapper.defaultProps = {
  isPrivate: false
};

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route */ "./src/routes/Route.js");
/* harmony import */ var _pages_SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/SignIn */ "./src/pages/SignIn/index.js");
/* harmony import */ var _pages_SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/SignUp */ "./src/pages/SignUp/index.js");
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Dashboard */ "./src/pages/Dashboard/index.js");
/* harmony import */ var _pages_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Profile */ "./src/pages/Profile/index.js");
var _jsxFileName = "/Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/routes/index.js";







function Routes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/",
    exact: true,
    component: _pages_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/register",
    component: _pages_SignUp__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/dashboard",
    exact: true,
    isPrivate: true,
    component: _pages_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/profile",
    component: _pages_Profile__WEBPACK_IMPORTED_MODULE_6__["default"],
    isPrivate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:3333'
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/services/history.js":
/*!*********************************!*\
  !*** ./src/services/history.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

const history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();
/* harmony default export */ __webpack_exports__["default"] = (history);

/***/ }),

/***/ "./src/store/createStore.js":
/*!**********************************!*\
  !*** ./src/store/createStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

/* harmony default export */ __webpack_exports__["default"] = ((reducers, middlewares) => {
  const enhancer =  true ? Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(console.tron.createEnhancer(), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares)) : undefined;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, enhancer);
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: store, persistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistor", function() { return persistor; });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStore */ "./src/store/createStore.js");
/* harmony import */ var _persistReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persistReducers */ "./src/store/persistReducers.js");
/* harmony import */ var _modules_rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/rootReducer */ "./src/store/modules/rootReducer.js");
/* harmony import */ var _modules_rootSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/rootSaga */ "./src/store/modules/rootSaga.js");






const sagaMonitor =  true ? console.tron.createSagaMonitor() : undefined;
const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])({
  sagaMonitor
});
const middlewares = [sagaMiddleware];
const store = Object(_createStore__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_persistReducers__WEBPACK_IMPORTED_MODULE_3__["default"])(_modules_rootReducer__WEBPACK_IMPORTED_MODULE_4__["default"]), middlewares);
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_0__["persistStore"])(store);
sagaMiddleware.run(_modules_rootSaga__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ }),

/***/ "./src/store/modules/auth/actions.js":
/*!*******************************************!*\
  !*** ./src/store/modules/auth/actions.js ***!
  \*******************************************/
/*! exports provided: signInRequest, signInSuccess, signUpRequest, signFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInRequest", function() { return signInRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInSuccess", function() { return signInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpRequest", function() { return signUpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signFailure", function() { return signFailure; });
function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password
    }
  };
}
function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      token,
      user
    }
  };
}
function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password
    }
  };
}
function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE'
  };
}

/***/ }),

/***/ "./src/store/modules/auth/reducer.js":
/*!*******************************************!*\
  !*** ./src/store/modules/auth/reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false
};
function auth(state = INITIAL_STATE, action) {
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST':
        {
          draft.loading = true;
          break;
        }

      case '@auth/SIGN_IN_SUCCESS':
        {
          draft.token = action.payload.token;
          draft.signed = true;
          draft.loading = false;
          break;
        }

      case '@auth/SIGN_IN_FAILURE':
        {
          draft.loading = false;
          break;
        }

      default:
    }
  });
}

/***/ }),

/***/ "./src/store/modules/auth/sagas.js":
/*!*****************************************!*\
  !*** ./src/store/modules/auth/sagas.js ***!
  \*****************************************/
/*! exports provided: signIn, signUp, setToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api */ "./src/services/api.js");
/* harmony import */ var _services_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/history */ "./src/services/history.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/store/modules/auth/actions.js");





function* signIn({
  payload
}) {
  try {
    const email = payload.email,
          password = payload.password;
    console.tron.log('$ signIn: ', payload); // sessions = url
    // const body = { email, password };

    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_api__WEBPACK_IMPORTED_MODULE_2__["default"].post, 'sessions', {
      email,
      password
    });
    const _response$data = response.data,
          token = _response$data.token,
          user = _response$data.user;

    if (!user.provider) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error('Usuário nãp é um prestador de serviço!');
      return;
    } // always provides authorization inside header requests


    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.Authorization = "Bearer ".concat(token);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["signInSuccess"])(token, user));
    _services_history__WEBPACK_IMPORTED_MODULE_3__["default"].push('/dashboard');
  } catch (err) {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error('Falha na autenticação, verifique seus dados de login!');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["signFailure"])());
  }
}
function* signUp({
  payload
}) {
  try {
    const name = payload.name,
          email = payload.email,
          password = payload.password;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_api__WEBPACK_IMPORTED_MODULE_2__["default"].post, 'users', {
      name,
      email,
      password,
      provider: true
    });
    _services_history__WEBPACK_IMPORTED_MODULE_3__["default"].push('/');
  } catch (err) {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error('Falha no cadastro, verifique seus dados!');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["signFailure"])());
  }
} // setting authoeization header not only after login

function setToken({
  payload
}) {
  if (!payload) return;
  const token = payload.auth.token;

  if (token) {
    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.Authorization = "Bearer ".concat(token);
  }
} // also listening to persist/REHYDRATE action (contains persisted data)

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('persist/REHYDRATE', setToken), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('@auth/SIGN_IN_REQUEST', signIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('@auth/SIGN_UP_REQUEST', signUp)]));

/***/ }),

/***/ "./src/store/modules/rootReducer.js":
/*!******************************************!*\
  !*** ./src/store/modules/rootReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducer */ "./src/store/modules/auth/reducer.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/reducer */ "./src/store/modules/user/reducer.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/store/modules/rootSaga.js":
/*!***************************************!*\
  !*** ./src/store/modules/rootSaga.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _auth_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/sagas */ "./src/store/modules/auth/sagas.js");
/* harmony import */ var _user_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/sagas */ "./src/store/modules/user/sagas.js");



function* rootSaga() {
  return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([_auth_sagas__WEBPACK_IMPORTED_MODULE_1__["default"], _user_sagas__WEBPACK_IMPORTED_MODULE_2__["default"]]);
}

/***/ }),

/***/ "./src/store/modules/user/reducer.js":
/*!*******************************************!*\
  !*** ./src/store/modules/user/reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return user; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

const INITIAL_STATE = {
  profile: null
};
function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
        draft.profile = action.payload.user;
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/modules/user/sagas.js":
/*!*****************************************!*\
  !*** ./src/store/modules/user/sagas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([]));

/***/ }),

/***/ "./src/store/persistReducers.js":
/*!**************************************!*\
  !*** ./src/store/persistReducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");


/* harmony default export */ __webpack_exports__["default"] = (reducers => {
  const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])({
    // application name
    key: 'gobarber',
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default()),
    whitelist: ['auth', 'user']
  }, reducers);
  return persistedReducer;
});

/***/ }),

/***/ "./src/styles/global.js":
/*!******************************!*\
  !*** ./src/styles/global.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject() {
  const data = Object(_Users_arthurtolfopinheiro_Documents_bootcamp_rocketseat_modulo09_frontend_gobarber_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px 'Roboto', sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject()));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/arthurtolfopinheiro/Documents/bootcamp-rocketseat/modulo09/frontend-gobarber/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map