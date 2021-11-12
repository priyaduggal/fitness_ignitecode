(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editcard-editcard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/editcard/editcard.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/editcard/editcard.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        Edit Card Details\n      </ion-title>\n      <ion-buttons slot=\"start\">\n        <app-backbutton color=\"dark\"></app-backbutton>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fixed>\n\t<div class=\"date-cont\">\t\n\t\t\t<!--ion-row>\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<div class=\"box-crdits\">\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"top-cips\">\n\t\t\t\t\t\t\t<img src=\"assets/images/chip.png\" class=\"chip-s\">\n\t\t\t\t\t\t\t<img src=\"assets/images/visa.png\" class=\"visa-s\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"accnt-nusm\"> \n\t\t\t\t\t\t\t\t<span> **** </span>\n\t\t\t\t\t\t\t\t<span> **** </span>\n\t\t\t\t\t\t\t\t<span> **** </span>\n\t\t\t\t\t\t\t\t<span> 1234 </span>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"tst-lta\">\n\t\t\t\t\t\t\t<p> Name \n\t\t\t\t\t\t\t\t<span *ngIf=\"cardForm.value.cardName == ''\"> Brice Seraphin </span> \n\t\t\t\t\t\t\t\t<span *ngIf=\"cardForm.value.cardName != ''\"> {{cardForm.value.cardName}} </span> \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p> Exp Date \n\t\t\t\t\t\t\t\t<span *ngIf=\"cardForm.value.expMonth == ''\"> 14/20 </span> \n\t\t\t\t\t\t\t\t<span *ngIf=\"cardForm.value.expMonth != ''\"> {{cardForm.value.expMonth}}/{{cardForm.value.expYear}} </span> \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row-->\n\t\t\t<!--div card-detail>\n\t\t\t    <h3> Add Your Details </h3>\n\t\t\t\t<p>Start typing to add your card details. Everything will update according to your.</p>\n\t\t\t</div-->\n\t\t\t<div card-field>\n\t\t\t<form [formGroup]=\"cardForm\" (ngSubmit)=\"saveCard(cardForm.value)\">\n\t\t\t<ion-row>\n\n\n\t\t\t\t<div *ngIf=\"validateCard==true\">\n\t\t\t\t\t\t<p style=\"color:red;\">*Not a Valid Card Number</p>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div *ngIf=\"validateExpMonthYear==true\">\n\t\t\t\t\t\t<p style=\"color:red;\">*Not a Valid Exp. Month Or Year</p>\n\t\t\t\t</div>\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">Card Number</ion-label>\n\t\t\t\t\t\t<ion-input type=\"text\"  placeholder=\"Enter Card Number\" \n\t\t\t\t\t\tformControlName=\"number\" maxlength=\"16\" (keyup)=\"checkDigit($event)\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t\n\t\t\t\t\t\t<div *ngIf=\"submitted && proform.number.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"proform.number.errors.pattern\">*Card Number is invalid!</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngIf=\"submitted && proform.number.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"proform.number.errors.required\">*Card Number is required!</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\n\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">Card Holder Name</ion-label>\n\t\t\t\t\t\t<ion-input placeholder=\"Enter Card Holder Name\" formControlName=\"cardName\"></ion-input>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div *ngIf=\"submitted && proform.cardName.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"proform.cardName.errors.required\">*Card Holder Name is required!</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-col>\n\n\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">Expiry Date</ion-label>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"MM\" formControlName=\"expMonth\" maxlength=\"2\"></ion-input> \n\t\t\t\t\t\t</ion-col> \n\n\t\t\t\t\t\t<ion-col size=\"2\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">/</ion-label>\n\t\t\t\t\t\t</ion-col>\n\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"YY\" formControlName=\"expYear\" maxlength=\"2\"></ion-input>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div *ngIf=\"submitted && proform.expMonth.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"proform.expMonth.errors.required\">*Month is required!</p>\n\t\t\t\t\t</div>\n\t\t\t\t    <div *ngIf=\"submitted && proform.expMonth.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"proform.expMonth.errors.pattern\">*Month is invalid!</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"submitted && proform.expYear.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"proform.expYear.errors.required\">*Year is required!</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"submitted && proform.expYear.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"proform.expYear.errors.pattern\">*Year is invalid!</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">CVV</ion-label>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"Enter CVV\"  formControlName=\"cvv\" maxlength=\"3\"></ion-input> \n\t\t\t\t\t\t</ion-col> \n\n\t\t\t\t\t\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div *ngIf=\"submitted && proform.cvv.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"proform.cvv.errors.required\">*CVV is required!</p>\n\t\t\t\t\t</div>\n\t\t\t<div *ngIf=\"submitted && proform.cvv.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p class=\"errors\" *ngIf=\"proform.cvv.errors.pattern\">*CVV is invalid!</p>\n\t\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t</ion-col>\n\n\n\t\t\t\t<!-- <ion-col size=\"5\">\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label position=\"stacked\">CVV</ion-label>\n\t\t\t\t\t\t<ion-input placeholder=\"Enter CVV\" formControlName=\"cvv\"></ion-input>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t<div *ngIf=\"submitted && form.cvv.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<p *ngIf=\"form.cvv.errors.required\" class=\"errors\">*CVV is required!</p>\n\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col> -->\n\n\n\n\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<div submit-btn>\n\t\t\t\t\t\t<ion-button type=\"submit\" expand=\"full\" shape=\"round\" color=\"primary\">Update</ion-button>\n\t\t\t\t\t</div> \n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t</form>\n\t\t\t</div>\n\t</div>\n<img service-mark-icon src=\"assets/img/service-mark-icon.png\" alt=\"\" />\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/editcard/editcard-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/editcard/editcard-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EditcardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcardPageRoutingModule", function() { return EditcardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editcard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editcard.page */ "./src/app/pages/editcard/editcard.page.ts");




var routes = [
    {
        path: '',
        component: _editcard_page__WEBPACK_IMPORTED_MODULE_3__["EditcardPage"]
    }
];
var EditcardPageRoutingModule = /** @class */ (function () {
    function EditcardPageRoutingModule() {
    }
    EditcardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditcardPageRoutingModule);
    return EditcardPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/editcard/editcard.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/editcard/editcard.module.ts ***!
  \***************************************************/
/*! exports provided: EditcardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcardPageModule", function() { return EditcardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editcard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editcard-routing.module */ "./src/app/pages/editcard/editcard-routing.module.ts");
/* harmony import */ var _editcard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editcard.page */ "./src/app/pages/editcard/editcard.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var EditcardPageModule = /** @class */ (function () {
    function EditcardPageModule() {
    }
    EditcardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _editcard_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditcardPageRoutingModule"]
            ],
            declarations: [_editcard_page__WEBPACK_IMPORTED_MODULE_6__["EditcardPage"]]
        })
    ], EditcardPageModule);
    return EditcardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/editcard/editcard.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/editcard/editcard.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRjYXJkL2VkaXRjYXJkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/editcard/editcard.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/editcard/editcard.page.ts ***!
  \*************************************************/
