import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vacations {
    @PrimaryGeneratedColumn()
    vacationID: number;

    @Column()
    description: string;

    // @Column()
    // age: number;

    // @Column()
    // created_at: Date;

    // @Column()
    // updated_at: Date;

    // @Column()
    // published_at: Date;

    // @Column()
    // created_by_id: number;

    // @Column()
    // updated_by_id: number;

}