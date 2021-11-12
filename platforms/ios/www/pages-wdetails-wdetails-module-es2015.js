(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wdetails-wdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wdetails/wdetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wdetails/wdetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n          <app-backbutton color=\"light\"></app-backbutton>\n      </ion-buttons>\n      <ion-buttons slot=\"end\" style=\"display: none;\">\n              <ion-button (click)=\"addToFavorites()\" slot=\"start\">\n                <ion-icon color=\"light\" mode=\"md\" [name]=\"icon\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"presentModal()\" slot=\"start\">\n                <ion-icon color=\"light\" mode=\"md\" name=\"information-circle-outline\"></ion-icon>\n              </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n    <app-loading *ngIf=\"isLoading\"></app-loading>\n\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (workout.workout_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\n          <div class=\"text\">\n          <p class=\"name\">{{workout.workout_title}}</p>\n          <!-- <p class=\"time\">{{workout.workout_duration}}</p> -->\n        </div>\n        </ion-row>\n        <ion-row class=\"cols\">\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <p class=\"text\">{{strings.ST16}}</p>\n            <p class=\"value\">{{workout.goal_title}}</p>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n              <p class=\"text\">{{strings.ST17}}</p>\n              <p class=\"value\">{{workout.level_title}}</p>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class=\"days\">\n\n      <div *ngFor=\"let item of days let i = index\">\n        <div class=\"tags\" [routerLink]=\"['/weday', workout.workout_id, i+1]\" *ngIf=\"i < 5\">\n          <ng-container *ngIf=\"workout.workout_goal == 1 && i < 5\">\n            <!-- {{strings.ST87}} {{i+1}} -->\n            <h1 *ngIf=\"i == 0\"> Legs & Glutes</h1>\n            <h1 *ngIf=\"i == 1\"> Upper Body</h1>\n            <h1 *ngIf=\"i == 2\"> Full Body</h1>\n            <h1 *ngIf=\"i == 3\"> Upper Body</h1>\n            <h1 *ngIf=\"i == 4\"> Legs & Glutes</h1>\n            <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\n          </ng-container>\n          <ng-container *ngIf=\"workout.workout_goal == 2 && i < 5\">\n            <!-- <h1>{{strings.ST87}} {{i+1}}</h1> -->\n            <h1 *ngIf=\"i == 0\">Legs</h1>\n            <h1 *ngIf=\"i == 1\">Push Day</h1>\n            <h1 *ngIf=\"i == 2\">Glutes</h1>\n            <h1 *ngIf=\"i == 3\">Pull Day</h1>\n            <h1 *ngIf=\"i == 4\">Full Body HIIT</h1>\n            <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\n          </ng-container>\n\n          <ng-container *ngIf=\"workout.workout_goal != 2 && workout.workout_goal != 1\">\n            <h1>{{strings.ST87}} {{i+1}}</h1>\n            <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\n          </ng-container>\n        </div>\n      </div>\n\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/wdetails/wdetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdetailsPageRoutingModule", function() { return WdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wdetails.page */ "./src/app/pages/wdetails/wdetails.page.ts");




const routes = [
    {
        path: '',
        component: _wdetails_page__WEBPACK_IMPORTED_MODULE_3__["WdetailsPage"]
    }
];
let WdetailsPageRoutingModule = class WdetailsPageRoutingModule {
};
WdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.module.ts ***!
  \***************************************************/
/*! exports provided: WdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdetailsPageModule", function() { return WdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wdetails-routing.module */ "./src/app/pages/wdetails/wdetails-routing.module.ts");
/* harmony import */ var _wdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wdetails.page */ "./src/app/pages/wdetails/wdetails.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _winfo_winfo_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../winfo/winfo.module */ "./src/app/pages/winfo/winfo.module.ts");










let WdetailsPageModule = class WdetailsPageModule {
};
WdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _wdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["WdetailsPageRoutingModule"],
            _winfo_winfo_module__WEBPACK_IMPORTED_MODULE_9__["WinfoPageModule"]
        ],
        declarations: [_wdetails_page__WEBPACK_IMPORTED_MODULE_6__["WdetailsPage"]]
    })
], WdetailsPageModule);



/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bg {\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 10px 30px; }\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: 400;\n  font-size: 18px;\n  text-transform: capitalize; }\n\n.header-bg .time {\n  color: #dfa5a4;\n  margin-top: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold; }\n\n.cols {\n  background-color: var(--ion-color-primary);\n  padding: 10px 0; }\n\n.cols .text {\n  color: #ffffff;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 5px;\n  font-size: 18px; }\n\n.cols .value {\n  text-transform: uppercase;\n  margin: 0;\n  color: #ffffff;\n  font-size: 14px;\n  opacity: 0.7; }\n\n.days {\n  padding: 16px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2RldGFpbHMvRTpcXGZpdG5lc3MtYXBwLWNvZGUtZGVsaXZlcnkvc3JjXFxhcHBcXHBhZ2VzXFx3ZGV0YWlsc1xcd2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9DQUFxQztFQUNyQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0EsMENBQTBDO0VBQzFDLGVBQWUsRUFBQTs7QUFHZjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUduQjtFQUNJLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsY0FBYTtFQUNiLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUF5QjtFQUN6QiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFRLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZGV0YWlscy93ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJne1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItYmcgLnRleHR7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbn1cblxuLmhlYWRlci1iZyAubmFtZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaGVhZGVyLWJnIC50aW1le1xuICAgIGNvbG9yOiAjZGZhNWE0O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb2xze1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xucGFkZGluZzogMTBweCAwO1xufVxuXG4uY29scyAudGV4dHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufSBcblxuLmNvbHMgLnZhbHVle1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbn0gXG5cbi5kYXlze1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi50YWdze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhZ3MgaDF7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOjA7XG59XG5cbi50YWdzIGlvbi1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTRweDtcbiAgICB0b3A6IDExcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.page.ts ***!
  \*************************************************/
/*! exports provided: WdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdetailsPage", function() { return WdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _winfo_winfo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../winfo/winfo.page */ "./src/app/pages/winfo/winfo.page.ts");








let WdetailsPage = class WdetailsPage {
    constructor(dataService, router, route, plt, dataFavorite, modalController) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.modalController = modalController;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        this.workout = {};
        this.isLoading = false;
        this.days = new Array(7);
        this.icon = 'star-outline';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            this.innerHeight = this.plt.height() / 3 + 'px';
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.getDetails();
                this.dataFavorite.existWorkout(this.id)
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
        this.dataService.getDataWorkoutById(this.id)
            .subscribe(resp => {
            this.workout = resp[0];
            this.isLoading = false;
        });
    }
    addToFavorites() {
        const workout = {
            id: this.workout.workout_id,
            title: this.workout.workout_title,
            image: this.workout.workout_image,
        };
        const exist = this.dataFavorite.saveWorkout(workout);
        this.icon = (exist) ? 'star' : 'star-outline';
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _winfo_winfo_page__WEBPACK_IMPORTED_MODULE_7__["WinfoPage"],
                componentProps: {
                    description: this.workout.workout_description,
                }
            });
            return yield modal.present();
        });
    }
};
WdetailsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
WdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wdetails',
        template: __webpack_require__(/*! raw-loader!./wdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wdetails/wdetails.page.html"),
        styles: [__webpack_require__(/*! ./wdetails.page.scss */ "./src/app/pages/wdetails/wdetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], WdetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-wdetails-wdetails-module-es2015.js.map