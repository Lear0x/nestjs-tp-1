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

	createParking(name: string, maxCapacity: number): Parking {
		const id = this.generateUniqueId();
		const newParking = new Parking(id, name, maxCapacity);
		this.parkings.push(newParking);
		return newParking;
	}

	addCarToParking(car: Car, parking: Parking): boolean {
		if (parking.addCar(car)) {
			return true;
		}
		return false;
	}

	private generateUniqueId(): number {
		if (this.parkings.length > 0) {
			const lastParking = this.parkings[this.parkings.length - 1];
			const newId = lastParking.id + 1;
			return newId;
		} else {
			return 1;
		}
	}
}