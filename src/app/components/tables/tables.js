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
var rd_loading_1 = require('../rd-loading/rd-loading');
var rd_widget_1 = require('../rd-widget/rd-widget');
var rd_widget_header_1 = require('../rd-widget-header/rd-widget-header');
var rd_widget_body_1 = require('../rd-widget-body/rd-widget-body');
var rd_widget_footer_1 = require('../rd-widget-footer/rd-widget-footer');
var server_list_view_1 = require('../server-list-view/server-list-view');
var server_list_1 = require('../../services/server_list');
var Tables = (function () {
    function Tables(serverListService) {
        this.serverListService = serverListService;
    }
    Tables.prototype.ngOnInit = function () {
        this.servers = this.serverListService.all();
    };
    Tables = __decorate([
        core_1.Component({
            selector: 'tables',
            providers: [server_list_1.ServerListService],
            templateUrl: 'app/components/tables/tables.html',
            directives: [rd_widget_1.RdWidget, rd_widget_header_1.RdWidgetHeader, rd_widget_body_1.RdWidgetBody, rd_widget_footer_1.RdWidgetFooter, rd_loading_1.RdLoading, server_list_view_1.ServerListView]
        }), 
        __metadata('design:paramtypes', [server_list_1.ServerListService])
    ], Tables);
    return Tables;
}());
exports.Tables = Tables;
//# sourceMappingURL=tables.js.map