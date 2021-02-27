import { ICommand } from '../../src/index';
import { Command } from '../../src/decorators';

@Command()
export class DecoratedTestCommand extends ICommand<string> {
    public doNothing: string = "Please do nothing"
}
