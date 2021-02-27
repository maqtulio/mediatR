import { ICommand } from '../../src/index';


export class NonDecoratedTestCommand extends ICommand<string> {
    public doNothing: string = "I'm going to throw"
}
