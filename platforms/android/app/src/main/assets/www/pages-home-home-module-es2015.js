(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\">\n  <ion-toolbar lines=\"none\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"openMenu()\">\n              <ion-icon name=\"md-menu\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-vhang\">\n\t<div class=\"content-str\">\n\t\t<div class=\"box-aslly-s\">\n\t\t\t<div class=\"box-conts\" [routerLink]=\"['/workouts']\">\n\t\t\t\t<span class=\"icoh-st\"> <img src=\"./assets/images/Workouts_Cover.png\"> </span>\n\t\t\t\t<h3> {{strings.ST1}} </h3>\n\t\t\t\t<p> {{data?.workouts}} Items </p> \n\t\t\t\t<span class=\"right-ics\"> <ion-icon name=\"md-arrow-dropright\"></ion-icon> </span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"box-aslly-s\">\n\t\t\t<div class=\"box-conts\" [routerLink]=\"['/exercises']\">\n\t\t\t\t<span class=\"icoh-st\"> <img src=\"./assets/images/Exercises_Cover.png\"> </span>\n\t\t\t\t<h3> {{strings.ST2}} </h3>\n\t\t\t\t<p> {{data?.excercises}} Items </p> \n\t\t\t\t<span class=\"right-ics\"> <ion-icon name=\"md-arrow-dropright\"></ion-icon> </span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"box-aslly-s\">\n\t\t\t<div class=\"box-conts\" [routerLink]=\"['/diets']\">\n\t\t\t\t<span class=\"icoh-st\"> <img src=\"./assets/images/Diets_Cover.png\"> </span>\n\t\t\t\t<h3> {{strings.ST3}} </h3>\n\t\t\t\t<p> {{data?.diets}} Items </p> \n\t\t\t\t<span class=\"right-ics\"> <ion-icon name=\"md-arrow-dropright\"></ion-icon> </span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"box-aslly-s\">\n\t\t\t<div class=\"box-conts\" [routerLink]=\"['/posts']\">\n\t\t\t\t<span class=\"icoh-st\"> <img src=\"./assets/images/News_Cover.png\"> </span>\n\t\t\t\t<h3> {{strings.ST4}} </h3>\n\t\t\t\t<p> {{data?.news}} Items </p> \n\t\t\t\t<span class=\"right-ics\"> <ion-icon name=\"md-arrow-dropright\"></ion-icon> </span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"box-aslly-s\">\n\t\t\t<div class=\"box-conts\" [routerLink]=\"['/calculator']\">\n\t\t\t\t<span class=\"icoh-st\"> <img src=\"./assets/images/BMR_Cover.png\"> </span>\n\t\t\t\t<h3> {{strings.ST105}} </h3>\n\t\t\t\t<p> </p> \n\t\t\t\t<span class=\"right-ics\"> <ion-icon name=\"md-arrow-dropright\"></ion-icon> </span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    <!--ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-justify-content-center ion-align-items-center row-header-bg hrtrs\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <img src=\"./assets/images/logo.png\" class=\"col-header-logo class-trr\">\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class=\"menu-cols align-items-stretch\">\n          <ion-col size=\"12\" [routerLink]=\"['/workouts']\">\n\t\t\t<div class=\"box-firsts\">\t\n\t\t\t\t<span class=\"icoh-st\"> <img src=\"./assets/images/workouts.png\"> </span>\n\t\t\t\t<ion-label>{{strings.ST1}}</ion-label>\n\t\t\t</div>\n          </ion-col>\n\n          <ion-col size=\"6\" [routerLink]=\"['/exercises']\">\n\t\t\t\t<div class=\"box-seccons-str\">\t\n\t\t\t\t\t<span class=\"icoh-dd\"> <img src=\"./assets/images/exercises.png\"> </span>\n\t\t\t\t\t<ion-label>{{strings.ST2}}</ion-label>\n\t\t\t\t</div>\n          </ion-col>\n\n          <ion-col size=\"6\" [routerLink]=\"['/diets']\">\n\t\t\t\t<div class=\"box-seccons-str\">\t\n\t\t\t\t\t<span class=\"icoh-dd\"> <img src=\"./assets/images/diets.png\"> </span>\n\t\t\t\t\t<ion-label>{{strings.ST3}}</ion-label>\n\t\t\t\t</div>\n\t\t  </ion-col>\n            \n          <ion-col size=\"6\" [routerLink]=\"['/posts']\">\n\t\t\t\t<div class=\"box-seccons-str\">\t\n\t\t\t\t\t<span class=\"icoh-dd\">  <img src=\"./assets/images/blog.png\"> </span>\n\t\t\t\t\t<ion-label>{{strings.ST4}}</ion-label>\n\t\t\t\t</div>\n\t\t </ion-col>\n\n          <ion-col size=\"6\" [routerLink]=\"['/calculator']\">\n\t\t\t\t<div class=\"box-seccons-str\">\t\n\t\t\t\t\t<span class=\"icoh-dd\">  <img src=\"./assets/images/calculator.png\"> </span>\n\t\t\t\t\t<ion-label>{{strings.ST105}}</ion-label>\n\t\t\t\t</div>\n\t\t </ion-col>\n            \n          <ion-col size=\"6\" [routerLink]=\"['/motivation']\">\n              <img src=\"./assets/images/quotes.png\">\n              <ion-label>{{strings.ST5}}</ion-label>\n          </ion-col>\n\n      </ion-row>\n  \n    </ion-grid-->\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-header-bg {\n  background-image: url('header.jpg');\n  background-size: cover;\n  background-position: center;\n  padding: 60px 0 20px; }\n\n.header-md:after {\n  display: none !important; }\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0px; }\n\nion-content .content-str {\n  position: relative;\n  z-index: 0;\n  background: #faf7f7;\n  min-height: 100%;\n  padding: 95px 20px 10px 20px; }\n\nion-content .content-str:after {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    background: #dfa5a4;\n    width: 40%;\n    content: \"\";\n    z-index: -1; }\n\nion-content .box-aslly-s {\n  position: relative;\n  padding: 0px 15px 20px 30px; }\n\nion-content .box-aslly-s .box-conts {\n    position: relative;\n    background: #fff;\n    display: block;\n    padding: 20px;\n    border-radius: 20px;\n    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.03);\n    padding-left: 65px;\n    min-height: 102px; }\n\nion-content .box-aslly-s .box-conts span.icoh-st {\n      position: absolute;\n      left: -30px;\n      background: #fff;\n      width: 70px;\n      height: 70px;\n      padding: 4px;\n      border-radius: 20px;\n      top: 16px;\n      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center; }\n\nion-content .box-aslly-s .box-conts span.icoh-st img {\n        border-radius: 16px !important; }\n\nion-content .box-aslly-s .box-conts h3 {\n      margin: 0px;\n      margin-top: 7px;\n      color: #344254;\n      letter-spacing: 1px;\n      font-size: 20px; }\n\nion-content .box-aslly-s .box-conts p {\n      margin: 0px;\n      font-size: 14px;\n      margin-top: 5px;\n      color: #a0a0a0; }\n\nion-content .box-aslly-s .box-conts span.right-ics {\n      position: absolute;\n      width: 35px;\n      height: 35px;\n      background: #fff;\n      border-radius: 50%;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      font-size: 25px;\n      color: #dfa5a4;\n      right: -15px;\n      top: 35px;\n      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9FOlxcZml0bmVzcy1hcHAtY29kZS1kZWxpdmVyeS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQTBEO0VBQzFELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDOUIsb0JBQW9CLEVBQUE7O0FBR3JCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRTVCO0VBQ0ksbUJBQWUsRUFBQTs7QUFFbkI7RUFFRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsNEJBQTRCLEVBQUE7O0FBTjlCO0lBUUcsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sU0FBUztJQUNULG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVcsRUFBQTs7QUFmZDtFQW1CRSxrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7O0FBcEI3QjtJQXNCRyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7O0FBN0JwQjtNQStCSSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsU0FBUztNQUNULDRDQUE0QztNQUM1QyxvQkFBYTtNQUFiLGFBQWE7TUFDYix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLHdCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTs7QUExQzNCO1FBNkNLLDhCQUE4QixFQUFBOztBQTdDbkM7TUFpREksV0FBVztNQUNYLGVBQWU7TUFDZixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGVBQWUsRUFBQTs7QUFyRG5CO01Bd0RJLFdBQVc7TUFDWCxlQUFlO01BQ2YsZUFBZTtNQUNmLGNBQWMsRUFBQTs7QUEzRGxCO01BOERJLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixjQUFjO01BQ2QsWUFBWTtNQUNaLFNBQVM7TUFDVCw0Q0FBNEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWhlYWRlci1iZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRwYWRkaW5nOiA2MHB4IDAgMjBweDtcbn1cblxuLmhlYWRlci1tZDphZnRlcntcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuaW9uLWNvbnRlbnQge1xuXHQuY29udGVudC1zdHIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR6LWluZGV4OiAwO1xuXHRcdGJhY2tncm91bmQ6ICNmYWY3Zjc7XG5cdFx0bWluLWhlaWdodDogMTAwJTtcblx0XHRwYWRkaW5nOiA5NXB4IDIwcHggMTBweCAyMHB4O1xuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQ6ICNkZmE1YTQ7XG5cdFx0XHR3aWR0aDogNDAlO1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdH1cblx0fVxuXHQuYm94LWFzbGx5LXMge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRwYWRkaW5nOiAwcHggMTVweCAyMHB4IDMwcHg7XG5cdFx0LmJveC1jb250cyB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDY1cHg7XG5cdFx0XHRtaW4taGVpZ2h0OiAxMDJweDtcblx0XHRcdHNwYW4uaWNvaC1zdCB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0bGVmdDogLTMwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdHdpZHRoOiA3MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDcwcHg7XG5cdFx0XHRcdHBhZGRpbmc6IDRweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdFx0dG9wOiAxNnB4O1xuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblx0XHRcdFx0aW1ne1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cHggIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aDMgIHtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDdweDtcblx0XHRcdFx0Y29sb3I6ICMzNDQyNTQ7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdH1cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdGNvbG9yOiAjYTBhMGEwO1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5yaWdodC1pY3Mge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHdpZHRoOiAzNXB4O1xuXHRcdFx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjVweDtcblx0XHRcdFx0Y29sb3I6ICNkZmE1YTQ7XG5cdFx0XHRcdHJpZ2h0OiAtMTVweDtcblx0XHRcdFx0dG9wOiAzNXB4O1xuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");





