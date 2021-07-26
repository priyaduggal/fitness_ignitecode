(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calculator-calculator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/calculator/calculator.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/calculator/calculator.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode=\"ios\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n            {{strings.ST105}}\n          </ion-title>\n        <ion-buttons slot=\"start\">\n            <app-backbutton></app-backbutton>\n        </ion-buttons>\n        <ion-buttons slot=\"end\" style=\"display: none;\">\n          <ion-icon mode=\"md\" name=\"md-information-circle-outline\" [routerLink]=\"'/bmiinfo'\" slot=\"end\">\n          </ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <!-- <ion-col size=\"12\" class=\"col1\" [ngStyle]=\"{'background-color': color}\">\n\n        <div class=\"image\">\n          <img [src]=\"icon\">\n        </div>\n\n        <p class=\"name\">{{resultText}}</p>\n\n          <div class=\"circle\">\n              <p class=\"number\">{{resultNumber}}</p>\n              <p class=\"text\">BMI</p>\n          </div>\n\n      </ion-col> -->\n      <ion-col size=\"12\" class=\"col2\">\n\n        <div class=\"inputs\">\n          <ion-list class=\"line-input\" mode=\"md\"> \n            <label class=\"item item-input item-select nes-syr\">\n              <div class=\"input-label\">\n               Age in Years\n              </div>\n              </label>\n            <ion-item mode=\"md\">\n              <ion-input class=\"ion-text-center\" maxlength=\"3\" minlength=\"3\" placeholder=\"Age\" [(ngModel)]=\"age\" type=\"number\" min=\"0\"></ion-input>\n            </ion-item> \n          </ion-list>\n\n          <ion-list class=\"line-input\" mode=\"md\"> \n            <label class=\"item item-input item-select nes-syr\">\n              <div class=\"input-label\">\n               Height in CM\n              </div>\n              </label>\n              <ion-item mode=\"md\">\n                <ion-input class=\"ion-text-center\" maxlength=\"3\" minlength=\"3\" [placeholder]=\"strings.ST136\" [(ngModel)]=\"height\" type=\"number\" min=\"0\"></ion-input>\n              </ion-item> \n            </ion-list>\n\n            <ion-list class=\"line-input\" mode=\"md\"> \n              <label class=\"item item-input item-select nes-syr\">\n                <div class=\"input-label\">\n                 Weight in KG\n                </div>\n                </label>\n                <ion-item mode=\"md\">\n                  <ion-input class=\"ion-text-center\" maxlength=\"3\" minlength=\"2\" [placeholder]=\"strings.ST137\" [(ngModel)]=\"weight\" type=\"number\" min=\"0\"></ion-input>\n                </ion-item> \n              </ion-list>\n\n            <ion-list class=\"line-input\" mode=\"md\"> \n              <ion-item mode=\"md\">\n              <label class=\"item item-input item-select nes-syr\">\n                <div class=\"input-label\">\n                 Gender\n                </div>\n            \n               <ion-select name=\"\" id=\"user_sex\" [(ngModel)]=\"sex\">   \n                  <ion-select-option value=\"\">Select</ion-select-option>\n                  <ion-select-option value=\"male\">Male</ion-select-option>\n                  <ion-select-option value=\"female\">Female</ion-select-option>\n              </ion-select>\n              </label>\n              </ion-item>\n              </ion-list>\n            \n              <ion-list class=\"line-input\" mode=\"md\"> \n                <ion-item mode=\"md\">    \n            <label class=\"item item-input item-select nes-syr\">\n                <div class=\"input-label\">\n                Activity level\n                </div>\n                \n                <ion-select name=\"\" id=\"\" [(ngModel)]=\"activityLevel\" (change)=\"updateNutrition()\">\n                    <ion-select-option value=\"\">Select</ion-select-option>\n                    <ion-select-option value=\"1\">Sedentary - Little or no exercise</ion-select-option>\n                    <ion-select-option value=\"1.375\">Moderatetely - 3-5 Times/Week</ion-select-option>\n                    <ion-select-option value=\"1.725\">Very - 6-7 Times/Week</ion-select-option>\n                    <ion-select-option value=\"1.9\">Extra - 1-2 Times/Day</ion-select-option>\n                    <!-- <ion-select-option *ngFor=\"let activityLevel in activityLevels\" value=\"activityLevel.value\">{{activityLevel.title}}</ion-select-option> -->\n                </ion-select>\n            </label>\n            </ion-item>\n            </ion-list>\n\n              <ion-button mode=\"ios\" (click)=\"MetricCalculate()\" type=\"submit\" color=\"dark\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n                  {{strings.ST138}}\n              </ion-button>\n\n              <!-- <p class=\"footertext\">{{strings.ST139}}</p> -->\n\n          </div>\n\n\n        <div class=\"padding\">\n            <h4>Your BMR is: <span class=\"assertive nrx\">{{meta}}</span></h4>\n        </div>\n        <div class=\"padding\">\n          <table class=\"ui unstackable table\">\n              <thead>\n                  <th>Table</th>\n                    <th class=\"left aligned\" *ngFor=\"let goal of goals\">{{goal?.title}}</th>\n              </thead>\n              <tbody>\n                  <tr>\n                      <td class=\"left aligned\">Calories:</td>\n                      <td *ngFor=\"let goal of goals\" >{{goal?.calories.toFixed(0) | number:0}}</td>\n                  </tr>\n                  <tr class=\"left aligned\">   \n                      <td>Protein:</td>\n                      <td *ngFor=\"let goal of goals\" >{{goal?.protein.toFixed(0) | number:0}}</td>\n                  </tr>\n                  <tr class=\"left aligned\">\n                      <td>Fats:</td>\n                      <td *ngFor=\"let goal of goals\">{{goal?.fats.toFixed(0) | number:0}}</td>\n                  </tr>\n                  <tr class=\"left aligned\">\n                      <td>Carbs:</td>\n                      <td *ngFor=\"let goal of goals\">{{goal?.carbs.toFixed(0) | number:0}}</td>\n                  </tr>\n              </tbody>\n          </table>\n        <h5 class=\"ttl-ss\"><span class=\"assertive\"><b>A</b></span> To maintain current weight</h5>\n        <h5 class=\"ttl-ss\"><span class=\"assertive\"><b>B</b></span> To lose weight</h5>\n        <h5 class=\"ttl-ss\"><span class=\"assertive\"><b>C</b></span> To gain weight</h5>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/calculator/calculator-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/calculator/calculator-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CalculatorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageRoutingModule", function() { return CalculatorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.page */ "./src/app/pages/calculator/calculator.page.ts");




const routes = [
    {
        path: '',
        component: _calculator_page__WEBPACK_IMPORTED_MODULE_3__["CalculatorPage"]
    }
];
let CalculatorPageRoutingModule = class CalculatorPageRoutingModule {
};
CalculatorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalculatorPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/calculator/calculator.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/calculator/calculator.module.ts ***!
  \*******************************************************/
/*! exports provided: CalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageModule", function() { return CalculatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculator-routing.module */ "./src/app/pages/calculator/calculator-routing.module.ts");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator.page */ "./src/app/pages/calculator/calculator.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let CalculatorPageModule = class CalculatorPageModule {
};
CalculatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculatorPageRoutingModule"]
        ],
        declarations: [_calculator_page__WEBPACK_IMPORTED_MODULE_6__["CalculatorPage"]]
    })
], CalculatorPageModule);



