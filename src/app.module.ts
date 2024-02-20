// app.module.ts
import { Module } from '@nestjs/common';
import { CarStaticModule } from './Cars/car-static.module';
//import { CarDynamicModule } from './car-dynamic/car-dynamic.module';
import { CarLoggerMiddleware } from './Cars/car-logger.middleware';

@Module({
	imports: [CarStaticModule],
	providers: [CarLoggerMiddleware],
})
export class AppModule {}
