import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evnt-parent',
  templateUrl: './evnt-parent.component.html',
  styleUrls: ['./evnt-parent.component.css']
})
export class EvntParentComponent implements OnInit {

  score = 0;

  constructor() { }

  ngOnInit() {
  }

  updateScore(event: boolean) {
    this.score = event ? ++this.score : --this.score;
  }

}