import { Component, OnInit, Inject } from '@angular/core';

import { Post } from "../models/post";
import { JphService } from "../services/jph.service";
import { inject } from '@angular/core/src/render3';

@Component({
    selector: 'jph-posts',
    templateUrl: '../views/jph-posts-list.component.html'
})

export class JphPostsListComponent implements OnInit {
    constructor(@Inject(JphService) private _jphService:JphService) { 

    }

    title:string="JSON Placeholder's post data";
    posts:Post[]=[];
    ngOnInit():void { 
        this._jphService.getAllPosts().subscribe(
            data=>this.posts=data,
            error=>console.log(error),
            ()=>console.log("Service call completed!")
        );
    }
}