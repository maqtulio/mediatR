import assert from 'assert';
import { MediatR } from '../src/index.js';
import { registerHandlers } from '../src/index.js';
import { NonDecoratedTestCommand } from './nonDecorated.ts/nonDecoratedCommand.js';
describe('Fail test on handlers', function () {
    it('should throw an error on non decorated command', async function () {
        await registerHandlers("./test/nonDecorated");
        const mediator = new MediatR();
        const command = new NonDecoratedTestCommand();
        assert.rejects(() => mediator.Send(command));
    });
    it('should throw an error on non extended command', async function () {
        assert.rejects(() => registerHandlers("./test/nonExtended"));
    });
});
