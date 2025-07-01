import { Body, Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('tasks')
export class TasksController 
{
    tasksService: TasksService;
    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }
    @Post('/create')
    createTask(@Body() tasks: Tasks)
    {
         console.log('Hello from NestJS!');
   
       const a = this.tasksService.saveTask(tasks);
         //return "Task created successfully";
         if (a!=null) {
            return { message: "Task created successfully" };
         }
         else {
            return { message: "Task creation failed" };
         }
    }
    @Get()
    getTask():Promise<Tasks[]>
    {
        console.log('Hello from NestJS!');
        return this.tasksService.getTasks();
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Tasks | null>
    {
        return this.tasksService.getTaskById(id);
    }
}
