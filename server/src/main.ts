import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  //
  // Cors

  app.enableCors()

  //
  // Validations

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )

  //
  // Swagger

  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('The Todo API description')
    .setVersion('1.0')
    .build()

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (_, methodKey) => methodKey,
  }

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Todo API',
  }

  const document = SwaggerModule.createDocument(app, config, options)
  SwaggerModule.setup('api', app, document, customOptions)

  //
  // Listen

  await app.listen(3000)
}

bootstrap()
