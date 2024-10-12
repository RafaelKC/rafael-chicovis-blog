import {Injectable, makeStateKey, TransferState} from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {GetListInput, Post} from "@rkc/blog/models";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {toHttpParams} from "@rkc/blog/functions";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly httpClient: HttpClient, private transferState: TransferState) {
  }

  public getPosts(input: GetListInput): Observable<Post[]> {
    const params = toHttpParams(input);
    return this.httpClient.get<Post[]>(`${environment.apiUrl}posts`, {params});
  }

  public get(postId: string): Observable<Post> {
    const DATA_KEY = makeStateKey<Post>(postId);
    const post = this.transferState.get(DATA_KEY, null);
    if (post) return of(post);
    return this.httpClient.get<Post>(`${environment.apiUrl}posts/${postId}`)
      .pipe(
        tap(post => {
          this.transferState.set(DATA_KEY, post);
        })
      );
  }
}
