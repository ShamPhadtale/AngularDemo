import { Component, Input, Output, EventEmitter, OnChanges, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { SepEvent } from "../models/sep-event";
import { SepEventsService } from "../services/sep-events.service";
@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})

export class EventsDetailsComponent implements OnInit{
   // constructor() { }

   constructor(@Inject(SepEventsService) private  _eventsService:SepEventsService,
               @Inject(ActivatedRoute) private _route:ActivatedRoute) { 

    }
    title:string="Details of Event - ";
    event:SepEvent;
    eventId:number;
    //@Input("receivedEvent") event:SepEvent;
   // @Input("receivedEventId") eventId:number; // parent child relation
   // @Output("onConfirmation") sendConfirmation:EventEmitter<string>=new EventEmitter<string>(); // parent child relation

    // onSendConfirmation():void{
    //     this.sendConfirmation.emit("Received event successfully!");
    // }

    // ngOnChanges(): void{
    //     this.event=this._eventsService.getSingleEvent(this.eventId);
    // }


    ngOnInit():void{
        this._route.params.subscribe((params)=>this.eventId=params["id"]);
        // whenever return is observable subscribe
        this._eventsService.getSingleEvent(this.eventId).subscribe(
            data=>this.event=data,
            err=>console.log(err),
            ()=>console.log("Service Call completed")
        );
    }
}