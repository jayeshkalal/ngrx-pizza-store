(self["webpackChunkangular_ngrx_entity"] = self["webpackChunkangular_ngrx_entity"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _pizzeria_landing_dashboard_landing_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizzeria/landing-dashboard/landing-dashboard.component */ 5243);
/* harmony import */ var _pizzeria_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizzeria/orders-list/orders-list.component */ 4921);
/* harmony import */ var _pizzeria_store_resolvers_car_repairs_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizzeria/store/resolvers/car-repairs.resolve */ 3393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: 'landing',
        component: _pizzeria_landing_dashboard_landing_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.LandingDashboardComponent,
        resolve: { carRepairs: _pizzeria_store_resolvers_car_repairs_resolve__WEBPACK_IMPORTED_MODULE_2__.CarRepairsResolve },
    },
    {
        path: 'landing/list',
        component: _pizzeria_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__.OrdersListComponent,
        resolve: { carRepairs: _pizzeria_store_resolvers_car_repairs_resolve__WEBPACK_IMPORTED_MODULE_2__.CarRepairsResolve },
    },
    {
        path: '**',
        redirectTo: 'landing',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);






class AppComponent {
    constructor(store) {
        //this.store.dispatch(fetchCarRepairsList());
        this.store = store;
        this.title = 'service-station-ngrx';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [["color", "accent"], ["mat-button", "", "routerLink", "/car-repairs/dashboard"], ["mat-button", "", "routerLink", "/car-repairs/list"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Service Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["span[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 275);
/* harmony import */ var _meta_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta-reducers */ 4054);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ 2373);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _pizzeria_car_repairs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pizzeria/car-repairs.module */ 9859);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule.forRoot([]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forRoot(_meta_reducers__WEBPACK_IMPORTED_MODULE_2__.reducers, { metaReducers: _meta_reducers__WEBPACK_IMPORTED_MODULE_2__.metaReducers }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production }),
            _pizzeria_car_repairs_module__WEBPACK_IMPORTED_MODULE_4__.PizzeriaModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsRootModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__.StoreDevtoolsModule, _pizzeria_car_repairs_module__WEBPACK_IMPORTED_MODULE_4__.PizzeriaModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule] }); })();


/***/ }),

/***/ 4054:
/*!****************************************!*\
  !*** ./src/app/meta-reducers/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);

const reducers = {};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];


/***/ }),

/***/ 9437:
/*!******************************************************!*\
  !*** ./src/app/pizzeria/car-repairs-list.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "repairsLoadingTime": () => (/* binding */ repairsLoadingTime),
/* harmony export */   "advanceRepairTime": () => (/* binding */ advanceRepairTime),
/* harmony export */   "CarRepairsListService": () => (/* binding */ CarRepairsListService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2702);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7202);
/* harmony import */ var _car_repairs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repairs.module */ 9859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




const repairsLoadingTime = 1000;
const advanceRepairTime = 200;
class CarRepairsListService {
    constructor(fakeCarRepairs) {
        this.fakeCarRepairs = fakeCarRepairs;
    }
    fetchCarRepairs() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(repairsLoadingTime).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(this.fakeCarRepairs));
    }
    advanceCarRepair(carRepair) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(advanceRepairTime).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mapTo)(Object.assign(Object.assign({}, carRepair), { state: carRepair.state === 'New' ? 'In progress' : 'Done' })));
    }
}
CarRepairsListService.ɵfac = function CarRepairsListService_Factory(t) { return new (t || CarRepairsListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_car_repairs_module__WEBPACK_IMPORTED_MODULE_0__.FAKE_CAR_REPAIRS)); };
CarRepairsListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CarRepairsListService, factory: CarRepairsListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9859:
/*!************************************************!*\
  !*** ./src/app/pizzeria/car-repairs.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FAKE_CAR_REPAIRS": () => (/* binding */ FAKE_CAR_REPAIRS),
