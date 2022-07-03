import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, NotFoundException, InternalServerErrorException, BadRequestException, ParseIntPipe, Inject, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { ProjectCreateDto } from './dto/project-create.dto';
import { ProjectUpdateDto } from './dto/project-update.dto';
import { ProjectDto } from './dto/project.dto';
import { ProjectService } from './project.service';
import * as moment from 'moment';

@Controller('project')
@UseFilters(new HttpExceptionFilter())
export class ProjectController {
    constructor(public projService: ProjectService) { }

    @Post()
    async create(@Body() createTodoDto: ProjectCreateDto) {
        const project = await this.projService.create(createTodoDto);
        if (!project) {
            throw new InternalServerErrorException();
        }
        return 'Successfully created ' + project.id;
    }

    @Get()
    async findAll() {
        const projects: Array<ProjectDto> = await this.projService.findAll()
        return projects
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const project: ProjectDto = await this.projService.findOne(id);
        if (!project) {
            throw new NotFoundException('Project Id not found');
        }
        return project;
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() body: ProjectUpdateDto) {
        // if(body.orderDate && !moment(body.orderDate.toString(), 'YYYY-MM-DD', true).isValid()){
        //     throw new BadRequestException('Date should be in YYYY-MM-DD format');
        // }
        const updatedProject: any = await this.projService.update(id, body);
        if(!updatedProject || updatedProject.raw?.length == 0){
            throw new InternalServerErrorException();
        }
        return updatedProject.raw[0] as ProjectDto;
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        let result = await this.projService.delete(id);
        if(!result || result && result.affected != 1){
            throw new NotFoundException('Project Id not found');
        }
        return 'Successfully deleted';
    }
}
