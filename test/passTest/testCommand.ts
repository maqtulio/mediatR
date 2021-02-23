import { ICommand } from '../../src/index';
import { Command } from '../../src/decorators';

@Command()
export class DecoratedTestCommand extends ICommand {
    public doNothing: string = "Please do nothing"
}