/* harmony export */   "PizzeriaModule": () => (/* binding */ PizzeriaModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/reducers */ 3219);
/* harmony import */ var _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders-list/orders-list.component */ 4921);
/* harmony import */ var _landing_dashboard_landing_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-dashboard/landing-dashboard.component */ 5243);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 275);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _dashboard_statistic_dashboard_statistic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-statistic/dashboard-statistic.component */ 677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _list_column_list_column_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-column/list-column.component */ 3088);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _fake_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fake-data */ 986);
/* harmony import */ var _store_effects_car_repairs_list_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects/car-repairs-list.effects */ 588);



















const FAKE_CAR_REPAIRS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.InjectionToken('Fake data');
class PizzeriaModule {
}
PizzeriaModule.ɵfac = function PizzeriaModule_Factory(t) { return new (t || PizzeriaModule)(); };
PizzeriaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PizzeriaModule });
PizzeriaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: FAKE_CAR_REPAIRS,
            useValue: _fake_data__WEBPACK_IMPORTED_MODULE_5__.allRepairs,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreModule.forFeature(_store_reducers__WEBPACK_IMPORTED_MODULE_0__.carRepairsFeatureKey, _store_reducers__WEBPACK_IMPORTED_MODULE_0__.reducers),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.EffectsModule.forFeature([
                _store_effects_car_repairs_list_effects__WEBPACK_IMPORTED_MODULE_6__.CarRepairsListEffects,
            ]),
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PizzeriaModule, { declarations: [_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__.OrdersListComponent,
        _landing_dashboard_landing_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.LandingDashboardComponent,
        _dashboard_statistic_dashboard_statistic_component__WEBPACK_IMPORTED_MODULE_3__.DashboardStatisticComponent,
        _list_column_list_column_component__WEBPACK_IMPORTED_MODULE_4__.ListColumnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.EffectsFeatureModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule], exports: [_landing_dashboard_landing_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.LandingDashboardComponent] }); })();


/***/ }),

/***/ 677:
/*!*******************************************************************************!*\
  !*** ./src/app/pizzeria/dashboard-statistic/dashboard-statistic.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardStatisticComponent": () => (/* binding */ DashboardStatisticComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DashboardStatisticComponent {
    constructor() {
        this.value = null;
        this.label = '';
    }
}
DashboardStatisticComponent.ɵfac = function DashboardStatisticComponent_Factory(t) { return new (t || DashboardStatisticComponent)(); };
DashboardStatisticComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardStatisticComponent, selectors: [["app-dashboard-statistic"]], inputs: { value: "value", label: "label" }, decls: 5, vars: 2, consts: [[1, "container"], [1, "mat-title"], [1, "mat-subheading-2"]], template: function DashboardStatisticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1zdGF0aXN0aWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJkYXNoYm9hcmQtc3RhdGlzdGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 986:
/*!***************************************!*\
  !*** ./src/app/pizzeria/fake-data.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newRepairs": () => (/* binding */ newRepairs),
/* harmony export */   "inProgressRepairs": () => (/* binding */ inProgressRepairs),
/* harmony export */   "doneRepairs": () => (/* binding */ doneRepairs),
/* harmony export */   "allRepairs": () => (/* binding */ allRepairs)
/* harmony export */ });
const newRepairs = [
    {
        jobNumber: '1',
        registrationPlate: 'AD 114315',
        car: 'Toyota Camry',
        jobType: 'oil change',
        needsParts: false,
        state: 'New',
    },
    {
        jobNumber: '2',
        registrationPlate: 'GE 161345',
        car: 'BMW z5',
        jobType: 'fix breaks',
        needsParts: true,
        state: 'New',
    },
];
const inProgressRepairs = [
    {
        jobNumber: '3',
        registrationPlate: 'ER 13005',
        car: 'Opel Zafira',
        jobType: 'replace windshield',
        needsParts: true,
        state: 'In progress',
    },
];
const doneRepairs = [
    {
        jobNumber: '4',
        registrationPlate: 'XF 662341',
        car: 'Opel Astra',
        jobType: 'engine diagnosis',
        needsParts: false,
        state: 'Done',
    },
];
const allRepairs = [
    ...newRepairs,
    ...doneRepairs,
    ...inProgressRepairs,
];


/***/ }),

