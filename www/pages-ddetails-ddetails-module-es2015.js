(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ddetails-ddetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ddetails/ddetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ddetails/ddetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n            {{strings.ST129}}\n          </ion-title>\n        <ion-buttons slot=\"start\">\n            <app-backbutton color=\"light\"></app-backbutton>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"addToFavorites()\" slot=\"start\">\n            <ion-icon color=\"light\" mode=\"md\" [name]=\"icon\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-no-padding\">\n\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n\n      <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (diet.diet_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\n            <div class=\"text\">\n            <p class=\"time\">{{diet.category_title}}</p>\n            <p class=\"name\">{{diet.diet_title}}</p>\n          </div>\n      </ion-row>\n      </ion-grid>\n\n      <ion-toolbar no-border-top class=\"ion-no-padding\" color=\"primary\">\n      <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" mode=\"md\">\n          <ion-segment-button value=\"0\" mode=\"md\">\n            <ion-label>{{strings.ST46}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"1\" mode=\"md\">\n            <ion-label>{{strings.ST47}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\" mode=\"md\">\n              <ion-label>{{strings.ST48}}</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>  \n\n      <ion-slides [options]=\"slideOpts\" #slides (ionSlideDidChange)=\"slideChanged()\" scrollbar=\"false\">  \n          <ion-slide>\n              <ion-grid fixed>\n                  <ion-row>\n                      <ion-col size=\"3\" class=\"col-icon\">\n                      <img src=\"./assets/images/caloriesf.png\">\n                      <p class=\"name\">{{strings.ST45}}</p>\n                      <p class=\"value\">{{diet.diet_calories}}</p>\n                      </ion-col>\n\n                      <ion-col size=\"3\" class=\"col-icon\">\n                          <img src=\"./assets/images/protein.png\">\n                          <p class=\"name\">{{strings.ST50}}</p>\n                          <p class=\"value\">{{diet.diet_protein}}</p>\n                          </ion-col>\n                  \n                          <ion-col size=\"3\" class=\"col-icon\">\n                              <img src=\"./assets/images/fat.png\">\n                              <p class=\"name\">{{strings.ST51}}</p>\n                              <p class=\"value\">{{diet.diet_fat}}</p>\n                              </ion-col>\n\n                              <ion-col size=\"3\" class=\"col-icon\">\n                                  <img src=\"./assets/images/carbs.png\">\n                                  <p class=\"name\">{{strings.ST52}}</p>\n                                  <p class=\"value\">{{diet.diet_carbs}}</p>\n                                  </ion-col>\n\n                  </ion-row>\n                  <ion-row>\n                      <app-html [htmlcontent]=\"diet.diet_description\" class=\"ion-text-left\"></app-html>\n                  </ion-row>\n                </ion-grid>\n\n          </ion-slide>  \n          <ion-slide> <app-html [htmlcontent]=\"diet.diet_ingredients\" class=\"ion-text-left\"></app-html> </ion-slide>  \n          <ion-slide> <app-html [htmlcontent]=\"diet.diet_directions\" class=\"ion-text-left\"></app-html> </ion-slide>  \n        </ion-slides>  \n\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/ddetails/ddetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdetailsPageRoutingModule", function() { return DdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ddetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ddetails.page */ "./src/app/pages/ddetails/ddetails.page.ts");




const routes = [
    {
        path: '',
        component: _ddetails_page__WEBPACK_IMPORTED_MODULE_3__["DdetailsPage"]
    }
];
let DdetailsPageRoutingModule = class DdetailsPageRoutingModule {
};
DdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.module.ts ***!
  \***************************************************/
/*! exports provided: DdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdetailsPageModule", function() { return DdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ddetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ddetails-routing.module */ "./src/app/pages/ddetails/ddetails-routing.module.ts");
/* harmony import */ var _ddetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ddetails.page */ "./src/app/pages/ddetails/ddetails.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let DdetailsPageModule = class DdetailsPageModule {
};
DdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _ddetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["DdetailsPageRoutingModule"]
        ],
        declarations: [_ddetails_page__WEBPACK_IMPORTED_MODULE_6__["DdetailsPage"]]
    })
], DdetailsPageModule);



