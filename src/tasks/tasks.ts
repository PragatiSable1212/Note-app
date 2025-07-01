import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    status: string;

    // Getters
    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getStatus(): string {
        return this.status;
    }

    public setId(id: string) {
        this.id = id;
    }
    public setDescription(description: string) {
        this.description = description;
    }
    public setTitle(title: string) {
        this.title = title;
    }

    public setStatus(status: string) {
        this.status = status;
    }

}
