// app/contracts/event-type.ts
export enum StripeEventType {
  PaymentCreated = "payment.created",
  PaymentConfirmed = "payment.confirmed",
  PaymentFailed = "payment.failed",
}