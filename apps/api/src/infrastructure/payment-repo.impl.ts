import { HasPaymentReference, ok, Payment, PaymentReference, Result } from "@stripe-express-demo/shared";
import { IPaymentRepo } from "../application/payment-repo";

export class PaymentRepo implements IPaymentRepo{
    async createOneTimePayment(payment: Payment): Promise<Result<PaymentReference>> {
    return ok(new HasPaymentReference("pi_mock_123" ));
    }
}