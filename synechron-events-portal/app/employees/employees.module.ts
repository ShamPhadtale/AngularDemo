import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { employeesRoute } from "./employees.route";

import { EmployeesListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";

@NgModule({
    imports:[
        CommonModule,
        employeesRoute
    ],
    exports:[
        EmployeesListComponent
    ], // only parents need to export, childs will get exported as dependancy
    declarations:[
        EmployeesListComponent, 
        EmployeeDetailsComponent
    ],
    providers:[]
})
export class EmployeesModule{

}