import { Component, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-obs-child",
  templateUrl: "./obs-child.component.html",
  styleUrls: ["./obs-child.component.css"]
})
export class ObsChildComponent implements OnInit {
  @Input() score: Subject<any>;
  scoreValue = 0;

  constructor() {}

  ngOnInit() {
    this.score.subscribe(res => {
      this.scoreValue = ++this.scoreValue;
    });
  }
}
