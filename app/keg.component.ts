import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <div>
      <h3>{{ keg.name }}</h3>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