/***/ 5243:
/*!***************************************************************************!*\
  !*** ./src/app/pizzeria/landing-dashboard/landing-dashboard.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingDashboardComponent": () => (/* binding */ LandingDashboardComponent)
/* harmony export */ });
/* harmony import */ var _store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/selectors/car-repairs.selectors */ 964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _dashboard_statistic_dashboard_statistic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-statistic/dashboard-statistic.component */ 677);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);







function LandingDashboardComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-dashboard-statistic", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-dashboard-statistic", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-dashboard-statistic", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "To do")("value", ctx_r0.newCars);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "In Progress")("value", ctx_r0.inProgCars);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Done")("value", ctx_r0.doneCars);
} }
function LandingDashboardComponent_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner");
} }
class LandingDashboardComponent {
    constructor(store) {
        // if(!this.fetched)
        //this.store.dispatch(fetchCarRepairsList());
        this.store = store;
        this.newCars = 0;
        this.inProgCars = 0;
        this.doneCars = 0;
        this.fetched = false;
    }
    ngOnInit() {
        this.store.select(_store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_0__.selectAllCarRepairs).subscribe((_) => {
            this.fetched = _.length ? true : false;
        });
        this.store.select(_store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_0__.selectTotalOfNewCarRepairs).subscribe((_) => {
            this.newCars = _;
        });
        this.store.select(_store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_0__.selectTotalOfInProgressCarRepairs).subscribe((_) => {
            this.inProgCars = _;
        });
        this.store.select(_store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_0__.selectTotalOfDoneCarRepairs).subscribe((_) => {
            this.doneCars = _;
        });
    }
}
LandingDashboardComponent.ɵfac = function LandingDashboardComponent_Factory(t) { return new (t || LandingDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
LandingDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LandingDashboardComponent, selectors: [["landing-dashboard"]], decls: 7, vars: 2, consts: [[4, "ngIf"], [3, "label", "value"]], template: function LandingDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Car Repairs Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LandingDashboardComponent_ng_container_5_Template, 4, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LandingDashboardComponent_mat_spinner_6_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fetched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.fetched);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _dashboard_statistic_dashboard_statistic_component__WEBPACK_IMPORTED_MODULE_1__.DashboardStatisticComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatSpinner], styles: ["mat-card-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImxhbmRpbmctZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3088:
/*!***************************************************************!*\
  !*** ./src/app/pizzeria/list-column/list-column.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListColumnComponent": () => (/* binding */ ListColumnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);







function ListColumnComponent_mat_card_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Needs parts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListColumnComponent_mat_card_3_mat_card_actions_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListColumnComponent_mat_card_3_mat_card_actions_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const repair_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.advance(repair_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");
} }
function ListColumnComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "directions_car");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListColumnComponent_mat_card_3_div_12_Template, 5, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListColumnComponent_mat_card_3_mat_card_actions_13_Template, 4, 1, "mat-card-actions", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repair_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repair_r1.jobType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repair_r1.registrationPlate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repair_r1.car);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", repair_r1.needsParts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.canAdvance);
} }
class ListColumnComponent {
    constructor() {
        this.name = '';
        this.repairs = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
        this.canAdvance = false;
        this.advanceRepair = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    advance(repair) {
        this.advanceRepair.emit(repair);
    }
}
ListColumnComponent.ɵfac = function ListColumnComponent_Factory(t) { return new (t || ListColumnComponent)(); };
ListColumnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListColumnComponent, selectors: [["app-list-column"]], inputs: { name: "name", repairs: "repairs", canAdvance: "canAdvance" }, outputs: { advanceRepair: "advanceRepair" }, decls: 5, vars: 4, consts: [[1, "column"], [4, "ngFor", "ngForOf"], [1, "icon-text-container"], ["class", "icon-text-container", 4, "ngIf"], [3, "align", 4, "ngIf"], [3, "align"], ["mat-mini-fab", "", 3, "click"]], template: function ListColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListColumnComponent_mat_card_3_Template, 14, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.repairs));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe], styles: [".column[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  width: 300px;\r\n  background-color: #e8e8e8;\r\n}\r\n\r\n.column[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.icon-text-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.icon-text-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJsaXN0LWNvbHVtbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHVtbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbn1cclxuXHJcbi5jb2x1bW4gPiBtYXQtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24tdGV4dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5pY29uLXRleHQtY29udGFpbmVyID4gc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4921:
/*!***************************************************************!*\
  !*** ./src/app/pizzeria/orders-list/orders-list.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersListComponent": () => (/* binding */ OrdersListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var _store_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions/car-repairs-list.actions */ 7851);
