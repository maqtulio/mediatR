import { MediatR } from '../src/index.js';
import { DecoratedTestCommand } from './passTest/testCommand.js';
import assert from 'assert';
import { registeredHandlers } from '../src/decorators.js';
import { registerHandlers } from '../src/index.js';
describe('Pass test on handlers', function () {
    it('should register 1 handlers', async function () {
        await registerHandlers("./test/passTest/");
        assert.deepStrictEqual(Object.keys(registeredHandlers).length, 1);
    });
    it('should process a command', async function () {
        await registerHandlers("./test/passTest/");
        const command = new DecoratedTestCommand();
        const response = await (new registeredHandlers[DecoratedTestCommand.name]()).Handle(command);
        assert.deepStrictEqual(command.doNothing, response);
    });
    it('should process a command', async function () {
        await registerHandlers("./test/passTest/");
        const mediator = new MediatR();
        const command = new DecoratedTestCommand();
        const response = await mediator.Send(command);
        assert.deepStrictEqual(command.doNothing, response);
    });
});