/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px; }\n\n.header-bg {\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(10%, rgba(0, 0, 0, 0.4)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0.75) 100%);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 30px; }\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: left;\n  margin: 0;\n  font-weight: 500;\n  font-size: 18px;\n  text-transform: capitalize; }\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold; }\n\nion-segment-button ion-label {\n  font-size: 15px !important;\n  font-weight: 500 !important;\n  letter-spacing: 0 !important; }\n\n.col-icon {\n  text-align: center; }\n\n.col-icon img {\n  width: 38px;\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 14px; }\n\n.col-icon .name {\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 7px; }\n\n.col-icon .value {\n  margin: 0;\n  font-size: 14px; }\n\nion-slides {\n  min-height: 60%;\n  padding-top: 22px;\n  width: 100%; }\n\n.slide {\n  min-height: 60%;\n  width: 100%; }\n\nion-slide {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n  padding: 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGRldGFpbHMvRTpcXGZpdG5lc3MtYXBwLWNvZGUtZGVsaXZlcnkvc3JjXFxhcHBcXHBhZ2VzXFxkZGV0YWlsc1xcZGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQW9CO0VBQ3BCLDRCQUF1QixFQUFBOztBQUd6QjtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUdsQix5SEFBa0Y7RUFBbEYsd0ZBQWtGO0VBQ2xGLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNBLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBSWI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFWDtFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRW5CO0VBQ0ksbUNBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyxrQ0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RkZXRhaWxzL2RkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOnJvb3QgeyAgXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDsgIFxuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7ICBcbiAgfSAgXG4gIFxuICAuaGVhZGVyLWJne1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItYmcgLnRleHR7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMC40KSAxMCUsIHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwLjQpIDEwJSxyZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDAuNCkgMTAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5oZWFkZXItYmcgLm5hbWV7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5oZWFkZXItYmcgLnRpbWV7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMCAhaW1wb3J0YW50O1xufVxuXG4uY29sLWljb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sLWljb24gaW1ne1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmNvbC1pY29uIC5uYW1le1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4uY29sLWljb24gLnZhbHVle1xubWFyZ2luOiAwO1xuZm9udC1zaXplOiAxNHB4O1xuICAgIFxufVxuXG4gIGlvbi1zbGlkZXN7XG4gICAgbWluLWhlaWdodDogNjAlO1xuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuc2xpZGV7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG59IFxuaW9uLXNsaWRle1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.page.ts ***!
  \*************************************************/
/*! exports provided: DdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdetailsPage", function() { return DdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");








let DdetailsPage = class DdetailsPage {
    constructor(dataService, router, route, plt, dataFavorite, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.admob = admob;
        this.segment = 0;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.diet = {};
        this.isLoading = false;
        this.icon = 'star-outline';
        this.slideOpts = {
            slidesPerView: 1,
            freeMode: false
        };
    }
    ngOnInit() {
        //this.admob.BannerAd();
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
        this.admob.HideBannerAd();
    }
    segmentChanged(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.slider.slideTo(this.segment);
        });
    }
    slideChanged() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.segment = yield this.slider.getActiveIndex();
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.innerHeight = this.plt.height() / 3 + 'px';
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.getDetails();
                this.dataFavorite.existDiet(this.id)
                    .then(exist => this.icon = (exist) ? 'star' : 'star-outline');
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    getDetails() {
        this.dataService.getDataDietById(this.id)
            .subscribe(resp => {
            this.diet = resp[0];
            this.isLoading = false;
        });
    }
    addToFavorites() {
        const diet = {
            id: this.diet.diet_id,
            title: this.diet.diet_title,
            image: this.diet.diet_image,
        };
        const exist = this.dataFavorite.saveDiet(diet);
        this.icon = (exist) ? 'star' : 'star-outline';
    }
};
DdetailsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"] },
    { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_7__["AdmobService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], DdetailsPage.prototype, "slider", void 0);
DdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ddetails',
        template: __webpack_require__(/*! raw-loader!./ddetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ddetails/ddetails.page.html"),
        styles: [__webpack_require__(/*! ./ddetails.page.scss */ "./src/app/pages/ddetails/ddetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
        _services_admob_service__WEBPACK_IMPORTED_MODULE_7__["AdmobService"]])
], DdetailsPage);



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
//# sourceMappingURL=pages-ddetails-ddetails-module-es2015.js.map