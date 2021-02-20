import { IHandler } from '../../src/index.js';
import {  CommandHandler } from '../../src/decorators.js';
import { NonExtendedTestCommand } from './nonExtendedCommand.js';

@CommandHandler(NonExtendedTestCommand)
export class NonExtendedTestCommandCommandHandler extends IHandler<NonExtendedTestCommand, string, { error: string }> {
    protected ReturnsExample: string = "I'll return a string like this one";

    async Handle(command: NonExtendedTestCommand): Promise<string | { error: string }> {

        try {
            //Complicated logic goes here.....
            return Promise.resolve(command.doNothing);
        } catch (error) {

            return Promise.resolve({ error: "some error" });
        }
    }
}