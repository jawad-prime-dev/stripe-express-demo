import { HasPaymentId, HasPaymentReference, IdempotencyKey, ok, Payment, PaymentReference, Result } from "@stripe-express-demo/shared";
import { IPaymentRepo } from "../application/payment-repo";
import { randomUUID } from "crypto";

export class PaymentRepo implements IPaymentRepo{
    async persistPayment(payment: Payment, idempotencyKey: IdempotencyKey): Promise<Result<Payment>> {
        return ok(new Payment({...payment, id: new HasPaymentId(randomUUID()) } ));
    }
}