import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonListComponent],
  providers: [],
  exports: [PersonListComponent]
})
export class PersonListComponentModule {
}
