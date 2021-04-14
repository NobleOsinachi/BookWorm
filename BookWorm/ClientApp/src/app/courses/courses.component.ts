
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
import { IFavouriteChangedEventArgs } from "../favourite/favourite.component";
import { Nullable, bool } from "../../typings";

@Component( {
  selector: "courses",

  templateUrl: "./courses.component.html"

} )
export class CoursesComponent {
  isAdded: boolean = false;
  courses: string[];/* title: string;*/ colSpan: number;
  username: string = "Noble Osinachi";
  email: string = "";
  title = "Lorem ipsum dolor sit amet consectetur nobis perferendis adipisci exercitationem rem iste ea ipsa? Libero consequuntur autem laudantium, optio unde soluta, vel molestiae odit magnam voluptate quasi quo!";


  post: IPost = { name: "The flaws of a perfectionist", isFavourite: false };
  del: Nullable<number> = 44;

  constructor( service: CoursesService ) {
    this.courses = service.getCourses();
    this.colSpan = 3;
  }


  onAdd() {
    let timeStamp = new Date().toISOString().replace( /-/g, "" ).replace( /T/g, "" ).replace( /:/g, "" ).replace( ".", "" ).replace( "Z", "" );

    this.courses.push( "New Course Added - " + timeStamp );

    this.showSuccessAlert();
  };
  showSuccessAlert() {
    this.isAdded = true;
    setInterval( function () {
      this.isAdded = false;
    }, 1000 );
    setTimeout( function () {
      this.isAdded = false;
    }, 1000 );

    //this.isAdded = false;
  };
  onRemove( course: string ) {
    this.courses.splice( this.courses.indexOf( course ), 1 );
  };




  onFavouriteChanged( $event: IFavouriteChangedEventArgs ) { alert( "Save icon clicked. New value is " + $event.newValue ); }

  onSave = function ( $event: PointerEvent ) {
    //alert( "saved!" )
    this.courses.push( this.email );
    console.log( $event );
    console.log( typeof $event );
    this.email = "";

  }


  onKeyUp(/*email*/ ) {//$event.stopPropagation();console.log($event.target.value);
    console.log( this.email );
  }
}

export interface IPost {
  name: string;
  isFavourite: boolean;
}
