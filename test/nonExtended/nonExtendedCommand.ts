import { Command } from '../../src/decorators';

@Command()
export class NonExtendedTestCommand {
    public doNothing: string = "Please do nothing"
}
