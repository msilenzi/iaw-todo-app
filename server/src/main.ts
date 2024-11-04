import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  app.enableCors()

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
    .addOAuth2(
      {
        type: 'oauth2',
        flows: {
          implicit: {
            authorizationUrl: `${configService.get('AUTH0_ISSUER_URL')}authorize?audience=${configService.get('AUTH0_AUDIENCE')}`,
            tokenUrl: configService.get('AUTH0_AUDIENCE'),
            scopes: {},
          },
        },
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'Auth0'
    )
    .build()

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (_, methodKey) => methodKey,
  }

  const document = SwaggerModule.createDocument(app, config, options)

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Todo API',
    swaggerOptions: {
      initOAuth: {
        // this will pre-fill the client id in the Swagger authorization form
        clientId: configService.get('AUTH0_CLIENT_ID'),
      },
      oauth2RedirectUrl: 'http://localhost:3000/api/oauth2-redirect.html',
    },
  }

  SwaggerModule.setup('api', app, document, customOptions)

  //
  // Listen

  await app.listen(configService.get<number>('PORT', 3000))
}

bootstrap()
