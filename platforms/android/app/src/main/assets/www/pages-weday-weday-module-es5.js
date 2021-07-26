(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weday-weday-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/weday/weday.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/weday/weday.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n          <!-- {{strings.ST87}} {{day}} -->\n          <ng-container *ngIf=\"exercises?.workout_goal == 1\">\n            <ng-container *ngIf=\"day == 1\">Legs & Glutes</ng-container>\n            <ng-container *ngIf=\"day == 2\">Upper Body</ng-container>\n            <ng-container *ngIf=\"day == 3\">Full Body</ng-container>\n            <ng-container *ngIf=\"day == 4\">Upper Body</ng-container>\n            <ng-container *ngIf=\"day == 5\">Legs & Glutes</ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"exercises?.workout_goal == 2\">\n            <ng-container *ngIf=\"day == 1\">Legs</ng-container>\n            <ng-container *ngIf=\"day == 2\">Push Day</ng-container>\n            <ng-container *ngIf=\"day == 3\">Glutes</ng-container>\n            <ng-container *ngIf=\"day == 4\">Pull Day</ng-container>\n            <ng-container *ngIf=\"day == 5\">Full Body HIIT</ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"exercises?.workout_goal == 1 && exercises?.workout_goal == 2\">{{strings.ST87}} {{day}}</ng-container>\n        </ion-title>\n              <ion-buttons slot=\"start\">\n                <app-backbutton color=\"dark\"></app-backbutton>\n              </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    \n    <app-loading *ngIf=\"isLoading\"></app-loading>\n\n  <app-restday *ngIf=\"exercises.length === 0\"></app-restday>\n  \n    <ion-list lines=\"none\" class=\"ion-padding-top\">\n  \n    <ion-item *ngFor=\"let item of exercises?.exercise\" [routerLink]=\"['/edetails', item.exercise_id]\" style=\"margin-bottom: 5px;\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"item.exercise_image | image\">\n        </ion-avatar>\n        <ion-label>{{item.exercise_title}}</ion-label>\n      </ion-item>\n  \n    </ion-list>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/weday/weday-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/weday/weday-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WedayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WedayPageRoutingModule", function() { return WedayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _weday_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weday.page */ "./src/app/pages/weday/weday.page.ts");




var routes = [
    {
        path: '',
        component: _weday_page__WEBPACK_IMPORTED_MODULE_3__["WedayPage"]
    }
];
var WedayPageRoutingModule = /** @class */ (function () {
    function WedayPageRoutingModule() {
    }
    WedayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WedayPageRoutingModule);
    return WedayPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/weday/weday.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/weday/weday.module.ts ***!
  \*********************************************/
/*! exports provided: WedayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WedayPageModule", function() { return WedayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weday_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weday-routing.module */ "./src/app/pages/weday/weday-routing.module.ts");
/* harmony import */ var _weday_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weday.page */ "./src/app/pages/weday/weday.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var WedayPageModule = /** @class */ (function () {
    function WedayPageModule() {
    }
    WedayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _weday_routing_module__WEBPACK_IMPORTED_MODULE_5__["WedayPageRoutingModule"]
            ],
            declarations: [_weday_page__WEBPACK_IMPORTED_MODULE_6__["WedayPage"]]
        })
    ], WedayPageModule);
    return WedayPageModule;
}());



/***/ }),

/***/ "./src/app/pages/weday/weday.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/weday/weday.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 124px !important;\n  max-height: 124px !important;\n  border-radius: 0; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label {\n  padding-left: 0px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  white-space: normal !important; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused:#fff !important;\n  --background-activated:#fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n\nion-item:last-child {\n  border-bottom: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VkYXkvRTpcXGZpdG5lc3MtYXBwLWNvZGUtZGVsaXZlcnkvc3JjXFxhcHBcXHBhZ2VzXFx3ZWRheVxcd2VkYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCO0VBQ3JCLHVCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx3Q0FBd0MsRUFBQTs7QUFHNUM7RUFDSSxvQ0FBcUI7RUFDckIsc0NBQXVCO0VBQ3ZCLDZDQUFvQjtFQUNwQix3QkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlZGF5L3dlZGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIgIHsgICAgIFxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDsgIFxuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxuICAgIG1heC13aWR0aDogMTI0cHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMjRweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuaW9uLWF2YXRhciBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxufVxuXG5pb24taXRlbSBpb24tbGFiZWx7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZSAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDojZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiB9XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/weday/weday.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/weday/weday.page.ts ***!
  \*******************************************/
