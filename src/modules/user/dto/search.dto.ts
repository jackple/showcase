import { UserCategory } from './../interface'

export default class SearchDto {
    readonly account: string
    readonly category: UserCategory
    readonly pageIndex: number
    readonly pageSize: number
}
