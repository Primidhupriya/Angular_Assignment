import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  inputobj={
    FName:'',
    LName:'',
    PhoneNo:'',
    Address:''
  }
  outputmethod(data:any)
  {
     this.inputobj=data;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
