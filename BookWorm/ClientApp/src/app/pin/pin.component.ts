import { Component } from "@angular/core";
import { PinService, IPin } from "./pin.service";

@Component( { selector: "pin", template: `{{allPins}}`, styles: [``] } )
export class PinComponent {
  allPins: string;//Array<IPin>
  constructor( pins: PinService ) {
    this.allPins = JSON.stringify( pins.getAllPins() );
  }

}
