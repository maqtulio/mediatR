import { IHandler } from '../../src/index';
import { CommandHandler } from '../../src/decorators';
import { NonDecoratedTestCommand } from './nonDecoratedCommand';

@CommandHandler(NonDecoratedTestCommand)
export class NonDecoratedTestCommandCommandHandler extends IHandler<NonDecoratedTestCommand, string, { error: string }> {

    async Handle(command: NonDecoratedTestCommand): Promise<string | { error: string }> {

        try {
            //Complicated logic goes here.....
            return Promise.resolve(command.doNothing);
        } catch (error) {
            return Promise.resolve({ error: "some error" });
        }
    }
}