export interface IFavouriteChangedEventArgs { newValue: bool; }

import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core'; import { bool } from '../../typings'; import { SharedService, IEmployee } from '../shared/shared.service';


@Component( { selector: 'bs-favorite', templateUrl: "./favourite.component.html", styleUrls: [ 'favourite.component.css' ] } )

export class FavouriteComponent implements OnInit {
    ngOnInit (): void { this.noble = [ 1, 2, 3 ]; } noble: Array<number>;

    @Input( "isFavourite" ) isFavourite: boolean = false;
    title: string; @Output() change: EventEmitter<any> = new EventEmitter();
    toggleSave () {
        this.isFavourite = !this.isFavourite;

        this.change.emit( { newValue: this.isFavourite } );
    } viewMode = "map";



    fileName: any;
    imageShow: string;



    url: any = ""; onFileSelected ( $event: any ) {
        let file = $event.target.files; console.clear(); console.log( $event.target ); if ( file && file[ 0 ] ) {
            var reader = new FileReader(); reader.onload = ( event: ProgressEvent ) => { this.url = ( <FileReader> event.target ).result; };
            reader.readAsDataURL( file[ 0 ] ); reader.readAsDataURL( file[ 0 ] );
        }
    }
}
