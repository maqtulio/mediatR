import 'reflect-metadata';
import { registeredHandlers, registeredCommands } from './decorators';
import { ICommand } from './ICommand';

export class MediatR {
    public registeredCommandsNames: string[];
    private registeredHandlers = registeredHandlers;
    private registeredCommands = registeredCommands;
    /**
     * Mediator class.
     */
    constructor() {
        this.registeredCommandsNames = Object.keys(registeredCommands);
    }

    public async Send<T>(command: ICommand<T>): Promise<T> {
        if (!(command instanceof ICommand) || !Object.keys(this.registeredCommands).includes(command.constructor.name)) {
            throw new Error(`Please decorate your command and extend ICommand => ${command.constructor.name}.`);
        }

        if (!this.registeredCommandsNames.includes(command.constructor.name)) {
            throw new Error(`Handler for the command ${command.constructor.name} didn't get registred.`);
        }
        
        return new this.registeredHandlers[command.constructor.name]().Handle(command);
    }
}

export { CommandHandler, Command } from './decorators';
export { registerHandlers } from './registerDecorators';
export { IHandler } from './IHandler';
export { ICommand } from './ICommand';
