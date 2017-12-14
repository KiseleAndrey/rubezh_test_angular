import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Label } from './../grid/label.model';

@Injectable()
export class MessegeService {
  labels = new Subject<Label[]>();
  constructor() {

   }
  sendLabels(labels: Label[]) {
    this.labels.next(labels);
  }

  get getLabel() {
    return this.labels.asObservable();
  }

}
