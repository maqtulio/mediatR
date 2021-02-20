import "reflect-metadata";
export const RegisteredHandlers = {};
/**
 * @name commandClass CommandClass used on the handler to be decorated.
 */
export const CommandHandler = (commandClass) => {
    return function (target) {
        RegisteredHandlers[commandClass.name] = target;
    };
};
