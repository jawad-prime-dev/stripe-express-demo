import { Money } from "../money";
import { CustomerId, PaymentId } from "../value-objects";
import { DomainEvent } from "./domain-event";

export class PaymentCreatedEvent extends DomainEvent {
  public readonly paymentId: PaymentId;
  public readonly customerId: CustomerId;
  public readonly money: Money;

  constructor(paymentId: PaymentId, customerId: CustomerId, money: Money) {
    super();
    this.paymentId = paymentId;
    this.customerId = customerId;
    this.money = money;
  }
}