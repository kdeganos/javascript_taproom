import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <div>
      <h3>Name: {{ keg.name }}</h3>
      <ul>
        <li>Brand: {{keg.brand}}</li>
        <li>Price: \${{keg.price}}</li>
        <li>Alcohol Content: {{keg.alcoholContent}}%</li>
        <li>Pints Remaining: {{keg.pints}}</li>
      </ul>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
