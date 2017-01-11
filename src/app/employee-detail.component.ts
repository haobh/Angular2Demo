import {Component,OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {EmployeeServices} from './employee.services';
@Component({
    selector:'employee-detail-component',
    templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit,OnDestroy{
    public _id:number;
    public subscription: Subscription;
    //public employeeServices: EmployeeServices; //2. Khai bao bien dai dien cho 1, dung de lay Services
    public employee:any;    //khai bao chi chua 1 ban ghi employee
    constructor(private router: Router, private activatedRoute: ActivatedRoute, 
                public employeeServices: EmployeeServices){

    }
    //Ham khoi tao khi Load
    ngOnInit(){
        //Get id tu URL route
        this.subscription= this.activatedRoute.params.subscribe(params=>{
            this._id=params['id'];   //Lay cai id trong route
            //alert(this._id);
        });
        this.employeeServices.GetSingle(this._id).subscribe((data)=>{
            this.employee=data;
        });
    }
    //Xoa bo ham khoi tao, huy cai Subscription
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
    //Ham nay de goi button, redirect
    GotoEmployee(){
        this.router.navigate(['employees']); //truyen vao 1 mang
    }
}