import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import {EmployeeServiceModule} from "./services/employee.service-module";
import {FacesComponentModule} from "./ui/faces/faces.component-module";
import {PresonServiceModule} from "./services/preson.service-module";
import {ProjectListComponentModule} from "./ui/project-list/project-list.component-module";
import {ProjectServiceModule} from "./services/project.service-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeeServiceModule,
    FacesComponentModule,
    PresonServiceModule,
    ProjectListComponentModule,
    ProjectServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
