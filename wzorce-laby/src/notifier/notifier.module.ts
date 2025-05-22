import { Module } from '@nestjs/common';
import { EmailNotifier } from './providers/notifier.service';
import { NotifierService } from './notifier.service';

@Module({
  providers: [EmailNotifier, NotifierService],
  exports : [EmailNotifier]
})
export class NotifierModule {}
