import { AfterViewInit, Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap
} from "rxjs/operators";
import { contries } from "../../contries.config";

@Component({
  selector: "app-obs-typehead2",
  templateUrl: "./obs-typehead2.component.html",
  styleUrls: ["./obs-typehead2.component.css"]
})
export class ObsTypehead2Component implements AfterViewInit {
  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  contriesList = contries;
  constructor() {}

  ngAfterViewInit() {
    this.searchTerm$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(r => r.length > -1),
        map(searchTerm => {
          return contries.filter(itm =>
            itm.name
              .toLocaleLowerCase()
              .startsWith(searchTerm.toLocaleLowerCase())
          );
        })
      )
      .subscribe(res => {
        this.contriesList = res;
      });
  }

  onSearch(e): void {
    this.searchTerm$.next(e.target.value);
  }
}
