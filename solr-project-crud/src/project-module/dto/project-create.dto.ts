import { IsEnum, IsInt, IsString } from 'class-validator';
import { IsDateCorrect } from 'src/pipe/date-validation.pipe';
import { ProductType } from 'src/project-module/enum';

export class ProjectCreateDto {
    
    @IsInt()
    customerId: number;

    @IsDateCorrect('constructionDate')
    @IsString()
    constructionDate: Date;

    @IsEnum(ProductType)
    productId: ProductType;

    @IsInt()
    count: number;
  }