// car-static.module.ts
import { Module } from '@nestjs/common';
import { CarStaticController } from './car-static.controller';
import { CarService } from './cars.service';
import { ParkingService } from '../Parking/parking.service';

@Module({
	controllers: [CarStaticController],
	providers: [CarService, ParkingService],
})
export class CarStaticModule {}
