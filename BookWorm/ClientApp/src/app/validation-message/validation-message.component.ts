import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from "@angular/forms";

@Component( {
  selector: 'validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
} )
export class ValidationMessageComponent {
  @Input( "model" ) model: NgModel;
  isShown = true;
  hide() {

    this.isShown = false;
  }
}
