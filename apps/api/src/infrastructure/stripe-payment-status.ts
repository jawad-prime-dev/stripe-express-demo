import { PaymentStatus } from "@stripe-express-demo/shared";

export enum StripePaymentStatus {
  PaymentCreated = "payment_intent.created",
  PaymentProcessing = "payment_intent.processing",
  PaymentSucceeded = "payment_intent.succeeded",
  PaymentFailed = "payment_intent.payment_failed",
  PaymentCanceled = "payment_intent.canceled",
  PaymentRequiresAction = "payment_intent.requires_action",
  PaymentRequiresPaymentMethod = "payment_intent.requires_payment_method"
}

export function mapStripePaymentStatusToDomain(stripeStatus: StripePaymentStatus): PaymentStatus {
  switch (stripeStatus) {
    case StripePaymentStatus.PaymentCreated:
    case StripePaymentStatus.PaymentProcessing:
    case StripePaymentStatus.PaymentRequiresPaymentMethod:
      return PaymentStatus.PENDING;

    case StripePaymentStatus.PaymentSucceeded:
      return PaymentStatus.SUCCEEDED;

    case StripePaymentStatus.PaymentFailed:
      return PaymentStatus.FAILED;

    case StripePaymentStatus.PaymentCanceled:
      return PaymentStatus.CANCELED;

    case StripePaymentStatus.PaymentRequiresAction:
      return PaymentStatus.REQUIRES_ACTION;

    default:
      return PaymentStatus.PENDING; // fallback
  }
}