import {Component,OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {EmployeeServices} from './employee.services';  //1. Import Ham doc tu API
@Component({
    selector:'employee-add-component',
    templateUrl: './employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit{
    public _id:number;
    //public subscription: Subscription;
    //public employeeapi: EmployeeServices; //2. Khai bao bien dai dien cho 1, dung de lay Services
    public employee:any;     //Gan vao employee de truyen sang View
    constructor(private router: Router, private activateRoute: ActivatedRoute,
                 public employeeapiServices: EmployeeServices){

    }
    ngOnInit(){
    this.employee={};
    }
    SaveForm(){
        this.employeeapiServices.Add(this.employee).subscribe(response=>{
            if(response)
            {
                alert('Add Success !!');
                this.router.navigate(['/employeeapi']); //Redirect khi update xong, employeeapi là Route
            }
        })
    }
    //day la ham dc goi tu button tren view no se chuyen den(redirect)
    GotoEmployee(){
        this.router.navigate(['employeeapi']);  //truyen vao mot mang employees
    }
     //Xoa bo ham khoi tao, khong request id
    /*ngOnDestroy(){
        this.subscription.unsubscribe();
    }*/
}