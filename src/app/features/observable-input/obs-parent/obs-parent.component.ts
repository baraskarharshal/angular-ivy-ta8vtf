import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-obs-parent",
  templateUrl: "./obs-parent.component.html",
  styleUrls: ["./obs-parent.component.css"]
})
export class ObsParentComponent implements OnInit {
  latestScore$ = new Subject<any>();

  constructor() {}

  ngOnInit() {}

  onClickIncrement() {
    this.latestScore$.next(null);
  }
}
