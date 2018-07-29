import { ModuleWithProviders } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { EmployeeDetailsComponent } from "./components/employee-details.component";
import { EmployeesListComponent } from "./components/employees-list.component";

const empRoutes:Routes=[
    {
        path:"", // default route
        component:EmployeesListComponent
    },
    {
        path:":eid", 
        component:EmployeeDetailsComponent
    },
];

export const employeesRoute:ModuleWithProviders=RouterModule.forChild(empRoutes);