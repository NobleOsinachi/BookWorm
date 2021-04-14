import { Component, OnInit, Input } from '@angular/core';
import { IDepartment, SharedService } from 'src/app/shared/shared.service';
import { NgForm } from '@angular/forms';
//import bootbox = require( "bootbox" );
//const bootbox = require( "bootbox/bootbox.js" );


@Component( {
    selector: 'app-add-edit-department',
    templateUrl: './add-edit-department.component.html',
    styleUrls: [ './add-edit-department.component.css' ]
} )
export class AddEditDepartmentComponent implements OnInit, IDepartment {
    @Input( "dep" ) Department: IDepartment;
    constructor ( private service: SharedService ) { }
    id: number; name: string; val: IDepartment;


    DepartmentList: IDepartment[] = [];
    refreshDepartmentList () {
        this.service.getDepartments().subscribe(
            data => this.DepartmentList = data
        );
    };



    ngOnInit (): void {
        this.id = this.Department.id;
        this.name = this.Department.name;    // let f: NgForm;this.val = f;
        this.refreshDepartmentList(); return;
    }


    addDepartment () {
        this.val = { id: this.id, name: this.name };
        this.service.addDepartment( this.val )
            .subscribe( res =>
                bootbox.
                    alert( "Added successfully " + JSON.stringify( res ) )
                // , error => console.log( error )
            );

        this.clear();

        1;
    }
    clear () { this.id = null; this.name = null; }

    updateDepartment () {
        this.val = { id: this.id, name: this.name };
        this.service.updateDepartment( this.val )
            .subscribe( res => {
                alert( JSON.stringify( res ) );
            }
                //, error => console.log( error )
            );
        bootbox.
            alert( "Updated successfully" );
        this.clear();
    }
}
