(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mycards-mycards-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mycards/mycards.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mycards/mycards.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        Manage Cards\n      </ion-title>\n      <ion-buttons slot=\"start\">\n        <app-backbutton color=\"dark\"></app-backbutton>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fixed>\n\n<ion-grid fixed style=\"height: 100%;\">\n<div class=\"date-cont\">\t\n<p *ngIf=\"cards?.length==0\">No saved cards</p>\n<ion-item-sliding class=\"slide-posu\" *ngFor=\"let c of cards\">\n<ion-item lines=\"none\" >\n<div class=\"box-crdits\">\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"top-cips\">\n\t\t\t\t\t\t\t<img src=\"assets/images/chip.png\" class=\"chip-s\">\n\t\t\t\t\t\t\t<img src=\"assets/images/visa.png\" class=\"visa-s\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"accnt-nusm\"> \n\t\t\t\t\t\t\t\t<span> **** </span>\n\t\t\t\t\t\t\t\t<span> **** </span>\n\t\t\t\t\t\t\t\t<span> **** </span>\n\t\t\t\t\t\t\t\t<span>  {{c.number.substr(c.number.length - 4)}}  </span>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"tst-lta\">\n\t\t\t\t\t\t\t<p> Name \n\t\t\t\t\t\t\t\t<span > {{c.name}} </span> \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p> Exp Date \n\t\t\t\t\t\t\t\t<span >  {{c.expMonth}}/{{c.expYear}} </span> \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t</div>\n</ion-item>\n\t\t\t<ion-item-options>\n\t\t\t\t<ion-item-option color=\"danger\" (click)=\"delete(c?.card_id)\">\n\t\t\t\t\t<ion-icon slot=\"bottom\" name=\"trash\"></ion-icon>\n\t\t\t\t</ion-item-option>\n\t\t\t\t<ion-item-option routerLink=\"/editcard/{{c?.card_id}}\" color=\"secondary\">\n\t\t\t\t\t<ion-icon slot=\"bottom\" name=\"create\" routerLink=\"/editcard/{{c?.card_id}}\"></ion-icon>\n\t\t\t\t</ion-item-option>\n\t\t\t</ion-item-options>\n\t\t</ion-item-sliding>\n\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/addcard\"><ion-icon name=\"add\"></ion-icon> Add New Card </a>\n  </div>\n  \n  </ion-grid>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/mycards/mycards-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mycards/mycards-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MycardsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycardsPageRoutingModule", function() { return MycardsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mycards_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mycards.page */ "./src/app/pages/mycards/mycards.page.ts");




var routes = [
    {
        path: '',
        component: _mycards_page__WEBPACK_IMPORTED_MODULE_3__["MycardsPage"]
    }
];
var MycardsPageRoutingModule = /** @class */ (function () {
    function MycardsPageRoutingModule() {
    }
    MycardsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MycardsPageRoutingModule);
    return MycardsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/mycards/mycards.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/mycards/mycards.module.ts ***!
  \*************************************************/
/*! exports provided: MycardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycardsPageModule", function() { return MycardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mycards_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mycards-routing.module */ "./src/app/pages/mycards/mycards-routing.module.ts");
/* harmony import */ var _mycards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mycards.page */ "./src/app/pages/mycards/mycards.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var MycardsPageModule = /** @class */ (function () {
    function MycardsPageModule() {
    }
    MycardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _mycards_routing_module__WEBPACK_IMPORTED_MODULE_5__["MycardsPageRoutingModule"]
            ],
            declarations: [_mycards_page__WEBPACK_IMPORTED_MODULE_6__["MycardsPage"]]
        })
    ], MycardsPageModule);
    return MycardsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mycards/mycards.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/mycards/mycards.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-logo {\n  max-width: 130px;\n  margin-bottom: 30px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px;\n  text-align: left; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n.social {\n  margin-top: 36px; }\n\n.social ion-icon {\n  width: 22px;\n  height: 22px;\n  padding: 10px;\n  border-radius: 100px;\n  margin: 0 3px;\n  color: #fff;\n  background: var(--ion-color-primary); }\n\nion-content {\n  --background: #fff; }\n\nion-content ion-header {\n    position: relative; }\n\nion-content ion-header:after {\n      display: none; }\n\nion-content ion-header ion-toolbar {\n      --background: #ececec;\n      padding: 10px 10px 40px;\n      color: #292929;\n      --min-height: 28px;\n      position: relative;\n      z-index: 0; }\n\nion-content ion-header ion-toolbar ion-back-button {\n        color: #292929;\n        font-size: 20px; }\n\nion-content ion-header ion-toolbar ion-title {\n        font-size: 18px; }\n\nion-content ion-header ion-toolbar:after {\n        /* content:\"\";\r\n\t\t\t\tbackground: url(\"../../../assets/images/profile-bg.jpg\");\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tright: 0;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tbottom: 0;\r\n\t\t\t\tbackground-size: cover;\r\n\t\t\t\tbackground-position: center;\r\n\t\t\t\topacity: 0.1; */ }\n\nion-content .date-cont {\n    position: relative;\n    z-index: 11;\n    padding: 30px 20px 40px;\n    border-radius: 25px 25px 0px 0px;\n    margin-top: -30px;\n    background: #fff; }\n\nion-content .date-cont .box-crdits {\n      background: #dfa5a4;\n      width: 100%;\n      padding: 25px;\n      position: relative;\n      z-index: 1;\n      overflow: hidden;\n      margin-bottom: 0px;\n      border-radius: 12px;\n      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.07);\n      margin-top: 0px; }\n\nion-content .date-cont .box-crdits .top-cips {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        margin-bottom: 15px; }\n\nion-content .date-cont .box-crdits .top-cips img.chip-s {\n          height: 35px; }\n\nion-content .date-cont .box-crdits .top-cips img.visa-s {\n          height: 20px; }\n\nion-content .date-cont .box-crdits .accnt-nusm {\n        color: #fff;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        margin: 20px 0px;\n        letter-spacing: 4px;\n        font-size: 14px;\n        font-weight: 500; }\n\nion-content .date-cont .box-crdits .accnt-nusm span {\n          color: #fff; }\n\nion-content .date-cont .box-crdits .tst-lta {\n        color: #fff;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        text-align: initial; }\n\nion-content .date-cont .box-crdits .tst-lta p {\n          font-size: 10px;\n          text-transform: uppercase;\n          letter-spacing: 1px;\n          margin: 0px;\n          color: #fff; }\n\nion-content .date-cont .box-crdits .tst-lta p span {\n            display: block;\n            font-size: 14px;\n            font-weight: 500;\n            letter-spacing: 2px;\n            color: #fff;\n            margin-top: 5px; }\n\nion-content .date-cont .box-crdits [credit-logo] {\n        position: absolute;\n        top: 0px;\n        bottom: 0px;\n        left: 0px;\n        right: 0px;\n        margin: auto;\n        width: 130px;\n        z-index: -1;\n        opacity: 1; }\n\nion-content .date-cont .box-crdits:before {\n        position: absolute;\n        content: \"\";\n        top: 0px;\n        bottom: 0px;\n        left: 0px;\n        right: 0px;\n        background: url('credit-card-pattern.png') no-repeat center center/cover;\n        opacity: 0.08;\n        z-index: -1; }\n\nion-content .date-cont [card-detail] {\n      padding: 0px 5px 25px; }\n\nion-content .date-cont [card-detail] h3 {\n        margin: 0px;\n        font-size: 18px;\n        font-weight: 600;\n        color: #222;\n        letter-spacing: 1px; }\n\nion-content .date-cont [card-detail] p {\n        margin: 10px 0px 0px;\n        font-size: 14px;\n        color: #9c9c9c;\n        line-height: 26px; }\n\nion-content .date-cont [card-field] ion-item {\n      --min-height: 42px;\n      border: 1px solid #dadada;\n      --padding-top: 8px;\n      --padding-bottom: 8px;\n      border-radius: 4px;\n      margin-bottom: 12px; }\n\nion-content .date-cont [card-field] ion-item ion-label {\n        margin: 0px;\n        -webkit-transform: translateY(0%) scale(1);\n                transform: translateY(0%) scale(1);\n        font-size: 11px;\n        font-weight: 500;\n        color: #909090 !important; }\n\nion-content .date-cont [card-field] ion-item ion-input {\n        font-size: 14px;\n        --padding-top: 3px;\n        --padding-bottom: 3px;\n        color: #333;\n        --placeholder-opacity: 1;\n        font-weight: 500; }\n\nion-content .date-cont [card-field] ion-item ion-datetime {\n        font-size: 14px;\n        --padding-top: 3px;\n        --padding-bottom: 3px;\n        color: #333;\n        --placeholder-opacity: 1;\n        font-weight: 500; }\n\nion-content .date-cont [card-field] [submit-btn] ion-button {\n      min-height: 48px;\n      --box-shadow: none;\n      font-weight: 500;\n      font-size: 15px;\n      margin: 0px 0px 10px; }\n\nion-content span.rigt-lined {\n    position: relative;\n    z-index: 0; }\n\nion-content span.rigt-lined:after {\n      content: \"\";\n      position: absolute;\n      right: -21px;\n      width: 17px;\n      height: 2px;\n      background: #00853f;\n      top: 14px; }\n\n.errors {\n  color: red;\n  font-size: 12px; }\n\n[submit-btn] {\n  padding-top: 13px; }\n\nbutton.bts-sstr {\n  padding: 0px;\n  margin: 0px;\n  width: 30px;\n  height: 30px;\n  background: #dfa5a4;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 24px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: absolute;\n  right: 22px;\n  top: 40px; }\n\n.slide-posu ion-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding: 0px; }\n\na.add-card-new {\n  text-decoration: none;\n  margin-top: 15px;\n  display: inline-block; }\n\nion-item-sliding.slide-posu {\n  margin-top: 15px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXljYXJkcy9FOlxcZml0bmVzcy1hcHAtY29kZS1kZWxpdmVyeS9zcmNcXGFwcFxccGFnZXNcXG15Y2FyZHNcXG15Y2FyZHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teWNhcmRzL215Y2FyZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsU0FBUSxFQUFBOztBQUdaO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUduQjtFQUNBLGdCQUFnQixFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsV0FBVztFQUNYLG9DQUFvQyxFQUFBOztBQUl4QztFQUNDLGtCQUFhLEVBQUE7O0FBRGQ7SUFHRSxrQkFBa0IsRUFBQTs7QUFIcEI7TUFLRyxhQUFhLEVBQUE7O0FBTGhCO01BUUcscUJBQWE7TUFDYix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLGtCQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTs7QUFiYjtRQWVJLGNBQWM7UUFDZCxlQUFlLEVBQUE7O0FBaEJuQjtRQW1CSSxlQUFlLEVBQUE7O0FBbkJuQjtRQXNCSTs7Ozs7Ozs7O21CQ0RlLEVEVUM7O0FBL0JwQjtJQW9DRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQXpDbEI7TUEyQ0csbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxhQUFhO01B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Q3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUliO0VBRUUsb0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdkO0VBQ0kscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215Y2FyZHMvbXljYXJkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtbG9nb3tcclxuICAgIG1heC13aWR0aDogMTMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udGFnc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRhZ3MgaDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5cclxuLnRhZ3MgaW9uLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTRweDtcclxuICAgIHRvcDogMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLnNvY2lhbHtcclxubWFyZ2luLXRvcDogMzZweDtcclxufVxyXG5cclxuLnNvY2lhbCBpb24taWNvbntcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDNweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG5cdC0tYmFja2dyb3VuZDogI2ZmZjtcclxuXHRpb24taGVhZGVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdFx0aW9uLXRvb2xiYXIge1xyXG5cdFx0XHQtLWJhY2tncm91bmQ6ICNlY2VjZWM7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHggMTBweCA0MHB4O1xyXG5cdFx0XHRjb2xvcjogIzI5MjkyOTtcclxuXHRcdFx0LS1taW4taGVpZ2h0OiAyOHB4O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHotaW5kZXg6IDA7XHJcblx0XHRcdGlvbi1iYWNrLWJ1dHRvbiB7XHJcblx0XHRcdFx0Y29sb3I6ICMyOTI5Mjk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlvbi10aXRsZSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdC8qIGNvbnRlbnQ6XCJcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUtYmcuanBnXCIpO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRcdFx0b3BhY2l0eTogMC4xOyAqL1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5kYXRlLWNvbnQge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ei1pbmRleDogMTE7XHJcblx0XHRwYWRkaW5nOiAzMHB4IDIwcHggNDBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTMwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0LmJveC1jcmRpdHMge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZGZhNWE0O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0cGFkZGluZzogMjVweDtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHR6LWluZGV4OiAxO1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblx0XHRcdGJveC1zaGFkb3c6IDFweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0XHRcdC50b3AtY2lwcyB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdFx0XHRcdGltZy5jaGlwLXMge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAzNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbWcudmlzYS1zIHtcclxuXHRcdFx0XHRcdGhlaWdodDogMjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0LmFjY250LW51c20ge1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0bWFyZ2luOiAyMHB4IDBweDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogNHB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdHNwYW4gXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0LnRzdC1sdGEge1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogaW5pdGlhbDtcclxuXHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdHNwYW4ge1xyXG5cclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFtjcmVkaXQtbG9nb10ge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6IDBweDtcclxuXHRcdFx0XHRib3R0b206IDBweDtcclxuXHRcdFx0XHRsZWZ0OiAwcHg7XHJcblx0XHRcdFx0cmlnaHQ6IDBweDtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IDEzMHB4O1xyXG5cdFx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHRcdG9wYWNpdHk6IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdHRvcDogMHB4O1xyXG5cdFx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHRyaWdodDogMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NyZWRpdC1jYXJkLXBhdHRlcm4ucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuXHRcdFx0XHRvcGFjaXR5OiAwLjA4O1xyXG5cdFx0XHRcdHotaW5kZXg6IC0xO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRbY2FyZC1kZXRhaWxdIHtcclxuXHRcdFx0cGFkZGluZzogMHB4IDVweCAyNXB4O1xyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0Y29sb3I6ICMyMjI7XHJcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHRcdFx0fVxyXG5cdFx0XHRwIHtcclxuXHRcdFx0XHRtYXJnaW46IDEwcHggMHB4IDBweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0Y29sb3I6ICM5YzljOWM7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFtjYXJkLWZpZWxkXSB7XHJcblx0XHRcdGlvbi1pdGVtIHtcclxuXHRcdFx0XHQtLW1pbi1oZWlnaHQ6IDQycHg7XHJcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcclxuXHRcdFx0XHQtLXBhZGRpbmctdG9wOiA4cHg7XHJcblx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogOHB4O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgc2NhbGUoMSk7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDExcHg7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM5MDkwOTAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24taW5wdXQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogM3B4O1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRcdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpb24tZGF0ZXRpbWUge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLXRvcDogM3B4O1xyXG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRcdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRbc3VibWl0LWJ0bl0ge1xyXG5cdFx0XHRcdGlvbi1idXR0b24ge1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogNDhweDtcclxuXHRcdFx0XHRcdC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweCAwcHggMTBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0c3Bhbi5yaWd0LWxpbmVkIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHotaW5kZXg6IDA7XHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogLTIxcHg7XHJcblx0XHRcdHdpZHRoOiAxN3B4O1xyXG5cdFx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzAwODUzZjtcclxuXHRcdFx0dG9wOiAxNHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmVycm9ycyB7XHJcblx0Y29sb3I6IHJlZDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuW3N1Ym1pdC1idG5dIHtcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG59XHJcbmJ1dHRvbi5idHMtc3N0ciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RmYTVhNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG59XHJcblxyXG5cclxuLnNsaWRlLXBvc3Uge1xyXG5cdGlvbi1pdGVtIHtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdH1cclxufVxyXG5hLmFkZC1jYXJkLW5ldyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbmlvbi1pdGVtLXNsaWRpbmcuc2xpZGUtcG9zdSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59ICIsIi5zdGFydC1sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG4udGFncyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnRhZ3MgaDEge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7IH1cblxuLnRhZ3MgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNHB4O1xuICB0b3A6IDExcHg7XG4gIGZvbnQtc2l6ZTogMjJweDsgfVxuXG4uc29jaWFsIHtcbiAgbWFyZ2luLXRvcDogMzZweDsgfVxuXG4uc29jaWFsIGlvbi1pY29uIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IH1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7IH1cbiAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlcjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNlY2VjZWM7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggNDBweDtcbiAgICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgICAgLS1taW4taGVpZ2h0OiAyOHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMDsgfVxuICAgICAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYmFjay1idXR0b24ge1xuICAgICAgICBjb2xvcjogIzI5MjkyOTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgICBpb24tY29udGVudCBpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxuICAgICAgaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjphZnRlciB7XG4gICAgICAgIC8qIGNvbnRlbnQ6XCJcIjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb2ZpbGUtYmcuanBnXCIpO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRcdFx0b3BhY2l0eTogMC4xOyAqLyB9XG4gIGlvbi1jb250ZW50IC5kYXRlLWNvbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMTtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4gICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCAuYm94LWNyZGl0cyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGZhNWE0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYm94LXNoYWRvdzogMXB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7IH1cbiAgICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgLmJveC1jcmRpdHMgLnRvcC1jaXBzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XG4gICAgICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgLmJveC1jcmRpdHMgLnRvcC1jaXBzIGltZy5jaGlwLXMge1xuICAgICAgICAgIGhlaWdodDogMzVweDsgfVxuICAgICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IC5ib3gtY3JkaXRzIC50b3AtY2lwcyBpbWcudmlzYS1zIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7IH1cbiAgICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgLmJveC1jcmRpdHMgLmFjY250LW51c20ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCAuYm94LWNyZGl0cyAuYWNjbnQtbnVzbSBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCAuYm94LWNyZGl0cyAudHN0LWx0YSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHRleHQtYWxpZ246IGluaXRpYWw7IH1cbiAgICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCAuYm94LWNyZGl0cyAudHN0LWx0YSBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICAgICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCAuYm94LWNyZGl0cyAudHN0LWx0YSBwIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4OyB9XG4gICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IC5ib3gtY3JkaXRzIFtjcmVkaXQtbG9nb10ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIG9wYWNpdHk6IDE7IH1cbiAgICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgLmJveC1jcmRpdHM6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY3JlZGl0LWNhcmQtcGF0dGVybi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICAgICAgICBvcGFjaXR5OiAwLjA4O1xuICAgICAgICB6LWluZGV4OiAtMTsgfVxuICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgW2NhcmQtZGV0YWlsXSB7XG4gICAgICBwYWRkaW5nOiAwcHggNXB4IDI1cHg7IH1cbiAgICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgW2NhcmQtZGV0YWlsXSBoMyB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4OyB9XG4gICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IFtjYXJkLWRldGFpbF0gcCB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjOWM5YzljO1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDsgfVxuICAgIGlvbi1jb250ZW50IC5kYXRlLWNvbnQgW2NhcmQtZmllbGRdIGlvbi1pdGVtIHtcbiAgICAgIC0tbWluLWhlaWdodDogNDJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4gICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IFtjYXJkLWZpZWxkXSBpb24taXRlbSBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSBzY2FsZSgxKTtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzkwOTA5MCAhaW1wb3J0YW50OyB9XG4gICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IFtjYXJkLWZpZWxkXSBpb24taXRlbSBpb24taW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgICAgICBmb250LXdlaWdodDogNTAwOyB9XG4gICAgICBpb24tY29udGVudCAuZGF0ZS1jb250IFtjYXJkLWZpZWxkXSBpb24taXRlbSBpb24tZGF0ZXRpbWUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICAgICAgICBmb250LXdlaWdodDogNTAwOyB9XG4gICAgaW9uLWNvbnRlbnQgLmRhdGUtY29udCBbY2FyZC1maWVsZF0gW3N1Ym1pdC1idG5dIGlvbi1idXR0b24ge1xuICAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBtYXJnaW46IDBweCAwcHggMTBweDsgfVxuICBpb24tY29udGVudCBzcGFuLnJpZ3QtbGluZWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwOyB9XG4gICAgaW9uLWNvbnRlbnQgc3Bhbi5yaWd0LWxpbmVkOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTIxcHg7XG4gICAgICB3aWR0aDogMTdweDtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogIzAwODUzZjtcbiAgICAgIHRvcDogMTRweDsgfVxuXG4uZXJyb3JzIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG5cbltzdWJtaXQtYnRuXSB7XG4gIHBhZGRpbmctdG9wOiAxM3B4OyB9XG5cbmJ1dHRvbi5idHMtc3N0ciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNkZmE1YTQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIycHg7XG4gIHRvcDogNDBweDsgfVxuXG4uc2xpZGUtcG9zdSBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG5hLmFkZC1jYXJkLW5ldyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbmlvbi1pdGVtLXNsaWRpbmcuc2xpZGUtcG9zdSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/mycards/mycards.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/mycards/mycards.page.ts ***!
  \***********************************************/
/*! exports provided: MycardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycardsPage", function() { return MycardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmdelete_confirmdelete_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmdelete/confirmdelete.page */ "./src/app/pages/confirmdelete/confirmdelete.page.ts");










var MycardsPage = /** @class */ (function () {
    function MycardsPage(loadingController, modalController, firebase, DataService, iab, http) {
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firebase = firebase;
        this.DataService = DataService;
        this.iab = iab;
        this.http = http;
        this.cards = [];
        this.isLoading = false;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.config = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"];
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        };
    }
    MycardsPage.prototype.ngOnInit = function () {
        /*    this.DataService.getUsercards()
        .subscribe( resp => {
          console.log(resp)
          this.cards = resp;
          this.isLoading = false;
        }); */
        var _this = this;
        this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url + '/json/data_strings.php')
            .subscribe(function (data) {
            console.log(data);
            _this.data = data[0];
        }, function (error) {
            console.log(error);
        });
    };
    MycardsPage.prototype.presentLoading = function () {
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
    MycardsPage.prototype.stopLoading = function () {
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
    MycardsPage.prototype.getcards = function () {
        var _this = this;
        this.presentLoading();
        this.DataService.getUsercards(this.email)
            .subscribe(function (resp) {
            _this.stopLoading();
            console.log(resp);
            _this.cards = resp;
            _this.isLoading = false;
        });
    };
    MycardsPage.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _confirmdelete_confirmdelete_page__WEBPACK_IMPORTED_MODULE_9__["ConfirmdeletePage"],
                            cssClass: 'confirmdelete',
                            componentProps: {
                                title: 'delete',
                                id: id,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            _this.getcards();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MycardsPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.firebase.getEmail()];
                    case 1:
                        _a.email = _b.sent();
                        this.getcards();
                        return [2 /*return*/];
                }
            });
        });
    };
    MycardsPage.prototype.openUrl = function (url) {
        this.iab.create(url, '_system');
    };
    MycardsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    MycardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mycards',
            template: __webpack_require__(/*! raw-loader!./mycards.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mycards/mycards.page.html"),
            styles: [__webpack_require__(/*! ./mycards.page.scss */ "./src/app/pages/mycards/mycards.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MycardsPage);
    return MycardsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mycards-mycards-module-es5.js.map