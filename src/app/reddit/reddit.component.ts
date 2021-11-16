import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  postList:Post[] = [];

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.redditService.getRedditPosts().subscribe(
      (response:any)=> {
          response.data.children.forEach((element:any) => {
            let newPost:Post = {
              title: element.data.title,
              url: "https://reddit.com" + element.data.permalink,
              img: element.data.thumbnail
            };

            this.postList.push(newPost);
          });

          console.log(this.postList);
      }
    );
  }

}
