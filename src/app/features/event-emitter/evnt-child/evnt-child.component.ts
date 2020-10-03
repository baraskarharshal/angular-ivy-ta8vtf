import { Component, EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evnt-child',
  templateUrl: './evnt-child.component.html',
  styleUrls: ['./evnt-child.component.css']
})
export class EvntChildComponent implements OnInit {

  @Output() passValue: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickIncrement() {
    this.passValue.emit(true);
  }

  onClickDecrement() {
    this.passValue.emit(false);
  }

}