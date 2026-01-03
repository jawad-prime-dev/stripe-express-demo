import { Payment, Result, PaymentStatus, ok, RawEventVerificationSignature, RawEvent, okEmpty } from '@stripe-express-demo/shared';
import { IPaymentGateway } from './payment-gateway';
import { IPaymentOrchestrator } from './payment-orchestrator';
import { IQueueMessageSender } from './queue-message-sender';
import { IPaymentRepo } from './payment-repo';

export class PaymentOrchestrator implements IPaymentOrchestrator{
    constructor(
        private readonly gateway: IPaymentGateway, 
        private readonly repo: IPaymentRepo, 
        private readonly queueMessageSender: IQueueMessageSender
    ) {}
    
    async handleWebhookEvent(rawEvent: RawEvent, rawEventVerificationSignature: RawEventVerificationSignature): Promise<Result> {
        const eventResult = await this.gateway.constructEvent(rawEvent, rawEventVerificationSignature);
        if (!eventResult.ok) return eventResult;

        const [event, eventType] = eventResult.value
        await this.queueMessageSender.send({ eventType: eventType, event: event})

        return okEmpty();
    }

    async createOneTimePayment(payment: Payment): Promise<Result<Payment>> {
        const result = await this.repo.createOneTimePayment(payment);
        if (!result.ok) return result;

        return ok(new Payment({
        ...payment,
        reference: result.value,
        status: PaymentStatus.PENDING,
        }));
    }
}