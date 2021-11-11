(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subscriptions-subscriptions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/subscriptions/subscriptions.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/subscriptions/subscriptions.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        User subscription\n      </ion-title>\n      <ion-buttons slot=\"start\">\n        <app-backbutton color=\"dark\"></app-backbutton>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fixed>\n\n<p *ngIf=\"subscriptions?.length==0\"></p>\n\n<ion-item-sliding class=\"slide-posu\" *ngFor=\"let c of subscriptions\">\n<ion-item lines=\"none\" >\n<div class=\"box-crdits\" *ngIf=\"c?.cur=='Currently'\">\n<div class=\"con-sst\">\n<p class=\"rate-str\"> <span> <ion-icon name=\"star\"></ion-icon> </span> {{c.name}} activated</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"tst-lta\">\n\t\t\t\t\t\t<p> Start Date :- \n\t\t\t\t\t\t\t\t<span >{{c?.package_start | date : 'dd MMM yyyy'}}  </span> \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p> Last Date :- \n\t\t\t\t\t\t\t\t<span >{{c?.package_end | date : 'dd MMM yyyy'}}  </span> \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p> Price :-\n\t\t\t\t\t\t\t\t<span > ${{c.price}}  </span> \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\t</div>\t\n\t\t\t\t\t\t</div>\n\n\n<div class=\"box-crdits\" *ngIf=\"c?.cur=='Free'\">\n\t<div class=\"con-sst\">\n\t\t<p class=\"rate-str\"> <span> <ion-icon name=\"star\"></ion-icon> </span>7-day Free trail activated</p>\n\t\t<div class=\"tst-lta\">\n\t\t\t<p> \n\t\t\t\t<span style=\"margin-bottom: 17px;\n    width: 100%;\"> {{c.name}} Selected</span> \n\t\t\t\n\t\t\t</p>\n\t\t\t<p> Start Date :-\n\t\t\t\t<span > {{c.package_start| date : 'dd MMM yyyy'}}  </span> \n\t\t\t\n\t\t\t</p>\n\t\t\t<p> Last Date :-\n\t\t\t\t<span > {{c?.package_end | date : 'dd MMM yyyy'}}  </span> \n\t\t\t\n\t\t\t</p>\n\t\t\t<p> Amount :-\n\t\t\t\t<span > ${{c.price}}  </span> \n\t\t\t\n\t\t\t</p>\n\t\t\t\n\t\t</div>\t\n\t</div>\n</div>\n\t\t\t\t\t\n\t\t\t\t\t\n</ion-item>\n<!--ion-item lines=\"none\">\n\n\t<div class=\"box-crdits\" *ngIf=\"c?.cur=='Free'\">\n\t\t<div class=\"con-sst\">\n\t\t\t<p class=\"rate-str\"> <span> <ion-icon name=\"star\"></ion-icon> </span> Next Plan</p>\n\t\t\t\n\t\t\t<div class=\"tst-lta\">\n\t\t\t\t<p> Package Name :-\n\t\t\t\t\t<span > {{c.name}} </span> \n\t\t\t\t\n\t\t\t\t</p>\n\t\t\t\t<p> Amount :-\n\t\t\t\t\t<span > ${{c.price}}  </span> \n\t\t\t\t\n\t\t\t\t</p>\n\t\t\t\t<p> Start Date :- \n\t\t\t\t\t<span >{{c?.package_end | date : 'dd MMM yyyy'}}  </span> \n\t\t\t\t</p>\n\t\t\t</div>\t\n\t\t</div>\t\n\t</div>\n</ion-item-->\t\n\t\t\n\t\t</ion-item-sliding>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/subscriptions/subscriptions-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/subscriptions/subscriptions-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SubscriptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPageRoutingModule", function() { return SubscriptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _subscriptions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscriptions.page */ "./src/app/pages/subscriptions/subscriptions.page.ts");




const routes = [
    {
        path: '',
        component: _subscriptions_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionsPage"]
    }
];
let SubscriptionsPageRoutingModule = class SubscriptionsPageRoutingModule {
};
SubscriptionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/subscriptions/subscriptions.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/subscriptions/subscriptions.module.ts ***!
  \*************************************************************/
/*! exports provided: SubscriptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPageModule", function() { return SubscriptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscriptions-routing.module */ "./src/app/pages/subscriptions/subscriptions-routing.module.ts");
/* harmony import */ var _subscriptions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscriptions.page */ "./src/app/pages/subscriptions/subscriptions.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let SubscriptionsPageModule = class SubscriptionsPageModule {
};
SubscriptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionsPageRoutingModule"]
        ],
        declarations: [_subscriptions_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionsPage"]]
    })
], SubscriptionsPageModule);



