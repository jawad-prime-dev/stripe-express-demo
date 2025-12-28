import { Payment } from "../domain/payment";
import { Result } from "../domain/shared/result";

export interface IPaymentOrchestrator{
    createOneTimePayment(payment: Payment): Promise<Result<Payment>>
}