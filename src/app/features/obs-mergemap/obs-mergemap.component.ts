import { AfterViewInit, Component, OnInit } from "@angular/core";
import { from, of, interval } from "rxjs";
import {
  concatMap,
  delay,
  map,
  mergeAll,
  mergeMap,
  switchMap,
  throttleTime,
  debounceTime
} from "rxjs/operators";

@Component({
  selector: "app-obs-mergemap",
  templateUrl: "./obs-mergemap.component.html",
  styleUrls: ["./obs-mergemap.component.css"]
})
export class ObsMergemapComponent implements OnInit {
  mapResults = [];
  mergeAllResults = [];
  mergeMapResults = [];
  switchMapResults = [];
  concatMapResults = [];

  constructor() {
    // using a regular map
    from([1, 2, 3, 4])
      .pipe(map(param => this.getData(param)))
      .subscribe(val =>
        val.subscribe(data => {
          console.log(data);
          this.mapResults.push(data);
        })
      );

    // using map and mergeAll
    from([1, 2, 3, 4])
      .pipe(
        map(param => this.getData(param)),
        mergeAll()
      )
      .subscribe(val => {
        console.log(val);
        this.mergeAllResults.push(val);
      });

    // using mergeMap
    from([1, 2, 3, 4])
      .pipe(mergeMap(param => this.getData(param)))
      .subscribe(val => {
        console.log(val);
        this.mergeMapResults.push(val);
      });

    // using switchMap
    from([1, 2, 3, 4])
      .pipe(switchMap(param => this.getData(param)))
      .subscribe(val => {
        console.log(val);
        this.switchMapResults.push(val);
      });

    // using concatMap
    from([1, 2, 3, 4])
      .pipe(concatMap(param => this.getData(param)))
      .subscribe(val => {
        console.log(val);
        this.concatMapResults.push(val);
      });
  }

  ngOnInit() {}

  getData = param => {
    return of(`response for param ${param}`).pipe(delay(1000));
  };
}
