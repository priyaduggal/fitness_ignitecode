(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-videoview-videoview-module"],{

/***/ "./src/app/pages/videoview/videoview-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/videoview/videoview-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VideoviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoviewPageRoutingModule", function() { return VideoviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _videoview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videoview.page */ "./src/app/pages/videoview/videoview.page.ts");




var routes = [
    {
        path: '',
        component: _videoview_page__WEBPACK_IMPORTED_MODULE_3__["VideoviewPage"]
    }
];
var VideoviewPageRoutingModule = /** @class */ (function () {
    function VideoviewPageRoutingModule() {
    }
    VideoviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VideoviewPageRoutingModule);
    return VideoviewPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/videoview/videoview.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/videoview/videoview.module.ts ***!
  \*****************************************************/
/*! exports provided: VideoviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoviewPageModule", function() { return VideoviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _videoview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videoview-routing.module */ "./src/app/pages/videoview/videoview-routing.module.ts");
/* harmony import */ var _videoview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videoview.page */ "./src/app/pages/videoview/videoview.page.ts");







var VideoviewPageModule = /** @class */ (function () {
    function VideoviewPageModule() {
    }
    VideoviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _videoview_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoviewPageRoutingModule"]
            ],
            declarations: [_videoview_page__WEBPACK_IMPORTED_MODULE_6__["VideoviewPage"]]
        })
    ], VideoviewPageModule);
    return VideoviewPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-videoview-videoview-module-es5.js.map