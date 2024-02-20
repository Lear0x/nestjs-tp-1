// parking.service.ts
import { Injectable } from '@nestjs/common';
import { Parking } from './parking.model';
import { Car } from '../Cars/cars.model';

@Injectable()
export class ParkingService {
	private readonly parkings: Parking[] = [];

	getParkings(): Parking[] {
		return this.parkings;
	}

	createParking(maxCapacity: number): Parking {
		const newParking = new Parking(maxCapacity);
		this.parkings.push(newParking);
		return newParking;
	}

	addCarToParking(car: Car, parking: Parking): boolean {
		if (parking.addCar(car)) {
		return true;
		}
		return false;
	}
}