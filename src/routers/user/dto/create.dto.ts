import { UserCategory } from './../interface'

export default class CreateDto {
    readonly account: string
    readonly password: string
    readonly category: UserCategory
}
