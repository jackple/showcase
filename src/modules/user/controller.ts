import { Get, Post, Body, Query, Controller } from '@nestjs/common'

import UserService from './service'
import CreateDto from './dto/create.dto'
import ModifyDto from './dto/modify.dto'
import DeleteDto from './dto/delete.dto'
import SearchDto from './dto/search.dto'

@Controller('user')
export default class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(@Query() searchDto: SearchDto) {
        return this.userService.findAll(searchDto)
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
