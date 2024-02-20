import { Car } from '../Cars/cars.model';

export class Parking {
	constructor(public maxCapacity: number, public cars: Car[] = []) {}

	addCar(car: Car): boolean {
		if (this.cars.length < this.maxCapacity) {
			this.cars.push(car);
			return true;
		}
		return false;
	}
} 