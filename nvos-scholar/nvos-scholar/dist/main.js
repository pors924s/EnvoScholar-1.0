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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = "frontend";
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage/homepage.component */ "./src/app/homepage/homepage/homepage.component.ts");
/* harmony import */ var _article_title_article_title_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-title/article-title.module */ "./src/app/article-title/article-title.module.ts");
/* harmony import */ var _displayresults_displayresults_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayresults/displayresults.component */ "./src/app/displayresults/displayresults.component.ts");
/* harmony import */ var _article_author_article_author_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-author/article-author.module */ "./src/app/article-author/article-author.module.ts");
/* harmony import */ var _article_year_article_year_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-year/article-year.module */ "./src/app/article-year/article-year.module.ts");
/* harmony import */ var _article_summary_article_summary_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article-summary/article-summary.module */ "./src/app/article-summary/article-summary.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _ontology_ontology_ontology_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ontology/ontology/ontology.component */ "./src/app/ontology/ontology/ontology.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const routes = [
    {
        path: "homepage",
        component: _homepage_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    },
    {
        path: "displayresults",
        component: _displayresults_displayresults_component__WEBPACK_IMPORTED_MODULE_6__["DisplayresultsComponent"]
    },
    {
        path: "ontology",
        component: _ontology_ontology_ontology_component__WEBPACK_IMPORTED_MODULE_12__["OntologyComponent"]
    },
    {
        path: "",
        redirectTo: "homepage",
        pathMatch: "full"
    }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _homepage_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
            _displayresults_displayresults_component__WEBPACK_IMPORTED_MODULE_6__["DisplayresultsComponent"],
            _article_article_component__WEBPACK_IMPORTED_MODULE_11__["ArticleComponent"],
            _ontology_ontology_ontology_component__WEBPACK_IMPORTED_MODULE_12__["OntologyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _article_author_article_author_module__WEBPACK_IMPORTED_MODULE_7__["ArticleAuthorModule"],
            _article_title_article_title_module__WEBPACK_IMPORTED_MODULE_5__["ArticleTitleModule"],
            _article_year_article_year_module__WEBPACK_IMPORTED_MODULE_8__["ArticleYearModule"],
            _article_summary_article_summary_module__WEBPACK_IMPORTED_MODULE_9__["ArticleSummaryModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/article-author/article-author.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/article-author/article-author.module.ts ***!
  \*********************************************************/
/*! exports provided: ArticleAuthorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleAuthorModule", function() { return ArticleAuthorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _article_author_article_author_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-author/article-author.component */ "./src/app/article-author/article-author/article-author.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ArticleAuthorModule = class ArticleAuthorModule {
};
ArticleAuthorModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_article_author_article_author_component__WEBPACK_IMPORTED_MODULE_2__["ArticleAuthorComponent"]],
        exports: [_article_author_article_author_component__WEBPACK_IMPORTED_MODULE_2__["ArticleAuthorComponent"]]
    })
], ArticleAuthorModule);



/***/ }),

/***/ "./src/app/article-author/article-author.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/article-author/article-author.service.ts ***!
  \**********************************************************/
/*! exports provided: ArticleAuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleAuthorService", function() { return ArticleAuthorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ArticleAuthorService = class ArticleAuthorService {
    getAuthor() {
        return ["ArticleAuthor"];
    }
};
ArticleAuthorService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: "root"
    })
], ArticleAuthorService);



/***/ }),

/***/ "./src/app/article-author/article-author/article-author.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/article-author/article-author/article-author.component.ts ***!
  \***************************************************************************/
/*! exports provided: ArticleAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleAuthorComponent", function() { return ArticleAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-author.service */ "./src/app/article-author/article-author.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ArticleAuthorComponent = class ArticleAuthorComponent {
    constructor(articleAuthorService) {
        this.articleAuthors = articleAuthorService.getAuthor();
    }
    ngOnInit() { }
};
ArticleAuthorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-article-author",
        template: `<p *ngFor="let articleAuthor of articleAuthors">
  {{articleAuthor}}
</p>`,
        providers: [_article_author_service__WEBPACK_IMPORTED_MODULE_1__["ArticleAuthorService"]]
    }),
    __metadata("design:paramtypes", [_article_author_service__WEBPACK_IMPORTED_MODULE_1__["ArticleAuthorService"]])
], ArticleAuthorComponent);



