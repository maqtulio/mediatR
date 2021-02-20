import "reflect-metadata";

export const RegisteredHandlers: { [key: string]: any } = {};
export const RegisteredCommands: { [key: string]: any } = {};

/**
 * @name commandClass CommandClass used on the handler to be decorated. 
 */
export const CommandHandler = (commandClass: any) => {
    return function (target: any) {
        RegisteredHandlers[commandClass.name] = target;
    };
};

/**
 * @summary Command decorator. 
 */
export const Command = () => {
    return function (target: any) {
        RegisteredCommands[target.name] = target;
    };
};