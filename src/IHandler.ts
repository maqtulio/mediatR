export abstract class IHandler<C, R, E>{
    /**
     * Handle
     */
    abstract Handle(command: C): Promise<R | E>;
}