/***/ }),

/***/ "./src/app/article-summary/article-summary.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/article-summary/article-summary.module.ts ***!
  \***********************************************************/
/*! exports provided: ArticleSummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSummaryModule", function() { return ArticleSummaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _article_summary_article_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-summary/article-summary.component */ "./src/app/article-summary/article-summary/article-summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ArticleSummaryModule = class ArticleSummaryModule {
};
ArticleSummaryModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_article_summary_article_summary_component__WEBPACK_IMPORTED_MODULE_2__["ArticleSummaryComponent"]],
        exports: [_article_summary_article_summary_component__WEBPACK_IMPORTED_MODULE_2__["ArticleSummaryComponent"]]
    })
], ArticleSummaryModule);



/***/ }),

/***/ "./src/app/article-summary/article-summary.service.ts":
/*!************************************************************!*\
  !*** ./src/app/article-summary/article-summary.service.ts ***!
  \************************************************************/
/*! exports provided: ArticleSummaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSummaryService", function() { return ArticleSummaryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ArticleSummaryService = class ArticleSummaryService {
    getSummary() {
        return ["ArticleSummary"];
    }
};
ArticleSummaryService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: "root"
    })
], ArticleSummaryService);



/***/ }),

/***/ "./src/app/article-summary/article-summary/article-summary.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/article-summary/article-summary/article-summary.component.ts ***!
  \******************************************************************************/
/*! exports provided: ArticleSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSummaryComponent", function() { return ArticleSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article_summary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-summary.service */ "./src/app/article-summary/article-summary.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ArticleSummaryComponent = class ArticleSummaryComponent {
    constructor(articleSummaryService) {
        this.articleSummaries = articleSummaryService.getSummary();
    }
    ngOnInit() { }
};
ArticleSummaryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-article-summary",
        template: `<p *ngFor="let articleSummary of articleSummaries">
  {{articleSummary}}
</p>`,
        providers: [_article_summary_service__WEBPACK_IMPORTED_MODULE_1__["ArticleSummaryService"]]
    }),
    __metadata("design:paramtypes", [_article_summary_service__WEBPACK_IMPORTED_MODULE_1__["ArticleSummaryService"]])
], ArticleSummaryComponent);



/***/ }),

/***/ "./src/app/article-title/article-title.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/article-title/article-title.module.ts ***!
  \*******************************************************/
/*! exports provided: ArticleTitleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTitleModule", function() { return ArticleTitleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _article_title_article_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-title/article-title.component */ "./src/app/article-title/article-title/article-title.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ArticleTitleModule = class ArticleTitleModule {
};
ArticleTitleModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_article_title_article_title_component__WEBPACK_IMPORTED_MODULE_2__["ArticleTitleComponent"]],
        exports: [_article_title_article_title_component__WEBPACK_IMPORTED_MODULE_2__["ArticleTitleComponent"]]
    })
], ArticleTitleModule);



/***/ }),

/***/ "./src/app/article-title/article-title.service.ts":
/*!********************************************************!*\
  !*** ./src/app/article-title/article-title.service.ts ***!
  \********************************************************/
/*! exports provided: ArticleTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTitleService", function() { return ArticleTitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ArticleTitleService = class ArticleTitleService {
    getTitle() {
        return ["ArticleTitle"];
    }
};
ArticleTitleService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: "root"
    })
], ArticleTitleService);



/***/ }),

/***/ "./src/app/article-title/article-title/article-title.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/article-title/article-title/article-title.component.ts ***!
  \************************************************************************/
/*! exports provided: ArticleTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTitleComponent", function() { return ArticleTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-title.service */ "./src/app/article-title/article-title.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ArticleTitleComponent = class ArticleTitleComponent {
    constructor(articleTitleService) {
        this.articleTitles = articleTitleService.getTitle();
    }
    ngOnInit() { }
};
ArticleTitleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-article-title",
        template: `<p *ngFor="let articleTitle of articleTitles">
  {{articleTitle}}
</p>`,
        providers: [_article_title_service__WEBPACK_IMPORTED_MODULE_1__["ArticleTitleService"]]
    }),
    __metadata("design:paramtypes", [_article_title_service__WEBPACK_IMPORTED_MODULE_1__["ArticleTitleService"]])
], ArticleTitleComponent);



/***/ }),

