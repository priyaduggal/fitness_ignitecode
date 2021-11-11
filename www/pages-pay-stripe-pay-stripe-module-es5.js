(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pay-stripe-pay-stripe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pay-stripe/pay-stripe.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pay-stripe/pay-stripe.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--ion-header>\n  <ion-toolbar>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header-->\n<ion-content>\n<ion-header>\n  \n  \n  \n   <ion-toolbar>\n\t\t<ion-back-button text=\"\" slot=\"start\" defaultHref=\"/plans\">\n\t\t\t<!--ion-icon name=\"arrow-back\"></ion-icon-->\n\t\t</ion-back-button>   \n\t    <ion-title class=\"ion-text-center\">Add Card Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\t<div class=\"date-cont\">\t\n\t\t\t<!--ion-row>\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<div class=\"box-crdits\">\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"top-cips\">\n\t\t\t\t\t\t\t<img src=\"assets/images/chip.png\" class=\"chip-s\">\n\t\t\t\t\t\t\t<img src=\"assets/images/visa.png\" class=\"visa-s\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"accnt-nusm\"> \n\t\t\t\t\t\t\t\t<span> **** </span>\n\t\t\t\t\t\t\t\t<span> **** </span>\n\t\t\t\t\t\t\t\t<span> **** </span>\n\t\t\t\t\t\t\t\t<span> 1234 </span>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"tst-lta\">\n\t\t\t\t\t\t\t<p> Name \n\t\t\t\t\t\t\t\t<span *ngIf=\"cardForm.value.cardName == ''\"> Brice Seraphin </span> \n\t\t\t\t\t\t\t\t<span *ngIf=\"cardForm.value.cardName != ''\"> {{cardForm.value.cardName}} </span> \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p> Exp Date \n\t\t\t\t\t\t\t\t<span *ngIf=\"cardForm.value.expMonth == ''\"> 14/20 </span> \n\t\t\t\t\t\t\t\t<span *ngIf=\"cardForm.value.expMonth != ''\"> {{cardForm.value.expMonth}}/{{cardForm.value.expYear}} </span> \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row-->\n\t\t\t<!--div card-detail>\n\t\t\t    <h3> Add Your Details </h3>\n\t\t\t\t<p>Start typing to add your card details. Everything will update according to your.</p>\n\t\t\t</div-->\n\t\t\t<div card-field>\n\t\t\t<form [formGroup]=\"cardForm\" (ngSubmit)=\"saveCard(cardForm.value)\">\n\t\t\t<ion-row>\n\n\n\t\t\t\t<div *ngIf=\"validateCard==true\">\n\t\t\t\t\t\t<p style=\"color:red;\">*Not a Valid Card Number</p>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div *ngIf=\"validateExpMonthYear==true\">\n\t\t\t\t\t\t<p style=\"color:red;\">*Not a Valid Exp. Month Or Year</p>\n\t\t\t\t</div>\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">Card Number</ion-label>\n\t\t\t\t\t\t<ion-input type=\"text\"  placeholder=\"Enter Card Number\" \n\t\t\t\t\t\tformControlName=\"number\" maxlength=\"16\" (keyup)=\"checkDigit($event)\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t\n\t\t\t\t\t\t<div *ngIf=\"submitted && form.number.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"form.number.errors.pattern\">*Card Number is invalid!</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"submitted && form.number.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"form.number.errors.required\">*Card Number is required!</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\n\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">Card Holder Name</ion-label>\n\t\t\t\t\t\t<ion-input placeholder=\"Enter Card Holder Name\" formControlName=\"cardName\"></ion-input>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div *ngIf=\"submitted && form.cardName.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"form.cardName.errors.required\">*Card Holder Name is required!</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-col>\n\n\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">Expiry Date</ion-label>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"MM\" formControlName=\"expMonth\" maxlength=\"2\"></ion-input> \n\t\t\t\t\t\t</ion-col> \n\n\t\t\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">/</ion-label>\n\t\t\t\t\t\t</ion-col>\n\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"YY\" formControlName=\"expYear\" maxlength=\"2\"></ion-input>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div *ngIf=\"submitted && form.expMonth.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"form.expMonth.errors.required\">*Month is required!</p>\n\t\t\t\t\t</div>\n\t\t\t        <div *ngIf=\"submitted && form.expMonth.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"form.expMonth.errors.pattern\">*Month is invalid!</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"submitted && form.expYear.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"form.expYear.errors.required\">*Year is required!</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"submitted && form.expYear.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"form.expYear.errors.pattern\">*Year is invalid!</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-col>\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">CVV</ion-label>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<ion-input type=\"text\"  placeholder=\"Enter CVV\"  formControlName=\"cvv\" maxlength=\"3\"></ion-input> \n\t\t\t\t\t\t</ion-col> \n\n\t\t\t\t\t\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div *ngIf=\"submitted && form.cvv.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"form.cvv.errors.required\">*CVV is required!</p>\n\t\t\t\t\t</div>\n\t\t\t<div *ngIf=\"submitted && form.cvv.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"form.cvv.errors.pattern\">*CVV is invalid!</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\n\n\t\t\t\t</ion-col>\n\n\n\t\t\t\t<!-- <ion-col size=\"5\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">CVV</ion-label>\n\t\t\t\t\t\t<ion-input placeholder=\"Enter CVV\" formControlName=\"cvv\"></ion-input>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div *ngIf=\"submitted && form.cvv.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p *ngIf=\"form.cvv.errors.required\" class=\"errors\">*CVV is required!</p>\n\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col> -->\n\n\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<div submit-btn>\n\t\t\t\t\t\t<ion-button type=\"submit\" expand=\"full\" shape=\"round\" color=\"primary\">Pay Now</ion-button>\n\t\t\t\t\t</div> \n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t</form>\n\t\t\t</div>\n\t</div>\n<img service-mark-icon src=\"assets/img/service-mark-icon.png\" alt=\"\" />\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/pay-stripe/pay-stripe-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/pay-stripe/pay-stripe-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PayStripePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayStripePageRoutingModule", function() { return PayStripePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pay_stripe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay-stripe.page */ "./src/app/pages/pay-stripe/pay-stripe.page.ts");




var routes = [
    {
        path: '',
        component: _pay_stripe_page__WEBPACK_IMPORTED_MODULE_3__["PayStripePage"]
    }
];
var PayStripePageRoutingModule = /** @class */ (function () {
    function PayStripePageRoutingModule() {
    }
    PayStripePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PayStripePageRoutingModule);
    return PayStripePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pay-stripe/pay-stripe.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/pay-stripe/pay-stripe.module.ts ***!
  \*******************************************************/
/*! exports provided: PayStripePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayStripePageModule", function() { return PayStripePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pay_stripe_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pay-stripe-routing.module */ "./src/app/pages/pay-stripe/pay-stripe-routing.module.ts");
/* harmony import */ var _pay_stripe_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pay-stripe.page */ "./src/app/pages/pay-stripe/pay-stripe.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var PayStripePageModule = /** @class */ (function () {
    function PayStripePageModule() {
    }
    PayStripePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _pay_stripe_routing_module__WEBPACK_IMPORTED_MODULE_4__["PayStripePageRoutingModule"]
            ],
            declarations: [_pay_stripe_page__WEBPACK_IMPORTED_MODULE_5__["PayStripePage"]]
        })
    ], PayStripePageModule);
    return PayStripePageModule;
}());



