// app.module.ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CarStaticModule } from './Cars/car-static.module';
import { CarLoggerMiddleware } from './Cars/car-logger.middleware';
import { ConfigurationModule } from './Configuration/configuration.module';
import { AppController } from './app.controller';
import { CarStaticController } from './Cars/car-static.controller';

export const options: Record<string, string> = {
	environment: 'development',
	port: '3000',
};



@Module({
	imports: [CarStaticModule, ConfigurationModule.register(options)],
	providers: [CarLoggerMiddleware],

})

export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(CarLoggerMiddleware).forRoutes(AppController, CarStaticController);
	}
}
