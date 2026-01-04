// ===== Branded Primitive Types =====
export type Currency = string & { readonly __brand: "Currency" };
export type Amount = number & { readonly __brand: "Amount" };
export type IdempotencyKey = string & { readonly __brand: "IdempotencyKey" };
export type Event = Buffer & { readonly __brand: "Event" };
export type RawEvent = Buffer & { readonly __brand: "RawEvent" };
export type RawEventVerificationSignature = string & { readonly __brand: "RawEventVerificationSignature" };
export type PaymentConfirmationSecret = string & { readonly __brand: "PaymentConfirmationSecret" };
export type CreatedAt = Date & { readonly __brand: "CreatedAt" };
export type ModifiedAt = Date & { readonly __brand: "ModifiedAt" };
export type UserId = string & { readonly __brand: "UserId" };


// ===== Payment ID =====
export abstract class PaymentId {
    private readonly _brand!: void;
}
export class HasPaymentId extends PaymentId {
  constructor(public readonly value: string) {
    super();
  }
}
export class NoPaymentId extends PaymentId {}


// ===== Payment Reference =====
export abstract class PaymentReference {
  protected readonly _brand!: void;
}
export class HasPaymentReference extends PaymentReference {
  constructor(public readonly value: string) {
    super();
  }
}
export class NoPaymentReference extends PaymentReference {}


// ===== Customer ID =====
export abstract class CustomerId {
    private readonly _brand!: void;
}
export class HasCustomerId extends CustomerId {
  constructor(public readonly value: string) {
    super();
  }
}
export class NoCustomerId extends CustomerId {}