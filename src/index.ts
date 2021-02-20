import "reflect-metadata"
import { RegisteredHandlers } from './decorators.js';
export { CommandHandler } from './decorators.js';
export { registerHandlers } from "./registerDecorators.js";
export { IHandler } from './IHandler.js';

export class MediatR {
    registeredCommandsNames: string[] = [];
    /**
     * Mediator class.
     */
    constructor() {
        this.registeredCommandsNames = Object.keys(RegisteredHandlers);
    }

    public async Send(command: any): Promise<any> {

        if (!this.registeredCommandsNames.includes(command.constructor.name)) {
            throw new Error(`Handler for the command ${command.constructor.name} didn't get registred.`)
        }

        return new RegisteredHandlers[command.constructor.name]().Handle(command);
    }
}