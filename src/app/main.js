// import 'core-js';
// import 'zone.js';
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var dashboard_1 = require('./components/dashboard/dashboard');
var tables_1 = require('./components/tables/tables');
var user_list_1 = require('./services/user_list');
var server_list_1 = require('./services/server_list');
var Main = (function () {
    function Main() {
        this.mobileView = 992;
        this.toggle = false;
        this.attachEvents();
    }
    Main.prototype.attachEvents = function () {
        var _this = this;
        window.onresize = function () {
            if (_this.getWidth() >= _this.mobileView) {
                if (localStorage.getItem('toggle')) {
                    _this.toggle = !localStorage.getItem('toggle') ? false : true;
                }
                else {
                    _this.toggle = true;
                }
            }
            else {
                _this.toggle = false;
            }
        };
    };
    Main.prototype.getWidth = function () {
        return window.innerWidth;
    };
    Main.prototype.toggleSidebar = function () {
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle.toString());
    };
    Main = __decorate([
        router_1.RouteConfig([
            { path: '/', component: dashboard_1.Dashboard, name: 'Dashboard' },
            { path: '/tables', component: tables_1.Tables, name: 'Tables' }
        ]),
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/main.html',
            styleUrls: ['app/main.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Main);
    return Main;
}());
browser_1.bootstrap(Main, [router_1.ROUTER_PROVIDERS, common_1.FORM_PROVIDERS,
    router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, user_list_1.UserListService, server_list_1.ServerListService,
    core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
//# sourceMappingURL=main.js.map