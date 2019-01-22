(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n\t<!-- <div class=\"side-bar\">\n\t\t<ul class=\"nav flex-column\">\n\t  \t<li class=\"nav-item\">\n\t    \t<a class=\"nav-link active\" routerLink=\"home\">\n\t\t\t\t\t<ion-icon name=\"list\"></ion-icon>\n\t\t\t\t</a>\n\t  \t</li>\n\t  \t<li class=\"nav-item\">\n\t    \t<a class=\"nav-link\" routerLink=\"new-user\">\n\t\t\t\t\t<ion-icon name=\"add\"></ion-icon>\n\t\t\t</a>\n\t\t\t<a class=\"nav-link\" routerLink=\"category-pick\">\n\t\t\t\t<ion-icon name=\"add\"></ion-icon>\n\t\t\t</a>\n\t  \t</li>\n\t\t</ul>\n\t</div> -->\n\t<div class=\"content-container\">\n \t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  display: grid;\n  grid-template-columns: 60px auto;\n  height: 100%;\n  padding: 0px; }\n  .page-container .side-bar {\n    background: #252223; }\n  .page-container .side-bar .nav-link {\n      color: #FFF;\n      font-size: 28px; }\n  .page-container .content-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvdHN5L2JpZ1RhbGtBcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsaUNBQWdDO0VBQ2hDLGFBQVk7RUFDWixhQUFZLEVBaUJiO0VBckJEO0lBT0ksb0JBQW1CLEVBTXBCO0VBYkg7TUFVTSxZQUFXO01BQ1gsZ0JBQWUsRUFDaEI7RUFaTDtJQWdCSSxjQUFhO0lBQ2Isd0JBQXVCO0lBQ3ZCLG9CQUFtQjtJQUNuQixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG5cbiAgLnNpZGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjUyMjIzO1xuXG4gICAgLm5hdi1saW5rIHtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular6-firebase-crud';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./avatar-dialog/avatar-dialog.component */ "./src/app/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-user/edit-user.resolver */ "./src/app/edit-user/edit-user.resolver.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _category_pick_category_pick_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./category-pick/category-pick.component */ "./src/app/category-pick/category-pick.component.ts");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/esm5/angular-archwizard.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ngx_input_flow__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-input-flow */ "./node_modules/ngx-input-flow/index.js");
/* harmony import */ var _show_all_show_all_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./show-all/show-all.component */ "./src/app/show-all/show-all.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./thanks/thanks.component */ "./src/app/thanks/thanks.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AvatarDialogComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__["EditUserComponent"],
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__["NewUserComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _category_pick_category_pick_component__WEBPACK_IMPORTED_MODULE_18__["CategoryPickComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _show_all_show_all_component__WEBPACK_IMPORTED_MODULE_23__["ShowAllComponent"],
                _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_25__["ThanksComponent"]
            ],
            entryComponents: [_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AvatarDialogComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_19__["ArchwizardModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_21__["TagInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                ngx_input_flow__WEBPACK_IMPORTED_MODULE_22__["InputFlowModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], { useHash: false }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            ],
            providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_15__["FirebaseService"], _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_9__["EditUserResolver"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-user/new-user.component */ "./src/app/new-user/new-user.component.ts");
/* harmony import */ var _category_pick_category_pick_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-pick/category-pick.component */ "./src/app/category-pick/category-pick.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thanks/thanks.component */ "./src/app/thanks/thanks.component.ts");
/* harmony import */ var _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user/edit-user.resolver */ "./src/app/edit-user/edit-user.resolver.ts");






var rootRouterConfig = [
    { path: '', component: _category_pick_category_pick_component__WEBPACK_IMPORTED_MODULE_2__["CategoryPickComponent"] },
    { path: 'home', component: _category_pick_category_pick_component__WEBPACK_IMPORTED_MODULE_2__["CategoryPickComponent"] },
    { path: 'new-user', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_1__["NewUserComponent"] },
    { path: 'thanks', component: _thanks_thanks_component__WEBPACK_IMPORTED_MODULE_4__["ThanksComponent"] },
    { path: 'show-all', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'details/:id', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__["EditUserComponent"], resolve: { data: _edit_user_edit_user_resolver__WEBPACK_IMPORTED_MODULE_5__["EditUserResolver"] } }
];


/***/ }),

/***/ "./src/app/avatar-dialog/avatar-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/avatar-dialog/avatar-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Select Avatar</h5>\n    </div>\n  </div>\n  <div class=\"d-flex align-content-center flex-wrap\">\n    <div *ngFor=\"let avatar of avatars\">\n      <img class=\"img-thumbnail\" [src]=avatar.link (click)= \"close(avatar)\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/avatar-dialog/avatar-dialog.component.scss":
/*!************************************************************!*\
  !*** ./src/app/avatar-dialog/avatar-dialog.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvdHN5L2JpZ1RhbGtBcHAvc3JjL2FwcC9hdmF0YXItZGlhbG9nL2F2YXRhci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2F2YXRhci1kaWFsb2cvYXZhdGFyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/avatar-dialog/avatar-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/avatar-dialog/avatar-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: AvatarDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarDialogComponent", function() { return AvatarDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AvatarDialogComponent = /** @class */ (function () {
    function AvatarDialogComponent(dialogRef, firebaseService) {
        this.dialogRef = dialogRef;
        this.firebaseService = firebaseService;
        this.avatars = new Array();
    }
    AvatarDialogComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AvatarDialogComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getAvatars()
            .subscribe(function (data) { return _this.avatars = data; });
    };
    AvatarDialogComponent.prototype.close = function (avatar) {
        this.dialogRef.close(avatar);
    };
    AvatarDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avatar-dialog',
            template: __webpack_require__(/*! ./avatar-dialog.component.html */ "./src/app/avatar-dialog/avatar-dialog.component.html"),
            styles: [__webpack_require__(/*! ./avatar-dialog.component.scss */ "./src/app/avatar-dialog/avatar-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], AvatarDialogComponent);
    return AvatarDialogComponent;
}());



/***/ }),

