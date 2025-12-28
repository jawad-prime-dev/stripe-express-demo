import { Payment } from '../domain/payment';
import { Result } from '../domain/shared/result';
import { PaymentReference } from '../domain/value-objects';

export interface IPaymentGateway{
    createOneTimePayment(payment: Payment): Promise<Result<PaymentReference>>
}