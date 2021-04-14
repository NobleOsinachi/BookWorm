

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { AppComponent } from './app.component';
import { BookService } from './books/book.service';
import { BooksListComponent } from './books/books-list/books-list.component';
import { CounterComponent } from './counter/counter.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { DepartmentComponent } from './department/department.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { LikeComponent } from './like/like.component';
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PinComponent } from "./pin/pin.component";
import { PinService } from "./pin/pin.service";
import { PhonePipe } from './pipes/phone.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { TitlePipe } from './pipes/title.pipe';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { SharedService } from './shared/shared.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { ValidationMessageComponent } from "./validation-message/validation-message.component";
import { WelcomeComponent } from './welcome.component';




@NgModule( {

    //Directive, Components, Pipes
    declarations: [

        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        CoursesComponent,
        FavouriteComponent,
        CoursesComponent,
        LoginComponent,
        SummaryPipe,
        TitlePipe,
        TitleCasePipe,
        PhonePipe,
        NavMenuComponent,
        LikeComponent,
        ContactFormComponent,
        PinComponent,
        ValidationMessageComponent,
        TruncatePipe,
        BooksListComponent,
        WelcomeComponent,
        EmployeeComponent,
        DepartmentComponent,
        AddEditEmployeeComponent,
        AddEditDepartmentComponent,
        SpinnerComponent



    ],
    imports: [
        //SharedModule,AdminModule,ShoppingModule,CoreModule,AngularFireModule.initializeApp(environment.firebase),
        BrowserModule.withServerTransition( { appId: 'ng-cli-universal' } ),
        HttpClientModule,
        ReactiveFormsModule,

        FormsModule,
        RouterModule.forRoot( [

            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'courses', component: CoursesComponent },
            { path: 'like', component: LikeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'fav', component: FavouriteComponent },
            { path: 'contact', component: ContactFormComponent },
            { path: 'api/pins', component: PinComponent },
            { path: 'department', component: DepartmentComponent },
            { path: 'employee', component: EmployeeComponent },
            { path: 'spinner', component: SpinnerComponent },

        ] ) ],



    ///register dependencies and services here

    providers: [

        /* AdminAuthGuard,*/
        CoursesService,
        PinService,
        BookService,
        SharedService

    ],



    bootstrap: [ AppComponent ]
} )
export class AppModule { }
