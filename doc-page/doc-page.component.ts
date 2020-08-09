import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.css']
})
export class DocPageComponent implements OnInit {
 
  ngif= true;
  booking=false;
  constructor() { }

  ngOnInit(): void {
  }
  bk(){
    this.booking=true;
  }
  fub(){
    this.ngif=true;
  }
  funny(){
    this.ngif=false;
  }
  funny1(){
    this.ngif=false;
  }
  funny123(){
    this.booking=false;
  }
}
