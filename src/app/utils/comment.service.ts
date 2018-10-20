import { Injectable } from '@angular/core';

import { Comment } from './comment';

export let Comments: Comment[] = [];

@Injectable()
export class CommentService {
    /**
   * addComment
     com:Comment
  */
    public addComment(com: Comment) {
        com.id = this.getMaxId();
        Comments.push(com);

    }

    /**
     * getBlogComments(blogId:number :Comment[]
     * */
    public getBlogComments(blogId: number): Comment[] {
        return Comments.filter(x => x.blogId === blogId);

    }

    private getMaxId(): number {
        let maxId = 1;
        Comments.forEach(x => {
            if (x.id > maxId) {
                maxId = x.id;
            }
        });
        return maxId;
    }

}
