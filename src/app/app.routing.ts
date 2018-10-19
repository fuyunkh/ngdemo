import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleComponent } from './articles/article.component';
import { DetailComponent } from './articles/detail.component';

const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'article', component: ArticleComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
