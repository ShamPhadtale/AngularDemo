import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const defaultRoute:Routes=[
    {
        path:"",
        loadChildren:"./home/home.module#HomeModule"
    }
];

const homeRoute:Routes=[
    {
        path:'home',
        loadChildren:'./home/home.module#HomeModule'
    }
];

const empRoute:Routes=[
    {
        path:'employees',
        loadChildren:'./employees/employees.module#EmployeesModule'
    }
];

const eventsRoute:Routes=[
    {
        path:'events',
        loadChildren:'./events/events.module#EventModule'
    }
];

const jphRoute:Routes=[
    {
        path:'jph',
        loadChildren:'./jph/jph.module#JphModule'
    }
];



const appRoutes:Routes=[
    ...homeRoute,
    ...empRoute,
    ...eventsRoute,
    ...jphRoute,
    ...defaultRoute
    // {
    //     path:"", // default route
    //     component:SepHomeComponent
    // },
    // {
    //     path:"home",
    //     component:SepHomeComponent
    // },
    // {
    //     path:"events",
    //     component:EventsListComponent
    // },
    // {
    //     path:"events/:id", // after : becomes parameter
    //     component:EventsDetailsComponent
    // },
    // {
    //     path:"employees",
    //     component:EmployeesListComponent
    // },
    // {
    //     path:"jph/posts",
    //     component:JphPostsListComponent
    // }
];

export const appRouting:ModuleWithProviders=RouterModule.forRoot(appRoutes);
