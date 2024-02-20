import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkingService {
	getParkedCars(): string[] {
		return ['Parked Car 1', 'Parked Car 2', 'Parked Car 3'];
	}
}
