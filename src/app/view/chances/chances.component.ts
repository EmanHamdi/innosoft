import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chances',
  templateUrl: './chances.component.html',
  styleUrls: ['./chances.component.css']
})
export class ChancesComponent implements OnInit {
 @Input('chance') chance

  constructor() { }

  ngOnInit(): void {
  }

}
