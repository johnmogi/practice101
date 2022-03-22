import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePostDto } from "./create-item.dto";
import { Posts } from "./post.entity";

@Controller('/api/posts')
export class ItemsController {
    constructor(
        @InjectRepository(Posts)
        private readonly repository: Repository<Posts>
    ) { }

    @Get()
    async findAll() {
        return await this.repository.find()
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return await this.repository.findOne(id)
    }

    @Post()
    async create(@Body() input: CreatePostDto) {
        return await this.repository.save({
            ...input,
            // when: new Date(input.when)
        });
    }

}