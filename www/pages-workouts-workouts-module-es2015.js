(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-workouts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/workouts/workouts.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/workouts/workouts.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST1}}\n      </ion-title>\n            <ion-buttons slot=\"start\">\n              <app-backbutton color=\"dark\"></app-backbutton>\n            </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fixed>\n\n    <ion-grid>\n      \n        <ion-row>\n          <ion-col [routerLink]=\"['/goals']\">\n            <div class=\"card-center-image\" style=\"background-image: url('./assets/images/Guides-Cover.png');\">\n              <div class=\"card-center-bg\">\n                <div class=\"card-center-text\">\n                <p class=\"title\">{{strings.ST10}}</p>\n                <p class=\"subtitle\">{{strings.ST12}}</p>\n              </div>\n              </div>\n            </div>\n            \n          </ion-col>\n        </ion-row>\n      \n        <ion-row style=\"display:none;\">\n            <ion-col [routerLink]=\"['/levels']\">\n                <div class=\"card-center-image\" style=\"background-image: url('./assets/images/levels.jpg');\">\n                    <div class=\"card-center-bg\">\n                      <div class=\"card-center-text\">\n                          <p class=\"title\">{{strings.ST11}}</p>\n                          <p class=\"subtitle\">{{strings.ST13}}</p>\n                    </div>\n                    </div>\n                  </div>\n            </ion-col>\n          </ion-row>\n\n      </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/workouts/workouts-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/workouts/workouts-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WorkoutsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPageRoutingModule", function() { return WorkoutsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workouts.page */ "./src/app/pages/workouts/workouts.page.ts");




const routes = [
    {
        path: '',
        component: _workouts_page__WEBPACK_IMPORTED_MODULE_3__["WorkoutsPage"]
    }
];
let WorkoutsPageRoutingModule = class WorkoutsPageRoutingModule {
};
WorkoutsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkoutsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/workouts/workouts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.module.ts ***!
  \***************************************************/
/*! exports provided: WorkoutsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPageModule", function() { return WorkoutsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _workouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workouts-routing.module */ "./src/app/pages/workouts/workouts-routing.module.ts");
/* harmony import */ var _workouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workouts.page */ "./src/app/pages/workouts/workouts.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let WorkoutsPageModule = class WorkoutsPageModule {
};
WorkoutsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _workouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkoutsPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_workouts_page__WEBPACK_IMPORTED_MODULE_6__["WorkoutsPage"]]
    })
], WorkoutsPageModule);



/***/ }),

/***/ "./src/app/pages/workouts/workouts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n  ion-grid ion-row {\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29ya291dHMvRTpcXGZpdG5lc3MtYXBwLWNvZGUtZGVsaXZlcnkvc3JjXFxhcHBcXHBhZ2VzXFx3b3Jrb3V0c1xcd29ya291dHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7RUFIMUI7SUFNUSxtQkFBWTtZQUFaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtvdXRzL3dvcmtvdXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgICBpb24tcm93IHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/workouts/workouts.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/workouts/workouts.page.ts ***!
  \*************************************************/
/*! exports provided: WorkoutsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsPage", function() { return WorkoutsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



let WorkoutsPage = class WorkoutsPage {
    constructor() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
    }
    ngOnInit() {
    }
};
WorkoutsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workouts',
        template: __webpack_require__(/*! raw-loader!./workouts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/workouts/workouts.page.html"),
        styles: [__webpack_require__(/*! ./workouts.page.scss */ "./src/app/pages/workouts/workouts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorkoutsPage);



/***/ })

}]);
//# sourceMappingURL=pages-workouts-workouts-module-es2015.js.map