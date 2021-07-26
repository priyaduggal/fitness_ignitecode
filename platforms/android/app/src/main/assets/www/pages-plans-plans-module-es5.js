(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plans-plans-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/plans/plans.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/plans/plans.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--ion-header class=\"ion-no-border heder-main\" align-title=\"center\">\n  <ion-toolbar lines=\"none\">\n\n\t<ion-buttons slot=\"start\">\n\t\t<a href=\"javascript:void(0)\" class=\"menu-tgl\" (click)='dismiss()'> <ion-icon name=\"arrow-back-outline\"></ion-icon> </a>\n    </ion-buttons>\n    <ion-title class=\"center\">Store</ion-title>\n\t\n\n  </ion-toolbar>\n</ion-header-->\n\n<ion-content bg-grey>\n\t\t\n\t<!--div class=\"top-header-influ content-str\"-->\n\t\t<!--ion-header class=\"top-scrin\">\n\t\t\t<a href=\"javascript:void(0)\" class=\"menu-tgl\" (click)='dismiss()'> <ion-icon name=\"arrow-back-outline\"></ion-icon> </a>\n\t\t\t<span class=\"ttl-new\"> Membership </span>\n\t\t\t<a href=\"javascript:void(0)\" class=\"menu-tgl\" (click)=\"logout()\"> <ion-icon name=\"log-out-outline\"></ion-icon> </a>\n\t\t</ion-header-->\n\t\t<!--div class=\"cont-top-scho\" >\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"12\" >\n\t\t\t\t\t<div class=\"padding-st\">\n\t\t\t\t\t\t<div class=\"chosn-plan\">\n\t\t\t\t\t\t\t<span *ngIf=\"paid == false\">No membership yet! </span>\n\t\t\t\t\t\t\t<span *ngIf=\"paid == true\">Have membership</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;</span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t\n\t\t\t</ion-row>\n\t\t</div-->\n\t<!--/div-->\n\t<div class=\"cont-scti-all\">\n\t<div class=\"plan-mn-sec\">\n\t\t<div class=\"package-head\">\n\t\t\t<h4 class=\"package-title\">Choose package plan</h4>\n\t\t</div>\n\t\t<ion-row>\n\t\t<ion-col size=\"12\">\n\t\t<div class=\"slids-box\" style=\"text-align: center;\">\n\t\t\t<ion-slides [options]=\"slideOpts\" spaceBetween=\"40\">\n\t\t\t\t<ion-slide style=\"width:80%;\" *ngFor=\"let plan of plans;let i = index;\">\n\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t<div class=\"pricn-box\">\n\t\t\t\t\t\t\t<div class=\"top-box-al\">\n\t\t\t\t\t\t\t\t<h5>{{plan?.name}}</h5>\n\t\t\t\t\t\t\t\t<h3> ${{plan?.price}}/ <span> {{plan?.validity}} </span> </h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"featrs\">\n\t\t\t\t\t\t\t\t<ul class=\"list-sctr\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-is\"> <ion-icon name=\"checkbox-outline\"></ion-icon> </span>\n\t\t\t\t\t\t\t\t\t\t7 day free - Trial\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-is\"> <ion-icon name=\"checkbox-outline\"></ion-icon> </span>\n\t\t\t\t\t\t\t\t\t\tExclusive Content Access\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-is\"> <ion-icon name=\"checkbox-outline\"></ion-icon> </span>\n\t\t\t\t\t\t\t\t\t\t200 Credits Every Month\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-is\"> <ion-icon name=\"checkbox-outline\"></ion-icon> </span>\n\t\t\t\t\t\t\t\t\t\tGuesting On Livestreams\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-is\"> <ion-icon name=\"checkbox-outline\"></ion-icon> </span>\n\t\t\t\t\t\t\t\t\t\tSupport Your Favorites\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"btn-choose\" (click)=\"makePayment(plan?.plan_id)\" *ngIf=\"paid == false\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-choosen\">Get It Now</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"btn-choose\" *ngIf=\"paid == true\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-choosen\"> Paid </a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h6 monthcontent>*Monthly subscription will be automatically deducted unless cancelled beforehand</h6>\n\t\t\t\t\t\t\t<!--div class=\"btn-choose\" (click)=\"inapp()\" *ngIf=\"paid == false\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-choosen\"> Get Membership </a>\n\t\t\t\t\t\t\t</div-->\n\t\t\t\t\t\t\t<!--div class=\"btn-choose\" *ngIf=\"paid == true\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-choosen\"> Paid </a>\n\t\t\t\t\t\t\t</div-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t\n\t\t\t\t\n\t\t\t</ion-slides>\n\n\t\t</div>\n\t\t</ion-col>\n     \n\t\t</ion-row>\n\t\t<!--h4 class=\"ttl-main mt-25\"> Choose Credits Bundle </h4-->\n\t\t<!--div class=\"slids-box\">\n\t\t\t<ion-slides [options]=\"slideOpts2\" spaceBetween=\"40\">\n\t\t\t\t<ion-slide *ngFor=\"let doc of credits; let i = index;\" (click)=\"buy(doc)\">\n\t\t\t\t\t<div class=\"main-box-scrdt\">\n\t\t\t\t\t\t<span class=\"ics-pr\"> <ion-icon name=\"cash-outline\"></ion-icon> </span>\n\t\t\t\t\t\t<h4> {{doc.credits}} Credits </h4>\n\t\t\t\t\t\t<h3> ${{doc.price}}/ <span> only </span> </h3>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</div-->\n\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    // backend url
    Url: 'http://dev.indiit.solutions/fitness-app/',
    // facebook page url
    Facebook: 'https://facebook.com',
    // youtube page url
    Youtube: 'https://youtube.com',
    // twitter page url
    Twitter: 'https://twitter.com',
    // twitter page url
    Instagram: 'https://instagram.com',
    // admob banner id   
    BannerId: 'ca-app-pub-3940256099942544/6300978111',
};


/***/ }),

