import { Injectable } from '@nestjs/common';
import { TaskDao } from 'src/task-entity/task-dao';
import { Tasks } from './tasks';

@Injectable()
export class TasksService {
    taskEntity: TaskDao;

    constructor( taskEntity: TaskDao)
    {
        this.taskEntity = taskEntity;
    }

    saveTask(tasks: Tasks){
         this.taskEntity.createTask(tasks)
       //  return "Task created successfully";
    }
    getTasks(): Promise<Tasks[]> {
        return this.taskEntity.getTasks();
    }
    getTaskById(id: string): Promise<Tasks | null> {
        return this.taskEntity.getTaskBYId(id);
    }
}
