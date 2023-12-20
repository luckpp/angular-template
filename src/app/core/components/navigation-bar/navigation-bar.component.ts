import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventBusService } from '../../services/infrastructure';
import { Subscription } from 'rxjs';
import { Payload, PayloadType } from 'src/app/shared/model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  message!: string;

  private subscription!: Subscription;

  constructor(
    private eventBusService: EventBusService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.eventBusService.on(
      PayloadType.GenericMessage,
      (payload: Payload) => {
        this.message = payload.message;
      });
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