/***/ "./src/app/article-year/article-year.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/article-year/article-year.module.ts ***!
  \*****************************************************/
/*! exports provided: ArticleYearModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleYearModule", function() { return ArticleYearModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _article_year_article_year_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-year/article-year.component */ "./src/app/article-year/article-year/article-year.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ArticleYearModule = class ArticleYearModule {
};
ArticleYearModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_article_year_article_year_component__WEBPACK_IMPORTED_MODULE_2__["ArticleYearComponent"]],
        exports: [_article_year_article_year_component__WEBPACK_IMPORTED_MODULE_2__["ArticleYearComponent"]]
    })
], ArticleYearModule);



/***/ }),

/***/ "./src/app/article-year/article-year.service.ts":
/*!******************************************************!*\
  !*** ./src/app/article-year/article-year.service.ts ***!
  \******************************************************/
/*! exports provided: ArticleYearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleYearService", function() { return ArticleYearService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ArticleYearService = class ArticleYearService {
    getYear() {
        return ["ArticleYear"];
    }
};
ArticleYearService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: "root"
    })
], ArticleYearService);



/***/ }),

/***/ "./src/app/article-year/article-year/article-year.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/article-year/article-year/article-year.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArticleYearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleYearComponent", function() { return ArticleYearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article_year_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-year.service */ "./src/app/article-year/article-year.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ArticleYearComponent = class ArticleYearComponent {
    constructor(articleYearService) {
        this.articleYears = articleYearService.getYear();
    }
    ngOnInit() { }
};
ArticleYearComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-article-year",
        template: `<p *ngFor="let articleYear of articleYears">
  {{articleYear}}
</p>`,
        providers: [_article_year_service__WEBPACK_IMPORTED_MODULE_1__["ArticleYearService"]]
    }),
    __metadata("design:paramtypes", [_article_year_service__WEBPACK_IMPORTED_MODULE_1__["ArticleYearService"]])
], ArticleYearComponent);



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"results\" style=\"border-bottom:#e2e2e2 solid;\">\n  <div class=\"jumbotron\" style=\"color:#222222;background-color:#ffffff;\">\n    <a href=\"#\" id=\"article\">\n      <app-article-title>Loading...</app-article-title>\n    </a>\n    <p>\n      <a href=\"#\" class=\"author\">\n        <app-article-author>Loading...</app-article-author>\n      </a>\n      <i class=\"typcn typcn-minus-outline\"></i>\n      <small class=\"year\">\n        <app-article-year>Loading...</app-article-year>\n      </small>\n    </p>\n    <p>\n      <app-article-summary>Loading...</app-article-summary>\n    </p>\n    <p>\n      <div id=\"popupbox\" class=\"popupposition\">\n        <div id=\"popupwrapper\">\n          <div id=\"container\">\n            <h3>MLA</h3>\n            <p>Casagrande, Daniel J., et al. \"Sulfur in peat-forming systems of the Okefenokee Swamp and Florida Everglades:\n              origins of sulfur in coal.\" Geochimica et Cosmochimica Acta 41.1 (1977): 161-167.</p>\n            <p>\n              <a href=\"javascript:void(0)\" onclick=\"toggle_visibility('popupbox');\">Close</a>\n            </p>\n          </div>\n        </div>\n      </div>\n      <a href=\"#\" id=\"subtasks\">\n        <i class=\"fa fa-file-pdf-o\"></i>&nbsp;View PDF</a>\n\n      <a href=\"javascript:void(0)\" onclick=\"toggle_visibility('popupbox');\" id=\"subtasks\">\n        <i class=\"fa fa-quote-right\"></i>&nbsp;Cite</a>\n      <a href=\"#\" id=\"subtasks\">&nbsp;\n        <i class=\"fa fa-save\"></i>&nbsp;Save</a>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ArticleComponent = class ArticleComponent {
    constructor() { }
    ngOnInit() {
    }
};
ArticleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-article',
        template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
        styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArticleComponent);



/***/ }),

