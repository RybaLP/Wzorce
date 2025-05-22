import { Module } from '@nestjs/common';
import { MessageLoggerService } from './providers/message-logger.service';
import { MessageLoggerController } from './message-logger.controller';

@Module({
  providers: [MessageLoggerService],
  controllers: [MessageLoggerController]
})
export class MessageLoggerModule {}
