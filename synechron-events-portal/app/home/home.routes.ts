import { ModuleWithProviders } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { SepHomeComponent } from "./components/sep-home.components";


const homeRoutes:Routes=[
    {
        path:"", // default route
        component:SepHomeComponent
    }
];

export const sepHomeRoute:ModuleWithProviders=RouterModule.forChild(homeRoutes);