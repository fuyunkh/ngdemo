import { Component } from '@angular/core';

import { Blog, BlogData } from './BlogData.component';
import { BlogService } from '../utils/Blog.service';



@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent {
    blogList: Blog[];
    selectedBlog: Blog;
    constructor(private blogService: BlogService) {
        this.blogList = blogService.getBlogs();

    }
    selectBlog(id: number) {
        this.selectedBlog = this.blogService.getSelectedBlog(id);
    }
}
