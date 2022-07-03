import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { ProjectCreateDto } from './dto/project-create.dto';
import { ProjectDto } from './dto/project.dto';
import { ProjectUpdateDto } from './dto/project-update.dto';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private projRepository: Repository<ProjectDto>,
    ) { }

    create(project: ProjectCreateDto): Promise<ProjectDto> {
        return this.projRepository.save(
            this.projRepository.create(project)
        );
    }
    findAll(): Promise<ProjectDto[]> {
        return this.projRepository.find();
    }
    findOne(id: number): Promise<ProjectDto> {
        return this.projRepository.findOne({
            where: { id }
        });
    }
    update(id: number, data: ProjectUpdateDto): Promise<any> {
        return this.projRepository
            .createQueryBuilder()
            .update()
            .set(data)
            .where('id = :id', { id })
            .returning('*')
            .execute()
    }
    delete(id: number): Promise<any> {
        return this.projRepository
            .createQueryBuilder()
            .delete()
            .from(Project)
            .where('id = :id', { id })
            .execute()
    }
}
