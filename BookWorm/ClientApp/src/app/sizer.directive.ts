import { Directive, Input, Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective implements OnInit {

  @Input() sizer: string;

  constructor(private element?:ElementRef, private renderer?: Renderer2 ) { }
  ngOnInit(): void {
    // this.renderer.setProperty?()
  }


}
