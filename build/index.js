"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICommand = exports.IHandler = exports.registerHandlers = exports.registeredCommands = exports.Command = exports.CommandHandler = exports.MediatR = void 0;
require("reflect-metadata");
const decorators_1 = require("./decorators");
const ICommand_1 = require("./ICommand");
class MediatR {
    /**
     * Mediator class.
     */
    constructor() {
        this.registeredCommandsNames = [];
        this.registeredCommandsNames = Object.keys(decorators_1.registeredHandlers);
    }
    async Send(command) {
        if (!(command instanceof ICommand_1.ICommand) || !Object.keys(decorators_1.registeredCommands).includes(command.constructor.name)) {
            throw new Error(`Please decorate your command and extend ICommand => ${command.constructor.name}.`);
        }
        if (!this.registeredCommandsNames.includes(command.constructor.name)) {
            throw new Error(`Handler for the command ${command.constructor.name} didn't get registred.`);
        }
        return new decorators_1.registeredHandlers[command.constructor.name]().Handle(command);
    }
}
exports.MediatR = MediatR;
var decorators_2 = require("./decorators");
Object.defineProperty(exports, "CommandHandler", { enumerable: true, get: function () { return decorators_2.CommandHandler; } });
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return decorators_2.Command; } });
Object.defineProperty(exports, "registeredCommands", { enumerable: true, get: function () { return decorators_2.registeredCommands; } });
var registerDecorators_1 = require("./registerDecorators");
Object.defineProperty(exports, "registerHandlers", { enumerable: true, get: function () { return registerDecorators_1.registerHandlers; } });
var IHandler_1 = require("./IHandler");
Object.defineProperty(exports, "IHandler", { enumerable: true, get: function () { return IHandler_1.IHandler; } });
var ICommand_2 = require("./ICommand");
Object.defineProperty(exports, "ICommand", { enumerable: true, get: function () { return ICommand_2.ICommand; } });
