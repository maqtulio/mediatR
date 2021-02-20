import "reflect-metadata";
import { registeredHandlers, registeredCommands } from './decorators.js';
import { ICommand } from "./ICommand.js";
export class MediatR {
    /**
     * Mediator class.
     */
    constructor() {
        this.registeredCommandsNames = [];
        this.registeredCommandsNames = Object.keys(registeredHandlers);
    }
    async Send(command) {
        if (!(command instanceof ICommand) || !Object.keys(registeredCommands).includes(command.constructor.name)) {
            throw new Error(`Please decorate your command and extend ICommand => ${command.constructor.name}.`);
        }
        if (!this.registeredCommandsNames.includes(command.constructor.name)) {
            throw new Error(`Handler for the command ${command.constructor.name} didn't get registred.`);
        }
        return new registeredHandlers[command.constructor.name]().Handle(command);
    }
}
export { CommandHandler, Command, registeredCommands, registeredCommandValidators, CommandValidator } from './decorators.js';
export { registerHandlers } from "./registerDecorators.js";
export { IHandler } from './IHandler.js';
export { ICommand } from "./ICommand.js";
