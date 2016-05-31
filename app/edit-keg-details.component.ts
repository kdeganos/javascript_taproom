import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <h3>Edit Keg: </h3>
      <label for="kegName">Name</label><input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form">
      <label for="kegBrand">Brand</label><input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-form">
      <label for="kegPrice">Price</label><input [(ngModel)]="keg.price" class="col-sm-8 input-lg keg-form">
      <label for="kegAlcoholContent">Alcohol Content</label><input [(ngModel)]="keg.alcoholContent" class="col-sm-8 input-lg keg-form">
      <label for="kegPint">Pints Remaining</label><input [(ngModel)]="keg.pints" class="col-sm-8 input-lg keg-form" id="kegPint">
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
