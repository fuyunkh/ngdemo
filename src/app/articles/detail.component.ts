import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// import 'rxjs/add/operator/switchMap';

import { Blog, BlogData } from './BlogData.component';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    @Input() blog: Blog;
    private id: number;
    constructor(
        // private bService: BlogService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        // subscribe to router event
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'] - 1;
            console.log('id:' + this.id);
            this.blog = BlogData[this.id];
            console.log(this.blog.title);
        });
    }
    back() {
        this.location.back();
    }
}
