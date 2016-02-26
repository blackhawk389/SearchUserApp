System.register(['angular2/core', 'angular2/platform/browser', 'angular2/common', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, common_1, http_1;
    var router;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            router = (function () {
                function router(http, fb) {
                    this.http = http;
                    this.searchform = fb.group({
                        'input1': ['']
                    });
                    this.input1 = this.searchform.controls['input1'];
                }
                router.prototype.getusers = function () {
                    var _this = this;
                    this.http.get("https://api.github.com/search/users?q=" + this.input1.value)
                        .map(function (response) { return response.json().items; })
                        .subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); });
                };
                router = __decorate([
                    core_1.Component({
                        selector: 'router',
                        pipes: [],
                        template: "\n    <div>\n    <form [ngFormModel] = \"searchform\">\n    <input type = 'text' [ngFormControl]= 'input1'/>\n    </form>\n    <button (click) = \"getusers()\">Submit</button>\n    </div>\n    <div>\n    <ul>\n    <li *ngFor = \"#user of users\">\n    <a>\n    {{user.avatar_url}}\n    {{user.login}}\n    </a>\n    </li>\n    </ul>\n    </div>\n    \n    \n    <router-outlet></router-outlet>\n    \n    ",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, common_1.FormBuilder])
                ], router);
                return router;
            })();
            exports_1("router", router);
            browser_1.bootstrap(router, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=router.js.map