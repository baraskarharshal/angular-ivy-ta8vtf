import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { contries } from "../../contries.config";

@Component({
  selector: "app-async-pipe",
  templateUrl: "./async-pipe.component.html",
  styleUrls: ["./async-pipe.component.css"]
})
export class AsyncPipeComponent implements AfterViewInit {
  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  pageNo = 0;
  contryList = new Subject<any[]>();

  constructor() {
  }

  ngAfterViewInit() {
    this.contryList.next(contries.slice(0, 10));
  }

  refreshList() {
    this.pageNo = ++this.pageNo;
    const contriesList = contries.slice(
      this.pageNo * 10,
      this.pageNo * 10 + 10
    );
    this.contryList.next(contriesList);
  }
}