/***/ "./src/app/category-pick/category-pick.component.html":
/*!************************************************************!*\
  !*** ./src/app/category-pick/category-pick.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group users-list\">\n    <div *ngFor=\"let item of items\">\n          <a [routerLink]=\"['/new-user']\" [queryParams]=\"{ cat: item.payload.doc.data().name }\">\n          <div class=\"cat-item\" style=\"overflow: hidden; background-color: rgba(0, 0, 0, 1);\">\n                <img src=\"{{item.payload.doc.data().image}}\" class=\"photo\" style=\"width: inherit; height: inherit; position: absolute; opacity: 0.7\">\n          <span style=\"z-index: 99999; color: white;  border-radius: 100px; padding: 10px;\">{{item.payload.doc.data().name}}</span>\n          </div>\n        </a>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/category-pick/category-pick.component.scss":
/*!************************************************************!*\
  !*** ./src/app/category-pick/category-pick.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cat-item {\n  text-align: center;\n  background: azure;\n  width: 150px;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  font-family: open sans;\n  margin: 10px;\n  border-radius: 500px;\n  padding: 50px !important;\n  position: relative; }\n\n.list-group.users-list {\n  max-width: 100vw;\n  min-height: 100vh;\n  flex-direction: inherit;\n  flex-wrap: wrap;\n  justify-content: center; }\n\na:hover {\n  text-decoration: none !important; }\n\na:hover div.cat-item {\n  background-color: red;\n  transition-duration: 1s; }\n\nbody {\n  margin: 0;\n  background: white;\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvdHN5L2JpZ1RhbGtBcHAvc3JjL2FwcC9jYXRlZ29yeS1waWNrL2NhdGVnb3J5LXBpY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixjQUFhO0VBQ2IsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1oscUJBQW9CO0VBQ3BCLHlCQUF3QjtFQUN4QixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLGlDQUFnQyxFQUNuQzs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQix3QkFBdUIsRUFDMUI7O0FBR0Q7RUFDQyxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLGNBQWEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LXBpY2svY2F0ZWdvcnktcGljay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXQtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGF6dXJlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtZmFtaWx5OiBvcGVuIHNhbnM7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDUwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saXN0LWdyb3VwLnVzZXJzLWxpc3Qge1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5hOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciBkaXYuY2F0LWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuXG5ib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0aGVpZ2h0OiAxMDB2aDtcbiB9Il19 */"

/***/ }),

