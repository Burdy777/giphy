import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Output() filter: EventEmitter<any> = new EventEmitter();
  toggleDropdown: Boolean = false;

  constructor() { }

  ngOnInit() { }

  public filterFunction(value) {
    this.filter.emit(value);
  }

}
