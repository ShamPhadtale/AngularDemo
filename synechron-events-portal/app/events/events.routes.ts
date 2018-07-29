import { ModuleWithProviders } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { EventsDetailsComponent } from "./components/event-details.component";
import { EventsListComponent } from "./components/events-list.components";
import { NewEventComponent } from "./components/new-event.component";

const evntRoutes:Routes=[
    {
        path:"", // default route
        component:EventsListComponent
    },
    {
        path:'new', // name routes should always come before parameterized routes
        component: NewEventComponent
    },
    {
        path:":id", // parameterized route
        component:EventsDetailsComponent
    },
];

export const eventsRoute:ModuleWithProviders=RouterModule.forChild(evntRoutes);