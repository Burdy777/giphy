import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
  <select (change)="getGender($event.target.value)">
  <div>
    <input type="search" value=""/>
  </div>
  <option selected> gender </option>
  <option *ngFor="let g of genders" [value]="g" > {{ g }} </option>
</select>
  `,
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  genders: Array<string> = ['man', 'female'];
  @Output() gender: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  getGender(value) {
    this.gender.emit(value);
  }
}
