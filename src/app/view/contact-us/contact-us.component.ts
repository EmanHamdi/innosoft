import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  forms=[{placeholder:"الإسم"},{placeholder:"البريد الإلكتروني"}]
  textarea=[{placeholder:"رسالتك"}]
  constructor() { }

  ngOnInit(): void {
  }

}
