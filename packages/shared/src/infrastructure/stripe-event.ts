export enum StripeEvent {
  // Payment Intent lifecycle
  PaymentIntentCreated = "payment_intent.created",
  PaymentIntentProcessing = "payment_intent.processing",
  PaymentIntentSucceeded = "payment_intent.succeeded",
  PaymentIntentPaymentFailed = "payment_intent.payment_failed",
  PaymentIntentCanceled = "payment_intent.canceled",
  PaymentIntentRequiresAction = "payment_intent.requires_action",
  PaymentIntentRequiresPaymentMethod = "payment_intent.requires_payment_method",
}
