import { Injectable } from '@nestjs/common';
import { Car } from './cars.model';



@Injectable()
export class CarService {

	private readonly cars: Car[] = [];

	getCars(): Car[] {
		return this.cars;
	}

	addCar(brand: string, color: string): Car {
		const id = this.generateUniqueId();
		const newCar = new Car(id, brand, color);
		this.cars.push(newCar);
		return newCar;
	}


	private generateUniqueId(): number {
		if (this.cars.length > 0) {
			const lastParking = this.cars[this.cars.length - 1];
			const newId = lastParking.id + 1;
			return newId;
		} else {
			return 1;
		}
	}
}
