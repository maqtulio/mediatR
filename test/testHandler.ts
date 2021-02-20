import { IHandler } from '../src/IHandler.js';
import { ICommand } from '../src/ICommand.js';

import { Command, CommandHandler } from '../src/decorators.js';

@Command()
export class TestCommand extends  ICommand{
    public doNothing: string = "Please do nothing"
}

@CommandHandler(TestCommand)
export class TestCommandHandler extends IHandler<TestCommand, string, { error: string }> {
    protected ReturnsExample: string = "I'll return a string like this one";

    async Handle(command: TestCommand): Promise<string | { error: string }> {

        try {
            //Complicated logic goes here.....
            return Promise.resolve(command.doNothing);
        } catch (error) {

            return Promise.resolve({ error: "some error" });
        }
    }
}