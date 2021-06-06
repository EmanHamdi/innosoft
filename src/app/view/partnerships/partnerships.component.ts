import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnerships',
  templateUrl: './partnerships.component.html',
  styleUrls: ['./partnerships.component.css']
})
export class PartnershipsComponent implements OnInit {
  cards = [
    { img: "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png", title: "Angular" },
    { img: "https://hackr.io/tutorials/learn-html-5/logo/logo-html-5?ver=1587977020", title: "HTML" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png", title: "JavaScript" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png", title: "CSS" },
    { img: "https://www.pngix.com/pngfile/middle/685-6854958_react-js-logo-png-transparent-png.png", title: "React.js" }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
