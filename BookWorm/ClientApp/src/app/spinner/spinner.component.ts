import { Component, Input } from "@angular/core";

@Component( {
    selector: "spinner",
    templateUrl: "./spinner.component.html",
    styleUrls: [ "./spinner.component.css" ]
} )
export class SpinnerComponent /*implements OnInit*/ {
    title = "spinner";
    @Input( "type" ) type: string = "default";//default, purple, fullScreen

}