/***/ }),

/***/ "./src/app/pages/calculator/calculator.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/calculator/calculator.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-start: 10px;\n  --padding-end: 10px; }\n\n.col1 {\n  height: 55%;\n  background-color: var(--ion-color-primary);\n  position: relative; }\n\n.col2 {\n  height: 45%; }\n\n.image {\n  max-width: 120px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 22%; }\n\n.name {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  text-align: center;\n  color: white;\n  font-weight: 500;\n  font-size: 22px;\n  text-transform: uppercase;\n  letter-spacing: 1px; }\n\n.circle {\n  background-color: var(--ion-color-dark);\n  position: absolute;\n  bottom: -70px;\n  left: 50%;\n  width: 140px;\n  height: 140px;\n  margin-left: -67px;\n  border-radius: 100px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border: 10px solid #ffffff;\n  z-index: 9; }\n\n.circle p {\n  display: block;\n  color: white;\n  margin: 0; }\n\n.circle .number {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 6px; }\n\n.circle .text {\n  font-weight: bold;\n  font-size: 14px; }\n\n.inputs {\n  display: block;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --highlight-height: 0;\n    border: 1px solid #cccccc;\n    border-radius: 50px; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n\n.line-input ion-item ion-label {\n      color: #cccccc !important;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-input {\n      --placeholder-color: #757575 !important; }\n\n.footertext {\n  color: #cccccc !important;\n  font-size: 14px !important;\n  text-align: center; }\n\n.nes-syr {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.assertive.nrx {\n  color: #dfa5a4;\n  margin-left: 5px; }\n\ntable.ui.unstackable.table {\n  width: 100%;\n  margin: 20px 0;\n  border: 1px solid #dadada;\n  background: #f9f9f9; }\n\ntable.ui.unstackable.table tr td {\n  padding: 12px;\n  background: #ffffff;\n  color: #888888;\n  border-bottom: 1px solid #e4e4e4;\n  font-size: 15px; }\n\ntable.ui.unstackable.table thead th {\n  padding: 12px;\n  background: #fbe9e9;\n  color: #2b2b2b;\n  text-align: left; }\n\nh5.ttl-ss {\n  color: #232323;\n  font-size: 16px;\n  margin: 15px 0; }\n\nh5.ttl-ss span b {\n  color: #dfa5a4;\n  margin-right: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsY3VsYXRvci9FOlxcZml0bmVzcy1hcHAtY29kZS1kZWxpdmVyeS9zcmNcXGFwcFxccGFnZXNcXGNhbGN1bGF0b3JcXGNhbGN1bGF0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWdCO0VBQ2hCLG1CQUFjLEVBQUE7O0FBSWxCO0VBQ0ksV0FBVztFQUNYLDBDQUEwQztFQUMxQyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTLEVBQUE7O0FBR2I7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLDJCQUEwQixFQUFBOztBQUQ5QjtJQUdRLHFDQUFlO0lBQ2YscUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUIsRUFBQTs7QUFOM0I7TUFTWSwwQ0FBMEMsRUFBQTs7QUFUdEQ7TUFhWSx5QkFBd0I7TUFDeEIsMEJBQXlCLEVBQUE7O0FBZHJDO01Ba0JZLHVDQUFvQixFQUFBOztBQVFoQztFQUNJLHlCQUF3QjtFQUN4QiwwQkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG5cblxuLmNvbDF7XG4gICAgaGVpZ2h0OiA1NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbDJ7XG4gICAgaGVpZ2h0OiA0NSU7XG59XG5cbi5pbWFnZXtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMiU7XG59XG5cbi5uYW1le1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uY2lyY2xle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNzBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC02N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2ZmZmZmZjtcbiAgICB6LWluZGV4OiA5O1xufVxuXG4uY2lyY2xlIHB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmNpcmNsZSAubnVtYmVye1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5jaXJjbGUgLnRleHR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5wdXRze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxpbmUtaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuXG4gICAgICAgICYuaXRlbS1oYXMtZm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjY2NjY2NjIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taW5wdXR7XG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNzU3NTc1ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuLmZvb3RlcnRleHR7XG4gICAgY29sb3I6ICNjY2NjY2MhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5lcy1zeXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXNzZXJ0aXZlLm5yeCB7XG4gICAgY29sb3I6ICNkZmE1YTQ7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbnRhYmxlLnVpLnVuc3RhY2thYmxlLnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG50YWJsZS51aS51bnN0YWNrYWJsZS50YWJsZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjODg4ODg4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbnRhYmxlLnVpLnVuc3RhY2thYmxlLnRhYmxlIHRoZWFkIHRoIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmYmU5ZTk7XG4gICAgY29sb3I6ICMyYjJiMmI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmg1LnR0bC1zcyB7XG4gICAgY29sb3I6ICMyMzIzMjM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuaDUudHRsLXNzIHNwYW4gYiB7XG4gICAgY29sb3I6ICNkZmE1YTQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/calculator/calculator.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/calculator/calculator.page.ts ***!
  \*****************************************************/
