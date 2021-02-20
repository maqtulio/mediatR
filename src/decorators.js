import "reflect-metadata";
import { ICommand } from "./ICommand.js";
import { IHandler } from "./IHandler.js";
export const registeredHandlers = {};
export const registeredCommands = {};
export const registeredCommandValidators = {};
/**
 * @name commandClass CommandClass used on the handler to be decorated.
 */
export const CommandHandler = (commandClass) => {
    return function (target) {
        if (Object.getPrototypeOf(target.prototype).constructor.name !== IHandler.name) {
            throw new Error(`Decorated commandHandler ${target.name} must extend IHandler`);
        }
        ;
        registeredHandlers[commandClass.name] = target;
    };
};
/**
 * @summary Command decorator.
 */
export const Command = () => {
    return function (target) {
        if (Object.getPrototypeOf(target.prototype).constructor.name !== ICommand.name) {
            throw new Error(`Decorated command ${target.name} must extend ICommand`);
        }
        ;
        registeredCommands[target.name] = target;
    };
};
