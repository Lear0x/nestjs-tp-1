// car-static.controller.ts
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CarService } from './cars.service';
import { ParkingService } from '../Parking/parking.service';
import { Car } from './cars.model';
import { Parking } from '../Parking/parking.model';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('cars-static')
@ApiTags('Cars')
export class CarStaticController {
	constructor(
		private readonly carService: CarService,
		private readonly parkingService: ParkingService
	) { }

	@Get('cars')
	@ApiResponse({ status: 200, description: 'Get all static cars', type: Car })
	getStaticCars(): Car[] {
		return this.carService.getCars();
	}

	@Post('add-car')
	@ApiOperation({ summary: 'Add a new car' })
	@ApiQuery({ name: 'brand', description: 'Brand of the car', type: String })
	@ApiQuery({ name: 'color', description: 'Color of the car', type: String })
	addCar(@Query('brand') brand: string, @Query('color') color: string): Car {
		return this.carService.addCar(brand, color);
	}

	@Get('parkings')
	@ApiResponse({ status: 200, description: 'Get all static parking', type: Parking })
	getParkings(): Parking[] {
		return this.parkingService.getParkings();
	}

	@ApiOperation({ summary: 'Add a new parking' })
	@ApiQuery({ name: 'name', description: 'Name of the parking', type: String })
	@ApiQuery({ name: 'maxCapacity', description: 'Maximum capacity of the parking', type: Number })
	@Post('create-parking')
	createParking(
		@Query('name') name: string,
		@Query('maxCapacity') maxCapacity: number
	): Parking {
		return this.parkingService.createParking(name, maxCapacity);
	}

	@Post('add-car-to-parking')
	@ApiOperation({ summary: 'Add a car to a parking' })
	@ApiQuery({ name: 'carId', description: 'ID of the car to add', type: Number })
	@ApiQuery({ name: 'parkingId', description: 'ID of the parking to add the car to', type: Number })
	@ApiResponse({ status: 200, description: 'Car successfully added to the parking', type: Boolean })
	addCarToParking(
		@Query('carId') carId: number,
		@Query('parkingId') parkingId: number
	): boolean {
		const cars = this.carService.getCars();
		const parkings = this.parkingService.getParkings();
		const car = this.carService.getCars().find(c => c.id === +carId);
		const parking = this.parkingService.getParkings().find(p => p.id === +parkingId);
		if (car && parking) {
			return this.parkingService.addCarToParking(car, parking);
		}
		return false;
	}
}
