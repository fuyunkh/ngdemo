import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ArticleComponent } from './articles/article.component';
import { DetailComponent } from './articles/detail.component';
import { BlogService } from './utils/Blog.service';


@NgModule({
  // 组件、指令、管道
  declarations: [
    AppComponent,
    ArticleComponent,
    DetailComponent
  ],
  // 外部模块
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // 定义的服务
  providers: [ BlogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
