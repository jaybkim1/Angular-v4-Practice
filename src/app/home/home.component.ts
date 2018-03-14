import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private req: any;

  homeImageList = [
    //{image: "assets/images/nature/1.jpg", name: " Image 1", slug: "/video-1"},
    //{image: "assets/images/nature/2.jpg", name: " Image 2", link: "/video-2"},
    //{image: "assets/images/nature/3.jpg", name: " Image 3", link: "/video-3"},
  ]

  constructor(private http:Http, private router:Router) { }

  ngOnInit() {
    this.req = this.http.get('assets/json/videos.json').subscribe(data =>{
      console.log(data.json())
      data.json().filter(item=>{
        if(item.featured){
          this.homeImageList.push(item)
        }
      })
      //this.homeImageList = data.json();
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe()
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
