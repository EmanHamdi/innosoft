import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  cards = [
    { img: "https://d1e00ek4ebabms.cloudfront.net/production/f3f4ebb1-df04-4bda-8e7b-342e17e98a93.jpg", prag: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم." },
    { img: "https://www.arabianbusiness.com/public/images/2020/11/26/saudiriyadh.jpg", prag: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم." },
  ]
    constructor() { }

  ngOnInit(): void {
  }

}
