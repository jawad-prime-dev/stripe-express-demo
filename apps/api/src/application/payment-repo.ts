import { Payment, Result, PaymentReference, DomainEvent, DomainEventTuple } from "@stripe-express-demo/shared";

export interface IPaymentRepo{
    createOneTimePayment(payment: Payment): Promise<Result<PaymentReference>>
}