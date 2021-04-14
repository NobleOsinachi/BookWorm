import { Input, Output } from '@angular/core';
import * as bootboxx from "bootbox";
import { Component, OnInit } from '@angular/core';
import { SharedService, IDepartment } from '../shared/shared.service';
@Component( {
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: [ './department.component.css' ]
} )
export class DepartmentComponent implements OnInit {
    departmentsList: IDepartment[];
    isAddEditComponentActive: boolean = false;
    constructor ( private service: SharedService ) { }
    department: IDepartment;
    modalTitle = "";
    ngOnInit (): void {
        this.refreshDepartmentList();
    }
    refreshDepartmentList () {
        this.service.getDepartments()
            .subscribe( x => this.departmentsList = x );
    }
    addClick () {
        this.department = { id: 0, name: "" };
        this.modalTitle = "Add Department";
        this.isAddEditComponentActive = true;
    }
    editClick ( dept: IDepartment ) {
        this.department = dept;
        this.modalTitle = "Edit Department";
        this.isAddEditComponentActive = true;
    }
    deleteClick ( dept: IDepartment ) {
        let Department = this;
        bootbox.confirm( "Are you sure you want to delete this Department?", function ( result ) {
            if ( result ) {
                Department.service.deleteDepartment( dept ).subscribe( res => {
                    bootbox.alert( "Deleted successfully " + JSON.stringify( res ) );
                    Department.refreshDepartmentList();
                } );
            }
        } );
    }
    closeClick () {
        this.isAddEditComponentActive = false;
        this.refreshDepartmentList();
    }
}
