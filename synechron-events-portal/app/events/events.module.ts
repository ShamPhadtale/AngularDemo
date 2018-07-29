import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { EventsListComponent } from './components/events-list.components';
import { EventsDetailsComponent } from './components/event-details.component';

import { FirstLetterCapitalPipe } from './pipes/first-letter-capital.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

import { eventsRoute } from "./events.routes";
import { NewEventComponent } from "./components/new-event.component";
import { SepEventsService } from './services/sep-events.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        eventsRoute
    ],
    exports: [
        EventsListComponent
    ],
    declarations: [
        EventsListComponent,
        EventsDetailsComponent,
        NewEventComponent,
        FirstLetterCapitalPipe,
        FilterByPipe
    ],
    providers: [
        SepEventsService
    ],
})
export class EventModule { 


}
