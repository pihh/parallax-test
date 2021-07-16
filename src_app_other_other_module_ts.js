(self["webpackChunkux_tests"] = self["webpackChunkux_tests"] || []).push([["src_app_other_other_module_ts"],{

/***/ 4656:
/*!***********************************************!*\
  !*** ./src/app/other/other-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPageRoutingModule": () => (/* binding */ OtherPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _other_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other.page */ 6917);




const routes = [
    {
        path: '',
        component: _other_page__WEBPACK_IMPORTED_MODULE_0__.OtherPage
    }
];
let OtherPageRoutingModule = class OtherPageRoutingModule {
};
OtherPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtherPageRoutingModule);



/***/ }),

/***/ 3353:
/*!***************************************!*\
  !*** ./src/app/other/other.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPageModule": () => (/* binding */ OtherPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _other_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-routing.module */ 4656);
/* harmony import */ var _other_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other.page */ 6917);







let OtherPageModule = class OtherPageModule {
};
OtherPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _other_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherPageRoutingModule
        ],
        declarations: [_other_page__WEBPACK_IMPORTED_MODULE_1__.OtherPage]
    })
], OtherPageModule);



/***/ }),

/***/ 6917:
/*!*************************************!*\
  !*** ./src/app/other/other.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPage": () => (/* binding */ OtherPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_other_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./other.page.html */ 973);
/* harmony import */ var _other_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other.page.scss */ 3058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let OtherPage = class OtherPage {
    constructor() { }
    ngOnInit() {
    }
};
OtherPage.ctorParameters = () => [];
OtherPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-other',
        template: _raw_loader_other_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_other_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OtherPage);



/***/ }),

/***/ 3058:
/*!***************************************!*\
  !*** ./src/app/other/other.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdGhlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 973:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/other/other.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n      <ion-title>Default Buttons</ion-title>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"secondary\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_other_other_module_ts.js.map