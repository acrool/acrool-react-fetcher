interface IResponse {
    message: string
    code?: string | undefined
    args?: unknown
    path?: string
}

export default class FetcherException extends Error {
    public readonly code;
    public readonly devInfo: any;
    public readonly args;
    public readonly path;

    constructor(
        private readonly response: IResponse,
    ) {
        super(response.message);
        this.code = response.code;
        this.args = response.args;
        this.path = response.path;

        Object.setPrototypeOf(this, FetcherException.prototype);
    }
}
