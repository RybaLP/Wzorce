export interface IPaymentProcessor {
  processPayment(amount: number): void;
}