import {IPaginateInfo, IPaginateMeta} from '@acrool/react-table';



export type IFetchPagination<T = any> = IFetchPagination2<T> | IFetchPagination3<T>;

export interface IFetchPagination2<T = any> {
    paginateMeta: IPaginateMeta
    searchField?: T
    isUsePreMeta?: false
}
export interface IFetchPagination3<T = any> {
    paginateMeta?: IPaginateMeta
    searchField?: T
    isUsePreMeta: true
}

export interface IFetchPaginationSuccess<T> {
    rows: T[]
    meta: IPaginateMeta
    info: IPaginateInfo
}

export interface ICreateDataPayload<T> {
    formData: T
}
export interface IUpdateDataPayload<T> {
    id: number
    formData: T
}
export interface IUpdateFieldPayload {
    id: number
    fieldName: string
    fieldValue: string|number|boolean
}
export interface IUpdateEstimateDatePayload {
    id: number
    startDate: string
    endDate: string
}
export interface IAddAssignMemberPayload {
    id: number
    memberId: number
}


export interface IRemoveAssignMemberPayload {
    id: number
    memberId: number
}
export interface IUpdateAssignMemberPayload {
    id: number
    memberId?: number
}
export interface IUpdateAssignTesterPayload {
    id: number
    memberId?: number
}
export interface IUpdateDevicesPayload {
    id: number
    deviceIds: number[]
}

export interface IDeleteRowPayload {
    id: number
    callBack?: () => void
}
export interface IDeletePayload {
    ids: number[]
    callBack?: () => void
}
export interface IFailPayload {
    message: string
}
export interface IFetchCurrentPayload {
    id: number
}
export interface IFetchCurrentSuccessPayload<T> {
    data: T
}

