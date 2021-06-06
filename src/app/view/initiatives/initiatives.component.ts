import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.css']
})
export class InitiativesComponent implements OnInit {
  @Input('card') cards ;

  constructor() { }

  ngOnInit(): void {
  }

}
