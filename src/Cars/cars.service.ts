import { Injectable } from '@nestjs/common';



@Injectable()
export class CarService {
	getCars(): string[] {
		return ['Car 1', 'Car 2', 'Car 3'];
	}
}
