import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { IPaymentProcessor } from '../interfaces/payment.interface';
import { LegacyPaymentAdapter } from '../legacy-payment/legacy-payment-adapter';
import { PayPalPaymentAdapter } from '../paypal-payment/paypal-payment.adapter';
import { CardPaymentAdapter } from '../card-payment/card-payment.adapter';

@Injectable()
export class PaymentService implements OnModuleInit {
  private readonly logger = new Logger(PaymentService.name);

  constructor(
    private readonly legacyAdapter: LegacyPaymentAdapter,
    private readonly paypalAdapter: PayPalPaymentAdapter,
    private readonly cardAdapter: CardPaymentAdapter,
  ) {}

  onModuleInit() {
    this.logger.log('--- Testowanie Payment Adapters ---');

    this.logger.log('\nPlatnosc przez Legacy System Adapter:');
    this.processPayment(this.legacyAdapter, 100.50);

    this.logger.log('\nPlatnosc przez PayPal Adapter:');
    this.processPayment(this.paypalAdapter, 250.00);

    this.logger.log('\nPlatnosc przez Card Adapter:');
    this.processPayment(this.cardAdapter, 75.25);

    this.logger.log('\n--- Wszystkie platnosci ---');
  }

  private processPayment(processor: IPaymentProcessor, amount: number): void {
    processor.processPayment(amount);
  }
}