/*! exports provided: WedayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WedayPage", function() { return WedayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");







var WedayPage = /** @class */ (function () {
    function WedayPage(dataService, router, route, plt, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.admob = admob;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.exercises = [];
        this.isLoading = false;
    }
    WedayPage.prototype.ngOnInit = function () {
        //this.admob.BannerAd();
    };
    // tslint:disable-next-line: use-lifecycle-interface
    WedayPage.prototype.ngOnDestroy = function () {
        this.admob.HideBannerAd();
    };
    WedayPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.day = data.day;
                    _this.getExercises();
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    WedayPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    WedayPage.prototype.getExercises = function () {
        var _this = this;
        this.dataService.getDataWorkoutExercisesByDay(this.id, this.day)
            .subscribe(function (resp) {
            _this.exercises = resp;
            _this.isLoading = false;
        });
    };
    WedayPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] }
    ]; };
    WedayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weday',
            template: __webpack_require__(/*! raw-loader!./weday.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/weday/weday.page.html"),
            styles: [__webpack_require__(/*! ./weday.page.scss */ "./src/app/pages/weday/weday.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"]])
    ], WedayPage);
    return WedayPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");




var Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.page = 0;
    }
    DataService.prototype.ejectQuery = function (query) {
        query = Url + query;
        return this.http.get(query);
    };
    DataService.prototype.getDataPackages = function () {
        return this.ejectQuery('/json/data_sub_plans.php?status=1');
    };
    DataService.prototype.getDataStrings = function () {
        return this.ejectQuery('/json/data_strings.php');
    };
    DataService.prototype.getDataMotivation = function () {
        return this.ejectQuery('/json/data_quotes.php');
    };
    DataService.prototype.getDataFeaturedDiets = function () {
        return this.ejectQuery('/json/data_diets.php?featured=1');
    };
    DataService.prototype.getCount = function () {
        return this.ejectQuery('/json/data_counts.php');
    };
    DataService.prototype.getDataCategories = function () {
        return this.ejectQuery('/json/data_categories.php');
    };
    DataService.prototype.getDataGoals = function () {
        return this.ejectQuery('/json/data_goals.php');
    };
    DataService.prototype.getDataLevels = function () {
        return this.ejectQuery('/json/data_levels.php');
    };
    DataService.prototype.getDataTags = function () {
        return this.ejectQuery('/json/data_tags.php');
    };
    DataService.prototype.getDataEquipments = function () {
        return this.ejectQuery('/json/data_equipments.php');
    };
    DataService.prototype.getDataBodyparts = function () {
        return this.ejectQuery('/json/data_bodyparts.php');
    };
    DataService.prototype.getDataFeaturedPosts = function () {
        return this.ejectQuery('/json/data_posts.php?featured=1');
    };
    DataService.prototype.getDataRecentPosts = function (limit) {
        return this.ejectQuery("/json/data_posts.php?limit=" + limit);
    };
    DataService.prototype.getDataWorkoutsByGoal = function (id) {
        return this.ejectQuery("/json/data_workouts.php?goal=" + id);
    };
    DataService.prototype.getDataWorkoutsByLevel = function (id) {
        return this.ejectQuery("/json/data_workouts.php?level=" + id);
    };
    DataService.prototype.getDataExercisesByBodypart = function (id) {
        return this.ejectQuery("/json/data_bodypart.php?id=" + id);
    };
    DataService.prototype.getDataExercisesByEquipment = function (id) {
        return this.ejectQuery("/json/data_equipment.php?id=" + id);
    };
    DataService.prototype.getDataDietsByCategory = function (id) {
        return this.ejectQuery("/json/data_diets.php?category=" + id);
    };
    DataService.prototype.getDataPostsByTag = function (id) {
        return this.ejectQuery("/json/data_posts.php?tag=" + id);
    };
    DataService.prototype.getDataExerciseById = function (id) {
        return this.ejectQuery("/json/data_exercises.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutById = function (id) {
        return this.ejectQuery("/json/data_workouts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataDietById = function (id) {
        return this.ejectQuery("/json/data_diets.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataPostById = function (id) {
        return this.ejectQuery("/json/data_posts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutExercisesByDay = function (id, day) {
        return this.ejectQuery("/json/data_days.php?id=" + id + "&day=" + day);
    };
    DataService.prototype.poststripedetails = function (token, id, email) {
        return this.ejectQuery("/json/user_add_plan.php?token=" + token + "&id=" + id + "&email=" + email);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-weday-weday-module-es5.js.map