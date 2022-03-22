import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    published_at: Date;

    @Column()
    created_by_id: number;

    @Column()
    updated_by_id: number;

}