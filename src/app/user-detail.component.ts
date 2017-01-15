import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserServices } from './user.services';
@Component({
    selector: 'user-detail-component',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public user: any;    //khai bao chi chua 1 ban ghi employee
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
        public userServices: UserServices) {

    }
    //Ham khoi tao khi Load
    ngOnInit() {
        this.LoadData();
    }
    //Ham LoadData sau khi xu lý nghiep vu
    LoadData() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];   //Lay cai id trong route
            //alert(this._id);
        });
        this.userServices.GetSingle(this._id).subscribe((data) => {
            this.user = data;
        });
    }
    //Xoa bo ham khoi tao, huy cai Subscription
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}