import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Posts } from './post.entity';
import { ItemsController } from './posts.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'strapi2',
    entities: [Posts],
    synchronize: true
  }),
  TypeOrmModule.forFeature([Posts])
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule { }
