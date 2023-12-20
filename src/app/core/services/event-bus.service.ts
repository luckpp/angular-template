import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Envelope, Payload, PayloadType } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject$: Subject<Envelope>;
  
  constructor() { 
    this.subject$ = new Subject();
  }

  on(type: PayloadType, action: (payload: Payload | undefined) => {}): Subscription {
    return this.subject$
      .pipe(
        filter((envelope: Envelope) => { 
          return envelope.type === type;
        }),
        map((envelope: Envelope) => {
          return envelope.payload;
        })
      ).subscribe({
        next: (payload: Payload | undefined) => action(payload)
      });
  }

  emit(envelope: Envelope): void {
    this.subject$.next(envelope);
  }
}