/* harmony import */ var _store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/selectors/car-repairs.selectors */ 964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _list_column_list_column_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-column/list-column.component */ 3088);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);








function OrdersListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-list-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("advanceRepair", function OrdersListComponent_div_1_Template_app_list_column_advanceRepair_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.advanceCarRepair($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-list-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("advanceRepair", function OrdersListComponent_div_1_Template_app_list_column_advanceRepair_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.advanceCarRepair($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-list-column", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("advanceRepair", function OrdersListComponent_div_1_Template_app_list_column_advanceRepair_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.advanceCarRepair($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("canAdvance", true)("repairs", ctx_r0.newCars);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("canAdvance", true)("repairs", ctx_r0.inProgCars);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("canAdvance", false)("repairs", ctx_r0.doneCars);
} }
function OrdersListComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner");
} }
class OrdersListComponent {
    constructor(store) {
        //this.store.dispatch(fetchCarRepairsList());
        this.store = store;
        this.fetched = false;
        this.totalCars = [];
        this.newCars = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
        this.inProgCars = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
        this.doneCars = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    }
    ngOnInit() {
        this.store.select(_store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllCarRepairs).subscribe((_) => {
            this.totalCars = _;
            this.fetched = this.totalCars.length ? true : false;
        });
        this.newCars = this.store.select(_store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_1__.selectNewRepairs);
        this.inProgCars = this.store.select(_store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_1__.selectInProgressRepairs);
        this.doneCars = this.store.select(_store_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_1__.selectDoneRepairs);
        // this.store.select(selectNewRepairs).subscribe((_) => 
        // {
        //   this.newCars = _;
        // });
        // this.store.select(selectInProgressRepairs).subscribe((_) => 
        // {
        //   this.inProgCars = _;
        // });
        // this.store.select(selectDoneRepairs).subscribe((_) => 
        // {
        //   this.doneCars = _;
        // });
    }
    advanceCarRepair(carRepair) {
        this.store.dispatch((0,_store_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.advanceCarRepair)({ carRepair: carRepair }));
    }
}
OrdersListComponent.ɵfac = function OrdersListComponent_Factory(t) { return new (t || OrdersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
OrdersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OrdersListComponent, selectors: [["app-orders-list"]], decls: 3, vars: 2, consts: [[1, "container"], ["class", "board", 4, "ngIf"], [4, "ngIf"], [1, "board"], ["name", "New", 3, "canAdvance", "repairs", "advanceRepair"], ["name", "In Progress", 3, "canAdvance", "repairs", "advanceRepair"], ["name", "Done", 3, "canAdvance", "repairs", "advanceRepair"]], template: function OrdersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OrdersListComponent_div_1_Template, 4, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, OrdersListComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fetched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.fetched);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _list_column_list_column_component__WEBPACK_IMPORTED_MODULE_2__.ListColumnComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatSpinner], styles: [".container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.board[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmIiwiZmlsZSI6Im9yZGVycy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7851:
/*!********************************************************************!*\
  !*** ./src/app/pizzeria/store/actions/car-repairs-list.actions.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCarRepairsList": () => (/* binding */ fetchCarRepairsList),
/* harmony export */   "fetchCarRepairsListSuccess": () => (/* binding */ fetchCarRepairsListSuccess),
/* harmony export */   "fetchCarRepairsListFail": () => (/* binding */ fetchCarRepairsListFail),
/* harmony export */   "advanceCarRepair": () => (/* binding */ advanceCarRepair),
/* harmony export */   "advanceCarRepairSuccess": () => (/* binding */ advanceCarRepairSuccess),
/* harmony export */   "advanceCarRepairFail": () => (/* binding */ advanceCarRepairFail)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 7562);

