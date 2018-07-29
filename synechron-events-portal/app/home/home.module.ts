import { NgModule } from '@angular/core';

import { sepHomeRoute } from "./home.routes";
import { SepHomeComponent } from './components/sep-home.components';

@NgModule({
    imports: [sepHomeRoute],
    exports: [SepHomeComponent],
    declarations: [SepHomeComponent],
    providers: [],
})
export class HomeModule { }

