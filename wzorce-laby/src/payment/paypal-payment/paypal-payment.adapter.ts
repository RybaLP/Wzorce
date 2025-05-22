import { Injectable } from '@nestjs/common';
import { IPaymentProcessor } from '../interfaces/payment.interface';
import { PayPalPaymentSystem } from './paypal-payment-system';

@Injectable()
export class PayPalPaymentAdapter implements IPaymentProcessor {
  constructor(private readonly payPalPaymentSystem: PayPalPaymentSystem) {}

  processPayment(amount: number): void {
    console.log('[Adapter] Adapting PayPal payment...');
    // Tutaj PayPal wymaga waluty, ale nasz PaymentProcessor jej nie dostarcza,
    // więc możemy użyć domyślnej lub założyć, że jest to PLN.
    this.payPalPaymentSystem.sendMoney(amount, 'PLN');
  }
}