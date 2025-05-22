import { Injectable, OnModuleInit } from '@nestjs/common';
import { MessageLoggerService } from 'src/message-logger/providers/message-logger.service';

@Injectable()
export class MainService implements OnModuleInit {
    constructor(private readonly messageLoggerService: MessageLoggerService) {}

    onModuleInit() {
    console.log('MainService initialized. Adding messages...');
    this.messageLoggerService.addMessage('Pierwsza wiadomość testowa.');
    this.messageLoggerService.addMessage('Druga ważna informacja.');
    this.messageLoggerService.addMessage('Ostatnia, trzecia wiadomość.');
    this.messageLoggerService.printAllMessages();

    setTimeout(() => {
      this.messageLoggerService.addMessage('Wiadomość dodana po 2 sekundach.');
      this.messageLoggerService.printAllMessages();
    }, 2000);
    
  }
}
