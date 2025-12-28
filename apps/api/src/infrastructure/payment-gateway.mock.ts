import { IPaymentGateway } from "../application/payment-gateway";
import { Payment } from "../domain/payment";
import { ok, Result } from "../domain/shared/result";
import { HasPaymentReference, PaymentReference } from "../domain/value-objects";

export class MockPaymentGateway implements IPaymentGateway{
    async createOneTimePayment(payment: Payment): Promise<Result<PaymentReference>> {
    return ok(new HasPaymentReference("pi_mock_123" ));
  }
}