/***/ }),

/***/ "./src/app/pages/pay-stripe/pay-stripe.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/pay-stripe/pay-stripe.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #fff; }\n  ion-content ion-header {\n    position: relative; }\n  ion-content ion-header:after {\n      display: none; }\n  ion-content ion-header ion-toolbar {\n      --background: #ececec;\n      padding: 10px 10px 40px;\n      color: #292929;\n      --min-height: 28px;\n      position: relative;\n      z-index: 0; }\n  ion-content ion-header ion-toolbar ion-back-button {\n        color: #292929;\n        font-size: 20px; }\n  ion-content ion-header ion-toolbar ion-title {\n        font-size: 18px; }\n  ion-content ion-header ion-toolbar:after {\n        /* content:\"\";\r\n\t\t\t\tbackground: url(\"../../../assets/images/profile-bg.jpg\");\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tright: 0;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tbottom: 0;\r\n\t\t\t\tbackground-size: cover;\r\n\t\t\t\tbackground-position: center;\r\n\t\t\t\topacity: 0.1; */ }\n  ion-content .date-cont {\n    position: relative;\n    z-index: 11;\n    padding: 30px 20px 40px;\n    border-radius: 25px 25px 0px 0px;\n    margin-top: -30px;\n    background: #fff; }\n  ion-content .date-cont .box-crdits {\n      background: #dfa5a4;\n      width: 100%;\n      padding: 25px;\n      position: relative;\n      z-index: 1;\n      overflow: hidden;\n      margin-bottom: 25px;\n      border-radius: 12px;\n      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.07);\n      margin-top: 0px; }\n  ion-content .date-cont .box-crdits .top-cips {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        margin-bottom: 15px; }\n  ion-content .date-cont .box-crdits .top-cips img.chip-s {\n          height: 35px; }\n  ion-content .date-cont .box-crdits .top-cips img.visa-s {\n          height: 20px; }\n  ion-content .date-cont .box-crdits .accnt-nusm {\n        color: #fff;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        margin: 20px 0px;\n        letter-spacing: 4px;\n        font-size: 14px;\n        font-weight: 500; }\n  ion-content .date-cont .box-crdits .accnt-nusm span {\n          color: #fff; }\n  ion-content .date-cont .box-crdits .tst-lta {\n        color: #fff;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        text-align: initial; }\n  ion-content .date-cont .box-crdits .tst-lta p {\n          font-size: 10px;\n          text-transform: uppercase;\n          letter-spacing: 1px;\n          margin: 0px;\n          color: #fff; }\n  ion-content .date-cont .box-crdits .tst-lta p span {\n            display: block;\n            font-size: 14px;\n            font-weight: 500;\n            letter-spacing: 2px;\n            color: #fff;\n            margin-top: 5px; }\n  ion-content .date-cont .box-crdits [credit-logo] {\n        position: absolute;\n        top: 0px;\n        bottom: 0px;\n        left: 0px;\n        right: 0px;\n        margin: auto;\n        width: 130px;\n        z-index: -1;\n        opacity: 1; }\n  ion-content .date-cont .box-crdits:before {\n        position: absolute;\n        content: \"\";\n        top: 0px;\n        bottom: 0px;\n        left: 0px;\n        right: 0px;\n        background: url('credit-card-pattern.png') no-repeat center center/cover;\n        opacity: 0.08;\n        z-index: -1; }\n  ion-content .date-cont [card-detail] {\n      padding: 0px 5px 25px; }\n  ion-content .date-cont [card-detail] h3 {\n        margin: 0px;\n        font-size: 18px;\n        font-weight: 600;\n        color: #222;\n        letter-spacing: 1px; }\n  ion-content .date-cont [card-detail] p {\n        margin: 10px 0px 0px;\n        font-size: 14px;\n        color: #9c9c9c;\n        line-height: 26px; }\n  ion-content .date-cont [card-field] ion-item {\n      --min-height: 42px;\n      border: 1px solid #dadada;\n      --padding-top: 8px;\n      --padding-bottom: 8px;\n      border-radius: 4px;\n      margin-bottom: 12px; }\n  ion-content .date-cont [card-field] ion-item ion-label {\n        margin: 0px;\n        -webkit-transform: translateY(0%) scale(1);\n                transform: translateY(0%) scale(1);\n        font-size: 11px;\n        font-weight: 500;\n        color: #909090 !important; }\n  ion-content .date-cont [card-field] ion-item ion-input {\n        font-size: 14px;\n        --padding-top: 3px;\n        --padding-bottom: 3px;\n        color: #333;\n        --placeholder-opacity: 1;\n        font-weight: 500; }\n  ion-content .date-cont [card-field] ion-item ion-datetime {\n        font-size: 14px;\n        --padding-top: 3px;\n        --padding-bottom: 3px;\n        color: #333;\n        --placeholder-opacity: 1;\n        font-weight: 500; }\n  ion-content .date-cont [card-field] [submit-btn] ion-button {\n      min-height: 48px;\n      --box-shadow: none;\n      font-weight: 500;\n      font-size: 15px;\n      margin: 0px 0px 10px; }\n  ion-content span.rigt-lined {\n    position: relative;\n    z-index: 0; }\n  ion-content span.rigt-lined:after {\n      content: \"\";\n      position: absolute;\n      right: -21px;\n      width: 17px;\n      height: 2px;\n      background: #00853f;\n      top: 14px; }\n  .errors {\n  color: red;\n  font-size: 12px; }\n  [submit-btn] {\n  padding-top: 13px; }\n  button.bts-sstr {\n  padding: 0px;\n  margin: 0px;\n  width: 30px;\n  height: 30px;\n  background: #dfa5a4;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 24px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  right: 22px;\n  top: 40px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5LXN0cmlwZS9FOlxcZml0bmVzcy1hcHAtY29kZS1kZWxpdmVyeS9zcmNcXGFwcFxccGFnZXNcXHBheS1zdHJpcGVcXHBheS1zdHJpcGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXktc3RyaXBlL3BheS1zdHJpcGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWEsRUFBQTtFQURkO0lBR0Usa0JBQWtCLEVBQUE7RUFIcEI7TUFLRyxhQUFhLEVBQUE7RUFMaEI7TUFRRyxxQkFBYTtNQUNiLHVCQUF1QjtNQUN2QixjQUFjO01BQ2Qsa0JBQWE7TUFDYixrQkFBa0I7TUFDbEIsVUFBVSxFQUFBO0VBYmI7UUFlSSxjQUFjO1FBQ2QsZUFBZSxFQUFBO0VBaEJuQjtRQW1CSSxlQUFlLEVBQUE7RUFuQm5CO1FBc0JJOzs7Ozs7Ozs7bUJDTWUsRURHQztFQS9CcEI7SUFvQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQXpDbEI7TUEyQ0csbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQiw0Q0FBNEM7TUFDNUMsZUFBZSxFQUFBO0VBcERsQjtRQXNESSxvQkFBYTtRQUFiLGFBQWE7UUFDYix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQix5QkFBOEI7Z0JBQTlCLDhCQUE4QjtRQUM5QixtQkFBbUIsRUFBQTtFQXpEdkI7VUEyREssWUFBWSxFQUFBO0VBM0RqQjtVQThESyxZQUFZLEVBQUE7RUE5RGpCO1FBa0VJLFdBQVc7UUFDWCxvQkFBYTtRQUFiLGFBQWE7UUFDYix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQix5QkFBOEI7Z0JBQTlCLDhCQUE4QjtRQUM5QixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTtFQXpFcEI7VUE0RUssV0FBVyxFQUFBO0VBNUVoQjtRQWdGSSxXQUFXO1FBQ1gsb0JBQWE7UUFBYixhQUFhO1FBQ2IseUJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIseUJBQThCO2dCQUE5Qiw4QkFBOEI7UUFDOUIsbUJBQW1CLEVBQUE7RUFwRnZCO1VBc0ZLLGVBQWU7VUFDZix5QkFBeUI7VUFDekIsbUJBQW1CO1VBQ25CLFdBQVc7VUFDWCxXQUFXLEVBQUE7RUExRmhCO1lBNkZNLGNBQWM7WUFDZCxlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsZUFBZSxFQUFBO0VBbEdyQjtRQXdHSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCxTQUFTO1FBQ1QsVUFBVTtRQUNWLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLFVBQVUsRUFBQTtFQWhIZDtRQW1ISSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFFBQVE7UUFDUixXQUFXO1FBQ1gsU0FBUztRQUNULFVBQVU7UUFDVix3RUFBNkY7UUFDN0YsYUFBYTtRQUNiLFdBQVcsRUFBQTtFQTNIZjtNQStIRyxxQkFBcUIsRUFBQTtFQS9IeEI7UUFpSUksV0FBVztRQUNYLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLG1CQUFtQixFQUFBO0VBckl2QjtRQXdJSSxvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGNBQWM7UUFDZCxpQkFBaUIsRUFBQTtFQTNJckI7TUFnSkksa0JBQWE7TUFDYix5QkFBeUI7TUFDekIsa0JBQWM7TUFDZCxxQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBO0VBckp2QjtRQXVKSyxXQUFXO1FBQ1gsMENBQWtDO2dCQUFsQyxrQ0FBa0M7UUFDbEMsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix5QkFBd0IsRUFBQTtFQTNKN0I7UUE4SkssZUFBZTtRQUNmLGtCQUFjO1FBQ2QscUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCx3QkFBc0I7UUFDdEIsZ0JBQWdCLEVBQUE7RUFuS3JCO1FBc0tLLGVBQWU7UUFDZixrQkFBYztRQUNkLHFCQUFpQjtRQUNqQixXQUFXO1FBQ1gsd0JBQXNCO1FBQ3RCLGdCQUFnQixFQUFBO0VBM0tyQjtNQWdMSyxnQkFBZ0I7TUFDaEIsa0JBQWE7TUFDYixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLG9CQUFvQixFQUFBO0VBcEx6QjtJQTBMRSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFBO0VBM0xaO01BNkxHLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxXQUFXO01BQ1gsbUJBQW1CO01BQ25CLFNBQVMsRUFBQTtFQUtaO0VBQ0MsVUFBVTtFQUNWLGVBQWUsRUFBQTtFQ2xDaEI7RURxQ0ksaUJBQWlCLEVBQUE7RUFFckI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheS1zdHJpcGUvcGF5LXN0cmlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGlvbi1oZWFkZXIge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0JjphZnRlciB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0XHRpb24tdG9vbGJhciB7XHJcblx0XHRcdC0tYmFja2dyb3VuZDogI2VjZWNlYztcclxuXHRcdFx0cGFkZGluZzogMTBweCAxMHB4IDQwcHg7XHJcblx0XHRcdGNvbG9yOiAjMjkyOTI5O1xyXG5cdFx0XHQtLW1pbi1oZWlnaHQ6IDI4cHg7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ei1pbmRleDogMDtcclxuXHRcdFx0aW9uLWJhY2stYnV0dG9uIHtcclxuXHRcdFx0XHRjb2xvcjogIzI5MjkyOTtcclxuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aW9uLXRpdGxlIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0LyogY29udGVudDpcIlwiO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS1iZy5qcGdcIik7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRcdFx0XHRvcGFjaXR5OiAwLjE7ICovXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmRhdGUtY29udCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR6LWluZGV4OiAxMTtcclxuXHRcdHBhZGRpbmc6IDMwcHggMjBweCA0MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAtMzBweDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHQuYm94LWNyZGl0cyB7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNkZmE1YTQ7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRwYWRkaW5nOiAyNXB4O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHotaW5kZXg6IDE7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblx0XHRcdGJveC1zaGFkb3c6IDFweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0XHRcdC50b3AtY2lwcyB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0XHRcdGltZy5jaGlwLXMge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbWcudmlzYS1zIHtcclxuXHRcdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmFjY250LW51c20ge1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0bWFyZ2luOiAyMHB4IDBweDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogNHB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdHNwYW4gXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0LnRzdC1sdGEge1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogaW5pdGlhbDtcclxuXHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdHNwYW4ge1xyXG5cclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFtjcmVkaXQtbG9nb10ge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6IDBweDtcclxuXHRcdFx0XHRib3R0b206IDBweDtcclxuXHRcdFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdFx0cmlnaHQ6IDBweDtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IDEzMHB4O1xyXG5cdFx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdHRvcDogMHB4O1xyXG5cdFx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRyaWdodDogMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NyZWRpdC1jYXJkLXBhdHRlcm4ucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuXHRcdFx0XHRvcGFjaXR5OiAwLjA4O1xyXG5cdFx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRbY2FyZC1kZXRhaWxdIHtcclxuXHRcdFx0cGFkZGluZzogMHB4IDVweCAyNXB4O1xyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRwIHtcclxuXHRcdFx0XHRtYXJnaW46IDEwcHggMHB4IDBweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Y29sb3I6ICM5YzljOWM7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFtjYXJkLWZpZWxkXSB7XHJcblx0XHRcdGlvbi1pdGVtIHtcclxuXHRcdFx0XHQtLW1pbi1oZWlnaHQ6IDQycHg7XHJcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcclxuXHRcdFx0XHQtLXBhZGRpbmctdG9wOiA4cHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogOHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgc2NhbGUoMSk7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM5MDkwOTAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24taW5wdXQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogM3B4O1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRcdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tZGF0ZXRpbWUge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogM3B4O1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRcdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRbc3VibWl0LWJ0bl0ge1xyXG5cdFx0XHRcdGlvbi1idXR0b24ge1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogNDhweDtcclxuXHRcdFx0XHRcdC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweCAwcHggMTBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0c3Bhbi5yaWd0LWxpbmVkIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHotaW5kZXg6IDA7XHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogLTIxcHg7XHJcblx0XHRcdHdpZHRoOiAxN3B4O1xyXG5cdFx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzAwODUzZjtcclxuXHRcdFx0dG9wOiAxNHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmVycm9ycyB7XHJcblx0Y29sb3I6IHJlZDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuW3N1Ym1pdC1idG5dIHtcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG59XHJcbmJ1dHRvbi5idHMtc3N0ciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RmYTVhNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7IH1cbiAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlcjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNlY2VjZWM7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggNDBweDtcbiAgICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgICAgLS1taW4taGVpZ2h0OiAyOHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMDsgfVxuICAgICAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjogIzI5MjkyOTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgICBpb24tY29udGVudCBpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjphZnRlciB7XG4gICAgICAgIC8qIGNvbnRlbnQ6XCJcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUtYmcuanBnXCIpO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRcdFx0b3BhY2l0eTogMC4xOyAqLyB9XG4gIGlvbi1jb250ZW50IC5kYXRlLWNvbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMTtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4gICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCAuYm94LWNyZGl0cyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGZhNWE0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgbWFyZ2luLXRvcDogMHB4OyB9XG4gICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IC5ib3gtY3JkaXRzIC50b3AtY2lwcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuICAgICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IC5ib3gtY3JkaXRzIC50b3AtY2lwcyBpbWcuY2hpcC1zIHtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCAuYm94LWNyZGl0cyAudG9wLWNpcHMgaW1nLnZpc2EtcyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4OyB9XG4gICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IC5ib3gtY3JkaXRzIC5hY2NudC1udXNtIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwOyB9XG4gICAgICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgLmJveC1jcmRpdHMgLmFjY250LW51c20gc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgLmJveC1jcmRpdHMgLnRzdC1sdGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBpbml0aWFsOyB9XG4gICAgICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgLmJveC1jcmRpdHMgLnRzdC1sdGEgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgLmJveC1jcmRpdHMgLnRzdC1sdGEgcCBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCAuYm94LWNyZGl0cyBbY3JlZGl0LWxvZ29dIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBvcGFjaXR5OiAxOyB9XG4gICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IC5ib3gtY3JkaXRzOmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NyZWRpdC1jYXJkLXBhdHRlcm4ucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgICAgICAgb3BhY2l0eTogMC4wODtcbiAgICAgICAgei1pbmRleDogLTE7IH1cbiAgICBpb24tY29udGVudCAuZGF0ZS1jb250IFtjYXJkLWRldGFpbF0ge1xuICAgICAgcGFkZGluZzogMHB4IDVweCAyNXB4OyB9XG4gICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IFtjYXJkLWRldGFpbF0gaDMge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCBbY2FyZC1kZXRhaWxdIHAge1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzljOWM5YztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7IH1cbiAgICBpb24tY29udGVudCAuZGF0ZS1jb250IFtjYXJkLWZpZWxkXSBpb24taXRlbSB7XG4gICAgICAtLW1pbi1oZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCBbY2FyZC1maWVsZF0gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgc2NhbGUoMSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICM5MDkwOTAgIWltcG9ydGFudDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCBbY2FyZC1maWVsZF0gaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCBbY2FyZC1maWVsZF0gaW9uLWl0ZW0gaW9uLWRhdGV0aW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgW2NhcmQtZmllbGRdIFtzdWJtaXQtYnRuXSBpb24tYnV0dG9uIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDEwcHg7IH1cbiAgaW9uLWNvbnRlbnQgc3Bhbi5yaWd0LWxpbmVkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDsgfVxuICAgIGlvbi1jb250ZW50IHNwYW4ucmlndC1saW5lZDphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IC0yMXB4O1xuICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDg1M2Y7XG4gICAgICB0b3A6IDE0cHg7IH1cblxuLmVycm9ycyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG5bc3VibWl0LWJ0bl0ge1xuICBwYWRkaW5nLXRvcDogMTNweDsgfVxuXG5idXR0b24uYnRzLXNzdHIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZGZhNWE0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMnB4O1xuICB0b3A6IDQwcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pay-stripe/pay-stripe.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pay-stripe/pay-stripe.page.ts ***!
  \*****************************************************/