/***/ }),

/***/ "./src/app/pages/subscriptions/subscriptions.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/subscriptions/subscriptions.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-crdits {\n  width: 100%;\n  padding: 10px; }\n  .box-crdits .con-sst {\n    display: block;\n    background: #fff6f6;\n    padding: 10px 20px;\n    margin: 10px 0;\n    border: 1px solid #ffefef;\n    border-radius: 10px; }\n  .box-crdits p.rate-str {\n    display: block;\n    font-size: 20px;\n    color: #000;\n    text-align: center;\n    margin-bottom: 25px; }\n  .box-crdits p.rate-str span {\n      display: block;\n      width: 50px;\n      height: 50px;\n      margin: 0 auto;\n      background: #dfa5a4;\n      color: #fff;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      border-radius: 50%;\n      margin-bottom: 15px;\n      font-size: 27px; }\n  .box-crdits .tst-lta p {\n    position: relative;\n    display: block;\n    z-index: 0;\n    border-bottom: 1px solid #fbeaea;\n    padding-bottom: 10px; }\n  .box-crdits .tst-lta p span {\n      float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3Vic2NyaXB0aW9ucy9FOlxcZml0bmVzcy1hcHAtY29kZS1kZWxpdmVyeS9zcmNcXGFwcFxccGFnZXNcXHN1YnNjcmlwdGlvbnNcXHN1YnNjcmlwdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTtFQUZqQjtJQUlFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7RUFUckI7SUFZRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7RUFoQnJCO01Ba0JHLGNBQWM7TUFDZCxXQUFXO01BQ1gsWUFBWTtNQUNaLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLG9CQUFhO01BQWIsYUFBYTtNQUNiLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGVBQWUsRUFBQTtFQTdCbEI7SUFpQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLG9CQUFvQixFQUFBO0VBckN0QjtNQXVDRyxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdWJzY3JpcHRpb25zL3N1YnNjcmlwdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1jcmRpdHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cdC5jb24tc3N0IHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjZmNjtcclxuXHRcdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRcdG1hcmdpbjogMTBweCAwO1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZWZlZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0fVxyXG5cdHAucmF0ZS1zdHIge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0XHRzcGFuIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZGZhNWE0O1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRcdFx0Zm9udC1zaXplOiAyN3B4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQudHN0LWx0YSBwIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0ei1pbmRleDogMDtcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmJlYWVhO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XHJcblx0XHRzcGFuIHtcclxuXHRcdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/subscriptions/subscriptions.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/subscriptions/subscriptions.page.ts ***!
  \***********************************************************/
/*! exports provided: SubscriptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsPage", function() { return SubscriptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");








let SubscriptionsPage = class SubscriptionsPage {
    constructor(firebase, stripe, loadingController, router, modalCtrl, toastController, location, DataService) {
        this.firebase = firebase;
        this.stripe = stripe;
        this.loadingController = loadingController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.location = location;
        this.DataService = DataService;
        this.paid = false;
        this.subscriptions = [];
        this.isLoading = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.email = yield this.firebase.getEmail();
            this.getsubscriptions();
        });
    }
    getsubscriptions() {
        this.presentLoading();
        this.DataService.getusersubscriptions(this.email)
            .subscribe(resp => {
            this.stopLoading();
            this.subscriptions = resp;
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                mode: "ios"
            });
            yield this.loading.present();
        });
    }
    stopLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loading != undefined) {
                yield this.loading.dismiss();
            }
            else {
                var self = this;
                setTimeout(function () {
                    self.stopLoading();
                }, 1000);
            }
        });
    }
};
SubscriptionsPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__["Stripe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
SubscriptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscriptions',
        template: __webpack_require__(/*! raw-loader!./subscriptions.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/subscriptions/subscriptions.page.html"),
        styles: [__webpack_require__(/*! ./subscriptions.page.scss */ "./src/app/pages/subscriptions/subscriptions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_6__["Stripe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
], SubscriptionsPage);



/***/ })

}]);
//# sourceMappingURL=pages-subscriptions-subscriptions-module-es2015.js.map