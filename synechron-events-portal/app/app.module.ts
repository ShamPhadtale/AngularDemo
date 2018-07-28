import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // anything ends with module need to add in import except Ngmodule
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// components - also add to declaration
import { AppComponent } from "./app.component";
import { EmployeesListComponent } from "./employees/components/employees-list.component";
import { EmployeeDetailsComponent } from "./employees/components/employee-details.component";
import { EventsListComponent } from "./events/components/events-list.components";
import { EventsDetailsComponent } from "./events/components/event-details.component";
import { JphPostsListComponent } from "../app/jph/components/jph-posts-list.component";

// pipes - also add to declaration
import { FirstLetterCapitalPipe } from "./events/pipes/first-letter-capital.pipe";
import { FilterByPipe } from "./events/pipes/filter-by.pipe";

// directives - also add to declaration


// services - also add to providers. it creates single tone object
import { SepEventsService } from "./events/services/sep-events.service";
import { JphService } from "./jph/services/jph.service";

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        HttpClientModule],
    exports: [],
    declarations: [
        AppComponent, 
        EmployeesListComponent, 
        EmployeeDetailsComponent,
        EventsListComponent,
        EventsDetailsComponent,
        FirstLetterCapitalPipe,
        FilterByPipe,
        JphPostsListComponent
    ],
    providers: [
        SepEventsService,
        JphService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}