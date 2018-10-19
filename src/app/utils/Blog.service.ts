import { Injectable } from '@angular/core';

import { Blog, BlogData } from '../articles/BlogData.component';


@Injectable()
export class BlogService {
    public getBlogs(): Blog[] {
        return BlogData;
    }

    getSelectedBlog(id: number): Blog {
        return this.getBlogs().find(x => x.id === id);
    }
}
