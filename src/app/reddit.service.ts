import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  apiUrl:string = "https://reddit.com/r/aww.json";
  constructor(private http:HttpClient) { }

  getRedditPosts():any{
    return this.http.get(this.apiUrl);
  }
}
