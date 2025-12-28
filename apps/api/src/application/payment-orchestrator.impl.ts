import { Payment } from '../domain/payment';
import { PaymentStatus } from '../domain/payment-status';
import { ok, Result } from '../domain/shared/result';
import { IPaymentGateway } from './payment-gateway';
import { IPaymentOrchestrator } from './payment-orchestrator';
import { HasPaymentId, HasPaymentReference } from '../domain/value-objects';

export class PaymentOrchestrator implements IPaymentOrchestrator{
    constructor(private readonly gateway: IPaymentGateway) {}

    async createOneTimePayment(payment: Payment): Promise<Result<Payment>> {
        const result = await this.gateway.createOneTimePayment(payment);
        if (!result.ok) return result;

        return ok(new Payment({
        ...payment,
        reference: result.value,
        status: PaymentStatus.PENDING,
        }));
    }
}