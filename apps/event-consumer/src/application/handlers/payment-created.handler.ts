import { PaymentCreatedEvent, EventEnvelope, DomainEventType } from "@stripe-express-demo/shared";
import { EventHandler } from "./event-handler";

export class PaymentCreatedHandler implements EventHandler{
  eventType = DomainEventType.PaymentCreated;

  async handle(eventEnvelope: EventEnvelope) {

    const event = eventEnvelope.event as PaymentCreatedEvent;

    console.log("Payment Created Event:", event);
  }
}
