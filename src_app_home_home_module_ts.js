(self["webpackChunkux_tests"] = self["webpackChunkux_tests"] || []).push([["src_app_home_home_module_ts"],{

/***/ 324:
/*!**************************************!*\
  !*** ./src/app/animations/in-out.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inOutAnimation": () => (/* binding */ inOutAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7238);

const enterOpacityTime = '500ms';
const enterTransformTime = '500ms';
const leaveOpacityTime = '500ms';
const leaveTransformTime = '500ms';
const inOutAnimation = function (time = '500ms') {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('inOutAnimation', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateY(-20px)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${enterOpacityTime} ease-out`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${enterTransformTime} ease-out`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0px)' }))
            ])
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateY(0px)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${leaveTransformTime} ease-out`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-40px)' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${leaveOpacityTime} ease-out`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, })),
            ])
        ])
    ]);
};


/***/ }),

/***/ 6911:
/*!*****************************************************!*\
  !*** ./src/app/directives/fade-header.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FadeHeaderDirective": () => (/* binding */ FadeHeaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let FadeHeaderDirective = class FadeHeaderDirective {
    constructor() { }
};
FadeHeaderDirective.ctorParameters = () => [];
FadeHeaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: '[appFadeHeader]'
    })
], FadeHeaderDirective);



/***/ }),

/***/ 8676:
/*!*****************************************************!*\
  !*** ./src/app/directives/hide-header.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideHeaderDirective": () => (/* binding */ HideHeaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let HideHeaderDirective = class HideHeaderDirective {
    constructor() { }
};
HideHeaderDirective.ctorParameters = () => [];
HideHeaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: '[appHideHeader]'
    })
], HideHeaderDirective);



/***/ }),

/***/ 8721:
/*!*********************************************************!*\
  !*** ./src/app/directives/parallax-header.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallaxHeaderDirective": () => (/* binding */ ParallaxHeaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/events.service */ 106);




const HEADER_HEIGHT_EXTENDED = 300;
const HEADER_HEIGHT_COMPRESSED = 44;
const IMAGE_MOVE_VALUE = 2;
const MAX_SCROLL = HEADER_HEIGHT_EXTENDED - HEADER_HEIGHT_COMPRESSED;
const EVENT_SUBSCRIPTION = 'parallax:max_scroll';
let ParallaxHeaderDirective = class ParallaxHeaderDirective {
    constructor(element, renderer, domCtrl, events) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.events = events;
        this.scrolledAboveLine = false;
    }
    ngOnInit() {
        let content = this.element.nativeElement;
        this.header = content.querySelector('.parallax-header');
        this.toolbar = this.header.querySelector('.parallax-toolbar');
        this.title = this.header.querySelector('.parallax-title > h1');
        this.header.classList.add('extended');
        this.toolbar.classList.add('extended');
    }
    onContentScroll($event) {
        const scrollTop = $event.detail.scrollTop;
        if (scrollTop < MAX_SCROLL && scrollTop > 0) {
            this.domCtrl.write(() => {
                const moveImage = scrollTop / IMAGE_MOVE_VALUE;
                // const moveTitle = -scrollTop / 1.5;
                const opacityBg = (scrollTop / MAX_SCROLL).toFixed(2);
                //const opacityTitle = (scrollTop / MAX_SCROLL).toFixed(2);
                this.renderer.setStyle(this.header, 'webkitTransform', 'translateY(-' + moveImage + 'px)');
                this.renderer.setStyle(this.toolbar, 'webkitTransform', 'translateY(' + moveImage + 'px)');
                this.renderer.setStyle(this.toolbar, 'background', 'rgba(255,255,255,' + opacityBg + ')');
                // this.renderer.setStyle(this.title, 'opacity', opacityTitle);
                // this.renderer.setStyle(this.title, 'webkitTransform', 'translateY(' + moveTitle + 'px)');
            });
        }
        if (scrollTop >= MAX_SCROLL && !this.scrolledAboveLine) {
            this.scrolledAboveLine = true;
            this.toolbar.classList.remove('extended');
            this.header.classList.remove('extended');
            this.header.classList.remove('ion-no-border');
            this.toolbar.querySelector('ion-title').classList.remove('opacity-0');
            this.renderer.setStyle(this.header, 'webkitTransform', 'translateY(0px)');
            this.renderer.setStyle(this.toolbar, 'webkitTransform', 'translateY(0px)');
        }
        if (scrollTop <= MAX_SCROLL && this.scrolledAboveLine) {
            this.scrolledAboveLine = false;
            this.toolbar.classList.add('extended');
            this.header.classList.add('extended');
            this.header.classList.add('ion-no-border');
            this.toolbar.querySelector('ion-title').classList.add('opacity-0');
        }
    }
};
ParallaxHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.DomController },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_0__.EventsService }
];
ParallaxHeaderDirective.propDecorators = {
    onContentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener, args: ['ionScroll', ['$event'],] }]
};
ParallaxHeaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: '[appParallaxHeader]'
    })
], ParallaxHeaderDirective);



