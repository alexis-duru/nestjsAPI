import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();

// Import de NestFactory 
// Import de AppModule
// Fonction asynchrone bootstrap
// Application lancée sur le port 8000
// Framework MVC comme Spring, Laravel, Symfony dans d'autres languages.
