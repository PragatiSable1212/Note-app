import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskDao } from 'src/task-entity/task-dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './tasks';

@Module({
  imports: [TypeOrmModule.forFeature([Tasks])],
  controllers: [TasksController],
  providers: [TasksService,TaskDao]
})
export class TasksModule {}