const fetchCarRepairsList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CarRepairsList] Fetch Car Repairs List');
const fetchCarRepairsListSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CarRepairsList] Fetch Car Repairs List Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchCarRepairsListFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CarRepairsList] Fetch Car Repairs List Fail');
const advanceCarRepair = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CarRepairsList] Advance Car Repair', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const advanceCarRepairSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CarRepairsList] Advance Car Repair Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const advanceCarRepairFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[CarRepairsList] Advance Car Repair Fail');


/***/ }),

/***/ 588:
/*!********************************************************************!*\
  !*** ./src/app/pizzeria/store/effects/car-repairs-list.effects.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairsListEffects": () => (/* binding */ CarRepairsListEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 275);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/car-repairs-list.actions */ 7851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _car_repairs_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../car-repairs-list.service */ 9437);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 7562);








class CarRepairsListEffects {
    constructor(actions$, carRepairsListService, store) {
        this.actions$ = actions$;
        this.carRepairsListService = carRepairsListService;
        this.store = store;
        this.fetchCarRepairsList = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCarRepairsList), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.carRepairsListService.fetchCarRepairs().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_) => _actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCarRepairsListSuccess({ carRepair: _ }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCarRepairsListFail())))))));
        this.advanceCarRepair = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.advanceCarRepair), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((data) => this.carRepairsListService.advanceCarRepair(data.carRepair).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_) => _actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.advanceCarRepairSuccess({ carRepair: _ }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.advanceCarRepairFail())))))));
    }
}
CarRepairsListEffects.ɵfac = function CarRepairsListEffects_Factory(t) { return new (t || CarRepairsListEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_car_repairs_list_service__WEBPACK_IMPORTED_MODULE_1__.CarRepairsListService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
CarRepairsListEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: CarRepairsListEffects, factory: CarRepairsListEffects.ɵfac });


/***/ }),

/***/ 7224:
/*!*********************************************************************!*\
  !*** ./src/app/pizzeria/store/reducers/car-repairs-list.reducer.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carRepairsListFeatureKey": () => (/* binding */ carRepairsListFeatureKey),
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 2440);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/car-repairs-list.actions */ 7851);



const carRepairsListFeatureKey = 'carRepairsList';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
    selectId: (_) => _.jobNumber
});
const initialState = adapter.getInitialState({
    isFetching: false,
    hasError: false,
    hasFetched: false,
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, 
// on(carRepairsListActions.fetchCarRepairsListSuccess, (state, cars) => adapter.addMany(cars.carRepair, state)),
// on(carRepairsListActions.advanceCarRepairSuccess, (state, action) => {
//   return adapter.updateOne({id : action.carRepair.jobNumber, changes: action.carRepair}, state)
// }),
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCarRepairsListSuccess, (state, cars) => adapter.addMany(cars.carRepair, Object.assign(Object.assign({}, state), { hasFetched: true, hasError: false }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.advanceCarRepairSuccess, (state, action) => {
    return adapter.updateOne({ id: action.carRepair.jobNumber, changes: action.carRepair }, Object.assign(Object.assign({}, state), { hasFetched: true, hasError: false }));
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCarRepairsListFail, (state, action) => {
    return Object.assign(Object.assign({}, state), { hasError: true, hasFetched: false });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.advanceCarRepairFail, (state, action) => {
    return Object.assign(Object.assign({}, state), { hasError: true, hasFetched: false });
}));


/***/ }),

/***/ 3219:
/*!**************************************************!*\
  !*** ./src/app/pizzeria/store/reducers/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carRepairsFeatureKey": () => (/* binding */ carRepairsFeatureKey),
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _car_repairs_list_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-repairs-list.reducer */ 7224);

const carRepairsFeatureKey = 'carRepairs';
const reducers = {
    [_car_repairs_list_reducer__WEBPACK_IMPORTED_MODULE_0__.carRepairsListFeatureKey]: _car_repairs_list_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer,
};


/***/ }),

