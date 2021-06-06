import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {
  @Input('basic') basicCards;

  constructor() { }

  ngOnInit(): void {
  }

}
