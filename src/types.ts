
// export type TOfNull<T> = T;


export interface IFetcherOption<T>  {
    value: T;
    text: string;
    avatarUrl?: string,
    color?: string,
}


// export interface IFetcherGroupOption<T>  {
//     groupName: string,
//     children: IFetcherOption<T>[],
// }
export interface IFetcherGroupOption<T>  {
    groupName: string,
    children: IFetcherOption<T>[],
}
// export interface IFetcherGroupOption<T> {
//     groupName: string,
//     children: Array<{
//         text: string,
//         value: T,
//         avatarUrl?: string,
//         color?: string
//     }>
// }

export type TOption<T> = IFetcherOption<T> | IFetcherGroupOption<T>
// export type TOption<T> = IFetcherOption<TOfNull<T>>[] | IFetcherGroupOption<TOfNull<T>>[]