/***/ 3393:
/*!*****************************************************************!*\
  !*** ./src/app/pizzeria/store/resolvers/car-repairs.resolve.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRepairsResolve": () => (/* binding */ CarRepairsResolve)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/car-repairs-list.actions */ 7851);
/* harmony import */ var _selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors/car-repairs.selectors */ 964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 7562);





class CarRepairsResolve {
    constructor(store) {
        this.store = store;
        //this.store.dispatch(fetchCarRepairsList());
    }
    // resolve(route: ActivatedRouteSnapshot) {
    //   return this.store.pipe(
    //     select(selectIsFetchingNeeded), 
    //     tap(data => {
    //       if(!data)
    //         this.store.dispatch(fetchCarRepairsList());
    //   }),
    //   filter(data => data),
    //   first()
    //   );
    // }
    resolve(route) {
        return this.store.select(_selectors_car_repairs_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsFetchingNeeded).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe((data) => {
            if (data)
                this.store.dispatch((0,_actions_car_repairs_list_actions__WEBPACK_IMPORTED_MODULE_0__.fetchCarRepairsList)());
        });
    }
}
CarRepairsResolve.ɵfac = function CarRepairsResolve_Factory(t) { return new (t || CarRepairsResolve)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
CarRepairsResolve.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CarRepairsResolve, factory: CarRepairsResolve.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 964:
/*!*******************************************************************!*\
  !*** ./src/app/pizzeria/store/selectors/car-repairs.selectors.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCarRepairsState": () => (/* binding */ selectCarRepairsState),
/* harmony export */   "selectCarRepairsListState": () => (/* binding */ selectCarRepairsListState),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectAllCarRepairs": () => (/* binding */ selectAllCarRepairs),
/* harmony export */   "selectIsFetching": () => (/* binding */ selectIsFetching),
/* harmony export */   "selectIsFetchingNeeded": () => (/* binding */ selectIsFetchingNeeded),
/* harmony export */   "selectNewRepairs": () => (/* binding */ selectNewRepairs),
/* harmony export */   "selectInProgressRepairs": () => (/* binding */ selectInProgressRepairs),
/* harmony export */   "selectDoneRepairs": () => (/* binding */ selectDoneRepairs),
/* harmony export */   "selectTotalOfNewCarRepairs": () => (/* binding */ selectTotalOfNewCarRepairs),
/* harmony export */   "selectTotalOfInProgressCarRepairs": () => (/* binding */ selectTotalOfInProgressCarRepairs),
/* harmony export */   "selectTotalOfDoneCarRepairs": () => (/* binding */ selectTotalOfDoneCarRepairs)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 7562);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/index */ 3219);
/* harmony import */ var _reducers_car_repairs_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/car-repairs-list.reducer */ 7224);



const selectCarRepairsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_reducers_index__WEBPACK_IMPORTED_MODULE_0__.carRepairsFeatureKey);
const selectCarRepairsListState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCarRepairsState, state => state[_reducers_car_repairs_list_reducer__WEBPACK_IMPORTED_MODULE_1__.carRepairsListFeatureKey]);
const { selectAll } = _reducers_car_repairs_list_reducer__WEBPACK_IMPORTED_MODULE_1__.adapter.getSelectors();
const selectAllCarRepairs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCarRepairsListState, selectAll);
const selectIsFetching = undefined; // TODO: implement
const selectIsFetchingNeeded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectCarRepairsListState, (state) => {
    return !state.hasFetched || state.hasError;
});
const selectNewRepairs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAllCarRepairs, (data) => {
    return data.filter(_ => _.state == "New");
});
const selectInProgressRepairs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAllCarRepairs, (data) => {
    return data.filter(_ => _.state == "In progress");
});
const selectDoneRepairs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAllCarRepairs, (data) => {
    return data.filter(_ => _.state == "Done");
});
const selectTotalOfNewCarRepairs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectNewRepairs, (data) => {
    return data.length;
});
const selectTotalOfInProgressCarRepairs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectInProgressRepairs, (data) => {
    return data.length;
});
const selectTotalOfDoneCarRepairs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectDoneRepairs, (data) => {
    return data.length;
});


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map