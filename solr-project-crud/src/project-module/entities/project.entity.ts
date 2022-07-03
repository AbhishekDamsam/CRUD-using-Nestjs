import { IsDefined } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Project'})
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDefined({ always: true })
    customerId: string;

    @Column({ type: 'date' })
    @IsDefined({ always: true })
    constructionDate: string;

    @Column()
    @IsDefined({ always: true })
    productId: number;

    @Column()
    @IsDefined({ always: true })
    count: number;

    @Column({ type: 'date', nullable: true })
    orderDate: string;
}
