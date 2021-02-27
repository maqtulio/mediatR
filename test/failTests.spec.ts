import assert from 'assert';
import { MediatR } from '../src/index';
import { registerHandlers } from '../src/index';
import { NonDecoratedTestCommand } from './nonDecorated/nonDecoratedCommand';

describe('Fail test on handlers', function () {
    it('should throw an error on non decorated command', async function () {
        await registerHandlers(__dirname + './');
        const mediator = new MediatR();
        const command = new NonDecoratedTestCommand();
        assert.rejects(() => mediator.Send<string>(command));
    });

    it('should throw an error on non extended command', async function () {
        assert.rejects(() => registerHandlers(__dirname + './'));
    });
});
