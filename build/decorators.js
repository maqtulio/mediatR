"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = exports.CommandHandler = exports.registeredCommands = exports.registeredHandlers = void 0;
require("reflect-metadata");
const ICommand_1 = require("./ICommand");
const IHandler_1 = require("./IHandler");
exports.registeredHandlers = {};
exports.registeredCommands = {};
/**
 * @name commandClass CommandClass used on the handler to be decorated.
 */
const CommandHandler = (commandClass) => {
    return function (target) {
        if (Object.getPrototypeOf(target.prototype).constructor.name !== IHandler_1.IHandler.name) {
            throw new Error(`Decorated commandHandler ${target.name} must extend IHandler`);
        }
        ;
        exports.registeredHandlers[commandClass.name] = target;
    };
};
exports.CommandHandler = CommandHandler;
/**
 * @summary Command decorator.
 */
const Command = () => {
    return function (target) {
        if (Object.getPrototypeOf(target.prototype).constructor.name !== ICommand_1.ICommand.name) {
            throw new Error(`Decorated command ${target.name} must extend ICommand`);
        }
        ;
        exports.registeredCommands[target.name] = target;
    };
};
exports.Command = Command;
