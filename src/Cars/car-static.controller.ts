// car-static.controller.ts
import { Controller, Get } from '@nestjs/common';
import { CarService } from './cars.service';
import { ParkingService } from '../Parking/parking.service';

@Controller('cars-static')
export class CarStaticController {
	constructor(private readonly carService: CarService, private readonly parkingService: ParkingService) {}

	@Get('cars')
	getStaticCars(): string[] {
		return this.carService.getCars();
	}

	@Get('parked-cars')	
	getParkedCars(): string[] {
		return this.parkingService.getParkedCars();
	}
}
