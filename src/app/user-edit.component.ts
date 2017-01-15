import {Component,OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { Http, Headers, RequestOptions} from '@angular/http'; 

import {UserServices} from './user.services';  //1. Import Ham doc tu API
@Component({
    selector:'user-edit-component',
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit,OnDestroy{
    public _id:number;
    public subscription: Subscription;
    public user:any;     //Gan vao user de truyen sang View
    constructor(private router: Router, private activatedRoute: ActivatedRoute,
                 public userServices: UserServices){

    }
    //Nhan id tu URL
    ngOnInit(){
        this.LoadData();
    }
    //Ham LoadData sau khi xu lý nghiep vu
    LoadData() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];   //Lay cai id trong route
            //alert(this._id);
        });
        this.userServices.GetSingle(this._id).subscribe((data) => {
            //console.log(data);//ghi log ra trinh duyet
            this.user = data;
        });
    }
    SaveForm(){
        event.preventDefault();
        this.userServices.Update(this._id,this.user).subscribe(response=>{
           if(response)
            {
                alert('Save Success !!');
                this.router.navigate(['user']); //Redirect khi update xong, employeeapi là Route
            }
        },error=>
        {
             alert(error.text());
             console.log(error.text());
        });
    }
    //Xoa bo ham khoi tao
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}