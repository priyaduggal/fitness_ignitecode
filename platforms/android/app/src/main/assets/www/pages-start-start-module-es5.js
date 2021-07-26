(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/start/start.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fixed class=\"dark\">\n\n<ion-grid fixed class=\"grid-bg\">\n\n  <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\n    <ion-col size=\"11\" class=\"ion-text-center\">\n      <img src=\"./assets/images/logo-white2.png\" class=\"start-logo\"/>\n\n      <ion-button class=\"button-h start-button btns-trrg\" mode=\"ios\" (click)=\"goLoginPage()\"  fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n        {{strings.ST26}}\n      </ion-button>\n\n      <ion-button class=\"button-h margin-h start-button btns-otres\" (click)=\"goSignUpPage()\" mode=\"ios\"  fill=\"outline\" size=\"default\" shape=\"round\" expand=\"block\">\n        {{strings.ST27}}\n      </ion-button>\n\n      <!--ion-button (click)=\"tryFacebookLogin()\" mode=\"ios\" class=\"button-h color-facebook start-button\" color=\"light\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n        <ion-icon class=\"color-facebook\" slot=\"start\" name=\"logo-facebook\"></ion-icon>\n        <ion-label class=\"color-facebook\">{{strings.ST104}}</ion-label>\n      </ion-button-->\n\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/start/start-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/start/start-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function() { return StartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.page */ "./src/app/pages/start/start.page.ts");




var routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }
];
var StartPageRoutingModule = /** @class */ (function () {
    function StartPageRoutingModule() {
    }
    StartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StartPageRoutingModule);
    return StartPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/start/start.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.module.ts ***!
  \*********************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-routing.module */ "./src/app/pages/start/start-routing.module.ts");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "./src/app/pages/start/start.page.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.module */ "./src/app/pages/login/login.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../signup/signup.module */ "./src/app/pages/signup/signup.module.ts");










var StartPageModule = /** @class */ (function () {
    function StartPageModule() {
    }
    StartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
                _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__["SignupPageModule"]
            ],
            declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
        })
    ], StartPageModule);
    return StartPageModule;
}());



/***/ }),

/***/ "./src/app/pages/start/start.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-bg {\n  height: 100%;\n  background-image: url('fit2.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  z-index: 0; }\n  .grid-bg:after {\n    content: \"\";\n    position: absolute;\n    background: -webkit-gradient(linear, left top, left bottom, from(#6486bb), color-stop(#7890b6), to(#dfa5a4));\n    background: linear-gradient(to bottom, #6486bb, #7890b6, #dfa5a4);\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n    opacity: 1;\n    background: #dfa5a4; }\n  .start-logo {\n  max-width: 160px;\n  margin-bottom: 20px; }\n  .margin-h {\n  margin-top: 15px !important;\n  margin-bottom: 15px !important; }\n  .button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important;\n  letter-spacing: 1px; }\n  .color-facebook {\n  color: #3b5998 !important; }\n  ion-button.button-h.start-button.btns-trrg {\n  background: #fff;\n  --background: #fff;\n  color: #dfa5a4;\n  border-radius: 50px;\n  --border-radius: 50px;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-shadow: none; }\n  ion-button.button-h.margin-h.start-button.btns-otres {\n  color: #ffffff;\n  border-radius: 50px;\n  --border-radius: 50px;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-shadow: none;\n  border: 1px solid #fff;\n  background: rgba(255, 255, 255, 0.05);\n  --border-color: #fff;\n  margin-top: 20px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhcnQvRTpcXGZpdG5lc3MtYXBwLWNvZGUtZGVsaXZlcnkvc3JjXFxhcHBcXHBhZ2VzXFxzdGFydFxcc3RhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWTtFQUNaLGlDQUF3RDtFQUN4RCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUMvQixrQkFBaUI7RUFDakIsVUFBUyxFQUFBO0VBUFY7SUFTRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRHQUFrRTtJQUFsRSxpRUFBa0U7SUFDbEUsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7SUFDWCxVQUFTO0lBQ1QsbUJBQW1CLEVBQUE7RUFJckI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7RUFHdkI7RUFDSSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7RUFHbEM7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLDRCQUE0QjtFQUMvQixtQkFBbUIsRUFBQTtFQUdwQjtFQUNJLHlCQUF5QixFQUFBO0VBRTdCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtFQUVyQjtFQUNJLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsb0JBQWU7RUFDZiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXJ0L3N0YXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmdyaWQtYmd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9maXQyLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHR6LWluZGV4OjA7XG5cdCY6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2NDg2YmIgLCAjNzg5MGI2ICwjZGZhNWE0KTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0ei1pbmRleDogLTE7XG5cdFx0b3BhY2l0eToxO1xuXHRcdGJhY2tncm91bmQ6ICNkZmE1YTQ7XG5cdH1cbn1cblxuLnN0YXJ0LWxvZ297XG4gICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWFyZ2luLWh7XG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1oe1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmNvbG9yLWZhY2Vib29re1xuICAgIGNvbG9yOiAjM2I1OTk4ICFpbXBvcnRhbnQ7XG59XG5pb24tYnV0dG9uLmJ1dHRvbi1oLnN0YXJ0LWJ1dHRvbi5idG5zLXRycmcge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjZGZhNWE0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuaW9uLWJ1dHRvbi5idXR0b24taC5tYXJnaW4taC5zdGFydC1idXR0b24uYnRucy1vdHJlcyB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/start/start.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signup/signup.page */ "./src/app/pages/signup/signup.page.ts");









var StartPage = /** @class */ (function () {
    function StartPage(menuCtrl, authService, navCtrl, router, modalCtrl, loadingController) {
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        // tslint:disable-next-line: variable-name
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
    }
    Object.defineProperty(StartPage.prototype, "strings", {
        get: function () {
            return this._strings;
        },
        enumerable: true,
        configurable: true
    });
    StartPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    StartPage.prototype.ngOnInit = function () {
    };
    StartPage.prototype.goLoginPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartPage.prototype.presentAlert = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            duration: 2000,
                            message: value,
                            mode: 'ios'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartPage.prototype.goSignUpPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartPage.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigateByUrl('/home');
        }, function (err) {
            if (err === 'auth/wrong-password') {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST30);
            }
            else if (err === 'auth/user-not-found') {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST31);
            }
            else {
                _this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
        });
    };
    StartPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    StartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! raw-loader!./start.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/start/start.page.html"),
            styles: [__webpack_require__(/*! ./start.page.scss */ "./src/app/pages/start/start.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], StartPage);
    return StartPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-start-start-module-es5.js.map