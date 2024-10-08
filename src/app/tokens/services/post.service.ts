import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GetListInput, Post} from "@rkc/blog/models";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {toHttpParams} from "@rkc/blog/functions";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public getPosts(input: GetListInput): Observable<Post[]> {
    const params = toHttpParams(input);
    return this.httpClient.get<Post[]>(`${environment.apiUrl}posts`, {params});
  }

  public get(postId: string): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.apiUrl}posts/${postId}`);
  }
}
