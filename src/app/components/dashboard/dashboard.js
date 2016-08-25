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
var alerts_1 = require('../alerts/alerts');
var rd_loading_1 = require('../rd-loading/rd-loading');
var rd_widget_1 = require('../rd-widget/rd-widget');
var rd_widget_header_1 = require('../rd-widget-header/rd-widget-header');
var rd_widget_body_1 = require('../rd-widget-body/rd-widget-body');
var rd_widget_footer_1 = require('../rd-widget-footer/rd-widget-footer');
var server_list_view_1 = require('../server-list-view/server-list-view');
var server_list_1 = require('../../services/server_list');
var user_list_view_1 = require('../user-list-view/user-list-view');
var user_list_1 = require('../../services/user_list');
var Dashboard = (function () {
    function Dashboard(serverListService, userListService) {
        this.serverListService = serverListService;
        this.userListService = userListService;
        this.serverListService = serverListService;
        this.userListService = userListService;
    }
    Dashboard.prototype.ngOnInit = function () {
        this.servers = this.serverListService.all();
        this.users = this.userListService.all();
    };
    Dashboard = __decorate([
        core_1.Component({
            selector: 'dashboard',
            providers: [server_list_1.ServerListService],
            templateUrl: 'app/components/dashboard/dashboard.html',
            styleUrls: ['app/components/dashboard/dashboard.css'],
            directives: [alerts_1.Alerts, rd_widget_1.RdWidget, rd_widget_header_1.RdWidgetHeader, rd_widget_body_1.RdWidgetBody,
                rd_widget_footer_1.RdWidgetFooter, rd_loading_1.RdLoading, server_list_view_1.ServerListView, user_list_view_1.UserListView]
        }), 
        __metadata('design:paramtypes', [server_list_1.ServerListService, user_list_1.UserListService])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.js.map