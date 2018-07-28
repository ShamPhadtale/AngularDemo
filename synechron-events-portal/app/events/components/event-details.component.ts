import { Component, Input, Output, EventEmitter, OnChanges, Inject } from '@angular/core';

import { SepEvent } from "../models/sep-event";
import { SepEventsService } from "../services/sep-events.service";
@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventsDetailsComponent implements OnChanges{
   // constructor() { }

   constructor(@Inject(SepEventsService) private  _eventsService:SepEventsService) { 

    }
    title:string="Details of Event - ";
    event:SepEvent;
    //@Input("receivedEvent") event:SepEvent;
    @Input("receivedEventId") eventId:number;
    @Output("onConfirmation") sendConfirmation:EventEmitter<string>=new EventEmitter<string>(); 

    onSendConfirmation():void{
        this.sendConfirmation.emit("Received event successfully!");
    }

    ngOnChanges(): void{
        this.event=this._eventsService.getSingleEvent(this.eventId);
    }
}