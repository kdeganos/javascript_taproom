import { Component } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Tap Room</h1>
      <keg-list
        [kegList] = "kegs"
        (onKegSelect) = "kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
    new Keg("Name 1", "Brand 1", 50, 9, 124),
    new Keg("Name 2", "Brand 2", 60, 10, 123),
    new Keg("Name 3", "Brand 3", 70, 11, 122),

  ];
  }
}
