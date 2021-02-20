import { MediatR } from './../src/index.js';
import { TestCommand } from './testHandler.js';
import assert from 'assert';
import { RegisteredHandlers } from '../src/decorators.js';
import { registerHandlers } from '../src/index.js';
describe('Testing handlers', function () {
    it('should register one handler', async function () {
        await registerHandlers("./test");
        assert.deepStrictEqual(Object.keys(RegisteredHandlers).length, 1);
    });
    it('should process a command', async function () {
        await registerHandlers("./test");
        const command = new TestCommand();
        const response = await (new RegisteredHandlers[TestCommand.name]()).Handle(command);
        assert.deepStrictEqual(command.doNothing, response);
    });
    it('should process a command', async function () {
        await registerHandlers("./test");
        const mediator = new MediatR();
        const command = new TestCommand();
        const response = await mediator.Send(command);
        assert.deepStrictEqual(command.doNothing, response);
    });
});
