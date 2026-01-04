import { Payment, Result, PaymentReference, DomainEvent, DomainEventTuple, IdempotencyKey } from "@stripe-express-demo/shared";

export interface IPaymentRepo{
    persistPayment(payment: Payment, idempotencyKey: IdempotencyKey): Promise<Result<Payment>>
}