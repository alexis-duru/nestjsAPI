"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const command_module_1 = require("./command.module");
const command_service_1 = require("./command.service");
async function bootstrap() {
    const appContext = await core_1.NestFactory.createApplicationContext(command_module_1.CommandModule);
    const commandService = appContext.get(command_service_1.CommandService);
}
bootstrap();
//# sourceMappingURL=main.js.map