/*! exports provided: PayStripePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayStripePage", function() { return PayStripePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");








var PayStripePage = /** @class */ (function () {
    function PayStripePage(router, loadingController, activatedRoute, alertController, firebase, toastController, formBuilder, DataService, stripe) {
        this.router = router;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.firebase = firebase;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.DataService = DataService;
        this.stripe = stripe;
        this.submitted = false;
        this.cards = [];
        this.isLoading = false;
        this.validateCard = false;
        this.validateExpMonthYear = false;
        this.createCardForm();
    }
    PayStripePage.prototype.presentToast = function (message, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 5000,
                            position: 'bottom',
                            color: color,
                            showCloseButton: true
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PayStripePage.prototype.ngOnInit = function () {
    };
    PayStripePage.prototype.addcard = function () {
    };
    Object.defineProperty(PayStripePage.prototype, "form", {
        get: function () {
            return this.cardForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    PayStripePage.prototype.checkDigit = function (e) {
        var val = e.target.value;
        var v = val.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        var matches = v.match(/\d{4,16}/g);
        var match = (matches && matches[0]) || "";
        var parts = [];
        for (var i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        console.log(parts);
        if (parts.length) {
            return parts.join(" ");
        }
        else {
            return val;
        }
    };
    PayStripePage.prototype.saveCard1 = function (value) {
        /*
           this.submitted = true;
           if (this.cardForm.invalid) {
               return;
           } */
        //this.add(value);
        /*  this.presentLoading();
         this.stripe.setPublishableKey("pk_test_51JFahIKnThrLCQpf68Dm6ZM9GYQUpvoMtorFgC6TATWNjBI7dHY1cZcBo7VYVTl56HoecV2gsGWNsnRjY8fIwKUm00Exx9MY4W");
         this.stripe.validateCardNumber(value.number).then((res) => {
         console.log(res);
         if(res=='OK')
 
         {
         
         this.stripe.validateExpiryDate(value.expMonth,value.expYear).then((res) => {
         this.add(value);
         }).catch((error) => {
        this.stopLoading();
         this.presentToast(error, 'danger');
         console.error(error);
         return false;
         });
 
         }else{
              this.stopLoading();
         }
         }).catch((error) => {
       this.stopLoading();
         this.presentToast(error, 'danger');
         console.error(error);
         return false;
         
         }); */
    };
    PayStripePage.prototype.createCardForm = function () {
        this.reg_exp = /^[0-9]*$/;
        this.cardForm = this.formBuilder.group({
            cardName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            number: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.reg_exp)]],
            expMonth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.reg_exp)]],
            expYear: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.reg_exp)]],
            cvv: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.reg_exp)]]
        }, {});
    };
    PayStripePage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.planid = this.activatedRoute.snapshot.paramMap.get('id');
                        _a = this;
                        return [4 /*yield*/, this.firebase.getEmail()];
                    case 1:
                        _a.email = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.firebase.getDisplayName()];
                    case 2:
                        _b.name = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PayStripePage.prototype.saveCard = function (value) {
        var _this = this;
        this.stripe.setPublishableKey("pk_test_51JFahIKnThrLCQpf68Dm6ZM9GYQUpvoMtorFgC6TATWNjBI7dHY1cZcBo7VYVTl56HoecV2gsGWNsnRjY8fIwKUm00Exx9MY4W");
        this.presentToast('Please Wait', 'success');
        this.submitted = true;
        if (this.cardForm.invalid) {
            return;
        }
        var card = {
            number: value.number,
            expMonth: value.expMonth,
            expYear: value.expYear,
            cvc: value.cvv,
        };
        var fullcard = {
            number: value.number,
            expMonth: value.expMonth,
            expYear: value.expYear,
            cvc: value.cvv,
            name: value.cardName,
        };
        /*  this.stripe.createCardToken(card)
        .then((token) => {
            this.save(token.id,JSON.stringify(fullcard)
        }),
        .catch((error) => {
            this.stopLoading();
            this.presentToast(error, 'error');
        }) */
        this.stripe.createCardToken(card)
            .then(function (token) {
            return _this.save(token.id, JSON.stringify(fullcard));
        })
            .catch(function (error) {
            return _this.presentToast(error, 'danger');
        });
    };
    PayStripePage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                mode: "ios"
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PayStripePage.prototype.stopLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loading != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loading.dismiss()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        self = this;
                        setTimeout(function () {
                            self.stopLoading();
                        }, 1000);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PayStripePage.prototype.save = function (token, fullcard) {
        var _this = this;
        this.presentLoading();
        this.DataService.poststripedetails(fullcard, token, this.planid, this.email, this.name)
            .subscribe(function (resp) {
            _this.stopLoading();
            //this.recentposts = resp;
            console.log(resp);
            _this.isLoading = false;
            //this.presentToast('Free trail activated successfully', 'success');
            localStorage.setItem('user_paid', 'true');
            _this.router.navigate(['/home']);
            _this.presentAlert();
        });
    };
    PayStripePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Welcome!',
                            cssClass: 'alert-cas',
                            subHeader: 'Your 7 day-free trial has been started successfully. You will be charged based on your plan once the trial period expires.',
                            message: '',
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PayStripePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"] }
    ]; };
    PayStripePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay-stripe',
            template: __webpack_require__(/*! raw-loader!./pay-stripe.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pay-stripe/pay-stripe.page.html"),
            styles: [__webpack_require__(/*! ./pay-stripe.page.scss */ "./src/app/pages/pay-stripe/pay-stripe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"]])
    ], PayStripePage);
    return PayStripePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pay-stripe-pay-stripe-module-es5.js.map