let HomePage = class HomePage {
    constructor(menuCtrl, dataService) {
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true, 'customMenu');
        this.dataService.getCount()
            .subscribe(resp => {
            this.data = resp[0];
        });
    }
    ngOnInit() {
        this.innerHeight = window.innerHeight / 3 + 'px';
    }
    openMenu() {
        this.menuCtrl.enable(true, 'customMenu');
        this.menuCtrl.open('customMenu');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], HomePage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");




const Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.page = 0;
    }
    ejectQuery(query) {
        query = Url + query;
        return this.http.get(query);
    }
    getDataPackages() {
        return this.ejectQuery('/json/data_sub_plans.php?status=1');
    }
    getDataStrings() {
        return this.ejectQuery('/json/data_strings.php');
    }
    getDataMotivation() {
        return this.ejectQuery('/json/data_quotes.php');
    }
    getDataFeaturedDiets() {
        return this.ejectQuery('/json/data_diets.php?featured=1');
    }
    getCount() {
        return this.ejectQuery('/json/data_counts.php');
    }
    getDataCategories() {
        return this.ejectQuery('/json/data_categories.php');
    }
    getDataGoals() {
        return this.ejectQuery('/json/data_goals.php');
    }
    getDataLevels() {
        return this.ejectQuery('/json/data_levels.php');
    }
    getDataTags() {
        return this.ejectQuery('/json/data_tags.php');
    }
    getDataEquipments() {
        return this.ejectQuery('/json/data_equipments.php');
    }
    getDataBodyparts() {
        return this.ejectQuery('/json/data_bodyparts.php');
    }
    getDataFeaturedPosts() {
        return this.ejectQuery('/json/data_posts.php?featured=1');
    }
    getDataRecentPosts(limit) {
        return this.ejectQuery(`/json/data_posts.php?limit=${limit}`);
    }
    getDataWorkoutsByGoal(id) {
        return this.ejectQuery(`/json/data_workouts.php?goal=${id}`);
    }
    getDataWorkoutsByLevel(id) {
        return this.ejectQuery(`/json/data_workouts.php?level=${id}`);
    }
    getDataExercisesByBodypart(id) {
        return this.ejectQuery(`/json/data_bodypart.php?id=${id}`);
    }
    getDataExercisesByEquipment(id) {
        return this.ejectQuery(`/json/data_equipment.php?id=${id}`);
    }
    getDataDietsByCategory(id) {
        return this.ejectQuery(`/json/data_diets.php?category=${id}`);
    }
    getDataPostsByTag(id) {
        return this.ejectQuery(`/json/data_posts.php?tag=${id}`);
    }
    getDataExerciseById(id) {
        return this.ejectQuery(`/json/data_exercises.php?id=${id}&limit=1`);
    }
    getDataWorkoutById(id) {
        return this.ejectQuery(`/json/data_workouts.php?id=${id}&limit=1`);
    }
    getDataDietById(id) {
        return this.ejectQuery(`/json/data_diets.php?id=${id}&limit=1`);
    }
    getDataPostById(id) {
        return this.ejectQuery(`/json/data_posts.php?id=${id}&limit=1`);
    }
    getDataWorkoutExercisesByDay(id, day) {
        return this.ejectQuery(`/json/data_days.php?id=${id}&day=${day}`);
    }
    poststripedetails(token, id, email) {
        return this.ejectQuery(`/json/user_add_plan.php?token=${token}&id=${id}&email=${email}`);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataService);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map