import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {


  redVar = "red";
  blueVar = "blue";
  greenVar = "green";
  purpleVar = "purple";

  currentVar = this.redVar;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color){
    console.log(color);
    this.currentVar = color;
  }
}
