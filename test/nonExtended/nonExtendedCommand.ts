import { Command } from '../../src/decorators.js';

@Command()
export class NonExtendedTestCommand {
    public doNothing: string = "Please do nothing"
}
