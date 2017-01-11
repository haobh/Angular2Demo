import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from './employee.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee-list',
    templateUrl: './employeeapi.component.html'
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];  //khai bao de chua 1 mang danh sach
    public keyword: string;
    constructor(private employeeService: EmployeeServices, private router: Router,
        private activateRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.LoadData();

    }
    //Ham Search
    Search() {
        this.employeeService.Search(this.keyword).subscribe((response: any) => {
            this.employees = response; //Truyen employees sang View Template
            console.log(response);  //ghi log xem da lay du lieu chua
        }, error =>{
            console.log(error);   //Ghi log Error
        });
    }
    //Xóa bản ghi
    Delete(id: number) {
        let confirmResult = confirm("Bạn muốn xóa bản ghi ?");
        if (confirmResult) {
            this.employeeService.Delete(id).subscribe(response => {
                if (response) {
                    alert('Delete Success !!');
                    this.LoadData();
                }
            })
        }
    }
    //Ham LoadData sau khi xu lý nghiep vu
    LoadData() {
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response; //Truyen employees sang View Template
            console.log(response);  //ghi log xem da lay du lieu chua
        }, error =>{
            console.log(error);   //Ghi log Error
        });
    }

}