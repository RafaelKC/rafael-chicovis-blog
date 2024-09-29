import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {GetListInput, Post} from "@rkc/blog/models";
import {UUID} from "angular2-uuid";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  public getPosts(input: GetListInput): Observable<Post[]> {
    const result = [] as Post[];
    for (let i = 0; i < input.maxResultCount; i++) {
      const item = {
        id: UUID.UUID(),
        postDate: new Date(),
        name: 'Teste Um',
        thumbnailUrl: 'https://st.depositphotos.com/2274151/4841/i/950/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg',
      } as Post;
      result.push(item);
    }
    return of(result).pipe(delay(1000));
  }
}
