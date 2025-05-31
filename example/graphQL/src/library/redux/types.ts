export interface ITypedSelector<TState> {
    <TSelected>(
        selector: (state: TState) => TSelected,
    ): TSelected
}
