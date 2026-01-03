import { Result, DomainEventTuple } from "@stripe-express-demo/shared";

export interface IPaymentGateway{
    constructEvent(rawBody: Buffer, signature: string): Promise<Result<DomainEventTuple>>;
}