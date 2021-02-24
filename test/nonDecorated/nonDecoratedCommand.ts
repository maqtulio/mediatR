import { ICommand } from '../../src/index';


export class NonDecoratedTestCommand extends ICommand {
    public doNothing: string = "I'm going to throw"
}
