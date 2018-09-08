import { UserCategory } from './../interface'

export default class ModifyDto {
    readonly _id: string
    readonly account: string
    readonly category: UserCategory
}
