import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  inputobj={
    FName:'',
    LName:'',
    PhoneNo:'',
    Address:''
  }
  
  @Output() resobj=new EventEmitter<any>();
   constructor() { }
 
   outputmethod()
   {
     this.resobj.emit(this.inputobj);
   }

  ngOnInit(): void {
  }

}
