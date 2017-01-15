import {Component,OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {UserServices} from './user.services';  //1. Import Ham doc tu API
@Component({
    selector:'user-add-component',
    templateUrl: './user-add.component.html'
})
export class UserAddComponent implements OnInit{
    public _id:number;
    public user:any;     //Gan vao employee de truyen sang View
    public name: string;
    public userName: string;
    public passWord: string;
    public status: boolean;
    constructor(private router: Router, private activateRoute: ActivatedRoute,
                 public userServices: UserServices){

    }
    ngOnInit(){
    this.user={};
    }
    SaveForm(){
        this.userServices.Add(this.name, this.userName,this.passWord,this.status).subscribe(response=>{
            if(response)
            {
                alert('Add Success !!');
                this.router.navigate(['/user']); //Redirect khi update xong, employeeapi là Route
            }
            else
            alert("Đã tồn tại User trên hệ thống !");
        })
    }
}