(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-start-start-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <ion-header class=\"darkheader bg-cstr\" no-border>\n      <ion-toolbar mode=\"ios\">\n          <ion-title class=\"ion-text-capitalize\">\n            {{strings.ST26}}\n          </ion-title>\n              <ion-buttons slot=\"start\">\n                <ion-button color=\"dark\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\n                  <ion-icon name=\"md-arrow-back\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n      </ion-toolbar>\n  </ion-header>\n\n<ion-content fixed class=\"bg-cstr\">\n\n    <ion-grid fixed style=\"height: 100%;\">\n\n        <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\n          <ion-col size=\"11\" class=\"ion-text-center\">\n            <img src=\"./assets/images/logo-white2.png\" class=\"start-logo\"/>\n      \n            <form class=\"form\" autocomplete=\"off\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryLogin(validationsform.value)\" class=\"flst-str\">\n                <ion-list class=\"line-input\" mode=\"md\"> \n                    <ion-item mode=\"md\">\n                        <ion-icon name=\"md-mail\" size=\"small\" slot=\"start\"></ion-icon>\n                  <ion-input class=\"ion-text-left\" placeholder=\"Email\" type=\"email\" formControlName=\"email\"></ion-input>\n                    </ion-item> \n                    <span class=\"error\" *ngIf=\"!validationsform.controls.email.hasError('pattern') && validationsform.controls.email.touched && validationsform.controls.email.invalid\">Please enter email address.</span>\n                    <span class=\"error\" *ngIf=\"validationsform.controls.email.hasError('pattern') && validationsform.controls.email.invalid\">Please enter valid email address.</span>\n                  </ion-list>\n                  <ion-list class=\"line-input\" mode=\"md\"> \n                      <ion-item mode=\"md\"> \n                    <ion-icon name=\"md-lock\" size=\"small\" slot=\"start\"></ion-icon>\n                  <ion-input class=\"ion-text-left\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n                      </ion-item> \n                      <span class=\"error\" *ngIf=\"validationsform.controls.password.touched && validationsform.controls.password.invalid\">Please enter valid password.</span>\n                      <span class=\"error\" *ngIf=\"validationsform.controls.password.hasError('pattern') && validationsform.controls.password.invalid\">Please enter valid password.</span>\n                    </ion-list>\n                <ion-button class=\"button-h\" mode=\"ios\" type=\"submit\"  fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n                  {{strings.ST28}}\n                </ion-button>\n              </form>\n\n\t\t\t\t<p class=\"go-to-restpass\">\n                  <a (click)=\"goRestPassPage()\">{{strings.ST29}}</a>\n                </p>\n      \n          </ion-col>\n        </ion-row>\n      \n      </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _forgotpass_forgotpass_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forgotpass/forgotpass.module */ "./src/app/pages/forgotpass/forgotpass.module.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgotpass_forgotpass_module__WEBPACK_IMPORTED_MODULE_7__["ForgotpassPageModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-logo {\n  max-width: 160px;\n  margin-bottom: 20px; }\n\n.button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important;\n  margin: 0 !important;\n  margin-top: 10px !important;\n  text-transform: uppercase !important;\n  letter-spacing: 1px;\n  background: #fff;\n  --background: #fff;\n  color: #dfa5a4;\n  border-radius: 50px;\n  --border-radius: 50px;\n  font-size: 16px;\n  letter-spacing: 2px;\n  text-shadow: none; }\n\n.go-to-restpass {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  text-transform: uppercase !important; }\n\n.go-to-restpass a {\n  color: #ffffff; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --background-activated: transparent;\n    --background-focused: transparent;\n    --background-hover: transparent;\n    --highlight-height: 0;\n    border: 1px solid #ffffff;\n    border-radius: 50px;\n    background: transparent;\n    --background: transparent;\n    color: #fff; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid #fff; }\n\n.line-input ion-item ion-label {\n      color: #807e7e !important;\n      font-weight: 300;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-icon {\n      color: #fff !important;\n      margin-right: 8px !important; }\n\n.line-input ion-item ion-input:focus, .line-input ion-item ion-input:active {\n      background: transparent;\n      --background: transparent; }\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important;\n  color: #fff;\n  --placeholder-color: #fff;\n  --placeholder-opacity: 0.7;\n  background: transparent;\n  --background: transparent; }\n\n.bg-cstr {\n  background: #dfa5a4;\n  --background: #dfa5a4; }\n\n.flst-str ion-list {\n  background: transparent;\n  --background: transparent; }\n\n.error {\n  display: block;\n  margin-top: 4px;\n  color: #7890b6;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXGZpdG5lc3MtYXBwLWNvZGUtZGVsaXZlcnkvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBQ3ZDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDYixrQkFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBRUUsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0NBQW9DLEVBQUE7O0FBR3RDO0VBRUUsY0FBYyxFQUFBOztBQUdoQjtFQUNJLDJCQUEwQixFQUFBOztBQUQ5QjtJQUdPLHFDQUFlO0lBQ3BCLG1DQUF1QjtJQUN2QixpQ0FBcUI7SUFDckIsK0JBQW1CO0lBQ25CLHFCQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBYTtJQUNiLFdBQVcsRUFBQTs7QUFaYjtNQWVZLHNCQUFzQixFQUFBOztBQWZsQztNQW1CWSx5QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLDBCQUF5QixFQUFBOztBQXJCckM7TUF5Qlksc0JBQXNCO01BQ3RCLDRCQUE0QixFQUFBOztBQTFCeEM7TUE2QkcsdUJBQXVCO01BQ3ZCLHlCQUFhLEVBQUE7O0FBS2hCO0VBQ0MsMEJBQTBCO0VBQzFCLFdBQVc7RUFDUix5QkFBb0I7RUFDcEIsMEJBQXNCO0VBQ3pCLHVCQUF1QjtFQUNwQix5QkFBYSxFQUFBOztBQUVqQjtFQUNDLG1CQUFtQjtFQUNuQixxQkFBYSxFQUFBOztBQUVkO0VBRUUsdUJBQXVCO0VBQ3ZCLHlCQUFhLEVBQUE7O0FBSWY7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtbG9nb3tcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idXR0b24taHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0YmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICNkZmE1YTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5nby10by1yZXN0cGFzc1xue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uZ28tdG8tcmVzdHBhc3MgYVxue1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmxpbmUtaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuXHRcdC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuXHRcdC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcblx0XHQtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuXHRcdC0taGlnaGxpZ2h0LWhlaWdodDogMDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRjb2xvcjogI2ZmZjtcblxuICAgICAgICAmLml0ZW0taGFzLWZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM4MDdlN2UhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cdFx0aW9uLWlucHV0OmZvY3VzLCBpb24taW5wdXQ6YWN0aXZlIHtcblx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHR9IFxuICAgIH1cbn1cblxuLnNjLWlvbi1pbnB1dC1pb3MtaHtcblx0Zm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiAjZmZmO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjc7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYmctY3N0ciB7XG5cdGJhY2tncm91bmQ6ICNkZmE1YTQ7XG5cdC0tYmFja2dyb3VuZDogI2RmYTVhNDtcbn1cbi5mbHN0LXN0ciAge1xuXHRpb24tbGlzdCB7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0fVxufVxuXG4uZXJyb3Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBjb2xvcjogIzc4OTBiNjtcbiAgICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _forgotpass_forgotpass_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forgotpass/forgotpass.page */ "./src/app/pages/forgotpass/forgotpass.page.ts");








let LoginPage = class LoginPage {
    constructor(authService, navCtrl, formBuilder, router, menuCtrl, modalCtrl, loadingController) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        // tslint:disable-next-line: variable-name
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
    }
    get strings() {
        return this._strings;
    }
    ngOnInit() {
        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.validationsform = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(regexp)
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    presentAlert(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 2000,
                message: value,
                mode: 'ios'
            });
            yield loading.present();
        });
    }
    tryLogin(value) {
        const controls = this.validationsform.controls;
        console.log(controls);
        /** check form */
        if (this.validationsform.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        this.authService.doLogin(value)
            .then(res => {
            this.modalCtrl.dismiss();
            var paid = localStorage.getItem('user_paid');
            if (paid == 'true') {
                this.router.navigate(['/home']);
            }
            else {
                this.router.navigate(['/plans']);
            }
        }, err => {
            if (err.code === 'auth/wrong-password') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST30);
            }
            else if (err.code === 'auth/user-not-found') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST31);
            }
            else {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
        });
    }
    goRestPassPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _forgotpass_forgotpass_page__WEBPACK_IMPORTED_MODULE_7__["ForgotpassPage"],
            });
            modal.present();
        });
    }
    goClosePage() {
        this.modalCtrl.dismiss();
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-login-login-module~pages-start-start-module-es2015.js.map