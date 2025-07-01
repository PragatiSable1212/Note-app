import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tasks } from "src/tasks/tasks";
import { Repository } from "typeorm";

@Injectable()
export class TaskDao {

    constructor(
        @InjectRepository(Tasks)
        private taskRepository: Repository<Tasks>,
    ) {}
    createTask(tasks:Tasks)
    {
         this.taskRepository.save(tasks);
         
    }
    getTasks(): Promise<Tasks[]>{
       
        return this.taskRepository.find();
    }

    getTaskBYId(id: string): Promise<Tasks | null>{
        return this.taskRepository.findOneBy({ id });
    }
}