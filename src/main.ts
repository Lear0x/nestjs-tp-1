import { NestFactory } from '@nestjs/core';
import { AppModule, options } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const options_sawgger = new DocumentBuilder()
		.setTitle('NestJS Car Parking API')
		.setDescription('API for managing cars and parking')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, options_sawgger);
	SwaggerModule.setup('api', app, document);

	await app.listen(options.port);
	console.log('Server started on http://localhost:3000');
	console.log('Swagger started on http://localhost:3000/api');
}


bootstrap();