/***/ "./src/app/displayresults/displayresults.component.css":
/*!*************************************************************!*\
  !*** ./src/app/displayresults/displayresults.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/displayresults/displayresults.component.html":
/*!**************************************************************!*\
  !*** ./src/app/displayresults/displayresults.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Display Results</title>\n\n  <link rel=\"stylesheet\" href=\"../../../assets/bootstrap/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/fonts/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/fonts/typicons.min.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/css/Footer-Basic.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/css/Navigation-with-Search.css\">\n  <link rel=\"stylesheet\" href=\"../../../assets/css/styles.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"../../../citestyle.css\" />\n\n  <script type=\"text/javascript\" src=\"popup.js\"></script>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-dark navbar-expand-md fixed-top\" style=\"background-color:#081E3F;\">\n    <div class=\"container\">\n\n      <a class=\"navbar-brand\" href=\"http://localhost:3000/\" style=\"color:#fff; margin-right: 100px\">Envo Scholar</a>\n      <a class=\"navbar-brand\" href=\"../src/ontology.html\" style=\"color:#fff; margin-right: 100px\">Ontology</a>\n      <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navcol-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n        <ul class=\"nav navbar-nav\"></ul>\n        <form class=\"form-inline mr-auto\" target=\"_self\">\n          <div class=\"form-group\">\n            <label for=\"search-field\">\n              <i class=\"fa fa-search\"></i>\n            </label>\n\n            <input ngModel name=\"search\" #search=\"ngModel\" (change)=\"log(search)\" class=\"form-control\" type=\"search\" placeholder=\"Search Peer Reviewed Articles\"\n              id=\"search-field\" style=\"background-color: #fff;\">\n\n            <input type=\"submit\" value=\"Search\" id=\"search\" routerLink=\"/displayresults\" [queryParams]=\"{search: search.value}\" queryParamsHandling=\"merge\"\n              class=\"searchbutton\" role=\"button\" style=\"color:#B6862C;/*height:40px;*//*width:40px;*/margin:0px;padding:10px 20px;border-radius:20px; margin-left: 10px;\">\n\n          </div>\n        </form>\n        <li class=\"nav-item\" role=\"presentation\">\n          <a class=\"nav-link active\" href=\"http://localhost:4200/login\" style=\"color:#fff;\">\n            <i class=\"fa fa-pencil\"></i>&nbsp; Sign in</a>\n        </li>\n      </div>\n    </div>\n  </nav>\n  <div class=\"container\">\n    <div id=\"concepts\">\n      <div class=\"jumbotron flex-grow-1 justify-content-between\">\n        <p class=\"text-center\" style=\"background-color:#B6862C;\">\n          <a class=\"btn btn-primary\" role=\"button\" href=\"#\">Ecosystem</a>\n          <a class=\"btn btn-primary\" role=\"button\" href=\"#\">Adaptation</a>\n          <a class=\"btn btn-primary\" role=\"button\" href=\"#\">Evolution</a>\n          <a class=\"btn btn-primary\" role=\"button\" href=\"#\">Swamp</a>\n          <a class=\"btn btn-primary\" role=\"button\" href=\"#\">Environment</a>\n          <a class=\"btn btn-primary\" role=\"button\" href=\"#\">Everglades</a>\n          <a class=\"btn btn-primary\" role=\"button\" href=\"#\">Sustainability</a>\n          <a class=\"btn btn-primary\" role=\"button\" href=\"#\">Peat-Swamp</a>\n        </p>\n      </div>\n    </div>\n\n    <div class=\"results\" style=\"border-bottom:#e2e2e2 solid;\">\n      <div class=\"jumbotron\" style=\"color:#222222;background-color:#ffffff;\">\n        <a href=\"#\" id=\"article\">\n          <app-article-title>Loading...</app-article-title>\n        </a>\n        <p>\n          <a href=\"#\" class=\"author\">\n            <app-article-author>Loading...</app-article-author>\n          </a>\n          <i class=\"typcn typcn-minus-outline\"></i>\n          <small class=\"year\">\n            <app-article-year>Loading...</app-article-year>\n          </small>\n        </p>\n        <p>\n          <app-article-summary>Loading...</app-article-summary>\n        </p>\n        <p>\n          <div id=\"popupbox\" class=\"popupposition\">\n            <div id=\"popupwrapper\">\n              <div id=\"container\">\n                <h3>MLA</h3>\n                <p>Casagrande, Daniel J., et al. \"Sulfur in peat-forming systems of the Okefenokee Swamp and Florida Everglades:\n                  origins of sulfur in coal.\" Geochimica et Cosmochimica Acta 41.1 (1977): 161-167.</p>\n                <p>\n                  <a href=\"javascript:void(0)\" onclick=\"toggle_visibility('popupbox');\">Close</a>\n                </p>\n              </div>\n            </div>\n          </div>\n          <a href=\"#\" id=\"subtasks\">\n            <i class=\"fa fa-file-pdf-o\"></i>&nbsp;View PDF</a>\n\n          <a href=\"javascript:void(0)\" onclick=\"toggle_visibility('popupbox');\" id=\"subtasks\">\n            <i class=\"fa fa-quote-right\"></i>&nbsp;Cite</a>\n          <a href=\"#\" id=\"subtasks\">&nbsp;\n            <i class=\"fa fa-save\"></i>&nbsp;Save</a>\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"footer-basic\">\n    <footer>\n      <ul class=\"list-inline\">\n        <li class=\"list-inline-item\">\n          <a href=\"#\">Home</a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a href=\"#\">Services</a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a href=\"#\">About</a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a href=\"#\">Terms</a>\n        </li>\n        <li class=\"list-inline-item\">\n          <a href=\"#\">Privacy Policy</a>\n        </li>\n      </ul>\n      <p class=\"copyright\">Envo Scholar © 2018</p>\n    </footer>\n  </div>\n  <script src=\"assets/js/jquery.min.js\"></script>\n  <script src=\"assets/bootstrap/js/bootstrap.min.js\"></script>\n  <script src=\"assets/js/bs-animation.js\"></script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/displayresults/displayresults.component.ts":
