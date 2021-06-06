import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cards = [
    { img: "https://international-adviser.com/wp-content/uploads/sites/3/2020/08/Saudi-Arabia.jpg", title: "عشان أحب السعودية", button: "التقاصيل" },
    { img: "https://international-adviser.com/wp-content/uploads/sites/3/2020/08/Saudi-Arabia.jpg", title: "عشان أحب السعودية", button: "التقاصيل" },
    { img: "https://international-adviser.com/wp-content/uploads/sites/3/2020/08/Saudi-Arabia.jpg", title: "عشان أحب السعودية", button: "التقاصيل" }
  ]

  chance = [
    { img: "https://images.adsttc.com/media/images/6051/44c8/f91c/81a5/e900/0226/newsletter/13.jpg?1615938750", title: "عشان أحب الشرقية", prag: "يا شباب الشرقية جهزوا نفسكم وحضروا إبداعاتكم سنتواجد في الكورنيش، وننفذ مشروعنا الأول الفني لتجميل الشرقية" },
    { img: "https://images.adsttc.com/media/images/6051/44c8/f91c/81a5/e900/0226/newsletter/13.jpg?1615938750", title: "تنظيف شواطئ المملكة", prag: "مبادرة تنظيف شاطئ السيف لنشر الوعي و الحفاظ علي البيئة و المشهد الحضاري" },
    { img: "https://images.adsttc.com/media/images/6051/44c8/f91c/81a5/e900/0226/newsletter/13.jpg?1615938750", title: "تنظيف شواطئ المملكة", prag: "مبادرة تنظيف شاطئ السيف لنشر الوعي و الحفاظ علي البيئة و المشهد الحضاري" }]

  basicCard =[
    {title:"مبادرات",parag:"كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف."},
    {title:"فرص",parag:"كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف."}
  ]

  }
