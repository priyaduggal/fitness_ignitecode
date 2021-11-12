(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bodyparts-bodyparts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bodyparts/bodyparts.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bodyparts/bodyparts.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n          {{strings.ST37}}\n        </ion-title>\n              <ion-buttons slot=\"start\">\n                <app-backbutton color=\"dark\"></app-backbutton>\n              </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content fixed>\n  \n    <app-loading *ngIf=\"isLoading\"></app-loading>\n\n    <ion-grid fixed>\n        <ion-row>\n          <ion-col *ngFor=\"let item of bodyparts\" size=\"6\" [routerLink]=\"['/ebodyparts', item.bodypart_id, item.bodypart_title]\" [ngStyle]=\"{'height': height}\">\n            <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.bodypart_image | image) + ')'\">\n              <div class=\"overlay\">\n              <div class=\"texts\">\n              <h1>{{item.bodypart_title}}</h1>\n              </div>\n            </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/bodyparts/bodyparts-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/bodyparts/bodyparts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BodypartsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodypartsPageRoutingModule", function() { return BodypartsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bodyparts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bodyparts.page */ "./src/app/pages/bodyparts/bodyparts.page.ts");




var routes = [
    {
        path: '',
        component: _bodyparts_page__WEBPACK_IMPORTED_MODULE_3__["BodypartsPage"]
    }
];
var BodypartsPageRoutingModule = /** @class */ (function () {
    function BodypartsPageRoutingModule() {
    }
    BodypartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BodypartsPageRoutingModule);
    return BodypartsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/bodyparts/bodyparts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/bodyparts/bodyparts.module.ts ***!
  \*****************************************************/
/*! exports provided: BodypartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodypartsPageModule", function() { return BodypartsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bodyparts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bodyparts-routing.module */ "./src/app/pages/bodyparts/bodyparts-routing.module.ts");
/* harmony import */ var _bodyparts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bodyparts.page */ "./src/app/pages/bodyparts/bodyparts.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var BodypartsPageModule = /** @class */ (function () {
    function BodypartsPageModule() {
    }
    BodypartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _bodyparts_routing_module__WEBPACK_IMPORTED_MODULE_5__["BodypartsPageRoutingModule"]
            ],
            declarations: [_bodyparts_page__WEBPACK_IMPORTED_MODULE_6__["BodypartsPage"]]
        })
    ], BodypartsPageModule);
    return BodypartsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bodyparts/bodyparts.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/bodyparts/bodyparts.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: rgba(0, 0, 0, 0.35);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts:before {\n  content: \"\";\n  background: var(--ion-color-primary);\n  height: 3px;\n  display: block;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: 0;\n  margin-bottom: 10px; }\n\n.cardcategory .texts {\n  padding-bottom: 15px;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  position: relative; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9keXBhcnRzL0U6XFxmaXRuZXNzLWFwcC1jb2RlLWRlbGl2ZXJ5L3NyY1xcYXBwXFxwYWdlc1xcYm9keXBhcnRzXFxib2R5cGFydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib2R5cGFydHMvYm9keXBhcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXJvd3tcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkY2F0ZWdvcnl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jYXJkY2F0ZWdvcnkgLm92ZXJsYXl7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNhcmRjYXRlZ29yeSAudGV4dHM6YmVmb3Jle1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkY2F0ZWdvcnkgLnRleHRze1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZGNhdGVnb3J5IC50ZXh0cyBoMXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/bodyparts/bodyparts.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/bodyparts/bodyparts.page.ts ***!
  \***************************************************/
/*! exports provided: BodypartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodypartsPage", function() { return BodypartsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var BodypartsPage = /** @class */ (function () {
    function BodypartsPage(DataService, plt) {
        this.DataService = DataService;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.bodyparts = [];
        this.isLoading = false;
    }
    BodypartsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.height = this.plt.height() / 4.4 + 'px';
        this.DataService.getDataBodyparts()
            .subscribe(function (resp) {
            _this.bodyparts = resp;
            if (_this.bodyparts.length === 0) {
                _this.height = '157.273px';
            }
            else if (_this.bodyparts.length === 3 || _this.bodyparts.length === 2) {
                _this.height = 'inherit !important';
            }
            else if (_this.bodyparts.length >= 4) {
                _this.height = _this.plt.height() / 4.4 + 'px';
            }
            _this.isLoading = false;
        });
    };
    BodypartsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    BodypartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bodyparts',
            template: __webpack_require__(/*! raw-loader!./bodyparts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bodyparts/bodyparts.page.html"),
            styles: [__webpack_require__(/*! ./bodyparts.page.scss */ "./src/app/pages/bodyparts/bodyparts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], BodypartsPage);
    return BodypartsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bodyparts-bodyparts-module-es5.js.map