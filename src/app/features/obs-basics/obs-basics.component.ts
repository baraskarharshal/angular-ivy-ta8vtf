import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-obs-basics",
  templateUrl: "./obs-basics.component.html",
  styleUrls: ["./obs-basics.component.css"]
})
export class ObsBasicsComponent {
  codeStr1 = `
    import { Observable } from 'rxjs';

    const observable = new Observable(observer => {
      setTimeout(() => observer.next('hello from Observable!'), 1000);
    });

    observable.subscribe(v => console.log(v));
    `;
}
