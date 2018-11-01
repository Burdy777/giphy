import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Output() movie: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public getMovie () {
    this.movie.emit();
  }

}
