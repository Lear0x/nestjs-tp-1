import { Injectable } from '@nestjs/common';
import { Car } from './cars.model';



@Injectable()
export class CarService {

	private readonly cars: Car[] = [];

	getCars(): Car[] {
		return this.cars;
	}

	addCar(brand: string, color: string): Car {
		const newCar = new Car(brand, color);
		this.cars.push(newCar);
		return newCar;
	}
}
