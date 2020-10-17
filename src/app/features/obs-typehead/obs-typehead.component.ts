import { Component, OnInit } from "@angular/core";
import { contries } from "../../contries.config";

@Component({
  selector: "app-obs-typehead",
  templateUrl: "./obs-typehead.component.html",
  styleUrls: ["./obs-typehead.component.css"]
})
export class ObsTypeheadComponent implements OnInit {
  contriesList = contries;

  constructor() {}

  ngOnInit() {}

  getCountries(searchTerm: string) {
    setTimeout(() => {
      this.contriesList = contries.filter(itm =>
        itm.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
    }, 500);
  }
}
