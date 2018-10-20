import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Location } from '@angular/common';

import { Comment } from '../utils/Comment';
import { CommentService } from '../utils/comment.service';



export let Comments: Comment[] = [];

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public blogTitle: string;
  private comments: Comment[];
  private com: Comment = new Comment();
  private blogId: number;

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(para => {
      this.comments = this.commentService.getBlogComments(+para['id']);
      this.blogId = +para['id'];
      this.blogTitle = para['title'];
    });
  }

  public submitComment() {
    if (this.com.userName && this.com.content) {
      this.com.blogId = this.blogId;

      this.commentService.addComment(this.com);
      this.comments = this.commentService.getBlogComments(this.blogId);
      console.log(this.comments);
      this.com = new Comment();

    }
  }


}
