import { Payment, Result, PaymentReference, HasPaymentReference, ok, DomainEvent, DomainEventType, Amount, CustomerId, Currency, PaymentCreatedEvent, DomainEventTuple } from "@stripe-express-demo/shared";
import { IPaymentGateway } from "../application/payment-gateway";
import { StripeEventType } from "./stripe-event-type";
import { HasPaymentId } from "@stripe-express-demo/shared/src/domain/value-objects";

export class MockStripePaymentGateway implements IPaymentGateway{
  async constructEvent(rawBody: Buffer, signature: string) : Promise<Result<DomainEventTuple>> {

    console.log("constructing event")
    const stripeEvent = StripeEventType.PaymentCreated;

    const domainEvent = (() => { switch (stripeEvent) {
      case StripeEventType.PaymentCreated: {
        return [
          new PaymentCreatedEvent(new HasPaymentId("pi_123"), "cus_321" as CustomerId, { amount: 100 as Amount, currency: "usd" as Currency }),
          DomainEventType.PaymentCreated
        ] as const
      }

    }})();

    return ok(domainEvent)
  }
}