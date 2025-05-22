import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EmailNotifier } from './notifier/providers/notifier.service';
import { INotifier } from './notifier/interfaces/notifier';
import { FacebookNotifier } from './notifier/decorators/facebook.decorator';
import { SlackNotifier } from './notifier/decorators/slack.decorator';
import { SMSNotifier } from './notifier/notifier.service.spec';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  const emailNotifier = new EmailNotifier();
  const complexNotifier: INotifier = new SMSNotifier(
    new SlackNotifier(
      new FacebookNotifier(emailNotifier)
    )
  );

  console.log('\nWysyłanie wiadomości przez złożony notyfikator:');
  complexNotifier.send('Bardzo pilna wiadomość systemowa!');

  console.log('\n--- Testowanie innego łańcucha dekoratorów (tylko email i SMS) ---');
  const simpleNotifier: INotifier = new SMSNotifier(emailNotifier);
  simpleNotifier.send('Krótka wiadomość testowa.');

  await app.close(); 
}
bootstrap();
