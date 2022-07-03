import { IsEnum, IsInt, IsString } from 'class-validator';
import { IsDateCorrect } from 'src/pipe/date-validation.pipe';
import { ProductType } from '../enum';

export class ProjectUpdateDto {
    
    @IsDateCorrect('orderDate')
    @IsString()
    orderDate: Date;

    @IsEnum(ProductType)
    productId: ProductType;

    @IsInt()
    count: number;
  }