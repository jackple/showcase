import { Get, Post, Body, Controller } from '@nestjs/common'

import UserService from './service'
import CreateDto from './dto/create.dto'
import ModifyDto from './dto/modify.dto'
import DeleteDto from './dto/delete.dto'

@Controller('user')
export default class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Post('create')
    create(@Body() body: CreateDto) {
        return this.userService.create(body)
    }

    @Post('modify')
    modify(@Body() body: ModifyDto) {
        return this.userService.modify(body)
    }

    @Post('delete')
    delete(@Body() body: DeleteDto) {
        return this.userService.delete(body)
    }
}
