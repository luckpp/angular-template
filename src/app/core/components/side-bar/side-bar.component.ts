import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventBusService } from '../../services/infrastructure';
import { Subscription } from 'rxjs';
import { Payload, PayloadType } from 'src/app/shared/model';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {
  
  message!: string;
  private subscription$!: Subscription;

  constructor(
    private eventBusService: EventBusService
  ) {
  }

  ngOnInit(): void {
    this.subscription$ = this.eventBusService.on(
      PayloadType.GenericMessage,
      (payload: Payload) => {
        this.message = payload.message;
      });
  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
