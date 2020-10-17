import { AfterViewInit, Component, OnInit } from "@angular/core";
import { contries } from "../../contries.config";
import { fromEvent, Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap
} from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-obs-typehead",
  templateUrl: "./obs-typehead.component.html",
  styleUrls: ["./obs-typehead.component.css"]
})
export class ObsTypeheadComponent implements AfterViewInit {
  contriesList = contries;

  constructor() {}

  ngAfterViewInit() {
    const searchBox = document.getElementById("search-box");

    const typeahead = fromEvent(searchBox, "input").pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 0),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchTerm => this.loadCountries(searchTerm))
    );

    typeahead.subscribe(data => {
      console.log(data);
      this.contriesList = data;
    });
  }

  loadCountries(searchTerm: string) {
    console.log(searchTerm);
    const data = contries.filter(itm =>
      itm.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    return of(data);
  }
}
