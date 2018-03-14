import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {

  private routeSub:any;
  private req:any;
  // video = {
  //     name: "Welcome",
  //     slug: "item-1",
  //     embed: "6wD4V0rvlDI"
  // }
  video:any;
  slug:string;

  constructor(private route: ActivatedRoute, private http:Http) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        console.log(params)
        this.slug = params['slug']
        this.http.get('assets/json/videos.json').subscribe(data=>{
          data.json().filter(item=>{
            if (item.slug == this.slug) {
              this.video = item
            }
          })
        })
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }

}

