import { Payment, Result,RawEvent, RawEventVerificationSignature } from "@stripe-express-demo/shared";

export interface IPaymentOrchestrator{
    createOneTimePayment(payment: Payment): Promise<Result<Payment>>
    handleWebhookEvent(RawEvent:RawEvent, rawEventVerificationSignature: RawEventVerificationSignature): Promise<Result>;
}