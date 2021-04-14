import { Component, OnInit } from "@angular/core";
import { IEmployee, SharedService, IDepartment } from "../shared/shared.service";

@Component( {
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: [ './employee.component.css' ]
} )
export class EmployeeComponent implements OnInit, IEmployee {
    constructor ( private service: SharedService ) { }

    photoFileName: string;
    employeesList: IEmployee[] = [];
    id: number;
    name: string;
    departmentId: number;
    department?: IDepartment;
    dateOfJoining: Date;
    employee: IEmployee;
    isAddEditComponentActive: boolean = false;
    modalTitle = "";
    ngOnInit (): void {


        this.refreshEmployeeList();
    }
    refreshEmployeeList () {
        this.service.getEmployees()
            .subscribe( data => this.employeesList = data );
    }
    addClick () {
        this.employee = {
            id: 0,
            name: "",
            // department:null,
            departmentId: 0,
            dateOfJoining: new Date()
            , photoFileName: "anonymous.png"
        };
        this.modalTitle = "Add Employee";
        this.isAddEditComponentActive = true;
    }
    editClick ( emp: IEmployee ) {
        this.employee = emp;
        this.modalTitle = "Edit Employee";
        this.isAddEditComponentActive = true;
    }
    deleteClick ( emp: IEmployee ) {
        let Employee = this;
        bootbox.confirm( "Are you sure you want to delete this Employee?", function ( result ) {
            if ( result ) {
                Employee.service.deleteEmployee( emp )
                    .subscribe( res => {
                        bootbox.alert( "Deleted successfully " + JSON.stringify( res ) );
                        Employee.refreshEmployeeList();
                    } );
            }
        } );
    }
    closeClick () {
        this.isAddEditComponentActive = false;
        this.refreshEmployeeList();
    }
}
