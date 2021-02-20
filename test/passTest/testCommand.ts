import { ICommand } from '../../src/index.js';
import { Command } from '../../src/decorators.js';

@Command()
export class DecoratedTestCommand extends ICommand {
    public doNothing: string = "Please do nothing"
}
