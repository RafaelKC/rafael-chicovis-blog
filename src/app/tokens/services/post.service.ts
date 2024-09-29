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
        name: 'Teste Umasdaa sdjd ka sjk dhjkh asjk. ddsada! sjkhd.',
        thumbnailUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.galafabrics.com%2Fwp-content%2Fuploads%2F2022%2F05%2FSilk-Faille-Red.jpg&f=1&nofb=1&ipt=4165398c83cd855e0c701e634a0c85b9bdbeb8c0052bc15b49956f93df56f7b3&ipo=images',
      } as Post;
      result.push(item);
    }
    return of(result).pipe(delay(1000));
  }

  public get(postId: string): Observable<Post> {
    return of({
      id: UUID.UUID(),
      postDate: new Date(),
      name: 'Teste Umasdaa sdjd ka sjk dhjkh asjk. ddsada! sjkhd.',
      thumbnailUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.galafabrics.com%2Fwp-content%2Fuploads%2F2022%2F05%2FSilk-Faille-Red.jpg&f=1&nofb=1&ipt=4165398c83cd855e0c701e634a0c85b9bdbeb8c0052bc15b49956f93df56f7b3&ipo=images',
      postDownloadUrl: 'teste.md'
    } as Post).pipe(delay(1000));
  }
}
