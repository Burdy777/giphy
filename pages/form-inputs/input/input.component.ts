import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
@Output() student: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public getStudent(value) {
    this.student.emit(value);
  }
}
