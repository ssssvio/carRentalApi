import 'dotenv/config';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { TrimPipe } from './common/pipes/trim-pipes';
import { AllExceptionsFilter } from './common/filter/all-exceptions.filter';
import { AppDataSource } from './infra/typeorm/ormconfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new TrimPipe(),
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  setupSwagger(app);
  await app.listen(process.env.PORT);
}
bootstrap();