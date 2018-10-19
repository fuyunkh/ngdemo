import { Component, OnInit } from '@angular/core';

import { Comment } from '../utils/Comment';


export let Comments: Comment[] = [];

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
}
