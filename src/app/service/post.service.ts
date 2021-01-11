import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../entity/post.entity';
import {Observable} from 'rxjs';

@Injectable({
        providedIn: 'root'
})
export class PostService {

        constructor(private http: HttpClient) {
        }
// renvoie une liste de posts
        getAllPost(): Observable<Post[]> {
                return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        }
}
