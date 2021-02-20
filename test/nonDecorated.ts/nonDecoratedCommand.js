import { ICommand } from '../../src/index.js';
export class NonDecoratedTestCommand extends ICommand {
    constructor() {
        super(...arguments);
        this.doNothing = "I'm going to throw";
    }
}
