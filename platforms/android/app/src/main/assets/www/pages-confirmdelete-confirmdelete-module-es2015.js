(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-confirmdelete-confirmdelete-module"],{

/***/ "./src/app/pages/confirmdelete/confirmdelete-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/confirmdelete/confirmdelete-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmdeletePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmdeletePageRoutingModule", function() { return ConfirmdeletePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirmdelete_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmdelete.page */ "./src/app/pages/confirmdelete/confirmdelete.page.ts");




const routes = [
    {
        path: '',
        component: _confirmdelete_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmdeletePage"]
    }
];
let ConfirmdeletePageRoutingModule = class ConfirmdeletePageRoutingModule {
};
ConfirmdeletePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmdeletePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/confirmdelete/confirmdelete.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/confirmdelete/confirmdelete.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfirmdeletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmdeletePageModule", function() { return ConfirmdeletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmdelete_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmdelete-routing.module */ "./src/app/pages/confirmdelete/confirmdelete-routing.module.ts");
/* harmony import */ var _confirmdelete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmdelete.page */ "./src/app/pages/confirmdelete/confirmdelete.page.ts");







let ConfirmdeletePageModule = class ConfirmdeletePageModule {
};
ConfirmdeletePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirmdelete_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmdeletePageRoutingModule"]
        ],
        declarations: [_confirmdelete_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmdeletePage"]]
    })
], ConfirmdeletePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-confirmdelete-confirmdelete-module-es2015.js.map