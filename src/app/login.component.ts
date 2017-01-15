import {Component,OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { Http, Headers, RequestOptions} from '@angular/http'; 

import {UserServices} from './user.services';  //1. Import Ham doc tu API
@Component({
    selector:'app-root',
    templateUrl: './login.component.html'
})
export class LoginComponent{
 
}