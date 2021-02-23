import { IHandler } from '../../src/index';
import { CommandHandler } from '../../src/decorators';
import { DecoratedTestCommand } from './testCommand';



@CommandHandler(DecoratedTestCommand)
export class DecoratedTestCommandHandler extends IHandler<DecoratedTestCommand, string, { error: string }> {
    protected ReturnsExample: string = "I'll return a string like this one";

    async Handle(command: DecoratedTestCommand): Promise<string | { error: string }> {

        try {
            //Complicated logic goes here.....
            return Promise.resolve(command.doNothing);
        } catch (error) {

            return Promise.resolve({ error: "some error" });
        }
    }
}