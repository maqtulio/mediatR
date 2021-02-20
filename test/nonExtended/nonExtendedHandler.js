var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IHandler } from '../../src/index.js';
import { CommandHandler } from '../../src/decorators.js';
import { NonExtendedTestCommand } from './nonExtendedCommand.js';
let NonExtendedTestCommandCommandHandler = class NonExtendedTestCommandCommandHandler extends IHandler {
    constructor() {
        super(...arguments);
        this.ReturnsExample = "I'll return a string like this one";
    }
    async Handle(command) {
        try {
            //Complicated logic goes here.....
            return Promise.resolve(command.doNothing);
        }
        catch (error) {
            return Promise.resolve({ error: "some error" });
        }
    }
};
NonExtendedTestCommandCommandHandler = __decorate([
    CommandHandler(NonExtendedTestCommand)
], NonExtendedTestCommandCommandHandler);
export { NonExtendedTestCommandCommandHandler };
