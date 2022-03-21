import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Vacations } from './item.entity';
import { ItemsController } from './items.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'tourist',
    entities: [Vacations],
    synchronize: true
  }),
  TypeOrmModule.forFeature([Vacations])
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule { }
