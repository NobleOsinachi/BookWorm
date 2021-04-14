import { Component, OnInit, Input, InputDecorator } from '@angular/core';
import { bool } from "../typings";

@Component( {
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
} )
export class ContactFormComponent implements OnInit {


  firstName: string;
  constructor() { } ngOnInit(): void { }

  onChange = ( f: object ) => console.log( f );
}


