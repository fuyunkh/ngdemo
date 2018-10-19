import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './articles/detail.component';
import { CommentComponent } from './comment/comment.component';

const detailRoutes: Routes = [
    {
        path: 'detail/:id',
        component: DetailComponent,
        children: [
            {
                path: 'comment',
                component: CommentComponent
            }]
    }

];

@NgModule({
    imports: [RouterModule.forChild(detailRoutes)],
    exports: [RouterModule]
})
export class DetailRoutingModule { }
