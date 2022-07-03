import { NestFactory } from '@nestjs/core';
import { createDatabase, dropDatabase } from 'typeorm-extension';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import configuration from './config/configuration';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const { database } = configuration();
  //await dropDatabase({ }, database as any)
  await createDatabase({ ifNotExist: true }, database as any);
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Solr Projects')
    .setDescription('Simple CRUD for managing projects')
    .setVersion('1.0')
    .addTag('projects')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);


  //Globally use the Validation technique
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, }));
  await app.listen(3000)
  .then(() => {
    console.log("Successfully stared on port 3000");
    })
    .catch((error) => {
      console.log(error);
    })
}
bootstrap();
