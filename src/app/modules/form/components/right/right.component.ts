import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor() { }

  @Input("dataobj") resObj : any;

  ngOnInit(): void {
    this.resObj = {
      FName:'',
      LName:'',
      PhoneNo:'',
      Address:''
    }
  }

}
