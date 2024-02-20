// car-logger.middleware.ts
import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class CarLoggerMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: Function) {
		console.log(`Middleware: Logging car-related request for URL: ${req.url}`);
		next();
	}
}
