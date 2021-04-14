import { Component, Input, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IDepartment, IEmployee, SharedService } from 'src/app/shared/shared.service';
import { formatDate } from '@angular/common';
/*import bootbox = require( "bootbox" );const bootbox = require( "bootbox/bootbox.js" );*/
import { mapTo } from 'rxjs/operators';


@Component( {
    selector: 'app-add-edit-employee',
    templateUrl: './add-edit-employee.component.html',
    styleUrls: [ './add-edit-employee.component.css' ]
} )
export class AddEditEmployeeComponent implements OnInit, IEmployee, OnChanges {
    constructor ( private service: SharedService ) { }
    ngOnChanges ( changes: SimpleChanges ): void {


    }
    @Input( "emp" ) employee: IEmployee; id: string | number; name: string; departmentId: string | number; dateOfJoining: string | Date;
    photoFileName: string = "ANONYMOUS.PNG";
    photoFilePath: string;
    department?: IDepartment;
    val: IEmployee;
    employeesList: IEmployee[];
    /** Select departmentId from drop-down */departmentsList: IDepartment[];

    ngOnInit (): void {
        this.refreshEmployeeList();
    }

    refreshEmployeeList () {
        this.service.getDepartments().subscribe( data => {
            this.departmentsList = data;

            this.id = this.employee.id;
            this.name = this.employee.name;
            this.departmentId = this.employee.departmentId;
            this.dateOfJoining = this.employee.dateOfJoining;

            this.photoFileName = this.employee.photoFileName;//.replace( /[\/]/g, "" )[ -1 ];
            this.photoFilePath = this.service.photoFilePath + this.photoFileName;
            this.url = this.photoFilePath;
        } );
    };

    addEmployee () {
        this.val = {
            id: this.id,
            name: this.name,
            departmentId: this.departmentId,
            // department: this.department,
            dateOfJoining: this.dateOfJoining,
            photoFileName: this.photoFileName,

        };
        this.service.addEmployee( this.val )
            .subscribe( res =>
                bootbox.
                    alert( "Added successfully " + JSON.stringify( res ) )
                // , error => console.log( error )
            );



        this.clear();



    }
    clear () {
        this.id = null; this.name = null; this.departmentsList = null; this.departmentId = null; this.dateOfJoining = null; this.photoFileName = null; this.photoFilePath = null;
        this.ngOnInit();
    }

    updateEmployee () {
        this.ngOnInit();
        this.val = {
            id: this.id,
            name: this.name,
            departmentId: this.departmentId,
            // department: this.department,
            dateOfJoining: this.dateOfJoining,
            photoFileName: this.photoFileName,

        };
        this.service.updateEmployee( this.val )
            .subscribe( res => {
                //alert( JSON.stringify( res ) );
            }
                //, error => console.log( error )
            );
        bootbox.
            alert( "Updated successfully" );
        this.clear();

    }


    uploadPhoto ( $event: any ) {

        let file: File = $event.target.files[ 0 ];
        const formData: FormData = new FormData();
        formData.append( "photoFileName", file, file.name );

        this.service.uploadPhoto( formData )//.forEach( data => {this.photoFileName = data; this.photoFilePath = this.service.photoFilePath + this.photoFileName;alert( "wahala" );} );
            .subscribe( data => {

                this.photoFileName = data; this.photoFilePath = this.service.photoFilePath + this.photoFileName;
                alert( "wahala" );
            }, ( error ) => { console.error( error ); } );


        // alert( "updated paths" );
        this.photoFilePath = this.service.photoFilePath + this.photoFileName;
        this.photoFileName = file.name;

        this.onFileSelected( $event );
    }

    url: string | ArrayBuffer; onFileSelected ( $event: any ) {
        let file = $event.target.files; console.clear(); console.log( $event.target ); if ( file && file[ 0 ] ) {
            var reader = new FileReader(); reader.onload = ( event: ProgressEvent ) => { this.url = ( <FileReader> event.target ).result; }; reader.readAsDataURL( file[ 0 ] ); reader.readAsDataURL( file[ 0 ] );
        }
    }
}
