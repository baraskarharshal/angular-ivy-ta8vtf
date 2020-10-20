import { AfterViewInit, Component, OnInit } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
  selector: "app-sub-vs-behsubj",
  templateUrl: "./sub-vs-behsubj.component.html",
  styleUrls: ["./sub-vs-behsubj.component.css"]
})
export class SubVsBehsubjComponent {
  subjectCode = `
  subject = new Subject();
  this.subject.next("a");
  this.subject.subscribe(res => {
    this.subjectValues.push(res);
  });
  this.subject.next("b");`;

  behSubjectCode = `
  behSubject = new BehaviorSubject("a");
  this.behSubject.next("b");
  this.behSubject.subscribe(res => {
    this.behSubjectValues.push(res);
  });
  this.behSubject.next("c");
  `;

  subject = new Subject();
  subjectValues = [];
  behSubject = new BehaviorSubject("a");
  behSubjectValues = [];

  constructor() {
    this.subject.next("a");
    this.subject.subscribe(res => {
      this.subjectValues.push(res);
    });
    this.subject.next("b");

    // this.behSubject.next("b");
    this.behSubject.subscribe(res => {
      this.behSubjectValues.push(res);
    });
    this.behSubject.next("c");
  }
}