/***/ "./src/app/category-pick/category-pick.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/category-pick/category-pick.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryPickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPickComponent", function() { return CategoryPickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CategoryPickComponent = /** @class */ (function () {
    function CategoryPickComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.ageValue = 0;
        this.searchValue = "";
    }
    CategoryPickComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    CategoryPickComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getParameters()
            .subscribe(function (result) {
            _this.items = result;
            _this.age_filtered_items = result;
            _this.name_filtered_items = result;
        });
    };
    CategoryPickComponent.prototype.viewDetails = function (item) {
        this.router.navigate(['/details/' + item.payload.doc.id]);
    };
    CategoryPickComponent.prototype.capitalizeFirstLetter = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    CategoryPickComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.firebaseService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    CategoryPickComponent.prototype.rangeChange = function (event) {
        var _this = this;
        this.firebaseService.searchUsersByAge(event.value)
            .subscribe(function (result) {
            _this.age_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    CategoryPickComponent.prototype.combineLists = function (a, b) {
        var result = [];
        a.filter(function (x) {
            return b.filter(function (x2) {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    };
    CategoryPickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-pick',
            template: __webpack_require__(/*! ./category-pick.component.html */ "./src/app/category-pick/category-pick.component.html"),
            styles: [__webpack_require__(/*! ./category-pick.component.scss */ "./src/app/category-pick/category-pick.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CategoryPickComponent);
    return CategoryPickComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-page\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Edit User</li>\n    </ol>\n  </nav>\n  <div class=\"page-content\">\n    <div class=\"row\">\n      <div class=\"col col-md-4\">\n        <img class=\"img-avatar\" [src]=\"item.avatar\">\n        <button mat-stroked-button class=\"change-img-button\" color=\"primary\" (click)=\"openDialog()\">Change Avatar</button>\n      </div>\n      <div class=\"col col-md-8\">\n\n        <form class=\"edit-form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value)\">\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n              <mat-error *ngIf=\"exampleForm.get('name').hasError(validation.type) && (exampleForm.get('name').dirty || exampleForm.get('name').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Surname\" class=\"form-control\" formControlName=\"surname\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.surname\">\n              <mat-error *ngIf=\"exampleForm.get('surname').hasError(validation.type) && (exampleForm.get('surname').dirty || exampleForm.get('surname').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput type=\"number\" min=\"0\" max=\"100\" placeholder=\"Age\" class=\"form-control\" formControlName=\"age\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.age\">\n              <mat-error *ngIf=\"exampleForm.get('age').hasError(validation.type) && (exampleForm.get('age').dirty || exampleForm.get('age').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"row submit-button-container\">\n            <div class=\"col-md-4\">\n              <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\" [disabled]=\"!exampleForm.valid\">Save</button>\n            </div>\n            <div class=\"col-md-4\">\n              <button mat-raised-button class=\"delete-button\" color=\"warn\" type=\"button\" (click)=\"delete()\">Delete</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.scss":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-page {\n  padding: 20px 60px; }\n  .edit-page .page-content {\n    background-color: #FFF; }\n  .edit-page .page-content .img-avatar {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .edit-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .edit-page .page-content .edit-form {\n      padding: 20px; }\n  .edit-page .page-content .edit-form .submit-button-container {\n        justify-content: flex-end; }\n  .edit-page .page-content .edit-form .submit-button-container .submit-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .submit-button-container .delete-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .input-style {\n        width: 100%; }\n  .edit-page .page-content .edit-form .mat-error {\n        font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvdHN5L2JpZ1RhbGtBcHAvc3JjL2FwcC9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsbUJBQWtCLEVBMENuQjtFQTVDRDtJQUtJLHVCQUFzQixFQXNDdkI7RUEzQ0g7TUFRTSxtQkFBa0I7TUFDbEIsYUFBWTtNQUNaLGVBQWM7TUFDZCxrQkFBaUIsRUFDbEI7RUFaTDtNQWVNLGVBQWM7TUFDZCxpQkFBZ0IsRUFDakI7RUFqQkw7TUFvQk0sY0FBYSxFQXNCZDtFQTFDTDtRQXdCUSwwQkFBeUIsRUFTMUI7RUFqQ1A7VUEyQlUsWUFBVyxFQUNaO0VBNUJUO1VBK0JVLFlBQVcsRUFDWjtFQWhDVDtRQW9DUSxZQUFXLEVBQ1o7RUFyQ1A7UUF3Q1EsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtcGFnZSB7XG5cbiAgcGFkZGluZzogMjBweCA2MHB4O1xuXG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG5cbiAgICAuaW1nLWF2YXRhciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIH1cblxuICAgIC5jaGFuZ2UtaW1nLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgfVxuXG4gICAgLmVkaXQtZm9ybSB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG5cbiAgICAgIC5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgLnN1Ym1pdC1idXR0b257XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVsZXRlLWJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5wdXQtc3R5bGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAubWF0LWVycm9yIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../avatar-dialog/avatar-dialog.component */ "./src/app/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");








var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(firebaseService, route, fb, router, dialog) {
        this.firebaseService = firebaseService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'surname': [
                { type: 'required', message: 'Surname is required.' }
            ],
            'age': [
                { type: 'required', message: 'Age is required.' },
            ]
        };
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.item = data.payload.data();
                _this.item.id = data.payload.id;
                _this.createForm();
            }
        });
    };
    EditUserComponent.prototype.createForm = function () {
        this.exampleForm = this.fb.group({
            name: [this.item.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            surname: [this.item.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: [this.item.age, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditUserComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AvatarDialogComponent"], {
            height: '400px',
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.item.avatar = result.link;
            }
        });
    };
    EditUserComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value.avatar = this.item.avatar;
        value.age = Number(value.age);
        this.firebaseService.updateUser(this.item.id, value)
            .then(function (res) {
            _this.router.navigate(['/home']);
        });
    };
    EditUserComponent.prototype.delete = function () {
        var _this = this;
        this.firebaseService.deleteUser(this.item.id)
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    EditUserComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/edit-user/edit-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-user/edit-user.resolver.ts ***!
  \*************************************************/
/*! exports provided: EditUserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserResolver", function() { return EditUserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



var EditUserResolver = /** @class */ (function () {
    function EditUserResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    EditUserResolver.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userId = route.paramMap.get('id');
            _this.firebaseService.getUser(userId)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    EditUserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], EditUserResolver);
    return EditUserResolver;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html ng-app=\"bigTalkApp\">\n\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>AngularJS Plunker</title>\n    <script>document.write('<base href=\"' + document.location + '\" />');</script>\n    <script data-require=\"angular.js@1.2.x\" src=\"https://code.angularjs.org/1.2.16/angular.js\" data-semver=\"1.2.16\"></script>\n    <script src=\"app.js\"></script>\n  </head>\n\n  <body>\n<div class=\"create-page\">\n        <nav aria-label=\"breadcrumb\">\n          <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Create User</li>\n          </ol>\n        </nav>\n        <div class=\"page-content\">\n          <div class=\"row\">\n            <div class=\"col col-md-8\">\n                    <form class=\"create-form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value)\">\n                    <aw-wizard disableNavigationBar=\"true\">\n                            <aw-wizard-step stepTitle=\"\">\n                                    <div class=\"form-group\">\n                                            <mat-form-field class=\"input-style\">\n                                              <input matInput placeholder=\"Category\" class=\"form-control\" formControlName=\"category\" value=\"{{this.cat}}\">\n                                            </mat-form-field>\n                                          </div>\n\n                                    <div class=\"form-group\">\n                                            <mat-form-field class=\"input-style\">\n                                              <input matInput placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\n                                            </mat-form-field>\n                                          </div>\n                                \n\n                              <button type=\"button\" awPreviousStep>Go to previous step</button>\n                              <button type=\"button\" awNextStep>Go to next step</button>\n                            </aw-wizard-step>\n                            <aw-wizard-step stepTitle=\"\">\n                                    <div class=\"form-group\">\n\n                                            <mat-form-field class=\"input-style\">\n                                                    <input matInput type=\"tags\" placeholder=\"Questions\" class=\"form-control\" formControlName=\"questions\">\n                                                  </mat-form-field>\n      \n\n                                                  </div>\n                                                                       \n                                    <button type=\"button\" awPreviousStep>Go to previous step</button>\n                                    <button type=\"button\" awNextStep>Go to next step</button>\n                                  </aw-wizard-step>\n                            <aw-wizard-step stepTitle=\"\">\n                              \n                                    <div class=\"form-group\">\n                                            <mat-form-field class=\"input-style\">\n                                              <input matInput placeholder=\"Facts\" class=\"form-control\" formControlName=\"facts\">\n                                            </mat-form-field>\n                                          </div>\n                                \n\n                              <button type=\"button\" awPreviousStep>Previous Step</button>\n                              <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\" [disabled]=\"!exampleForm.valid\">Create</button>\n                            </aw-wizard-step>\n\n                            \n                          </aw-wizard>\n\n                              </form>\n\n                                                    \n                        \n                          \n\n            </div>\n          </div>\n        </div>\n      </div>\n    </body>\n\n    </html>\n    "

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-page {\n  padding: 20px 60px; }\n  .create-page .page-content {\n    background-color: #FFF; }\n  .create-page .page-content .img-avatar {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .create-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .create-page .page-content .create-form {\n      padding: 20px; }\n  .create-page .page-content .create-form .submit-button-container {\n        justify-content: flex-end; }\n  .create-page .page-content .create-form .submit-button-container .submit-button {\n          width: 100%; }\n  .create-page .page-content .create-form .input-style {\n        width: 100%; }\n  .create-page .page-content .create-form .mat-error {\n        font-size: 12px; }\n  .tags-input {\n  display: inline-block;\n  padding: 0 2px;\n  background: #FFF;\n  border: 1px solid #CCC;\n  width: 16em;\n  border-radius: 2px;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n  .tags-input .tag {\n  display: inline-block;\n  background: #EEE;\n  color: #444;\n  padding: 0 4px;\n  margin: 2px;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n  font: inherit;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  transition: all .1s ease; }\n  .tags-input .tag.selected {\n  background-color: #777;\n  border-color: #777;\n  color: #EEE; }\n  .tags-input .tag.dupe {\n  -webkit-transform: scale3d(1.2, 1.2, 1.2);\n  transform: scale3d(1.2, 1.2, 1.2);\n  background-color: #FCC;\n  border-color: #700; }\n  .tags-input input {\n  -webkit-appearance: none !important;\n  -moz-appearance: none !important;\n  appearance: none !important;\n  display: inline-block !important;\n  padding: 3px;\n  margin: 0 !important;\n  background: 0 0 !important;\n  border: none !important;\n  box-shadow: none !important;\n  font: inherit !important;\n  font-size: 100% !important;\n  outline: 0 !important; }\n  .tags-input .selected ~ input {\n  opacity: .3; }\n  /*# sourceMappingURL=tags-input.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvdHN5L2JpZ1RhbGtBcHAvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxtQkFBa0IsRUFzQ25CO0VBeENEO0lBS0ksdUJBQXNCLEVBa0N2QjtFQXZDSDtNQVFNLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osZUFBYztNQUNkLGtCQUFpQixFQUNsQjtFQVpMO01BZU0sZUFBYztNQUNkLGlCQUFnQixFQUNqQjtFQWpCTDtNQW9CTSxjQUFhLEVBa0JkO0VBdENMO1FBd0JRLDBCQUF5QixFQUsxQjtFQTdCUDtVQTJCVSxZQUFXLEVBQ1o7RUE1QlQ7UUFnQ1EsWUFBVyxFQUNaO0VBakNQO1FBb0NRLGdCQUFlLEVBQ2hCO0VBTVA7RUFBWSxzQkFBb0I7RUFBQyxlQUFhO0VBQUMsaUJBQWU7RUFBQyx1QkFBcUI7RUFBQyxZQUFVO0VBQUMsbUJBQWlCO0VBQUMsK0NBQXlDLEVBQUU7RUFBRDtFQUFpQixzQkFBb0I7RUFBQyxpQkFBZTtFQUFDLFlBQVU7RUFBQyxlQUFhO0VBQUMsWUFBVTtFQUFDLHVCQUFxQjtFQUFDLG1CQUFpQjtFQUFDLGNBQVk7RUFBQywwQkFBd0I7RUFBQyx1QkFBcUI7RUFBQyxzQkFBb0I7RUFBQyxrQkFBZ0I7RUFBQyxnQkFBYztFQUFDLHlCQUF1QixFQUFFO0VBQUQ7RUFBMEIsdUJBQXFCO0VBQUMsbUJBQWlCO0VBQUMsWUFBVSxFQUFFO0VBQUQ7RUFBc0IsMENBQXNDO0VBQUMsa0NBQThCO0VBQUMsdUJBQXFCO0VBQUMsbUJBQWlCLEVBQUU7RUFBRDtFQUFrQixvQ0FBaUM7RUFBQyxpQ0FBOEI7RUFBQyw0QkFBeUI7RUFBQyxpQ0FBOEI7RUFBQyxhQUFXO0VBQUMscUJBQWtCO0VBQUMsMkJBQXdCO0VBQUMsd0JBQXFCO0VBQUMsNEJBQXlCO0VBQUMseUJBQXNCO0VBQUMsMkJBQXdCO0VBQUMsc0JBQW1CLEVBQUU7RUFBRDtFQUE0QixZQUFVLEVBQUU7RUFDeDlCLDBDQUEwQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtcGFnZSB7XG5cbiAgcGFkZGluZzogMjBweCA2MHB4O1xuXG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG5cbiAgICAuaW1nLWF2YXRhciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIH1cblxuICAgIC5jaGFuZ2UtaW1nLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgfVxuXG4gICAgLmNyZWF0ZS1mb3JtIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG5cblxuICAgICAgLnN1Ym1pdC1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAuc3VibWl0LWJ1dHRvbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5wdXQtc3R5bGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAubWF0LWVycm9yIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi50YWdzLWlucHV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MCAycHg7YmFja2dyb3VuZDojRkZGO2JvcmRlcjoxcHggc29saWQgI0NDQzt3aWR0aDoxNmVtO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjEpfS50YWdzLWlucHV0IC50YWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmFja2dyb3VuZDojRUVFO2NvbG9yOiM0NDQ7cGFkZGluZzowIDRweDttYXJnaW46MnB4O2JvcmRlcjoxcHggc29saWQgI0NDQztib3JkZXItcmFkaXVzOjJweDtmb250OmluaGVyaXQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YWxsIC4xcyBlYXNlfS50YWdzLWlucHV0IC50YWcuc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojNzc3O2JvcmRlci1jb2xvcjojNzc3O2NvbG9yOiNFRUV9LnRhZ3MtaW5wdXQgLnRhZy5kdXBley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4yLDEuMiwxLjIpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMiwxLjIsMS4yKTtiYWNrZ3JvdW5kLWNvbG9yOiNGQ0M7Ym9yZGVyLWNvbG9yOiM3MDB9LnRhZ3MtaW5wdXQgaW5wdXR7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUhaW1wb3J0YW50Oy1tb3otYXBwZWFyYW5jZTpub25lIWltcG9ydGFudDthcHBlYXJhbmNlOm5vbmUhaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudDtwYWRkaW5nOjNweDttYXJnaW46MCFpbXBvcnRhbnQ7YmFja2dyb3VuZDowIDAhaW1wb3J0YW50O2JvcmRlcjpub25lIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O2ZvbnQ6aW5oZXJpdCFpbXBvcnRhbnQ7Zm9udC1zaXplOjEwMCUhaW1wb3J0YW50O291dGxpbmU6MCFpbXBvcnRhbnR9LnRhZ3MtaW5wdXQgLnNlbGVjdGVkfmlucHV0e29wYWNpdHk6LjN9XG4vKiMgc291cmNlTWFwcGluZ1VSTD10YWdzLWlucHV0LmNzcy5tYXAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.ageValue = 0;
        this.searchValue = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getUsers()
            .subscribe(function (result) {
            _this.items = result;
            _this.age_filtered_items = result;
            _this.name_filtered_items = result;
        });
    };
    HomeComponent.prototype.viewDetails = function (item) {
        this.router.navigate(['/details/' + item.payload.doc.id]);
    };
    HomeComponent.prototype.capitalizeFirstLetter = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    HomeComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.firebaseService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    HomeComponent.prototype.rangeChange = function (event) {
        var _this = this;
        this.firebaseService.searchUsersByAge(event.value)
            .subscribe(function (result) {
            _this.age_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    HomeComponent.prototype.combineLists = function (a, b) {
        var result = [];
        a.filter(function (x) {
            return b.filter(function (x2) {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/new-user/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html ng-app=\"bigTalkApp\">\n\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>AngularJS Plunker</title>\n    <script>document.write('<base href=\"' + document.location + '\" />');</script>\n    <script data-require=\"angular.js@1.2.x\" src=\"https://code.angularjs.org/1.2.16/angular.js\" data-semver=\"1.2.16\"></script>\n    <script src=\"app.js\"></script>\n  </head>\n\n  <body>\n<div class=\"create-page\">\n        <nav aria-label=\"breadcrumb\">\n          <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Music</li>\n          </ol>\n        </nav>\n        <div class=\"page-content\">\n          <div class=\"row\">\n            <div class=\"col col-md-8\">\n                    <form class=\"create-form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value)\">\n                    <aw-wizard disableNavigationBar=\"true\">\n                            <aw-wizard-step stepTitle=\"\">\n                                    <div class=\"form-group remove\">\n                                            <mat-form-field class=\"input-style\">\n                                              <input matInput placeholder=\"Category\" class=\"form-control\" formControlName=\"category\" value=\"{{this.cat}}\">\n                                            </mat-form-field>\n                                          </div>\n\n                                    <div class=\"form-group\">\n                                            <mat-form-field class=\"input-style\">\n                                              <input matInput placeholder=\"What would you like to talk about?\" class=\"form-control\" formControlName=\"name\">\n                                            </mat-form-field>\n                                            <p class=\"desc\">(for example: Taylor Swift, classical music, Drake)</p>\n                                          </div>\n                                \n\n                                          <button class=\"prev-btn\" type=\"button\" onclick=\"window.location.href='/'\" awPreviousStep><i class=\"fa fa-angle-left\"></i></button>\n                                          <button class=\"next-btn\" type=\"button\" awNextStep><i class=\"fa fa-angle-right\"></i></button>\n                            </aw-wizard-step>\n                            <aw-wizard-step stepTitle=\"\">\n                                    <div class=\"form-group\">\n\n                                            <mat-form-field class=\"input-style\">\n                                                    <input matInput rows=\"4\" placeholder=\"What would you like to ask?\" class=\"form-control\" formControlName=\"questions\">\n                                                  </mat-form-field>\n                                                  <p class=\"desc\">Keep it short and simple! (for example: Do you know Chopin? Who is your favorite artist? What is your favorite song?)</p>\n      \n\n                                                  </div>\n                                                                       \n                                                  <button class=\"prev-btn\" type=\"button\" awPreviousStep><i class=\"fa fa-angle-left\"></i></button>\n                                                  <button class=\"next-btn\" type=\"button\" awNextStep><i class=\"fa fa-angle-right\"></i></button>\n                                  </aw-wizard-step>\n                            <aw-wizard-step stepTitle=\"\">\n                              \n                                    <div class=\"form-group\">\n                                            <mat-form-field class=\"input-style\">\n                                              <input matInput placeholder=\"Would you like to add a fun fact?\" class=\"form-control\" formControlName=\"facts\">\n                                            </mat-form-field>\n                                            <p class=\"desc\">(for example: Frederic Chopin was a classical composer. He was born in Poland and played the piano)\n                                              </p>\n                                          </div>\n                                \n\n                              <button class=\"prev-btn\" type=\"button\" awPreviousStep><i class=\"fa fa-angle-left\"></i></button>\n                              <button mat-raised-button class=\"submit-button next-btn\" color=\"primary\" type=\"submit\" [disabled]=\"!exampleForm.valid\"><i class=\"fa fa-check\"></i></button>\n                            </aw-wizard-step>\n\n                            \n                          </aw-wizard>\n\n                              </form>\n\n                                                    \n                        \n                          \n\n            </div>\n          </div>\n        </div>\n      </div>\n    </body>\n\n    </html>\n    "

/***/ }),

/***/ "./src/app/new-user/new-user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/new-user/new-user.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  background: #9013FE;\n  height: 100vh !important;\n  width: 100vw !important;\n  position: static;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.create-page {\n  padding: 20px 20px;\n  box-shadow: 0px 0px 20px #00000020 !important;\n  background: white; }\n\n.create-page .page-content {\n    background-color: #FFF; }\n\n.create-page .page-content .img-avatar {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n\n.create-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n\n.create-page .page-content .create-form {\n      padding: 20px; }\n\n.create-page .page-content .create-form .submit-button-container {\n        justify-content: flex-end; }\n\n.create-page .page-content .create-form .submit-button-container .submit-button {\n          width: 100%; }\n\n.create-page .page-content .create-form .input-style {\n        width: 100%; }\n\n.create-page .page-content .create-form .mat-error {\n        font-size: 12px; }\n\nul.steps-indicator.steps-3 {\n  display: none !important; }\n\n.remove {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvdHN5L2JpZ1RhbGtBcHAvc3JjL2FwcC9uZXctdXNlci9uZXctdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFVBQVM7RUFDVCxvQkFBbUI7RUFDbkIseUJBQXdCO0VBQ3hCLHdCQUF1QjtFQUN2QixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUIsRUFFcEI7O0FBRUQ7RUFFRSxtQkFBa0I7RUFDbEIsOENBQTZDO0VBQzdDLGtCQUFpQixFQXNDbEI7O0FBMUNEO0lBT0ksdUJBQXNCLEVBa0N2Qjs7QUF6Q0g7TUFVTSxtQkFBa0I7TUFDbEIsYUFBWTtNQUNaLGVBQWM7TUFDZCxrQkFBaUIsRUFDbEI7O0FBZEw7TUFpQk0sZUFBYztNQUNkLGlCQUFnQixFQUNqQjs7QUFuQkw7TUFzQk0sY0FBYSxFQWtCZDs7QUF4Q0w7UUEwQlEsMEJBQXlCLEVBSzFCOztBQS9CUDtVQTZCVSxZQUFXLEVBQ1o7O0FBOUJUO1FBa0NRLFlBQVcsRUFDWjs7QUFuQ1A7UUFzQ1EsZ0JBQWUsRUFDaEI7O0FBTVA7RUFDRSx5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9uZXctdXNlci9uZXctdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogIzkwMTNGRTtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmNyZWF0ZS1wYWdlIHtcblxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjMDAwMDAwMjAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcblxuICAgIC5pbWctYXZhdGFyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgfVxuXG4gICAgLmNoYW5nZS1pbWctYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICB9XG5cbiAgICAuY3JlYXRlLWZvcm0ge1xuICAgICAgcGFkZGluZzogMjBweDtcblxuXG4gICAgICAuc3VibWl0LWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgIC5zdWJtaXQtYnV0dG9ue1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1zdHlsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZXJyb3Ige1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxudWwuc3RlcHMtaW5kaWNhdG9yLnN0ZXBzLTMge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZW1vdmUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/new-user/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../avatar-dialog/avatar-dialog.component */ "./src/app/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");








var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(fb, dialog, router, firebaseService, route) {
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.firebaseService = firebaseService;
        this.route = route;
        this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
        this.validation_messages = {
            'category': [
                { type: 'required', message: 'Name is required.' }
            ],
            'name': [
                { type: 'required', message: 'Surname is required.' }
            ],
            'questions': [
                { type: 'required', message: 'Age is required.' },
            ],
            'facts': [
                { type: 'required', message: 'Age is required.' },
            ]
        };
        this.ageValue = 0;
        this.searchValue = "";
    }
    NewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.getData();
        this.cat = this.route.snapshot.queryParamMap.get("cat");
        this.route.queryParamMap.subscribe(function (queryParams) {
            _this.cat = queryParams.get("cat");
        });
    };
    NewUserComponent.prototype.createForm = function () {
        this.exampleForm = this.fb.group({
            category: ['',],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            questions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            facts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    NewUserComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AvatarDialogComponent"], {
            height: '400px',
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.avatarLink = result.link;
            }
        });
    };
    NewUserComponent.prototype.resetFields = function () {
        this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
        this.exampleForm = this.fb.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            questions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            facts: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    NewUserComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value['category'] = this.cat;
        this.firebaseService.createUser(value, this.avatarLink)
            .then(function (res) {
            _this.resetFields();
            _this.router.navigate(['/thanks']);
        });
    };
    NewUserComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getParameters()
            .subscribe(function (result) {
            _this.items = result;
            _this.age_filtered_items = result;
            _this.name_filtered_items = result;
        });
    };
    NewUserComponent.prototype.viewDetails = function (item) {
        this.router.navigate(['/details/' + item.payload.doc.id]);
    };
    NewUserComponent.prototype.capitalizeFirstLetter = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    NewUserComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.firebaseService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    NewUserComponent.prototype.rangeChange = function (event) {
        var _this = this;
        this.firebaseService.searchUsersByAge(event.value)
            .subscribe(function (result) {
            _this.age_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    NewUserComponent.prototype.combineLists = function (a, b) {
        var result = [];
        a.filter(function (x) {
            return b.filter(function (x2) {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    };
    NewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.scss */ "./src/app/new-user/new-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getAvatars = function () {
        return this.db.collection('/avatar').valueChanges();
    };
    FirebaseService.prototype.getUser = function (userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    };
    FirebaseService.prototype.updateUser = function (userKey, value) {
        value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('users').doc(userKey).set(value);
    };
    FirebaseService.prototype.deleteUser = function (userKey) {
        return this.db.collection('users').doc(userKey).delete();
    };
    FirebaseService.prototype.getUsers = function () {
        return this.db.collection('users').snapshotChanges();
    };
    FirebaseService.prototype.getParameters = function () {
        return this.db.collection('Parameters').snapshotChanges();
    };
    FirebaseService.prototype.searchUsers = function (searchValue) {
        return this.db.collection('users', function (ref) { return ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'); })
            .snapshotChanges();
    };
    FirebaseService.prototype.searchCats = function (searchValue) {
        return this.db.collection('Parameters', function (ref) { return ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'); })
            .snapshotChanges();
    };
    FirebaseService.prototype.searchUsersByAge = function (value) {
        return this.db.collection('users', function (ref) { return ref.orderBy('category').startAt(value); }).snapshotChanges();
    };
    FirebaseService.prototype.createUser = function (value, avatar) {
        return this.db.collection('users').add({
            category: value.category,
            nameToSearch: value.name.toLowerCase(),
            name: value.name,
            questions: value.questions,
            facts: value.facts
        });
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/show-all/show-all.component.html":
/*!**************************************************!*\
  !*** ./src/app/show-all/show-all.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4 offset-md-1\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchValue\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Search by name...\" (keyup)=\"searchByName()\">\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text\"><ion-icon class=\"icon\" name=\"search\"></ion-icon></span>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"list-group users-list\">\n    <div *ngFor=\"let item of items\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"row\">\n        <div class=\"col col-md-2 image-col\">\n          <img class=\"image\" [src]=\"item.payload.doc.data().avatar\">\n        </div>\n        <div class=\"col col-md-8 text-col\">\n          <h5 class=\"mb-1\">{{item.payload.doc.data().name}} {{item.payload.doc.data().surname}}</h5>\n          <small>Age: {{item.payload.doc.data().age}}</small>\n        </div>\n        <div class=\"col col-md-2 actions-col\">\n          <button class=\"btn btn-outline-primary action\" (click)=\"viewDetails(item)\" type=\"button\">\n            <ion-icon class=\"icon\" name=\"arrow-round-forward\"></ion-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/show-all/show-all.component.scss":
/*!**************************************************!*\
  !*** ./src/app/show-all/show-all.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-by-age {\n  color: #6c757d; }\n  .filter-by-age .title {\n    align-self: center; }\n  .filter-by-age .age-slider {\n    width: 85%; }\n  .users-list {\n  padding: 40px 60px; }\n  .users-list .image-col {\n    text-align: center; }\n  .users-list .image-col .image {\n      border-radius: 50%;\n      width: 100px;\n      height: 100px; }\n  .users-list .text-col {\n    margin: auto 0px; }\n  .users-list .actions-col {\n    text-align: center;\n    margin: auto 0px; }\n  .users-list .actions-col .action {\n      line-height: 1; }\n  .users-list .actions-col .icon {\n      font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvdHN5L2JpZ1RhbGtBcHAvc3JjL2FwcC9zaG93LWFsbC9zaG93LWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWMsRUFTZjtFQVZIO0lBSU0sbUJBQWtCLEVBQ25CO0VBTEw7SUFRTSxXQUFVLEVBQ1g7RUFHSDtFQUNFLG1CQUFrQixFQXlCbkI7RUExQkQ7SUFJSSxtQkFBaUIsRUFPbEI7RUFYSDtNQU9NLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osY0FBYSxFQUNkO0VBVkw7SUFhSSxpQkFBZ0IsRUFDakI7RUFkSDtJQWdCSSxtQkFBa0I7SUFDbEIsaUJBQWdCLEVBUWpCO0VBekJIO01Bb0JNLGVBQWMsRUFDZjtFQXJCTDtNQXVCTSxnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctYWxsL3Nob3ctYWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1ieS1hZ2Uge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICBcbiAgICAudGl0bGUge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgXG4gICAgLmFnZS1zbGlkZXIge1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG4gIH1cbiAgXG4gIC51c2Vycy1saXN0IHtcbiAgICBwYWRkaW5nOiA0MHB4IDYwcHg7XG4gIFxuICAgIC5pbWFnZS1jb2wge1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIFxuICAgICAgLmltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC50ZXh0LWNvbCB7XG4gICAgICBtYXJnaW46IGF1dG8gMHB4O1xuICAgIH1cbiAgICAuYWN0aW9ucy1jb2wge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiBhdXRvIDBweDtcbiAgXG4gICAgICAuYWN0aW9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB9XG4gICAgICAuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/show-all/show-all.component.ts":
/*!************************************************!*\
  !*** ./src/app/show-all/show-all.component.ts ***!
  \************************************************/
/*! exports provided: ShowAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllComponent", function() { return ShowAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ShowAllComponent = /** @class */ (function () {
    function ShowAllComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.ageValue = 0;
        this.searchValue = "";
    }
    ShowAllComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ShowAllComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getUsers()
            .subscribe(function (result) {
            _this.items = result;
            _this.age_filtered_items = result;
            _this.name_filtered_items = result;
        });
    };
    ShowAllComponent.prototype.viewDetails = function (item) {
        this.router.navigate(['/details/' + item.payload.doc.id]);
    };
    ShowAllComponent.prototype.capitalizeFirstLetter = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    ShowAllComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.firebaseService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    ShowAllComponent.prototype.rangeChange = function (event) {
        var _this = this;
        this.firebaseService.searchUsersByAge(event.value)
            .subscribe(function (result) {
            _this.age_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    ShowAllComponent.prototype.combineLists = function (a, b) {
        var result = [];
        a.filter(function (x) {
            return b.filter(function (x2) {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    };
    ShowAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-all',
            template: __webpack_require__(/*! ./show-all.component.html */ "./src/app/show-all/show-all.component.html"),
            styles: [__webpack_require__(/*! ./show-all.component.scss */ "./src/app/show-all/show-all.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShowAllComponent);
    return ShowAllComponent;
}());



/***/ }),

/***/ "./src/app/thanks/thanks.component.html":
/*!**********************************************!*\
  !*** ./src/app/thanks/thanks.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img src=\"https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif\" width=\"100%\">\n  <p class=\"notebig\">Thanks for submitting your awesome content :) It’ll take us up to 14 business days to review and update the skill so hold on tight - it’s coming!</p>\n  <a [routerLink]=\"['/home']\" class=\"note\">(I want to contribute more content, take me to categories)</a>\n</div>"

/***/ }),

/***/ "./src/app/thanks/thanks.component.scss":
/*!**********************************************!*\
  !*** ./src/app/thanks/thanks.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  height: 100vh !important;\n  width: 100vw !important;\n  position: static;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.content-container {\n  background: black !important; }\n\np.notebig {\n  color: #00F0C5;\n  text-align: center;\n  padding: 0px 40px; }\n\n.note {\n  color: black;\n  text-align: center;\n  background-color: white;\n  padding: 10px 30px;\n  margin: 50px 20px;\n  border-radius: 100px; }\n\napp-thanks, .container {\n  background: black !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvdHN5L2JpZ1RhbGtBcHAvc3JjL2FwcC90aGFua3MvdGhhbmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsVUFBUztFQUNULHlCQUF3QjtFQUN4Qix3QkFBdUI7RUFDdkIsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBRWpCOztBQUVGO0VBQ0csNkJBQTRCLEVBQy9COztBQUVEO0VBQ0ksZUFBYztFQUNkLG1CQUFrQjtFQUNsQixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJLDZCQUE0QjtFQUM1QixjQUFhO0VBQ2Isd0JBQXVCO0VBQzFCLG9CQUFtQjtFQUNoQix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLHlCQUF3QixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3RoYW5rcy90aGFua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJvZHkge1xuXHRtYXJnaW46IDA7XG5cdGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcblx0d2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG5cdHBvc2l0aW9uOiBzdGF0aWM7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgfVxuXG5cdC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbn1cblxucC5ub3RlYmlnIHtcbiAgICBjb2xvcjogIzAwRjBDNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDQwcHg7XG59XG5cbi5ub3RlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBtYXJnaW46IDUwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuYXBwLXRoYW5rcywgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/thanks/thanks.component.ts":
/*!********************************************!*\
  !*** ./src/app/thanks/thanks.component.ts ***!
  \********************************************/
/*! exports provided: ThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksComponent", function() { return ThanksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThanksComponent = /** @class */ (function () {
    function ThanksComponent() {
    }
    ThanksComponent.prototype.ngOnInit = function () {
    };
    ThanksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thanks',
            template: __webpack_require__(/*! ./thanks.component.html */ "./src/app/thanks/thanks.component.html"),
            styles: [__webpack_require__(/*! ./thanks.component.scss */ "./src/app/thanks/thanks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThanksComponent);
    return ThanksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDZeYmtj2G7GE1ZKtty7d8j1Ki7nbh-6Bk",
        authDomain: "bigtalkdemo.firebaseapp.com",
        databaseURL: "https://bigtalkdemo.firebaseio.com",
        projectId: "bigtalkdemo",
        storageBucket: "bigtalkdemo.appspot.com",
        messagingSenderId: "667014089582"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikotsy/bigTalkApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map