import { Injectable } from "@angular/core";
import { Observable, concat } from "rxjs";
import { Component, Inject } from '@angular/core';
import { HttpClient, HttpClientModule, HttpRequest, HttpResponse } from '@angular/common/http';
import { Nullable } from "src/typings";
//import { } from "fs";


@Injectable( { "providedIn": "root", } )
export class SharedService {

    public forecasts: WeatherForecast[];
    /** returns http://localhost:5000/Resources/Images/ */
    photoFilePath: string;
    //private EmployeeList: any;

    constructor ( private http: HttpClient,
        /** returns http://localhost:5000/ */@Inject( 'BASE_URL' ) private baseUrl: string

        , @Inject( 'ROOT_URL' ) private rootUrl: string

    ) {
        // let imageUrl = "assets/images/avatars/";
        let imageUrl = "Resources/Images/";
        //let uploadDir = this.rootUrl + imageUrl;if ( !fs.existsSync( uploadDir ) ) fs.mkdirSync( uploadDir );

        this.photoFilePath = baseUrl + imageUrl;
        http.get
            <WeatherForecast[]>
            ( baseUrl + 'api/SampleData/WeatherForecasts' )
            .subscribe( ( result: any[] ) => {
                this.forecasts = result;
            }, error => console.error( error ) );

    }

    uploadPhoto ( formData: FormData ): Observable<any> {
        return this.http.post( this.baseUrl + "api/pictures", formData );
    }



    /** GET /api/Department */
    getDepartments (): Observable<IDepartment[]> {
        return this.http.get<IDepartment[]>( this.baseUrl + "api/Departments" )
            // .map( ( res: Response ) => <unknown> res.json() )
            ;
    }

    /** POST /api/Departments */
    addDepartment ( val: IDepartment ) {
        return this.http.post( this.baseUrl + "api/Departments/", val );
    }

    /** PUT /api/Departments */
    updateDepartment ( val: IDepartment ) {
        return this.http.put( this.baseUrl + "api/Departments/" + val.id, val );
    }

    /** DELETE /api/Departments */
    deleteDepartment ( val: IDepartment ) {
        return this.http.delete<IDepartment[]>( this.baseUrl + "api/Departments/" + val.id );
    }
    //deleteDepartment ( DepartmentId:number|string ) {return this.http.delete<IDepartment[]>( this.baseUrl + "api/Departments/"+ DepartmentId);}




    /** GET /api/employees */
    getEmployees (): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>( this.baseUrl + "api/employees" )
            // .map( ( res: Response ) => <unknown> res.json() )
            ;
    }

    /** PUT /api/employees */
    addEmployee ( val: IEmployee ) {
        return this.http.post<IEmployee[]>( this.baseUrl + "api/employees/", val );
    }

    /** PUT /api/employees */
    updateEmployee ( val: IEmployee ) {
        return this.http.put<IEmployee[]>( this.baseUrl + "api/employees/" + val.id, val );
    }

    /** DELETE /api/employees */
    deleteEmployee ( val: IEmployee ) {
        return this.http.delete<IEmployee[]>( this.baseUrl + "api/employees/" + val.id );
    }

    sampleData: Array<WeatherForecast> = [ { "dateFormatted": "3/30/2021", "temperatureC": 28, "summary": "Balmy", "temperatureF": 82 }, { "dateFormatted": "3/31/2021", "temperatureC": -3, "summary": "Bracing", "temperatureF": 27 }, { "dateFormatted": "4/1/2021", "temperatureC": 41, "summary": "Sweltering", "temperatureF": 105 }, { "dateFormatted": "4/2/2021", "temperatureC": 52, "summary": "Balmy", "temperatureF": 125 }, { "dateFormatted": "4/3/2021", "temperatureC": 35, "summary": "Chilly", "temperatureF": 94 } ];
}

export interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}


export interface IDepartment {
    id: number;
    name: string;
    //staffs?: Nullable<Array<IEmployee>>;
};

export interface IEmployee
//extends IDepartment 
{

    id: number | string;
    name: string;
    departmentId: number | string;
    department?: Nullable<IDepartment>;
    dateOfJoining: Date | string;
    photoFileName?: string;
};
