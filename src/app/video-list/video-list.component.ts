import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  private req: any;
  title = "VideoList";
  someItem = "<h1>Hi there</h1>"
  todayDate;
  //videoList = ["Item 1", "Item 2", "Item 3"]
  videoList = [
    {name: "Item 1",slug: "item-1",embed: '6wD4V0rvlDI'},
    {name: "Item 2",slug: "item-2",embed: '6wD4V0rvlDI'},
    {name: "Item 3",slug: "item-3",embed: null,},
  ]

  constructor(private http:Http) {}

  ngOnInit() {
    this.todayDate = new Date()
    this.req = this.http.get('assets/json/videos.json').subscribe(data=>{
      console.log(data)
    })
  }

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2'
  }

}
