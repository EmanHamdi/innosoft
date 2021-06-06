import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innosoft-test-platform',
  templateUrl: './innosoft-test-platform.component.html',
  styleUrls: ['./innosoft-test-platform.component.css']
})
export class InnosoftTestPlatformComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  content = { title: "منصة الاختبار انوسوفت", pragraph: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر." };
  constructor() { }

  ngOnInit(): void {
  }

}
