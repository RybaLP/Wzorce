import { Module } from '@nestjs/common';
import { MainService } from './providers/main.service';
import { MessageLoggerService } from 'src/message-logger/providers/message-logger.service';

@Module({
  providers: [MainService],
  imports : [MessageLoggerService]
})
export class MainModule {}
