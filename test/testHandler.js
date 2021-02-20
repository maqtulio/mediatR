var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IHandler } from '../src/IHandler.js';
import { CommandHandler } from '../src/decorators.js';
export class TestCommand {
    constructor() {
        this.doNothing = "Please do nothing";
    }
}
let TestCommandHandler = class TestCommandHandler extends IHandler {
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
TestCommandHandler = __decorate([
    CommandHandler(TestCommand)
], TestCommandHandler);
export { TestCommandHandler };