/***/ "./src/app/pages/plans/plans-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/plans/plans-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PlansPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansPageRoutingModule", function() { return PlansPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _plans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plans.page */ "./src/app/pages/plans/plans.page.ts");




var routes = [
    {
        path: '',
        component: _plans_page__WEBPACK_IMPORTED_MODULE_3__["PlansPage"]
    }
];
var PlansPageRoutingModule = /** @class */ (function () {
    function PlansPageRoutingModule() {
    }
    PlansPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PlansPageRoutingModule);
    return PlansPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/plans/plans.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/plans/plans.module.ts ***!
  \*********************************************/
/*! exports provided: PlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansPageModule", function() { return PlansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plans_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plans-routing.module */ "./src/app/pages/plans/plans-routing.module.ts");
/* harmony import */ var _plans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plans.page */ "./src/app/pages/plans/plans.page.ts");







var PlansPageModule = /** @class */ (function () {
    function PlansPageModule() {
    }
    PlansPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _plans_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlansPageRoutingModule"]
            ],
            declarations: [_plans_page__WEBPACK_IMPORTED_MODULE_6__["PlansPage"]]
        })
    ], PlansPageModule);
    return PlansPageModule;
}());



/***/ }),

/***/ "./src/app/pages/plans/plans.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/plans/plans.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-buttons a {\n  font-size: 22px;\n  color: #fff; }\n\nion-header ion-toolbar [credit-content] {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 500; }\n\nion-content[bg-grey] .content-str {\n  position: relative;\n  z-index: 0;\n  background: #faf7f7;\n  min-height: 100%;\n  padding: 75px 20px 10px 20px; }\n\nion-content[bg-grey] .content-str:after {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    background: #dfa5a4;\n    width: 40%;\n    content: \"\";\n    z-index: -1; }\n\nion-content[bg-grey] .sticker-slider {\n  padding: 18px 0px 7px; }\n\nion-content[bg-grey] .sticker-slider .sticker-sec {\n    border-radius: 12px;\n    padding: 10px; }\n\nion-content[bg-grey] .sticker-slider .sticker-sec [stiker-head] {\n      text-align: center; }\n\nion-content[bg-grey] .sticker-slider .sticker-sec [stiker-head] h4 {\n        margin: 0px 0px 11px;\n        font-size: 16px;\n        position: relative;\n        z-index: 1;\n        color: #fff;\n        padding: 3px 0px 0px 12px; }\n\nion-content[bg-grey] .sticker-slider .sticker-sec [stiker-head] h4:before {\n          position: absolute;\n          content: \"\";\n          top: 0px;\n          left: 0px;\n          right: 0px;\n          margin: 0px auto;\n          width: 25px;\n          height: 25px;\n          background: #038b5a;\n          z-index: -1;\n          border-radius: 50%;\n          opacity: 0.2; }\n\nion-content[bg-grey] .sticker-slider .sticker-sec [stiker-img] {\n      background: #f3f3f3;\n      border-radius: 12px;\n      padding: 10px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center; }\n\nion-content[bg-grey] .sticker-slider .sticker-sec [stiker-img] img {\n        max-height: 40px;\n        min-height: 40px;\n        -o-object-fit: contain;\n           object-fit: contain; }\n\nion-content[bg-grey] .sticker-Featured {\n  padding: 12px 15px 15px; }\n\nion-content[bg-grey] .sticker-Featured .sticker-Feat-sec {\n    border-radius: 12px;\n    padding: 10px; }\n\nion-content[bg-grey] .sticker-Featured .sticker-Feat-sec [stiker-Feat-head] {\n      text-align: center; }\n\nion-content[bg-grey] .sticker-Featured .sticker-Feat-sec [stiker-Feat-head] h4 {\n        margin: 0px 0px 11px;\n        font-size: 16px;\n        position: relative;\n        z-index: 1;\n        color: #fff;\n        padding: 3px 0px 0px 12px; }\n\nion-content[bg-grey] .sticker-Featured .sticker-Feat-sec [stiker-Feat-head] h4:before {\n          position: absolute;\n          content: \"\";\n          top: 0px;\n          left: 0px;\n          right: 0px;\n          margin: 0px auto;\n          width: 25px;\n          height: 25px;\n          background: transparent;\n          z-index: -1;\n          border-radius: 50%;\n          opacity: 0.2; }\n\nion-content[bg-grey] .sticker-Featured .sticker-Feat-sec [stiker-Feat-head] p {\n        margin: 0px;\n        font-size: 13px;\n        color: #fff; }\n\nion-content[bg-grey] .sticker-Featured .sticker-Feat-sec [stiker-Feat-img] {\n      background: #f3f3f3;\n      border-radius: 12px;\n      padding: 10px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center; }\n\nion-content[bg-grey] .sticker-Featured .sticker-Feat-sec [stiker-Feat-img] img {\n        max-height: 40px;\n        min-height: 40px;\n        -o-object-fit: contain;\n           object-fit: contain; }\n\nion-content[bg-grey] .chosn-plan {\n  position: relative;\n  background: #fff;\n  padding: 18px 15px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.02);\n  z-index: 0;\n  text-align: center;\n  min-height: 122px;\n  /*span.ics-pr {\r\n\t\t\tposition: absolute;\r\n\t\t\tbottom: -10px;\r\n\t\t\tright: -17px;\r\n\t\t\tz-index: -1;\r\n\t\t\tfont-size: 80px;\r\n\t\t\topacity: 0.02;\r\n\t\t}*/ }\n\nion-content[bg-grey] .chosn-plan h5 {\n    margin: 0px;\n    font-size: 11px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    color: #c1c1c1;\n    font-weight: 600; }\n\nion-content[bg-grey] .chosn-plan h3 {\n    font-weight: 600;\n    color: #515151;\n    font-size: 25px;\n    margin: 8px 0; }\n\nion-content[bg-grey] .chosn-plan span.pric-expr {\n    font-size: 10px;\n    background: #222;\n    padding: 3px 10px;\n    display: inline-block;\n    color: #fff;\n    background: -webkit-gradient(linear, left bottom, left top, from(#04bb79), to(#038254));\n    background: linear-gradient(to top, #04bb79, #038254);\n    border-radius: 50px; }\n\nion-content[bg-grey] .chosn-plan span.pric-expr.sxre {\n    background: -webkit-gradient(linear, left bottom, left top, from(#F44336), to(#FF9800));\n    background: linear-gradient(to top, #F44336, #FF9800); }\n\nion-content[bg-grey] .top-header-influ {\n  background-size: cover;\n  min-height: 210px;\n  background-position: center bottom;\n  width: 100%;\n  position: relative; }\n\nion-content[bg-grey] .top-header-influ .top-scrin {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding: 15px 20px; }\n\nion-content[bg-grey] .top-header-influ .top-scrin a.menu-tgl {\n      display: inline-block;\n      height: 25px; }\n\nion-content[bg-grey] .top-header-influ .top-scrin a.menu-tgl img {\n        width: 25px; }\n\nion-content[bg-grey] .top-header-influ .top-scrin span.ttl-new {\n      color: #fff;\n      font-size: 17px;\n      letter-spacing: 0.5px; }\n\nion-content[bg-grey] .top-header-influ .top-scrin a.menu-tgl {\n      color: #fff;\n      font-size: 20px; }\n\nion-content[bg-grey] .cont-top-scho {\n  padding: 10px 10px 50px; }\n\nion-content[bg-grey] .cont-top-scho .padding-st {\n    padding: 0 5px; }\n\nion-content[bg-grey] .cont-scti-all {\n  padding: 8px 8px 15px 8px;\n  position: relative;\n  z-index: 0;\n  background: #faf7f7;\n  min-height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\nion-content[bg-grey] .cont-scti-all:after {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    background: #dfa5a4;\n    width: 40%;\n    content: \"\";\n    z-index: -1; }\n\nion-content[bg-grey] .cont-scti-all .plan-mn-sec {\n    display: block;\n    width: 100%; }\n\nion-content[bg-grey] .cont-scti-all .package-head {\n    padding: 25px 0px 50px;\n    text-transform: capitalize; }\n\nion-content[bg-grey] .cont-scti-all .package-head h4.package-title {\n      margin: 0px 0px 0px;\n      text-align: center;\n      font-size: 21px; }\n\nion-content[bg-grey] .pricn-box {\n  background: #fff;\n  margin-top: 5px;\n  color: #000;\n  position: relative;\n  display: block;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 5px 20px rgba(226, 22, 22, 0.08); }\n\nion-content[bg-grey] .pricn-box .top-box-al {\n    background-size: cover;\n    background-position: center bottom;\n    width: 100%;\n    position: relative;\n    padding: 7px 10px 5px; }\n\nion-content[bg-grey] .pricn-box .top-box-al h5 {\n      font-size: 14px;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      color: #000; }\n\nion-content[bg-grey] .pricn-box .top-box-al h3 {\n      font-size: 20px;\n      font-weight: 600;\n      padding-bottom: 10px;\n      margin-top: 5px;\n      margin-bottom: 0px; }\n\nion-content[bg-grey] .pricn-box .top-box-al h3 span {\n        font-size: 12px;\n        font-weight: 300;\n        letter-spacing: 1px; }\n\nion-content[bg-grey] .pricn-box .featrs {\n    padding: 10px 15px 8px;\n    display: block;\n    width: 100%; }\n\nion-content[bg-grey] .pricn-box .featrs ul.list-sctr {\n      padding: 0px;\n      margin: 0px;\n      display: block;\n      list-style: none;\n      text-align: left; }\n\nion-content[bg-grey] .pricn-box .featrs ul.list-sctr li {\n        font-size: 12px;\n        margin-bottom: 7px;\n        color: #7b7b7b; }\n\nion-content[bg-grey] .pricn-box .featrs ul.list-sctr li span.icon-is {\n          color: #dfa5a4;\n          vertical-align: middle;\n          margin-right: 5px;\n          font-size: 17px; }\n\nion-content[bg-grey] .pricn-box .btn-choose {\n    padding-bottom: 20px; }\n\nion-content[bg-grey] .pricn-box .btn-choose a.btn-choosen {\n      display: inline-block;\n      padding: 10px 23px;\n      background: #dfa5a4;\n      color: #fff;\n      font-size: 13px;\n      font-weight: 600;\n      letter-spacing: 1px;\n      border-radius: 50px;\n      text-decoration: none; }\n\nion-content[bg-grey] .pricn-box [monthcontent] {\n    margin: 0px;\n    padding: 0px 4px 22px;\n    font-size: 11px;\n    font-weight: 400;\n    line-height: 17px; }\n\nion-content[bg-grey] .slide {\n  width: 100%;\n  display: block; }\n\nion-content[bg-grey] .mt-25 {\n  margin-top: 25px !important; }\n\nion-content[bg-grey] .getmore-head {\n  font-size: 15px;\n  margin: 0px 0px 15px; }\n\nion-content[bg-grey] .getmore-head:after {\n    content: \"\";\n    position: absolute;\n    width: 69px;\n    height: 6px;\n    background: rgba(240, 195, 241, 0.226);\n    left: 1px;\n    bottom: 0px;\n    z-index: -1; }\n\nion-content[bg-grey] .main-box-scrdt {\n  position: relative;\n  background: #f7f7f7;\n  padding: 8px 6px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n  z-index: 0;\n  margin: 5px 0 10px;\n  width: 100%;\n  border: 1px solid rgba(60, 60, 60, 0.07);\n  overflow: hidden;\n  text-align: left;\n  /*padding-left: 100px;*/ }\n\nion-content[bg-grey] .main-box-scrdt span.ics-pr {\n    position: absolute;\n    width: 80px;\n    background: -webkit-gradient(linear, left bottom, left top, from(#bb9b9b), to(#dfa5a4));\n    background: linear-gradient(to top, #bb9b9b, #dfa5a4);\n    left: 0;\n    height: 100%;\n    top: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    color: #fff;\n    font-size: 36px; }\n\nion-content[bg-grey] .main-box-scrdt h4 {\n    margin: 0px;\n    font-size: 11px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: #5d5d5d;\n    font-weight: 600; }\n\nion-content[bg-grey] .main-box-scrdt h3 {\n    margin-bottom: 0px;\n    font-size: 15px;\n    font-weight: 600;\n    color: #124430;\n    margin-top: 2px; }\n\nion-content[bg-grey] .main-box-scrdt h3 span {\n      font-size: 14px;\n      letter-spacing: 1px;\n      font-weight: 500; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxhbnMvRTpcXGZpdG5lc3MtYXBwLWNvZGUtZGVsaXZlcnkvc3JjXFxhcHBcXHBhZ2VzXFxwbGFuc1xccGxhbnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGFucy9wbGFucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFRTyxlQUFjO0VBQ2pCLFdBQVUsRUFBQTs7QUFUZDtFQWNNLGtCQUFpQjtFQUNwQixlQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBS25CO0VBRUUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUE0QixFQUFBOztBQU45QjtJQVFHLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBZmQ7RUFvQlEscUJBQXFCLEVBQUE7O0FBcEI3QjtJQXdCRyxtQkFBbUI7SUFDbkIsYUFBYSxFQUFBOztBQXpCaEI7TUE0Qk8sa0JBQWtCLEVBQUE7O0FBNUJ6QjtRQStCSyxvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVTtRQUNWLHlCQUF5QixFQUFBOztBQXBDOUI7VUFzQ00sa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxRQUFRO1VBQ1IsU0FBUztVQUNULFVBQVM7VUFDVCxnQkFBZTtVQUNmLFdBQVc7VUFDWCxZQUFZO1VBQ1osbUJBQW1CO1VBQ25CLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsWUFBWSxFQUFBOztBQWpEbEI7TUF1REksbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixhQUFhO01BQ2Isb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix3QkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7O0FBNUQzQjtRQStESyxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hC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OztBQWxWZjtFQXNWRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUFBLEVBQXdCOztBQWpXMUI7SUFtV0csa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1RkFBcUQ7SUFBckQscURBQXFEO0lBQ3JELE9BQU87SUFDUCxZQUFZO0lBQ1osTUFBTTtJQUNOLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZSxFQUFBOztBQTdXbEI7SUFnWEcsV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFyWG5CO0lBd1hHLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlLEVBQUE7O0FBNVhsQjtNQThYSSxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxhbnMvcGxhbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlclxyXG57XHJcbiAgICBpb24tdG9vbGJhclxyXG5cdHtcclxuXHQgICAgaW9uLWJ1dHRvbnNcclxuXHRcdHtcclxuXHRcdCAgICBhXHJcblx0XHRcdHtcclxuXHRcdFx0ICAgIGZvbnQtc2l6ZToyMnB4O1xyXG5cdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFtjcmVkaXQtY29udGVudF1cclxuXHRcdHtcclxuXHRcdCAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0Zm9udC1zaXplOjEycHg7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5pb24tY29udGVudFtiZy1ncmV5XSB7XHJcblx0LmNvbnRlbnQtc3RyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHotaW5kZXg6IDA7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmFmN2Y3O1xyXG5cdFx0bWluLWhlaWdodDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IDc1cHggMjBweCAxMHB4IDIwcHg7XHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0YmFja2dyb3VuZDogI2RmYTVhNDtcclxuXHRcdFx0d2lkdGg6IDQwJTtcclxuXHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0ei1pbmRleDogLTE7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5zdGlja2VyLXNsaWRlclxyXG5cdHtcclxuICAgICAgICBwYWRkaW5nOiAxOHB4IDBweCA3cHg7XHRcclxuICAgICAgICAuc3RpY2tlci1zZWNcclxuXHRcdHtcclxuXHRcdFx0Ly9iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2luZmx1LWJnLnBuZycpOyBcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRcdFx0cGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgW3N0aWtlci1oZWFkXVxyXG4gICAgICAgICAgICB7XHJcblx0XHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdCAgICBoNFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMHB4IDBweCAxMXB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0ei1pbmRleDogMTtcclxuXHRcdFx0XHRcdGNvbG9yOiNmZmY7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAzcHggMHB4IDBweCAxMnB4O1x0XHJcblx0XHRcdFx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRcdFx0dG9wOiAwcHg7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6MHB4O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46MHB4IGF1dG87XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAyNXB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI1cHg7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMzhiNWE7XHJcblx0XHRcdFx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuMjtcclxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHQgICAgW3N0aWtlci1pbWddXHJcblx0XHRcdHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblx0XHRcdFx0cGFkZGluZzogMTBweDtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAgICAgIHtcclxuXHRcdFx0XHRcdG1heC1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY29udGFpbjtcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuc3RpY2tlci1GZWF0dXJlZFxyXG5cdHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHggMTVweDtcdFxyXG4gICAgICAgIC5zdGlja2VyLUZlYXQtc2VjXHJcblx0XHR7XHJcblx0XHRcdC8vYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pbmZsdS1iZy5wbmcnKTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRcdFx0cGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgW3N0aWtlci1GZWF0LWhlYWRdXHJcbiAgICAgICAgICAgIHtcclxuXHRcdFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0ICAgIGg0XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHggMHB4IDExcHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDNweCAwcHggMHB4IDEycHg7XHRcclxuXHRcdFx0XHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDBweDtcclxuXHRcdFx0XHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHRcdFx0XHRyaWdodDowcHg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjowcHggYXV0bztcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDI1cHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMjVweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuMjtcclxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1x0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHQgICAgW3N0aWtlci1GZWF0LWltZ11cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICAgICAge1xyXG5cdFx0XHRcdFx0bWF4LWhlaWdodDogNDBweDtcclxuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVx0XHJcblx0LmNob3NuLXBsYW4ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdHBhZGRpbmc6IDE4cHggMTVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuXHRcdHotaW5kZXg6IDA7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHQgICAgbWluLWhlaWdodDogMTIycHg7XHJcblx0XHQvKnNwYW4uaWNzLXByIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IC0xMHB4O1xyXG5cdFx0XHRyaWdodDogLTE3cHg7XHJcblx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHRmb250LXNpemU6IDgwcHg7XHJcblx0XHRcdG9wYWNpdHk6IDAuMDI7XHJcblx0XHR9Ki9cclxuXHRcdGg1IHtcclxuXHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHRcdFx0Y29sb3I6ICNjMWMxYzE7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHR9XHJcblx0XHRoMyB7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdGNvbG9yOiAjNTE1MTUxO1xyXG5cdFx0XHRmb250LXNpemU6IDI1cHg7XHJcblx0XHRcdG1hcmdpbjogOHB4IDA7XHJcblx0XHR9XHJcblx0XHRzcGFuLnByaWMtZXhwciB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzIyMjtcclxuXHRcdFx0cGFkZGluZzogM3B4IDEwcHg7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNGJiNzkgLCAjMDM4MjU0KTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRcdH1cclxuXHRcdHNwYW4ucHJpYy1leHByLnN4cmUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjRjQ0MzM2LCAjRkY5ODAwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0LnRvcC1oZWFkZXItaW5mbHUge1xyXG5cdFx0Ly9iYWNrZ3JvdW5kOnVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2luZmx1LWJnLnBuZ1wiKTtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRtaW4taGVpZ2h0OiAyMTBweDtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC50b3Atc2NyaW4ge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHRcdFx0YS5tZW51LXRnbCB7XHJcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdGhlaWdodDogMjVweDtcclxuXHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDI1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHNwYW4udHRsLW5ldyB7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRhLm1lbnUtdGdsIHtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbnQtdG9wLXNjaG8ge1xyXG5cdFx0cGFkZGluZzogMTBweCAxMHB4IDUwcHg7XHJcblx0XHQucGFkZGluZy1zdCB7XHJcblx0XHRcdHBhZGRpbmc6MCA1cHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jb250LXNjdGktYWxsIHtcclxuXHRcdHBhZGRpbmc6IDhweCA4cHggMTVweCA4cHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdFx0YmFja2dyb3VuZDogI2ZhZjdmNztcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZGZhNWE0O1xyXG5cdFx0XHR3aWR0aDogNDAlO1xyXG5cdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHR6LWluZGV4OiAtMTtcclxuXHRcdH1cclxuXHRcdC5wbGFuLW1uLXNlY1xyXG5cdFx0e1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHRcdFxyXG5cdFx0fVxyXG5cdFx0LnBhY2thZ2UtaGVhZCBcclxuXHRcdHtcclxuXHRcdFx0cGFkZGluZzogMjVweCAwcHggNTBweDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRcdGg0LnBhY2thZ2UtdGl0bGUgXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW46IDBweCAwcHggMHB4O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRmb250LXNpemU6IDIxcHg7XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHQucHJpY24tYm94IHtcclxuXHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGJveC1zaGFkb3c6MHB4IDVweCAyMHB4IHJnYmEoMjI2LCAyMiwgMjIsIDAuMDgpO1xyXG5cdFx0LnRvcC1ib3gtYWwge1xyXG5cdFx0XHQvL2JhY2tncm91bmQ6dXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaW5mbHUtYmcucG5nXCIpO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0cGFkZGluZzogN3B4IDEwcHggNXB4O1xyXG5cdFx0XHRoNSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmZlYXRycyB7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHggMTVweCA4cHg7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0dWwubGlzdC1zY3RyIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdGxpIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjN2I3YjdiO1xyXG5cdFx0XHRcdFx0c3Bhbi5pY29uLWlzIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6I2RmYTVhNDtcclxuXHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5idG4tY2hvb3NlIHtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XHJcblx0XHRcdGEuYnRuLWNob29zZW4ge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRwYWRkaW5nOiAxMHB4IDIzcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2RmYTVhNDtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcdFttb250aGNvbnRlbnRdIFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0cGFkZGluZzogMHB4IDRweCAyMnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG5cdFx0XHR9XHRcdFxyXG5cdH1cclxuXHQuc2xpZGUge3dpZHRoOjEwMCU7IGRpc3BsYXk6YmxvY2s7IH1cclxuXHQubXQtMjUgeyBtYXJnaW4tdG9wOjI1cHggIWltcG9ydGFudDt9XHJcblx0LmdldG1vcmUtaGVhZFxyXG5cdHtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xyXG5cdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR3aWR0aDogNjlweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDZweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMTk1LCAyNDEsIDAuMjI2KTtcclxuXHRcdFx0XHRsZWZ0OiAxcHg7XHJcblx0XHRcdFx0Ym90dG9tOiAwcHg7XHJcblx0XHRcdFx0ei1pbmRleDogLTE7XHJcblx0XHRcdH1cdFx0XHJcblx0fVxyXG5cdC5tYWluLWJveC1zY3JkdCAge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0YmFja2dyb3VuZDogI2Y3ZjdmNztcclxuXHRcdHBhZGRpbmc6IDhweCA2cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdFx0bWFyZ2luOiA1cHggMCAxMHB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIDAuMDcpO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHQvKnBhZGRpbmctbGVmdDogMTAwcHg7Ki9cclxuXHRcdHNwYW4uaWNzLXByIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR3aWR0aDogODBweDtcclxuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2JiOWI5YiwgI2RmYTVhNCk7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzZweDtcclxuXHRcdH1cclxuXHRcdGg0ICB7XHJcblx0XHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0XHRcdGNvbG9yOiAjNWQ1ZDVkO1xyXG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0fVxyXG5cdFx0aDMge1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0Y29sb3I6ICMxMjQ0MzA7XHJcblx0XHRcdG1hcmdpbi10b3A6IDJweDtcclxuXHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgYSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmY7IH1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBbY3JlZGl0LWNvbnRlbnRdIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuaW9uLWNvbnRlbnRbYmctZ3JleV0gLmNvbnRlbnQtc3RyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmFmN2Y3O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA3NXB4IDIwcHggMTBweCAyMHB4OyB9XG4gIGlvbi1jb250ZW50W2JnLWdyZXldIC5jb250ZW50LXN0cjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZGZhNWE0O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB6LWluZGV4OiAtMTsgfVxuXG5pb24tY29udGVudFtiZy1ncmV5XSAuc3RpY2tlci1zbGlkZXIge1xuICBwYWRkaW5nOiAxOHB4IDBweCA3cHg7IH1cbiAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnN0aWNrZXItc2xpZGVyIC5zdGlja2VyLXNlYyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG4gICAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnN0aWNrZXItc2xpZGVyIC5zdGlja2VyLXNlYyBbc3Rpa2VyLWhlYWRdIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnN0aWNrZXItc2xpZGVyIC5zdGlja2VyLXNlYyBbc3Rpa2VyLWhlYWRdIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDExcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogM3B4IDBweCAwcHggMTJweDsgfVxuICAgICAgICBpb24tY29udGVudFtiZy1ncmV5XSAuc3RpY2tlci1zbGlkZXIgLnN0aWNrZXItc2VjIFtzdGlrZXItaGVhZF0gaDQ6YmVmb3JlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM4YjVhO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjI7IH1cbiAgICBpb24tY29udGVudFtiZy1ncmV5XSAuc3RpY2tlci1zbGlkZXIgLnN0aWNrZXItc2VjIFtzdGlrZXItaW1nXSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgICBpb24tY29udGVudFtiZy1ncmV5XSAuc3RpY2tlci1zbGlkZXIgLnN0aWNrZXItc2VjIFtzdGlrZXItaW1nXSBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluOyB9XG5cbmlvbi1jb250ZW50W2JnLWdyZXldIC5zdGlja2VyLUZlYXR1cmVkIHtcbiAgcGFkZGluZzogMTJweCAxNXB4IDE1cHg7IH1cbiAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnN0aWNrZXItRmVhdHVyZWQgLnN0aWNrZXItRmVhdC1zZWMge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMTBweDsgfVxuICAgIGlvbi1jb250ZW50W2JnLWdyZXldIC5zdGlja2VyLUZlYXR1cmVkIC5zdGlja2VyLUZlYXQtc2VjIFtzdGlrZXItRmVhdC1oZWFkXSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIGlvbi1jb250ZW50W2JnLWdyZXldIC5zdGlja2VyLUZlYXR1cmVkIC5zdGlja2VyLUZlYXQtc2VjIFtzdGlrZXItRmVhdC1oZWFkXSBoNCB7XG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAxMXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwcHggMHB4IDEycHg7IH1cbiAgICAgICAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnN0aWNrZXItRmVhdHVyZWQgLnN0aWNrZXItRmVhdC1zZWMgW3N0aWtlci1GZWF0LWhlYWRdIGg0OmJlZm9yZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIG9wYWNpdHk6IDAuMjsgfVxuICAgICAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnN0aWNrZXItRmVhdHVyZWQgLnN0aWNrZXItRmVhdC1zZWMgW3N0aWtlci1GZWF0LWhlYWRdIHAge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIGlvbi1jb250ZW50W2JnLWdyZXldIC5zdGlja2VyLUZlYXR1cmVkIC5zdGlja2VyLUZlYXQtc2VjIFtzdGlrZXItRmVhdC1pbWddIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgIGlvbi1jb250ZW50W2JnLWdyZXldIC5zdGlja2VyLUZlYXR1cmVkIC5zdGlja2VyLUZlYXQtc2VjIFtzdGlrZXItRmVhdC1pbWddIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47IH1cblxuaW9uLWNvbnRlbnRbYmctZ3JleV0gLmNob3NuLXBsYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDE4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIHotaW5kZXg6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTIycHg7XG4gIC8qc3Bhbi5pY3MtcHIge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTogLTEwcHg7XHJcblx0XHRcdHJpZ2h0OiAtMTdweDtcclxuXHRcdFx0ei1pbmRleDogLTE7XHJcblx0XHRcdGZvbnQtc2l6ZTogODBweDtcclxuXHRcdFx0b3BhY2l0eTogMC4wMjtcclxuXHRcdH0qLyB9XG4gIGlvbi1jb250ZW50W2JnLWdyZXldIC5jaG9zbi1wbGFuIGg1IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGNvbG9yOiAjYzFjMWMxO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLmNob3NuLXBsYW4gaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM1MTUxNTE7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbjogOHB4IDA7IH1cbiAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLmNob3NuLXBsYW4gc3Bhbi5wcmljLWV4cHIge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDRiYjc5LCAjMDM4MjU0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyB9XG4gIGlvbi1jb250ZW50W2JnLWdyZXldIC5jaG9zbi1wbGFuIHNwYW4ucHJpYy1leHByLnN4cmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNGNDQzMzYsICNGRjk4MDApOyB9XG5cbmlvbi1jb250ZW50W2JnLWdyZXldIC50b3AtaGVhZGVyLWluZmx1IHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMjEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnRvcC1oZWFkZXItaW5mbHUgLnRvcC1zY3JpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7IH1cbiAgICBpb24tY29udGVudFtiZy1ncmV5XSAudG9wLWhlYWRlci1pbmZsdSAudG9wLXNjcmluIGEubWVudS10Z2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgaGVpZ2h0OiAyNXB4OyB9XG4gICAgICBpb24tY29udGVudFtiZy1ncmV5XSAudG9wLWhlYWRlci1pbmZsdSAudG9wLXNjcmluIGEubWVudS10Z2wgaW1nIHtcbiAgICAgICAgd2lkdGg6IDI1cHg7IH1cbiAgICBpb24tY29udGVudFtiZy1ncmV5XSAudG9wLWhlYWRlci1pbmZsdSAudG9wLXNjcmluIHNwYW4udHRsLW5ldyB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDsgfVxuICAgIGlvbi1jb250ZW50W2JnLWdyZXldIC50b3AtaGVhZGVyLWluZmx1IC50b3Atc2NyaW4gYS5tZW51LXRnbCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxuXG5pb24tY29udGVudFtiZy1ncmV5XSAuY29udC10b3Atc2NobyB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA1MHB4OyB9XG4gIGlvbi1jb250ZW50W2JnLWdyZXldIC5jb250LXRvcC1zY2hvIC5wYWRkaW5nLXN0IHtcbiAgICBwYWRkaW5nOiAwIDVweDsgfVxuXG5pb24tY29udGVudFtiZy1ncmV5XSAuY29udC1zY3RpLWFsbCB7XG4gIHBhZGRpbmc6IDhweCA4cHggMTVweCA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZDogI2ZhZjdmNztcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICBpb24tY29udGVudFtiZy1ncmV5XSAuY29udC1zY3RpLWFsbDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZGZhNWE0O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB6LWluZGV4OiAtMTsgfVxuICBpb24tY29udGVudFtiZy1ncmV5XSAuY29udC1zY3RpLWFsbCAucGxhbi1tbi1zZWMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIGlvbi1jb250ZW50W2JnLWdyZXldIC5jb250LXNjdGktYWxsIC5wYWNrYWdlLWhlYWQge1xuICAgIHBhZGRpbmc6IDI1cHggMHB4IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cbiAgICBpb24tY29udGVudFtiZy1ncmV5XSAuY29udC1zY3RpLWFsbCAucGFja2FnZS1oZWFkIGg0LnBhY2thZ2UtdGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjFweDsgfVxuXG5pb24tY29udGVudFtiZy1ncmV5XSAucHJpY24tYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IHJnYmEoMjI2LCAyMiwgMjIsIDAuMDgpOyB9XG4gIGlvbi1jb250ZW50W2JnLWdyZXldIC5wcmljbi1ib3ggLnRvcC1ib3gtYWwge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogN3B4IDEwcHggNXB4OyB9XG4gICAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnByaWNuLWJveCAudG9wLWJveC1hbCBoNSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgIGNvbG9yOiAjMDAwOyB9XG4gICAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnByaWNuLWJveCAudG9wLWJveC1hbCBoMyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cbiAgICAgIGlvbi1jb250ZW50W2JnLWdyZXldIC5wcmljbi1ib3ggLnRvcC1ib3gtYWwgaDMgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDsgfVxuICBpb24tY29udGVudFtiZy1ncmV5XSAucHJpY24tYm94IC5mZWF0cnMge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICBpb24tY29udGVudFtiZy1ncmV5XSAucHJpY24tYm94IC5mZWF0cnMgdWwubGlzdC1zY3RyIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxuICAgICAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnByaWNuLWJveCAuZmVhdHJzIHVsLmxpc3Qtc2N0ciBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgICBjb2xvcjogIzdiN2I3YjsgfVxuICAgICAgICBpb24tY29udGVudFtiZy1ncmV5XSAucHJpY24tYm94IC5mZWF0cnMgdWwubGlzdC1zY3RyIGxpIHNwYW4uaWNvbi1pcyB7XG4gICAgICAgICAgY29sb3I6ICNkZmE1YTQ7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7IH1cbiAgaW9uLWNvbnRlbnRbYmctZ3JleV0gLnByaWNuLWJveCAuYnRuLWNob29zZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cbiAgICBpb24tY29udGVudFtiZy1ncmV5XSAucHJpY24tYm94IC5idG4tY2hvb3NlIGEuYnRuLWNob29zZW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMTBweCAyM3B4O1xuICAgICAgYmFja2dyb3VuZDogI2RmYTVhNDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIGlvbi1jb250ZW50W2JnLWdyZXldIC5wcmljbi1ib3ggW21vbnRoY29udGVudF0ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweCA0cHggMjJweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTdweDsgfVxuXG5pb24tY29udGVudFtiZy1ncmV5XSAuc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuaW9uLWNvbnRlbnRbYmctZ3JleV0gLm10LTI1IHtcbiAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50OyB9XG5cbmlvbi1jb250ZW50W2JnLWdyZXldIC5nZXRtb3JlLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMHB4IDBweCAxNXB4OyB9XG4gIGlvbi1jb250ZW50W2JnLWdyZXldIC5nZXRtb3JlLWhlYWQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2OXB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAxOTUsIDI0MSwgMC4yMjYpO1xuICAgIGxlZnQ6IDFweDtcbiAgICBib3R0b206IDBweDtcbiAgICB6LWluZGV4OiAtMTsgfVxuXG5pb24tY29udGVudFtiZy1ncmV5XSAubWFpbi1ib3gtc2NyZHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIHBhZGRpbmc6IDhweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB6LWluZGV4OiAwO1xuICBtYXJnaW46IDVweCAwIDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIDAuMDcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvKnBhZGRpbmctbGVmdDogMTAwcHg7Ki8gfVxuICBpb24tY29udGVudFtiZy1ncmV5XSAubWFpbi1ib3gtc2NyZHQgc3Bhbi5pY3MtcHIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjYmI5YjliLCAjZGZhNWE0KTtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzZweDsgfVxuICBpb24tY29udGVudFtiZy1ncmV5XSAubWFpbi1ib3gtc2NyZHQgaDQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY29sb3I6ICM1ZDVkNWQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICBpb24tY29udGVudFtiZy1ncmV5XSAubWFpbi1ib3gtc2NyZHQgaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzEyNDQzMDtcbiAgICBtYXJnaW4tdG9wOiAycHg7IH1cbiAgICBpb24tY29udGVudFtiZy1ncmV5XSAubWFpbi1ib3gtc2NyZHQgaDMgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/plans/plans.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/plans/plans.page.ts ***!
  \*******************************************/
