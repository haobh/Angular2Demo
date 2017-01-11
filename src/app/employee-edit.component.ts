import {Component,OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {EmployeeServices} from './employee.services';  //1. Import Ham doc tu API
@Component({
    selector:'employee-edit-component',
    templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit,OnDestroy{
    public _id:number;
    public subscription: Subscription;
    //public employeeapi: EmployeeServices; //2. Khai bao bien dai dien cho 1, dung de lay Services
    public employee:any;     //Gan vao employee de truyen sang View
    constructor(private router: Router, private activateRoute: ActivatedRoute,
                 public employeeapiServices: EmployeeServices){

    }
    //Nhan id tu URL
    ngOnInit(){
        //Lay toan bo danh sach
        this.subscription= this.activateRoute.params.subscribe(params=>{
            this._id=params['id'];
            //alert(this._id);
        });
        //Lay theo id
        this.employeeapiServices.GetSingle(this._id).subscribe((data)=>{
            this.employee=data; //truyen vao View
        });
    }
    //Xoa bo ham khoi tao
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
    SaveForm(){
        this.employeeapiServices.Update(this._id,this.employee).subscribe(response=>{
            if(response)
            {
                alert('Save Success !!');
                this.router.navigate(['employeeapi']); //Redirect khi update xong, employeeapi là Route
            }
        })
    }
    //day la ham dc goi tu button tren view no se chuyen den(redirect)
    GotoEmployee(){
        this.router.navigate(['employees']);  //truyen vao mot mang employees
    }
}