import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../../model/person.model';
import { PresonService } from '../../services/preson.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent {
  readonly person$: Observable<PersonModel[]> = this._presonService.getAll();

  constructor(private _presonService: PresonService) {
  }
}
