import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { DetailRoutingModule } from './detail.routing';

import { AppComponent } from './app.component';
import { ArticleComponent } from './articles/article.component';
import { DetailComponent } from './articles/detail.component';
import { BlogService } from './utils/Blog.service';

// import the feature module here so you can add it to the imports array below
import { TodotasksModule } from './todotasks/todotasks.module';

import { CommentComponent } from './comment/comment.component';

import { CommentService } from './utils/comment.service';




@NgModule({
  // 组件、指令、管道
  declarations: [
    AppComponent,
    ArticleComponent,
    DetailComponent,
    CommentComponent
  ],
  // 外部模块
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DetailRoutingModule,
    TodotasksModule   // add the feature module here
  ],
  // 定义的服务
  providers: [ BlogService, CommentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
