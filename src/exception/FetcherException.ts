interface IResponse<TArgs = unknown> {
    message: string
    code?: string | undefined
    args?: TArgs
    path?: string
}

export default class FetcherException<TArgs = unknown> extends Error {
    public readonly code;
    public readonly args: TArgs;
    public readonly path;

    constructor(
        private readonly response: IResponse<TArgs>,
    ) {
        super(response.message);
        this.code = response.code;
        this.args = response.args as TArgs;
        this.path = response.path;

        Object.setPrototypeOf(this, FetcherException.prototype);
    }
}