/***/ }),

/***/ 8665:
/*!********************************************************!*\
  !*** ./src/app/directives/shared-directives.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedDirectivesModule": () => (/* binding */ SharedDirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _hide_header_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide-header.directive */ 8676);
/* harmony import */ var _fade_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fade-header.directive */ 6911);
/* harmony import */ var _parallax_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallax-header.directive */ 8721);






let SharedDirectivesModule = class SharedDirectivesModule {
};
SharedDirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _hide_header_directive__WEBPACK_IMPORTED_MODULE_0__.HideHeaderDirective,
            _fade_header_directive__WEBPACK_IMPORTED_MODULE_1__.FadeHeaderDirective,
            _parallax_header_directive__WEBPACK_IMPORTED_MODULE_2__.ParallaxHeaderDirective
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ],
        exports: [
            _hide_header_directive__WEBPACK_IMPORTED_MODULE_0__.HideHeaderDirective,
            _fade_header_directive__WEBPACK_IMPORTED_MODULE_1__.FadeHeaderDirective,
            _parallax_header_directive__WEBPACK_IMPORTED_MODULE_2__.ParallaxHeaderDirective
        ]
    })
], SharedDirectivesModule);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/shared-directives.module */ 8665);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_2__.SharedDirectivesModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _animations_in_out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/in-out */ 324);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/events.service */ 106);






let HomePage = class HomePage {
    constructor(events) {
        this.events = events;
        this.imgSrc = 'https://d1ralsognjng37.cloudfront.net/dc2de9b5-ad2c-44f2-9640-5ad106b1d49f.jpeg';
        this.showImage = false;
    }
    ngOnInit() {
        this.parallaxSubscription = this.events.subscribe('parallax:max_scroll', (data) => {
            console.log('Welcome', { data });
        });
    }
    ngOnDestroy() {
        this.parallaxSubscription.unsubscribe();
    }
    onClick() {
        this.showImage = !this.showImage;
    }
    logAnimation($event) {
        console.log($event);
        console.log(`${$event.phase} animation`);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_animations_in_out__WEBPACK_IMPORTED_MODULE_2__.inOutAnimation)()
        ],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 106:
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);



let EventsService = class EventsService {
    constructor() {
        this.channels = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            // You can also use ReplaySubject with one concequence
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }
        return this.channels[topic].subscribe(observer);
    }
    /**
     * Publish some data to the subscribers of the given topic.
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    publish(topic, data) {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param topic The name of the topic to destroy.
     */
    destroy(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
};
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EventsService);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content [fullscreen]=\"true\" appParallaxHeader [scrollEvents]=\"true\">\n  <ion-header class=\"ion-no-border parallax-header\" [style.background-image]=\"'url(' + imgSrc +')'\">\n    <ion-toolbar class=\"parallax-toolbar\">\n      <ion-buttons slot=\"start\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n        <ion-title class=\"transition-all opacity-0\">Default Buttons</ion-title>\n\n      <ion-buttons slot=\"primary\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n        </ion-button>\n        <ion-button color=\"secondary\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <div class=\"parallax-title\">\n      <h1>Title Title Title Title Title Title Title </h1>\n    </div>\n  </ion-header>\n\n  <div class=\"parallax-body\">\n    <div class=\"ion-padding\">\n      <div class=\"instructions\">\n\n      </div>\n      <button (click)=\"onClick()\">Toggle Image</button>\n      <div id=\"container\" *ngIf=\"showImage\" [@inOutAnimation] >\n        <strong>Ready to create an app?</strong>\n        <p>Start with Ionic <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n      </div>\n      <div style=\"height: 100vh\"></div>\n      <div style=\"height: 100vh\"></div>\n      </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map