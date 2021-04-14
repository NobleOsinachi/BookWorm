import { Component, PipeTransform, Pipe } from '@angular/core';

@Pipe
  ( {
    name: "titleCase"
  } )
export class TitleCasePipe implements PipeTransform {
  transform( value: any, ...args: any[] ) {
    let xxx;
    console.log( value, xxx, args );
    throw new Error( "Method not implemented." );


  }
}
