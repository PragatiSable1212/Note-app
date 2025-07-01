import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './tasks/tasks';

@Module({
  imports: [TasksModule,TypeOrmModule.forRoot({
      type: 'mysql',            // or 'postgres'
      host: 'localhost',
      port: 3306,               // 5432 for PostgreSQL
      username: 'root',         // your DB username
      password: 'root',     // your DB password
      database: 'demo1',       // your DB name
      entities: [Tasks],
      synchronize: true,        // auto-create tables (off in prod)
    }),TasksModule],

  controllers: [],
  providers: [],
 
})
export class AppModule {}
