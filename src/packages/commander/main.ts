import { NestFactory } from '@nestjs/core';
import { CommandModule } from './command.module';
import { CommandService } from './command.service';

async function bootstrap() {
    const appContext = await NestFactory.createApplicationContext(CommandModule);
    const commandService = appContext.get(CommandService);
}
bootstrap();