/*!************************************************************!*\
  !*** ./src/app/displayresults/displayresults.component.ts ***!
  \************************************************************/
/*! exports provided: DisplayresultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayresultsComponent", function() { return DisplayresultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DisplayresultsComponent = class DisplayresultsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DisplayresultsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-displayresults',
        template: __webpack_require__(/*! ./displayresults.component.html */ "./src/app/displayresults/displayresults.component.html"),
        styles: [__webpack_require__(/*! ./displayresults.component.css */ "./src/app/displayresults/displayresults.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DisplayresultsComponent);



/***/ }),

/***/ "./src/app/homepage/homepage/homepage.component.css":
/*!**********************************************************!*\
  !*** ./src/app/homepage/homepage/homepage.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage/homepage.component.html":
/*!***********************************************************!*\
  !*** ./src/app/homepage/homepage/homepage.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-expand-md fixed-top\" style=\"background-color:#081E3F;\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\" style=\"color:#fff;\">Envo Scholar</a>\n\n    <a class=\"navbar-brand\" href=\"../dist/ontology.html\" style=\"color:#fff;\">Ontology</a>\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navcol-1\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon\" style=\"color:rgb(128,128,128);\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n      <ul class=\"nav navbar-nav flex-grow-1 justify-content-end\">\n        <li class=\"nav-item\" role=\"presentation\">\n          <a class=\"nav-link active\" href=\"http://localhost:4200/login\" style=\"color:#fff;\">\n            <i class=\"fa fa-pencil\"></i>&nbsp; Sign in</a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<header class=\"masthead text-white text-center\" style=\"background-color: white; padding-bottom: 50px;\" id=\"background\">\n  <div class=\"container\" style=\"padding:0px 15px;\">\n    <div class=\"row\">\n      <div class=\"col-xl-9 mx-auto\" style=\"height:130px;\">\n        <div>\n          <h3 style=\"color:#B6862C;\">\n            The Best Search Engine for </h3>\n          <h3 style=\"color:#B6862C; margin-top: 35px;\"> Environmental Peer Reviewed Articles</h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\" style=\"background-color:transparent;margin:0px;\">\n      <div class=\"col-6 offset-3\" style=\"padding:0px;color:rgb(201,23,23);margin:0px 285px;\">\n        <div class=\"row\" style=\"margin:0px;\">\n          <form class=\"query-search-form\">\n            <div class=\"col\">\n              <input ngModel name=\"search\" #search=\"ngModel\" (change)=\"log(search)\" class=\"form-control\" type=\"search\" placeholder=\"Search Peer Reviewed Articles\"\n                id=\"search-field\" style=\"background-color: #fff;\">\n            </div>\n            <div class=\"row\" style=\"margin:0px;\">\n              <div class=\"col offset-0 align-self-center\" style=\"padding:15px;\">\n\n                <input type=\"submit\" value=\"Search\" id=\"search\" routerLink=\"/displayresults\" [queryParams]=\"{search: search.value}\" queryParamsHandling=\"merge\"\n                  class=\"searchbutton\" role=\"button\" style=\"color:#B6862C;/*height:40px;*//*width:40px;*/margin:0px;padding:10px 20px;border-radius:20px;\">\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"margin-top: 70px;\">\n    <img src=\"./fiucispanther.jpg\" alt=\"FIU Logo\" id=\"fiu-logo\">\n\n  </div>\n</header>\n<div id=\"footer-div\">\n  <footer class=\"footer\" style=\"padding-top: 10px; \">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 my-auto h-100 text-center text-lg-left\">\n          <ul class=\"list-inline mb-2\">\n            <li class=\"list-inline-item\">\n              <a href=\"#\">About</a>\n            </li>\n            <li class=\"list-inline-item\">\n              <span>⋅</span>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">Contact</a>\n            </li>\n            <li class=\"list-inline-item\">\n              <span>⋅</span>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">Terms of &nbsp;Use</a>\n            </li>\n            <li class=\"list-inline-item\">\n              <span>⋅</span>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">Privacy Policy</a>\n            </li>\n          </ul>\n          <p class=\"text-muted small mb-4 mb-lg-0\">© EnvoScholar 2018. All Rights Reserved.</p>\n        </div>\n        <div class=\"col-lg-6 my-auto h-100 text-center text-lg-right\">\n          <ul class=\"list-inline mb-0\">\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-facebook fa-2x fa-fw\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-twitter fa-2x fa-fw\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-instagram fa-2x fa-fw\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n<script src=\"assets/js/jquery.min.js\"></script>\n<script src=\"assets/bootstrap/js/bootstrap.min.js\"></script>\n<script src=\"assets/js/bs-animation.js\"></script>"

