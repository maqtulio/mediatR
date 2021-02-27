import { MediatR } from '../src/index';
import { DecoratedTestCommand } from './passTest/testCommand';
import assert from 'assert';
import { registeredHandlers } from '../src/decorators';
import { registerHandlers } from '../src/index';

describe('Pass test on handlers', function () {
    it('should register 1 handlers', async function () {
        await registerHandlers(__dirname + '/passTest');
        assert.deepStrictEqual(Object.keys(registeredHandlers).length, 1);
    });

    it('should process a command', async function () {
        await registerHandlers(__dirname + '/passTest');
        const command = new DecoratedTestCommand();
        const response = await new registeredHandlers[DecoratedTestCommand.name]().Handle(command);
        assert.deepStrictEqual(command.doNothing, response);
    });

    it('should process a command', async function () {
        await registerHandlers(__dirname + '/passTest');
        const mediator = new MediatR();
        const command = new DecoratedTestCommand();
        const response = await mediator.Send<string>(command);
        assert.deepStrictEqual(command.doNothing, response);
    });
});
