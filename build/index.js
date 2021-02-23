import "reflect-metadata";
import { registeredHandlers, registeredCommands } from './decorators';
import { ICommand } from "./ICommand";
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
export { CommandHandler, Command, registeredCommands } from './decorators';
export { registerHandlers } from "./registerDecorators";
export { IHandler } from './IHandler';
export { ICommand } from "./ICommand";