/***/ }),

/***/ "./src/app/homepage/homepage/homepage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/homepage/homepage/homepage.component.ts ***!
  \*********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage/homepage.component.html"),
        styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomepageComponent);



/***/ }),

/***/ "./src/app/ontology/ontology/ontology.component.css":
/*!**********************************************************!*\
  !*** ./src/app/ontology/ontology/ontology.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ontology/ontology/ontology.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ontology/ontology/ontology.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-expand-md fixed-top\" style=\"background-color:#081E3F;\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\" style=\"color:#fff;\">Envo Scholar</a>\n    <a class=\"navbar-brand\" routerLink=\"/ontology\" style=\"color:#fff;\">Ontology</a>\n    <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navcol-1\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon\" style=\"color:rgb(128,128,128);\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n      <ul class=\"nav navbar-nav flex-grow-1 justify-content-end\">\n        <li class=\"nav-item\" role=\"presentation\">\n          <a class=\"nav-link active\" href=\"http://localhost:4200/login\" style=\"color:#fff;\">\n            <i class=\"fa fa-pencil\"></i>&nbsp; Sign in</a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div id=\"widget_tree\"></div>\n<script>\n  function injectAPIKey() {\n    setTimeout(function () {\n      var widget_tree = $(\"#widget_tree\").NCBOTree({\n        apikey: \"bcf3d9b2-a36e-4061-98e5-e119af71a496\",\n        ontology: \"ENVO\"\n      });\n    }, 10000);\n  }\n\n  injectAPIKey();\n\n</script>\n\n<iframe frameborder=\"0\" src=\"http://bioportal.bioontology.org/widgets/visualization?ontology=ENVO&class=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FFOODON_03304066&apikey=bcf3d9b2-a36e-4061-98e5-e119af71a496\"\n  style=\"width: 1280px; height: 620px; margin-top: 50px;\"></iframe>"

/***/ }),

/***/ "./src/app/ontology/ontology/ontology.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ontology/ontology/ontology.component.ts ***!
  \*********************************************************/
/*! exports provided: OntologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OntologyComponent", function() { return OntologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let OntologyComponent = class OntologyComponent {
};
OntologyComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-ontology",
        template: __webpack_require__(/*! ./ontology.component.html */ "./src/app/ontology/ontology/ontology.component.html"),
        styles: [__webpack_require__(/*! ./ontology.component.css */ "./src/app/ontology/ontology/ontology.component.css")]
    })
], OntologyComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bryanbastida/Documents/another-envo/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map