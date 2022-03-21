0. nest new nestserver
https://github.com/piotr-jura-udemy/master-nest-js/tree/01-07-dto-update/src

0. items.controller.ts:
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { CreateItemDto } from './create-item.dto';
import { UpdateItemDto } from "./update-item.dto";
@Controller('/items')
export class ItemsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'First item' },
      { id: 2, name: 'Second item' }
    ];
  }
  @Get(':id')
  findOne(@Param('id') id) {
    return { id: 1, name: 'First item' }
  }
  @Post()
  create(@Body() input: CreateItemDto) {
    return input;
  }
  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateItemDto) {
    return input;
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) { }
}

# note - backup DB before connection - there's a flush somewhere...
0. typeorm/mysql:
npm i --save @nestjs/typeorm typeorm mysql
app.module.ts:
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'strapi1',
    entities: [Item],
    synchronize: true
  }),
  TypeOrmModule.forFeature([Item])
],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})

0. import { PartialType } from "@nestjs/mapped-types";
import { CreateEventDto } from './create-event.dto';
export class UpdateEventDto extends PartialType(CreateEventDto) { }

0. CORS:
const app = await NestFactory.create(AppModule);
app.enableCors();
await app.listen(3000);




0. 