/*! exports provided: CalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPage", function() { return CalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let CalculatorPage = class CalculatorPage {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.sex = '';
        this.meta = '';
        this.resultNumber = '00.0';
        this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST131;
        this.icon = './assets/images/normal.png';
        this.color = 'var(--ion-color-primary)';
        this.goals = [{
                title: "A",
                calories: 0,
                protein: 0,
                fats: 0,
                carbs: 0
            }, {
                title: "B",
                calories: 0,
                protein: 0,
                fats: 0,
                carbs: 0
            }, {
                title: "C",
                calories: 0,
                protein: 0,
                fats: 0,
                carbs: 0
            }];
        this.activityLevel = '';
    }
    ngOnInit() {
    }
    updateNutrition() {
        this.meta = this.getMetaRate();
        console.log('updateNutrition');
        if ((this.sex === "male" || this.sex === "female") && this.weight > 0 && this.height > 0 && this.age > 0 && this.activityLevel > 0) {
            this.goals[0].calories = Number(this.bmr) * Number(this.activityLevel) || 0;
            this.goals[1].calories = this.goals[0].calories * 0.85 || 0;
            this.goals[2].calories = this.goals[0].calories * 1.15 || 0;
            this.goals[0].protein = this.weight * 2.204 || 0;
            this.goals[1].protein = this.weight * 2.204 || 0;
            this.goals[2].protein = this.weight * 2.204 * 1.5 || 0;
            this.goals[0].carbs = (this.goals[0].calories * 0.3) / 4 || 0;
            this.goals[1].carbs = (this.goals[1].calories * 0.15) / 4 || 0;
            this.goals[2].carbs = (this.goals[2].calories * 0.3) / 4 || 0;
            //=(calories-(protein*4)-(carbs*4))/9
            this.goals[0].fats = (this.goals[0].calories - (this.goals[0].protein * 4) - (this.goals[0].carbs * 4)) / 9 || 0;
            this.goals[1].fats = (this.goals[1].calories - (this.goals[1].protein * 4) - (this.goals[1].carbs * 4)) / 9 || 0;
            this.goals[2].fats = (this.goals[2].calories - (this.goals[2].protein * 4) - (this.goals[2].carbs * 4)) / 9 || 0;
        }
    }
    ;
    getMetaRate() {
        //=88.362+(13.397*weight)+(5.799*height)-(5.677*age)
        var meta;
        if (this.sex === "male") {
            meta = (88.362 + (13.397 * Number(this.weight))
                + (5.799 * Number(this.height))
                - (5.677 * Number(this.age)) || 0); //3071.487 
        }
        else if (this.sex === "female") {
            meta = (447.593 + (9.247 * Number(this.weight))
                + (3.098 * Number(this.height))
                - (4.33 * Number(this.age)) || 0);
        }
        else
            meta = null;
        //=447.593+(9.247*C4)+(3.098*C5)-(4.33*C6)
        this.bmr = meta;
        console.log((!isNaN(meta) && (meta != null)) ? parseFloat(meta).toFixed(2) : "-");
        return (!isNaN(meta) && (meta != null)) ? parseFloat(meta).toFixed(2) : "-";
    }
    ;
    MetricCalculate() {
        const age = this.age;
        const height = this.height;
        const weight = this.weight;
        if (Number(height) > 0 && Number(weight) > 0 && Number(age) > 0 && this.activityLevel != '' && this.sex != '') {
            // const imc = ((weight / height / height) * 10000);
            // this.resultNumber = imc.toFixed(2);
            // if (imc < 18.5) {
            //   this.resultText = strings.ST132;
            //   this.color = '#22a6b3';
            //   this.icon = './assets/images/underweight.png';
            // } else if (imc > 18.5 && imc < 25) {
            //   this.resultText = strings.ST133;
            //   this.color = '#6ab04c';
            //   this.icon = './assets/images/normal.png';
            // } else if (imc >= 25 && imc < 30) {
            //   this.resultText = strings.ST134;
            //   this.color = '#f0932b';
            //   this.icon = './assets/images/overweight.png';
            // } else {
            //   this.resultText = strings.ST135;
            //   this.color = '#eb4d4b';
            //   this.icon = './assets/images/obesity.png';
            // }
            this.updateNutrition();
        }
        else if ((Number(height) < 0 || Number(weight) < 0 || Number(age) < 0) && this.activityLevel != '' && this.sex != '') {
            this.presentAlert('Please enter valid details.');
        }
        else {
            this.presentAlert('Please enter your all details.');
        }
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
};
CalculatorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
CalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculator',
        template: __webpack_require__(/*! raw-loader!./calculator.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/calculator/calculator.page.html"),
        styles: [__webpack_require__(/*! ./calculator.page.scss */ "./src/app/pages/calculator/calculator.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], CalculatorPage);



/***/ })

}]);
//# sourceMappingURL=pages-calculator-calculator-module-es2015.js.map