/*! exports provided: EditcardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcardPage", function() { return EditcardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");








var EditcardPage = /** @class */ (function () {
    function EditcardPage(router, loadingController, activatedRoute, alertController, firebase, toastController, formBuilder, DataService, stripe) {
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
        this.cardid = activatedRoute.snapshot.paramMap.get('id');
        this.getcarddetails();
        this.createCardForm();
    }
    EditcardPage.prototype.createCardForm = function () {
        this.reg_exp = /^[0-9]*$/;
        console.log(' this.name', this.name);
        this.cardForm = this.formBuilder.group({
            cardName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            number: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.reg_exp)]],
            expMonth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.reg_exp)]],
            expYear: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.reg_exp)]],
            cvv: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.reg_exp)]]
        }, {});
    };
    EditcardPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.cardid = this.activatedRoute.snapshot.paramMap.get('id');
                return [2 /*return*/];
            });
        });
    };
    EditcardPage.prototype.getcarddetails = function () {
        var _this = this;
        this.presentLoading();
        this.DataService.getcarddetails(this.cardid)
            .subscribe(function (resp) {
            _this.stopLoading();
            _this.details = resp;
            console.log(_this.details[0].name);
            _this.name = _this.details[0].name;
            console.log('patch');
            _this.cardForm.patchValue({
                cardName: _this.details[0].name,
                number: _this.details[0].number,
                expMonth: _this.details[0].expMonth,
                expYear: _this.details[0].expYear,
                cvv: _this.details[0].cvc,
            });
        });
    };
    EditcardPage.prototype.stopLoading = function () {
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
    EditcardPage.prototype.presentLoading = function () {
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
    EditcardPage.prototype.checkDigit = function (e) {
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
    EditcardPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EditcardPage.prototype, "proform", {
        get: function () {
            return this.cardForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditcardPage.prototype.presentToast = function (message, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000,
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
    EditcardPage.prototype.saveCard = function (value) {
        var _this = this;
        this.submitted = true;
        if (this.cardForm.invalid) {
            return;
        }
        this.stripe.setPublishableKey("pk_test_51JFahIKnThrLCQpf68Dm6ZM9GYQUpvoMtorFgC6TATWNjBI7dHY1cZcBo7VYVTl56HoecV2gsGWNsnRjY8fIwKUm00Exx9MY4W");
        this.stripe.validateCardNumber(value.number).then(function (res) {
            console.log(res);
            if (res == 'OK') {
                _this.stripe.validateExpiryDate(value.expMonth, value.expYear).then(function (res) {
                    if (res == 'OK') {
                        _this.presentLoading();
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
                        _this.DataService.editcarddetails(JSON.stringify(fullcard), _this.cardid)
                            .subscribe(function (resp) {
                            _this.stopLoading();
                            _this.presentToast('Card Updated Successfully', 'success');
                            _this.router.navigate(['/mycards']);
                        });
                    }
                }).catch(function (error) {
                    _this.presentToast(error, 'danger');
                    console.error(error);
                    return false;
                });
            }
        }).catch(function (error) {
            _this.presentToast(error, 'danger');
            console.error(error);
            return false;
        });
    };
    EditcardPage.prototype.add = function (value) {
    };
    EditcardPage.ctorParameters = function () { return [
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
    EditcardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editcard',
            template: __webpack_require__(/*! raw-loader!./editcard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/editcard/editcard.page.html"),
            styles: [__webpack_require__(/*! ./editcard.page.scss */ "./src/app/pages/editcard/editcard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"]])
    ], EditcardPage);
    return EditcardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-editcard-editcard-module-es5.js.map