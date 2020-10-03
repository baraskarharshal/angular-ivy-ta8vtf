import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvntEmitterService {

  sharedScore: EventEmitter<boolean> = new EventEmitter();

  sharedScoreValue = 0;

  constructor() { }

}