// car-static.controller.ts
// car-static.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarService } from './cars.service';
import { ParkingService } from '../Parking/parking.service';
import { Car } from './cars.model';
import { Parking } from '../Parking/parking.model';

@Controller('cars-static')
export class CarStaticController {
	constructor(
		private readonly carService: CarService,
		private readonly parkingService: ParkingService
	) {}

	@Get('cars')
	getStaticCars(): Car[] {
		return this.carService.getCars();
	}

	@Post('add-car')
	addCar(@Body() carData: { brand: string; color: string }): Car {
		return this.carService.addCar(carData.brand, carData.color);
	}

	@Get('parkings')
	getParkings(): Parking[] {
		return this.parkingService.getParkings();
	}

	@Post('create-parking')
	createParking(@Body() parkingData: { maxCapacity: number }): Parking {
		return this.parkingService.createParking(parkingData.maxCapacity);
	}

	@Post('add-car-to-parking')
	addCarToParking(
		@Body() requestData: { carId: number; parkingId: number },
	): boolean {
		const car = this.carService.getCars()[requestData.carId];
		const parking = this.parkingService.getParkings()[requestData.parkingId];
		if (car && parking) {
			return this.parkingService.addCarToParking(car, parking);
		}
		return false;
	}
}