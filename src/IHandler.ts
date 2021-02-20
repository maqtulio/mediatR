export abstract class IHandler<C, R, E>{
    protected readonly abstract ReturnsExample: R;
    /**
     * Handle
     */
    abstract Handle(command: C): Promise<R | E>;
}
