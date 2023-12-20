import { Component, OnDestroy, OnInit } from '@angular/core';
import { Payload, PayloadType } from 'src/app/shared/model';
import { SubSink } from 'subsink';
import { EventBusService } from '../../services/infrastructure';

@Component({
  selector: 'app-side-bar-child',
  templateUrl: './side-bar-child.component.html',
  styleUrls: ['./side-bar-child.component.css']
})
export class SideBarChildComponent implements OnInit, OnDestroy {
  
  message!: string;
  private subs: SubSink;

  constructor(
    private eventBusService: EventBusService
  ) {
    this.subs = new SubSink();
  }

  ngOnInit(): void {
    this.subs.sink = this.eventBusService.on(
      PayloadType.GenericMessage,
      (payload: Payload) => {
        this.message = payload.message;
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
