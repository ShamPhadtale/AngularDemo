import { ModuleWithProviders } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { JphPostsListComponent } from "./components/jph-posts-list.component";


const jphRoutes:Routes=[
    {
        path:"posts", // default route
        component:JphPostsListComponent
    }
];

export const sepJphRoutes:ModuleWithProviders=RouterModule.forChild(jphRoutes);