import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateItemDto } from "./create-item.dto";
import { Vacations } from "./item.entity";

@Controller('/api/items')
export class ItemsController {
    constructor(
        @InjectRepository(Vacations)
        private readonly repository: Repository<Vacations>
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
    async create(@Body() input: CreateItemDto) {
        return await this.repository.save({
            ...input,
            // when: new Date(input.when)
        });
    }

}