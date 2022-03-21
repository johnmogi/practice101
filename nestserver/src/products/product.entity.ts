import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class products {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: number;

    @Column()
    description: string;

    @Column()
    expiry: Date;

    // @Column()
    // updated_at: Date;

    // @Column()
    // published_at: Date;

    // @Column()
    // created_by_id: number;

    // @Column()
    // updated_by_id: number;

}