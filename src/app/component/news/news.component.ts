import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../entity/post.entity';

@Component({
        selector: 'app-news',
        templateUrl: './news.component.html',
        styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

        posts: Post[];

        loading = false;

        nbNewsPerPage = 4;
        page = 1;

        constructor(private postService: PostService) {
        }
        // Méthode pour la pagination
        get filteredPosts() {
                const start = (this.page - 1) * this.nbNewsPerPage;
                const end = start + this.nbNewsPerPage;
                return this.posts.slice(start, end);
        }
        // post services
        ngOnInit(): void {
                this.loading = true;
                this.postService.getAllPost().subscribe(value => {
                        this.posts = value;
                        this.loading = false;
                });
        }

        // retourne le nombre de pages totale
        get nbPages() {
                return Math.round(this.posts.length / this.nbNewsPerPage);
        }

}
