import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule } from './main/main.module';
import { MessageLoggerModule } from './message-logger/message-logger.module';
import { PaymentModule } from './payment/payment.module';
import { NotifierModule } from './notifier/notifier.module';

@Module({
  imports: [MainModule, MessageLoggerModule, PaymentModule,NotifierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
