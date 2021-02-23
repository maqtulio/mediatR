import { IHandler } from '../../src/index';
import {  CommandHandler } from '../../src/decorators';
import { NonExtendedTestCommand } from './nonExtendedCommand';

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