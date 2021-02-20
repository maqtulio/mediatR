import "reflect-metadata";

export const RegisteredHandlers: { [key: string]: any } = {};

/**
 * @name commandClass CommandClass used on the handler to be decorated. 
 */
export const CommandHandler = (commandClass: any) => {
    return function (target: any) {
        RegisteredHandlers[commandClass.name] = target;
    };
};