/*! exports provided: PlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansPage", function() { return PlansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _paymentoptions_paymentoptions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../paymentoptions/paymentoptions.page */ "./src/app/pages/paymentoptions/paymentoptions.page.ts");








var PlansPage = /** @class */ (function () {
    function PlansPage(stripe, loadingController, router, modalCtrl, toastController, location, DataService) {
        this.stripe = stripe;
        this.loadingController = loadingController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.location = location;
        this.DataService = DataService;
        this.paid = false;
        this.plans = [];
        this.isLoading = false;
        // ionViewDidEnter(){
        //   this.totalCredits = JSON.parse(localStorage.getItem('profile')).credits;
        //   if(JSON.parse(localStorage.getItem('profile')).usertype == 'paid'){
        //     this.paid = true;
        //   }else{
        //     this.paid = false;
        //   }
        //   this.getCredits();
        // }
        this.slideOpts = {
            slidesPerView: 1.2,
            spaceBetween: 20,
        };
        this.slideOpts2 = {
            slidesPerView: 1.2,
            spaceBetween: 20,
        };
        this.slideOpts3 = {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: true,
            initialSlide: 1,
            speed: 400,
        };
        this.stripe.setPublishableKey('pk_test_DE5DNXQD2inVoDZFXZ4cUz2n');
        // this.globalFooService.getObservable().subscribe((data) => {
        //       console.log('Data received', data);
        //       if(JSON.parse(localStorage.getItem('profile')).usertype == 'paid'){
        //         this.paid = true;
        //       }else{
        //         this.paid = false;
        //       }
        //   });
    }
    PlansPage.prototype.dismiss = function () {
        this.location.back();
    };
    PlansPage.prototype.logout = function () {
        localStorage.clear();
        console.log('clicked');
        this.router.navigate(['/login']);
    };
    PlansPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.DataService.getDataPackages()
            .subscribe(function (resp) {
            console.log(resp);
            _this.plans = resp;
            _this.isLoading = false;
        });
    };
    PlansPage.prototype.makePayment = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _paymentoptions_paymentoptions_page__WEBPACK_IMPORTED_MODULE_7__["PaymentoptionsPage"],
                            componentProps: {
                                planid: id,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlansPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create()];
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
    PlansPage.prototype.stopLoading = function () {
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
    ;
    PlansPage.prototype.presentToast = function (message, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
                            position: 'bottom',
                            color: color,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlansPage.ctorParameters = function () { return [
        { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__["Stripe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
    ]; };
    PlansPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plans',
            template: __webpack_require__(/*! raw-loader!./plans.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/plans/plans.page.html"),
            styles: [__webpack_require__(/*! ./plans.page.scss */ "./src/app/pages/plans/plans.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__["Stripe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], PlansPage);
    return PlansPage;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");




var Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.page = 0;
    }
    DataService.prototype.ejectQuery = function (query) {
        query = Url + query;
        return this.http.get(query);
    };
    DataService.prototype.getDataPackages = function () {
        return this.ejectQuery('/json/data_sub_plans.php?status=1');
    };
    DataService.prototype.getDataStrings = function () {
        return this.ejectQuery('/json/data_strings.php');
    };
    DataService.prototype.getDataMotivation = function () {
        return this.ejectQuery('/json/data_quotes.php');
    };
    DataService.prototype.getDataFeaturedDiets = function () {
        return this.ejectQuery('/json/data_diets.php?featured=1');
    };
    DataService.prototype.getCount = function () {
        return this.ejectQuery('/json/data_counts.php');
    };
    DataService.prototype.getDataCategories = function () {
        return this.ejectQuery('/json/data_categories.php');
    };
    DataService.prototype.getDataGoals = function () {
        return this.ejectQuery('/json/data_goals.php');
    };
    DataService.prototype.getDataLevels = function () {
        return this.ejectQuery('/json/data_levels.php');
    };
    DataService.prototype.getDataTags = function () {
        return this.ejectQuery('/json/data_tags.php');
    };
    DataService.prototype.getDataEquipments = function () {
        return this.ejectQuery('/json/data_equipments.php');
    };
    DataService.prototype.getDataBodyparts = function () {
        return this.ejectQuery('/json/data_bodyparts.php');
    };
    DataService.prototype.getDataFeaturedPosts = function () {
        return this.ejectQuery('/json/data_posts.php?featured=1');
    };
    DataService.prototype.getDataRecentPosts = function (limit) {
        return this.ejectQuery("/json/data_posts.php?limit=" + limit);
    };
    DataService.prototype.getDataWorkoutsByGoal = function (id) {
        return this.ejectQuery("/json/data_workouts.php?goal=" + id);
    };
    DataService.prototype.getDataWorkoutsByLevel = function (id) {
        return this.ejectQuery("/json/data_workouts.php?level=" + id);
    };
    DataService.prototype.getDataExercisesByBodypart = function (id) {
        return this.ejectQuery("/json/data_bodypart.php?id=" + id);
    };
    DataService.prototype.getDataExercisesByEquipment = function (id) {
        return this.ejectQuery("/json/data_equipment.php?id=" + id);
    };
    DataService.prototype.getDataDietsByCategory = function (id) {
        return this.ejectQuery("/json/data_diets.php?category=" + id);
    };
    DataService.prototype.getDataPostsByTag = function (id) {
        return this.ejectQuery("/json/data_posts.php?tag=" + id);
    };
    DataService.prototype.getDataExerciseById = function (id) {
        return this.ejectQuery("/json/data_exercises.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutById = function (id) {
        return this.ejectQuery("/json/data_workouts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataDietById = function (id) {
        return this.ejectQuery("/json/data_diets.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataPostById = function (id) {
        return this.ejectQuery("/json/data_posts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutExercisesByDay = function (id, day) {
        return this.ejectQuery("/json/data_days.php?id=" + id + "&day=" + day);
    };
    DataService.prototype.poststripedetails = function (token, id, email) {
        return this.ejectQuery("/json/user_add_plan.php?token=" + token + "&id=" + id + "&email=" + email);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-plans-plans-module-es5.js.map