import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeImageList = [
    {image: "assets/images/nature/1.jpg", title: " Image 1", link: "/videos/video-1"},
    {image: "assets/images/nature/2.jpg", title: " Image 2", link: "/videos/video-2"},
    {image: "assets/images/nature/3.jpg", title: " Image 3", link: "/videos/video-3"},
    {image: "assets/images/nature/4.jpg", title: " Image 4", link: "/videos/video-4"},
    {image: "assets/images/nature/5.jpg", title: " Image 5", link: "/videos/video-5"},
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  preventNormal(event:MouseEvent, image:any){
    if (!image.prevented) {
      event.preventDefault()
      //image.setAttribute("href", "/videos")
      //image.link = '/videos'
      image.prevented = true;
      this.router.navigate(['./videos'])
    }
  }

}
