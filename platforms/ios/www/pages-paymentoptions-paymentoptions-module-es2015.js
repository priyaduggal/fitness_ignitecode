(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paymentoptions-paymentoptions-module"],{

/***/ "./src/app/pages/paymentoptions/paymentoptions-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/paymentoptions/paymentoptions-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentoptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentoptionsPageRoutingModule", function() { return PaymentoptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _paymentoptions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentoptions.page */ "./src/app/pages/paymentoptions/paymentoptions.page.ts");




const routes = [
    {
        path: '',
        component: _paymentoptions_page__WEBPACK_IMPORTED_MODULE_3__["PaymentoptionsPage"]
    }
];
let PaymentoptionsPageRoutingModule = class PaymentoptionsPageRoutingModule {
};
PaymentoptionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentoptionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/paymentoptions/paymentoptions.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/paymentoptions/paymentoptions.module.ts ***!
  \***************************************************************/
/*! exports provided: PaymentoptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentoptionsPageModule", function() { return PaymentoptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paymentoptions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentoptions-routing.module */ "./src/app/pages/paymentoptions/paymentoptions-routing.module.ts");
/* harmony import */ var _paymentoptions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentoptions.page */ "./src/app/pages/paymentoptions/paymentoptions.page.ts");







let PaymentoptionsPageModule = class PaymentoptionsPageModule {
};
PaymentoptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _paymentoptions_page__WEBPACK_IMPORTED_MODULE_6__["PaymentoptionsPage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paymentoptions_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentoptionsPageRoutingModule"]
        ],
        declarations: [_paymentoptions_page__WEBPACK_IMPORTED_MODULE_6__["PaymentoptionsPage"]]
    })
], PaymentoptionsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-paymentoptions-paymentoptions-module-es2015.js.map