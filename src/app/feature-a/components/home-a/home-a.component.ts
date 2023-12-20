import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/core/services/infrastructure';
import { Envelope, Payload, PayloadType } from 'src/app/shared/model';

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.css']
})
export class HomeAComponent implements OnInit {

  constructor(
    private eventBusService : EventBusService
  ) {
  }

  ngOnInit(): void {
  }

  sendNotification() {

    
  }

  clear(): void {
    this.sendMessage('');
  }

  sayHello(): void {
    this.sendMessage('Hello from Home A');
  }

  private sendMessage(message: string): void {
    const payload = new Payload();
    payload.message = message;

    const envelope = new Envelope();
    envelope.type = PayloadType.GenericMessage;
    envelope.payload = payload;
    
    this.eventBusService.emit(envelope)
  }

}
