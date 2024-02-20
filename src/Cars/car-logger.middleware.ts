import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CarLoggerMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: Function) {
		const timestamp = new Date().toLocaleString();
		const method = req.method;
		const url = req.url;
		const queryParams = JSON.stringify(req.query);
		const bodyParams = JSON.stringify(req.body);

		console.log(`[${timestamp}] ${method} request to ${url}`);
		console.log(`  Query Parameters: ${queryParams}`);
		console.log(`  Body Parameters: ${bodyParams}`);

		next();
	}
}
