import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { PersonModel } from '../../model/person.model';
import { EmployeeService } from '../../services/employee.service';
import { PresonService } from '../../services/preson.service';

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacesComponent {
  readonly employee$: Observable<EmployeeModel[]> = this._employeeService.getAll();
  readonly person$: Observable<PersonModel[]> = this._presonService.getAll();

  constructor(private _employeeService: EmployeeService, private _presonService: PresonService) {
  }
}
