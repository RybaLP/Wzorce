import { Module } from '@nestjs/common';
import { PaymentService } from './providers/payment.service';
import { LegacyPaymentSystem } from './legacy-payment/legacy-payment-system';
import { CardPaymentSystem } from './card-payment/card-payment-system';
import { CardPaymentAdapter } from './card-payment/card-payment.adapter';
import { LegacyPaymentAdapter } from './legacy-payment/legacy-payment-adapter';
import { PayPalPaymentSystem } from './paypal-payment/paypal-payment-system';
import { PayPalPaymentAdapter } from './paypal-payment/paypal-payment.adapter';

@Module({
  providers: [
    PaymentService,
    LegacyPaymentSystem,
    LegacyPaymentAdapter,
    PayPalPaymentSystem,
    PayPalPaymentAdapter,
    CardPaymentSystem,
    CardPaymentAdapter,
  ],
})
export class PaymentModule {}
