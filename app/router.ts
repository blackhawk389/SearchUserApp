import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { RouterOutlet } from 'angular2/router';
import { FORM_DIRECTIVES, Control, FORM_PROVIDERS, FormBuilder, ControlGroup, AbstractControl } from 'angular2/common';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'router',
    pipes : [],
    template: `
    <div>
    <form [ngFormModel] = "searchform">
    <input type = 'text' [ngFormControl]= 'input1'/>
    </form>
    <button (click) = "getusers()">Submit</button>
    </div>
    <div>
    <ul>
    <li *ngFor = "#user of users">
    {{user | json}}
    </li>
    </ul>
    </div>
    
    
    <router-outlet></router-outlet>
    
    `,
    directives: [FORM_DIRECTIVES]
})
export class router {

    searchform: ControlGroup;
    //input1 : AbstractControl;
    users: Array<Object>[];
    input1: AbstractControl;

    constructor(public http: Http, fb: FormBuilder) {
        this.searchform = fb.group({
            'input1': ['']
        })
        this.input1 = this.searchform.controls['input1']
    }

    getusers() {
        this.http.get(`https://api.github.com/search/users?q=${this.input1.value}`)
            .map(response => response.json().items
            )
            .subscribe(
            data => this.users = data,
            error => console.log(error)
            )
    }

}
bootstrap(router, [HTTP_PROVIDERS])