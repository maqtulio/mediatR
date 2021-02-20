import "reflect-metadata";
import { RegisteredHandlers } from './decorators.js';
export { CommandHandler } from './decorators.js';
export { registerHandlers } from "./registerDecorators.js";
export { IHandler } from './IHandler.js';
export class MediatR {
    /**
     * Mediator class.
     */
    constructor() {
        this.registeredCommandsNames = [];
        this.registeredCommandsNames = Object.keys(RegisteredHandlers);
    }
    async Send(command) {
        if (!this.registeredCommandsNames.includes(command.constructor.name)) {
            throw new Error(`Handler for the command ${command.constructor.name} didn't get registred.`);
        }
        return new RegisteredHandlers[command.constructor.name]().Handle(command);
    }
}
