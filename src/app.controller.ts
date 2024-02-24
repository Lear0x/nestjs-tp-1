import { Controller, Get } from '@nestjs/common';
import { ConfigurationService } from './configuration/configuration.service';

@Controller()
export class AppController {

	constructor(private configService: ConfigurationService) {}

	@Get()
	getHello(): string {
		return 'Hello NestJS!';
	}

	@Get('environment')
	getEnvironment(): string {
		return this.configService.getValue('environment');
	}
}
