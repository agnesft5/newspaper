(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-home/v-home.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/v-home/v-home.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"row\">\n        <div class=\"col-0 col-md-1\">\n        </div>\n        <div class=\"col-12 mx-2 col-md-10 \">\n            <div class=\" text-center text-weight-bold mt-5 header__navbar\">\n                <h1 routerLink=\"/home\" class=\"title__text neoland__title\">Neoland Journal</h1>\n                <h6 class=\"title__text\">Newspaper & Magazine</h6>\n            </div>\n        </div>\n        <div class=\"col-0 col-md-1\">\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 d-block d-lg-none\">\n            <div class=\"row headermp__menubar\">\n                <div *ngIf=\"!openedTrue\" class=\"col-2\">\n                    <p routerLink=\"/home\" class=\"mt-4 float-right text-uppercase main__text sidebar__home\"><i\n                            class=\"fas fa-home\" style=\"position: absolute; top: 50%;\"></i></p>\n                </div>\n                <div class=\"col-8\">\n                    <div class=\"form-group mt-4 text-center\">\n                        <div class=\"cats__container ml-4 mt-4\" (click)=\"openSelect()\"\n                            [ngClass]=\"{cats__container: !openedTrue, cats__containerOp: openedTrue}\">\n                            <div class=\"row cat__container1\">\n                                <div class=\"col-9\">\n                                    <p class=\"main__text ml-3 text-capitalize font-weight-bold\">{{category}}</p>\n                                </div>\n                                <div class=\"col-3\">\n                                    <i class=\"fas fa-sort-down\" style=\"position: absolute; top: 6%;\"></i>\n                                </div>\n                            </div>\n                            <div *ngIf=\"category != 'business'\" class=\"row cat__container\">\n                                <div class=\"col-9\">\n                                    <p class=\"main__text text-capitalize ml-3\"\n                                        (click)=\"changeCategory('business', target)\">\n                                        business</p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"category != 'entertainment'\" class=\"row  cat__container\">\n                                <div class=\"col-9\">\n                                    <p class=\"main__text text-capitalize ml-3\"\n                                        (click)=\"changeCategory('entertainment', target)\">entertainment</p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"category != 'general'\" class=\"row cat__container\">\n                                <div class=\"col-9\">\n                                    <p class=\"main__text text-capitalize ml-3\"\n                                        (click)=\"changeCategory('general', target)\">\n                                        general</p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"category != 'health'\" class=\"row cat__container\">\n                                <div class=\"col-9\">\n                                    <p class=\"main__text text-capitalize ml-3\"\n                                        (click)=\"changeCategory('health', target)\">health\n                                    </p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"category != 'science'\" class=\"row cat__container\">\n                                <div class=\"col-9\">\n                                    <p class=\"main__text text-capitalize ml-3\"\n                                        (click)=\"changeCategory('science', target)\">\n                                        science</p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"category != 'sports'\" class=\"row cat__container\">\n                                <div class=\"col-9\">\n                                    <p class=\"main__text text-capitalize ml-3\"\n                                        (click)=\"changeCategory('sports', target)\">sports\n                                    </p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"category != 'technology'\" class=\"row cat__container\">\n                                <div class=\"col-9\">\n                                    <p class=\"main__text text-capitalize ml-3 pb-2\"\n                                        (click)=\"changeCategory('technology')\">technology</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"!openedTrue\" class=\"col-2\">\n                    <p routerLink=\"/saved-for-later\" class=\"mt-4 float-left text-uppercase main__text sidebar__home\"><i\n                            class=\"fas fa-glasses\" style=\"position: absolute; top: 50%;\"></i></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<main>\n    <div class=\"row\">\n        <div class=\"col-0 col-sm-3 d-none d-lg-block\">\n            <div class=\"main__sidebar\">\n                <div class=\"sidebar__contents mx-5\">\n                    <br>\n                    <p routerLink=\"/home\" class=\"ml-2 mb-1 text-uppercase main__text sidebar__home\">Home</p>\n                    <br>\n                    <p routerLink=\"/saved-for-later\" class=\"ml-2 mb-1 text-uppercase main__text sidebar__saved\"><i\n                            class=\"fas fa-glasses\"></i> &nbsp; Saved for later</p>\n                    <br>\n                    <p class=\"ml-2 mb-1 text-uppercase main__text\">Categories</p>\n                    <div class=\"cats__container ml-4 mt-4\" (click)=\"openSelect()\"\n                        [ngClass]=\"{cats__container: !openedTrue, cats__containerOp: openedTrue}\">\n                        <div class=\"row cat__container1\">\n                            <div class=\"col-9\">\n                                <p class=\"main__text ml-5 text-capitalize font-weight-bold\">{{category}}</p>\n                            </div>\n                            <div class=\"col-3 text-center\">\n                                <i class=\"fas fa-sort-down\" style=\"position: absolute; top: 6%;\"></i>\n                            </div>\n                        </div>\n                        <div *ngIf=\"category != 'business'\" class=\"row cat__container\">\n                            <div class=\"col-9\">\n                                <p class=\"main__text text-capitalize ml-5\" (click)=\"changeCategory('business', target)\">\n                                    business\n                                </p>\n                            </div>\n                        </div>\n                        <div *ngIf=\"category != 'entertainment'\" class=\"row  cat__container\">\n                            <div class=\"col-9\">\n                                <p class=\"main__text text-capitalize ml-5\"\n                                    (click)=\"changeCategory('entertainment', target)\">\n                                    entertainment</p>\n                            </div>\n                        </div>\n                        <div *ngIf=\"category != 'general'\" class=\"row cat__container\">\n                            <div class=\"col-9\">\n                                <p class=\"main__text text-capitalize ml-5\" (click)=\"changeCategory('general', target)\">\n                                    general\n                                </p>\n                            </div>\n                        </div>\n                        <div *ngIf=\"category != 'health'\" class=\"row cat__container\">\n                            <div class=\"col-9\">\n                                <p class=\"main__text text-capitalize ml-5\" (click)=\"changeCategory('health', target)\">\n                                    health</p>\n                            </div>\n                        </div>\n                        <div *ngIf=\"category != 'science'\" class=\"row cat__container\">\n                            <div class=\"col-9\">\n                                <p class=\"main__text text-capitalize ml-5\" (click)=\"changeCategory('science', target)\">\n                                    science\n                                </p>\n                            </div>\n                        </div>\n                        <div *ngIf=\"category != 'sports'\" class=\"row cat__container\">\n                            <div class=\"col-9\">\n                                <p class=\"main__text text-capitalize ml-5\" (click)=\"changeCategory('sports', target)\">\n                                    sports</p>\n                            </div>\n                        </div>\n                        <div *ngIf=\"category != 'technology'\" class=\"row cat__container\">\n                            <div class=\"col-9\">\n                                <p class=\"main__text text-capitalize ml-5 pb-2\"\n                                    (click)=\"changeCategory('technology', target)\">\n                                    technology</p>\n                            </div>\n                        </div>\n                    </div>\n                    <br>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-lg-9\">\n            <div class=\"main__body\">\n                <div class=\"row w-100\">\n                    <div class=\"col-12 col-lg-6 px-0 w-75\">\n                        <!--Aquí-->\n                        <h1 class=\"title__text text-center mt-5\">Top Headlines</h1>\n                        <div #target class=\"noticiasTop__container\">\n                            <div *ngFor=\"let articleTop of articlesTop, let i = index\" class=\"noticias\">\n                                <div *ngIf=\"showArticle(articlesTop,i)\">\n                                    <div class=\"report__card\" routerLink=\"/report/top/{{i}}\">\n                                        <p class=\"main__text mt-5 mx-5 text-center text-capitalize font-weight-bold\">\n                                            {{i+1}}.\n                                            {{articleTop[\"title\"]}}</p>\n                                        <div class=\"report__content mx-5\">\n                                            <img class=\"reportTop__img\" src=\"{{articleTop['urlToImage']}}\">\n                                            <small class=\"main__text\">{{articleTop[\"description\"]}}</small>\n                                            <hr class=\"w-75\">\n                                            <small class=\"main__text mt-3\"><span>{{articleTop[\"publishedAt\"]}}</span> |\n                                                <span>{{articleTop[\"author\"]}}</span></small>\n                                        </div>\n                                        <p (click)=\"saveForLater(articleTop,i, 'top')\"\n                                            [ngClass]=\"{saveForLater: includedTop == false, savedArticle: includedTop == true && selectedArticleTop == i}\"\n                                            class=\"main__text text-right mt-3 mr-3 font-weight-bolder\"><i\n                                                class=\"fas fa-glasses\">\n                                            </i>&nbsp; Save\n                                            for later</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row mt-5\">\n                                <div class=\"col-6 text-right\">\n                                    <p (click)=\"previous(articlesTop, target)\"><i class=\"fas fa-caret-left\"></i></p>\n                                </div>\n                                <div class=\"col-6 text-left\">\n                                    <p (click)=\"next(articlesTop, target)\"><i class=\"fas fa-caret-right\"></i></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 col-lg-6 px-0 w-75\">\n                        <!--Aquí-->\n                        <h1 class=\"title__text text-center mt-5\">Everything</h1>\n                        <div #target1 class=\"noticiasAll__container\">\n                            <div *ngFor=\"let articleAll of articlesAll, let i = index\" class=\"noticias\">\n                                <div *ngIf=\"showArticle(articlesAll,i)\">\n                                    <div class=\"report__card\" routerLink=\"/report/all/{{i}}\">\n                                        <p class=\"main__text mt-5 mx-5 text-center text-capitalize font-weight-bold\">\n                                            {{i+1}}. {{articleAll[\"title\"]}}</p>\n                                        <div class=\"report__content mx-5\">\n                                            <img class=\"reportAll__img\" src=\"{{articleAll['urlToImage']}}\">\n                                            <small class=\"main__text\">{{articleAll[\"description\"]}}</small>\n                                            <hr class=\"w-75\">\n                                            <small class=\"main__text mt-3\"><span>{{articleAll[\"publishedAt\"]}}</span> |\n                                                <span>{{articleAll[\"author\"]}}</span></small>\n                                        </div>\n                                    </div>\n                                    <p (click)=\"saveForLater(articleAll,i, 'all')\"\n                                        class=\"main__text text-right mr-3 font-weight-bolder\"\n                                        [ngClass]=\"{saveForLater: includedAll == false, savedArticle: includedAll == true && selectedArticleAll == i}\">\n                                        <i class=\"fas fa-glasses\">\n                                        </i>&nbsp; Save\n                                        for later\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"row mt-5\">\n                                <div class=\"col-6 text-right\">\n                                    <p (click)=\"previous(articlesAll, target1)\"><i class=\"fas fa-caret-left\"></i></p>\n                                </div>\n                                <div class=\"col-6 text-left\">\n                                    <p (click)=\"next(articlesAll, target1)\"><i class=\"fas fa-caret-right\"></i></p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"space_bar\">\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <h1 class=\"title__text text-center mt-5\">Saved For Later</h1>\n                                <div class=\"savedForLater__container\">\n                                    <div *ngFor=\"let saved of savedDataArray, let i = index\" class=\"saved\">\n                                        <div *ngIf=\"savedDataArray\">\n                                            <div class=\"report__card\" routerLink=\"/report/saved/{{i}}\">\n                                                <p\n                                                    class=\"main__text mt-5 mx-5 text-center text-capitalize font-weight-bold\">\n                                                    {{i+1}}. {{saved.title}}</p>\n                                                <div class=\"report__content mx-5\">\n                                                    <img class=\"reportTop__img\" src=\"{{saved['urlToImage']}}}}\">\n                                                    <small class=\"main__text\">{{saved[\"description\"]}}</small>\n                                                    <hr class=\"w-75\">\n                                                    <small class=\"main__text mt-3\"><span>{{saved[\"publishedAt\"]}}</span>\n                                                        |\n                                                        <span>{{saved[\"author\"]}}</span></small>\n                                                </div>\n                                            </div>\n                                            <p (click)=\"deleteReport(i)\"\n                                                class=\"main__text text-right mt-3 mr-3 saveForLater\"><i\n                                                    class=\"fas fa-trash\"></i> &nbsp; Delete</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-report/v-report.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/v-report/v-report.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"row\">\n        <div class=\"col-0 col-md-1\">\n        </div>\n        <div class=\"col-12 mx-2 col-md-10 \">\n            <div class=\" text-center text-weight-bold mt-5 header__navbar\">\n                <h1 routerLink=\"/home\" class=\"title__text neoland__title\">Neoland Journal</h1>\n                <h6 class=\"title__text\">Newspaper & Magazine</h6>\n            </div>\n        </div>\n        <div class=\"col-0 col-md-1\">\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 d-block d-md-none\">\n            <div class=\"row headermp__menubar\">\n                <div class=\"col-6\">\n                    <p routerLink=\"/home\" class=\"mt-4 text-center text-uppercase main__text sidebar__home\"><i\n                        class=\"fas fa-home\"></i></p>\n                </div>\n                <div class=\"col-6\">\n                    <p routerLink=\"/saved-for-later\" class=\"mt-4 text-center text-uppercase main__text sidebar__home\"><i\n                        class=\"fas fa-glasses\"></i></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<main>\n    <div class=\"row\">\n        <div class=\"col-0 col-sm-3 d-none d-lg-block\">\n            <div class=\"main__sidebar\">\n                <div class=\"sidebar__contents ml-5\">\n                    <br>\n                    <p routerLink=\"/home\" class=\"ml-2 mb-1 text-uppercase main__text sidebar__home\">Home</p>\n                    <br>\n                    <p routerLink=\"/saved-for-later\" class=\"ml-2 mb-1 text-uppercase main__text sidebar__saved\"><i\n                            class=\"fas fa-glasses\"></i>&nbsp; Saved for later</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-lg-9\">\n            <div class=\"report\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div *ngIf=\"article\" class=\"report__container mx-5 mb-5\">\n                                <p class=\"main__text mt-5 text-center text-capitalize font-weight-bold\">\n                                    {{article[\"title\"]}}</p>\n                                <img class=\"report__img\" src=\"{{article['urlToImage']}}\">\n                                <small class=\"main__text\">{{article[\"description\"]}}</small>\n                                <hr class=\"w-75\">\n                                <small class=\"main__text\">{{article[\"content\"]}}</small>\n                                <small class=\"main__text mt-3\"><a href=\"{{article['url']}}\">Read de full\n                                        report</a></small>\n                                <small class=\"main__text mt-3\"><span>{{article[\"publishedAt\"]}}</span> |\n                                    <span>{{article[\"author\"]}}</span></small>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-saved/v-saved.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/v-saved/v-saved.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"row\">\n        <div class=\"col-0 col-md-1\">\n        </div>\n        <div class=\"col-12 mx-2 col-md-10 \">\n            <div class=\" text-center text-weight-bold mt-5 header__navbar\">\n                <h1 routerLink=\"/home\" class=\"title__text neoland__title\">Neoland Journal</h1>\n                <h6 class=\"title__text\">Newspaper & Magazine</h6>\n            </div>\n        </div>\n        <div class=\"col-0 col-md-1\">\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 d-block d-md-none\">\n            <div class=\"row headermp__menubar\">\n                <div class=\"col-6\">\n                    <p routerLink=\"/home\" class=\"mt-4 text-center text-uppercase main__text sidebar__home\"><i\n                        class=\"fas fa-home\"></i></p>\n                </div>\n                <div class=\"col-6\">\n                    <p routerLink=\"/saved-for-later\" class=\"mt-4 text-center text-uppercase main__text sidebar__home\"><i\n                        class=\"fas fa-glasses\"></i></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<main>\n    <div class=\"row\">\n        <div class=\"col-0 col-sm-3 d-none d-lg-block\">\n            <div class=\"main__sidebar\">\n                <div class=\"sidebar__contents ml-5\">\n                    <br>\n                    <p routerLink=\"/home\" class=\"ml-2 mb-1 text-uppercase main__text sidebar__home\">Home</p>\n                    <br>\n                    <p routerLink=\"/saved-for-later\" class=\"ml-2 mb-1 text-uppercase main__text sidebar__saved\"><i\n                            class=\"fas fa-glasses\"></i> &nbsp; Saved for later</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-lg-9\">\n            <div class=\"report\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div *ngFor=\"let article of articles, let i = index\">\n                                <div *ngIf=\"articles\">\n                                    <div routerLink=\"/report/saved/{{i}}\"\n                                        class=\"report__card report__container mx-5 mb-5\">\n                                        <p class=\"main__text mt-5 text-center text-capitalize font-weight-bold\">\n                                            {{i+1}}. {{article[\"title\"]}}</p>\n                                        <img class=\"report__img\" src=\"{{article['urlToImage']}}\">\n                                        <small class=\"main__text\">{{article[\"description\"]}}</small>\n                                        <hr class=\"w-75\">\n                                        <small class=\"main__text mt-3\"><span>{{article[\"publishedAt\"]}}</span> |\n                                            <span>{{article[\"author\"]}}</span></small>\n                                    </div>\n\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'newsletter';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./v-home/v-home.component */ "./src/app/v-home/v-home.component.ts");
            /* harmony import */ var _v_report_v_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./v-report/v-report.component */ "./src/app/v-report/v-report.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _v_saved_v_saved_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./v-saved/v-saved.component */ "./src/app/v-saved/v-saved.component.ts");
            var config = [
                { "path": "", "component": _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_4__["VHomeComponent"] },
                { "path": "home", "component": _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_4__["VHomeComponent"] },
                { "path": "report/:type/:i", "component": _v_report_v_report_component__WEBPACK_IMPORTED_MODULE_5__["VReportComponent"] },
                { "path": "saved-for-later", "component": _v_saved_v_saved_component__WEBPACK_IMPORTED_MODULE_10__["VSavedComponent"] },
                { "path": "**", "component": _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_4__["VHomeComponent"] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_4__["VHomeComponent"],
                        _v_report_v_report_component__WEBPACK_IMPORTED_MODULE_5__["VReportComponent"],
                        _v_saved_v_saved_component__WEBPACK_IMPORTED_MODULE_10__["VSavedComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(config, { useHash: true })
                    ],
                    providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/services/data.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/data.service.ts ***!
          \******************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var DataService = /** @class */ (function () {
                function DataService(_http) {
                    this._http = _http;
                    this.category = "general";
                    this.topHeadlines = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.everything = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.savedForLater = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                DataService.prototype.httpGetTop = function (url) {
                    var _this = this;
                    this._http.get(url, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-requested-witdh": "XMLHResponse" })
                    }).subscribe(function (result) {
                        _this.arrTopHeadlines = result;
                        _this.topHeadlines.next(result);
                    });
                };
                DataService.prototype.httpGetAll = function () {
                    var _this = this;
                    this._http.get('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&lenguage=en&apiKey=6d1e9f0531774a84b98ac454cd66deb4', {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "x-requested-witdh": "XMLHResponse" })
                    }).subscribe(function (result) {
                        _this.arrEverything = result;
                        _this.everything.next(result);
                    });
                };
                DataService.prototype.saveData = function (report, i) {
                    this.savedForLater.next(report);
                    //console.log(this.savedDataArray)
                };
                DataService.prototype.getSavedArticles = function () {
                    return JSON.parse(localStorage.getItem("articles"));
                };
                DataService.prototype.changeCategory = function (newCategory) {
                    this.category = newCategory;
                };
                return DataService;
            }());
            DataService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/v-home/v-home.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/v-home/v-home.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header__navbar{\r\n    border-bottom: 1px solid black;\r\n}\r\n.title__text{\r\n    font-family: 'PT Serif', serif;\r\n    text-transform: uppercase;\r\n}\r\n.main__sidebar{\r\n    border-right: 4px solid black;\r\n    margin-top: 30%;\r\n    height: 100vh;\r\n}\r\n.main__text{\r\n    font-family: 'PT Serif', serif;\r\n    outline: none;\r\n}\r\n.noticiasTop__container{\r\n    height: 150vh;\r\n    overflow-y: scroll;\r\n    margin-bottom: 7%;\r\n}\r\n.noticiasAll__container{\r\n    height: 80vh;\r\n    overflow-y: scroll;\r\n    margin-bottom: 7%;\r\n}\r\n.report__card{\r\n    transition: .5s;\r\n}\r\n.report__card:hover{\r\n    opacity: .4;\r\n}\r\n.reportTop__img{\r\n    width: 100%;\r\n    position: relative;\r\n    margin: 5% auto;\r\n}\r\n.reportAll__img{\r\n    width: 80%;\r\n    position: relative;\r\n    margin: 5% auto;\r\n}\r\n.report__content{\r\n    display: inline-grid;\r\n}\r\n.neoland__title{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n    \r\n}\r\n.neoland__title:hover{\r\n    color: #888;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n.sidebar__home{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.sidebar__home:hover{\r\n    color: #888;\r\n}\r\n.sidebar__category{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.sidebar__category:hover{\r\n    color: \r\n    #888;\r\n}\r\n.sidebar__saved{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.sidebar__saved:hover{\r\n    color: #888;\r\n}\r\n/* .saveForLaterClicked{\r\n    cursor: pointer;\r\n    font-weight: bolder;\r\n    color: teal;\r\n} */\r\n.saveForLater{\r\n    cursor: pointer;\r\n    font-weight: bolder;\r\n}\r\n.savedForLater__container{\r\n    height: 54vh;\r\n    overflow-y: scroll;\r\n    margin-bottom: 7%;\r\n}\r\n.space_bar{\r\n    border-bottom: 1px solid black;\r\n    width: 75%;\r\n    margin-left: 10%;\r\n}\r\n.headermp__menubar{\r\n    width: 82%;\r\n    margin: 0 auto;\r\n    margin-top: 5%;\r\n    border-top: 3px solid black;\r\n    border-bottom: 1px solid black;\r\n}\r\n.cats__container{\r\n    max-height: 5vh;\r\n    overflow: hidden;\r\n    border: 1px solid #333333;\r\n    border-radius: .25rem;\r\n}\r\n.cats__containerOp{\r\n    height: 36vh;\r\n    border: 1px solid #333333;\r\n    border-radius: .25rem;\r\n}\r\n.cat__container1{\r\n    height: 5vh;\r\n    text-align: left;\r\n    vertical-align: 5vh;\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n    cursor: pointer;\r\n}\r\n.cat__container{\r\n    height: 5vh;\r\n    text-align: left;\r\n    vertical-align: 5vh;\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n    cursor: pointer;\r\n}\r\n.cat__container:hover{\r\n    cursor: pointer;\r\n    background-color: #eeeeee;\r\n    margin: 0;\r\n}\r\n.savedArticle{\r\n    color: #888;\r\n    cursor: pointer;\r\n    font-weight: bolder;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1ob21lL3YtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0k7QUFDUjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBOzs7O0dBSUc7QUFDSDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3YtaG9tZS92LWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfX25hdmJhcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4udGl0bGVfX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1BUIFNlcmlmJywgc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5tYWluX19zaWRlYmFye1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5tYWluX190ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTZXJpZicsIHNlcmlmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubm90aWNpYXNUb3BfX2NvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTUwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3JTtcclxufVxyXG5cclxuLm5vdGljaWFzQWxsX19jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3JTtcclxufVxyXG4ucmVwb3J0X19jYXJke1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5yZXBvcnRfX2NhcmQ6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAuNDtcclxufVxyXG4ucmVwb3J0VG9wX19pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4ucmVwb3J0QWxsX19pbWd7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbi5yZXBvcnRfX2NvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxufVxyXG4ubmVvbGFuZF9fdGl0bGV7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG4ubmVvbGFuZF9fdGl0bGU6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuLnNpZGViYXJfX2hvbWV7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNpZGViYXJfX2hvbWU6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG4uc2lkZWJhcl9fY2F0ZWdvcnl7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNpZGViYXJfX2NhdGVnb3J5OmhvdmVye1xyXG4gICAgY29sb3I6IFxyXG4gICAgIzg4ODtcclxufVxyXG4uc2lkZWJhcl9fc2F2ZWR7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNpZGViYXJfX3NhdmVkOmhvdmVye1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbn1cclxuLyogLnNhdmVGb3JMYXRlckNsaWNrZWR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6IHRlYWw7XHJcbn0gKi9cclxuLnNhdmVGb3JMYXRlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLnNhdmVkRm9yTGF0ZXJfX2NvbnRhaW5lcntcclxuICAgIGhlaWdodDogNTR2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDclO1xyXG59XHJcbi5zcGFjZV9iYXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG4uaGVhZGVybXBfX21lbnViYXJ7XHJcbiAgICB3aWR0aDogODIlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uY2F0c19fY29udGFpbmVye1xyXG4gICAgbWF4LWhlaWdodDogNXZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbn1cclxuLmNhdHNfX2NvbnRhaW5lck9we1xyXG4gICAgaGVpZ2h0OiAzNnZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG4uY2F0X19jb250YWluZXIxe1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IDV2aDtcclxuICAgIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXRfX2NvbnRhaW5lcntcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiA1dmg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2F0X19jb250YWluZXI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5zYXZlZEFydGljbGV7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/v-home/v-home.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/v-home/v-home.component.ts ***!
          \********************************************/
        /*! exports provided: VHomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VHomeComponent", function () { return VHomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var VHomeComponent = /** @class */ (function () {
                function VHomeComponent(_data, _path) {
                    var _this = this;
                    this._data = _data;
                    this._path = _path;
                    this.category = "general";
                    this.openedTrue = false;
                    // savedArticleTop: number[] = [];
                    // savedArticleAll: number[] = [];
                    this.includedTop = false;
                    this.includedAll = false;
                    this.initialAll = 0;
                    this.finalAll = 15;
                    this.initialTop = 0;
                    this.finalTop = 15;
                    this.subscription1 = this._data.topHeadlines.subscribe(function (newValue) {
                        _this.topHeadlines = newValue;
                        _this.articlesTop = _this.topHeadlines["articles"];
                    });
                    this.subscription2 = this._data.everything.subscribe(function (newValue) {
                        _this.everything = newValue;
                        _this.articlesAll = _this.everything["articles"];
                    });
                    this.subscription3 = this._data.savedForLater.subscribe(function (newValue) {
                        _this.savedForLater = newValue;
                        _this.savedDataArray.push(_this.savedForLater);
                        if (typeof (Storage) !== 'undefined') {
                            localStorage.setItem("articles", JSON.stringify(_this.savedDataArray));
                        }
                    });
                }
                VHomeComponent.prototype.showArticle = function (reports, index) {
                    if (reports == this.articlesAll && index >= this.initialAll && index < this.finalAll) {
                        return true;
                    }
                    else if (reports == this.articlesTop && index >= this.initialTop && index < this.finalTop) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                VHomeComponent.prototype.next = function (reports, element) {
                    if (reports == this.articlesAll) {
                        console.log(this.articlesAll.length);
                        if (this.initialAll < this.articlesAll.length && this.initialAll >= 0 && this.finalAll < this.articlesAll.length) {
                            this.initialAll += 15;
                            this.finalAll += 15;
                            element.scrollTo(0, 0);
                            window.scrollTo(0, 0);
                        }
                        else {
                            this.initialAll = 0;
                            this.finalAll = 15;
                            element.scrollTo(0, 0);
                            window.scrollTo(0, 0);
                        }
                    }
                    else if (reports == this.articlesTop) {
                        console.log(this.articlesTop.length);
                        if (this.initialTop < this.articlesTop.length && this.initialTop >= 0 && this.finalTop < this.articlesTop.length) {
                            this.initialTop += 15;
                            this.finalTop += 15;
                            element.scrollTo(0, 0);
                            window.scrollTo(0, 0);
                        }
                        else {
                            this.initialTop = 0;
                            this.finalTop = 15;
                            element.scrollTo(0, 0);
                            window.scrollTo(0, 0);
                        }
                    }
                };
                VHomeComponent.prototype.previous = function (reports, element) {
                    if (reports == this.articlesAll) {
                        console.log(this.articlesAll.length);
                        if (this.initialAll > 0 && this.initialAll < this.articlesAll.length && this.finalAll >= 15) {
                            this.initialAll -= 15;
                            this.finalAll -= 15;
                            element.scrollTo(0, 0);
                            window.scrollTo(0, 0);
                        }
                        else {
                            this.initialAll = 0;
                            this.finalAll = 15;
                            element.scrollTo(0, 0);
                            window.scrollTo(0, 0);
                        }
                    }
                    else if (reports == this.articlesTop) {
                        console.log(this.articlesTop.length);
                        if (this.initialTop > 0 && this.initialTop < this.articlesTop.length && this.finalTop >= 15) {
                            this.initialTop -= 15;
                            this.finalTop -= 15;
                            element.scrollTo(0, 0);
                            window.scrollTo(0, 0);
                        }
                        else {
                            this.initialTop = 0;
                            this.finalTop = 15;
                            element.scrollTo(0, 0);
                            window.scrollTo(0, 0);
                        }
                    }
                };
                VHomeComponent.prototype.saveForLater = function (report, index, type) {
                    if (type == "top") {
                        this.includedTop = true;
                        this.selectedArticleTop = index;
                    }
                    else if (type == "all") {
                        this.includedAll = true;
                        this.selectedArticleAll = index;
                    }
                    else {
                        this.includedAll = false;
                        this.includedTop = false;
                    }
                    this._data.saveData(report, index);
                };
                VHomeComponent.prototype.deleteReport = function (index) {
                    this.savedDataArray.splice(index, 1);
                    if (typeof (Storage) !== 'undefined') {
                        localStorage.setItem("articles", JSON.stringify(this.savedDataArray));
                    }
                };
                VHomeComponent.prototype.openSelect = function () {
                    if (this.openedTrue == false) {
                        this.openedTrue = true;
                    }
                    else {
                        this.openedTrue = false;
                    }
                };
                VHomeComponent.prototype.changeUrl = function () {
                    this.url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=" + this.category + "&apiKey=6d1e9f0531774a84b98ac454cd66deb4";
                    this._data.httpGetTop(this.url);
                };
                VHomeComponent.prototype.scroll = function (element) {
                    element.scrollTo(0, 0);
                };
                VHomeComponent.prototype.changeCategory = function (value, element) {
                    this.category = value;
                    this.changeUrl();
                    window.scrollTo(0, 0);
                    this.scroll(element);
                };
                VHomeComponent.prototype.ngOnInit = function () {
                    this._data.httpGetTop("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=" + this.category + "&apiKey=6d1e9f0531774a84b98ac454cd66deb4");
                    this._data.httpGetAll();
                    if (JSON.parse(localStorage.getItem("articles")) !== null) {
                        this.savedDataArray = JSON.parse(localStorage.getItem("articles"));
                    }
                    else {
                        this.savedDataArray = [];
                    }
                };
                return VHomeComponent;
            }());
            VHomeComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            VHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-v-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-home/v-home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-home.component.css */ "./src/app/v-home/v-home.component.css")).default]
                })
            ], VHomeComponent);
            /***/ 
        }),
        /***/ "./src/app/v-report/v-report.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/v-report/v-report.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header__navbar{\r\n    border-bottom: 1px solid black;\r\n}\r\n.title__text{\r\n    font-family: 'PT Serif', serif;\r\n    text-transform: uppercase;\r\n}\r\n.main__sidebar{\r\n    border-right: 4px solid black;\r\n    margin-top: 30%;\r\n    height: 100vh;\r\n}\r\n.main__text{\r\n    font-family: 'PT Serif', serif;\r\n    outline: none;\r\n}\r\n.noticias__container{\r\n    height: 80vh;\r\n    overflow-y: scroll;\r\n}\r\n.noticias{\r\n    transition: .5s;\r\n}\r\n.noticias:hover{\r\n    opacity: .4;\r\n}\r\n.report__img{\r\n    width: 80%;\r\n    position: relative;\r\n    margin: 5% auto;\r\n}\r\n.report__content{\r\n    display: inline-grid;\r\n}\r\n.report__container{\r\n    display: inline-grid;\r\n}\r\n.neoland__title{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.neoland__title:hover{\r\n    color: #444;\r\n}\r\n.sidebar__home{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.sidebar__home:hover{\r\n    color: #888;\r\n}\r\n.sidebar__category{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.sidebar__category:hover{\r\n    color: \r\n    #888;\r\n}\r\n.sidebar__saved{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.sidebar__saved:hover{\r\n    color: #888;\r\n}\r\n.headermp__menubar{\r\n    width: 82%;\r\n    margin: 0 auto;\r\n    margin-top: 5%;\r\n    border-top: 3px solid black;\r\n    border-bottom: 1px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1yZXBvcnQvdi1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7UUFDSTtBQUNSO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvdi1yZXBvcnQvdi1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfX25hdmJhcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4udGl0bGVfX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1BUIFNlcmlmJywgc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5tYWluX19zaWRlYmFye1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5tYWluX190ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTZXJpZicsIHNlcmlmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubm90aWNpYXNfX2NvbnRhaW5lcntcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4ubm90aWNpYXN7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLm5vdGljaWFzOmhvdmVye1xyXG4gICAgb3BhY2l0eTogLjQ7XHJcbn1cclxuLnJlcG9ydF9faW1ne1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG4ucmVwb3J0X19jb250ZW50e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbn1cclxuLnJlcG9ydF9fY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbn1cclxuLm5lb2xhbmRfX3RpdGxle1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uZW9sYW5kX190aXRsZTpob3ZlcntcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG59XHJcbi5zaWRlYmFyX19ob21le1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaWRlYmFyX19ob21lOmhvdmVye1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbn1cclxuLnNpZGViYXJfX2NhdGVnb3J5e1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaWRlYmFyX19jYXRlZ29yeTpob3ZlcntcclxuICAgIGNvbG9yOiBcclxuICAgICM4ODg7XHJcbn1cclxuLnNpZGViYXJfX3NhdmVke1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaWRlYmFyX19zYXZlZDpob3ZlcntcclxuICAgIGNvbG9yOiAjODg4O1xyXG59XHJcbi5oZWFkZXJtcF9fbWVudWJhcntcclxuICAgIHdpZHRoOiA4MiU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/v-report/v-report.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/v-report/v-report.component.ts ***!
          \************************************************/
        /*! exports provided: VReportComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VReportComponent", function () { return VReportComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            // import { runInThisContext } from 'vm';
            var VReportComponent = /** @class */ (function () {
                function VReportComponent(_data, _path) {
                    var _this = this;
                    this._data = _data;
                    this._path = _path;
                    this.articles = [];
                    this.article = {};
                    this.subscriptionTop = this._path.params.subscribe(function (newValue) {
                        _this.i = newValue.i;
                        _this.type = newValue.type;
                        if (_this.type === "top") {
                            _this.articlesTop = _this._data.arrTopHeadlines["articles"];
                            _this.article = _this.articlesTop[_this.i];
                        }
                        if (_this.type === "all") {
                            _this.articlesAll = _this._data.arrEverything["articles"];
                            _this.article = _this.articlesAll[_this.i];
                        }
                        if (_this.type === "saved") {
                            _this.articles = _this._data.getSavedArticles();
                            _this.article = _this.articles[_this.i];
                        }
                    });
                    /*
                        this.subscriptionTop = this._data.topHeadlines.subscribe(
                          (newValue) => {
                            this.noticias = newValue
                            if (this.type === "top") {
                              this.articlesTop = this.noticias["articles"]
                              this.articleTop = this.articlesTop[this.i]
                              this.article = this.articleTop;
                            }
                            console.log("hola")
                            console.log(this.article, "top")
                          })
                    
                        this.subscriptionAll = this._path.params.subscribe(
                          (newValue) => {
                            this.i = newValue.i;
                            this.type = newValue.type;
                          })
                        this.subscriptionAll = this._data.everything.subscribe(
                          (newValue) => {
                            this.noticias = newValue
                            if (this.type === "all") {
                              this.articlesAll = this.noticias["articles"]
                              this.articleAll = this.articlesAll[this.i]
                              this.article = this.articleAll;
                            }
                    
                            console.log(this.article, "all")
                          }
                        )
                    
                    
                        this.subscriptionSaved = this._path.params.subscribe(
                          (newValue) => {
                            this.i = newValue.i;
                            this.type = newValue.type;
                            if (this.type === "saved") {
                              this.savedReports = JSON.parse(localStorage.getItem("articles"))
                              this.savedReport = this.savedReports[this.i]
                              this.article = this.savedReport;
                              console.log(this.article)
                            }
                            console.log(this.article, "saved")
                          })
                    */
                    //this.category = this._data.category
                }
                VReportComponent.prototype.ngOnInit = function () {
                    //this.cat = this._data.cat
                    //  this._data.httpGetTop(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=${this.cat}&apiKey=6d1e9f0531774a84b98ac454cd66deb4`)
                    // this._data.httpGetAll()
                };
                return VReportComponent;
            }());
            VReportComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            VReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-v-report',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-report/v-report.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-report.component.css */ "./src/app/v-report/v-report.component.css")).default]
                })
            ], VReportComponent);
            /***/ 
        }),
        /***/ "./src/app/v-saved/v-saved.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/v-saved/v-saved.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header__navbar{\r\n    border-bottom: 1px solid black;\r\n}\r\n.title__text{\r\n    font-family: 'PT Serif', serif;\r\n    text-transform: uppercase;\r\n}\r\n.main__sidebar{\r\n    border-right: 4px solid black;\r\n    margin-top: 30%;\r\n    height: 100vh;\r\n}\r\n.main__text{\r\n    font-family: 'PT Serif', serif;\r\n    outline: none;\r\n}\r\n.noticias__container{\r\n    height: 80vh;\r\n    overflow-y: scroll;\r\n}\r\n.noticias{\r\n    transition: .5s;\r\n}\r\n.noticias:hover{\r\n    opacity: .4;\r\n}\r\n.report__img{\r\n    width: 80%;\r\n    position: relative;\r\n    margin: 5% auto;\r\n}\r\n.report__content{\r\n    display: inline-grid;\r\n}\r\n.report__container{\r\n    display: inline-grid;\r\n}\r\n.neoland__title{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.neoland__title:hover{\r\n    color: #444;\r\n}\r\n.sidebar__home{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.sidebar__home:hover{\r\n    color: #888;\r\n}\r\n.sidebar__category{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.sidebar__category:hover{\r\n    color: \r\n    #888;\r\n}\r\n.sidebar__saved{\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n.sidebar__saved:hover{\r\n    color: #888;\r\n}\r\n.report__card{\r\n    transition: .5s;\r\n}\r\n.report__card:hover{\r\n    opacity: .4;\r\n}\r\n.headermp__menubar{\r\n    width: 82%;\r\n    margin: 0 auto;\r\n    margin-top: 5%;\r\n    border-top: 3px solid black;\r\n    border-bottom: 1px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1zYXZlZC92LXNhdmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0k7QUFDUjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvdi1zYXZlZC92LXNhdmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX19uYXZiYXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLnRpdGxlX190ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTZXJpZicsIHNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubWFpbl9fc2lkZWJhcntcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ubWFpbl9fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2VyaWYnLCBzZXJpZjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm5vdGljaWFzX19jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLm5vdGljaWFze1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5ub3RpY2lhczpob3ZlcntcclxuICAgIG9wYWNpdHk6IC40O1xyXG59XHJcbi5yZXBvcnRfX2ltZ3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDUlIGF1dG87XHJcbn1cclxuLnJlcG9ydF9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG59XHJcbi5yZXBvcnRfX2NvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG59XHJcbi5uZW9sYW5kX190aXRsZXtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmVvbGFuZF9fdGl0bGU6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxufVxyXG4uc2lkZWJhcl9faG9tZXtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2lkZWJhcl9faG9tZTpob3ZlcntcclxuICAgIGNvbG9yOiAjODg4O1xyXG59XHJcbi5zaWRlYmFyX19jYXRlZ29yeXtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2lkZWJhcl9fY2F0ZWdvcnk6aG92ZXJ7XHJcbiAgICBjb2xvcjogXHJcbiAgICAjODg4O1xyXG59XHJcbi5zaWRlYmFyX19zYXZlZHtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2lkZWJhcl9fc2F2ZWQ6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG4ucmVwb3J0X19jYXJke1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5yZXBvcnRfX2NhcmQ6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAuNDtcclxufVxyXG4uaGVhZGVybXBfX21lbnViYXJ7XHJcbiAgICB3aWR0aDogODIlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/v-saved/v-saved.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/v-saved/v-saved.component.ts ***!
          \**********************************************/
        /*! exports provided: VSavedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSavedComponent", function () { return VSavedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            var VSavedComponent = /** @class */ (function () {
                function VSavedComponent(_data, _path) {
                    this._data = _data;
                    this._path = _path;
                    this.category = this._data.category;
                }
                VSavedComponent.prototype.ngOnInit = function () {
                    this.articles = JSON.parse(localStorage.getItem("articles"));
                };
                return VSavedComponent;
            }());
            VSavedComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            VSavedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-v-saved',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-saved.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-saved/v-saved.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-saved.component.css */ "./src/app/v-saved/v-saved.component.css")).default]
                })
            ], VSavedComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\agnes\Desktop\projectes\newspaper\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map