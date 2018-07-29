import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // anything ends with module need to add in import except Ngmodule

import { appRouting } from "./app.routing";

// commented for lazy loading impl
// import { HomeModule } from "./home/home.module";

// import { EmployeesModule } from "./employees/employees.module";
// import { EventModule } from "./events/events.module";
// import { JphModule } from "./jph/jph.module";
import { SepNavbarModule } from "./navigation/navigation.module";


// components - also add to declaration
import { AppComponent } from "./app.component";

// pipes - also add to declaration


// directives - also add to declaration


// services - also add to providers. it creates single tone object


@NgModule({
    imports: [
        BrowserModule, 

        SepNavbarModule,
    
        appRouting
    ],
    exports: [],                        // to use outside of container
    declarations: [
        AppComponent       
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}